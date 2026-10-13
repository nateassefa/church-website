import React, { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactInfo from '@/components/ContactInfo';
import FloatingContactButton from '@/components/FloatingContactButton';
import { preloadAllPageImages, preloadPageImages } from '@/lib/preloadImages';

type PageLayoutProps = {
  children: React.ReactNode;
  showContact?: boolean;
  footerTall?: boolean;
};

const PageLayout = ({ children, showContact = true, footerTall = false }: PageLayoutProps) => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    preloadPageImages(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    preloadAllPageImages();
  }, []);

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col">{children}</div>
      <Footer tall={footerTall} />
      {showContact && <FloatingContactButton />}
    </div>
  );
};

export default PageLayout;
