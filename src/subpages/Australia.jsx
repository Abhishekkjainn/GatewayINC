import Page2alt from '../pages/page2alt';
import Page8 from '../pages/page8';
import '../subpages.css';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
export default function Australia({ homeData, australiaData }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="canadapage">
      <Helmet>
        <meta charSet="utf-8" />

        <title>
          Study in Australia with Gateway INC | Expert Guidance & Services
        </title>

        <meta
          name="description"
          content="Discover Gateway INC's expert guidance and comprehensive services for studying in Australia. From university admissions and visa assistance to accommodation and cultural integration, we ensure a seamless and successful study abroad experience in Australia."
        />

        <meta
          name="keywords"
          content="study abroad, international education, university admissions, IELTS preparation, TOEFL preparation, PTE preparation, overseas education consultants, study abroad services, student accommodation abroad, global education, top universities, international students, admission guidance, study in USA, study in UK, study in Canada, study in Australia, study in Europe, education consultancy, student visa assistance, academic counseling, higher education abroad, language proficiency tests, gateway INC, global admissions, foreign universities, college applications, study abroad programs, study abroad scholarships, study abroad loans, study abroad fees, international student insurance, student exchange programs, study abroad internships, study abroad fellowships, study abroad research, language courses abroad, cultural exchange programs, short-term study abroad, long-term study abroad, dual degree programs, international partnerships, study abroad fairs, education expos, study abroad events, study abroad workshops, study abroad webinars, online language courses, online test preparation, online university applications, international career counseling, study abroad guides, study abroad resources, study abroad blogs, study abroad forums, study abroad communities, study abroad networks, study abroad agencies, study abroad mentors, study abroad tutors, study abroad advisors, study abroad tips, study abroad experiences, study abroad testimonials, study abroad success stories, study abroad challenges, study abroad opportunities, study abroad destinations, study abroad trends, study abroad news, study abroad updates, study abroad regulations, study abroad requirements, study abroad eligibility, study abroad deadlines, study abroad calendars, study abroad timelines, study abroad planning, study abroad checklists, study abroad itineraries, study abroad packages, study abroad deals, study abroad discounts, study abroad offers, study abroad finance, study abroad budgeting, study abroad expenses, study abroad saving, study abroad jobs, study abroad part-time work, study abroad career services, study abroad networks, study abroad alumni, study abroad clubs, study abroad activities, study abroad social life, study abroad events, study abroad tours, study abroad excursions, study abroad travel tips, study abroad packing lists, study abroad essentials, study abroad gear, study abroad equipment, study abroad preparation, overseas education, study abroad guide, study abroad consultation, university selection, student visa support, international scholarships, cultural immersion, study abroad planning, university application assistance, test preparation, education counseling, language training, international students services, academic advising, visa requirements, higher education consultancy, university rankings, global university admissions, study abroad options, study abroad opportunities, student housing, study visa, study abroad counselor, global education network, study abroad consultancy, international education support, overseas academic programs, study abroad preparation tips, global learning, international exchange programs, study abroad financial aid, study abroad insurance, study abroad logistics, international student support, cross-cultural education, study abroad goals, education abroad programs, student visa processing, international student resources, overseas higher education, global student network, academic programs abroad, international degree programs, overseas internships, student travel, study abroad lifestyle, university application process, overseas education trends, international study options, study abroad markets, education fairs, overseas student support, study abroad blogs, international academic services, higher education abroad consultants, study abroad expertise, global academic partnerships, student exchange opportunities, study abroad pathway programs, education abroad preparation, international study advice, student exchange schemes, international program offerings, student travel tips, international study experience, overseas student experiences, global academic exchanges, study abroad networking, overseas degree recognition, international education fairs"
        />
        <meta name="author" content="Gateway-INC" />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
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
