import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import LandingPage from "../landing/LandingPage";

function ProfilePage() {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  if(typeof document !== 'undefined') document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    if(typeof document !== 'undefined') document.body.classList.add("landing-page");
    return function cleanup() {
      if(typeof document !== 'undefined') document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("../../assets/img/avatar1.jpg")}
              />
            </div>
            <div className="name">
              <h4 className="title">
                Viktor Duvanov <br />
              </h4>
              <h6 className="description">Senior Web Developer</h6>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <p>
                I have extensive experience in creating and developing a brand, but my love of technology has led me to web development.
                I worked with various enterprises and startups in Russia, Ukraine, Great Britain, and Argentina, offering all kinds of methods for developing their product.
                Such as supporting ready-made applications for creating a project from scratch and migrating to another technology stack.
              </p>
              <br />
            </Col>
          </Row>
        </Container>
      </div>
      <LandingPage/>
    </>
  );
}

export default ProfilePage;
