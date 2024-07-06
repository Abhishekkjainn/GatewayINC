import Page2alt from '../pages/page2alt';
import Page8 from '../pages/page8';
import '../subpages.css';
import { useEffect } from 'react';
export default function SOPLOR() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="canadapage">
      <div className="page1canada page1sop">
        <div className="mainheadcanada">
          {/* <img
            src="lorwriting.jpg"
            alt="Canada"
            className="canadaflagsubpage"
          /> */}
          <div className="underhead">
            Get Your SOP / LOR Writter by Professionals.
          </div>
          <div className="summarysubpage">
            Our specialists streamline the process of writing your Statement of
            Purpose (SOP) or Letter of Recommendation (LOR). Receive detailed
            information and step-by-step guidance to ensure a seamless and
            efficient procedure.
          </div>
          <div className="enquirybutton">Send Enquiry</div>
        </div>
      </div>
      <div className="page2canada">
        <div className="page2canadahead">How Gateway-INC Can Assist You</div>
        <div className="page2canadacontent">
          Our{' '}
          <span className="bold">
            {' '}
            professional writers craft top-notch Statements of Purpose (SOP) and
            Letters of Recommendation (LOR)
          </span>{' '}
          that elevate your profile in the candidate pool. We offer SOP
          development, creating compelling and tailored SOPs that highlight your
          strengths and aspirations. Our team personalizes your SOP to align
          with your unique background and goals and ensures your SOP is polished
          and error-free through meticulous proofreading. We guarantee SOPs of
          the highest quality, enhance your application, and deliver your SOP
          promptly without compromising on quality. Complimentary edits are
          available to ensure your SOP meets your expectations. <br />
          <br />
          We also offer{' '}
          <span className="bold"> personal statement writing services</span>,
          crafting genuine and reflective personal statements that accurately
          represent who you are. Our admission essay services include producing
          standout essays tailored for top universities, ensuring your
          application shines. We specialize in crafting application essays for
          universities in Canada and the United States, helping you secure
          admission to your dream institution. Additionally, our motivation
          letter services create unique letters of intent that reflect your
          specific situation. <br />
          <br />
          Our <span className="bold"> recommendation letter services</span>{' '}
          drafts letters for your professors, colleagues, or associates to sign,
          ensuring they reflect your strengths and achievements. Our skilled
          writers help you compose scholarship essays that showcase your
          knowledge and contributions, increasing your chances of securing
          scholarships. <br />
          <br />
          Our <span className="bold"> professional resume services</span>{' '}
          develop resumes that enhance your prospects for admission or
          employment. Lastly, we provide thorough reviews of your assignments,
          offering constructive feedback to help you improve and excel. With
          Gateway-Inc, you receive comprehensive support and expertly crafted
          documents to enhance your academic and professional applications.{' '}
          <br />
        </div>
      </div>

      <Page2alt />

      <Page8 />
    </div>
  );
}
