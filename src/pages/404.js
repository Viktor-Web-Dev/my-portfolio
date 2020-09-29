import React, { useEffect, useState } from 'react'
import SEO from '../components/seo'
import { Link, navigate } from 'gatsby'
import { useTranslation } from 'react-i18next'

const NotFoundPage = () => {
  const [count, setCount] = useState(7)
  useEffect(() => {
    setTimeout(() => {
      setCount(prevState => prevState - 1)
    }, 1000)
    if (!count) navigate('/')
  }, [count])
  const { t } = useTranslation()
  return (
    <>
      <SEO title={t('notFound.title')} />
      <div id="main">
        <section id="one">
          <h1>{t('notFound.title')}</h1>
          <p>{t('notFound.titleDescription')}</p>
          <p>
            {t('notFound.redirectB')} {count}. {t('notFound.redirectA')}{' '}
            <Link to="/">{t('notFound.link')}</Link>
          </p>
        </section>
      </div>
    </>
  )
}

export default NotFoundPage
