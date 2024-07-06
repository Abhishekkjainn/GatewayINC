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
  const [canadaData, setCanadaData] = useState({});
  const [usaData, setUsaData] = useState({}); // data object to store fetched data
  const [ukData, setUkData] = useState({});
  const [australiaData, setAustraliaData] = useState({});
  const [germanyData, setGermanyData] = useState({});
  const [irelandData, setIrelandData] = useState({});
  const [ieltsData, setIeltsData] = useState({});
  const [toeflData, setToeflData] = useState({});
  const [pteData, setPteData] = useState({});
  const [serviceData, setServiceData] = useState({});

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
        if (doc.id === 'Usapage') {
          setUsaData(doc.data()); // Set the data for Homepage
        }
        if (doc.id === 'Ukpage') {
          setUkData(doc.data()); // Set the data for Homepage
        }
        if (doc.id === 'Australiapage') {
          setAustraliaData(doc.data()); // Set the data for Homepage
        }
        if (doc.id === 'Germanypage') {
          setGermanyData(doc.data()); // Set the data for Homepage
        }
        if (doc.id === 'Irelandpage') {
          setIrelandData(doc.data()); // Set the data for Homepage
        }
        if (doc.id === 'Ieltspage') {
          setIeltsData(doc.data()); // Set the data for Homepage
        }
        if (doc.id === 'Toeflpage') {
          setToeflData(doc.data()); // Set the data for Homepage
        }
        if (doc.id === 'Ptepage') {
          setPteData(doc.data()); // Set the data for Homepage
        }
        if (doc.id === 'Servicepage') {
          setServiceData(doc.data()); // Set the data for Homepage
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
        <Route
          path="/usa"
          element={<USApage homeData={homeData} usaData={usaData} />}
        />
        <Route
          path="/uk"
          element={<UK homeData={homeData} ukData={ukData} />}
        />
        <Route
          path="/australia"
          element={
            <Australia homeData={homeData} australiaData={australiaData} />
          }
        />
        <Route
          path="/germany"
          element={<Germany homeData={homeData} germanyData={germanyData} />}
        />
        <Route
          path="/ireland"
          element={<Ireland homeData={homeData} irelandData={irelandData} />}
        />
        <Route
          path="/ielts"
          element={<IELTS homeData={homeData} ieltsData={ieltsData} />}
        />
        <Route
          path="/toefl"
          element={<TOEFL homeData={homeData} toeflData={toeflData} />}
        />
        <Route
          path="/pte"
          element={<PET homeData={homeData} pteData={pteData} />}
        />
        <Route path="/check-your-eligibility" element={<Eligibility />} />
        <Route
          path="/SOP-LOR-Writing"
          element={<SOPLOR homeData={homeData} serviceData={serviceData} />}
        />
        <Route
          path="/accomodation"
          element={
            <Accomodation homeData={homeData} serviceData={serviceData} />
          }
        />
        <Route
          path="/forex"
          element={
            <ForexServices homeData={homeData} serviceData={serviceData} />
          }
        />
        <Route
          path="/visa"
          element={<Visa homeData={homeData} serviceData={serviceData} />}
        />
        <Route
          path="/air-tickets"
          element={<AirTickets homeData={homeData} serviceData={serviceData} />}
        />
        <Route
          path="/education-loan"
          element={
            <EducationLoan homeData={homeData} serviceData={serviceData} />
          }
        />
      </Routes>
      <Page9 />
    </Router>
  );
}

export default App;
