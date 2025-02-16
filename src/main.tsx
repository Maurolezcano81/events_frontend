import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import Home from './features/Home/Home.tsx'
import ListEvents from './features/Events/ListEvents/ListEvents.tsx'
import CreateEvent from './features/Events/CreateEvent/CreateEvent.tsx'
import { PrimeReactProvider} from 'primereact/api';
import "primereact/resources/themes/tailwind-light/theme.css";
import Tailwind from 'primereact/passthrough/tailwind';
import SingleEvent from './features/Events/SingleEvent/SingleEvent.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrimeReactProvider value={{
      unstyled:true, 
      pt: Tailwind 
    }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>

            <Route index element={<ListEvents />} />

            <Route path="/crear_evento" element={<CreateEvent />} />

            <Route path='/evento/:id' element={<SingleEvent />} />
          </Route>
        </Routes>
      </Router>
    </PrimeReactProvider>
  </StrictMode>
)
