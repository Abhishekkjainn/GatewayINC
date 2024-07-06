import Page2alt from '../pages/page2alt';
import Page8 from '../pages/page8';
import '../subpages.css';
import { useEffect } from 'react';

export default function ForexServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="canadapage">
      <div className="page1canada page1forex">
        <div className="mainheadcanada">
          <div className="underhead">
            Simplify Your Forex Needs with Gateway-INC.
          </div>
          <div className="summarysubpage">
            Our experts streamline the process of managing foreign exchange for
            students studying abroad. Receive comprehensive information and
            personalized assistance to ensure secure, cost-effective, and
            hassle-free currency exchanges.
          </div>
          <div className="enquirybutton">Send Enquiry</div>
        </div>
      </div>
      <div className="page2canada">
        <div className="page2canadahead">How Gateway-INC Can Assist You</div>
        <div className="page2canadacontent">
          Our <span className="bold">professional forex advisors</span> offer
          specialized services to meet your foreign exchange needs efficiently
          and securely. We provide detailed guidance on the best practices for
          managing your currency exchange, ensuring you get the most favorable
          rates. Our team works tirelessly to offer solutions tailored to your
          specific requirements, making sure your funds are available when and
          where you need them. <br />
          <br />
          We assist with <span className="bold">currency exchange</span> by
          offering competitive rates and low fees. Our network of trusted forex
          partners ensures that you receive the best possible value for your
          money. We provide a seamless process for exchanging currencies,
          whether you're converting funds for tuition payments, living expenses,
          or travel needs. <br />
          <br />
          Our <span className="bold">international money transfer</span>{' '}
          services guarantee fast and secure transfers to any destination
          worldwide. We understand the urgency and importance of timely
          financial support for students abroad, and our efficient transfer
          system ensures that your funds reach their destination promptly.{' '}
          <br />
          <br />
          We offer <span className="bold">forex cards</span> that are preloaded
          with your chosen currency, providing a convenient and secure way to
          access your money abroad. These cards are widely accepted and offer
          benefits such as reduced transaction fees and favorable exchange
          rates. Our advisors help you select and manage the best forex card for
          your needs. <br />
          <br />
          Our <span className="bold">travel insurance services</span> provide
          peace of mind by covering unexpected expenses during your stay abroad.
          We offer comprehensive insurance plans that include medical
          emergencies, trip cancellations, and loss of personal belongings,
          ensuring you are well-protected during your international journey.{' '}
          <br />
          <br />
          Our <span className="bold">financial planning assistance</span> helps
          you budget and manage your finances effectively while studying abroad.
          We provide personalized advice and tools to help you track your
          expenses, plan your budget, and make informed financial decisions.{' '}
          <br />
          <br />
          Additionally, we offer{' '}
          <span className="bold">forex market updates</span> and insights to
          keep you informed about currency trends and fluctuations. Our experts
          analyze the market and provide timely updates, helping you make the
          best decisions regarding your forex needs. <br />
          <br />
          With Gateway-Inc, you receive comprehensive support and expert
          guidance to manage your forex requirements efficiently, allowing you
          to focus on your studies and enjoy your international experience
          without financial worries. <br />
        </div>
      </div>

      <Page2alt />
      <Page8 />
    </div>
  );
}
