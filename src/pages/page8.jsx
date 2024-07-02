export default function Page8() {
  return (
    <div className="page8">
      <div className="consultbanner">
        <div className="consultimage">
          <img src="expert.png" alt="" className="expertimage" />
        </div>
        <div className="consultform">
          <div className="smallheading">
            <div className="circleconsult"></div> Consult Experts
          </div>
          <div className="headingconsult">
            Uncertain about what you need? Provide your details for a call-back.
          </div>
          <div className="formdiv">
            <div className="namediv">
              <div className="firstname">
                <div className="iconinp">
                  <img src="name.png" alt="Name" className="iconinpimage" />
                </div>
                <input
                  className="inputconsult"
                  type="text"
                  placeholder="Enter First Name"
                />
              </div>
              <div className="lastname">
                <div className="iconinp">
                  <img src="name.png" alt="Name" className="iconinpimage" />
                </div>
                <input
                  className="inputconsult"
                  type="text"
                  placeholder="Enter Last Name"
                />
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
                  placeholder="Enter Phone No"
                />
              </div>
              <div className="lastname">
                <div className="iconinp">
                  <img src="email.png" alt="Name" className="iconinpimage" />
                </div>
                <input
                  className="inputconsult"
                  type="email"
                  placeholder="Enter Email ID"
                />
              </div>
            </div>
            <div className="submitbuttonconsult">
              <div className="submitbuttonbutton">Book A Session</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
