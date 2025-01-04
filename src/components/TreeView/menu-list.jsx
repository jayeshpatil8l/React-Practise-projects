import MenuItem from "./menu-item";

export default function MenuList({list = []}){
    return (
        <ul key = {list.label}className="menu-list=container">
            {
                list && list.length ?
                list.map(element => <MenuItem item = {element}/>)
                : null
            }
        </ul>
    );
}