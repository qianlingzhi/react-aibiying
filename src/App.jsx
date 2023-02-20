import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'
import router from './router'

const App = memo(() => {
  return (
    <div className='app'>
      <AppHeader></AppHeader>
      <div className='page'>
        {useRoutes(router)}
      </div>
      <AppFooter></AppFooter>
    </div>
  )
})

export default App
