import { useState } from "react";
import Heading from "./Heading";
import Section from "./Section";

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);

  const faqItems = [
    {
      id: "0",
      question: "Can I comment on any website?",
      answer:
        "Yes, Grapevine works on almost all websites. Some sites with strict security policies may have limitations, but we're constantly improving compatibility.",
    },
    {
      id: "1",
      question: "Are my comments visible to everyone?",
      answer:
        "Comments are visible to other Grapevine users on the same page. Your personal data remains private and is never sold or shared.",
    },
    {
      id: "2",
      question: "Can I edit or delete my comments?",
      answer:
        "Absolutely! You can edit or delete your comments anytime from your account.",
    },
    {
      id: "3",
      question: "Is this extension free?",
      answer: "Yes, Grapevine is completely free to download and use.",
    },
    {
      id: "4",
      question: "How do I report inappropriate comments?",
      answer:
        "Use the flag button on any comment to report abuse. Our moderation team reviews all reports promptly.",
    },
    {
      id: "5",
      question: "Does Grapevine track my data?",
      answer:
        "No. Your privacy is our priority. We don't track your browsing habits or sell your data to third parties.",
    },
  ];

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <Section id="faq">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Frequently Asked Questions"
        />

        <div className="max-w-2xl mx-auto">
          {faqItems.map((item) => (
            <div key={item.id} className="mb-4 border-b border-n-6 pb-4">
              <button
                onClick={() => toggleFAQ(item.id)}
                className="w-full flex justify-between items-center text-left py-4 hover:opacity-80 transition-opacity"
              >
                <h5 className="h5">{item.question}</h5>
                <span className="text-2xl text-color-1">
                  {activeId === item.id ? "−" : "+"}
                </span>
              </button>
              {activeId === item.id && (
                <p className="body-2 text-n-3 pb-4">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FAQ;
