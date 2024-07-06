import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
export default function Page5({ homeData }) {
  return (
    <div className="page5">
      <div className="educationloanbannerdiv">
        <div className="educationloancontentdiv">
          <div className="smallheadeducationcontent"></div>
          <div className="educationloanheading">{homeData.page5heading}</div>
          <div className="contentlist">
            {/* <ul className="custom-bullet-list">
              {listItems.map((item, index) => (
                <li key={index} className="educationlist">
                  {item}
                </li>
              ))}
            </ul> */}
            <div className="loancontent">{homeData.page5content}</div>
          </div>
          <Link
            to={'/check-your-eligibility'}
            className=" linkstyle talktoexpertbutton"
          >
            Check Your Eligibility
          </Link>
        </div>
        <div className="educationloanimagediv">
          <img
            src="studentloan.png"
            alt="Student Loan"
            className="educationloanimage"
          />
        </div>
      </div>
    </div>
  );
}
