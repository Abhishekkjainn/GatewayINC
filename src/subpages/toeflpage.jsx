import '../subpages.css';
import Page2alt from '../pages/page2alt';
import Page8 from '../pages/page8';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

export default function TOEFL({ homeData, toeflData }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="canadapage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          TOEFL Exam Preparation by Gateway INC | Expert Guidance & Courses
        </title>

        <meta
          name="description"
          content="Prepare effectively for the TOEFL exam with Gateway INC's expert guidance and comprehensive courses. Our tailored programs cover all exam sections, focusing on language proficiency and test-taking strategies to help you achieve your desired score for study abroad or immigration purposes."
        />

        <meta
          name="keywords"
          content="study abroad, international education, university admissions, IELTS preparation, TOEFL preparation, PTE preparation, overseas education consultants, study abroad services, student accommodation abroad, global education, top universities, international students, admission guidance, study in USA, study in UK, study in Canada, study in Australia, study in Europe, education consultancy, student visa assistance, academic counseling, higher education abroad, language proficiency tests, gateway INC, global admissions, foreign universities, college applications, study abroad programs, study abroad scholarships, study abroad loans, study abroad fees, international student insurance, student exchange programs, study abroad internships, study abroad fellowships, study abroad research, language courses abroad, cultural exchange programs, short-term study abroad, long-term study abroad, dual degree programs, international partnerships, study abroad fairs, education expos, study abroad events, study abroad workshops, study abroad webinars, online language courses, online test preparation, online university applications, international career counseling, study abroad guides, study abroad resources, study abroad blogs, study abroad forums, study abroad communities, study abroad networks, study abroad agencies, study abroad mentors, study abroad tutors, study abroad advisors, study abroad tips, study abroad experiences, study abroad testimonials, study abroad success stories, study abroad challenges, study abroad opportunities, study abroad destinations, study abroad trends, study abroad news, study abroad updates, study abroad regulations, study abroad requirements, study abroad eligibility, study abroad deadlines, study abroad calendars, study abroad timelines, study abroad planning, study abroad checklists, study abroad itineraries, study abroad packages, study abroad deals, study abroad discounts, study abroad offers, study abroad finance, study abroad budgeting, study abroad expenses, study abroad saving, study abroad jobs, study abroad part-time work, study abroad career services, study abroad networks, study abroad alumni, study abroad clubs, study abroad activities, study abroad social life, study abroad events, study abroad tours, study abroad excursions, study abroad travel tips, study abroad packing lists, study abroad essentials, study abroad gear, study abroad equipment, study abroad preparation, overseas education, study abroad guide, study abroad consultation, university selection, student visa support, international scholarships, cultural immersion, study abroad planning, university application assistance, test preparation, education counseling, language training, international students services, academic advising, visa requirements, higher education consultancy, university rankings, global university admissions, study abroad options, study abroad opportunities, student housing, study visa, study abroad counselor, global education network, study abroad consultancy, international education support, overseas academic programs, study abroad preparation tips, global learning, international exchange programs, study abroad financial aid, study abroad insurance, study abroad logistics, international student support, cross-cultural education, study abroad goals, education abroad programs, student visa processing, international student resources, overseas higher education, global student network, academic programs abroad, international degree programs, overseas internships, student travel, study abroad lifestyle, university application process, overseas education trends, international study options, study abroad markets, education fairs, overseas student support, study abroad blogs, international academic services, higher education abroad consultants, study abroad expertise, global academic partnerships, student exchange opportunities, study abroad pathway programs, education abroad preparation, international study advice, student exchange schemes, international program offerings, student travel tips, international study experience, overseas student experiences, global academic exchanges, study abroad networking, overseas degree recognition, international education fairs"
        />
        <meta name="author" content="Gateway-INC" />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
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
