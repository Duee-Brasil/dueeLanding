import React from "react"

const About = () => 
<div id="about" class="section">
<div class="block content-1170 center-relative">
  <div class="section-title-holder left">
    <div class="section-num">
      <span>03</span>
    </div>
    <h2 class="entry-title">CRAFTERS</h2>
  </div>
  <div class="section-content-holder right">
    <div class="content-wrapper">
      <div class="content-title-holder">
        <p class="content-title">About</p>
      </div>
      <div class="one_half ">
        Polor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt ut dolore magna labore eiusmod. Lorem ipsum <strong>dolor sit amet</strong> consectetur est adipisicing elit, sed do eiusmod tempor
                  </div>
      <div class="one_half last ">
        <span style="color: #e54b76;"><strong>2001-2003 ·</strong></span> <span style="color:#727190;"><em>Art Studio Lorem Donec</em></span><br />
        <span style="color: #e54b76;"><strong>2003-2006 ·</strong></span> <span style="color:#727190;"><em>Per Set Web Site</em></span><br />
        <span style="color: #e54b76;"><strong>2006-2010 ·</strong></span> <span style="color:#727190;"><em>Setera Donec EstNunc</em></span><br />
        <span style="color: #e54b76;"><strong>2010-2013 ·</strong></span> <span style="color:#727190;"><em>Studio Labore Tempor</em></span><br />
        <span style="color: #e54b76;"><strong>2013-2016 ·</strong></span> <span style="color:#727190;"><em>Magna Ipsum Amet</em></span><br />
      </div><div class="clear"></div>
      <br />
      <br />
    </div>

    <div class="full-width ">
      <script>
        var aboutImage_speed = "500";
        var aboutImage_auto = "false";
        var aboutImage_hover = "true";
                  </script>
      <div class="image-slider-wrapper relative img aboutImage">
        <a id="aboutImage_next" class="image_slider_next" href="#"></a>
        <div class="caroufredsel_wrapper">
          <ul id="aboutImage" class="image-slider slides">
            <li><img src="demo-images/about_img_04.jpg" alt="" /></li>
            <li><img src="demo-images/about_img_05.jpg" alt="" /></li>
            <li><img src="demo-images/about_img_06.jpg" alt="" /></li>
          </ul>
        </div>
        <div class="clear"></div>
      </div>

      <script>
        var team1_speed = "500";
        var team1_auto = "false";
        var team1_hover = "true";
                  </script>
      <div class="image-slider-wrapper relative team team1">
        <a id="team1_next" class="image_slider_next" href="#"></a>
        <div class="caroufredsel_wrapper">
          <ul id="team1" class="image-slider slides">
            <li>
              <div class="member-content-holder">
                <h4 class="member-name">Robert Williams</h4>
                <p class="member-position">LEAD DESIGNER</p>
                <div class="member-content">
                  Eiusmod tempor incididunt ut dolore magna labore eiusmod. Lorem ipsum dolor sit amet consectetur est lorem adipisicing elit, sed do eiusmod tempor polor sit amet consectetur.<br />
                </div>
              </div>
              <div class="member-image-holder">
                <img src="demo-images/about_img_01.jpg" alt="" />
              </div>
              <div class="clear"></div>
            </li>

            <li>
              <div class="member-content-holder">
                <h4 class="member-name">John Doe</h4>
                <p class="member-position">SEO MASTER</p>
                <div class="member-content">
                  Eiusmod tempor incididunt ut dolore magna labore eiusmod. Lorem ipsum dolor sit amet consectetur est lorem adipisicing elit, sed do eiusmod tempor polor sit amet consectetur.<br />
                </div>
              </div>
              <div class="member-image-holder">
                <img src="demo-images/about_img_02.jpg" alt="" />
              </div>
              <div class="clear"></div>
            </li>

            <li>
              <div class="member-content-holder">
                <h4 class="member-name">John Doe</h4>
                <p class="member-position">PSD GURU</p>
                <div class="member-content">
                  Eiusmod tempor incididunt ut dolore magna labore eiusmod. Lorem ipsum dolor sit amet consectetur est lorem adipisicing elit, sed do eiusmod tempor polor sit amet consectetur.<br />
                </div>
              </div>
              <div class="member-image-holder">
                <img src="demo-images/about_img_03.jpg" alt="" />
              </div>
              <div class="clear"></div>
            </li>
          </ul>
        </div>
        <div class="clear"></div>
      </div>
    </div>
    {/* <!-- end full-width div --> */}

  </div>
  <div class="clear"></div>
</div>
</div>

export default About