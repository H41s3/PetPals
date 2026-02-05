import React from 'react'

function Contact() {
  return (
    <>
      <section id="page-header" className="about-header">
        <h2>#ChatWithUs</h2>
        <p>Drop us a line, we're all ears!</p>
      </section>

      <section id="contact-details" className="section-p1">
        <div className="details">
          <span>GET IN TOUCH</span>
          <h2>Visit our location or contact us today</h2>
          <h3>Main Office</h3>
          <div>
            <li>
              <i className="fal fa-map"></i>
              <p>Manila, Philippines</p>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <p>thepetpalsph@gmail.com</p>
            </li>
            <li>
              <i className="fas fa-phone-alt"></i>
              <p>+63 966 827 6394</p>
            </li>
            <li>
              <i className="far fa-clock"></i>
              <p>9:00 a.m - 10:00 p.m, Mon - Sat</p>
            </li>
          </div>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123504.21022923027!2d120.97978811603546!3d14.683921220303592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ba0942ef7375%3A0x4a9a32d9fe083d40!2sQuezon%20City%2C%20Metro%20Manila%2C%20Philippines!5e0!3m2!1sen!2sau!4v1712907993459!5m2!1sen!2sau"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Quezon City Map"
          ></iframe>
        </div>
      </section>

      <section id="form-details">
        <form action="https://mail.google.com/mail/u/0/#inbox" method="POST">
          <span>LEAVE A MESSAGE</span>
          <h2>We're eager to hear from you.</h2>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Subject" />
          <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
          <button className="normal">Submit</button>
        </form>

        <div className="people">
          <div>
            <img src="/images/2.png" alt="Emilio Calma" />
            <p>
              <span>Margaux Alabado</span> Chief Executive Officer <br /> Phone: +63 9998166180 <br /> Email: calmaemilio803@gmail.com
            </p>
          </div>
          <div>
            <img src="/images/3.png" alt="Mr. Cat" />
            <p>
              <span>Emilio Joseph Calma</span> Chief Technology Officer <br /> Phone: +63 9972872692 <br /> Email: meowwww@gmail.com
            </p>
          </div>
          <div>
            <img src="/images/1.png" alt="Margaux Alabado" />
            <p>
              <span>Mr. Meow</span> Chief Marketing Officer <br /> Phone: +63 9294560987 <br /> Email: hellomargauxalabado@gmail.com
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
