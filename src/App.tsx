import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { PageTransition } from './components/animations/AnimatedSection';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Academic from './pages/Academic';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

// Lazy load heavy components
const WorkDetail = lazy(() => import('./pages/WorkDetail'));
const SpecializationPage = lazy(() => import('./pages/SpecializationPage'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const PublicationDetail = lazy(() => import('./pages/PublicationDetail'));

// Scroll to top component
function ScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <Routes>
          <Route path="/doktor_web_2/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/doktor_web_2/hakkimda" element={<PageTransition><About /></PageTransition>} />
          <Route path="/doktor_web_2/calismalar" element={<PageTransition><Works /></PageTransition>} />
          <Route path="/doktor_web_2/calismalar/:id" element={
            <PageTransition>
              <Suspense fallback={<div className="flex justify-center items-center min-h-screen"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#2E8B57]"></div></div>}>
                <WorkDetail />
              </Suspense>
            </PageTransition>
          } />
          <Route path="/doktor_web_2/uzmanlik/:specialization" element={
            <PageTransition>
              <Suspense fallback={<div className="flex justify-center items-center min-h-screen"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#2E8B57]"></div></div>}>
                <SpecializationPage />
              </Suspense>
            </PageTransition>
          } />
          <Route path="/doktor_web_2/akademik" element={<PageTransition><Academic /></PageTransition>} />
          <Route path="/doktor_web_2/akademik/makale/:id" element={
            <PageTransition>
              <Suspense fallback={<div className="flex justify-center items-center min-h-screen"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#2E8B57]"></div></div>}>
                <PublicationDetail />
              </Suspense>
            </PageTransition>
          } />
          <Route path="/doktor_web_2/blog" element={<PageTransition><Blog /></PageTransition>} />
          <Route path="/doktor_web_2/blog/:id" element={
            <PageTransition>
              <Suspense fallback={<div className="flex justify-center items-center min-h-screen"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#2E8B57]"></div></div>}>
                <BlogDetail />
              </Suspense>
            </PageTransition>
          } />
          <Route path="/doktor_web_2/iletisim" element={<PageTransition><Contact /></PageTransition>} />
        </Routes>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
