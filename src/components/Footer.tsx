import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Youtube, Instagram, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-gray-900 text-white">
      {/* Ana Footer İçeriği */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Sol Kolon - Tanıtım ve Sosyal Medya */}
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">Dr. Elif Aydın</h3>
                <p className="text-gray-300 leading-relaxed">
                  Estetik ve plastik cerrahi alanında uzman hekimlik hizmeti sunmaktayım. 
                  Modern teknikler ve kişiye özel yaklaşımlarla hastalarıma en iyi hizmeti sunuyorum.
                </p>
              </div>
              
              {/* Sosyal Medya */}
              <div>
                <h4 className="text-lg font-semibold mb-4">{t('footer.follow')}</h4>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Menü Kolonu */}
            <div>
              <h4 className="text-xl font-bold mb-6">{t('footer.menu')}</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/hakkimda" className="text-gray-300 hover:text-white transition-colors">
                    {t('footer.about')}
                  </Link>
                </li>
                <li>
                  <Link to="/akademik" className="text-gray-300 hover:text-white transition-colors">
                    {t('footer.academic')}
                  </Link>
                </li>
                <li>
                  <Link to="/uzmanlik/rinoplasti" className="text-gray-300 hover:text-white transition-colors">
                    {t('footer.specializations')}
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                    {t('footer.blog')}
                  </Link>
                </li>
                <li>
                  <Link to="/calismalar" className="text-gray-300 hover:text-white transition-colors">
                    {t('footer.photoGallery')}
                  </Link>
                </li>
                <li>
                  <Link to="/iletisim" className="text-gray-300 hover:text-white transition-colors">
                    {t('footer.contact')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* İletişim Kolonu */}
            <div>
              <h4 className="text-xl font-bold mb-6">{t('footer.contactTitle')}</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gray-400 mt-1" />
                  <div>
                    <p className="text-blue-100">
                      <span className="font-semibold">{t('footer.phone')}</span> 0535 308 44 66
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gray-400 mt-1" />
                  <div>
                    <p className="text-blue-100">
                      <span className="font-semibold">{t('footer.email')}</span> info@demo.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                  <div>
                    <p className="text-blue-100">
                      <span className="font-semibold">{t('footer.address')}</span> Ataşehir/İstanbul
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gray-400 mt-1" />
                  <div>
                    <p className="text-blue-100">
                      <span className="font-semibold">{t('footer.hours')}</span> {t('footer.hoursWeekdays')}
                    </p>
                    <p className="text-blue-100">
                      <span className="font-semibold">{t('footer.hours')}</span> {t('footer.hoursWeekend')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alt Çizgi */}
      <div className="border-t border-gray-700 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {t('footer.copyright')}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                {t('footer.privacy')}
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                {t('footer.terms')}
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                {t('footer.kvkk')}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <a 
          href="https://wa.me/905353084466" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        >
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </a>
      </div>
    </footer>
  );
}