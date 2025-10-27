import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Static data without translations
const specializationsStaticData = {
  'rinoplasti': {
    image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/bntdvsi.webp`,
    content: {
      nedir: 'Rinoplasti, burnun şeklini ve boyutunu değiştirmek için yapılan estetik cerrahi işlemidir. Modern tekniklerle doğal ve estetik sonuçlar elde edilir.',
      belirtiler: [
        'Burun şekli bozukluğu',
        'Nefes alma güçlüğü',
        'Burun kemik eğriliği',
        'Burun ucunda problemler'
      ],
      takipEdilenHastaliklar: [
        'Burun kemik eğriliği',
        'Burun ucunda problemler',
        'Burun deliklerinde darlık',
        'Burun sırtında çöküklük'
      ]
    }
  },
  'liposuction': {
    image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/alnskllndrme.webp`,
    content: {
      nedir: 'Liposuction, vücuttaki fazla yağ dokusunun cerrahi yöntemlerle alınması işlemidir. Modern teknoloji ve uzman cerrahi tekniklerle güvenli bir şekilde uygulanır.',
      belirtiler: [
        'Ağrı ve hareket kısıtlılığı',
        'Uyuşma, karıncalanma, güçsüzlük',
        'Duruş bozukluğu ve dengesizlik'
      ],
      takipEdilenHastaliklar: [
        'Karın yağları',
        'Kalça yağları',
        'Kol yağları'
      ]
    }
  },
  'meme-buyutme': {
    image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/cltbkm.webp`,
    content: {
      nedir: 'Meme büyütme operasyonu, meme boyutunu artırmak için silikon implantların kullanıldığı estetik cerrahi işlemidir.',
      belirtiler: [
        'Meme boyutu yetersizliği',
        'Asimetrik meme yapısı',
        'Meme şekli bozukluğu',
        'Özgüven eksikliği'
      ],
      takipEdilenHastaliklar: [
        'Meme hipoplazisi',
        'Meme asimetrisi',
        'Meme şekil bozukluğu',
        'Doğumsal meme anomalileri'
      ]
    }
  },
  'meme-kucultme': {
    image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/cltbkm.webp`,
    content: {
      nedir: 'Meme küçültme operasyonu, memelerin boyutunu azaltmak ve şeklini düzeltmek için yapılan estetik cerrahi işlemidir.',
      belirtiler: [
        'Sırt ve boyun ağrıları',
        'Omuz çukurları',
        'Nefes alma güçlüğü',
        'Fiziksel aktivite kısıtlılığı'
      ],
      takipEdilenHastaliklar: [
        'Meme hipertrofisi',
        'Meme makromastisi',
        'Meme asimetrisi',
        'Meme şekil bozukluğu'
      ]
    }
  },
  'karin-germe': {
    image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/alnskllndrme.webp`,
    content: {
      nedir: 'Abdominoplasti, karın bölgesindeki fazla deri ve yağ dokusunun alınması ve karın kaslarının sıkılaştırılması işlemidir.',
      belirtiler: [
        'Karın derisi sarkması',
        'Karın kasları zayıflığı',
        'Göbek fıtığı',
        'Karın çizgisi bozukluğu'
      ],
      takipEdilenHastaliklar: [
        'Karın derisi sarkması',
        'Karın kasları ayrılması',
        'Göbek fıtığı',
        'Karın çizgisi bozukluğu'
      ]
    }
  },
  'yuz-germe': {
    image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/frksynellazer.webp`,
    content: {
      nedir: 'Yüz germe operasyonu, yüzdeki sarkma ve kırışıklıkları gidermek için yapılan estetik cerrahi işlemidir.',
      belirtiler: [
        'Yüz derisi sarkması',
        'Boyun sarkması',
        'Çene hattı kaybı',
        'Yanak sarkması'
      ],
      takipEdilenHastaliklar: [
        'Yüz derisi sarkması',
        'Boyun sarkması',
        'Çene hattı kaybı',
        'Yanak sarkması'
      ]
    }
  },
  'goz-kapagi-estetigi': {
    image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/frksynellazer.webp`,
    content: {
      nedir: 'Göz kapağı estetiği, üst ve alt göz kapaklarındaki fazla deri ve yağ dokusunun alınması işlemidir.',
      belirtiler: [
        'Göz kapağı sarkması',
        'Göz çevresi torbaları',
        'Göz kapağı derisi fazlalığı',
        'Görme alanı kısıtlılığı'
      ],
      takipEdilenHastaliklar: [
        'Göz kapağı sarkması',
        'Göz çevresi torbaları',
        'Göz kapağı derisi fazlalığı',
        'Göz kapağı yağ dokusu fazlalığı'
      ]
    }
  },
  'botoks': {
    image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/frksynellazer.webp`,
    content: {
      nedir: 'Botoks, kas aktivitesini geçici olarak azaltarak kırışıklıkları önleyen ve mevcut kırışıklıkları azaltan bir uygulamadır.',
      belirtiler: [
        'Alın kırışıklıkları',
        'Göz çevresi kırışıklıkları',
        'Kaş arası çizgiler',
        'Gülme çizgileri'
      ],
      takipEdilenHastaliklar: [
        'Alın kırışıklıkları',
        'Göz çevresi kırışıklıkları',
        'Kaş arası çizgiler',
        'Gülme çizgileri'
      ]
    }
  },
  'dolgu': {
    image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/frksynellazer.webp`,
    content: {
      nedir: 'Dolgu uygulaması, hyaluronik asit içeren maddelerle yüz hatlarını belirginleştiren ve kırışıklıkları dolduran işlemdir.',
      belirtiler: [
        'Dudak inceliği',
        'Yanak çöküklüğü',
        'Çene hattı kaybı',
        'Göz çevresi çöküklüğü'
      ],
      takipEdilenHastaliklar: [
        'Dudak inceliği',
        'Yanak çöküklüğü',
        'Çene hattı kaybı',
        'Göz çevresi çöküklüğü'
      ]
    }
  },
  'sac-ekimi': {
    image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/alnskllndrme.webp`,
    content: {
      nedir: 'Saç ekimi, saç dökülmesi olan bölgelere sağlıklı saç köklerinin nakledilmesi işlemidir.',
      belirtiler: [
        'Saç dökülmesi',
        'Saç çizgisi gerilemesi',
        'Tepe bölgesi açılması',
        'Saç yoğunluğu azalması'
      ],
      takipEdilenHastaliklar: [
        'Androgenetik alopesi',
        'Saç çizgisi gerilemesi',
        'Tepe bölgesi açılması',
        'Saç yoğunluğu azalması'
      ]
    }
  },
  'meme-diklestirme': {
    image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/cltbkm.webp`,
    content: {
      nedir: 'Meme dikleştirme operasyonu, sarkmış memeleri yukarı kaldırarak daha genç ve dik görünüm sağlayan işlemdir.',
      belirtiler: [
        'Meme sarkması',
        'Meme şekli bozukluğu',
        'Meme ucunda aşağı bakma',
        'Meme hacmi kaybı'
      ],
      takipEdilenHastaliklar: [
        'Meme sarkması',
        'Meme şekli bozukluğu',
        'Meme ucunda aşağı bakma',
        'Meme hacmi kaybı'
      ]
    }
  },
  'vucut-konturu': {
    image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/alnskllndrme.webp`,
    content: {
      nedir: 'Vücut kontürü operasyonu, vücudun çeşitli bölgelerindeki fazla yağ ve deriyi alarak daha estetik bir görünüm sağlayan işlemdir.',
      belirtiler: [
        'Vücut şekli bozukluğu',
        'Fazla yağ birikimi',
        'Deri sarkması',
        'Vücut oranları bozukluğu'
      ],
      takipEdilenHastaliklar: [
        'Vücut şekli bozukluğu',
        'Fazla yağ birikimi',
        'Deri sarkması',
        'Vücut oranları bozukluğu'
      ]
    }
  }
};

