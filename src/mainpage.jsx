import { useState, useEffect } from 'react';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Page4 from './pages/page4';
import Page5 from './pages/page5';
import Page6 from './pages/page6';
import Page7 from './pages/page7';
import Page8 from './pages/page8';
import Page2alt from './pages/page2alt';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from './firebase';

export default function Homepage() {
  const [homeData, setHomeData] = useState({}); // data object to store fetched data

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(
        collection(firestore, 'DynamicFirebase')
      );
      querySnapshot.forEach((doc) => {
        if (doc.id === 'Homepage') {
          setHomeData(doc.data()); // Set the data for Homepage
        }
      });
    };

    fetchData();
  }, []);

  return (
    <>
      <Page1 homeData={homeData} />
      <Page3 homeData={homeData} />
      <Page2alt homeData={homeData} />
      <Page4 homeData={homeData} />
      <Page5 homeData={homeData} />
      <Page6 homeData={homeData} />
      <Page7 homeData={homeData} />
      <Page8 homeData={homeData} />
    </>
  );
}
