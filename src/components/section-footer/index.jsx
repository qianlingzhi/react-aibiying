import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { FooterWrapper } from './style'

const SectionFooter = memo((props) => {
  const { name } = props
  let showMessage = "显示全部"
  if (name) {
    showMessage = `显示更多${name}房源`
  }

  const naviage = useNavigate
  function moreClickHandle() {
    naviage("/entire")
  }
  return (
    <FooterWrapper color={name ? '#00848A' : '#000'}>
      <div className='info' onClick={moreClickHandle}>
        <span className='text'>{showMessage}</span>
        <IconMoreArrow></IconMoreArrow>
      </div>
    </FooterWrapper>
  )
})

SectionFooter.propTypes = {
  name: PropTypes.string
}

export default SectionFooter