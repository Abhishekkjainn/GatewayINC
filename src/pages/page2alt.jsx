import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
export default function Page2alt() {
  return (
    <div className="page2alt">
      <div className="page2altbanner">
        <div className="contentpage2altbanner">
          <div className="page2altbannerheading">
            Check Your Eligibility For Admission
          </div>
          <div className="page2altbannersubheading">
            Find Programs Aligned with Your Eligibility from a Vast Selection
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
