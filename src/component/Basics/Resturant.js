import React, {useState} from 'react'
import "./style.css" ;
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard.js"
import Navbar from './Navbar.js';

const uniqueList = [     //here new Set returns unique value which is not being repeted  and ... before new is spread operator which will give pure data in array format
    ...new Set(Menu.map((curElem) => {  return curElem.category;

})
),
"All",
] ;

console.log(uniqueList);



const Resturant = () => {
    //hooks
    const [menuData,setMenuData] = useState(Menu);
    const [menuList,setmenuList] = useState(uniqueList);

    const filterItem = (category) => {

        if(category === "All") {
            setMenuData(Menu);
            return;
        }


        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category ; 
        });
        setMenuData(updatedList);
    }
    
  return (
    <>
    



    <Navbar filterItem={filterItem} menuList={menuList} />
    <MenuCard /*can take any think -> x */ menuData={menuData} />
    </>
  )
}

export default Resturant
