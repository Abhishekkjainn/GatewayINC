import '../subpages.css';
import Page2alt from '../pages/page2alt';
import Page8 from '../pages/page8';
import { useEffect } from 'react';

export default function PET({ homeData, pteData }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="canadapage">
      <div className="page1canada page1PET">
        <div className="mainheadcanada">
          <img src="ptelogo.png" alt="PTE Logo" className="canadaflagsubpage" />
          <div className="underhead">{pteData.Ptepage1heading}</div>
          <div
            className="summarysubpage"
            dangerouslySetInnerHTML={{ __html: pteData.Ptepage1content }}
          ></div>
          <div className="enquirybutton">Send Enquiry</div>
        </div>
      </div>

      <div className="page2canada">
        <div className="page2canadahead">{pteData.Ptepage2heading}</div>
        <div
          className="page2canadacontent"
          dangerouslySetInnerHTML={{ __html: pteData.Ptepage2content }}
        ></div>
      </div>

      <div className="page2canada border">
        <div className="page2canadahead">{pteData.Ptepage3heading}</div>
        <div
          className="page2canadacontent"
          dangerouslySetInnerHTML={{ __html: pteData.Ptepage3content }}
        ></div>
      </div>

      <Page2alt homeData={homeData} />

      <div className="page2canada white">
        <div className="page2canadahead">{pteData.Ptepage4heading}</div>
        <div
          className="page2canadacontent"
          dangerouslySetInnerHTML={{ __html: pteData.Ptepage4content }}
        ></div>
      </div>

      <div className="page2canada border">
        <div className="page2canadahead">{pteData.Ptepage5heading}</div>
        <div
          className="page2canadacontent"
          dangerouslySetInnerHTML={{ __html: pteData.Ptepage5content }}
        ></div>
      </div>

      <div className="page2canada white">
        <div className="page2canadahead">
          Top Universities Worldwide Requiring PTE
        </div>
        <div className="page2canadacontent">
          Numerous universities worldwide require PTE scores for admission to
          their programs. Here are some top-ranked universities and their PTE
          requirements:
          <br />
          <br />
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>University Name</th>
                  <th>Country</th>
                  <th>PTE Requirement</th>
                  <th>Times Higher Education Ranking 2023 (Global)</th>
                  <th>Approximate Tuition Fee per year (USD)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Stanford University</td>
                  <td>United States</td>
                  <td>68-73</td>
                  <td>3</td>
                  <td>56,000</td>
                </tr>
                <tr>
                  <td>University of Cambridge</td>
                  <td>United Kingdom</td>
                  <td>75-85</td>
                  <td>5</td>
                  <td>40,000</td>
                </tr>
                <tr>
                  <td>University of Sydney</td>
                  <td>Australia</td>
                  <td>65-75</td>
                  <td>51-100</td>
                  <td>34,000</td>
                </tr>
                <tr>
                  <td>ETH Zurich - Swiss Federal Institute of Technology</td>
                  <td>Switzerland</td>
                  <td>68-76</td>
                  <td>14</td>
                  <td>15,000</td>
                </tr>
                <tr>
                  <td>University of Toronto</td>
                  <td>Canada</td>
                  <td>68-76</td>
                  <td>18</td>
                  <td>40,000</td>
                </tr>
                <tr>
                  <td>National University of Singapore (NUS)</td>
                  <td>Singapore</td>
                  <td>65-75</td>
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
