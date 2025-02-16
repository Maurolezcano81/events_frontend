import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import Home from './features/Home/Home.tsx'
import ListEvents from './features/Events/ListEvents/ListEvents.tsx'
import CreateEvent from './features/Events/CreateEvent/CreateEvent.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>

          <Route index element={<ListEvents />} />

          <Route path="/crear_evento" element={<CreateEvent />} />

        </Route>
      </Routes>
    </Router>
  </StrictMode>
)
