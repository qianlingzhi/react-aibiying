import { fetchHomeDataAction } from '@/store/modules/home'
import { isEmptyO } from '@/utils'
import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import HomeBanner from './c-cpns/home-banner'
import HomeSectionV1 from './c-cpns/home-section-v1'
import HomeSectionV2 from './c-cpns/home-section-v2'
import { HomeWrapper } from './style'

const Home = memo(() => {
  /**从redux中获取数据 */
  const { goodPriceInfo,discountInfo } = useSelector((state) =>({
    goodPriceInfo: state.home.goodPriceInfo,
    discountInfo: state.home.discountInfo
  }),shallowEqual)
  /**派发异步的事件，发送网络请求 */
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  },[dispatch])

  return (
    <HomeWrapper>
      <HomeBanner></HomeBanner>
      {isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo}></HomeSectionV2>}
      {isEmptyO(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo}></HomeSectionV1>}
      
    </HomeWrapper>
  )
})

export default Home