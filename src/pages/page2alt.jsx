import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
export default function Page2alt({ homeData }) {
  return (
    <div className="page2alt">
      <div className="page2altbanner">
        <div className="contentpage2altbanner">
          <div className="page2altbannerheading">
            {homeData.page2altheading}
          </div>
          <div className="page2altbannersubheading">
            {homeData.page2altsubheading}
          </div>
        </div>
        <Link
          to={'/check-your-eligibility'}
          className="linkstyle buttondivbanner"
        >
          <div className="checkbutton">Check Eligibility</div>
        </Link>
      </div>
    </div>
  );
}
