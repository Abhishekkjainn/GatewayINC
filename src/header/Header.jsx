import { useState, useEffect } from 'react';

export default function Header() {
  const [activeBanner, setActiveBanner] = useState(null);
  const [bannerVisible, setBannerVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  // Clear timeout when component unmounts
  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  // Function to handle mouse enter on linkdiv
  const handleMouseEnter = (banner) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setActiveBanner(banner);
    setBannerVisible(true);
  };

  // Function to handle mouse leave on linkdiv
  const handleMouseLeave = () => {
    setTimeoutId(
      setTimeout(() => {
        setBannerVisible(false);
        setActiveBanner(null);
      }, 1200)
    ); // Adjust delay time here (2000 milliseconds = 2 seconds)
  };

  // Function to handle mouse enter on headerunderbanner
  const handleBannerMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  // Function to handle mouse leave on headerunderbanner
  const handleBannerMouseLeave = () => {
    setTimeoutId(
      setTimeout(() => {
        setBannerVisible(false);
        setActiveBanner(null);
      }, 1200)
    ); // Adjust delay time here (2000 milliseconds = 2 seconds)
  };

  return (
    <div className="header">
      <div className="company">
        <img src="/mainlogo.png" alt="Gateway Main Logo" className="mainlogo" />
      </div>
      <div className="headerlinks">
        {/* Study Abroad Link */}
        <div
          className="linkdiv studyabroadlink"
          onMouseEnter={() => handleMouseEnter('studyabroad')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="linktag">Study Abroad</div>
          <div className="undercircle"></div>
        </div>
        <div
          className="headerunderbanner sabanner"
          style={{
            display:
              activeBanner === 'studyabroad' && bannerVisible ? 'flex' : 'none',
          }}
          onMouseEnter={handleBannerMouseEnter}
          onMouseLeave={handleBannerMouseLeave}
        >
          <div className="countrydiv">
            <div className="countryimg canadadiv">
              <img src="/canadaflag.png" alt="" className="countryflagimage" />
            </div>
            <div className="countryinfo">
              <div className="countryhead">Canada</div>
              <div className="countrydesc">
                Unlock Your Potential : Education, Diversity, and Boundless
                Opportunities Await
              </div>
            </div>
          </div>
          <div className="countrydiv">
            <div className="countryimg canadadiv">
              <img src="/usaflag.png" alt="" className="countryflagimage" />
            </div>
            <div className="countryinfo">
              <div className="countryhead">USA</div>
              <div className="countrydesc">
                Study in the USA: Where Innovation Meets Opportunity for Your
                Bright Future.
              </div>
            </div>
          </div>
          <div className="countrydiv">
            <div className="countryimg canadadiv">
              <img src="/ukflag.png" alt="" className="countryflagimage" />
            </div>
            <div className="countryinfo">
              <div className="countryhead">UK</div>
              <div className="countrydesc">
                Study in the UK: Forge Your Path to Excellence and Global
                Success.
              </div>
            </div>
          </div>
          <div className="countrydiv">
            <div className="countryimg canadadiv">
              <img
                src="/australiaflag.png"
                alt=""
                className="countryflagimage"
              />
            </div>
            <div className="countryinfo">
              <div className="countryhead">Australia</div>
              <div className="countrydesc">
                Study in Australia: Embrace Excellence and Adventure Down Under.
              </div>
            </div>
          </div>
          <div className="countrydiv">
            <div className="countryimg canadadiv">
              <img src="/germanyflag.png" alt="" className="countryflagimage" />
            </div>
            <div className="countryinfo">
              <div className="countryhead">Germany</div>
              <div className="countrydesc">
                Study in Germany: Where Innovation and Tradition Shape Your
                Future.
              </div>
            </div>
          </div>
          <div className="countrydiv">
            <div className="countryimg canadadiv">
              <img src="/irelandflag.png" alt="" className="countryflagimage" />
            </div>
            <div className="countryinfo">
              <div className="countryhead">Ireland</div>
              <div className="countrydesc">
                Study in Ireland: Cultivate Knowledge in a Land of Rich Heritage
                and Modern Opportunity.
              </div>
            </div>
          </div>
        </div>

        {/* Test Prep Link */}
        <div
          className="linkdiv testpreplink"
          onMouseEnter={() => handleMouseEnter('testprep')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="linktag">Test Prep</div>
          <div className="undercircle"></div>
        </div>
        <div
          className="headerunderbanner tpbanner"
          style={{
            display:
              activeBanner === 'testprep' && bannerVisible ? 'flex' : 'none',
          }}
          onMouseEnter={handleBannerMouseEnter}
          onMouseLeave={handleBannerMouseLeave}
        >
          <div className="countrydiv">
            <div className="countryimg canadadiv">
              <img src="/ieltslogo.png" alt="" className="countryflagimage" />
            </div>
            <div className="countryinfo">
              <div className="countryhead">IELTS</div>
              <div className="countrydesc">
                IELTS: Your Gateway to Global Opportunities and Language
                Proficiency.
              </div>
            </div>
          </div>
          <div className="countrydiv">
            <div className="countryimg canadadiv">
              <img src="/TOEFLlogo.png" alt="" className="countryflagimage" />
            </div>
            <div className="countryinfo">
              <div className="countryhead">TOEFL-iBT</div>
              <div className="countrydesc">
                TOEFL: Your Key to Global Success and Academic Excellence.
              </div>
            </div>
          </div>
          <div className="countrydiv">
            <div className="countryimg canadadiv">
              <img src="/ptelogo.png" alt="" className="countryflagimage" />
            </div>
            <div className="countryinfo">
              <div className="countryhead">PTE</div>
              <div className="countrydesc">
                PTE: Achieve Your Academic and Professional Goals with
                Confidence and Accuracy.
              </div>
            </div>
          </div>
        </div>

        {/* Services Link */}
        <div
          className="linkdiv serviceslink"
          onMouseEnter={() => handleMouseEnter('services')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="linktag">Services</div>
          <div className="undercircle"></div>
        </div>
        <div
          className="headerunderbanner sbanner"
          style={{
            display:
              activeBanner === 'services' && bannerVisible ? 'flex' : 'none',
          }}
          onMouseEnter={handleBannerMouseEnter}
          onMouseLeave={handleBannerMouseLeave}
        >
          Services Info
        </div>

        {/* Gallery Link */}
        <div className="linkdiv">
          <div className="linktag">Gallery</div>
          <div className="undercircle"></div>
        </div>
      </div>
      <div className="actionbuttondiv">
        <button className="actionbutton">
          Get Started
          <div className="arrow-wrapper">
            <div className="arrow"></div>
          </div>
        </button>
      </div>
    </div>
  );
}
