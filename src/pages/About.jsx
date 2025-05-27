import React from 'react'

function About() {
  return (
    <>
      <section id="page-header" className="about-header">
        <h2>#OurFurryTales</h2>
        <p>Discovering the Heartwarming Stories Behind Every Adoption</p>
      </section>

      <section id="about-head" className="section-p1">
        <img src="/images/a6.jpg" alt="About Us" />
        <div>
          <h2>Who We Are?</h2>
          <p>At Petpals, we're passionate about pets. With adequate experience in animal rescue, we're dedicated to connecting pets with loving homes. Our mission is simple: to celebrate the bond between humans and animals by facilitating adoptions and fostering a supportive community of pet lovers. Join us in making a difference, one adoption at a time.</p>

          <abbr title="">Connecting pets with loving homes.</abbr>

          <br /><br />

          <div style={{
            backgroundColor: "#ccc",
            whiteSpace: "nowrap",
            overflow: "hidden",
            width: "100%"
          }}>
            <div style={{
              animation: "scroll 20s linear infinite",
              display: "inline-block"
            }}>
              Connecting pets with loving homes. Pioneering pet adoption with care, compassion, and community.
            </div>
          </div>

          <style>
            {`
              @keyframes scroll {
                0% { transform: translateX(100%); }
                100% { transform: translateX(-100%); }
              }
            `}
          </style>
        </div>
      </section>

      <section id="about-app" className="section-p1">
        <h1>Download Our <a href="https://www.figma.com/proto/rYj28mQ20rTllfm5uMilmm/PET-PALS-PROTOTYPE?page-id=0%3A1&type=design&node-id=286-8091&viewport=973%2C475%2C0.13&t=0B1VMiEwWncEzx4O-1&scaling=scale-down&starting-point-node-id=286%3A8091&show-proto-sidebar=1&mode=design">App</a></h1>
        <div className="video">
          <video autoPlay muted loop src="/images/1.mp4"></video>
        </div>
      </section>

      <section id="feature" className="section-p1">
        <div className="fe-box">
          <img src="/images/p1.png" alt="" />
          <h6>Save Pets</h6>
        </div>
        <div className="fe-box">
          <img src="/images/p2.png" alt="" />
          <h6>Adopt</h6>
        </div>
        <div className="fe-box">
          <img src="/images/p3.png" alt="" />
          <h6>Lost and found</h6>
        </div>
        <div className="fe-box">
          <img src="/images/p4.png" alt="" />
          <h6>24/7 Support</h6>
        </div>
        <div className="fe-box">
          <img src="/images/p5.png" alt="" />
          <h6>Animal Rescue</h6>
        </div>
      </section>
    </>
  )
}

export default About