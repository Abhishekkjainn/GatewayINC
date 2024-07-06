import Page2alt from '../pages/page2alt';
import Page8 from '../pages/page8';
import '../subpages.css';
import { useState, useEffect } from 'react';

export default function Accommodation({ homeData, serviceData }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="canadapage">
      <div className="page1canada page1accomodation">
        <div className="mainheadcanada">
          <div className="underhead">{serviceData.acch1}</div>
          <div className="summarysubpage">{serviceData.accc1}</div>
          <div className="enquirybutton">Send Enquiry</div>
        </div>
      </div>
      <div className="page2canada">
        <div className="page2canadahead">{serviceData.acch2}</div>
        <div
          className="page2canadacontent"
          dangerouslySetInnerHTML={{ __html: serviceData.accc2 }}
        ></div>
      </div>

      <Page2alt homeData={homeData} />
      <Page8 homeData={homeData} />
    </div>
  );
}
