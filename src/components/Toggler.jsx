import { useEffect, useState } from "react"

const Toggler = () => {

    const [Dark, setDark] = useState(false);

    function toggleTheme() {
        setDark(!Dark);
        
        // if(Dark) {
        //     document.body.style.backgroundColor = "black";
        //     console.log(Dark);
        // }
        // else {
        //     document.body.style.backgroundColor = "white";
        //     console.log(Dark);
        // }
    }

    useEffect(() => {
        Dark ? document.body.style.backgroundColor = "black" : document.body.style.backgroundColor = "white"
    },[Dark]) 

    return (
        <div className="toggle">
            <button onClick={toggleTheme}> Toggle Theme</button>
        </div>
    )
}

export default Toggler;