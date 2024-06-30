export default function Page5() {
  const listItems = [
    'Flexible & Competitive Interest rates',
    'Supports all Majors, Degree & Diplomas',
    'Quick approval within 3 working days',
    'Loan Tenure upto 15 years',
    'Personal Advisor for you exclusively for Guidance',
  ];
  return (
    <div className="page5">
      <div className="educationloanbannerdiv">
        <div className="educationloancontentdiv">
          <div className="smallheadeducationcontent">Gateway Finance</div>
          <div className="educationloanheading">
            Unlock Your World: Study Abroad Loans Made Easy
          </div>
          <div className="contentlist">
            <ul className="custom-bullet-list">
              {listItems.map((item, index) => (
                <li key={index} className="educationlist">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="talktoexpertbutton">Talk To Our Expert</div>
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
