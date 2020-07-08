import React from "react"

const Contact = () => <div id="contact" class="section">
<div class="block content-1170 center-relative">
  <div class="section-title-holder left">
    <div class="section-num">
      <span>
        07
                  </span>
    </div>
    <h2 class="entry-title">Contact</h2>
  </div>
  <div class="section-content-holder right">
    <div class="content-wrapper">
      <div class="one_half ">
        <p>Consectetur adipisicing elit sed eiusmod tempor incididunt ut dolore magna labore eiusmod. Lorem ipsum dolor sit amet consectetur est adipisicing elit, sed do eiusmod tempor.</p>
        <br />
        <p><strong><span style="color: #e64b77;">Incididunt ut dolore</span></strong> magna labore eiusmod. Dolor sit amet consectetur est adipisicing elit, sed do eiusmod.</p>
      </div>
      <div class="one_half last">
        <div class="contact-form">
          <p><input id="name" type="text" name="your-name" placeholder="Name" /></p>
          <p><input id="contact-email" type="email" name="your-email" placeholder="Email" /></p>
          <p><input id="subject" type="text" name="your-subject" placeholder="Subject" /></p>
          <p><textarea id="message" name="your-message" placeholder="Message"></textarea></p>
          <p><input type="submit" onClick="SendMail()" value="SEND" /></p>
        </div>
      </div>
      <div class="clear"></div>
    </div>
    <div class="full-width">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4274.290564544589!2d-75.2952832049782!3d40.753669641460846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srs!4v1444506658649" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>
  </div>
  <div class="clear"></div>
</div>
</div>

export default Contact