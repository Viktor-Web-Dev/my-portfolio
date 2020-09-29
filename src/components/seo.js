import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

/* Will override the defaults applied via gatsby config */
const SEO = ({
  title,
  description,
  image,
  keywords,
  robots,
  htmlAttributes,
}) => {
  const customMetafields = []

  if (robots) {
    customMetafields.push({
      name: 'robots',
      content: robots,
    })
  }
  if (title) {
    customMetafields.push(
      {
        property: 'og:title',
        content: title,
      },
      {
        name: 'twitter:title',
        content: title,
      },
      {
        name: 'og:url',
        content: 'https://alex-vorotov.gq',
      },
      {
        name: 'og:type',
        content: 'website',
      },
      {
        name: 'og:site_name',
        content: 'Live CV Alex Vorotov',
      }
    )
  }
  if (description) {
    customMetafields.push(
      {
        property: 'og:description',
        content: description,
      },
      {
        name: 'description',
        content: description,
      },
      {
        name: 'twitter:description',
        content: description,
      }
    )
  }
  if (image) {
    customMetafields.push(
      {
        property: 'og:image',
        content: `https://alex-vorotov.gq${image}`,
      },
      {
        name: 'twitter:image',
        content: `https://alex-vorotov.gq${image}`,
      }
    )
  }

  if (Array.isArray(keywords)) {
    customMetafields.push({
      name: 'keywords',
      content: keywords.join(', '),
    })
  }

  return (
    <Helmet
      title={title}
      htmlAttributes={htmlAttributes}
      meta={customMetafields}
    />
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  robots: PropTypes.string,
  htmlAttributes: PropTypes.shape({}),
}

export default SEO
