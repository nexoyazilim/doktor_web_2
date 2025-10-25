import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnimatedSection, StaggeredContainer, StaggeredItem } from '../components/animations/AnimatedSection';
import { useTypingAnimation } from '../hooks/useScrollAnimation';

const heroData = {
  url: `${import.meta.env.BASE_URL}images/alt_resim.webp`,
  title: "Dr. Elif Aydın",
  subtitle: "Plastik ve Rekonstrüktif Cerrahi Uzmanı",
  description: "Hayalinizdeki estetik görünüme, güvenilir ve deneyimli bir profesyonelle ulaşın."
};

export default function Home() {
  const { displayText: titleText } = useTypingAnimation(heroData.title, 150);

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Ken Burns Effect */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat ken-burns"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("${heroData.url}")`
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, ease: "linear" }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Content */}
        <div className="relative z-10 text-center text-white px-3 sm:px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight mb-4 sm:mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              {titleText}
              <motion.span
                className="inline-block w-0.5 sm:w-1 h-8 sm:h-12 md:h-16 bg-[#2E8B57] ml-1 sm:ml-2"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.h1>
            
            <motion.h2 
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-4 sm:mb-6 text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              {heroData.subtitle}
            </motion.h2>
            
            <motion.p 
              className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 text-gray-300 max-w-2xl mx-auto px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
            >
              {heroData.description}
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-full sm:w-auto"
              >
                <Link
                  to="/iletisim"
                  className="block w-full bg-[#2E8B57] hover:bg-[#2E8B57]/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-bold transition-all duration-300 magnetic-hover text-center"
                >
                  Randevu Al
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, rotateY: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-full sm:w-auto"
              >
                <Link
                  to="/hakkimda"
                  className="block w-full border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-bold transition-all duration-300 magnetic-hover text-center"
                >
                  Hakkımda
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Estetik Cerrahi Yaklaşımım Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          {/* İlk Bölüm - Estetik Cerrahi Yaklaşımım */}
          <div className="mb-16 sm:mb-20">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              {/* Sol taraf - Metin */}
              <AnimatedSection direction="left" className="order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Estetik Cerrahi Yaklaşımım
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p className="text-lg leading-relaxed">
                      Estetik cerrahi, sadece fiziksel değişim değil, aynı zamanda kişinin kendine olan güvenini artıran ve yaşam kalitesini yükselten bir sanattır. 20 yılı aşkın deneyimim boyunca, her hastanın benzersiz anatomik yapısını ve estetik beklentilerini dikkate alarak, doğal ve uyumlu sonuçlar elde etmeyi hedefledim.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Modern cerrahi tekniklerin yanı sıra, minimal invaziv yaklaşımları da tercih ederek, hastalarımın daha hızlı iyileşme süreci yaşamalarını sağlıyorum. Burun estetiğinden meme cerrahisine, yüz gençleştirmeden vücut kontürüne kadar geniş bir yelpazede hizmet veriyorum.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Her operasyon öncesi detaylı konsültasyon yaparak, hastalarımın beklentilerini anlıyor ve gerçekçi sonuçlar hakkında bilgilendiriyorum. Amacım, sadece güzel görünmek değil, aynı zamanda sağlıklı ve fonksiyonel sonuçlar elde etmektir.
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
              
              {/* Sağ taraf - Doktor Resmi */}
              <AnimatedSection direction="right" className="order-1 lg:order-2">
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.img
                    src={`${import.meta.env.BASE_URL}images/doktor_1.webp`}
                    alt="Dr. Elif Aydın - Estetik Cerrahi Yaklaşımı"
                    className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                    loading="lazy"
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-[#2E8B57]/20 to-transparent rounded-2xl"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </motion.div>
              </AnimatedSection>
            </div>
          </div>

          {/* İkinci Bölüm - Hasta Odaklı Yaklaşımım */}
          <div>
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              {/* Sol taraf - Doktor Resmi */}
              <AnimatedSection direction="left" className="order-1">
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.img
                    src={`${import.meta.env.BASE_URL}images/doktor_resim_2.webp`}
                    alt="Dr. Elif Aydın - Hasta Odaklı Yaklaşım"
                    className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                    loading="lazy"
                    whileHover={{ scale: 1.05, rotateY: -5 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-[#2E8B57]/20 to-transparent rounded-2xl"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </motion.div>
              </AnimatedSection>
              
              {/* Sağ taraf - Metin */}
              <AnimatedSection direction="right" className="order-2">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Hasta Odaklı Yaklaşımım
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p className="text-lg leading-relaxed">
                      Hastalarımla kurduğum iletişim, tedavi sürecinin en önemli parçasıdır. Her hasta için özel olarak tasarlanan tedavi planları, sadece cerrahi tekniklerle sınırlı kalmaz. Ameliyat öncesi psikolojik hazırlık, ameliyat sonrası bakım ve takip süreçleri de bu planın ayrılmaz parçalarıdır.
                    </p>
                    <p className="text-lg leading-relaxed">
                      İlk konsültasyondan itibaren, hastalarımın beklentilerini ve endişelerini anlamaya odaklanıyorum. Her hastanın farklı bir hikayesi, farklı beklentileri ve farklı endişeleri vardır. Bu nedenle, standart bir yaklaşım yerine, her hasta için özelleştirilmiş bir tedavi planı hazırlıyorum.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Güvenlik ve kalite, çalışma prensiplerimin temelini oluşturur. Uluslararası standartlarda sterilizasyon, modern ameliyathane koşulları ve deneyimli ekibimle birlikte, en güvenli ortamı sağlıyorum. Ameliyat sonrası takip süreci de en az ameliyat kadar önemlidir.
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <AnimatedSection direction="up" className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Uzmanlık Alanlarım
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Modern estetik cerrahi teknikleri ile hayalinizdeki görünüme kavuşun
            </p>
          </AnimatedSection>

          <StaggeredContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                title: "Burun Estetiği",
                description: "Doğal ve estetik burun görünümü için modern rinoplasti teknikleri",
                image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/bntdvsi.webp`,
                link: "/doktor_web_2/uzmanlik/rinoplasti"
              },
              {
                title: "Meme Estetiği",
                description: "Meme büyütme, küçültme ve dikleştirme operasyonları",
                image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/cltbkm.webp`,
                link: "/doktor_web_2/uzmanlik/meme-buyutme"
              },
              {
                title: "Liposuction",
                description: "Bölgesel yağ alma ve vücut kontürü düzenleme",
                image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/alnskllndrme.webp`,
                link: "/doktor_web_2/uzmanlik/liposuction"
              },
              {
                title: "Yüz Gençleştirme",
                description: "Yüz germe ve minimal invaziv gençleştirme teknikleri",
                image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/frksynellazer.webp`,
                link: "/doktor_web_2/uzmanlik/yuz-germe"
              },
              {
                title: "Botoks & Dolgu",
                description: "Kırışıklık tedavisi ve yüz hatlarını belirginleştirme",
                image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/bntdvsi.webp`,
                link: "/doktor_web_2/uzmanlik/botoks"
              },
              {
                title: "Saç Ekimi",
                description: "FUE tekniği ile doğal saç çizgisi oluşturma",
                image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/alnskllndrme.webp`,
                link: "/doktor_web_2/uzmanlik/sac-ekimi"
              }
            ].map((service, index) => (
              <StaggeredItem key={index}>
                <motion.div
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 tilt-on-hover"
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="aspect-w-16 aspect-h-12">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      whileHover={{ scale: 1.1 }}
                    />
                  </div>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <motion.h3 
                      className="text-2xl font-bold mb-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      {service.title}
                    </motion.h3>
                    <p className="text-gray-200 mb-4">{service.description}</p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to={service.link}
                        className="inline-block bg-[#2E8B57] hover:bg-[#2E8B57]/90 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 magnetic-hover"
                      >
                        Detayları Gör
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left" className="order-2 lg:order-1">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Hakkımda
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600 mb-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Plastik ve Rekonstrüktif Cerrahi alanında uzman doktor olarak, 
                modern teknikler ve kişiye özel yaklaşımlarla hastalarıma en iyi hizmeti sunmaktayım.
              </motion.p>
              <motion.p 
                className="text-lg text-gray-600 mb-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Yılların deneyimi ve sürekli gelişen teknoloji ile birleşen uzmanlığım, 
                her hasta için en uygun tedavi planını oluşturmamı sağlar.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/hakkimda"
                  className="inline-block bg-[#2E8B57] hover:bg-[#2E8B57]/90 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 magnetic-hover"
                >
                  Daha Fazla Bilgi
                </Link>
              </motion.div>
            </AnimatedSection>
            
            <AnimatedSection direction="right" className="order-1 lg:order-2">
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <motion.img
                  src={`${import.meta.env.BASE_URL}images/doktor_resim_2.webp`}
                  alt="Dr. Elif Aydın"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  loading="lazy"
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-[#2E8B57]/20 to-transparent rounded-2xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Blog Yazılarım
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Estetik cerrahi hakkında güncel bilgiler, uzman görüşleri ve hasta deneyimleri
            </p>
          </AnimatedSection>

          <StaggeredContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
                id: 'yaslanma-karsiti-estetik',
                title: 'Yaşlanma Karşıtı Estetik: Botoks ve Dolgu',
                category: 'Non-İnvaziv Estetik',
                description: 'Botoks ve dolgu uygulamaları ile genç görünüm kazanın. Güvenli ve etkili yöntemler hakkında detaylı bilgi.',
                image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/frksynellazer.webp`,
                readTime: '6 dk'
              }
            ].map((post, index) => (
              <StaggeredItem key={index}>
                <motion.div
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="relative h-48 bg-gray-200 overflow-hidden">
                    <motion.img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      whileHover={{ scale: 1.1 }}
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
                    <motion.h3 
                      className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2E8B57] transition-colors line-clamp-2"
                      whileHover={{ scale: 1.02 }}
                    >
                      {post.title}
                    </motion.h3>
                    <p className="text-gray-600 line-clamp-3 mb-4">
                      {post.description}
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-[#2E8B57] font-semibold hover:text-[#2E8B57]/80 transition-colors flex items-center"
                      >
                        Devamını Oku 
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </StaggeredItem>
            ))}
          </StaggeredContainer>

          <AnimatedSection direction="up" className="text-center mt-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to="/blog"
                className="inline-block bg-[#2E8B57] hover:bg-[#2E8B57]/90 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 magnetic-hover"
              >
                Tüm Blog Yazılarını Gör
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2E8B57] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection direction="up">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Hayalinizdeki Görünüme Kavuşun
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Uzman ekibimizle birlikte, güvenli ve etkili estetik cerrahi çözümleri sunuyoruz. 
              Randevu alarak ücretsiz konsültasyon için bizimle iletişime geçin.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to="/iletisim"
                  className="bg-white text-[#2E8B57] hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 magnetic-hover"
                >
                  Randevu Al
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, rotateY: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to="/akademik"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#2E8B57] px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 magnetic-hover"
                >
                  Akademik Çalışmalarım
                </Link>
              </motion.div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}