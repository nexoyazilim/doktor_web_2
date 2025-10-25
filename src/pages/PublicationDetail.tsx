import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, ExternalLink, Download } from 'lucide-react';
import { AnimatedSection } from '../components/animations/AnimatedSection';

// Makale verileri
const publications = {
  'burun-estetiginde-dogal-gorunum': {
    id: 'burun-estetiginde-dogal-gorunum',
    title: 'Burun Estetiğinde Doğal Görünüm Yaklaşımları',
    journal: 'Estetik Cerrahi Dergisi',
    year: '2023',
    authors: 'Dr. Elif Aydın, Dr. Mehmet Yılmaz',
    abstract: 'Bu çalışmada, modern rinoplasti teknikleri ile doğal görünüm elde etmek için kullanılan yaklaşımlar detaylı olarak incelenmiştir. Hastaların anatomik yapılarına uygun tekniklerin seçilmesi ve doğal sonuçların elde edilmesi konularında kapsamlı bir analiz sunulmaktadır.',
    content: `
      <h2>Giriş</h2>
      <p>Burun estetiği cerrahisi, plastik cerrahi alanının en popüler ve teknik olarak zorlu operasyonlarından biridir. Son yıllarda, hastaların beklentileri doğal görünüm lehine değişmiş ve cerrahlar da bu yönde teknikler geliştirmişlerdir.</p>
      
      <h2>Materyal ve Metod</h2>
      <p>Bu retrospektif çalışmada, 2019-2022 yılları arasında kliniğimizde rinoplasti operasyonu geçiren 150 hasta incelenmiştir. Hastaların yaş ortalaması 28.5 ± 6.2 yıl olup, %65'i kadın, %35'i erkek hastalardan oluşmaktadır.</p>
      
      <h2>Sonuçlar</h2>
      <p>Hastaların %92'sinde doğal görünüm elde edilmiş, %8'inde minor revizyon gerekmiştir. Komplikasyon oranı %3 olarak tespit edilmiştir. Hastaların %95'i operasyon sonucundan memnun olduklarını belirtmişlerdir.</p>
      
      <h2>Tartışma</h2>
      <p>Doğal görünüm elde etmek için hastanın anatomik yapısına uygun teknik seçimi kritik önem taşımaktadır. Minimal invaziv yaklaşımlar ve hasta merkezli planlama başarı oranını artırmaktadır.</p>
      
      <h2>Sonuç</h2>
      <p>Modern rinoplasti teknikleri ile doğal görünüm elde etmek mümkündür. Hastanın anatomik yapısına uygun teknik seçimi ve deneyimli cerrahın yaklaşımı başarı için gereklidir.</p>
    `,
    keywords: ['Rinoplasti', 'Doğal Görünüm', 'Estetik Cerrahi', 'Burun Estetiği'],
    doi: '10.1234/estetik.2023.001',
    image: 'https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  'meme-estetiginde-komplikasyon': {
    id: 'meme-estetiginde-komplikasyon',
    title: 'Meme Estetiğinde Komplikasyon Yönetimi: Çok Merkezli Deneyim',
    journal: 'Uluslararası Estetik Cerrahi Kongresi',
    year: '2022',
    authors: 'Dr. Elif Aydın, Dr. Ayşe Demir',
    abstract: 'Meme estetiği operasyonlarında karşılaşılan komplikasyonların yönetimi ve çok merkezli deneyimlerin paylaşılması. Bu çalışmada, farklı kliniklerden elde edilen veriler analiz edilmiş ve komplikasyon yönetimi protokolleri geliştirilmiştir.',
    content: `
      <h2>Giriş</h2>
      <p>Meme estetiği operasyonları, plastik cerrahi alanında en sık yapılan operasyonlardan biridir. Komplikasyonların erken tanınması ve uygun yönetimi hasta sonuçlarını önemli ölçüde etkiler.</p>
      
      <h2>Materyal ve Metod</h2>
      <p>Çok merkezli retrospektif çalışmada, 5 farklı klinikten 500 meme estetiği hastası incelenmiştir. Komplikasyonların tipi, sıklığı ve yönetimi detaylı olarak analiz edilmiştir.</p>
      
      <h2>Sonuçlar</h2>
      <p>Toplam komplikasyon oranı %8.5 olarak tespit edilmiştir. En sık görülen komplikasyonlar kapsüler kontraktür (%4.2), hematom (%2.1) ve enfeksiyon (%1.8) olarak sıralanmıştır.</p>
      
      <h2>Tartışma</h2>
      <p>Komplikasyon yönetiminde erken müdahale ve uygun protokollerin uygulanması kritik önem taşımaktadır. Çok merkezli yaklaşım, deneyim paylaşımını artırmaktadır.</p>
      
      <h2>Sonuç</h2>
      <p>Standartize edilmiş komplikasyon yönetimi protokolleri ile hasta sonuçları iyileştirilebilir. Sürekli eğitim ve deneyim paylaşımı önemlidir.</p>
    `,
    keywords: ['Meme Estetiği', 'Komplikasyon', 'Çok Merkezli', 'Yönetim'],
    doi: '10.1234/estetik.2022.002',
    image: 'https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  'liposuction-modern-teknikler': {
    id: 'liposuction-modern-teknikler',
    title: 'Liposuction: Modern Teknikler ve Sonuçlar',
    journal: 'Plastik Cerrahi El Kitabı',
    year: '2021',
    authors: 'Dr. Elif Aydın',
    abstract: 'Liposuction operasyonlarında kullanılan modern teknikler ve elde edilen sonuçların detaylı analizi. VASER liposuction, laser liposuction ve geleneksel tekniklerin karşılaştırmalı analizi.',
    content: `
      <h2>Giriş</h2>
      <p>Liposuction, vücut kontürü düzenlemede kullanılan en etkili yöntemlerden biridir. Son yıllarda geliştirilen yeni teknikler ile daha güvenli ve etkili sonuçlar elde edilmektedir.</p>
      
      <h2>Materyal ve Metod</h2>
      <p>Bu çalışmada, 2018-2021 yılları arasında farklı liposuction teknikleri ile operasyon geçiren 200 hasta retrospektif olarak incelenmiştir.</p>
      
      <h2>Sonuçlar</h2>
      <p>VASER liposuction ile %15 daha az kanama, %20 daha hızlı iyileşme gözlenmiştir. Laser liposuction ile cilt sıkılaşmasında %25 iyileşme tespit edilmiştir.</p>
      
      <h2>Tartışma</h2>
      <p>Modern liposuction teknikleri, geleneksel yöntemlere göre daha iyi sonuçlar vermektedir. Teknik seçimi hasta anatomisine göre yapılmalıdır.</p>
      
      <h2>Sonuç</h2>
      <p>Modern liposuction teknikleri ile daha güvenli ve etkili sonuçlar elde edilmektedir. Hasta seçimi ve teknik uygunluğu başarı için kritiktir.</p>
    `,
    keywords: ['Liposuction', 'VASER', 'Laser', 'Modern Teknikler'],
    doi: '10.1234/estetik.2021.003',
    image: 'https://images.pexels.com/photos/6539887/pexels-photo-6539887.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  'yuz-genclestirme-minimal-invaziv': {
    id: 'yuz-genclestirme-minimal-invaziv',
    title: 'Yüz Gençleştirme Cerrahisinde Minimal İnvaziv Yaklaşımlar',
    journal: 'Aesthetic Surgery Journal',
    year: '2023',
    authors: 'Dr. Elif Aydın, Dr. Zeynep Kaya',
    abstract: 'Yüz gençleştirme cerrahisinde minimal invaziv yaklaşımların avantajları ve uygulama teknikleri. Bu çalışmada, geleneksel yöntemlerle karşılaştırmalı analiz sunulmaktadır.',
    content: `
      <h2>Giriş</h2>
      <p>Yüz gençleştirme cerrahisinde minimal invaziv yaklaşımlar, daha az travma ve daha hızlı iyileşme sağlamaktadır. Bu tekniklerin avantajları ve uygulama alanları detaylı olarak incelenmiştir.</p>
      
      <h2>Materyal ve Metod</h2>
      <p>Minimal invaziv tekniklerle yüz gençleştirme operasyonu geçiren 100 hasta retrospektif olarak incelenmiştir. Sonuçlar geleneksel yöntemlerle karşılaştırılmıştır.</p>
      
      <h2>Sonuçlar</h2>
      <p>Minimal invaziv tekniklerle %40 daha hızlı iyileşme, %30 daha az şişlik gözlenmiştir. Hasta memnuniyeti %95 olarak tespit edilmiştir.</p>
      
      <h2>Tartışma</h2>
      <p>Minimal invaziv yaklaşımlar, uygun hasta seçimi ile mükemmel sonuçlar vermektedir. Teknik seçimi hasta anatomisine göre yapılmalıdır.</p>
      
      <h2>Sonuç</h2>
      <p>Minimal invaziv yüz gençleştirme teknikleri, geleneksel yöntemlere göre daha iyi hasta deneyimi sunmaktadır.</p>
    `,
    keywords: ['Yüz Gençleştirme', 'Minimal İnvaziv', 'Cerrahi', 'Estetik'],
    doi: '10.1234/estetik.2023.004',
    image: 'https://images.pexels.com/photos/3738386/pexels-photo-3738386.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  'botoks-yeni-teknikler': {
    id: 'botoks-yeni-teknikler',
    title: 'Botoks Uygulamalarında Yeni Teknikler ve Sonuçlar',
    journal: 'Türk Plastik Cerrahi Derneği Kongresi',
    year: '2022',
    authors: 'Dr. Elif Aydın',
    abstract: 'Botoks uygulamalarında kullanılan yeni teknikler ve elde edilen sonuçların değerlendirilmesi. Mikro-injeksiyon teknikleri ve hasta memnuniyeti analizi.',
    content: `
      <h2>Giriş</h2>
      <p>Botoks uygulamalarında geliştirilen yeni teknikler, daha doğal sonuçlar ve daha uzun süreli etki sağlamaktadır. Bu çalışmada yeni yaklaşımlar incelenmiştir.</p>
      
      <h2>Materyal ve Metod</h2>
      <p>Yeni mikro-injeksiyon teknikleri ile botoks uygulanan 200 hasta prospektif olarak takip edilmiştir. Sonuçlar 6 ay boyunca değerlendirilmiştir.</p>
      
      <h2>Sonuçlar</h2>
      <p>Yeni tekniklerle %25 daha uzun süreli etki, %15 daha doğal görünüm elde edilmiştir. Komplikasyon oranı %2 olarak tespit edilmiştir.</p>
      
      <h2>Tartışma</h2>
      <p>Mikro-injeksiyon teknikleri, daha hassas uygulama ve daha iyi sonuçlar sağlamaktadır. Doz ayarlaması kritik önem taşımaktadır.</p>
      
      <h2>Sonuç</h2>
      <p>Yeni botoks teknikleri ile daha etkili ve güvenli sonuçlar elde edilmektedir.</p>
    `,
    keywords: ['Botoks', 'Mikro-injeksiyon', 'Yeni Teknikler', 'Estetik'],
    doi: '10.1234/estetik.2022.005',
    image: 'https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  'sac-ekimi-fue-teknigi': {
    id: 'sac-ekimi-fue-teknigi',
    title: 'Saç Ekimi: FUE Tekniği ve Komplikasyon Yönetimi',
    journal: 'Dermatoloji ve Estetik Cerrahi Atlası',
    year: '2020',
    authors: 'Dr. Elif Aydın, Dr. Can Özkan',
    abstract: 'FUE tekniği ile saç ekimi operasyonları ve komplikasyon yönetimi konularında detaylı bilgiler. Teknik gelişmeler ve hasta sonuçları.',
    content: `
      <h2>Giriş</h2>
      <p>FUE (Follicular Unit Extraction) tekniği, saç ekimi alanında devrim yaratmış bir yöntemdir. Bu çalışmada teknik detaylar ve komplikasyon yönetimi incelenmiştir.</p>
      
      <h2>Materyal ve Metod</h2>
      <p>FUE tekniği ile saç ekimi operasyonu geçiren 300 hasta retrospektif olarak incelenmiştir. Komplikasyonlar ve yönetimleri detaylı olarak analiz edilmiştir.</p>
      
      <h2>Sonuçlar</h2>
      <p>FUE tekniği ile %95 başarı oranı elde edilmiştir. Komplikasyon oranı %5 olarak tespit edilmiştir. En sık görülen komplikasyon folikül enfeksiyonudur.</p>
      
      <h2>Tartışma</h2>
      <p>FUE tekniği, uygun hasta seçimi ve deneyimli cerrah ile mükemmel sonuçlar vermektedir. Komplikasyon yönetiminde erken müdahale kritiktir.</p>
      
      <h2>Sonuç</h2>
      <p>FUE tekniği, saç ekimi alanında altın standart olarak kabul edilmektedir.</p>
    `,
    keywords: ['Saç Ekimi', 'FUE', 'Komplikasyon', 'Yönetim'],
    doi: '10.1234/estetik.2020.006',
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
};

export default function PublicationDetail() {
  const { id } = useParams<{ id: string }>();
  const publication = id ? publications[id as keyof typeof publications] : null;

  if (!publication) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Makale Bulunamadı</h1>
          <Link to="/akademik" className="text-[#2E8B57] hover:underline">
            Akademik sayfasına dön
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
          backgroundImage: `url('${publication.image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-[#2E8B57]/30" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <AnimatedSection direction="up">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {publication.title}
            </motion.h1>
            <motion.div 
              className="flex flex-wrap justify-center gap-4 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {publication.year}
              </span>
              <span className="flex items-center gap-2">
                <User className="w-5 h-5" />
                {publication.journal}
              </span>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Button */}
        <AnimatedSection direction="left">
          <motion.div
            whileHover={{ x: -5 }}
            transition={{ duration: 0.2 }}
          >
            <Link 
              to="/akademik" 
              className="inline-flex items-center gap-2 text-[#2E8B57] hover:text-[#2E8B57]/80 font-semibold mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              Akademik Sayfasına Dön
            </Link>
          </motion.div>
        </AnimatedSection>

        {/* Publication Info */}
        <AnimatedSection direction="up" delay={0.2}>
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Yazarlar</h3>
                <p className="text-gray-600 mb-6">{publication.authors}</p>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">Anahtar Kelimeler</h3>
                <div className="flex flex-wrap gap-2">
                  {publication.keywords.map((keyword, index) => (
                    <motion.span
                      key={index}
                      className="bg-[#2E8B57] text-white px-3 py-1 rounded-full text-sm"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      {keyword}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">DOI</h3>
                <p className="text-gray-600 mb-6 font-mono">{publication.doi}</p>
                
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-[#2E8B57] text-white px-6 py-3 rounded-lg font-semibold"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Tam Metin
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 border-2 border-[#2E8B57] text-[#2E8B57] px-6 py-3 rounded-lg font-semibold"
                  >
                    <Download className="w-5 h-5" />
                    PDF İndir
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Abstract */}
        <AnimatedSection direction="up" delay={0.4}>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Özet</h2>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <p className="text-gray-700 leading-relaxed">{publication.abstract}</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Content */}
        <AnimatedSection direction="up" delay={0.6}>
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Makale İçeriği</h2>
            <div 
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: publication.content }}
            />
          </div>
        </AnimatedSection>

        {/* References */}
        <AnimatedSection direction="up" delay={0.8}>
          <div className="mt-16 bg-gray-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Kaynaklar</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                1. Smith, J. et al. (2023). "Modern Rhinoplasty Techniques". <em>Journal of Plastic Surgery</em>, 45(3), 123-135.
              </p>
              <p className="text-gray-700">
                2. Johnson, M. et al. (2022). "Natural Appearance in Aesthetic Surgery". <em>International Journal of Aesthetic Medicine</em>, 12(2), 67-78.
              </p>
              <p className="text-gray-700">
                3. Brown, K. et al. (2021). "Patient Satisfaction in Cosmetic Surgery". <em>Plastic and Reconstructive Surgery</em>, 38(4), 201-215.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
