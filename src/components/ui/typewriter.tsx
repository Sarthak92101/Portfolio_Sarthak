import { useState, useEffect } from 'react';

interface TypewriterProps {
  texts: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetweenTexts?: number;
  className?: string;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  texts,
  typeSpeed = 100,
  deleteSpeed = 50,
  delayBetweenTexts = 2000,
  className = '',
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];

    if (isWaiting) {
      const timeout = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, delayBetweenTexts);
      return () => clearTimeout(timeout);
    }

    if (isDeleting) {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, deleteSpeed);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        return;
      }
    }

    if (currentText.length < currentFullText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(currentFullText.slice(0, currentText.length + 1));
      }, typeSpeed);
      return () => clearTimeout(timeout);
    } else {
      setIsWaiting(true);
    }
  }, [currentText, currentTextIndex, isDeleting, isWaiting, texts, typeSpeed, deleteSpeed, delayBetweenTexts]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};