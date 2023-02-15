import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import router from './router'

const App = memo(() => {
  return (
    <div>
      {useRoutes(router)}
    </div>
  )
})

export default App
