/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

import FavoriteIcon from '@material-ui/icons/Favorite';

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
          <div className="credits ml-auto text-center">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <FavoriteIcon className="fa fa-heart heart" /> Viktor Duvanov
            </span>
          </div>
      </Container>
    </footer>
  );
}

export default DemoFooter;
