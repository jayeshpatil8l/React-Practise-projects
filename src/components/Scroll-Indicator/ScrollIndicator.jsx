import { useEffect, useState } from "react";
import './scroll.css';

export default function ScrollIndicator({ url }){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);
    const [scrolledPercent, setScrolledPercent] = useState(0);

    async function fetchData(url){
        try {
            setLoading(true);
            const response = await fetch(url);
            const data = await response.json();
            if (data && data.products && data.products.length > 0){
                setData(data.products);
                setLoading(false);
            }   
        }
        catch(e){
            setLoading(false);
            setErrorMsg(e.message);
        }
    }

    function handleScroll(){
        // console.log(
        //     document.body.scrollTop,
        //     document.documentElement.scrollTop,
        //     document.documentElement.scrollHeight,
        //     document.documentElement.clientHeight
        // )

        const scrolled = document.documentElement.scrollTop;

        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setScrolledPercent((scrolled / height) * 100);
        console.log(scrolledPercent);

    }

    useEffect(() => {
        fetchData(url);
    },[url]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll' , () => {});
        }
    },[]);


    if(errorMsg) return <div>{errorMsg}</div>

    if(loading) return (
        <div style={{
            display:'flex',
            justifyContent:'center'
        }}> Loading Data! Please Wait!</div>
    )

    return (<div className="main-container"> 
            <div className="top-container">
                <h2>Custom Scroll Indicator</h2>
                <div className="progress-tracking-container">
                    <div 
                        className="current-progress-bar"
                        style = {{ width: `${scrolledPercent}%`}} > 
                    </div>
                </div>
            </div>
            <div className="data-container">
                {data && data.length > 0 
                ? data.map(item => (<p key = {item.title}>{item.title}</p>))
                :null
                }
            </div>
        </div>);
    
}