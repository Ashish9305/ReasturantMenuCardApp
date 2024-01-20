import React from 'react'

const Navbar = ({filterItem , menuList}) => {
  return (
    <>
    <nav className="navbar">
        <div className='btn-group'> 

          
          {
            menuList.map( (curElem) => {
                return (
                    <button 
                        className="btn-group__item" onClick={() => filterItem(curElem)}>
                        {curElem}
                        </button>
                )
            })
          }


            {/* if you are passing argument while calling a function beter use fat arrow function
             before to avoid multiple calling otherwise it will create a lots of error */}


            {/* <button className="btn-group__item" onClick={() => filterItem("breakfast")}>Breakfast</button>
            <button className="btn-group__item" onClick={() => filterItem("lunch")}>Lunch</button>
            <button className="btn-group__item" onClick={() => filterItem("evening")}>Evening</button>
            <button className="btn-group__item" onClick={() => filterItem("dinner")}>Dinner</button> */}
            {/* <button className="btn-group__item" onClick={() => setMenuData(Menu)}>All</button> */}

        </div>

    </nav>
    </>
  )
}

export default Navbar;
