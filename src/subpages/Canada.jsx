import Page2alt from '../pages/page2alt';
import Page8 from '../pages/page8';
import '../subpages.css';
import { useEffect } from 'react';
export default function Canada({ canadaData, homeData }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="canadapage">
      <div className="page1canada">
        <div className="mainheadcanada">
          <img
            src="canadaflag.png"
            alt="Canada"
            className="canadaflagsubpage"
          />
          <div className="underhead">{canadaData.canadapageheading}</div>
          <div className="summarysubpage">
            {canadaData.canadapagesubheading}
          </div>
          <div className="enquirybutton">Send Enquiry</div>
        </div>
      </div>
      <div className="page2canada">
        <div className="page2canadahead">{canadaData.canadapage1heading}</div>
        <div
          className="page2canadacontent"
          dangerouslySetInnerHTML={{ __html: canadaData.canadapage1content }}
        ></div>
      </div>
      <div className="page2canada border">
        <div className="page2canadahead">{canadaData.canadapage2heading}</div>
        <div
          className="page2canadacontent"
          dangerouslySetInnerHTML={{ __html: canadaData.canadapage2content }}
        ></div>
      </div>
      <Page2alt homeData={homeData} />
      <div className="page2canada white">
        <div className="page2canadahead">{canadaData.canadapage3heading}</div>
        <div
          className="page2canadacontent"
          dangerouslySetInnerHTML={{ __html: canadaData.canadapage3content }}
        ></div>
      </div>
      <div className="page2canada border">
        <div className="page2canadahead">{canadaData.canadapage4heading}</div>
        <div
          className="page2canadacontent "
          dangerouslySetInnerHTML={{ __html: canadaData.canadapage4content }}
        ></div>
      </div>
      <div className="page2canada white">
        <div className="page2canadahead">Best Universities in Canada</div>
        <div className="page2canadacontent ">
          Canada boasts prestigious universities renowned for their diverse
          degree programs and state-of-the-art facilities, including modern
          libraries, spacious auditoriums, and advanced research centers,
          ensuring high standards of education. <br />
          <br /> These universities also provide on-campus accommodations such
          as cozy dormitories, residential halls, and apartments, creating a
          secure and enjoyable environment for students. Currently, 31 Canadian
          universities are featured in the QS World University Ranking 2024,
          with the top 11 institutions securing positions within the top 250.
          Here's a glimpse into the top 10 Canadian universities for the
          academic year 2023, highlighting their rankings in QS World
          University, Times Higher Education, and US News & World Report.
          <br />
          <br />
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>University Name</th>
                  <th>Location</th>
                  <th>Times Higher Education Ranking 2023 (Globally)</th>
                  <th>Approximate Tuition Fee per year (CAD)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>University of Toronto</td>
                  <td>Ontario</td>

                  <td>18</td>
                  <td>40,000</td>
                </tr>
                <tr>
                  <td>McGill University</td>
                  <td>Montreal</td>

                  <td>46</td>
                  <td>27,000</td>
                </tr>
                <tr>
                  <td>University of British Columbia</td>
                  <td>Endowment Lands</td>
                  <td>40</td>
                  <td>34,000</td>
                </tr>
                <tr>
                  <td>University of Montreal</td>
                  <td>Montreal</td>

                  <td>111</td>
                  <td>17,000</td>
                </tr>
                <tr>
                  <td>University of Alberta</td>
                  <td>Edmonton </td>

                  <td>118</td>
                  <td>21,000</td>
                </tr>
                <tr>
                  <td>University of Waterloo</td>
                  <td>Waterloo</td>

                  <td>201-250</td>
                  <td>40,000</td>
                </tr>
                <tr>
                  <td>Western University</td>
                  <td>London</td>

                  <td>201-250</td>
                  <td>23,000</td>
                </tr>
                <tr>
                  <td>University of Calgary</td>
                  <td>Calgary</td>

                  <td>201-250</td>
                  <td>37,000</td>
                </tr>
                <tr>
                  <td>McMaster University</td>
                  <td>Hamilton</td>

                  <td>80</td>
                  <td>45,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="page2canada border">
        <div className="page2canadahead">{canadaData.canadapage6heading}</div>
        <div
          className="page2canadacontent "
          dangerouslySetInnerHTML={{ __html: canadaData.canadapage6content }}
        ></div>
      </div>
      <div className="page2canada white">
        <div className="page2canadahead">Scholarships Available for Canada</div>
        <div className="page2canadacontent ">
          Scholarships are financial awards offered to deserving students who
          demonstrate outstanding academic achievements and involvement in
          extracurricular activities, and they do not require repayment.
          Exceptional students with impressive academic and non-academic
          backgrounds can seek these scholarships. Both the Canadian government
          and external entities offer these financial aids to alleviate the
          financial burden of studying abroad. Additionally, scholarships based
          on financial need are also available, ensuring accessibility for
          students from diverse economic background.
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
                  <td>Banting Postdoctoral Fellowships</td>
                  <td>
                    Scholarships for advanced studies in science and healthcare
                  </td>
                  <td>$54,219 per year (taxable)</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Vanier Canada Graduate Scholarships</td>
                  <td>Funding for doctoral studies</td>
                  <td>$50,000 per year</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Queen’s University International Scholarships</td>
                  <td>Awarded to high-achieving international students</td>
                  <td>$6,969</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    University of Calgary International Entrance Scholarship
                  </td>
                  <td>
                    Financial support for undergraduate international applicants
                  </td>
                  <td>Up to CAD 15,000</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                    Canada-ASEAN Scholarships and Educational Exchanges for
                    Development
                  </td>
                  <td>
                    Funding opportunities for Bachelor's and Master's programs
                  </td>
                  <td>Up to CAD 15,900</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>CGSP Postdoctoral Fellowships</td>
                  <td>Scholarships for postdoctoral research</td>
                  <td>$45,000 per year</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Shastri Indo-Canadian Institute Fellowships</td>
                  <td>
                    Grants for research and training across various levels
                  </td>
                  <td>Varies</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Canadian Commonwealth Scholarship and Fellowship Plan</td>
                  <td>Funding for advanced study and research</td>
                  <td>Varies</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Ontario Graduate Scholarship Program</td>
                  <td>Financial aid for graduate students</td>
                  <td>Varies</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>National Research Council of Canada Fellowships</td>
                  <td>Research opportunities for Master's and Ph.D. holders</td>
                  <td>Variable</td>
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
