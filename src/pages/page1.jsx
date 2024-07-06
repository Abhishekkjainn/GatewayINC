import React from 'react';
import Marquee from 'react-fast-marquee';

export default function Page1({ homeData }) {
  return (
    <div className="page1">
      <div className="headingpage1">
        {homeData.Page1blackheading && ( // Check if data.Page1blackheading exists before rendering to avoid errors
          <span>
            {homeData.Page1blackheading} <br />
            <span className="bluetext">{homeData.page1blueheading}</span>
          </span>
        )}
        <br />
      </div>
      <div className="collegemarquee">
        <Marquee autoFill={true} pauseOnHover={true} speed={40} loop={0}>
          <div className="collegeimage college1"></div>
          <div className="collegeimage college2"></div>
          <div className="collegeimage college3"></div>
          <div className="collegeimage college4"></div>
          <div className="collegeimage college5"></div>
          <div className="collegeimage college6"></div>
          <div className="collegeimage college7"></div>
          <div className="collegeimage college8"></div>
          <div className="collegeimage college9"></div>
          <div className="collegeimage college10"></div>
          <div className="collegeimage college11"></div>
        </Marquee>
      </div>
      <div className="collegemarquee">
        <Marquee
          autoFill={true}
          pauseOnHover={true}
          speed={40}
          loop={0}
          direction="right"
        >
          <div className="collegeimage college12"></div>
          <div className="collegeimage college13"></div>
          <div className="collegeimage college14"></div>
          <div className="collegeimage college15"></div>
          <div className="collegeimage college16"></div>
          <div className="collegeimage college17"></div>
          <div className="collegeimage college18"></div>
          <div className="collegeimage college19"></div>
          <div className="collegeimage college20"></div>
          <div className="collegeimage college21"></div>
          <div className="collegeimage college22"></div>
        </Marquee>
      </div>
    </div>
  );
}
