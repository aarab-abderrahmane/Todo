import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Content from './Content'

import './index.css'

createRoot(document.getElementById('root')).render(


  <StrictMode>
      <Content/>
  </StrictMode>,
)


