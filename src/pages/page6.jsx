export default function Page6({ homeData }) {
  return (
    <div className="page6">
      <div className="page6heading">{homeData.page6heading}</div>
      <div className="subheadpage6">{homeData.page6subheading}</div>
      <div className="servicedivpage6">
        <div className="servicecard">
          <div className="circleservicelogo">
            <img src="loricon.png" alt="" className="logoservicepage" />
          </div>
          <div className="servicetag">SOP / LOR Writing</div>
        </div>
        <div className="servicecard">
          <div className="circleservicelogo">
            <img
              src="accomodationicon.jpg"
              alt=""
              className="logoservicepage"
            />
          </div>
          <div className="servicetag">Accomodation</div>
        </div>
        <div className="servicecard">
          <div className="circleservicelogo">
            <img src="loanicon.png" alt="" className="logoservicepage" />
          </div>
          <div className="servicetag">Education Loan</div>
        </div>
        <div className="servicecard">
          <div className="circleservicelogo">
            <img src="visaicon.png" alt="" className="logoservicepage" />
          </div>
          <div className="servicetag">VISA Services</div>
        </div>
        <div className="servicecard">
          <div className="circleservicelogo">
            <img src="airticketsicon.jpg" alt="" className="logoservicepage" />
          </div>
          <div className="servicetag">Air Tickets</div>
        </div>
      </div>
    </div>
  );
}
