import Page2alt from '../pages/page2alt';
import Page8 from '../pages/page8';
import '../subpages.css';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
export default function Canada({ canadaData, homeData }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="canadapage">
      <Helmet>
        <meta charSet="utf-8" />

        <title>
          Study in Canada with Gateway INC | Expert Guidance & Services
        </title>

        <meta
          name="description"
          content="Discover Gateway INC's expert guidance and comprehensive services for studying in Canada. From university admissions and visa assistance to accommodation and cultural integration, we ensure a seamless and successful study abroad experience in Canada."
        />

        <meta
          name="keywords"
          content="study abroad, international education, university admissions, IELTS preparation, TOEFL preparation, PTE preparation, overseas education consultants, study abroad services, student accommodation abroad, global education, top universities, international students, admission guidance, study in USA, study in UK, study in Canada, study in Australia, study in Europe, education consultancy, student visa assistance, academic counseling, higher education abroad, language proficiency tests, gateway INC, global admissions, foreign universities, college applications, study abroad programs, study abroad scholarships, study abroad loans, study abroad fees, international student insurance, student exchange programs, study abroad internships, study abroad fellowships, study abroad research, language courses abroad, cultural exchange programs, short-term study abroad, long-term study abroad, dual degree programs, international partnerships, study abroad fairs, education expos, study abroad events, study abroad workshops, study abroad webinars, online language courses, online test preparation, online university applications, international career counseling, study abroad guides, study abroad resources, study abroad blogs, study abroad forums, study abroad communities, study abroad networks, study abroad agencies, study abroad mentors, study abroad tutors, study abroad advisors, study abroad tips, study abroad experiences, study abroad testimonials, study abroad success stories, study abroad challenges, study abroad opportunities, study abroad destinations, study abroad trends, study abroad news, study abroad updates, study abroad regulations, study abroad requirements, study abroad eligibility, study abroad deadlines, study abroad calendars, study abroad timelines, study abroad planning, study abroad checklists, study abroad itineraries, study abroad packages, study abroad deals, study abroad discounts, study abroad offers, study abroad finance, study abroad budgeting, study abroad expenses, study abroad saving, study abroad jobs, study abroad part-time work, study abroad career services, study abroad networks, study abroad alumni, study abroad clubs, study abroad activities, study abroad social life, study abroad events, study abroad tours, study abroad excursions, study abroad travel tips, study abroad packing lists, study abroad essentials, study abroad gear, study abroad equipment, study abroad preparation, overseas education, study abroad guide, study abroad consultation, university selection, student visa support, international scholarships, cultural immersion, study abroad planning, university application assistance, test preparation, education counseling, language training, international students services, academic advising, visa requirements, higher education consultancy, university rankings, global university admissions, study abroad options, study abroad opportunities, student housing, study visa, study abroad counselor, global education network, study abroad consultancy, international education support, overseas academic programs, study abroad preparation tips, global learning, international exchange programs, study abroad financial aid, study abroad insurance, study abroad logistics, international student support, cross-cultural education, study abroad goals, education abroad programs, student visa processing, international student resources, overseas higher education, global student network, academic programs abroad, international degree programs, overseas internships, student travel, study abroad lifestyle, university application process, overseas education trends, international study options, study abroad markets, education fairs, overseas student support, study abroad blogs, international academic services, higher education abroad consultants, study abroad expertise, global academic partnerships, student exchange opportunities, study abroad pathway programs, education abroad preparation, international study advice, student exchange schemes, international program offerings, student travel tips, international study experience, overseas student experiences, global academic exchanges, study abroad networking, overseas degree recognition, international education fairs"
        />
        <meta name="author" content="Gateway-INC" />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
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
