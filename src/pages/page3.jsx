export default function Page3({ homeData }) {
  return (
    <div className="page3">
      {/* <div className="page3heading">
        Expert-Led Test Prep to Fuel your Study Abroad Success
      </div> */}
      <div className="contentpage3">
        <img src="teaching.jpg" className="imagecontentpage3" />
        <div className="textcontentpage3">
          <div className="page3heading">{homeData.page2blueheading}</div>
          <div className="tagspage3">
            <div className="tag">
              <div className="circletag"></div>
              {homeData.page3tag5}
            </div>
            <div className="tag">
              <div className="circletag"></div>
              {homeData.page3tag1}
            </div>
            <div className="tag">
              <div className="circletag"></div>
              {homeData.page3tag2}
            </div>
            <div className="tag">
              <div className="circletag"></div>
              {homeData.page3tag3}
            </div>
            <div className="tag">
              <div className="circletag"></div>
              {homeData.page3tag4}
            </div>
          </div>
          <div className="subtextpg3">{homeData.page3content}</div>
        </div>
      </div>
    </div>
  );
}
