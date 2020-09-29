import React, { useEffect, useState } from 'react'
import { Link, navigate } from 'gatsby'
import SEO from '../../components/seo'
import { useTranslation } from 'react-i18next'

const Success = () => {
  const [count, setCount] = useState(7)
  useEffect(() => {
    setTimeout(() => {
      setCount(prevState => prevState - 1)
    }, 1000)
    if (!count) navigate('/#four')
  }, [count])
  const { t } = useTranslation()

  return (
    <>
      <SEO
        title={t('thx.title')}
        description="This page is automatically redirected"
      />
      <div id="main">
        <section id="one">
          <h1>{t('thx.title')} 📫</h1>
          <p>{t('thx.titleDescription')}</p>
          <p>
            {t('notFound.redirectB')} {count}. {t('notFound.redirectA')}{' '}
            <Link to="/#five">{t('notFound.link')}</Link>
          </p>
        </section>
      </div>
    </>
  )
}

export default Success
