import { useState } from "react"
import { FaMinus, FaPlus } from "react-icons/fa"
import MenuList from "./menu-list"


export default function MenuItem({item}){

    const [currentChildren, setCurrentChildren] = useState({})

    function handleExpand(currentLabel){
        setCurrentChildren({
            ...currentChildren, [currentLabel] : !currentChildren[currentLabel]
        })
    }


    return (
        <li key = {item.label}>
            <div style = {{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '80px',
                    cursor:'pointer'
                }}
                className="menu-item-container">
                <p>{item.label}</p>
                    {
                        item && item.children && item.children.length ?
                        <span onClick = {() => handleExpand(item.label)}>
                            {
                                currentChildren[item.label] ?
                                <FaMinus color = 'black' size = {15}/>
                                : <FaPlus color = 'black' size = {15}/>
                            }
                        </span>
                        :null
                    }
            </div>
            {
                item && item.children && item.children.length && currentChildren[item.label] ?
                <MenuList list = {item.children}/>
                : null       
            }
        </li>
    )
}