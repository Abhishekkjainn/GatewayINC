import Page2alt from '../pages/page2alt';
import Page8 from '../pages/page8';
import '../subpages.css';
import { useEffect } from 'react';
export default function SOPLOR({ homeData, serviceData }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="canadapage">
      <div className="page1canada page1sop">
        <div className="mainheadcanada">
          {/* <img
            src="lorwriting.jpg"
            alt="Canada"
            className="canadaflagsubpage"
          /> */}
          <div className="underhead">{serviceData.soph1}</div>
          <div className="summarysubpage">{serviceData.sopc1}</div>
          <div className="enquirybutton">Send Enquiry</div>
        </div>
      </div>
      <div className="page2canada">
        <div className="page2canadahead">{serviceData.soph2}</div>
        <div
          className="page2canadacontent"
          dangerouslySetInnerHTML={{ __html: serviceData.sopc2 }}
        ></div>
      </div>

      <Page2alt homeData={homeData} />

      <Page8 homeData={homeData} />
    </div>
  );
}
