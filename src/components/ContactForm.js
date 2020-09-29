import React from 'react'

const ContactForm = () => (
  <section id="four">
    <h2>Get In Touch</h2>
    <p>
      Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna.
      Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem
      neque lorem ipsum dolor.
    </p>
    <div className="row">
      <div className="8u 12u$(small)">
        <form
          method="POST"
          action="/success/"
          className="contact-card__form"
          netlify="true"
          data-netlify-honeypot="bot-field"
          name="contact"
        >
          <input type="hidden" name="bot-field" />
          <div className="row uniform 50%">
            <div className="6u 12u$(xsmall)">
              <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div className="6u 12u$(xsmall)">
              <input type="email" name="email" placeholder="Email" />
            </div>
            <div className="12u">
              <textarea name="message" placeholder="Message" rows="4" />
            </div>
          </div>
          <div data-netlify-recaptcha="true" />
          <div>
            <ul className="actions">
              <li>
                <button className="button"> Send Message </button>
              </li>
            </ul>
          </div>
        </form>
      </div>
      <div className="4u 12u$(small)">
        <ul className="labeled-icons">
          <li>
            <h3 className="icon fa-home">
              <span className="label">Address</span>
            </h3>
            Chehova st.
            <br />
            Taganrog, Rostov region
            <br />
            Russia
          </li>
          <li>
            <h3 className="icon fa-mobile">
              <span className="label">Phone</span>
            </h3>
            <a href="tel:+79281069160">+79996935749</a>
          </li>
          <li>
            <h3 className="icon fa-envelope-o">
              <span className="label">Email</span>
            </h3>
            <a href="mailto:viktorwebdeveloper@gmail.comm">
              viktorwebdeveloper@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
)
export default ContactForm
