import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default App;
