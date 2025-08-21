import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  language?: string;
}

const FAQ = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const faqData: FAQItem[] = [
    {
      id: "1",
      question: "What are your services like?",
      answer: "Our services usually run about 2 hours long consisting of worship, a powerful message from the Word of God, and fellowship. We will make sure to honor your time!"
    },
    {
      id: "2",
      question: "What should I wear?",
      answer: "There is no dress code, but we encourage you to dress modest yet comfortable!"
    },
    {
      id: "3",
      question: "Do you have anything for children and/or students?",
      answer: "We do! We have a Young Adult Ministry that holds Bible Study at 9pm every Monday via Zoom! We also have Sunday School for kids preschool-6th grade."
    },
    {
      id: "4",
      question: "What denomination is Living Hope for Generations Church?",
      answer: "Living Hope is associated with the Lutheran Church, but we welcome all regardless of denomination or background!"
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
                <span className={`font-medium ${item.language === 'Amharic' ? 'text-lg' : 'text-base'}`}>
                  {item.question}
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
                      <p className={`text-gray-700 leading-relaxed ${item.language === 'Amharic' ? 'text-lg' : 'text-base'}`}>
                        {item.answer}
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