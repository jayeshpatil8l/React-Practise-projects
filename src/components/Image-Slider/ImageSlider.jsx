import { useEffect, useState } from "react";
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'
import './styles.css'

const ImageSlider = ({url, page = '1', limit = 5}) => {

    const [images, setImages] = useState([]);
    const [currentImage, setCurrentImage] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImages(url)
    {
        setLoading(true);

        try {
            const response = await fetch(`${url}?page=${page}&limit=${limit}`);
            const data = await response.json().then(console.log("Data Fetched"));
            

            // await fetch(`${url}?page=${page}&limit=${limit}`)
            //       .then(response => response.json())
            //       .then(data => {
            //         setImages(data);
            //         setLoading(false);
            //         console.log("Data Fetched!")
            //         console.log(data);

            //     })

            if(data){
                setImages(data);
                setLoading(false);
                console.log(data);
            }


        }
        catch(e) {
            setErrorMsg(e.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        if (url !== "") fetchImages(url);
    }, [])

    function handleLeft(){
        setCurrentImage(currentImage === 0 ? images.length - 1: currentImage - 1);
    }

    function handleNext(){
        setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
    }

    if (errorMsg !== null) {
        return <div>Error occured ! {errorMsg}</div>;
      }

    if(loading) return <h3> Loading Data! Please Wait!</h3>


    return (
        <div className="container">
            <BsArrowLeftCircleFill 
                className="arrow arrow-left"
                onClick = {handleLeft}/>
                {images && images.length 
                ? images.map((image, index) => (
                    <img key = {image.id}
                        src = {image.download_url}
                        alt = {image.download_url}
                        className={ currentImage === index ? "current-image": "hide-current-image"}
                    />   
                ))   
                : null
                }
            <BsArrowRightCircleFill 
                className="arrow arrow-right"
                onClick={handleNext}
                />
            <span className="circle-indicators">
                {images && images.length
                ? images.map((_, index) => (
                    <button 
                        key = {index}
                        onClick={() => setCurrentImage(index)}
                        className={ currentImage === index ? "current-indicator": "current-indicator inactive-circle"}
                    />
                ))
                :null
                }
            </span>
        </div>
    )

}

export default ImageSlider;