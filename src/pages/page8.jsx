export default function Page8() {
  return (
    <div className="page8">
      <div className="consultbanner">
        <div className="consultimage">
          <img src="expert.png" alt="Experts" className="expertimage" />
        </div>
        <div className="consultform">
          <div className="consultformdiv">
            <div className="consultheading">
              Book A Free Consultation From Our Experts
            </div>
            <div className="inputdiv">
              <input
                type="text"
                name=""
                id=""
                className="inp"
                placeholder="Enter Your Name"
              />
              <input
                type="number"
                name=""
                id=""
                className="inp"
                placeholder="Enter Your Phone"
              />
              <input
                type="email"
                name=""
                id=""
                className="inp"
                placeholder="Enter Your Email"
              />
              <div className="submitbutton">Book A Session</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
