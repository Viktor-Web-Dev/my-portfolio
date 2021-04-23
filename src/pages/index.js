import React from 'react'
import { withTranslation } from 'react-i18next'

import ProfilePage from "../components/profilePage/ProfilePage";
import DemoFooter from "../components/Footers/DemoFooter";
// import Skills from '../components/Skills'
import SEO from '../components/seo'
import ContactForm from '../components/Form'

import avatar from '../assets/img/avatar1.jpg'



class HomeIndex extends React.Component {
  constructor() {
    super()
    this.state = {
      skillsIsOpen: false,
    }
  }

  render() {
    const { t } = this.props

    return (
      <>
        <SEO
          title={t('homePage.seo')}
          description="Viktor Duvanov - Web tech and development - Design, identity, and branding - Optimise and scale your business"
          image={avatar}
          htmlAttributes={{
            lang: t('homePage.lng'),
          }}
        />
        <div id="main">
          <section id="one">
          <ProfilePage/>
          </section>
          <section id="two">
            <ContactForm/>
          </section>
          <section id="four">
            <DemoFooter />
          </section>
        </div>
      </>
    )
  }
}

export default withTranslation()(HomeIndex)
