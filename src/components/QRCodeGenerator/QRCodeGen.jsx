import { useState } from "react";
import {QRCode} from 'react-qr-code';
import './styles.css';

export default function QRCodeGenerator() {
    const [input, setInput] = useState("");
    const [value, setValue] = useState("");

    function handleGenerate(){
        setValue(input);
        setInput('');
    }


    return (
        <div className="root-container">
            <div className="first-container">
                <h1>QR Code Generator</h1>
                <div className="labels-container">
                    <label htmlFor="name" > Name: </label>
                    <input 
                        type = "text"
                        id = "name" 
                        placeholder="Enter your name here" 
                        value = {input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </div>
                <button onClick={handleGenerate} > Generate QR Code </button>
            </div>
            <div className="qr-code-container">
                <QRCode value = {value} size = {300} bgColor = "#fff"/>
            </div>
        </div>
    )
}