export default function SpecializationPage() {
  const { specialization } = useParams<{ specialization: string }>();
  const { t } = useTranslation();
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  
  // Get data with translated titles and descriptions
  const getTranslatedData = () => ({
    'rinoplasti': {
      title: t('specialization.rhinoplasty.title'),
      description: t('specialization.rhinoplasty.description'),
      image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/bntdvsi.webp`,
      content: specializationsStaticData['rinoplasti'].content
    },
    'liposuction': {
      title: t('specialization.liposuction.title'),
      description: t('specialization.liposuction.description'),
      image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/alnskllndrme.webp`,
      content: specializationsStaticData['liposuction'].content
    },
    'meme-buyutme': {
      title: t('specialization.breastAugmentation.title'),
      description: t('specialization.breastAugmentation.description'),
      image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/cltbkm.webp`,
      content: specializationsStaticData['meme-buyutme'].content
    },
    'meme-kucultme': {
      title: t('specialization.breastReduction.title'),
      description: t('specialization.breastReduction.description'),
      image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/cltbkm.webp`,
      content: specializationsStaticData['meme-kucultme'].content
    },
    'karin-germe': {
      title: t('specialization.abdominoplasty.title'),
      description: t('specialization.abdominoplasty.description'),
      image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/alnskllndrme.webp`,
      content: specializationsStaticData['karin-germe'].content
    },
    'yuz-germe': {
      title: t('specialization.facelift.title'),
      description: t('specialization.facelift.description'),
      image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/frksynellazer.webp`,
      content: specializationsStaticData['yuz-germe'].content
    },
    'goz-kapagi-estetigi': {
      title: t('specialization.blepharoplasty.title'),
      description: t('specialization.blepharoplasty.description'),
      image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/frksynellazer.webp`,
      content: specializationsStaticData['goz-kapagi-estetigi'].content
    },
    'botoks': {
      title: t('specialization.botox.title'),
      description: t('specialization.botox.description'),
      image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/frksynellazer.webp`,
      content: specializationsStaticData['botoks'].content
    },
    'dolgu': {
      title: t('specialization.filler.title'),
      description: t('specialization.filler.description'),
      image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/frksynellazer.webp`,
      content: specializationsStaticData['dolgu'].content
    },
    'sac-ekimi': {
      title: t('specialization.hairTransplant.title'),
      description: t('specialization.hairTransplant.description'),
      image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/alnskllndrme.webp`,
      content: specializationsStaticData['sac-ekimi'].content
    },
    'meme-diklestirme': {
      title: t('specialization.breastLift.title'),
      description: t('specialization.breastLift.description'),
      image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/cltbkm.webp`,
      content: specializationsStaticData['meme-diklestirme'].content
    },
    'vucut-konturu': {
      title: t('specialization.bodyContour.title'),
      description: t('specialization.bodyContour.description'),
      image: `${import.meta.env.BASE_URL}images/hizmetlerimiz_image/alnskllndrme.webp`,
      content: specializationsStaticData['vucut-konturu'].content
    }
  });
  
  const translatedData = getTranslatedData() as Record<string, any>;
  
  if (!specialization || !translatedData[specialization]) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('specialization.pageNotFound')}</h1>
          <p className="text-lg text-gray-600">{t('specialization.pageNotFoundDesc')}</p>
        </div>
      </div>
    );
  }

  const data = translatedData[specialization];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Specialization Navigation */}
          <motion.div 
            className="lg:w-80 flex-shrink-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">{t('specialization.sidebarTitle')}</h3>
              <div className="space-y-2">
                {Object.entries(translatedData).map(([key, data], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                  >
                    <Link
                      to={`/uzmanlik/${key}`}
                      className={`block p-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                        specialization === key
                          ? 'bg-[#2E8B57] text-white shadow-md'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-[#2E8B57]'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                          specialization === key ? 'bg-white' : 'bg-[#2E8B57]'
                        }`}></div>
                        <span className="leading-tight">{data.title}</span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="flex-1">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {data.title}
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {data.description}
          </motion.p>
        </motion.div>

        {/* Hero Image Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
            {/* Loading State */}
            {imageLoading && (
              <div className="w-full h-96 sm:h-[500px] bg-gray-200 flex items-center justify-center">
                <motion.div
                  className="w-16 h-16 border-4 border-[#2E8B57] border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              </div>
            )}
            
            {/* Main Image */}
            <motion.img 
              src={data.image} 
              alt={data.title}
              className={`w-full h-96 sm:h-[500px] object-cover object-center transition-all duration-700 group-hover:scale-105 ${
                imageLoading ? 'opacity-0 absolute' : 'opacity-100'
              }`}
              whileHover={{ scale: 1.05 }}
              onLoad={() => setImageLoading(false)}
              onError={(e) => {
                setImageError(true);
                setImageLoading(false);
                e.currentTarget.src = 'https://via.placeholder.com/1200x600/2E8B57/FFFFFF?text=' + encodeURIComponent(data.title);
              }}
            />
            
            {/* Error State */}
            {imageError && (
              <div className="w-full h-96 sm:h-[500px] bg-gradient-to-br from-[#2E8B57] to-[#228B22] flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-lg font-semibold">{data.title}</p>
                </div>
              </div>
            )}
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            <motion.div 
              className="absolute bottom-6 left-6 right-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{data.title}</h2>
              <p className="text-gray-200 text-lg">{data.description}</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Information Cards */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
            whileHover={{ scale: 1.02, y: -5 }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[#2E8B57] rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{t('specialization.whatIs')}</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              {data.content.nedir}
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
            whileHover={{ scale: 1.02, y: -5 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[#2E8B57] rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{t('specialization.symptoms')}</h2>
            </div>
            <ul className="text-gray-700 space-y-3">
              {data.content.belirtiler.map((item: string, index: number) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-[#2E8B57] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-lg">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
            whileHover={{ scale: 1.02, y: -5 }}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[#2E8B57] rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{t('specialization.trackedDiseases')}</h2>
            </div>
            <ul className="text-gray-700 space-y-3">
              {data.content.takipEdilenHastaliklar.map((item: string, index: number) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-[#2E8B57] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-lg">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="bg-gradient-to-r from-[#2E8B57] to-[#228B22] text-white rounded-3xl p-8 sm:p-12 text-center shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            {t('specialization.appointmentCTA')}
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            {t('specialization.appointmentCTADesc')}
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            <Link
              to="/iletisim"
              className="inline-block bg-white text-[#2E8B57] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
{t('common.appointment')}
            </Link>
          </motion.div>
        </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
