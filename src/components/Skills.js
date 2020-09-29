import React from 'react'

const SkillS = ({ t }) => {
  return (
    <>
      <h4>{t('skills.front')}</h4>
      <p>{t('skills.frontFrame')}</p>
      <p>{t('skills.frontLang')}</p>
      <p>{t('skills.htmlLang')}</p>
      <h4>{t('skills.engines')}</h4>
      <p>{t('skills.enginesTemplate')}</p>
      <p>{t('skills.enginesTest')}</p>
      <p>{t('skills.enginesOpti')}</p>
      <h4>{t('skills.back')}</h4>
      <p>{t('skills.backDescription')}</p>
      <p>{t('skills.backData')}</p>
      <header className="major">
        <h3>{t('skills.related')}</h3>
      </header>
      <h4>Webpack, Gulp, Grunt, Brunch</h4>
      <p>{t('skills.relatedRun')}</p>
      <h4>Firebase, Heroku, Netlify, Jenkins</h4>
      <p>{t('skills.relatedOnline')}</p>
      <h4>Linux/iOS shell scripts</h4>
      <p>{t('skills.relatedOs')}</p>
      <h4>GitHub, GitLab, BitBucket</h4>
      <p>{t('skills.relatedVer')}</p>
      <header className="major">
        <h3>{t('skills.personal')}</h3>
      </header>
      <h4>{t('skills.personalProblem')}</h4>
      <p>{t('skills.personalProblemDescription')}</p>
      <h4> {t('skills.personalSelf')}</h4>
      <p>{t('skills.personalSelfDescription')}</p>
      <h4>{t('skills.communication')}</h4>
      <p>{t('skills.communicationDescription')}</p>
    </>
  )
}

export default SkillS
