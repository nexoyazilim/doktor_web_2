import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, ExternalLink, Download, Award, Clock } from 'lucide-react';

// Çalışma verileri
const works = {
  'burun-estetigi-vaka-calismasi': {
    id: 'burun-estetigi-vaka-calismasi',
    title: 'Burun Estetiği Vaka Çalışması',
    category: 'Estetik Cerrahi',
    year: '2023',
    duration: '6 Ay Takip',
    description: 'Modern rinoplasti teknikleri ile doğal görünüm elde etme konusunda detaylı vaka çalışması.',
    content: `
      <h2>Hasta Bilgileri</h2>
      <p>25 yaşında kadın hasta, burun ucunda asimetri ve kemer problemi şikayeti ile başvurdu. Hastanın beklentileri doğal görünüm ve fonksiyonel iyileşme yönündeydi.</p>
      
      <h2>Preoperatif Değerlendirme</h2>
      <p>Detaylı fizik muayene ve fotoğraf analizi yapıldı. Hastanın anatomik yapısına uygun teknik planlama gerçekleştirildi. 3D görüntüleme ile hasta beklentileri netleştirildi.</p>
      
      <h2>Operatif Teknik</h2>
      <p>Open rinoplasti tekniği kullanıldı. Septal kartilaj korunmasına özen gösterildi. Burun ucunda tip plasty ve kemer düzeltmesi yapıldı. Minimal invaziv yaklaşım benimsendi.</p>
      
      <h2>Postoperatif Takip</h2>
      <p>İlk 48 saat yoğun takip, 1 hafta sonra dikiş alımı, 1 ay sonra detaylı değerlendirme yapıldı. Hasta memnuniyeti %100 olarak tespit edildi.</p>
      
      <h2>Sonuçlar</h2>
      <p>Doğal görünüm elde edildi, fonksiyonel iyileşme sağlandı. Hasta 6 ay sonraki kontrolde tamamen memnun olduğunu belirtti.</p>
    `,
    images: [
      'https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    results: {
      satisfaction: '100%',
      complications: 'Yok',
      followUp: '6 Ay'
    },
    techniques: ['Open Rinoplasti', 'Tip Plasty', 'Kemer Düzeltmesi', 'Septal Koruma']
  },
  'meme-estetigi-komplikasyon-yonetimi': {
    id: 'meme-estetigi-komplikasyon-yonetimi',
    title: 'Meme Estetiği Komplikasyon Yönetimi',
    category: 'Estetik Cerrahi',
    year: '2022',
    duration: '12 Ay Takip',
    description: 'Meme estetiği operasyonlarında komplikasyon yönetimi ve hasta sonuçları.',
    content: `
      <h2>Çalışma Kapsamı</h2>
      <p>Son 2 yılda kliniğimizde yapılan meme estetiği operasyonlarının retrospektif analizi. Toplam 150 hasta incelendi.</p>
      
      <h2>Komplikasyon Analizi</h2>
      <p>En sık görülen komplikasyonlar: kapsüler kontraktür (%4.2), hematom (%2.1), enfeksiyon (%1.8) olarak tespit edildi.</p>
      
      <h2>Yönetim Protokolleri</h2>
      <p>Erken tanı ve müdahale protokolleri geliştirildi. Komplikasyon yönetiminde hasta eğitimi kritik önem taşıyor.</p>
      
      <h2>Sonuçlar</h2>
      <p>Tüm komplikasyonlar başarıyla yönetildi. Hasta memnuniyeti %95 olarak tespit edildi.</p>
    `,
    images: [
      'https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6539887/pexels-photo-6539887.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    results: {
      satisfaction: '95%',
      complications: '8.5%',
      followUp: '12 Ay'
    },
    techniques: ['Komplikasyon Yönetimi', 'Erken Tanı', 'Hasta Eğitimi', 'Protokol Geliştirme']
  },
  'liposuction-modern-teknikler': {
    id: 'liposuction-modern-teknikler',
    title: 'Liposuction Modern Teknikler',
    category: 'Vücut Şekillendirme',
    year: '2021',
    duration: '8 Ay Takip',
    description: 'VASER liposuction ve geleneksel tekniklerin karşılaştırmalı analizi.',
    content: `
      <h2>Çalışma Tasarımı</h2>
      <p>Prospektif randomize kontrollü çalışma. 100 hasta VASER, 100 hasta geleneksel liposuction ile tedavi edildi.</p>
      
      <h2>Teknik Karşılaştırma</h2>
      <p>VASER liposuction ile %15 daha az kanama, %20 daha hızlı iyileşme gözlenmiştir.</p>
      
      <h2>Sonuçlar</h2>
      <p>Her iki teknik de güvenli ve etkili. VASER tekniği daha az travma ile sonuç veriyor.</p>
    `,
    images: [
      'https://images.pexels.com/photos/6539887/pexels-photo-6539887.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3738386/pexels-photo-3738386.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    results: {
      satisfaction: '92%',
      complications: '3%',
      followUp: '8 Ay'
    },
    techniques: ['VASER Liposuction', 'Geleneksel Liposuction', 'Karşılaştırmalı Analiz', 'Sonuç Değerlendirme']
  }
};

