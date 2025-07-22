import React from 'react';

interface Star {
  name: string;
  type: 'main' | 'secondary' | 'lucky' | 'unlucky';
  brightness?: string;
}

interface PalaceProps {
  name: string;
  earthlyBranch: string;
  mainStars: Star[];
  secondaryStars: Star[];
  trangSinh?: string;
  daiHan?: string;
  isBodyPalace?: boolean;
}

const Palace: React.FC<PalaceProps> = ({ name, earthlyBranch, mainStars, secondaryStars, trangSinh, daiHan, isBodyPalace }) => {
  const getStarColor = (type: Star['type']) => {
    switch (type) {
      case 'main': return 'text-yellow-400';
      case 'lucky': return 'text-green-400';
      case 'unlucky': return 'text-red-400';
      default: return 'text-white';
    }
  };

  return (
    <div className={`relative flex flex-col justify-between p-2 border border-purple-400/50 bg-gray-800/20 text-white text-sm h-full`}>
      <div className="flex justify-between items-start">
        <span className={`font-bold ${name === 'Mệnh' || name === 'Thân' ? 'text-yellow-300' : ''}`}>
          {name} {isBodyPalace ? '(Thân)' : ''}
        </span>
        <span className="text-gray-400">{earthlyBranch}</span>
      </div>
      
      <div className="flex-grow my-2 text-center">
        <div className="font-bold">
          {mainStars.map(star => (
            <span key={star.name} className={`${getStarColor(star.type)} mr-2`}>
              {star.name} {star.brightness && `(${star.brightness})`}
            </span>
          ))}
        </div>
        <div className="text-xs mt-1">
          {secondaryStars.map(star => (
            <span key={star.name} className={`${getStarColor(star.type)} mr-2`}>
              {star.name} {star.brightness && `(${star.brightness})`}
            </span>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-end text-xs text-gray-400">
        <span>{trangSinh}</span>
        <span>{daiHan}</span>
      </div>
    </div>
  );
};

export default Palace;
