import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Yükleniyor...');

  const loadingSteps = [
    { text: 'Sistem başlatılıyor...', progress: 30 },
    { text: 'Veriler yükleniyor...', progress: 60 },
    { text: 'Hoş geldiniz!', progress: 100 }
  ];

  useEffect(() => {
    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < loadingSteps.length) {
        setLoadingText(loadingSteps[currentStep].text);
        setProgress(loadingSteps[currentStep].progress);
        currentStep++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 500);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-[#2E8B57] via-[#228B22] to-[#006400] flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        {/* Logo ve Başlık */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto mb-8 bg-white rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden">
            {/* Pulse Effect */}
            <motion.div
              className="absolute inset-0 bg-[#2E8B57]/20 rounded-full"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            {/* Real Logo */}
            <motion.img
              src="/doktor_web_2/images/doktor_logo.webp"
              alt="Dr. Elif Aydın Logo"
              className="w-24 h-24 object-contain relative z-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>
          
          <motion.h1
            className="text-5xl font-bold text-white mb-3 tracking-wide"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Dr. Elif Aydın
          </motion.h1>
          
          <motion.div
            className="w-24 h-1 bg-white mx-auto mb-4 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          />
          
          <motion.p
            className="text-2xl text-white/90 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Plastik ve Rekonstrüktif Cerrahi
          </motion.p>
          
          <motion.p
            className="text-lg text-white/80 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Uzman Doktor
          </motion.p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="w-96 mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="bg-white/20 rounded-full h-4 overflow-hidden shadow-inner">
            <motion.div
              className="h-full bg-gradient-to-r from-white to-white/90 rounded-full relative"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            >
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
          
          <motion.div
            className="text-white text-lg mt-4 font-medium"
            key={loadingText}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {loadingText}
          </motion.div>
          
          <motion.div
            className="text-white/70 text-sm mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {progress}% Tamamlandı
          </motion.div>
        </motion.div>

        {/* Doktor Teması İkonları */}
        <motion.div
          className="flex justify-center space-x-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {[
            { icon: "🏥", label: "Hastane", color: "text-blue-200" },
            { icon: "💉", label: "Tedavi", color: "text-red-200" },
            { icon: "✨", label: "Estetik", color: "text-yellow-200" },
            { icon: "❤️", label: "Sağlık", color: "text-pink-200" }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ scale: 0, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.05, duration: 0.3 }}
              whileHover={{ scale: 1.15, y: -5 }}
            >
              <motion.div
                className="text-4xl mb-2 group-hover:drop-shadow-lg"
                animate={{ 
                  y: [0, -3, 0]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  delay: index * 0.1,
                  ease: "easeInOut"
                }}
              >
                {item.icon}
              </motion.div>
              <div className={`text-white/90 text-sm font-medium ${item.color}`}>
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pulse Effect */}
        <motion.div
          className="absolute inset-0 bg-white/10 rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    </motion.div>
  );
}
