import { useState } from 'react';
import { Eye, FileText, Calendar, ArrowRight, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Works() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('calismalar');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const works = [
    {
      id: 'burun-estetigi-vaka-calismasi',
      title: 'Vaka Çalışması: Rinoplasti',
      description: 'Burun estetiği operasyonundan önce ve sonraki sonuçların incelenmesi.',
      image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/bntdvsi.webp`,
      category: 'rinoplasti',
      date: '2024',
      type: 'vaka'
    },
    {
      id: 'meme-estetigi-komplikasyon-yonetimi',
      title: 'Araştırma: Meme Rekonstrüksiyonu Teknikleri',
      description: 'Mastektomi sonrası meme rekonstrüksiyonu için yenilikçi yaklaşımlar.',
      image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/cltbkm.webp`,
      category: 'meme',
      date: '2023',
      type: 'arastirma'
    },
    {
      id: 'liposuction-modern-teknikler',
      title: 'Vaka Çalışması: Yüz Germe',
      description: 'Yaşlanma belirtilerini gidermeye yönelik yüz germe operasyonu detayları.',
      image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/frksynellazer.webp`,
      category: 'yuz',
      date: '2024',
      type: 'vaka'
    },
    {
      id: 'karin-germe-vaka-calismasi',
      title: 'Vaka Çalışması: Karın Germe',
      description: 'Doğum sonrası karın bölgesindeki deformasyonların düzeltilmesi.',
      image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/alnskllndrme.webp`,
      category: 'vucut',
      date: '2023',
      type: 'vaka'
    },
    {
      id: 'yanik-tedavisi-arastirma',
      title: 'Araştırma: Yanık Tedavisi',
      description: 'Ağır yanık vakalarında uygulanan yeni tedavi yöntemleri.',
      image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/frksynellazer.webp`,
      category: 'rekonstruktif',
      date: '2022',
      type: 'arastirma'
    },
    {
      id: 'goz-kapagi-estetigi-vaka',
      title: 'Vaka Çalışması: Göz Kapağı Estetiği',
      description: 'Göz kapaklarındaki torbalanma ve sarkmaların giderilmesi.',
      image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/frksynellazer.webp`,
      category: 'yuz',
      date: '2024',
      type: 'vaka'
    },
  ];

  const publications = [
    {
      id: 1,
      title: 'Burun Estetiğinde Doğal Görünüm Yaklaşımları',
      journal: 'Estetik Cerrahi Dergisi',
      year: '2023',
      authors: 'Dr. Elif Aydın, Dr. Mehmet Yılmaz',
      image: `${import.meta.env.BASE_URL}images/doktor_resim_2.webp`
    },
    {
      id: 2,
      title: 'Meme Estetiğinde Komplikasyon Yönetimi',
      journal: 'Uluslararası Estetik Cerrahi Kongresi',
      year: '2022',
      authors: 'Dr. Elif Aydın, Dr. Ayşe Demir',
      image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/bntdvsi.webp`
    },
    {
      id: 3,
      title: 'Liposuction: Modern Teknikler ve Sonuçlar',
      journal: 'Plastik Cerrahi El Kitabı',
      year: '2021',
      authors: 'Dr. Elif Aydın',
      image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/alnskllndrme.webp`
    }
  ];

  const categories = [
    { id: 'all', nameKey: 'works.all' },
    { id: 'rinoplasti', nameKey: 'works.rinoplasti' },
    { id: 'meme', nameKey: 'works.memeEstetiği' },
    { id: 'yuz', nameKey: 'works.yuzEstetiği' },
    { id: 'vucut', nameKey: 'works.vucutEstetiği' },
    { id: 'rekonstruktif', nameKey: 'works.rekonstruktif' }
  ];

  const filteredWorks = selectedCategory === 'all' 
    ? works 
    : works.filter(work => work.category === selectedCategory);

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section 
        className="relative h-80 sm:h-96 lg:h-[500px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('${import.meta.env.BASE_URL}images/doktor_resim_2.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 25%',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-3 sm:px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4">{t('hero.works')}</h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200">{t('hero.worksSubtitle')}</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-8 sm:py-12 lg:py-16">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="bg-gray-100 rounded-2xl p-1 sm:p-2 inline-flex">
            <button
              onClick={() => setActiveTab('calismalar')}
              className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                activeTab === 'calismalar'
                  ? 'bg-[#2E8B57] text-white shadow-lg'
                  : 'text-gray-600 hover:text-[#2E8B57]'
              }`}
            >
              <div className="flex items-center gap-1 sm:gap-2">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">{t('works.works')}</span>
                <span className="sm:hidden">{t('works.worksShort')}</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('yayinlar')}
              className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                activeTab === 'yayinlar'
                  ? 'bg-[#2E8B57] text-white shadow-lg'
                  : 'text-gray-600 hover:text-[#2E8B57]'
              }`}
            >
              <div className="flex items-center gap-1 sm:gap-2">
                <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                {t('works.publications')}
              </div>
            </button>
          </div>
        </div>

        {activeTab === 'calismalar' && (
          <>
            {/* Filter Section */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <Filter className="w-6 h-6 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-900">{t('works.categoryFilter')}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-[#2E8B57] text-white shadow-lg'
                        : 'bg-gray-100 text-gray-600 hover:bg-[#2E8B57]/10 hover:text-[#2E8B57]'
                    }`}
                  >
                    {t(category.nameKey)}
                  </button>
                ))}
              </div>
            </div>

            {/* Works Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {filteredWorks.map((work) => (
                <div
                  key={work.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        work.type === 'vaka' 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-green-500 text-white'
                      }`}>
                        {work.type === 'vaka' ? t('works.caseStudy') : t('works.research')}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 flex items-center gap-2 text-white text-sm">
                      <Calendar className="w-4 h-4" />
                      {work.date}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2E8B57] transition-colors">
                      {work.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {work.description}
                    </p>
                    <Link 
                      to={`/calismalar/${work.id}`}
                      className="flex items-center gap-2 text-[#2E8B57] font-semibold hover:gap-3 transition-all duration-300"
                    >
                      {t('services.seeDetails')}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'yayinlar' && (
          <div className="space-y-8">
            {publications.map((pub) => (
              <div
                key={pub.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-32 w-full h-48 md:h-32">
                    <img
                      src={pub.image}
                      alt={pub.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {pub.title}
                    </h3>
                    <p className="text-[#2E8B57] font-semibold mb-2">
                      {pub.journal}
                    </p>
                    <p className="text-gray-600 mb-2">
                      {pub.authors}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {pub.year}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button className="bg-[#2E8B57] hover:bg-[#2E8B57]/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                      {t('common.readMore')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <section 
          className="mt-20 rounded-3xl p-12 text-center text-white relative overflow-hidden"
          style={{
            backgroundImage: `url('${import.meta.env.BASE_URL}images/hizmetlerimiz_image/frksynellazer.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <h2 className="text-4xl font-bold mb-4">{t('works.ctaTitle')}</h2>
          <p className="text-xl mb-8 text-gray-200">
            {t('works.ctaDescription')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#2E8B57] hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105">
              {t('common.appointment')}
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#2E8B57] px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105">
              {t('works.downloadCV')}
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}