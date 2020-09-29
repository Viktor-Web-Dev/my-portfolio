import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Select, MenuItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  selectFocus: {
    padding: '0!important',
    svg: {
      display: 'none',
    },
    '&:focus': {
      background: 'transparent',
    },
  },
})

const LanguageMenu = () => {
  const { t, i18n } = useTranslation()
  const classes = useStyles()
  const [values, setValues] = useState({
    language: i18n.language.split('-')[0] || 'en',
  })

  function handleChange(event) {
    i18n.changeLanguage(event.target.value)

    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }))
  }

  return (
    <Select
      value={values.language}
      onChange={e => handleChange(e)}
      displayEmpty
      disableUnderline
      inputProps={{
        name: 'language',
      }}
      classes={{
        select: classes.selectFocus,
      }}
      className="selectValue"
    >
      <MenuItem value={'en'} >
        <p>{t('language.en')}</p>
      </MenuItem>
      <MenuItem value={'ru'}>
        <p>{t('language.ru')}</p>
      </MenuItem>
    </Select>
  )
}

export default LanguageMenu
