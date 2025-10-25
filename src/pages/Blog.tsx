import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 'burun-estetigi-kimler-icin',
    title: 'Burun Estetiği Kimler İçin Uygundur?',
    category: 'Yüz Estetiği',
    description: 'Burun estetiği, burun şeklinden memnun olmayan ve daha güzel bir görünüm isteyen kişiler için uygun bir seçenektir.',
    image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/bntdvsi.webp`,
    readTime: '5 dk'
  },
  {
    id: 'vucut-sekillendirme-yontemleri',
    title: 'Vücut Şekillendirme Yöntemleri',
    category: 'Liposuction',
    description: 'Liposuction ile vücut kontürünüzü iyileştirin. Modern teknikler ve güvenli uygulama yöntemleri hakkında bilgi alın.',
    image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/alnskllndrme.webp`,
    readTime: '7 dk'
  },
  {
    id: 'estetik-cerrahi-riskleri',
    title: 'Estetik Cerrahi Riskleri ve Önleme Yöntemleri',
    category: 'Cerrahi İşlemler',
    description: 'Estetik cerrahi işlemleri günümüzde güvenli yöntemlerle gerçekleştirilmektedir. Ameliyat öncesi ve sonrası dikkat edilmesi gereken noktalar.',
    image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/cltbkm.webp`,
    readTime: '6 dk'
  },
  {
    id: 'sac-ekimi-modern-teknikler',
    title: 'Saç Ekimi: Modern Teknikler ve Sonuçlar',
    category: 'Saç Ekimi',
    description: 'FUE, FUT ve DHI teknikleri ile saç ekimi. Hangi yöntemin size uygun olduğunu ve beklenen sonuçları öğrenin.',
    image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/alnskllndrme.webp`,
    readTime: '8 dk'
  },
  {
    id: 'estetik-cerrahi-iyilesme',
    title: 'Estetik Cerrahi Sonrası İyileşme Süreci',
    category: 'Beyin Cerrahisi',
    description: 'Estetik cerrahi sonrası iyileşme sürecinde dikkat edilmesi gereken noktalar ve bakım önerileri.',
    image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/frksynellazer.webp`,
    readTime: '5 dk'
  },
  {
    id: 'yaslanma-karsiti-estetik',
    title: 'Yaşlanma Karşıtı Estetik: Botoks ve Dolgu',
    category: 'Non-İnvaziv Estetik',
    description: 'Botoks ve dolgu uygulamaları ile genç görünüm kazanın. Güvenli ve etkili yöntemler hakkında detaylı bilgi.',
    image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/frksynellazer.webp`,
    readTime: '6 dk'
  }
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('${import.meta.env.BASE_URL}images/doktor_resim_2.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-black mb-4">Blog</h1>
          <p className="text-xl md:text-2xl text-gray-200">Estetik cerrahi hakkında güncel bilgiler ve uzman görüşleri</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/400x200/2E8B57/FFFFFF?text=' + encodeURIComponent(post.title.charAt(0));
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2E8B57]/80 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#2E8B57] text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                    {post.readTime}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2E8B57] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 line-clamp-3 mb-4">
                  {post.description}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Link 
                    to={`/blog/${post.id}`}
                    className="text-[#2E8B57] font-semibold hover:text-[#2E8B57]/80 transition-colors flex items-center"
                  >
                    Devamını Oku 
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* Categories Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Kategoriler</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Yüz Estetiği', 'Liposuction', 'Cerrahi İşlemler', 'Saç Ekimi', 'Beyin Cerrahisi', 'Non-İnvaziv Estetik'].map((category, index) => (
              <div key={index} className="bg-gray-50 hover:bg-[#2E8B57] hover:text-white rounded-xl p-6 text-center transition-all duration-300 cursor-pointer group">
                <div className="text-lg font-semibold group-hover:text-white">{category}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
