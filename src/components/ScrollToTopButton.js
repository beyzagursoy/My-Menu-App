import React from 'react';

function ScrollToTopButton() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button onClick={handleScrollToTop} className="scroll-to-top-button">
      <i className="fa fa-arrow-up"></i> Scroll to Top
    </button>
  );
}

export default ScrollToTopButton;

