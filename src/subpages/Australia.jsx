import Page2alt from '../pages/page2alt';
import Page8 from '../pages/page8';
import '../subpages.css';
import { useEffect } from 'react';
export default function Australia({ homeData, australiaData }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="canadapage">
      <div className="page1canada page1australia">
        <div className="mainheadcanada">
          <img
            src="australiaflag.png"
            alt="Canada"
            className="canadaflagsubpage"
          />
          <div className="underhead">{australiaData.Australiapage1heading}</div>
          <div className="summarysubpage">
            {australiaData.Australiapage1subheading}
          </div>
          <div className="enquirybutton">Send Enquiry</div>
        </div>
      </div>
      <div className="page2canada">
        <div className="page2canadahead">
          {australiaData.Australiapage2heading}
        </div>
        <div
          className="page2canadacontent"
          dangerouslySetInnerHTML={{
            __html: australiaData.Australiapage2content,
          }}
        ></div>
      </div>
      <div className="page2canada border">
        <div className="page2canadahead">
          {australiaData.Australiapage3heading}
        </div>
        <div
          className="page2canadacontent"
          dangerouslySetInnerHTML={{
            __html: australiaData.Australiapage3content,
          }}
        ></div>
      </div>
      <Page2alt homeData={homeData} />
      <div className="page2canada white">
        <div className="page2canadahead">
          {australiaData.Australiapage4heading}
        </div>
        <div
          className="page2canadacontent "
          dangerouslySetInnerHTML={{
            __html: australiaData.Australiapage4content,
          }}
        ></div>
      </div>
      <div className="page2canada border">
        <div className="page2canadahead">
          {australiaData.Australiapage5heading}
        </div>
        <div
          className="page2canadacontent "
          dangerouslySetInnerHTML={{
            __html: australiaData.Australiapage5conten,
          }}
        ></div>
      </div>
      <div className="page2canada white">
        <div className="page2canadahead">Best Universities in Australia</div>
        <div className="page2canadacontent ">
          Australia boasts prestigious universities renowned for their diverse
          degree programs and state-of-the-art facilities, including modern
          libraries, spacious auditoriums, and advanced research centers,
          ensuring high standards of education. These universities also provide
          on-campus accommodations such as cozy dormitories, residential halls,
          and apartments, creating a secure and enjoyable environment for
          students. Currently, 36 Australian universities are featured in the QS
          World University Ranking 2024, with the top 8 institutions securing
          positions within the top 250. Here's a glimpse into the top 10
          Australian universities for the academic year 2023, highlighting their
          rankings in QS World University, Times Higher Education, and US News &
          World Report.
          <br />
          <br />
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>University Name</th>
                  <th>Location</th>
                  <th>Times Higher Education Ranking 2023 (Globally)</th>
                  <th>Approximate Tuition Fee per year (AUD)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>University of Melbourne</td>
                  <td>Melbourne</td>
                  <td>34</td>
                  <td>45,000</td>
                </tr>
                <tr>
                  <td>Australian National University</td>
                  <td>Canberra</td>
                  <td>62</td>
                  <td>43,000</td>
                </tr>
                <tr>
                  <td>University of Sydney</td>
                  <td>Sydney</td>
                  <td>54</td>
                  <td>50,000</td>
                </tr>
                <tr>
                  <td>University of Queensland</td>
                  <td>Brisbane</td>
                  <td>53</td>
                  <td>40,000</td>
                </tr>
                <tr>
                  <td>Monash University</td>
                  <td>Melbourne</td>
                  <td>57</td>
                  <td>37,000</td>
                </tr>
                <tr>
                  <td>University of New South Wales</td>
                  <td>Sydney</td>
                  <td>71</td>
                  <td>41,000</td>
                </tr>
                <tr>
                  <td>University of Western Australia</td>
                  <td>Perth</td>
                  <td>131</td>
                  <td>35,000</td>
                </tr>
                <tr>
                  <td>University of Adelaide</td>
                  <td>Adelaide</td>
                  <td>88</td>
                  <td>38,000</td>
                </tr>
                <tr>
                  <td>University of Technology Sydney</td>
                  <td>Sydney</td>
                  <td>133</td>
                  <td>39,000</td>
                </tr>
                <tr>
                  <td>University of Canberra</td>
                  <td>Canberra</td>
                  <td>251-300</td>
                  <td>30,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="page2canada border">
        <div className="page2canadahead">
          {australiaData.Australiapage7heading}
        </div>
        <div
          className="page2canadacontent "
          dangerouslySetInnerHTML={{
            __html: australiaData.Australiapage7content,
          }}
        ></div>
      </div>
      <div className="page2canada white">
        <div className="page2canadahead">
          Scholarships Available for Australia
        </div>
        <div className="page2canadacontent ">
          Australia offers a wide range of scholarships to deserving students
          who demonstrate exceptional academic achievements and active
          involvement in extracurricular activities, with no requirement for
          repayment. These scholarships, offered by both Australian institutions
          and external organizations, aim to alleviate the financial burden of
          studying abroad. Additionally, scholarships based on financial need
          ensure accessibility for students from diverse economic backgrounds.
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
                  <td>Australia Awards Scholarships</td>
                  <td>
                    Government-funded scholarships for international students
                    pursuing undergraduate and postgraduate programs
                  </td>
                  <td>
                    Full tuition fees, travel allowance, and living expenses
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Endeavour Leadership Program</td>
                  <td>
                    Merit-based scholarships for high-achieving international
                    students, researchers, and professionals to undertake study,
                    research or professional development in Australia
                  </td>
                  <td>Varies based on the duration and level of study</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    University-specific Scholarships (e.g., UNSW Global Academic
                    Award, University of Melbourne Graduate Research
                    Scholarships)
                  </td>
                  <td>
                    Various scholarships offered by Australian universities
                    based on academic merit, research potential, or specific
                    criteria
                  </td>
                  <td>
                    Varies; typically ranges from AUD 5,000 to full tuition
                    coverage
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    Australian Government Research Training Program (RTP)
                    Scholarships
                  </td>
                  <td>
                    Scholarships to support domestic and international students
                    undertaking research higher degrees at Australian
                    universities
                  </td>
                  <td>Full tuition fees and a stipend for living expenses</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Destination Australia Scholarships</td>
                  <td>
                    Scholarships for domestic and international students to
                    study in regional Australia
                  </td>
                  <td>
                    Varies; typically covers tuition fees and living expenses
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Australia-Pacific Technical College Scholarships</td>
                  <td>
                    Scholarships for students from Pacific developing countries
                    to study technical and vocational education and training
                    (TVET) courses in Australia
                  </td>
                  <td>
                    Full tuition fees, travel, and accommodation allowance
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>
                    International Postgraduate Research Scholarships (IPRS)
                  </td>
                  <td>
                    Scholarships to support international students undertaking
                    research postgraduate degrees in Australia
                  </td>
                  <td>Full tuition fees and health cover costs</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>
                    Australian Government Scholarships for International
                    Education
                  </td>
                  <td>
                    Funding for international students to study at participating
                    Australian institutions
                  </td>
                  <td>Varies; covers tuition fees and living expenses</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Melbourne Research Scholarships (MRS)</td>
                  <td>
                    Scholarships to support domestic and international students
                    undertaking research degrees at the University of Melbourne
                  </td>
                  <td>Full tuition fees and a living allowance</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>
                    Australian Government Awards for Excellence in Education
                  </td>
                  <td>
                    Scholarships to promote educational excellence and enhance
                    collaboration between Australia and partner countries
                  </td>
                  <td>Varies; covers tuition fees and additional costs</td>
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
