import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "../Navbars/ExamplesNavbar.js";

import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

function LandingPage() {
  if(typeof document !== 'undefined') document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    if(typeof document !== 'undefined') document.body.classList.add("profile-page");
    return function cleanup() {
      if(typeof document !== 'undefined') document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Let's talk product</h2>
                <h5 className="description">
                  I have extensive experience in application development. An important task in my career is teamwork, fast and high-quality application development.
                  During my work on many projects, I showed myself only from best side
                </h5>
                <br />
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <EqualizerIcon className="nc-icon nc-album-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Programming Skills</h4>
                    <p className="description">
                      Solid understanding of the Javascript such us React, Redux, Redux saga, Gatsby/Next.js, Vue, Nuxt.js, Vuex.
                      ES6, CoffeeScript, TypeScript.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <EqualizerIcon className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Programming Skills</h4>
                    <p>
                      Work with node.js development on the project the introduction of new,support and development of the current functionality.
                      I worked with several php frameworks like Yii2, Symfony.
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <WbIncandescentIcon className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Programming-related skills and apps</h4>
                    <p>
                      Webpack, Gulp, Grunt, Brunch, Firebase, Heroku, Netlify, Jenkins, Linux/iOS shell scripts,
                      GitHub, GitLab, BitBucket
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <PersonOutlineIcon className="nc-icon nc-sun-fog-29" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Personals skills</h4>
                    <p>
                      Problem solving skills, self-discipline, communication skills
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
