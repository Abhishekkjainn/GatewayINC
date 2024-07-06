import { BrowserRouter as Router, Link } from 'react-router-dom';
export default function Page4({ homeData }) {
  return (
    <div className="page4">
      <div className="page4heading">{homeData.page4heading}</div>
      <div className="page4subheading">{homeData.page4subheading}</div>
      <div className="countriespage4div">
        <div className="pg4countrydiv canadacountrydiv">
          <div className="topportion"></div>
          <div className="middleportion">
            <div className="headingcard">
              <div className="flagcard canadaflagcard"></div>
              Canada
            </div>
            <div className="middlecardcontent">{homeData.canadabannerdesc}</div>
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
            <div className="middlecardcontent">{homeData.ukbannerdesc}</div>
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
              {homeData.australiabannerdesc}
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
            <div className="middlecardcontent">{homeData.usabannerdesc}</div>
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
              {homeData.germanybannerdesc}
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
              {homeData.irelandbannerdesc}
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
