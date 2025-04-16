import React from 'react';
import { useNavigate } from 'react-router-dom';
import TopBanner from '../components/TopBanner';
import AudioPlayer from '../components/AudioPlayer';
import { motion } from 'framer-motion';

const FirstPage = () => {
  const navigate = useNavigate();
  const images = Array.from({ length: 7 }, (_, i) => `/sevakImages/sevak${i + 1}.jpg`);

  return (
    <div>
      <TopBanner />
      <AudioPlayer />
      <div className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/https://education.sakshi.com/sites/default/files/2022-05/ttd.jpg)' }}>
        <div className="flex justify-center items-center flex-wrap gap-4 p-4 animate-pulse">
          {images.map((img, idx) => (
            <motion.img
              key={idx}
              src={img}
              alt={`sevak-${idx}`}
              className="w-24 h-24 object-cover rounded-full"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
            />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg"
            onClick={() => navigate('/form')}
          >
            Add Sevak Details
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
