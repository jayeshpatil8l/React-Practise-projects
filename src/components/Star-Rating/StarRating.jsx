import { useState } from "react"
import { FaStar } from "react-icons/fa";
import './styles.css';


const StarRating = ({noOfStars = 5}) => {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(currentIndex){
        setRating(currentIndex);
        console.log("Clicked on :" + currentIndex)
    }

    function handleHover(currentIndex){
        setHover(currentIndex)
        console.log("Hovered on :" + hover)
    }

    function handleLeave(){
        setHover(rating)
        console.log("Left on :" + hover)
    }


    return (
        <div className = "ratings">
            {[...Array(noOfStars)].map((_, index) => {
                index += 1;

                return (<FaStar
                    key = {index}
                    onClick = {() => handleClick(index)}
                    onMouseMove={() => handleHover(index)}
                    onMouseLeave={() => handleLeave()}
                    className={index <= (hover || rating) ? "active" : "inactive"}
                    size = {40}
                />);
            })}
        </div>
    )

}

export default StarRating;