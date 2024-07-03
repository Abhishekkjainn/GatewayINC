import { BrowserRouter as Router, Link } from 'react-router-dom';
export default function Page4() {
  return (
    <div className="page4">
      <div className="page4heading">Select Your Dream Destination</div>
      <div className="page4subheading">
        We've partnered with 600+ institutions worldwide.
      </div>
      <div className="countriespage4div">
        <div className="pg4countrydiv canadacountrydiv">
          <div className="topportion"></div>
          <div className="middleportion">
            <div className="headingcard">
              <div className="flagcard canadaflagcard"></div>
              Canada
            </div>
            <div className="middlecardcontent">
              Studying in Canada provides top-tier education, a multicultural
              environment, post-graduation work opportunities, and breathtaking
              natural scenery, making it a premier destination for students
              worldwide.
            </div>
          </div>
          <div className="bottomportion">
            <Link className="linkstyle viewdetailsbutton" to={'/canada'}>
              View Details
            </Link>
          </div>
        </div>
        <div className="pg4countrydiv ukcountrydiv">
          <div className="topportion"></div>
          <div className="middleportion">
            <div className="headingcard">
              <div className="flagcard ukflagcard"></div>
              UK
            </div>
            <div className="middlecardcontent">
              Studying in the UK offers a prestigious education system, diverse
              cultural experiences, and strong industry connections, all in a
              historic and dynamic setting.
            </div>
          </div>
          <div className="bottomportion">
            <Link to={'/uk'} className=" linkstyle viewdetailsbutton">
              View Details
            </Link>
          </div>
        </div>
        <div className="pg4countrydiv australiacountrydiv">
          <div className="topportion"></div>
          <div className="middleportion">
            <div className="headingcard">
              <div className="flagcard australiaflagcard"></div>
              Australia
            </div>
            <div className="middlecardcontent">
              Studying in Australia means top-notch education, multicultural
              experiences, and breathtaking landscapes, making it an enriching
              academic choice.
            </div>
          </div>
          <div className="bottomportion">
            <Link to={'/australia'} className="linkstyle viewdetailsbutton">
              View Details
            </Link>
          </div>
        </div>
        <div className="pg4countrydiv usacountrydiv">
          <div className="topportion"></div>
          <div className="middleportion">
            <div className="headingcard">
              <div className="flagcard usaflagcard"></div>
              USA
            </div>
            <div className="middlecardcontent">
              Studying in the USA provides world-class education, diverse
              cultural experiences, and strong career opportunities through
              internships and networking. Flexible academic programs allow for
              personalized education paths.
            </div>
          </div>
          <div className="bottomportion">
            <Link to={'/usa'} className="linkstyle viewdetailsbutton">
              View Details
            </Link>
          </div>
        </div>
        <div className="pg4countrydiv germanycountrydiv">
          <div className="topportion"></div>
          <div className="middleportion">
            <div className="headingcard">
              <div className="flagcard germanyflagcard"></div>
              Germany
            </div>
            <div className="middlecardcontent">
              Studying in Germany offers high-quality, low-cost education,
              diverse cultural experiences, and strong career opportunities
              through internships and industry connections. Many programs are
              available in English.
            </div>
          </div>
          <div className="bottomportion">
            <Link to={'/germany'} className="linkstyle viewdetailsbutton">
              View Details
            </Link>
          </div>
        </div>
        <div className="pg4countrydiv irelandcountrydiv">
          <div className="topportion"></div>
          <div className="middleportion">
            <div className="headingcard">
              <div className="flagcard irelandflagcard"></div>
              Ireland
            </div>
            <div className="middlecardcontent">
              Studying in Ireland offers high-quality education, a vibrant
              cultural experience, and strong industry connections. The country
              provides numerous English-taught programs and excellent career
              opportunities through internships.
            </div>
          </div>
          <div className="bottomportion">
            <Link to={'/ireland'} className="linkstyle viewdetailsbutton">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
