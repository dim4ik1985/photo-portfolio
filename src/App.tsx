// import { Routes, Route } from 'react-router-dom';
// import { AppHeader } from './components/layout/AppHeader.tsx';
import { Home } from './components/Home.tsx';
// import { About } from './pages/About.tsx';
// import { Portfolio } from './pages/Portfolio.tsx';
// import { Contacts } from './pages/Contacts.tsx';
import { AppContent } from './components/layout/AppContent.tsx';
import { PhotoSlider } from './components/PhotoSlider.tsx';
import { Contacts } from './components/Contacts.tsx';

export const App = () => (
  <>
    <AppContent>
      {/*<AppHeader />*/}
      <Home />
      <PhotoSlider />
      <Contacts />

      {/*<Routes>*/}
      {/*  /!*<Route path="/photo-portfolio" element={<Home />} />*!/*/}
      {/*  <Route path="/about" element={<About />} />*/}
      {/*  <Route path="/portfolio/:id" element={<Portfolio />} />*/}
      {/*  <Route path={'/contacts'} element={<Contacts />} />*/}
      {/*</Routes>*/}
    </AppContent>
  </>
);
