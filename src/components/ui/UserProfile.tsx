'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from 'framer-motion';

interface UserProfileProps {
  id: number;
  name: string;
  designation: string;
  image: string;
}

const UserProfile: React.FC<UserProfileProps> = ({
  name,
  designation,
  image,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (event: React.MouseEvent<HTMLImageElement>) => {
    const halfWidth = event.currentTarget.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-500">
        <Image
          src={image}
          alt={name}
          width={128} // Increased resolution
          height={128} // Increased resolution
          quality={100} // High quality
          className="object-cover w-full h-full"
          onMouseMove={handleMouseMove}
        />
      </div>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.6 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.6 }}
            style={{ translateX: translateX, rotate: rotate }}
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-36 bg-neutral-950 text-white p-2 rounded-lg border-b-2 border-purple-500 shadow-lg z-50"
          >
            <p className="text-sm font-bold">{name}</p>
            <p className="text-xs">{designation}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserProfile;
