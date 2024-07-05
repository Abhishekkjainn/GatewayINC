import Page2alt from '../pages/page2alt';
import Page8 from '../pages/page8';
import '../subpages.css';

export default function Accommodation() {
  return (
    <div className="canadapage">
      <div className="page1canada page1accomodation">
        <div className="mainheadcanada">
          <div className="underhead">
            Secure Your Ideal Accommodation Abroad with Ease.
          </div>
          <div className="summarysubpage">
            Our experts simplify the process of finding and securing student
            accommodation abroad. Receive comprehensive information and
            personalized assistance to ensure a smooth and comfortable
            transition to your new home.
          </div>
          <div className="enquirybutton">Send Enquiry</div>
        </div>
      </div>
      <div className="page2canada">
        <div className="page2canadahead">How Gateway-INC Can Assist You</div>
        <div className="page2canadacontent">
          Our <span className="bold"> professional accommodation advisors</span>{' '}
          offer top-tier services to help you find the perfect living space
          abroad. We provide detailed guidance on selecting the best
          accommodation based on your preferences, budget, and proximity to your
          institution. Our team works diligently to ensure that your new home is
          safe, comfortable, and conducive to your academic success. <br />
          <br />
          We assist with <span className="bold">securing housing</span>, whether
          it's university dormitories, private apartments, or homestays. Our
          advisors have extensive knowledge of local housing markets and can
          negotiate favorable terms on your behalf. We provide comprehensive
          support throughout the entire process, from initial search to
          finalizing agreements, ensuring a hassle-free experience. <br />
          <br />
          Our <span className="bold">settlement services</span> ensure you have
          everything you need upon arrival. We help you set up essential
          utilities, such as internet and phone services, and offer guidance on
          local amenities, transportation, and cultural acclimation. We strive
          to make your transition to a new country as seamless and stress-free
          as possible. <br />
          <br />
          Additionally, we offer <span className="bold">
            roommate matching
          </span>{' '}
          services for those who prefer shared living arrangements. We take into
          account your lifestyle preferences and compatibility to find suitable
          roommates, ensuring a harmonious living environment. <br />
          <br />
          Our <span className="bold">ongoing support</span> doesn't end once
          you've settled in. We provide continuous assistance and are available
          to address any issues or concerns you may have during your stay. With
          Gateway-inc, you can focus on your studies and enjoy your
          international experience without the worry of accommodation
          challenges. <br />
        </div>
      </div>

      <Page2alt />
      <Page8 />
    </div>
  );
}
