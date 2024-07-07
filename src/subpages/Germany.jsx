import Page2alt from '../pages/page2alt';
import Page8 from '../pages/page8';
import '../subpages.css';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

export default function Germany({ homeData, germanyData }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="canadapage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Study in Germany with Gateway INC | Expert Guidance & Services
        </title>

        <meta
          name="description"
          content="Explore Gateway INC's expert guidance and comprehensive services for studying in Germany. From university admissions and visa assistance to accommodation and language proficiency, we ensure a smooth and successful study abroad experience in Germany."
        />

        <meta
          name="keywords"
          content="study abroad, international education, university admissions, IELTS preparation, TOEFL preparation, PTE preparation, overseas education consultants, study abroad services, student accommodation abroad, global education, top universities, international students, admission guidance, study in USA, study in UK, study in Canada, study in Australia, study in Europe, education consultancy, student visa assistance, academic counseling, higher education abroad, language proficiency tests, gateway INC, global admissions, foreign universities, college applications, study abroad programs, study abroad scholarships, study abroad loans, study abroad fees, international student insurance, student exchange programs, study abroad internships, study abroad fellowships, study abroad research, language courses abroad, cultural exchange programs, short-term study abroad, long-term study abroad, dual degree programs, international partnerships, study abroad fairs, education expos, study abroad events, study abroad workshops, study abroad webinars, online language courses, online test preparation, online university applications, international career counseling, study abroad guides, study abroad resources, study abroad blogs, study abroad forums, study abroad communities, study abroad networks, study abroad agencies, study abroad mentors, study abroad tutors, study abroad advisors, study abroad tips, study abroad experiences, study abroad testimonials, study abroad success stories, study abroad challenges, study abroad opportunities, study abroad destinations, study abroad trends, study abroad news, study abroad updates, study abroad regulations, study abroad requirements, study abroad eligibility, study abroad deadlines, study abroad calendars, study abroad timelines, study abroad planning, study abroad checklists, study abroad itineraries, study abroad packages, study abroad deals, study abroad discounts, study abroad offers, study abroad finance, study abroad budgeting, study abroad expenses, study abroad saving, study abroad jobs, study abroad part-time work, study abroad career services, study abroad networks, study abroad alumni, study abroad clubs, study abroad activities, study abroad social life, study abroad events, study abroad tours, study abroad excursions, study abroad travel tips, study abroad packing lists, study abroad essentials, study abroad gear, study abroad equipment, study abroad preparation, overseas education, study abroad guide, study abroad consultation, university selection, student visa support, international scholarships, cultural immersion, study abroad planning, university application assistance, test preparation, education counseling, language training, international students services, academic advising, visa requirements, higher education consultancy, university rankings, global university admissions, study abroad options, study abroad opportunities, student housing, study visa, study abroad counselor, global education network, study abroad consultancy, international education support, overseas academic programs, study abroad preparation tips, global learning, international exchange programs, study abroad financial aid, study abroad insurance, study abroad logistics, international student support, cross-cultural education, study abroad goals, education abroad programs, student visa processing, international student resources, overseas higher education, global student network, academic programs abroad, international degree programs, overseas internships, student travel, study abroad lifestyle, university application process, overseas education trends, international study options, study abroad markets, education fairs, overseas student support, study abroad blogs, international academic services, higher education abroad consultants, study abroad expertise, global academic partnerships, student exchange opportunities, study abroad pathway programs, education abroad preparation, international study advice, student exchange schemes, international program offerings, student travel tips, international study experience, overseas student experiences, global academic exchanges, study abroad networking, overseas degree recognition, international education fairs"
        />
        <meta name="author" content="Gateway-INC" />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="page1canada page1germany">
        <div className="mainheadcanada">
          <img
            src="germanyflag.png"
            alt="Germany"
            className="canadaflagsubpage"
          />
          <div className="underhead">{germanyData.Germanypage1heading}</div>
          <div className="summarysubpage">
            {germanyData.Germanypage1subheading}
          </div>
          <div className="enquirybutton">Send Enquiry</div>
        </div>
      </div>
      <div className="page2canada">
        <div className="page2canadahead">{germanyData.Germanypage2heading}</div>
        <div
          className="page2canadacontent"
          dangerouslySetInnerHTML={{ __html: germanyData.Germanypage2content }}
        ></div>
      </div>
      <div className="page2canada border">
        <div className="page2canadahead">{germanyData.Germanypage3heading}</div>
        <div
          className="page2canadacontent"
          dangerouslySetInnerHTML={{ __html: germanyData.Germanypage3content }}
        ></div>
      </div>
      <Page2alt homeData={homeData} />
      <div className="page2canada white">
        <div className="page2canadahead">{germanyData.Germanypage4heading}</div>
        <div
          className="page2canadacontent "
          dangerouslySetInnerHTML={{ __html: germanyData.Germanypage4content }}
        ></div>
      </div>
      <div className="page2canada border">
        <div className="page2canadahead">{germanyData.Germanypage5heading}</div>
        <div
          className="page2canadacontent "
          dangerouslySetInnerHTML={{ __html: germanyData.Germanypage5content }}
        ></div>
      </div>
      <div className="page2canada white">
        <div className="page2canadahead">Best Universities in Germany</div>
        <div className="page2canadacontent ">
          Germany boasts prestigious universities recognized for their diverse
          degree programs and state-of-the-art facilities, including modern
          libraries, spacious auditoriums, and advanced research centers,
          ensuring high standards of education. These universities also offer
          on-campus accommodations such as comfortable dormitories, residential
          halls, and apartments, providing a secure and enjoyable environment
          for students. Currently, German universities are highly ranked
          globally, with several institutions featured in the QS World
          University Ranking 2024, showcasing their excellence in education and
          research. Here's a glimpse into the top 10 German universities for the
          academic year 2023, highlighting their rankings in QS World
          University, Times Higher Education, and other prestigious rankings.
          <br />
          <br />
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>University Name</th>
                  <th>Location</th>
                  <th>Times Higher Education Ranking 2023 (Globally)</th>
                  <th>Approximate Tuition Fee per year (EUR)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Technical University of Munich (TUM)</td>
                  <td>Munich</td>
                  <td>41</td>
                  <td>1,500</td>
                </tr>
                <tr>
                  <td>Ludwig Maximilian University of Munich (LMU)</td>
                  <td>Munich</td>
                  <td>32</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Heidelberg University</td>
                  <td>Heidelberg</td>
                  <td>42</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>University of Freiburg</td>
                  <td>Freiburg</td>
                  <td>79</td>
                  <td>1,500</td>
                </tr>
                <tr>
                  <td>Charité - Universitätsmedizin Berlin</td>
                  <td>Berlin</td>
                  <td>65</td>
                  <td>1,500</td>
                </tr>
                <tr>
                  <td>University of Mannheim</td>
                  <td>Mannheim</td>
                  <td>62</td>
                  <td>1,500</td>
                </tr>
                <tr>
                  <td>University of Tübingen</td>
                  <td>Tübingen</td>
                  <td>89</td>
                  <td>1,500</td>
                </tr>
                <tr>
                  <td>Humboldt University of Berlin</td>
                  <td>Berlin</td>
                  <td>84</td>
                  <td>1,500</td>
                </tr>
                <tr>
                  <td>University of Bonn</td>
                  <td>Bonn</td>
                  <td>103</td>
                  <td>1,500</td>
                </tr>
                <tr>
                  <td>University of Göttingen</td>
                  <td>Göttingen</td>
                  <td>119</td>
                  <td>1,500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="page2canada border">
        <div className="page2canadahead">{germanyData.Germanypage5heading}</div>
        <div
          className="page2canadacontent "
          dangerouslySetInnerHTML={{ __html: germanyData.Germanypage7content }}
        ></div>
      </div>
      <div className="page2canada white">
        <div className="page2canadahead">
          Scholarships Available for Germany
        </div>
        <div className="page2canadacontent ">
          Germany offers a wide range of scholarships to deserving international
          students who demonstrate exceptional academic achievements and active
          engagement in extracurricular activities. These scholarships, provided
          by German universities and external organizations, aim to reduce the
          financial burden of studying abroad. Additionally, scholarships based
          on financial need ensure accessibility for students from diverse
          economic backgrounds.
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
                  <td>DAAD Scholarships</td>
                  <td>
                    Scholarships offered by the German Academic Exchange Service
                    (DAAD) for international students pursuing undergraduate,
                    graduate, or doctoral studies in Germany
                  </td>
                  <td>
                    Varies; covers tuition fees, monthly stipend, and health
                    insurance
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Erasmus+ Scholarships</td>
                  <td>
                    EU-funded scholarships for students from EU and partner
                    countries to study in Germany as part of exchange programs
                    or joint master's degrees
                  </td>
                  <td>Varies based on program and duration</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Deutschlandstipendium</td>
                  <td>
                    Merit-based scholarships funded by private donors and the
                    German government, supporting talented students at German
                    universities
                  </td>
                  <td>
                    EUR 300 per month; half funded by private donors, half by
                    the government
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Heinrich Böll Foundation Scholarships</td>
                  <td>
                    Scholarships for international students pursuing a master's
                    or doctoral degree in Germany with a focus on environmental
                    and social issues
                  </td>
                  <td>EUR 850 per month plus additional benefits</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Friedrich Ebert Foundation Scholarships</td>
                  <td>
                    Scholarships for international students committed to social
                    democracy and socio-political engagement, supporting
                    master's students in various fields
                  </td>
                  <td>EUR 750 per month plus allowances</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Konrad-Adenauer-Stiftung Scholarships</td>
                  <td>
                    Scholarships for international students demonstrating
                    academic excellence and commitment to Christian-democratic
                    values, supporting master's and doctoral candidates
                  </td>
                  <td>EUR 850 per month plus additional benefits</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>
                    Bayreuth International Graduate School of African Studies
                    (BIGSAS) Scholarships
                  </td>
                  <td>
                    Scholarships for doctoral students conducting research in
                    African Studies at the University of Bayreuth
                  </td>
                  <td>
                    EUR 1,200 per month plus travel and research allowances
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Humboldt Research Track Scholarship</td>
                  <td>
                    Scholarships for international doctoral students in STEM
                    fields to conduct research at Humboldt University of Berlin
                  </td>
                  <td>
                    EUR 1,200 per month plus research and travel allowances
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Deutsche Bundesbank Scholarship Program</td>
                  <td>
                    Scholarships for students interested in central banking and
                    financial stability, supporting master's and doctoral
                    candidates
                  </td>
                  <td>EUR 1,350 per month plus benefits</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>ESMT Women's Academic Scholarship</td>
                  <td>
                    Scholarship for female candidates applying to the ESMT
                    Berlin Full-time MBA program, promoting diversity and
                    leadership in business education
                  </td>
                  <td>Up to EUR 15,000</td>
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
