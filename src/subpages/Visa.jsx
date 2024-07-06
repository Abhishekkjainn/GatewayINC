import Page2alt from '../pages/page2alt';
import Page8 from '../pages/page8';
import '../subpages.css';

export default function Visa() {
  return (
    <div className="canadapage">
      <div className="page1canada page1visa">
        <div className="mainheadcanada">
          <div className="underhead">
            Navigate Your Visa Application with Gateway-INC.
          </div>
          <div className="summarysubpage">
            Our experts simplify the visa application process for students
            planning to study abroad. Receive detailed information and
            personalized assistance to ensure a smooth and successful visa
            application journey.
          </div>
          <div className="enquirybutton">Send Enquiry</div>
        </div>
      </div>
      <div className="page2canada">
        <div className="page2canadahead">How Gateway-INC Can Assist You</div>
        <div className="page2canadacontent">
          Our <span className="bold">visa specialists</span> provide expert
          guidance to navigate the complexities of visa applications. We offer
          comprehensive support, from understanding visa requirements to
          gathering and reviewing necessary documentation, ensuring your
          application is complete and accurate. <br />
          <br />
          We assist with <span className="bold">document preparation</span>,
          offering a detailed checklist of required documents such as financial
          statements, academic records, and acceptance letters from your
          institution. Our team meticulously reviews your paperwork to ensure
          compliance with visa regulations. <br />
          <br />
          Our <span className="bold">application support</span> includes
          step-by-step assistance in filling out visa forms correctly and advice
          on presenting your application to enhance your chances of approval. We
          provide personalized strategies to address any potential challenges,
          ensuring your application stands out. <br />
          <br />
          We offer <span className="bold">interview coaching</span> to help you
          prepare for visa interviews. Our advisors conduct mock interviews and
          provide tips on effectively answering questions, helping you feel
          confident and prepared for your actual interview. <br />
          <br />
          Our <span className="bold">tracking and follow-up</span> services keep
          you updated on the status of your application. We assist with any
          additional information requests from visa authorities and work to
          resolve any issues promptly, ensuring a smooth process. <br />
          <br />
          Post-arrival, we provide{' '}
          <span className="bold">settlement support</span> to help you adapt to
          your new environment. This includes guidance on local registration
          procedures, understanding your visa terms, and assistance with
          renewals or extensions if needed. <br />
          <br />
          Our services extend to <span className="bold">dependent visas</span>,
          ensuring your family members can accompany you during your studies. We
          offer detailed support for their visa applications, simplifying the
          process for your loved ones. <br />
          <br />
          For those facing visa rejections, we provide{' '}
          <span className="bold">appeal services</span>. Our experts analyze the
          reasons for denial and assist in preparing a robust appeal or
          reapplication, improving your chances of success. <br />
          <br />
          With Gateway-Inc, you benefit from extensive support and expert advice
          throughout your visa application process, allowing you to focus on
          your studies and prepare for your international adventure with peace
          of mind. <br />
        </div>
      </div>

      <Page2alt />
      <Page8 />
    </div>
  );
}
