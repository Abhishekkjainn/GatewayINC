import Page2alt from '../pages/page2alt';
import Page8 from '../pages/page8';
import '../subpages.css';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

export default function Ireland({ homeData, irelandData }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="canadapage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Study in Ireland with Gateway INC | Expert Guidance & Services
        </title>

        <meta
          name="description"
          content="Explore Gateway INC's expert guidance and comprehensive services for studying in Ireland. From university admissions and visa assistance to accommodation and cultural integration, we ensure a seamless and successful study abroad experience in Ireland."
        />

        <meta
          name="keywords"
          content="study abroad, international education, university admissions, IELTS preparation, TOEFL preparation, PTE preparation, overseas education consultants, study abroad services, student accommodation abroad, global education, top universities, international students, admission guidance, study in USA, study in UK, study in Canada, study in Australia, study in Europe, education consultancy, student visa assistance, academic counseling, higher education abroad, language proficiency tests, gateway INC, global admissions, foreign universities, college applications, study abroad programs, study abroad scholarships, study abroad loans, study abroad fees, international student insurance, student exchange programs, study abroad internships, study abroad fellowships, study abroad research, language courses abroad, cultural exchange programs, short-term study abroad, long-term study abroad, dual degree programs, international partnerships, study abroad fairs, education expos, study abroad events, study abroad workshops, study abroad webinars, online language courses, online test preparation, online university applications, international career counseling, study abroad guides, study abroad resources, study abroad blogs, study abroad forums, study abroad communities, study abroad networks, study abroad agencies, study abroad mentors, study abroad tutors, study abroad advisors, study abroad tips, study abroad experiences, study abroad testimonials, study abroad success stories, study abroad challenges, study abroad opportunities, study abroad destinations, study abroad trends, study abroad news, study abroad updates, study abroad regulations, study abroad requirements, study abroad eligibility, study abroad deadlines, study abroad calendars, study abroad timelines, study abroad planning, study abroad checklists, study abroad itineraries, study abroad packages, study abroad deals, study abroad discounts, study abroad offers, study abroad finance, study abroad budgeting, study abroad expenses, study abroad saving, study abroad jobs, study abroad part-time work, study abroad career services, study abroad networks, study abroad alumni, study abroad clubs, study abroad activities, study abroad social life, study abroad events, study abroad tours, study abroad excursions, study abroad travel tips, study abroad packing lists, study abroad essentials, study abroad gear, study abroad equipment, study abroad preparation, overseas education, study abroad guide, study abroad consultation, university selection, student visa support, international scholarships, cultural immersion, study abroad planning, university application assistance, test preparation, education counseling, language training, international students services, academic advising, visa requirements, higher education consultancy, university rankings, global university admissions, study abroad options, study abroad opportunities, student housing, study visa, study abroad counselor, global education network, study abroad consultancy, international education support, overseas academic programs, study abroad preparation tips, global learning, international exchange programs, study abroad financial aid, study abroad insurance, study abroad logistics, international student support, cross-cultural education, study abroad goals, education abroad programs, student visa processing, international student resources, overseas higher education, global student network, academic programs abroad, international degree programs, overseas internships, student travel, study abroad lifestyle, university application process, overseas education trends, international study options, study abroad markets, education fairs, overseas student support, study abroad blogs, international academic services, higher education abroad consultants, study abroad expertise, global academic partnerships, student exchange opportunities, study abroad pathway programs, education abroad preparation, international study advice, student exchange schemes, international program offerings, student travel tips, international study experience, overseas student experiences, global academic exchanges, study abroad networking, overseas degree recognition, international education fairs"
        />
        <meta name="author" content="Gateway-INC" />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
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