export default function WorkDetail() {
  const { id } = useParams<{ id: string }>();
  const work = id ? works[id as keyof typeof works] : null;

  if (!work) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Çalışma Bulunamadı</h1>
          <Link to="/calismalar" className="text-[#2E8B57] hover:underline">
            Çalışmalar sayfasına dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('${work.images[0]}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-[#2E8B57]/30" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {work.title}
          </motion.h1>
          <motion.div 
            className="flex flex-wrap justify-center gap-4 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              {work.year}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              {work.duration}
            </span>
            <span className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              {work.category}
            </span>
          </motion.div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link 
            to="/calismalar" 
            className="inline-flex items-center gap-2 text-[#2E8B57] hover:text-[#2E8B57]/80 font-semibold mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Çalışmalar Sayfasına Dön
          </Link>
        </motion.div>

        {/* Work Info */}
        <motion.div 
          className="bg-gray-50 rounded-2xl p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Çalışma Detayları</h3>
              <p className="text-gray-600 mb-6">{work.description}</p>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">Kullanılan Teknikler</h3>
              <div className="flex flex-wrap gap-2">
                {work.techniques.map((technique, index) => (
                  <motion.span
                    key={index}
                    className="bg-[#2E8B57] text-white px-3 py-1 rounded-full text-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {technique}
                  </motion.span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sonuçlar</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="text-gray-600">Hasta Memnuniyeti</span>
                  <span className="font-bold text-[#2E8B57]">{work.results.satisfaction}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="text-gray-600">Komplikasyon Oranı</span>
                  <span className="font-bold text-[#2E8B57]">{work.results.complications}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="text-gray-600">Takip Süresi</span>
                  <span className="font-bold text-[#2E8B57]">{work.results.followUp}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Çalışma Detayları</h2>
          <div 
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: work.content }}
          />
        </motion.div>

        {/* Images */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Görseller</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {work.images.map((image, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <img
                  src={image}
                  alt={`${work.title} - Görsel ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Related Works */}
        <motion.div 
          className="bg-gray-50 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">İlgili Çalışmalar</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.values(works)
              .filter(w => w.id !== work.id)
              .slice(0, 2)
              .map((relatedWork, index) => (
                <motion.div
                  key={relatedWork.id}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{relatedWork.title}</h3>
                  <p className="text-gray-600 mb-4">{relatedWork.description}</p>
                  <Link
                    to={`/calismalar/${relatedWork.id}`}
                    className="text-[#2E8B57] font-semibold hover:underline"
                  >
                    Detayları Gör →
                  </Link>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

