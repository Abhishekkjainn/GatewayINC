import Page2alt from '../pages/page2alt';
import Page8 from '../pages/page8';
import '../subpages.css';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
export default function USApage({ homeData, usaData }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="canadapage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Study in USA with Gateway INC | Expert Guidance & Services
        </title>

        <meta
          name="description"
          content="Explore Gateway INC's expert guidance and comprehensive services for studying in the USA. From university admissions and visa assistance to accommodation and cultural integration, we ensure a seamless and successful study abroad experience in the United States."
        />

        <meta
          name="keywords"
          content="study abroad, international education, university admissions, IELTS preparation, TOEFL preparation, PTE preparation, overseas education consultants, study abroad services, student accommodation abroad, global education, top universities, international students, admission guidance, study in USA, study in UK, study in Canada, study in Australia, study in Europe, education consultancy, student visa assistance, academic counseling, higher education abroad, language proficiency tests, gateway INC, global admissions, foreign universities, college applications, study abroad programs, study abroad scholarships, study abroad loans, study abroad fees, international student insurance, student exchange programs, study abroad internships, study abroad fellowships, study abroad research, language courses abroad, cultural exchange programs, short-term study abroad, long-term study abroad, dual degree programs, international partnerships, study abroad fairs, education expos, study abroad events, study abroad workshops, study abroad webinars, online language courses, online test preparation, online university applications, international career counseling, study abroad guides, study abroad resources, study abroad blogs, study abroad forums, study abroad communities, study abroad networks, study abroad agencies, study abroad mentors, study abroad tutors, study abroad advisors, study abroad tips, study abroad experiences, study abroad testimonials, study abroad success stories, study abroad challenges, study abroad opportunities, study abroad destinations, study abroad trends, study abroad news, study abroad updates, study abroad regulations, study abroad requirements, study abroad eligibility, study abroad deadlines, study abroad calendars, study abroad timelines, study abroad planning, study abroad checklists, study abroad itineraries, study abroad packages, study abroad deals, study abroad discounts, study abroad offers, study abroad finance, study abroad budgeting, study abroad expenses, study abroad saving, study abroad jobs, study abroad part-time work, study abroad career services, study abroad networks, study abroad alumni, study abroad clubs, study abroad activities, study abroad social life, study abroad events, study abroad tours, study abroad excursions, study abroad travel tips, study abroad packing lists, study abroad essentials, study abroad gear, study abroad equipment, study abroad preparation, overseas education, study abroad guide, study abroad consultation, university selection, student visa support, international scholarships, cultural immersion, study abroad planning, university application assistance, test preparation, education counseling, language training, international students services, academic advising, visa requirements, higher education consultancy, university rankings, global university admissions, study abroad options, study abroad opportunities, student housing, study visa, study abroad counselor, global education network, study abroad consultancy, international education support, overseas academic programs, study abroad preparation tips, global learning, international exchange programs, study abroad financial aid, study abroad insurance, study abroad logistics, international student support, cross-cultural education, study abroad goals, education abroad programs, student visa processing, international student resources, overseas higher education, global student network, academic programs abroad, international degree programs, overseas internships, student travel, study abroad lifestyle, university application process, overseas education trends, international study options, study abroad markets, education fairs, overseas student support, study abroad blogs, international academic services, higher education abroad consultants, study abroad expertise, global academic partnerships, student exchange opportunities, study abroad pathway programs, education abroad preparation, international study advice, student exchange schemes, international program offerings, student travel tips, international study experience, overseas student experiences, global academic exchanges, study abroad networking, overseas degree recognition, international education fairs"
        />
        <meta name="author" content="Gateway-INC" />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="page1canada page1usa">
        <div className="mainheadcanada">
          <img src="/usaflag.png" alt="Canada" className="canadaflagsubpage" />
          <div className="underhead">{usaData.usapage1heading}</div>
          <div className="summarysubpage">{usaData.usapage1subheading}</div>
          <div className="enquirybutton">Send Enquiry</div>
        </div>
      </div>
      <div className="page2canada">
        <div className="page2canadahead">{usaData.usapage2heading}</div>
        <div
          className="page2canadacontent"
          dangerouslySetInnerHTML={{ __html: usaData.usapage2content }}
        ></div>
      </div>
      <div className="page2canada border">
        <div className="page2canadahead">{usaData.usapage3heading}</div>
        <div
          className="page2canadacontent"
          dangerouslySetInnerHTML={{ __html: usaData.usapage3content }}
        ></div>
      </div>
      <Page2alt homeData={homeData} />
      <div className="page2canada white">
        <div className="page2canadahead">{usaData.usapage4heading}</div>
        <div
          className="page2canadacontent "
          dangerouslySetInnerHTML={{ __html: usaData.usapage4content }}
        ></div>
      </div>
      <div className="page2canada border">
        <div className="page2canadahead">{usaData.usapage5heading}</div>
        <div
          className="page2canadacontent "
          dangerouslySetInnerHTML={{ __html: usaData.usapage5content }}
        ></div>
      </div>
      <div className="page2canada white">
        <div className="page2canadahead">Best Universities in USA</div>
        <div className="page2canadacontent ">
          The USA boasts prestigious universities renowned for their diverse
          degree programs and cutting-edge facilities, including
          state-of-the-art libraries, expansive auditoriums, and advanced
          research centers, ensuring an exceptional standard of education.
          On-campus accommodations such as comfortable dormitories, residential
          halls, and apartments are also available, providing a secure and
          enriching environment for students. <br />
          <br />
          Currently, numerous American universities feature prominently in
          global rankings. For instance, in the QS World University Rankings
          2024, many US institutions rank within the top tiers, with several
          securing top spots in specialized fields. Here's a glimpse into the
          top universities in the USA for the academic year 2023, highlighting
          their rankings in QS World University, Times Higher Education, and US
          News & World Report.
          <br />
          <br />
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>University Name</th>
                  <th>Location</th>
                  <th>Times Higher Education Ranking 2023 (Globally)</th>
                  <th>Approximate Tuition Fee per year (USD)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Harvard University</td>
                  <td>Cambridge, MA</td>
                  <td>6</td>
                  <td>$51,925</td>
                </tr>
                <tr>
                  <td>Stanford University</td>
                  <td>Stanford, CA</td>
                  <td>3</td>
                  <td>$56,169</td>
                </tr>
                <tr>
                  <td>Massachusetts Institute of Technology (MIT)</td>
                  <td>Cambridge, MA</td>
                  <td>5</td>
                  <td>$53,790</td>
                </tr>
                <tr>
                  <td>California Institute of Technology (Caltech)</td>
                  <td>Pasadena, CA</td>
                  <td>4</td>
                  <td>$56,862</td>
                </tr>
                <tr>
                  <td>University of Chicago</td>
                  <td>Chicago, IL</td>
                  <td>9</td>
                  <td>$59,298</td>
                </tr>
                <tr>
                  <td>Columbia University</td>
                  <td>New York, NY</td>
                  <td>18</td>
                  <td>$63,535</td>
                </tr>
                <tr>
                  <td>Yale University</td>
                  <td>New Haven, CT</td>
                  <td>16</td>
                  <td>$60,800</td>
                </tr>
                <tr>
                  <td>Princeton University</td>
                  <td>Princeton, NJ</td>
                  <td>7</td>
                  <td>$53,770</td>
                </tr>
                <tr>
                  <td>University of Pennsylvania</td>
                  <td>Philadelphia, PA</td>
                  <td>13</td>
                  <td>$61,760</td>
                </tr>
                <tr>
                  <td>Johns Hopkins University</td>
                  <td>Baltimore, MD</td>
                  <td>14</td>
                  <td>$57,010</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="page2canada border">
        <div className="page2canadahead">{usaData.usapage7heading}</div>
        <div
          className="page2canadacontent"
          dangerouslySetInnerHTML={{ __html: usaData.usapage7content }}
        ></div>
      </div>
      <div className="page2canada white">
        <div className="page2canadahead">Scholarships Available for USA</div>
        <div className="page2canadacontent ">
          Scholarships are monetary awards provided to exceptional students who
          showcase outstanding academic achievements and active participation in
          extracurricular activities. Unlike loans, scholarships do not require
          repayment, making them highly sought after by deserving students.
          These financial aids are offered by various entities, including the US
          government and private organizations, aiming to ease the financial
          burden of studying abroad. <br />
          <br />
          In the USA, scholarships are available based on academic merit,
          leadership qualities, community service, and specific talents such as
          athletics or arts. Additionally, there are scholarships designed to
          support students with financial need, ensuring accessibility to higher
          education for individuals from diverse economic backgrounds.
          <br />
          <br />
          International students planning to study in the USA can explore a wide
          range of scholarships offered by universities, colleges, government
          agencies, and private foundations. These scholarships can cover
          tuition fees, living expenses, and sometimes even travel costs,
          depending on the scholarship's terms and conditions.
          <br />
          <br />
          Applicants typically need to meet specific eligibility criteria,
          submit application forms, provide academic transcripts, letters of
          recommendation, and sometimes demonstrate financial need. Each
          scholarship has its own application process and deadlines, so it's
          essential for students to research and apply for scholarships well in
          advance of their intended study period.
          <br />
          <br />
          {/* <div className="table">
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
          </div> */}
        </div>
      </div>
      <Page8 homeData={homeData} />
    </div>
  );
}
