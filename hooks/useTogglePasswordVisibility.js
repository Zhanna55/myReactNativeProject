import { useState } from 'react';

export const useTogglePasswordVisibility = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightText, setRightText] = useState('Show');

  const handlePasswordVisibility = () => {
    if (rightText === 'Show') {
      setRightText('Close');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightText === 'Close') {
      setRightText('Show');
      setPasswordVisibility(!passwordVisibility);
    }
  };

  return {
    passwordVisibility,
    rightText,
    handlePasswordVisibility,
  };
};
