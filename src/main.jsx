import { useState, useEffect } from 'react';
import { useTheme } from '../themeconfig';
import SocialButtons from './SocialButtons';

function Hero() {
  const { isDarkMode } = useTheme();
  const [textIndex, setTextIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  
  const codingTexts = [
    "Code with Anime Style",
    "Build Amazing Websites",
    "Create Beautiful UIs",
    "Master React & Javascript"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Text animation
    const textInterval = setInterval(() => {
      setTex