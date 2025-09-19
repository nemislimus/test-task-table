import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DevTaskTable } from './DevTaskTable.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DevTaskTable />
  </StrictMode>,
)
