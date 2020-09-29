import React from 'react'
import { withTrans } from '../i18n/withTrans'
import '../assets/css/bootstrap.min.css';
import '../assets/scss/paper-kit.scss?v=1.2.0';
import '../assets/demo/demo.css?v=1.2.0';
import ProfilePageHeader from "./Headers/ProfilePageHeader";
import ExamplesNavbar from "./Navbars/ExamplesNavbar";
class Template extends React.Component {
  render() {
    const { children, location } = this.props
    if (location.pathname.includes('blog')||location.pathname.includes('uikit')) {
      return <div>{children}</div>
    } else {
      return (
        <div>
          <ExamplesNavbar />
          <ProfilePageHeader/>
          {children}
        </div>
      )
    }
  }
}

export default withTrans(Template)
