import { GraduationCap, CheckCircle, Award, Users, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section 
        className="relative h-64 sm:h-80 lg:h-96 flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('${import.meta.env.BASE_URL}images/doktor_resim_2.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 text-center text-white px-3 sm:px-4">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hakkımda
          </motion.h1>
          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Plastik ve Rekonstrüktif Cerrahi Uzmanı
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-8 sm:py-12 lg:py-16">
        {/* Doctor Profile Section */}
        <section className="mb-12 sm:mb-16 lg:mb-20">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                  src={`${import.meta.env.BASE_URL}images/doktor_1.webp`}
                  alt="Dr. Elif Aydın"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="absolute -bottom-3 sm:-bottom-6 -right-3 sm:-right-6 bg-[#2E8B57] text-white p-4 sm:p-6 rounded-2xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold">10+</div>
                  <div className="text-xs sm:text-sm">Yıl Deneyim</div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Dr. Elif Aydın</h2>
              <p className="text-lg sm:text-xl text-[#2E8B57] font-semibold mb-4 sm:mb-6">Plastik ve Rekonstrüktif Cerrahi Uzmanı</p>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Hem sanat hem de bilime derin bir tutkuyla, pratiğimi uyum, denge ve doğal görünen sonuçlar elde etmeye adamaktayım. Yaklaşımım, hasta merkezli bakım felsefesi üzerine kuruludur ve her bireyin duyulduğunu, anlaşıldığını ve yolculuklarında kendine güvendiğini hissetmesini sağlar.
              </p>
              <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#2E8B57]/10 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#2E8B57]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">500+</div>
                    <div className="text-xs sm:text-sm text-gray-600">Mutlu Hasta</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#2E8B57]/10 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#2E8B57]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">15+</div>
                    <div className="text-xs sm:text-sm text-gray-600">Sertifika</div>
                  </div>
                </div>
              </div>
              <Link
                to="/iletisim"
                className="inline-block bg-[#2E8B57] hover:bg-[#2E8B57]/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-bold transition-all duration-300 transform hover:scale-105"
              >
                Randevu Al
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section 
          className="py-20 rounded-3xl mb-20 relative overflow-hidden"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3738386/pexels-photo-3738386.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-white/90"></div>
          <div className="relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Rakamlarla Başarı</h2>
              <p className="text-xl text-gray-600">Yılların deneyimi ve uzmanlığımın göstergeleri</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Başarılı Operasyon", icon: Award },
              { number: "10+", label: "Yıl Deneyim", icon: Clock },
              { number: "15+", label: "Sertifika", icon: GraduationCap },
              { number: "100%", label: "Hasta Memnuniyeti", icon: Users }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-[#2E8B57] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
            </div>
          </div>
        </section>

        {/* Education Timeline */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Eğitim ve Sertifikalar</h2>
            <p className="text-xl text-gray-600">Kapsamlı eğitim geçmişim ve uzmanlık sertifikalarım</p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#2E8B57] to-[#32CD32] hidden lg:block rounded-full"></div>
            
            <div className="space-y-12">
              {[
                {
                  year: "2018 - 2019",
                  title: "Fellowship, Rekonstrüktif Mikrocerrahi",
                  institution: "Johns Hopkins Hospital, Baltimore, MD",
                  description: "Dünyanın en prestijli hastanelerinden birinde mikrocerrahi alanında uzmanlık eğitimi",
                  side: "left"
                },
                {
                  year: "2012 - 2018",
                  title: "Uzmanlık, Plastik Cerrahi",
                  institution: "İstanbul Üniversitesi, Cerrahpaşa",
                  description: "Plastik ve rekonstrüktif cerrahi alanında 6 yıllık uzmanlık eğitimi",
                  side: "right"
                },
                {
                  year: "2006 - 2012",
                  title: "Tıp Doktoru (M.D.)",
                  institution: "Hacettepe Üniversitesi Tıp Fakültesi",
                  description: "Türkiye'nin en köklü tıp fakültelerinden birinde temel tıp eğitimi",
                  side: "left"
                }
              ].map((edu, index) => (
                <div key={index} className={`flex items-center w-full ${edu.side === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`w-full lg:w-1/2 ${edu.side === 'right' ? 'lg:pl-8' : 'lg:pr-8'}`}>
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="text-[#2E8B57] font-semibold text-sm mb-2">{edu.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.title}</h3>
                      <p className="text-[#2E8B57] font-semibold mb-3">{edu.institution}</p>
                      <p className="text-gray-600">{edu.description}</p>
                    </div>
                  </div>
                  
                  <div className="hidden lg:flex w-12 h-12 rounded-full bg-[#2E8B57] items-center justify-center z-10 mx-auto ring-8 ring-white shadow-lg">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="hidden lg:block w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience & Specializations */}
        <section className="py-20 bg-gradient-to-br from-[#2E8B57] to-[#32CD32] rounded-3xl text-white">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-8">Profesyonel Deneyim</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Uzman Cerrah</h3>
                    <p className="text-gray-200 mb-1">Özel Muayenehane, İstanbul</p>
                    <p className="text-gray-300 text-sm">2019 - Günümüz</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Klinik Ortağı</h3>
                    <p className="text-gray-200 mb-1">American Hospital, İstanbul</p>
                    <p className="text-gray-300 text-sm">2018 - 2019</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-8">Uzmanlık Alanları</h2>
              <div className="space-y-4">
                {[
                  "Estetik ve Fonksiyonel Rinoplasti",
                  "Meme Büyütme, Dikleştirme ve Küçültme",
                  "Yüz Gençleştirme (Yüz Germe, Göz Kapağı Estetiği)",
                  "Vücut Şekillendirme (Liposuction, Karın Germe)",
                  "Botoks ve Dolgu Uygulamaları",
                  "Saç Ekimi (FUE Tekniği)",
                  "Kompleks Rekonstrüktif Cerrahi"
                ].map((specialty, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
                    <span className="text-lg">{specialty}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Eğitim ve Sertifikalar Bölümü */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Eğitim ve Sertifikalar</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Sürekli eğitim ve gelişim anlayışıyla, estetik cerrahi alanındaki en son gelişmeleri takip ediyorum.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Eğitim Geçmişi */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#2E8B57] rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  Eğitim Geçmişi
                </h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-[#2E8B57] pl-6">
                    <h4 className="text-lg font-semibold text-gray-900">Plastik ve Rekonstrüktif Cerrahi Uzmanlığı</h4>
                    <p className="text-gray-600">İstanbul Üniversitesi Cerrahpaşa Tıp Fakültesi</p>
                    <p className="text-sm text-gray-500">2015 - 2020</p>
                  </div>
                  <div className="border-l-4 border-[#2E8B57] pl-6">
                    <h4 className="text-lg font-semibold text-gray-900">Tıp Doktoru</h4>
                    <p className="text-gray-600">Hacettepe Üniversitesi Tıp Fakültesi</p>
                    <p className="text-sm text-gray-500">2009 - 2015</p>
                  </div>
                  <div className="border-l-4 border-[#2E8B57] pl-6">
                    <h4 className="text-lg font-semibold text-gray-900">Lise</h4>
                    <p className="text-gray-600">Ankara Fen Lisesi</p>
                    <p className="text-sm text-gray-500">2005 - 2009</p>
                  </div>
                </div>
              </div>

              {/* Sertifikalar ve Üyelikler */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#2E8B57] rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  Sertifikalar ve Üyelikler
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-[#2E8B57] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Türk Plastik Rekonstrüktif ve Estetik Cerrahi Derneği</h4>
                      <p className="text-gray-600 text-sm">Aktif Üye</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-[#2E8B57] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">International Society of Aesthetic Plastic Surgery</h4>
                      <p className="text-gray-600 text-sm">Üye</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-[#2E8B57] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Rinoplasti Sertifikası</h4>
                      <p className="text-gray-600 text-sm">Uluslararası Rinoplasti Derneği</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-[#2E8B57] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Meme Estetiği Sertifikası</h4>
                      <p className="text-gray-600 text-sm">Avrupa Estetik Cerrahi Derneği</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-[#2E8B57] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Saç Ekimi Sertifikası</h4>
                      <p className="text-gray-600 text-sm">FUE Tekniği Uzmanı</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Kariyer Timeline */}
            <div className="mt-16">
              <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Kariyer Geçmişi</h3>
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#2E8B57]"></div>
                <div className="space-y-8">
                  <div className="flex items-center">
                    <div className="w-1/2 pr-8 text-right">
                      <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h4 className="text-lg font-semibold text-gray-900">Başhekim</h4>
                        <p className="text-gray-600">Estetik Cerrahi Kliniği</p>
                        <p className="text-sm text-gray-500">2020 - Devam Ediyor</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 bg-[#2E8B57] rounded-full border-4 border-white shadow-lg flex-shrink-0"></div>
                    <div className="w-1/2 pl-8"></div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-1/2 pr-8"></div>
                    <div className="w-8 h-8 bg-[#2E8B57] rounded-full border-4 border-white shadow-lg flex-shrink-0"></div>
                    <div className="w-1/2 pl-8">
                      <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h4 className="text-lg font-semibold text-gray-900">Klinik Ortağı</h4>
                        <p className="text-gray-600">American Hospital, İstanbul</p>
                        <p className="text-sm text-gray-500">2018 - 2020</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-1/2 pr-8 text-right">
                      <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h4 className="text-lg font-semibold text-gray-900">Uzman Doktor</h4>
                        <p className="text-gray-600">Cerrahpaşa Tıp Fakültesi</p>
                        <p className="text-sm text-gray-500">2015 - 2018</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 bg-[#2E8B57] rounded-full border-4 border-white shadow-lg flex-shrink-0"></div>
                    <div className="w-1/2 pl-8"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}