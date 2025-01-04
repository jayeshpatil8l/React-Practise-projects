import { useEffect, useState } from 'react';
import './styles.css'

const LoadProducts = () => {
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);


    async function fetchProducts(){
        
        try{
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count * 20}`);
            const data = await response.json();
            

            if(data && data.products && data.products.length){
                setProducts(()=> [...products, ...data.products]);
                console.log("Data Fetched!");
                
            }

        } catch(e){
            console.log(e.message);
        } 
        finally{
            setLoading(false);
        }
    }
    
    useEffect(() => {
        fetchProducts();
    }, [count])

    if(loading){
        return (
            <div style={{
                display:'flex',
                justifyContent:'center'
            }}> Loading Data! Please Wait!</div>
        )
    }

    return (
        <div className='main'>
            <div className='product-container'>
                {products && products.length ?
                products.map((product, index) => (
                    <div key = {product.id} className='product'>
                        <img 
                            className='product-image'
                            src = {product.thumbnail}
                            alt = {product.title}
                        />
                        <p>{product.title}</p>
                    </div>
                ))
                :null}
            </div>
            <div className='button-container'>
                <button 
                    disabled = {products && products.length >= 100} 
                    onClick={() => setCount(count + 1)}
                    className='load-button'
                > Load more Products</button>
                {products && products.length >= 100 ? <p>You have fetched maximum products!</p>:null}
            </div>
        </div>
    );
}

export default LoadProducts;