export default function Page8() {
  return (
    <div className="page8">
      <div className="formdiv">
        <div className="formimage">
          <img src="expert.png" alt="Expert" className="formimageimg" />
        </div>
        <div className="contactformdiv">
          <div className="form">
            <div className="headingdiv">
              <div className="headingtagform">
                <div className="pulsediv">
                  <div className="pulse"></div>
                </div>
                Book A Free Consulation
              </div>
            </div>
            <div className="inputdiv">
              <div className="inputdivlabel">Full Name</div>
              <input
                type="text"
                name="fullname"
                id="fullname"
                className="inputdivinput"
              />
            </div>
            <div className="inputdiv">
              <div className="inputdivlabel">Email</div>
              <input
                type="text"
                name="fullname"
                id="fullname"
                className="inputdivinput"
              />
            </div>
            <div className="inputdiv">
              <div className="inputdivlabel">Phone Number</div>
              <input
                type="number"
                name="fullname"
                id="fullname"
                className="inputdivinput"
              />
            </div>
            <div className="submitbutton">Submit</div>
          </div>
        </div>
      </div>
    </div>
  );
}
