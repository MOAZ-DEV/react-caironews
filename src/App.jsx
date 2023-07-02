import { useState, useEffect } from "react";
import HotNewsBannersComponent from "./components/HotNewsBannersComponent";
import TopHeadingsComponent from "./components/TopHeadingsComponent.jsx";
import Nav from "./components/Nav.jsx";
import "./scss/App.scss";

function App() {
  const categoriesList = [
    {
      "name": "الأعمال",
      "keywords": ["التمويل", "الأسهم", "الاقتصاد", "الاستثمار", "المال", "السوق"],
      "state": false
    },
    {
      "name": "الترفيه",
      "keywords": ["فيلم", "تلفزيون", "كوميديا", "مسرح", "كتب"],
      "state": false
    },
    {
      "name": "عام",
      "keywords": ["الأخبار", "التعليم", "صحة", "تكنولوجيا", "البيئة", "جريمة", "الدين"],
      "state": true
    },
    {
      "name": "الصحة",
      "keywords": ["الطب", "التغذية", "اللياقة", "الصحة العقلية", "الأمراض والحالات"],
      "state": false
    },
    {
      "name": "العلوم",
      "keywords": ["الفيزياء", "الأحياء", "الكيمياء", "الفضاء", "الرياضيات والإحصاء"],
      "state": false
    },
    {
      "name": "الرياضة",
      "keywords": ["كرة القدم", "كرة السلة", "التنس", "الهوكي", "غولف", "ملاكمة"],
      "state": false
    },
    {
      "name": "التكنولوجيا",
      "keywords": ["الكمبيوتر", "البرمجيات", "الإنترنت", "الهواتف الذكية", "وسائل التواصل الاجتماعي", "أمن المعلومات"],
      "state": false
    },
    {
      "name": "السياسة",
      "keywords": ["الانتخابات", "الحكومة", "العلاقات الدولية", "السياسة الداخلية", "اللجوء والهجرة", "الجيوسياسية", "الإرهاب والأمن القومي"],
      "state": false
    },
    {
      "name": "مصر",
      "keywords": ["الأخبار", "التاريخ", "الثقافة", "الفنون", "الأدب", "الرياضة", "السياحة", "الاقتصاد", "السياسة", "الحكومة"],
      "state": true
    }
  ];
  const [categos, setCategos] = useState(categoriesList),
  [pageNum, setPageNum] = useState(1);
  const recatego = list => {
    setCategos(list);
  }
  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

    if (scrollHeight - scrollTop === clientHeight) {
      setPageNum(pageNum+1);
    }
  };
  useEffect(() => {
    localStorage.setItem('categoriesList', categos);
  }, [categos]);
  return (
    <div className="App" onScroll={handleScroll}>

      <Nav categos={categos} recatego={recatego} />
      <div className="wraper">
        <HotNewsBannersComponent categos={categos} pageNum={pageNum}/>
        <TopHeadingsComponent />
      </div>

    </div>
  );
}

export default App;
/*
        <TopHeadingsComponent Overview={artic => setOverviewArtic(artic)} />
   <Overview restOverview={restOverview} artic={overviewArtic}/>
     const [overviewArtic, setOverviewArtic] = useState(false),
  restOverview = () => {
          setOverviewArtic(false);
        }
 */

