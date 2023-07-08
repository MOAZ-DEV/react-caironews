import { useState, useEffect } from "react";
import "../scss/App.scss";
import "../scss/Components.scss";
import logowebpage from "../assets/logo-webpage.svg";
import snippetArrow from "../assets/snippetArrow.svg";
import searchBtn from "../assets/search.svg"

function Nav(props) {
    const [categories, setCategories] = useState(props.categos);
    const [categoriesMenu, setCategoriesMenu] = useState(true);
    const [regionsMenu, setRegionsMenu] = useState({ region: "Egypt", state: true });
    const [languagesMenu, setlanguagesMenu] = useState("Arabic");

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
            <div className="logoDiv"><img src={logowebpage} alt="" /></div>
                <div className="searchBar">
                    <div className="dropDownMenu" onClick={() => !categoriesMenu ? setCategoriesMenu(true) : setCategoriesMenu(false)}>
                        <span>
                            General
                            <img src={snippetArrow} alt="Categories Menu" />
                        </span>
                        <ul className={!categoriesMenu ? "active" : ""}>
                            {categories.map((category) => (
                                <li key={category.name} className={category.state ? "ison" : null}
                                    onClick={() => { switchState(category.name); props.recatego(categories) }}>
                                    {category.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="searchInputWrap">
                        <input type="search" placeholder="Keywords.." name="" id="" />
                        <button type="submit">
                            <img src={searchBtn} alt="Search by keywords." />
                        </button>
                    </div>
                </div>
                <div className="wrap">
                    <div className="dropDownMenu" onClick={() => !regionsMenu ? setRegionsMenu({ region: regionsMenu.region, state: true }) : setRegionsMenu({ region: regionsMenu.region, state: true })}>
                        <span>
                            {regionsMenu.region}
                        </span>
                        <ul className={!regionsMenu.state ? "active" : ""}>
                            {props.regionsList.map((regions) => (
                                <li key={regions.region} className=""
                                    onClick={() => setRegionsMenu({ region: regions.region, code: regions.code })}>
                                    {regions.region}   
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="dropDownMenu" onClick={() => !regionsMenu ? setRegionsMenu({ region: regionsMenu.region, state: true }) : setRegionsMenu({ region: regionsMenu.region, state: true })}>
                        <span>
                            En
                        </span>
                        <ul className={!regionsMenu.state ? "active" : ""}>
                            {props.regionsList.map((regions) => (
                                <li key={regions.region}
                                    onClick={() => setRegionsMenu({ region: regions.region, code: regions.code })}>
                                    {regions.region}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            
        </div>
    </>)

};

export default Nav;
/***/