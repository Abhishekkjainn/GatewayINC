import { useState, useEffect } from 'react';
import './App.css';
import './pages.css';
import Header from './header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Page9 from './pages/page9';
import Homepage from './mainpage';
import Canada from './subpages/Canada';
import USApage from './subpages/USA';
import Gallery from './pages/gallery';
import UK from './subpages/Uk';
import Australia from './subpages/Australia';
import Germany from './subpages/Germany';
import Ireland from './subpages/Ireland';
import IELTS from './subpages/ieltspage';
import TOEFL from './subpages/toeflpage';
import PET from './subpages/PET';
import Eligibility from './header/Eligibility';
import SOPLOR from './subpages/SOPwriting';
import Accomodation from './subpages/Accomodation';
import ForexServices from './subpages/Forex';
import Visa from './subpages/Visa';
import AirTickets from './subpages/Airtickets';
import EducationLoan from './subpages/Educationloan';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from './firebase';

function App() {
  const [homeData, setHomeData] = useState({});
  const [canadaData, setCanadaData] = useState({}); // data object to store fetched data

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(
        collection(firestore, 'DynamicFirebase')
      );
      querySnapshot.forEach((doc) => {
        if (doc.id === 'Homepage') {
          setHomeData(doc.data()); // Set the data for Homepage
        }
        if (doc.id === 'Canadapage') {
          setCanadaData(doc.data()); // Set the data for Homepage
        }
      });
    };

    fetchData();
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage homeData={homeData} />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route
          path="/canada"
          element={<Canada canadaData={canadaData} homeData={homeData} />}
        />
        <Route path="/usa" element={<USApage />} />
        <Route path="/uk" element={<UK />} />
        <Route path="/australia" element={<Australia />} />
        <Route path="/germany" element={<Germany />} />
        <Route path="/ireland" element={<Ireland />} />
        <Route path="/ielts" element={<IELTS />} />
        <Route path="/toefl" element={<TOEFL />} />
        <Route path="/pte" element={<PET />} />
        <Route path="/check-your-eligibility" element={<Eligibility />} />
        <Route path="/SOP-LOR-Writing" element={<SOPLOR />} />
        <Route path="/accomodation" element={<Accomodation />} />
        <Route path="/forex" element={<ForexServices />} />
        <Route path="/visa" element={<Visa />} />
        <Route path="/air-tickets" element={<AirTickets />} />
        <Route path="/education-loan" element={<EducationLoan />} />
      </Routes>
      <Page9 />
    </Router>
  );
}

export default App;
