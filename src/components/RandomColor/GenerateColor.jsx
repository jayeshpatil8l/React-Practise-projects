import { useEffect, useState } from "react";

const GenerateColor = () => {
    const [typeOfColor, setTypeOfColor] = useState("hex");
    const [color, setColor] = useState('#000000');

    function randomColorUtility(length){ 
        return Math.floor(Math.random() * length);
    }

    function handleGenerateColor(colorType)
    {
        if(colorType === "hex"){
            const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
            let hexColor = '#';
            const len = hex.length;

            for(let i = 0; i < 6; i++)
            {
                hexColor += hex[randomColorUtility(len)];
            }

            setColor(hexColor);
        }
        else if(colorType === "rgb") {
            const r = randomColorUtility(256);
            const g = randomColorUtility(256);
            const b = randomColorUtility(256);

            setColor(`RGB(${r},${g},${b})`);    
        }
    }

    useEffect(() => {
       if(color !== '#000000') handleGenerateColor(typeOfColor);   
    }, [typeOfColor]);

    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            background: color,
            alignItems: "center",
            justifyContent: "center"
          }}>
            <div style = {{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "7px"

            }}>
            <button onClick={() => {
                setTypeOfColor("hex")
                handleGenerateColor(typeOfColor);
                }}> Generate Random Hex Color </button>
            <button onClick={() => {
                setTypeOfColor("rgb")
                handleGenerateColor(typeOfColor);
            }}> Generate Random RGB Color</button>
            {/* <button onClick = {() => handleGenerateColor(typeOfColor)}> Generate Random Color</button> */}
            </div>
            
            <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "20px",
          marginTop: "50px",
          flexDirection  :'column',
          gap :'15px'
        }}>
                <h3>{typeOfColor === "hex" 
                    ? "Hex Color"
                    : "RGB Color"}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    )
}

export default GenerateColor;