import Page2alt from '../pages/page2alt';
import Page8 from '../pages/page8';
import '../subpages.css';
import { useEffect } from 'react';

export default function Visa({ homeData, serviceData }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="canadapage">
      <div className="page1canada page1visa">
        <div className="mainheadcanada">
          <div className="underhead">{serviceData.visah1}</div>
          <div className="summarysubpage">{serviceData.visac1}</div>
          <div className="enquirybutton">Send Enquiry</div>
        </div>
      </div>
      <div className="page2canada">
        <div className="page2canadahead">{serviceData.visah2}</div>
        <div
          className="page2canadacontent"
          dangerouslySetInnerHTML={{ __html: serviceData.visac2 }}
        ></div>
      </div>

      <Page2alt homeData={homeData} />
      <Page8 homeData={homeData} />
    </div>
  );
}
