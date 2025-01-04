import { useEffect, useState } from "react";
import data from './data.js'
import './styles.css'

function Accord(){
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] =useState([]);

    function handleSingleSelection(currentId){
        setSelected(selected === currentId ? null : currentId);
        console.log(enableMultiSelection);
    }

    function handleMultipleSelection(currentId){
        console.log(enableMultiSelection);
        let cpyMultiple = [...multiple];
        const indexOfCurrentId = multiple.indexOf(currentId);
        
        indexOfCurrentId === -1 ? cpyMultiple.push(currentId) : cpyMultiple.splice(indexOfCurrentId, 1);
        console.log(indexOfCurrentId);
        setMultiple(cpyMultiple);
    }

    useEffect(() => {
        enableMultiSelection ? setSelected(null) : setMultiple([])
    },[enableMultiSelection])

    return (
        <>
        <div className = 'wrapper'>
            <button onClick={ () => setEnableMultiSelection(!enableMultiSelection)
            }> 
                {enableMultiSelection ? "Disable" : "Enable"} Multiple Selection
            </button>
            <div className="accordian">
                {data && data.length > 0 ? 
                (
                    data.map(item => (
                        <div className="item">
                            <div onClick = {
                                enableMultiSelection ?
                                    () => handleMultipleSelection(item.id)
                                    :() => handleSingleSelection(item.id)
                                    
                            }className="title">
                                <h3>{item.question}</h3>
                                <span> + </span>
                            </div>
                            {/* //{console.log(enableMultiSelection)} */}
                             {enableMultiSelection? (multiple.indexOf(item.id) !== -1 && <div className="content">
                                {item.answer}
                                </div>)
                            : selected === item.id && (<div className="content">
                                {item.answer}
                            </div>)}  
                        </div>
                    ))
                ):(<div> No content found! </div>)}
            </div>
        </div>
        </>
    )
}

export default Accord;