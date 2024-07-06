import Page2alt from '../pages/page2alt';
import Page8 from '../pages/page8';
import '../subpages.css';
import { useEffect } from 'react';
export default function UK({ homeData, ukData }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="canadapage">
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
