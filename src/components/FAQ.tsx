import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  questionAmharic: string;
  answer: string;
  answerAmharic: string;
  language?: string;
}

const FAQ = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const faqData: FAQItem[] = [
    {
      id: "1",
      question: "What are your services like?",
      questionAmharic: "የአገልግሎት ግዜያችን ምን ይመስላል?",
      answer: "Our services usually run about 2 hours long consisting of worship, a powerful message from the Word of God, and fellowship. We will make sure to honor your time!",
      answerAmharic: "የአገልግሎት ግዜያችን ለሁለት ሰአት ያህል የሚቆይ ሲሆን በውስጡም የአምልኮ ግዜ የእግዚአብሄር ቃል በሙላት የሚሰበክበት ግዜና በጋራ ሻይ ቡና በማለት ህብረት የምናደርግበትን ግዜን ያካተተ ነው:: ሁሌም ሰአታችንን እንጠብቃለን!"
    },
    {
      id: "2",
      question: "What should I wear?",
      questionAmharic: "ምን ለብሼ መምጣት ይኖርብኛል?",
      answer: "There is no dress code, but we encourage you to dress modest yet comfortable!",
      answerAmharic: "የተለየ የአለባበስ ህግ( ኮድ) የለንም ነገር ግን ቀለል ብሎ ምቾት የሚሰጥዎትን እንዲለብሱ እናበረታታዎታለን::"
    },
    {
      id: "3",
      question: "Do you have anything for children and/or students?",
      questionAmharic: "ለልጆች ወይም ለተማሪዎች የሚሆን አገልግሎት አላችሁ?",
      answer: "We do! We have a Young Adult Ministry that holds Bible Study at 8pm every Tuesday via Zoom! We also have Sunday School for kids preschool-6th grade.",
      answerAmharic: "በርግጥም የልጆችና ወጣቶች አግልግሎት አለን፤ ዘወትር ማክሰኞ ምሽት 8:00 PM በዙም የሚካሄድ የወጣቶች የመፀሐፍ ቅዱስ ጥናት ግዜ አለን:: እንዲሁም ከጀማሪ እስከ ስድስተኛ ክፍል ላሉ ህፃናት የሰንበት ትምህርት በቤተክርስቲያናችን ይሰጣል።"
    },
    {
      id: "4",
      question: "What denomination is Living Hope for Generations Church?",
      questionAmharic: "ህያው ተስፋ ለትውልዶች ሁሉ ቤተክርስቲያን እምነቷ( አስተምሮዋ) ምንድ ነው?",
      answer: "Living Hope is associated with the Lutheran Church Missouri Synod, but we welcome all regardless of denomination or background!",
      answerAmharic: "ህያው ተስፋ ለትውልዶች ሁሉ ቤተክርስቲያን ከሉተራን ቤተክርስቲያን ሚዞሪ ሲኖድ ጋር የተያያዘች ናት:: ነገር ግን በራችን ከየትኛውም ቤተእምነት ለሚመጡ ሁሉ ክፍት ነው::"
    }
  ];

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-12">
          FAQs
        </h2>
        
        <div className="space-y-4">
          {faqData.map((item) => (
            <div key={item.id} className="border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors flex items-center justify-between"
              >
                <span className={`font-medium text-base`}>
                  {item.question} / {item.questionAmharic}
                </span>
                {openItems.includes(item.id) ? (
                  <ChevronUp className="h-5 w-5 text-gray-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-600" />
                )}
              </button>
              
              <AnimatePresence>
                {openItems.includes(item.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed text-base mb-3">
                        {item.answer}
                      </p>
                      <div className="border-t border-gray-300 my-3"></div>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {item.answerAmharic}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ; 