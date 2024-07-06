import Page2alt from '../pages/page2alt';
import Page8 from '../pages/page8';
import '../subpages.css';
import { useEffect } from 'react';

export default function Ireland({ homeData, irelandData }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="canadapage">
      <div className="page1canada page1ireland">
        <div className="mainheadcanada">
          <img
            src="irelandflag.png"
            alt="Ireland"
            className="canadaflagsubpage"
          />
          <div className="underhead">{irelandData.Irelandpage1heading}</div>
          <div className="summarysubpage">
            {irelandData.Irelandpage1content}
          </div>
          <div className="enquirybutton">Send Enquiry</div>
        </div>
      </div>
      <div className="page2canada">
        <div className="page2canadahead">{irelandData.Irelandpage2heading}</div>
        <div
          className="page2canadacontent"
          dangerouslySetInnerHTML={{ __html: irelandData.Irelandpage2content }}
        ></div>
      </div>
      <div className="page2canada border">
        <div className="page2canadahead">{irelandData.Irelandpage3heading}</div>
        <div
          className="page2canadacontent"
          dangerouslySetInnerHTML={{ __html: irelandData.Irelandpage3content }}
        ></div>
      </div>
      <div className="page2canada">
        <div className="page2canadahead">{irelandData.Irelandpage4heading}</div>
        <div
          className="page2canadacontent"
          dangerouslySetInnerHTML={{ __html: irelandData.Irelandpage4content }}
        ></div>
      </div>
      <Page2alt homeData={homeData} />
      <div className="page2canada white">
        <div className="page2canadahead">{irelandData.Irelandpage5heading}</div>
        <div
          className="page2canadacontent"
          dangerouslySetInnerHTML={{ __html: irelandData.Irelandpage5content }}
        ></div>
      </div>
      <div className="page2canada border">
        <div className="page2canadahead">{irelandData.Irelandpage6heading}</div>
        <div className="page2canadacontent"></div>
      </div>
      <div className="page2canada white">
        <div className="page2canadahead">Best Universities in Ireland</div>
        <div className="page2canadacontent">
          Ireland is home to several prestigious universities known for their
          academic excellence, research contributions, and vibrant campus life.
          Many of these institutions feature prominently in global rankings,
          offering a wide range of degree programs and world-class facilities to
          students.
          <br />
          <br />
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>University Name</th>
                  <th>Location</th>
                  <th>Global Ranking (QS World University 2024)</th>
                  <th>Approximate Tuition Fee per year (EUR)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Trinity College Dublin</td>
                  <td>Dublin</td>
                  <td>101-150</td>
                  <td>16,000-28,000</td>
                </tr>
                <tr>
                  <td>University College Dublin</td>
                  <td>Dublin</td>
                  <td>151-200</td>
                  <td>16,000-25,000</td>
                </tr>
                <tr>
                  <td>National University of Ireland, Galway</td>
                  <td>Galway</td>
                  <td>201-250</td>
                  <td>14,000-22,000</td>
                </tr>
                <tr>
                  <td>University College Cork</td>
                  <td>Cork</td>
                  <td>251-300</td>
                  <td>15,000-24,000</td>
                </tr>
                <tr>
                  <td>Maynooth University</td>
                  <td>Maynooth</td>
                  <td>301-350</td>
                  <td>13,000-21,000</td>
                </tr>
                <tr>
                  <td>Dublin City University</td>
                  <td>Dublin</td>
                  <td>351-400</td>
                  <td>14,000-23,000</td>
                </tr>
                <tr>
                  <td>University of Limerick</td>
                  <td>Limerick</td>
                  <td>401-450</td>
                  <td>15,000-25,000</td>
                </tr>
                <tr>
                  <td>Technological University Dublin</td>
                  <td>Dublin</td>
                  <td>451-500</td>
                  <td>13,000-20,000</td>
                </tr>
                <tr>
                  <td>Dublin Institute of Technology</td>
                  <td>Dublin</td>
                  <td>501-550</td>
                  <td>12,000-18,000</td>
                </tr>
                <tr>
                  <td>Royal College of Surgeons in Ireland</td>
                  <td>Dublin</td>
                  <td>551-600</td>
                  <td>20,000-30,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            These universities offer a rich academic environment, modern
            facilities, and opportunities for research and career development,
            making Ireland a top destination for international students seeking
            quality education and cultural immersion.
          </p>
        </div>
      </div>
      <div className="page2canada border">
        <div className="page2canadahead">{irelandData.Irelandpage7heading}</div>
        <div
          className="page2canadacontent "
          dangerouslySetInnerHTML={{ __html: irelandData.Irelandpage7content }}
        ></div>
      </div>

      <div className="page2canada white">
        <div className="page2canadahead">
          Scholarships Available for Ireland
        </div>
        <div className="page2canadacontent ">
          Ireland offers a range of scholarships to support international
          students pursuing higher education in the country. These scholarships
          are awarded based on academic merit, financial need, or specific
          criteria set by the sponsoring organization or institution. Here are
          some prominent scholarships available in Ireland:
          <br />
          <br />
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Scholarship Name</th>
                  <th>Description</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    Government of Ireland International Education Scholarships
                  </td>
                  <td>
                    Scholarships for high-achieving international students from
                    non-EU/EEA countries to study in Ireland
                  </td>
                  <td>Up to €10,000 tuition fee waiver</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Trinity College Dublin Scholarships</td>
                  <td>
                    Various scholarships offered by Trinity College Dublin based
                    on academic excellence and specific criteria
                  </td>
                  <td>Varies; covers tuition fees and/or living expenses</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    University College Dublin Global Excellence Scholarships
                  </td>
                  <td>
                    Merit-based scholarships for international students at
                    University College Dublin
                  </td>
                  <td>Up to 50% tuition fee reduction</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>NUI Galway International Scholarships</td>
                  <td>
                    Scholarships for international students at NUI Galway based
                    on academic merit and other criteria
                  </td>
                  <td>€1,500 - €5,000 tuition fee reduction</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>University College Cork International Scholarships</td>
                  <td>
                    Scholarships for non-EU students at University College Cork
                  </td>
                  <td>€2,000 - €10,000 tuition fee reduction</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Maynooth University International Scholarships</td>
                  <td>
                    Scholarships for international students at Maynooth
                    University
                  </td>
                  <td>€2,000 - €5,000 tuition fee reduction</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Dublin City University International Scholarships</td>
                  <td>
                    Scholarships for international students at Dublin City
                    University
                  </td>
                  <td>€1,500 - €4,000 tuition fee reduction</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Technological University Dublin Scholarships</td>
                  <td>
                    Various scholarships for international students at
                    Technological University Dublin
                  </td>
                  <td>Varies; covers tuition fees partially or fully</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Royal College of Surgeons in Ireland Scholarships</td>
                  <td>
                    Scholarships for international students at RCSI based on
                    academic excellence and specific criteria
                  </td>
                  <td>Up to €5,000 tuition fee reduction</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Irish Research Council Scholarships</td>
                  <td>
                    Scholarships for research-focused international students in
                    Ireland
                  </td>
                  <td>Full funding for research degrees</td>
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
