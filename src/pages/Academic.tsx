import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const academicPublications = [
  {
    id: 'burun-estetiginde-dogal-gorunum',
    title: 'Burun Estetiğinde Doğal Görünüm Yaklaşımları',
    journal: 'Estetik Cerrahi Dergisi',
    year: '2023',
    description: 'Burun estetiği operasyonlarında doğal görünüm elde etmek için kullanılan modern teknikler ve yaklaşımlar hakkında kapsamlı bir çalışma.',
    image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/bntdvsi.webp`
  },
  {
    id: 'meme-estetiginde-komplikasyon',
    title: 'Meme Estetiğinde Komplikasyon Yönetimi: Çok Merkezli Deneyim',
    journal: 'Uluslararası Estetik Cerrahi Kongresi',
    year: '2022',
    description: 'Meme estetiği operasyonlarında karşılaşılan komplikasyonların yönetimi ve çok merkezli deneyimlerin paylaşılması.',
    image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/cltbkm.webp`
  },
  {
    id: 'liposuction-modern-teknikler',
    title: 'Liposuction: Modern Teknikler ve Sonuçlar',
    journal: 'Plastik Cerrahi El Kitabı',
    year: '2021',
    description: 'Liposuction operasyonlarında kullanılan modern teknikler ve elde edilen sonuçların detaylı analizi.',
    image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/alnskllndrme.webp`
  },
  {
    id: 'yuz-genclestirme-minimal-invaziv',
    title: 'Yüz Gençleştirme Cerrahisinde Minimal İnvaziv Yaklaşımlar',
    journal: 'Aesthetic Surgery Journal',
    year: '2023',
    description: 'Yüz gençleştirme cerrahisinde minimal invaziv yaklaşımların avantajları ve uygulama teknikleri.',
    image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/frksynellazer.webp`
  },
  {
    id: 'botoks-yeni-teknikler',
    title: 'Botoks Uygulamalarında Yeni Teknikler ve Sonuçlar',
    journal: 'Türk Plastik Cerrahi Derneği Kongresi',
    year: '2022',
    description: 'Botoks uygulamalarında kullanılan yeni teknikler ve elde edilen sonuçların değerlendirilmesi.',
    image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/frksynellazer.webp`
  },
  {
    id: 'sac-ekimi-fue-teknigi',
    title: 'Saç Ekimi: FUE Tekniği ve Komplikasyon Yönetimi',
    journal: 'Dermatoloji ve Estetik Cerrahi Atlası',
    year: '2020',
    description: 'FUE tekniği ile saç ekimi operasyonları ve komplikasyon yönetimi konularında detaylı bilgiler.',
    image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/frksynellazer.webp`
  }
];

export default function Academic() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="relative h-96 lg:h-[500px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('${import.meta.env.BASE_URL}images/doktor_resim_2.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 25%',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-black mb-4">{t('hero.academic')}</h1>
          <p className="text-xl md:text-2xl text-gray-200">{t('hero.academicSubtitle')}</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {academicPublications.map((publication, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <img 
                  src={publication.image} 
                  alt={publication.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/400x200/2E8B57/FFFFFF?text=' + encodeURIComponent(publication.title.charAt(0));
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2E8B57]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 right-4">
                  <span className="bg-[#2E8B57] text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {publication.year}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2E8B57] transition-colors line-clamp-2">
                  {publication.title}
                </h3>
                <p className="text-[#2E8B57] font-semibold mb-2">
                  {publication.journal}
                </p>
                <p className="text-gray-600 line-clamp-3">
                  {publication.description}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Link 
                    to={`/akademik/makale/${publication.id}`}
                    className="text-[#2E8B57] font-semibold hover:text-[#2E8B57]/80 transition-colors"
                  >
                    {t('common.readMore')} →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div 
          className="mt-20 text-white rounded-3xl p-12 text-center relative overflow-hidden"
          style={{
            backgroundImage: `url('${import.meta.env.BASE_URL}images/hizmetlerimiz_image/frksynellazer.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <h2 className="text-4xl font-bold mb-6">{t('academic.ctaTitle')}</h2>
          <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
            {t('academic.ctaDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#2E8B57] hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105">
              {t('common.appointment')}
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#2E8B57] px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105">
              {t('academic.downloadCV')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
