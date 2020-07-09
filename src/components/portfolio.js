import React from "react"

const Portfolio = () => <div id="portfolio" className="section">
<div className="block content-1170 center-relative">
  <div className="section-title-holder right">
    <div className="section-num">
      <span>02</span>
    </div>
    <h2 className="entry-title">Portfolio</h2>
  </div>
  <div className="section-content-holder portfolio-holder left">
    <div className="grid" id="portfolio-grid">
      <div className="grid-sizer"></div>
      <div className="grid-item element-item p_one">
        <a href="single-portfolio.html">
          <img src="demo-images/portfolio_item_01.jpg" alt="" />
          <div className="portfolio-text-holder">
            <div className="portfolio-text-wrapper">
              <p className="portfolio-type">
                <img src="images/icon_post.svg" alt="" />
              </p>
              <p className="portfolio-text">PSD MOCKUP</p>
              <p className="portfolio-sec-text">Smart Watch</p>
            </div>
          </div>
        </a>
      </div>
      <div className="grid-item element-item p_one_half">
        <a href="single-portfolio2.html">
          <img src="demo-images/portfolio_item_02.jpg" alt="" />
          <div className="portfolio-text-holder">
            <div className="portfolio-text-wrapper">
              <p className="portfolio-type">
                <img src="images/icon_post.svg" alt="" />
              </p>
              <p className="portfolio-text">PSD MOCKUP</p>
              <p className="portfolio-sec-text">Smart Watch</p>
            </div>
          </div>
        </a>
      </div>
      <div className="grid-item element-item p_one_half">
        <a data-rel="prettyPhoto[gallery1]" href="demo-images/portfolio_item_08.jpg">
          <img src="demo-images/portfolio_item_08.jpg" alt="" />
          <div className="portfolio-text-holder">
            <div className="portfolio-text-wrapper">
              <p className="portfolio-type">
                <img src="images/icon_post.svg" alt="" />
              </p>
              <p className="portfolio-text">PSD MOCKUP</p>
              <p className="portfolio-sec-text">Smart Watch</p>
            </div>
          </div>
        </a>
      </div>
      <div className="grid-item element-item p_one">
        <a data-rel="prettyPhoto[gallery1]" href="demo-images/portfolio_item_05.jpg">
          <img src="demo-images/portfolio_item_05.jpg" alt="" />
          <div className="portfolio-text-holder">
            <div className="portfolio-text-wrapper">
              <p className="portfolio-type">
                <img src="images/icon_post.svg" alt="" />
              </p>
              <p className="portfolio-text">PSD MOCKUP</p>
              <p className="portfolio-sec-text">Smart Watch</p>
            </div>
          </div>
        </a>
      </div>
    </div>

    <div className="clear"></div>
    <div className="block portfolio-load-more-holder">
      <a target="_self" className="more-posts">LOAD MORE</a>
      <img src="images/icon_infinity.svg" alt="Load more" />
    </div>
  </div>
  <div className="clear"></div>
</div>
<div className="clear"></div>
</div>

export default Portfolio