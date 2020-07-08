import React from "react"

const Portfolio = () => <div id="portfolio" class="section">
<div class="block content-1170 center-relative">
  <div class="section-title-holder right">
    <div class="section-num">
      <span>02</span>
    </div>
    <h2 class="entry-title">Portfolio</h2>
  </div>
  <div class="section-content-holder portfolio-holder left">
    <div class="grid" id="portfolio-grid">
      <div class="grid-sizer"></div>
      <div class="grid-item element-item p_one">
        <a href="single-portfolio.html">
          <img src="demo-images/portfolio_item_01.jpg" alt="" />
          <div class="portfolio-text-holder">
            <div class="portfolio-text-wrapper">
              <p class="portfolio-type">
                <img src="images/icon_post.svg" alt="" />
              </p>
              <p class="portfolio-text">PSD MOCKUP</p>
              <p class="portfolio-sec-text">Smart Watch</p>
            </div>
          </div>
        </a>
      </div>
      <div class="grid-item element-item p_one_half">
        <a href="single-portfolio2.html">
          <img src="demo-images/portfolio_item_02.jpg" alt="" />
          <div class="portfolio-text-holder">
            <div class="portfolio-text-wrapper">
              <p class="portfolio-type">
                <img src="images/icon_post.svg" alt="" />
              </p>
              <p class="portfolio-text">PSD MOCKUP</p>
              <p class="portfolio-sec-text">Smart Watch</p>
            </div>
          </div>
        </a>
      </div>
      <div class="grid-item element-item p_one_half">
        <a data-rel="prettyPhoto[gallery1]" href="demo-images/portfolio_item_08.jpg">
          <img src="demo-images/portfolio_item_08.jpg" alt="" />
          <div class="portfolio-text-holder">
            <div class="portfolio-text-wrapper">
              <p class="portfolio-type">
                <img src="images/icon_post.svg" alt="" />
              </p>
              <p class="portfolio-text">PSD MOCKUP</p>
              <p class="portfolio-sec-text">Smart Watch</p>
            </div>
          </div>
        </a>
      </div>
      <div class="grid-item element-item p_one">
        <a data-rel="prettyPhoto[gallery1]" href="demo-images/portfolio_item_05.jpg">
          <img src="demo-images/portfolio_item_05.jpg" alt="" />
          <div class="portfolio-text-holder">
            <div class="portfolio-text-wrapper">
              <p class="portfolio-type">
                <img src="images/icon_post.svg" alt="" />
              </p>
              <p class="portfolio-text">PSD MOCKUP</p>
              <p class="portfolio-sec-text">Smart Watch</p>
            </div>
          </div>
        </a>
      </div>
    </div>

    <div class="clear"></div>
    <div class="block portfolio-load-more-holder">
      <a target="_self" class="more-posts">LOAD MORE</a>
      <img src="images/icon_infinity.svg" alt="Load more" />
    </div>
  </div>
  <div class="clear"></div>
</div>
<div class="clear"></div>
</div>

export default Portfolio