import Marquee from 'react-fast-marquee';
export default function Page1() {
  return (
    <div className="page1">
      <div className="headingpage1">
        Study at Your <br /> <span className="bluetext">Dream College.</span>{' '}
        <br />
      </div>
      {/* <div className="searchdivpage1">
        <div className="group">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
          <input className="input" type="search" placeholder="Search Courses" />
        </div>
      </div> */}
      <div className="collegemarquee">
        <Marquee autoFill={true} pauseOnHover={true} speed={40} loop={0}>
          <div className="collegeimage college1"></div>
          <div className="collegeimage college2"></div>
          <div className="collegeimage college3"></div>
          <div className="collegeimage college4"></div>
          <div className="collegeimage college5"></div>
          <div className="collegeimage college6"></div>
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
          <div className="collegeimage college1"></div>
          <div className="collegeimage college2"></div>
          <div className="collegeimage college3"></div>
          <div className="collegeimage college4"></div>
          <div className="collegeimage college5"></div>
          <div className="collegeimage college6"></div>
        </Marquee>
      </div>
    </div>
  );
}
