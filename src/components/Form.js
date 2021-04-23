import React, { Component } from "react";
import { navigate } from "gatsby";
import { withTranslation } from "react-i18next";
import {
  Button,
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";

import "./Form.scss";

import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import HomeIcon from "@material-ui/icons/Home";
import PhonelinkRingIcon from "@material-ui/icons/PhonelinkRing";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.ContactForm = React.createRef();
    this.state = {
      value: { email: "", name: "", message: "" },
      valid: { email: true, name: true, message: true }
    };
  }

  encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  handleChange = (value, name) => {
    switch (name) {
      case "email":
        this.setState(prevState => ({
          ...prevState,
          value: { ...prevState.value, email: value }
        }));
        const reg = value.match(/^.+@.+\..+$/gim);
        if (reg)
          this.setState(prevState => ({
            ...prevState,
            valid: { ...prevState.valid, email: false }
          }));
        return null;
      case "name":
        this.setState(prevState => ({
          ...prevState,
          value: { ...prevState.value, name: value }
        }));
        const checkName = value.trim().length > 1;
        if (checkName)
          this.setState(prevState => ({
            ...prevState,
            valid: { ...prevState.valid, name: false }
          }));
        return null;
      case "message":
        this.setState(prevState => ({
          ...prevState,
          value: { ...prevState.value, message: value }
        }));
        const checkMessage = value.trim().length > 3;
        if (checkMessage)
          this.setState(prevState => ({
            ...prevState,
            valid: { ...prevState.valid, message: false }
          }));
        return null;
      default:
        return null;
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = this.ContactForm.current;
    const { valid, value } = this.state;
    if (!(valid.email || valid.name || valid.message)) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": form.getAttribute("name"),
          ...value
        })
      })
        .then(() => {
          navigate(form.getAttribute("action"));
        })
        .catch(error => {
          console.log("====================================");
          console.log(`error in submiting the form data:${error}`);
          console.log("====================================");
        });
    }
  };

  render() {
    const { valid, value } = this.state;
    const text = "You can contact me for any information you are interested in. To do this, fill out the feedback form or use the contact information provided by me. And I will answer you as soon as possible."
    return (
      <div className="section landing-section">
        <section id="five">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Get In Touch</h2>
                <p className="text-center">{text}</p>
                <form
                  name="contact"
                  method="post"
                  action="/success/"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={this.handleSubmit}
                  ref={this.ContactForm}
                  className="contact-form"
                >
                  <input type="hidden" name="form-name" value="contact"/>
                  <p hidden>
                    <label>
                      Don’t fill this out:{" "}
                      <input name="bot-field" onChange={this.handleChange}/>
                    </label>
                  </p>
                  <Row>
                    <Col md="6">
                      <label>
                        Name
                      </label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <PermIdentityIcon />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Name"
                          value={value.name}
                          onChange={e => this.handleChange(e.target.value, "name")}
                        />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>E-mail</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <MailOutlineIcon/>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="email"
                          name="email"
                          placeholder="E-mail"
                          value={value.email}
                          onChange={e => this.handleChange(e.target.value, "email")}
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    name="message"
                    placeholder="Your message most be more than 3 characters...."
                    value={value.message}
                    onChange={e =>
                      this.handleChange(e.target.value, "message")
                    }
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button
                        className="btn-fill"
                        color="danger"
                        size="lg"
                        disabled={valid.email || valid.name || valid.message}
                      >
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </form>
                <div className="section landing-section container-info">
                  <div className="home">
                    <div className="svg">
                      <HomeIcon/>
                    </div>
                    <div className="text-country">
                    <span>Chehova st.</span>
                    <br />
                    <span>Taganrog, Rostov area</span>
                    <br />
                    <span>Russia</span>
                    </div>
                  </div>
                  <div className="phone">
                    <div className="svg">
                      <PhonelinkRingIcon/>
                    </div>
                    <a
                      href="tel:+79996935749">+79996935749
                    </a>
                  </div>
                  <div className="phone">
                    <div className="svgMail">
                      <MailOutlineIcon/>
                    </div>
                    <a
                      href="mailto:&#118;&#105;&#107;&#116;&#111;&#114;&#119;&#101;&#98;&#100;&#101;&#118;&#101;&#108;&#111;&#112;&#101;&#114;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;">
                      &#118;&#105;&#107;&#116;&#111;&#114;&#119;&#101;&#98;&#100;&#101;&#118;&#101;&#108;&#111;&#112;&#101;&#114;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

export default withTranslation()(ContactForm);
