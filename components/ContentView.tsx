
import React, { useState, useEffect } from 'react';
import { Dossier } from '../types';

interface ContentViewProps {
  dossier: Dossier | null;
}

const useTypingEffect = (text: string, speed = 20) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        setDisplayText(''); 
        if (!text) return;
        
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < text.length) {
                setDisplayText(prevText => prevText + text.charAt(i));
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, speed);

        return () => clearInterval(typingInterval);
    }, [text, speed]);

    return displayText;
};

const ContentView: React.FC<ContentViewProps> = ({ dossier }) => {
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [allParagraphs, setAllParagraphs] = useState<string[]>([]);
  
  const displayedText = useTypingEffect(dossier?.content[currentParagraph] || '', 5);

  useEffect(() => {
    if (dossier) {
        setCurrentParagraph(0);
        setAllParagraphs([]);
    }
  }, [dossier]);

  useEffect(() => {
    if (dossier && displayedText === dossier.content[currentParagraph]) {
        setTimeout(() => {
            if (currentParagraph < dossier.content.length - 1) {
                setAllParagraphs(prev => [...prev, displayedText]);
                setCurrentParagraph(prev => prev + 1);
            }
        }, 300);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayedText, dossier, currentParagraph]);

  if (!dossier) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-xl animate-pulse">[ AWAITING INPUT... SELECT A DOSSIER FROM THE INDEX ]</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl mb-4 border-b border-green-500/50 pb-2">{dossier.title}</h2>
      <div className="text-lg leading-relaxed">
        {allParagraphs.map((p, index) => (
          <p key={index} className="mb-4">{p}</p>
        ))}
        <p className="mb-4">{displayedText}<span className="animate-pulse">_</span></p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {dossier.images.map((image, index) => (
          <div key={index} className="border border-green-500/50 p-1">
            <img 
              src={image} 
              alt={dossier.altText[index] || 'Declassified Image'} 
              className="w-full h-auto object-cover filter grayscale" 
            />
            <p className="text-sm text-center p-1 bg-black">{dossier.altText[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentView;
