import React from 'react';
import { useNavigate } from 'react-router-dom';
import TopBanner from '../components/TopBanner';
import AudioPlayer from '../components/AudioPlayer';
import { motion } from 'framer-motion';

const FirstPage = () => {
  const navigate = useNavigate();
  const images = [
    'https://tirumalatirupatiyatra.in/wp-content/uploads/2024/07/Malayappa-Swamy-Saalakatla-Brahmotsavams-and-Navaratri-Brahmotsavams.jpg',
    'https://i.pinimg.com/736x/7a/33/f3/7a33f36196448a5d160327689537e6b8.jpg',
    'https://icctmemphis.org/wp-content/uploads/2024/10/Sesha_Vahanam.jpg',
    'https://templesofsouthindia.wordpress.com/wp-content/uploads/2013/06/kalpavriksha-vahanam-2012.jpg?w=584',
    'https://icctmemphis.org/wp-content/uploads/2024/10/Hanumath_Vahanam.jpg',
    'https://icctmemphis.org/wp-content/uploads/2024/10/Hamsa_Vahanam.jpg',
    'https://tirumalatirupatiyatra.in/wp-content/uploads/2017/09/Gaja-Vahanam.jpg',
  ];

  return (
    <div>
      <TopBanner />
      <AudioPlayer />
      <div className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url(https://education.sakshi.com/sites/default/files/2022-05/ttd.jpg)' }}>
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
