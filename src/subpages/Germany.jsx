import Page2alt from '../pages/page2alt';
import Page8 from '../pages/page8';
import '../subpages.css';
import { useEffect } from 'react';

export default function Germany({ homeData, germanyData }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="canadapage">
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
