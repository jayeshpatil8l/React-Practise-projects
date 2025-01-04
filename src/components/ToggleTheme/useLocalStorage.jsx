import { useEffect, useState } from "react";


export default function useLocalStorage(key, defaultValue) {
    const [value, setValue] = useState(() => {

        let current;

        try{
            current = localStorage.getItem(key) || defaultValue;
        } catch(error){
            console.log(error);
            current = defaultValue;
        }

        return current;
    })

    useEffect(() => {
        localStorage.setItem(key, value);
    },[value])

    return [value, setValue]
}