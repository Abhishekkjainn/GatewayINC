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
          <div className="smallheadeducationcontent"></div>
          <div className="educationloanheading">
            Secure a Loan for Your Study Abroad Goals
          </div>
          <div className="contentlist">
            {/* <ul className="custom-bullet-list">
              {listItems.map((item, index) => (
                <li key={index} className="educationlist">
                  {item}
                </li>
              ))}
            </ul> */}
            <div className="loancontent">
              Gateway Inc. understands that financing studies abroad is a
              crucial step for many students. We take the hassle out of finding
              the perfect education loan. Our streamlined approach connects
              students with the right lender. Students don’t have to wade
              through endless possibilities. We assess student profiles and
              study abroad requirements to identify lenders offering the most
              suitable loan options. A smooth, paperless journey awaits them.
              Our digital platform eliminates the need for extensive paperwork.
              Students can enjoy a convenient and stress-free application
              process.
            </div>
          </div>
          <div className="talktoexpertbutton">Check Your Eligibility</div>
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
