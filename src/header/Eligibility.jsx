import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';
import { Helmet } from 'react-helmet';

export default function Eligibility() {
  const [prefcountry, setPrefCountry] = useState('');
  const [latestEducation, setLatestEducation] = useState('');
  const [percent, setPercentage] = useState('');
  const [wpno, setWpNo] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = () => {
    if (!prefcountry || !latestEducation || !percent || !wpno) {
      toast.error('Please fill in all fields');
      return;
    }

    if (wpno.length !== 10) {
      toast.error('Phone number should be 10 digits');
      return;
    }

    if (/^[0-5]/.test(wpno)) {
      toast.error('Invalid Phone Number\nPlease Write a Valid Phone Number.');
      return;
    }

    // Data to submit
    const data = {
      prefcountry,
      latestEducation,
      percent,
      wpno,
    };

    fetch('https://sheetdb.io/api/v1/xspoygxkeyrgn', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: [data],
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setPrefCountry('');
        setLatestEducation('');
        setPercentage('');
        setWpNo('');
        toast.success('Submitted Succesfully!\nWe will Contact You Soon');
        console.log(data);
      })
      .catch((error) => {
        toast.error(error);
        console.error('Error:', error);
      });
  };

  return (
    <div className="eligibility">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Check Your Eligibility for Study Abroad | Gateway-Inc</title>
        <meta
          name="description"
          content="Find out if you qualify for studying abroad with Gateway INC. Check your eligibility for top universities and explore our expert admission services."
        />

        <meta
          name="keywords"
          content="study abroad, international education, university admissions, IELTS preparation, TOEFL preparation, PTE preparation, overseas education consultants, study abroad services, student accommodation abroad, global education, top universities, international students, admission guidance, study in USA, study in UK, study in Canada, study in Australia, study in Europe, education consultancy, student visa assistance, academic counseling, higher education abroad, language proficiency tests, gateway INC, global admissions, foreign universities, college applications, study abroad programs, study abroad scholarships, study abroad loans, study abroad fees, international student insurance, student exchange programs, study abroad internships, study abroad fellowships, study abroad research, language courses abroad, cultural exchange programs, short-term study abroad, long-term study abroad, dual degree programs, international partnerships, study abroad fairs, education expos, study abroad events, study abroad workshops, study abroad webinars, online language courses, online test preparation, online university applications, international career counseling, study abroad guides, study abroad resources, study abroad blogs, study abroad forums, study abroad communities, study abroad networks, study abroad agencies, study abroad mentors, study abroad tutors, study abroad advisors, study abroad tips, study abroad experiences, study abroad testimonials, study abroad success stories, study abroad challenges, study abroad opportunities, study abroad destinations, study abroad trends, study abroad news, study abroad updates, study abroad regulations, study abroad requirements, study abroad eligibility, study abroad deadlines, study abroad calendars, study abroad timelines, study abroad planning, study abroad checklists, study abroad itineraries, study abroad packages, study abroad deals, study abroad discounts, study abroad offers, study abroad finance, study abroad budgeting, study abroad expenses, study abroad saving, study abroad jobs, study abroad part-time work, study abroad career services, study abroad networks, study abroad alumni, study abroad clubs, study abroad activities, study abroad social life, study abroad events, study abroad tours, study abroad excursions, study abroad travel tips, study abroad packing lists, study abroad essentials, study abroad gear, study abroad equipment, study abroad preparation, overseas education, study abroad guide, study abroad consultation, university selection, student visa support, international scholarships, cultural immersion, study abroad planning, university application assistance, test preparation, education counseling, language training, international students services, academic advising, visa requirements, higher education consultancy, university rankings, global university admissions, study abroad options, study abroad opportunities, student housing, study visa, study abroad counselor, global education network, study abroad consultancy, international education support, overseas academic programs, study abroad preparation tips, global learning, international exchange programs, study abroad financial aid, study abroad insurance, study abroad logistics, international student support, cross-cultural education, study abroad goals, education abroad programs, student visa processing, international student resources, overseas higher education, global student network, academic programs abroad, international degree programs, overseas internships, student travel, study abroad lifestyle, university application process, overseas education trends, international study options, study abroad markets, education fairs, overseas student support, study abroad blogs, international academic services, higher education abroad consultants, study abroad expertise, global academic partnerships, student exchange opportunities, study abroad pathway programs, education abroad preparation, international study advice, student exchange schemes, international program offerings, student travel tips, international study experience, overseas student experiences, global academic exchanges, study abroad networking, overseas degree recognition, international education fairs"
        />
        <meta name="author" content="Gateway-INC" />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="page8 eligibility">
        <ToastContainer />
        <div className="consultbanner">
          <div className="consultimage">
            <img src="eligibility.png" alt="" className="expertimage" />
          </div>
          <div className="consultform">
            <div className="smallheading">
              <div className="circleconsult"></div> Get Guidance
            </div>
            <div className="headingconsult">Check Your Eligibility.</div>
            <div className="formdiv">
              <div className="namediv">
                <div className="firstname">
                  <div className="iconinp">
                    <img src="name.png" alt="Name" className="iconinpimage" />
                  </div>
                  <input
                    className="inputconsult"
                    type="text"
                    placeholder="Enter Preferred Country"
                    value={prefcountry}
                    onChange={(e) => setPrefCountry(e.target.value)}
                    list="country-list"
                  />
                  <datalist id="country-list">
                    <option value="Canada" />
                    <option value="Australia" />
                    <option value="USA" />
                    <option value="United Kingdom" />
                    <option value="Germany" />
                    <option value="Ireland" />
                  </datalist>
                </div>
                <div className="lastname">
                  <div className="iconinp">
                    <img src="name.png" alt="Name" className="iconinpimage" />
                  </div>
                  <input
                    className="inputconsult"
                    type="text"
                    placeholder="Enter Latest Education"
                    value={latestEducation}
                    onChange={(e) => setLatestEducation(e.target.value)}
                    list="latesteducation-list"
                  />
                  <datalist id="latesteducation-list">
                    <option value="Class 10th" />
                    <option value="Class 12th" />
                    <option value="Diploma" />
                    <option value="Bachelors" />
                    <option value="Masters" />
                  </datalist>
                </div>
              </div>
              <div className="namediv">
                <div className="firstname">
                  <div className="iconinp">
                    <img src="phone.png" alt="Name" className="iconinpimage" />
                  </div>
                  <input
                    className="inputconsult"
                    type="number"
                    placeholder="Enter Whatsapp No"
                    value={wpno}
                    onChange={(e) => setWpNo(e.target.value)}
                  />
                </div>
                <div className="lastname">
                  <div className="iconinp">
                    <img src="email.png" alt="Name" className="iconinpimage" />
                  </div>
                  <input
                    className="inputconsult"
                    type="email"
                    placeholder="Enter Percentage"
                    value={percent}
                    onChange={(e) => setPercentage(e.target.value)}
                  />
                </div>
              </div>
              <div className="submitbuttonconsult">
                <div className="submitbuttonbutton" onClick={handleSubmit}>
                  Get Eligibility
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
