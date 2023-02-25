import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { ScrollViewWrapper } from './style'

const ScrollView = memo((props) => {
  const [ item ] = useState(['想想','请求222','娃娃','1231231嗯嗯','人人','偷偷','语言','方法','还好','收拾','尺寸','那你','解决'])
  const [index ,setIndex ] = useState(0)
  const scrollContentRef = useRef()
  function next() {
    const nextIndex = index + 1
    console.log(scrollContentRef.current.offsetLeft )
    if((scrollContentRef.current.offsetLeft + scrollContentRef.current.clientWidth)>= scrollContentRef.current.scrollWidth) {
      return
    }
    const moveDis = scrollContentRef.current.children[nextIndex].offsetLeft
    console.log(moveDis)
    scrollContentRef.current.style.transform = `translate(-${moveDis}px)`
    setIndex(nextIndex)
  }

  return (
    <ScrollViewWrapper>
      <div onClick={ next}>上一页</div>
      <div>下一页</div>
      <div className='scroll'>
        
        <div className='scroll-content' ref={scrollContentRef}>
          { item.map( add => {
            return (<div key={add} className='addr-item' >{add}</div>)
          }) }
        </div>
      </div>
      
      
    </ScrollViewWrapper>
  )
})

ScrollView.propTypes = {}

export default ScrollView