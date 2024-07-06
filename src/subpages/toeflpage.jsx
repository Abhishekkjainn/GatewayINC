import '../subpages.css';
import Page2alt from '../pages/page2alt';
import Page8 from '../pages/page8';
import { useEffect } from 'react';

export default function TOEFL({ homeData, toeflData }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="canadapage">
      <div className="page1canada page1toefl">
        <div className="mainheadcanada">
          <img
            src="TOEFLlogo.png"
            alt="TOEFL Logo"
            className="canadaflagsubpage"
          />
          <div className="underhead">{toeflData.Toeflpage1heading}</div>
          <div
            className="summarysubpage"
            dangerouslySetInnerHTML={{ __html: toeflData.Toeflpage1content }}
          ></div>
          <div className="enquirybutton">Send Enquiry</div>
        </div>
      </div>

      <div className="page2canada">
        <div className="page2canadahead">{toeflData.Toeflpage2heading}</div>
        <div
          className="page2canadacontent"
          dangerouslySetInnerHTML={{ __html: toeflData.Toeflpage2content }}
        ></div>
      </div>

      <div className="page2canada border">
        <div className="page2canadahead">{toeflData.Toeflpage3heading}</div>
        <div
          className="page2canadacontent"
          dangerouslySetInnerHTML={{ __html: toeflData.Toeflpage3content }}
        ></div>
      </div>

      <Page2alt homeData={homeData} />

      <div className="page2canada white">
        <div className="page2canadahead">{toeflData.Toeflpage4heading}</div>
        <div
          className="page2canadacontent"
          dangerouslySetInnerHTML={{ __html: toeflData.Toeflpage4content }}
        ></div>
      </div>

      <div className="page2canada border">
        <div className="page2canadahead">{toeflData.Toeflpage5heading}</div>
        <div
          className="page2canadacontent"
          dangerouslySetInnerHTML={{ __html: toeflData.Toeflpage5content }}
        ></div>
      </div>

      <div className="page2canada white">
        <div className="page2canadahead">
          Top Universities Worldwide Requiring TOEFL
        </div>
        <div className="page2canadacontent">
          Numerous universities worldwide require TOEFL scores for admission to
          their programs. Here are some top-ranked universities and their TOEFL
          requirements:
          <br />
          <br />
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>University Name</th>
                  <th>Country</th>
                  <th>TOEFL Requirement</th>
                  <th>Times Higher Education Ranking 2023 (Global)</th>
                  <th>Approximate Tuition Fee per year (USD)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Stanford University</td>
                  <td>United States</td>
                  <td>100-110 (Internet-based)</td>
                  <td>3</td>
                  <td>56,000</td>
                </tr>
                <tr>
                  <td>University of Cambridge</td>
                  <td>United Kingdom</td>
                  <td>110-120 (Internet-based)</td>
                  <td>5</td>
                  <td>40,000</td>
                </tr>
                <tr>
                  <td>University of Sydney</td>
                  <td>Australia</td>
                  <td>90-100 (Internet-based)</td>
                  <td>51-100</td>
                  <td>34,000</td>
                </tr>
                <tr>
                  <td>ETH Zurich - Swiss Federal Institute of Technology</td>
                  <td>Switzerland</td>
                  <td>100-110 (Internet-based)</td>
                  <td>14</td>
                  <td>15,000</td>
                </tr>
                <tr>
                  <td>University of Toronto</td>
                  <td>Canada</td>
                  <td>100-110 (Internet-based)</td>
                  <td>18</td>
                  <td>40,000</td>
                </tr>
                <tr>
                  <td>National University of Singapore (NUS)</td>
                  <td>Singapore</td>
                  <td>90-100 (Internet-based)</td>
                  <td>11</td>
                  <td>24,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Page8 homeData={homeData} />
    </div>
  );
}
