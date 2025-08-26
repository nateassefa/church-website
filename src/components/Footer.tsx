import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";

// Replace TikTokIcon with a more accurate TikTok logo (musical note shape)
const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" fill="none" width={22} height={22} {...props}>
    <path
      d="M22.5 2H18v16.563a3.063 3.063 0 1 1-3.063-3.062c.106 0 .21.01.313.023V12.5a7.5 7.5 0 1 0 7.5 7.5V10.5c1.13.84 2.522 1.34 4 1.34V7.5c-1.478 0-2.87-.5-4-1.34V2Z"
      fill="currentColor"
    />
  </svg>
);

const YouTubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={22} height={22} {...props}>
    <path d="M21.8 8.001a2.75 2.75 0 0 0-1.936-1.945C18.1 6 12 6 12 6s-6.1 0-7.864.056A2.75 2.75 0 0 0 2.2 8.001 28.6 28.6 0 0 0 2 12a28.6 28.6 0 0 0 .2 3.999 2.75 2.75 0 0 0 1.936 1.945C5.9 18 12 18 12 18s6.1 0 7.864-.056A2.75 2.75 0 0 0 21.8 15.999 28.6 28.6 0 0 0 22 12a28.6 28.6 0 0 0-.2-3.999zM10 15V9l6 3-6 3z" />
  </svg>
);

type FooterProps = { tall?: boolean };
const Footer = ({ tall = false }: FooterProps) => {
  return (
    <footer className={`bg-[#4c3219] text-white w-full ${tall ? 'pt-16 pb-8' : 'pt-16 pb-8'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <img
          src="/church_logo_white_text (1).png"
          alt="Living Hope for Generations Church Logo"
          className="absolute -left-[450px] top-1/2 -translate-y-1/2 h-[28rem] w-auto object-contain"
        />
        <div className="flex flex-col md:flex-row justify-between items-start md:items-stretch text-center md:text-left divide-y-0 md:divide-x md:divide-white/20 pl-0 md:pl-24">
          {/* Left: About */}
          <div className="flex-1 flex flex-col items-center md:items-start pb-10 md:pb-0 md:pr-10">
            <h3 className="text-base font-bold tracking-widest mb-4 text-white uppercase">About</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/statement-of-faith" className="hover:text-white transition-colors">Statement of Faith</Link></li>
              <li><Link to="/ministries" className="hover:text-white transition-colors">Ministries</Link></li>
              <li><Link to="/events" className="hover:text-white transition-colors">Events</Link></li>
            </ul>
          </div>
          {/* Center: Church Info */}
          <div className="flex-1 flex flex-col items-center justify-center px-0 md:px-10 border-white/20 md:border-x">
            <h2 className="text-2xl font-extrabold mb-2 tracking-wide">LIVING HOPE FOR GENERATIONS CHURCH</h2>
            <p className="font-semibold text-white mb-4">A spiritual home for families along the 95-Highway Corridor.</p>
            <div className="flex items-center justify-center space-x-4 mb-4">
              <a href="https://www.instagram.com/livinghopegenchurch?igsh=MWs4dXdnZ28xOHBidw==" target="_blank" rel="noopener noreferrer" className="hover:text-[#d9b062] transition-colors"><Instagram size={22} /></a>
              <a href="https://www.facebook.com/61574837435090/about/?_rdr" target="_blank" rel="noopener noreferrer" className="hover:text-[#d9b062] transition-colors"><Facebook size={22} /></a>
              <a href="https://www.tiktok.com/@livinghopegenchurch" target="_blank" rel="noopener noreferrer" className="hover:text-[#d9b062] transition-colors"><TikTokIcon /></a>
              <a href="https://www.youtube.com/@Livinghopegenchurch" target="_blank" rel="noopener noreferrer" className="hover:text-[#d9b062] transition-colors"><YouTubeIcon /></a>
            </div>
            <address className="not-italic text-gray-300 mb-1 leading-relaxed">
              3637 Graham Park Rd, Triangle, VA 22172
            </address>
            <a href="mailto:info@livinghopegenchurch.org" className="text-gray-300 hover:text-white transition-colors block mb-1">info@livinghopegenchurch.org</a>
            <a href="tel:+15408739903" className="text-gray-300 hover:text-white transition-colors block">+1 540-873-9903</a>
          </div>
          {/* Right: Get Connected */}
          <div className="flex-1 flex flex-col items-center md:items-end pt-10 md:pt-0 md:pl-10">
            <h3 className="text-base font-bold tracking-widest mb-4 text-white uppercase">Get Connected</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/ministries" className="hover:text-white transition-colors">Small Groups</Link></li>
              <li><Link to="/plan-visit" className="hover:text-white transition-colors">Plan Your Visit</Link></li>
              <li><a href="https://give.tithe.ly/?formId=b6bf17e5-ad05-4f8f-bb12-55d1da8b3ce3&context=modal" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Give</a></li>
              <li><Link to="/plan-visit#faq" className="hover:text-white transition-colors">FAQs</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-white/10 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Living Hope for Generations Church. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
