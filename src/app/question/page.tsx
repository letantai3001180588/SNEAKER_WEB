"use client"
import Breadcrumb from "@/components/Common/Breadcrumb";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const ContactPage = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqData = [
    {
      id:1,
      question: "How secure is my insurance information?",
      answer: "We prioritize the security of your insurance information. We use advanced encryption and strict data protection measures to ensure your data is safe and confidential."
    },
    {
      id:2,
      question: "How do I update my personal information?",
      answer: "You can update your personal information by logging into your account and navigating to the settings page. From there, you can edit your profile information as needed."
    },
    {
      id:3,
      question: "How do I update my personal information?",
      answer: "You can update your personal information by logging into your account and navigating to the settings page. From there, you can edit your profile information as needed."
    },
    {
      id:4,
      question: "How do I update my personal information?",
      answer: "You can update your personal information by logging into your account and navigating to the settings page. From there, you can edit your profile information as needed."
    },
    {
      id:5,
      question: "How do I update my personal information?",
      answer: "You can update your personal information by logging into your account and navigating to the settings page. From there, you can edit your profile information as needed."
    },
  ];

  function toggleFAQ(index: any) {
    setExpandedIndex(index === expandedIndex ? null : index);
  }
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Breadcrumb
        pageName="Question Page"
      />
      <div className="py-24 px-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="basis-1/3">
          <img src={"https://img.freepik.com/premium-photo/sneaker-that-is-being-worn-by-planet_579873-1161.jpg?w=1060"} alt="" />
        </div>
        <ul className="basis-2/3"  data-aos="zoom-in-up">
          {faqData.map((faq, index) => (
            <li key={faq.id}>
              <button className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10" aria-expanded={index === expandedIndex} onClick={() => toggleFAQ(index)}>
                <span className="flex-1 text-base-content">{faq.question}</span>
                <svg className={`flex-shrink-0 w-4 h-4 ml-auto fill-current ${index === expandedIndex ? 'rotate-90' : ''}`} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${index === expandedIndex ? 'rotate-90' : ''}`}></rect>
                  <rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${index === expandedIndex ? '' : 'rotate-90'}`}></rect>
                </svg>
              </button>
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${index === expandedIndex ? 'max-h-full' : 'max-h-0'}`}>
                <div className="pb-5 leading-relaxed">
                  <div className="space-y-2 leading-relaxed">{faq.answer}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ContactPage;
