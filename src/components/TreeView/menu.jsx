import MenuList from "./menu-list";


export default function Menu({menu = []}){
    return (
        <div className="menu-container">
            <MenuList list = {menu} />   
        </div>
    )
}