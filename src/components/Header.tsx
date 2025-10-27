import { Link, useLocation } from 'react-router-dom';
import { Menu, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [specializationsOpen, setSpecializationsOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { i18n, t } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const isActive = (path: string) => location.pathname === path;

  const specializations = [
    { key: 'rinoplasty', path: '/uzmanlik/rinoplasti' },
    { key: 'breastAugmentation', path: '/uzmanlik/meme-buyutme' },
    { key: 'breastReduction', path: '/uzmanlik/meme-kucultme' },
    { key: 'liposuction', path: '/uzmanlik/liposuction' },
    { key: 'abdominoplasty', path: '/uzmanlik/karin-germe' },
    { key: 'facelift', path: '/uzmanlik/yuz-germe' },
    { key: 'blepharoplasty', path: '/uzmanlik/goz-kapagi-estetigi' },
    { key: 'botox', path: '/uzmanlik/botoks' },
    { key: 'filler', path: '/uzmanlik/dolgu' },
    { key: 'hairTransplant', path: '/uzmanlik/sac-ekimi' },
    { key: 'breastLift', path: '/uzmanlik/meme-diklestirme' },
    { key: 'bodyContour', path: '/uzmanlik/vucut-konturu' }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSpecializationsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle window resize
  useEffect(() => {
    const onResize = () => {
      // Handle responsive behavior if needed
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Reset scroll position and close menus on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
    setSpecializationsOpen(false);
  }, [location.pathname]);


  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const body = document.body;
    if (mobileMenuOpen && window.innerWidth < 900) {
      const scrollY = window.scrollY;
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}px`;
      body.style.left = '0';
      body.style.right = '0';
      body.style.width = '100%';
      body.style.overflow = 'hidden';
    } else {
      const top = body.style.top;
      body.style.position = '';
      body.style.top = '';
      body.style.left = '';
      body.style.right = '';
      body.style.width = '';
      body.style.overflow = '';
      if (top) {
        const y = parseInt(top || '0', 10) * -1;
        window.scrollTo(0, y);
      }
    }
  }, [mobileMenuOpen]);

  return (
    <motion.header 
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link to="/" className="flex items-center gap-4 text-gray-900">
              <motion.div 
                className="w-8 h-8"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src={`${import.meta.env.BASE_URL}images/doktor_logo.webp`}
                  alt="Dr. Elif Aydın Logo" 
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <h2 className="text-xl font-bold tracking-tight">Dr. Elif Aydın</h2>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-9">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/doktor_web_2/') ? 'text-[#2E8B57] font-bold' : 'text-gray-900 hover:text-[#2E8B57]'
              }`}
            >
              {t('header.home')}
            </Link>
            <Link
              to="/hakkimda"
              className={`text-sm font-medium transition-colors ${
                isActive('/doktor_web_2/hakkimda') ? 'text-[#2E8B57] font-bold' : 'text-gray-900 hover:text-[#2E8B57]'
              }`}
            >
              {t('header.about')}
            </Link>
            <Link
              to="/calismalar"
              className={`text-sm font-medium transition-colors ${
                isActive('/calismalar') ? 'text-[#2E8B57] font-bold' : 'text-gray-900 hover:text-[#2E8B57]'
              }`}
            >
              {t('header.works')}
            </Link>
            
            {/* Specializations Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setSpecializationsOpen(!specializationsOpen)}
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  specializations.some(spec => isActive(spec.path)) 
                    ? 'text-[#2E8B57] font-bold' 
                    : 'text-gray-900 hover:text-[#2E8B57]'
                }`}
              >
                {t('header.specializations')}
                <ChevronDown className={`w-4 h-4 transition-transform ${specializationsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {specializationsOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">{t('header.specializations').toUpperCase()}</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {specializations.map((spec, index) => (
                      <div key={spec.path}>
                        <Link
                          to={spec.path}
                          onClick={() => setSpecializationsOpen(false)}
                          className={`block px-4 py-3 text-sm transition-colors relative ${
                            isActive(spec.path)
                              ? 'bg-blue-50 text-blue-600'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                          }`}
                        >
                          {isActive(spec.path) && (
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600"></div>
                          )}
                          <span className={`inline-block w-2 h-2 rounded-full mr-3 ${
                            isActive(spec.path) ? 'bg-blue-600' : 'bg-gray-400'
                          }`}></span>
                          {t(`specializations.${spec.key}`)}
                        </Link>
                        {index < specializations.length - 1 && (
                          <div className="border-b border-gray-100 mx-4"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <Link
              to="/akademik"
              className={`text-sm font-medium transition-colors ${
                isActive('/akademik') ? 'text-[#2E8B57] font-bold' : 'text-gray-900 hover:text-[#2E8B57]'
              }`}
            >
              {t('header.academic')}
            </Link>
            
            <Link
              to="/blog"
              className={`text-sm font-medium transition-colors ${
                isActive('/blog') ? 'text-[#2E8B57] font-bold' : 'text-gray-900 hover:text-[#2E8B57]'
              }`}
            >
              {t('header.blog')}
            </Link>
            
            <Link
              to="/iletisim"
              className={`text-sm font-medium transition-colors ${
                isActive('/iletisim') ? 'text-[#2E8B57] font-bold' : 'text-gray-900 hover:text-[#2E8B57]'
              }`}
            >
              {t('header.appointment')}
            </Link>
            
            {/* Language Switcher */}
            <div className="flex items-center gap-2 border-l border-gray-200 pl-4">
              <button
                onClick={() => changeLanguage('tr')}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  i18n.language === 'tr' ? 'bg-[#2E8B57] text-white' : 'text-gray-700 hover:text-[#2E8B57]'
                }`}
              >
                TR
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  i18n.language === 'en' ? 'bg-[#2E8B57] text-white' : 'text-gray-700 hover:text-[#2E8B57]'
                }`}
              >
                EN
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center"
          >
            <Menu className="w-6 h-6 text-gray-900" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-gray-900 hover:text-[#2E8B57]"
            >
              {t('header.home')}
            </Link>
            <Link
              to="/hakkimda"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-gray-900 hover:text-[#2E8B57]"
            >
              {t('header.about')}
            </Link>
            <Link
              to="/calismalar"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-gray-900 hover:text-[#2E8B57]"
            >
              {t('header.works')}
            </Link>
            
            {/* Mobile Specializations */}
            <div className="border-t border-gray-200 pt-3">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3 px-2">{t('header.specializations').toUpperCase()}</h3>
              <div className="space-y-1">
                {specializations.map((spec) => (
                  <Link
                    key={spec.path}
                    to={spec.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-2 py-3 text-sm transition-colors relative ${
                      isActive(spec.path)
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    {isActive(spec.path) && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600"></div>
                    )}
                    <span className={`inline-block w-2 h-2 rounded-full mr-3 ${
                      isActive(spec.path) ? 'bg-blue-600' : 'bg-gray-400'
                    }`}></span>
                    {t(`specializations.${spec.key}`)}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link
              to="/akademik"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-gray-900 hover:text-[#2E8B57]"
            >
              {t('header.academic')}
            </Link>
            
            <Link
              to="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-gray-900 hover:text-[#2E8B57]"
            >
              {t('header.blog')}
            </Link>
            
            <Link
              to="/iletisim"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-gray-900 hover:text-[#2E8B57]"
            >
              {t('header.appointment')}
            </Link>
            
            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-3 pt-3 border-t border-gray-200">
              <span className="text-sm font-medium text-gray-600">Dil / Language:</span>
              <button
                onClick={() => changeLanguage('tr')}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  i18n.language === 'tr' ? 'bg-[#2E8B57] text-white' : 'text-gray-700'
                }`}
              >
                TR
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  i18n.language === 'en' ? 'bg-[#2E8B57] text-white' : 'text-gray-700'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.header>
  );
}
