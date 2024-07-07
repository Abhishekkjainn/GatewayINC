import Page2alt from '../pages/page2alt';
import Page8 from '../pages/page8';
import '../subpages.css';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
export default function UK({ homeData, ukData }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="canadapage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Study in UK with Gateway INC | Expert Guidance & Services</title>

        <meta
          name="description"
          content="Explore Gateway INC's expert guidance and comprehensive services for studying in the UK. From university admissions and visa assistance to accommodation and cultural integration, we ensure a seamless and successful study abroad experience in the United Kingdom."
        />

        <meta
          name="keywords"
          content="study abroad, international education, university admissions, IELTS preparation, TOEFL preparation, PTE preparation, overseas education consultants, study abroad services, student accommodation abroad, global education, top universities, international students, admission guidance, study in USA, study in UK, study in Canada, study in Australia, study in Europe, education consultancy, student visa assistance, academic counseling, higher education abroad, language proficiency tests, gateway INC, global admissions, foreign universities, college applications, study abroad programs, study abroad scholarships, study abroad loans, study abroad fees, international student insurance, student exchange programs, study abroad internships, study abroad fellowships, study abroad research, language courses abroad, cultural exchange programs, short-term study abroad, long-term study abroad, dual degree programs, international partnerships, study abroad fairs, education expos, study abroad events, study abroad workshops, study abroad webinars, online language courses, online test preparation, online university applications, international career counseling, study abroad guides, study abroad resources, study abroad blogs, study abroad forums, study abroad communities, study abroad networks, study abroad agencies, study abroad mentors, study abroad tutors, study abroad advisors, study abroad tips, study abroad experiences, study abroad testimonials, study abroad success stories, study abroad challenges, study abroad opportunities, study abroad destinations, study abroad trends, study abroad news, study abroad updates, study abroad regulations, study abroad requirements, study abroad eligibility, study abroad deadlines, study abroad calendars, study abroad timelines, study abroad planning, study abroad checklists, study abroad itineraries, study abroad packages, study abroad deals, study abroad discounts, study abroad offers, study abroad finance, study abroad budgeting, study abroad expenses, study abroad saving, study abroad jobs, study abroad part-time work, study abroad career services, study abroad networks, study abroad alumni, study abroad clubs, study abroad activities, study abroad social life, study abroad events, study abroad tours, study abroad excursions, study abroad travel tips, study abroad packing lists, study abroad essentials, study abroad gear, study abroad equipment, study abroad preparation, overseas education, study abroad guide, study abroad consultation, university selection, student visa support, international scholarships, cultural immersion, study abroad planning, university application assistance, test preparation, education counseling, language training, international students services, academic advising, visa requirements, higher education consultancy, university rankings, global university admissions, study abroad options, study abroad opportunities, student housing, study visa, study abroad counselor, global education network, study abroad consultancy, international education support, overseas academic programs, study abroad preparation tips, global learning, international exchange programs, study abroad financial aid, study abroad insurance, study abroad logistics, international student support, cross-cultural education, study abroad goals, education abroad programs, student visa processing, international student resources, overseas higher education, global student network, academic programs abroad, international degree programs, overseas internships, student travel, study abroad lifestyle, university application process, overseas education trends, international study options, study abroad markets, education fairs, overseas student support, study abroad blogs, international academic services, higher education abroad consultants, study abroad expertise, global academic partnerships, student exchange opportunities, study abroad pathway programs, education abroad preparation, international study advice, student exchange schemes, international program offerings, student travel tips, international study experience, overseas student experiences, global academic exchanges, study abroad networking, overseas degree recognition, international education fairs"
        />
        <meta name="author" content="Gateway-INC" />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="page1canada page1uk">
        <div className="mainheadcanada">
          <img src="ukflag.png" alt="Canada" className="canadaflagsubpage" />
          <div className="underhead">{ukData.Ukpage1heading}</div>
          <div className="summarysubpage">{ukData.Ukpage1subheading}</div>
          <div className="enquirybutton">Send Enquiry</div>
        </div>
      </div>
      <div className="page2canada">
        <div className="page2canadahead">{ukData.Ukpage2heading}</div>
        <div
          className="page2canadacontent"
          dangerouslySetInnerHTML={{ __html: ukData.Ukpage2content }}
        ></div>
      </div>
      <div className="page2canada border">
        <div className="page2canadahead">{ukData.Ukpage3heading}</div>
        <div
          className="page2canadacontent"
          dangerouslySetInnerHTML={{ __html: ukData.Ukpage3content }}
        ></div>
      </div>
      <Page2alt homeData={homeData} />
      <div className="page2canada white">
        <div className="page2canadahead">
          <span className="bold">{ukData.Ukpage4heading}</span>
        </div>
        <div
          className="page2canadacontent "
          dangerouslySetInnerHTML={{ __html: ukData.Ukpage4content }}
        ></div>
      </div>
      <div className="page2canada border">
        <div className="page2canadahead">{ukData.Ukpage5heading}</div>
        <div
          className="page2canadacontent "
          dangerouslySetInnerHTML={{ __html: ukData.Ukpage5content }}
        ></div>
      </div>
      <div className="page2canada white">
        <div className="page2canadahead">
          Top Universities to Study in the UK
        </div>
        <div className="page2canadacontent ">
          Prospective students seeking academic excellence will find top-tier
          universities in the UK ideal for their international studies. These
          prestigious institutions offer a rich academic heritage, learning
          opportunities with experienced professors and industry experts, and
          collaboration with a diverse global student body. Whether students are
          interested in arts, science, technology, or business, UK universities
          provide an education that prepares them for a successful future.
          <br />
          <br />
          Below are some of the leading universities in the UK, noted for their
          QS World University Rankings 2024 and Times Higher Education Rankings
          2023:
          <br />
          <br />
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>Name of the University</th>

                  <th>QS World University Rankings 2024</th>
                  <th>Times Higher Education 2023</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>University of Cambridge</td>
                  {/* <td>Renowned for academic excellence and historic legacy</td> */}
                  <td>#2</td>
                  <td>#3</td>
                  <td>Cambridge, UK</td>
                </tr>
                <tr>
                  <td>University of Oxford</td>
                  {/* <td>A leading institution with a rich scholarly tradition</td> */}
                  <td>#3</td>
                  <td>#1</td>
                  <td>Oxford, UK</td>
                </tr>
                <tr>
                  <td>Imperial College London</td>
                  {/* <td>Focus on science, engineering, and medicine</td> */}
                  <td>#6</td>
                  <td>#10</td>
                  <td>London, UK</td>
                </tr>
                <tr>
                  <td>University College London</td>
                  {/* <td>Multidisciplinary university in the heart of London</td> */}
                  <td>#10</td>
                  <td>#16</td>
                  <td>London, UK</td>
                </tr>
                <tr>
                  <td>London School of Economics and Political Science</td>
                  {/* <td>Specializes in social sciences and economics</td> */}
                  <td>#45</td>
                  <td>#37</td>
                  <td>London, UK</td>
                </tr>
                <tr>
                  <td>University of Edinburgh</td>
                  {/* <td>A broad range of programs and strong research</td> */}
                  <td>#22</td>
                  <td>#29</td>
                  <td>Edinburgh, UK</td>
                </tr>
                <tr>
                  <td>Kings College London</td>
                  {/* <td>Known for health sciences and humanities</td> */}
                  <td>#40</td>
                  <td>#38</td>
                  <td>London, UK</td>
                </tr>
                <tr>
                  <td>University of Manchester</td>
                  {/* <td>A Russell Group member and research-intensive</td> */}
                  <td>#32</td>
                  <td>#54</td>
                  <td>Manchester, UK</td>
                </tr>
                <tr>
                  <td>University of Bristol</td>
                  {/* <td>Research-oriented with a strong student community</td> */}
                  <td>#55</td>
                  <td>#76</td>
                  <td>Bristol, UK</td>
                </tr>
                <tr>
                  <td>University of Glasgow</td>
                  {/* <td>Broad curriculum and vibrant student life</td> */}
                  <td>#76</td>
                  <td>#82</td>
                  <td>Glasgow, UK</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="page2canada border">
        <div className="page2canadahead">{ukData.Ukpage7heading}</div>
        <div
          className="page2canadacontent "
          dangerouslySetInnerHTML={{ __html: ukData.Ukpage7content }}
        ></div>
      </div>
      <div className="page2canada white">
        <div className="page2canadahead">
          Scholarships Available for Study in the UK
        </div>
        <div className="page2canadacontent ">
          Scholarships are financial awards provided to eligible students in the
          UK to cover their educational expenses. These awards vary in value and
          criteria, and they are offered by diverse sources including the UK
          government, educational institutions, private organizations, and
          international bodies. These scholarships play a crucial role in
          promoting international educational exchange programs, particularly
          benefiting Indian students through dedicated UK scholarships. Students
          are encouraged to explore and apply for scholarships that align with
          their academic achievements, chosen field of study, and financial
          circumstances.
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
                  <td>Chevening Scholarship</td>
                  <td>
                    Global scholarship program funded by the UK government,
                    covering tuition, living expenses, and more
                  </td>
                  <td>up to £18,000</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Commonwealth Scholarship and Fellowship</td>
                  <td>
                    Offered by the UK government to students from Commonwealth
                    countries for various study levels and fields
                  </td>
                  <td>Over £1,000 every month</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>GREAT Scholarship</td>
                  <td>
                    Collaborative scholarships among UK universities aimed at
                    students from specific countries, fostering cultural
                    exchange
                  </td>
                  <td>£10,000</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Charles Wallace India Trust Scholarships (CWIT)</td>
                  <td>
                    Supports academic and professional development of Indian
                    students through grants and fellowships
                  </td>
                  <td>£ 1,500</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Scotland Saltire Scholarships</td>
                  <td>
                    Scholarships for students from Canada, China, India, Japan,
                    Pakistan, and the USA to study in Scotland
                  </td>
                  <td>£8,000</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Mackenzie King Memorial Scholarships</td>
                  <td>
                    For Canadian graduates to study in the UK, emphasizing
                    leadership and public service
                  </td>
                  <td>Over £8,225</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>BAFTA Scholarships</td>
                  <td>
                    Scholarships supporting talented individuals pursuing
                    careers in film, games, or television industries
                  </td>
                  <td>Maximum of £20,000 for 2 year courses</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Inlaks Scholarship</td>
                  <td>
                    Supports Indian students for postgraduate courses at top
                    international universities, including those in the UK
                  </td>
                  <td>up to £78,335</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Global Study Awards</td>
                  <td>
                    Aimed at encouraging students to study abroad, covering
                    travel, accommodation, and academic expenses
                  </td>
                  <td>A maximum value of £10,000</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Rhodes Scholarships</td>
                  <td>
                    Prestigious award for postgraduate study at the University
                    of Oxford, based on academic excellence and leadership
                  </td>
                  <td>£17,310 (INR 1755470) per annum</td>
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
