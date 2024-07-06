import '../subpages.css';
import Page2alt from '../pages/page2alt';
import Page8 from '../pages/page8';
import { useEffect } from 'react';
export default function IELTS({ homeData, ieltsData }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="canadapage">
      <div className="page1canada page1ielts">
        <div className="mainheadcanada">
          <img src="ieltslogo.png" alt="Canada" className="canadaflagsubpage" />
          <div className="underhead">{ieltsData.ieltspage1heading}</div>
          <div className="summarysubpage">{ieltsData.ieltspage1subheading}</div>
          <div className="enquirybutton">Send Enquiry</div>
        </div>
      </div>
      <div className="page2canada">
        <div className="page2canadahead">{ieltsData.Ieltspage2heading}</div>
        <div
          className="page2canadacontent"
          dangerouslySetInnerHTML={{ __html: ieltsData.Ieltspage2content }}
        ></div>
      </div>
      <div className="page2canada border">
        <div className="page2canadahead">{ieltsData.Ieltspage3heading}</div>
        <div
          className="page2canadacontent"
          dangerouslySetInnerHTML={{ __html: ieltsData.Ieltspage3content }}
        ></div>
      </div>
      <Page2alt homeData={homeData} />
      <div className="page2canada white">
        <div className="page2canadahead">{ieltsData.Ieltspage4heading}</div>
        <div
          className="page2canadacontent"
          dangerouslySetInnerHTML={{ __html: ieltsData.Ieltspage4content }}
        ></div>
      </div>
      <div className="page2canada border">
        <div className="page2canadahead">{ieltsData.Ieltspage5heading}</div>
        <div
          className="page2canadacontent"
          dangerouslySetInnerHTML={{ __html: ieltsData.Ieltspage5content }}
        ></div>
      </div>
      <div className="page2canada white">
        <div className="page2canadahead">
          Top Universities Worldwide Requiring IELTS
        </div>
        <div className="page2canadacontent">
          Many universities around the world require IELTS scores for admission
          to their programs. Here are some top universities globally and their
          respective IELTS requirements:
          <br />
          <br />
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>University Name</th>
                  <th>Country</th>
                  <th>IELTS Requirement</th>
                  <th>Times Higher Education Ranking 2023 (Global)</th>
                  <th>Approximate Tuition Fee per year (USD)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Harvard University</td>
                  <td>United States</td>
                  <td>Overall 7.5, no band less than 7.0</td>
                  <td>2</td>
                  <td>53,000</td>
                </tr>
                <tr>
                  <td>University of Oxford</td>
                  <td>United Kingdom</td>
                  <td>Overall 7.0, no band less than 6.5</td>
                  <td>1</td>
                  <td>38,000</td>
                </tr>
                <tr>
                  <td>University of Melbourne</td>
                  <td>Australia</td>
                  <td>Overall 6.5, no band less than 6.0</td>
                  <td>31</td>
                  <td>31,000</td>
                </tr>
                <tr>
                  <td>ETH Zurich - Swiss Federal Institute of Technology</td>
                  <td>Switzerland</td>
                  <td>Overall 6.5, no band less than 6.0</td>
                  <td>14</td>
                  <td>15,000</td>
                </tr>
                <tr>
                  <td>University of Toronto</td>
                  <td>Canada</td>
                  <td>Overall 7.0, no band less than 6.5</td>
                  <td>18</td>
                  <td>40,000</td>
                </tr>
                <tr>
                  <td>National University of Singapore (NUS)</td>
                  <td>Singapore</td>
                  <td>Overall 6.5, no band less than 6.0</td>
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
