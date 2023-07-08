import { useState, useEffect } from "react";
import NewsSection from "./components/NewsSection";
import SideBarNews from "./components/SideBarNews";
import Nav from "./components/Nav.jsx";
import "./scss/App.scss";

function App() {
  const categoriesList = [

    { name: "regional", state: true },
    { name: "technology", state: false },
    { name: "lifestyle", state: false },
    { name: "business", state: false },
    { name: "general", state: false },
    { name: "programming", state: false },
    { name: "science", state: false },
    { name: "entertainment", state: false },
    { name: "world", state: false },
    { name: "sports", state: false },
    { name: "finance", state: false },
    { name: "academia", state: false },
    { name: "politics", state: false },
    { name: "health", state: false },
    { name: "opinion", state: false },
    { name: "food", state: false },
    { name: "game", state: false },
    { name: "fashion", state: false },
    { name: "academic", state: false },
    { name: "crap", state: false },
    { name: "travel", state: false },
    { name: "culture", state: false },
    { name: "economy", state: false },
    { name: "environment", state: false },
    { name: "art", state: false },
    { name: "music", state: false },
    { name: "notsure", state: false },
    { name: "CS", state: false },
    { name: "education", state: false },
    { name: "redundant", state: false },
    { name: "television", state: false },
    { name: "commodity", state: false },
    { name: "entrepreneur", state: false },
    { name: "review", state: false },
    { name: "auto", state: false },
    { name: "energy", state: false },
    { name: "celebrity", state: false },
    { name: "medical", state: false },
    { name: "gadgets", state: false },
    { name: "design", state: false },
    { name: "EE", state: false },
    { name: "security", state: false },
    { name: "mobile", state: false },
    { name: "estate", state: false },
    { name: "funny", state: false },

  ];
  const regionsList = [
    { region: "Afghanistan", code: "AF" },
    { region: "Argentina", code: "AR" },
    { region: "Asia", code: "ASIA" },
    { region: "Australia", code: "AU" },
    { region: "Austria", code: "AT" },
    { region: "Bangladesh", code: "BD" },
    { region: "Belgium", code: "BE" },
    { region: "Bolivia", code: "BO" },
    { region: "Bosnia", code: "BA" },
    { region: "Brazil", code: "BR" },
    { region: "Canada", code: "CA" },
    { region: "Chile", code: "CL" },
    { region: "China", code: "CN" },
    { region: "Colombia", code: "CO" },
    { region: "Czech Republic", code: "CZ" },
    { region: "Denmark", code: "DK" },
    { region: "Ecuador", code: "EC" },
    { region: "Egypt", code: "EG" },
    { region: "Estonia", code: "EE" },
    { region: "Europe", code: "EU" },
    { region: "Finland", code: "FI" },
    { region: "France", code: "FR" },
    { region: "Germany", code: "DE" },
    { region: "Ghana", code: "GH" },
    { region: "Greece", code: "GR" },
    { region: "Hong Kong", code: "HK" },
    { region: "Hungary", code: "HU" },
    { region: "India", code: "IN" },
    { region: "Indonesia", code: "ID" },
    { region: "International", code: "INT" },
    { region: "Iran", code: "IR" },
    { region: "Iraq", code: "IQ" },
    { region: "Ireland", code: "IE" },
    { region: "Italy", code: "IT" },
    { region: "Japan", code: "JP" },
    { region: "Kenya", code: "KE" },
    { region: "Kuwait", code: "KW" },
    { region: "Lebanon", code: "LB" },
    { region: "Luxembourg", code: "LU" },
    { region: "Malaysia", code: "MY" },
    { region: "Mexico", code: "MX" },
    { region: "Myanmar", code: "MM" },
    { region: "Nepal", code: "NP" },
    { region: "Netherlands", code: "NL" },
    { region: "New Zealand", code: "NZ" },
    { region: "Nigeria", code: "NG" },
    { region: "North Korea", code: "KP" },
    { region: "Norway", code: "NO" },
    { region: "Pakistan", code: "PK" },
    { region: "Palestine", code: "PS" },
    { region: "Panama", code: "PA" },
    { region: "Paraguay", code: "PY" },
    { region: "Peru", code: "PE" },
    { region: "Philippines", code: "PH" },
    { region: "Poland", code: "PL" },
    { region: "Portugal", code: "PT" },
    { region: "Qatar", code: "QA" },
    { region: "Romania", code: "RO" },
    { region: "Russia", code: "RU" },
    { region: "Saudi Arabia", code: "SA" },
    { region: "Serbia", code: "RS" },
    { region: "Singapore", code: "SG" },
    { region: "Slovenia", code: "SI" },
    { region: "South Korea", code: "KR" },
    { region: "Spain", code: "ES" },
    { region: "Sweden", code: "SE" },
    { region: "Switzerland", code: "CH" },
    { region: "Taiwan", code: "TW" },
    { region: "Thailand", code: "TH" },
    { region: "Turkey", code: "TR" },
    { region: "United Arab Emirates", code: "AE" },
    { region: "United Kingdom", code: "GB" },
    { region: "United States", code: "US" },
    { region: "Uruguay", code: "UY" },
    { region: "Venezuela", code: "VE" },
    { region: "Vietnam", code: "VN" },
    { region: "Zimbabwe", code: "ZW" }

  ];
  const [categos, setCategos] = useState(categoriesList),
    [pageNum, setPageNum] = useState(1);
  const recatego = list => {
    setCategos(list);
  }
  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

    if (scrollHeight - scrollTop > clientHeight - 10 && clientHeight > scrollHeight - scrollTop) {
      setPageNum(pageNum + 1);
      console.log(scrollHeight - scrollTop + "==" + clientHeight)

    }
  };
  useEffect(() => {
    localStorage.setItem('categoriesList', categos);
  }, [categos]);
  return (
    <div className="App" onScroll={handleScroll}>

      <Nav categos={categos} regionsList={regionsList} recatego={recatego} />
      <div className="wraper">
        <NewsSection categos={categos} pageNum={pageNum} />
        <SideBarNews categos={categos} pageNum={pageNum} />
      </div>

    </div>
  );
}

export default App;
/*
   <Overview restOverview={restOverview} artic={overviewArtic}/>
     const [overviewArtic, setOverviewArtic] = useState(false),
  restOverview = () => {
          setOverviewArtic(false);
        }
 */

