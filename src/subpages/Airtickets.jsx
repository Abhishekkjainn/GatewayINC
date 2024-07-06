import Page2alt from '../pages/page2alt';
import Page8 from '../pages/page8';
import '../subpages.css';

export default function AirTickets() {
  return (
    <div className="canadapage">
      <div className="page1canada page1airtickets">
        <div className="mainheadcanada">
          <div className="underhead">
            Simplify Your Air Travel with Gateway-INC.
          </div>
          <div className="summarysubpage">
            Gateway-INC provides comprehensive air ticketing services tailored
            for students planning to study abroad. Benefit from personalized
            assistance and expert guidance to ensure seamless and cost-effective
            travel arrangements.
          </div>
          <div className="enquirybutton">Send Enquiry</div>
        </div>
      </div>
      <div className="page2canada">
        <div className="page2canadahead">How Gateway-INC Can Assist You</div>
        <div className="page2canadacontent">
          Our <span className="bold">air travel specialists</span> offer a range
          of services designed to meet your travel needs. We provide expert
          advice on flight options, helping you find the most convenient and
          affordable routes to your destination. Whether you're flying one-way,
          round-trip, or need flexible ticketing options, we ensure you get the
          best deals available. <br />
          <br />
          We assist with <span className="bold">flight booking</span> by
          offering competitive prices and access to a wide network of airlines.
          Our team helps you compare fares, select appropriate travel dates, and
          manage changes or cancellations as needed. We prioritize your
          preferences and budget constraints, ensuring a smooth booking process.{' '}
          <br />
          <br />
          Our <span className="bold">travel insurance</span> services provide
          comprehensive coverage for unexpected events during your journey. We
          offer policies that include medical emergencies, trip cancellations,
          and lost luggage, ensuring you're protected throughout your travels.
          Our advisors help you choose the right insurance plan that meets your
          specific needs. <br />
          <br />
          We provide{' '}
          <span className="bold">visa and immigration assistance</span> to
          facilitate hassle-free travel. Our experts guide you through visa
          requirements, assist with application processes, and ensure you have
          the necessary documentation for seamless entry into your destination
          country. We offer support for transit visas, student visas, and other
          travel-related permits. <br />
          <br />
          Our <span className="bold">airport transfer services</span> ensure
          smooth transitions between flights and ground transportation. We
          arrange reliable airport pickups and drop-offs, coordinating with
          trusted transport providers to ensure punctuality and comfort. Whether
          you're arriving late at night or departing during peak hours, we
          ensure a stress-free travel experience. <br />
          <br />
          For students traveling with{' '}
          <span className="bold">special needs or preferences</span>, we provide
          personalized assistance. From dietary restrictions to mobility
          concerns, our team accommodates your unique requirements to ensure a
          comfortable and enjoyable journey. We prioritize your safety and
          well-being throughout your travel experience. <br />
          <br />
          Our <span className="bold">24/7 customer support</span> ensures
          assistance at every stage of your journey. Whether you have questions
          about flight schedules, need to make last-minute changes, or require
          emergency support during travel, our dedicated team is available to
          provide prompt and reliable assistance. <br />
          <br />
          With Gateway-Inc, you receive comprehensive support and reliable air
          ticketing services tailored to your student travel needs. Enjoy peace
          of mind knowing that your travel arrangements are handled with
          professionalism and efficiency, allowing you to focus on your academic
          journey abroad. <br />
        </div>
      </div>

      <Page2alt />
      <Page8 />
    </div>
  );
}
