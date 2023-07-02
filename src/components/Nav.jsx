import { useState, useEffect } from "react";
import "../scss/App.scss";
import logowebpage from "../assets/logo-webpage.svg";


function Nav(props) {
    const [categories, setCategories] = useState(props.categos);

    function switchState(catego) {
        const updatedCategories = [...categories];
        for (let i = 0; i < updatedCategories.length; i++) {
            if (updatedCategories[i].name === catego) {
                updatedCategories[i].state = !updatedCategories[i].state;
                break;
            }
        }
        setCategories(updatedCategories);
    }


    return (<>
        <div className="nav"  >
            <img src={logowebpage} alt="" />
            <div className="menu">

                {categories.map((category, index) => (
                    (index % 3 === 0) ? <ul key={"id" + index}>{categories.slice(index, index + 3).map((category) => (
                        <li key={category.name} className={category.state ? "active":null} onClick={() => { switchState(category.name); props.recatego(categories) }}>
                            {category.name}
                        </li>
                    ))}</ul> : null
                ))}

            </div>
        </div>
    </>)

};

export default Nav;