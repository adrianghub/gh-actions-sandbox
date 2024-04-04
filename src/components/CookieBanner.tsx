import { useState } from 'react';

interface CookieBannerProps {
  onAccept: () => void;
}

export const CookieBanner = ({ onAccept }: CookieBannerProps) => {
  const [showBanner, setShowBanner] = useState(true);

  const handleAccept = () => {
    setShowBanner(false);
    onAccept();
  };

  return (
    <>
      {showBanner && (
        <div className="cookie-card">
          <p>This website uses cookies to improve your experience.</p>
          <button onClick={handleAccept}>Accept</button>
        </div>
      )}
    </>
  );
};
