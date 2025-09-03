import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from "reactstrap";
import { Plus, Minus, MinusCircle, PlusCircle } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Faq.css";

const FAQ = () => {
 const [open, setOpen] = useState([]);

  const toggle = (id) => {
    if (open.includes(id)) {
      // remove if already open
      setOpen(open.filter((item) => item !== id));
    } else {
      // add new open id
      setOpen([...open, id]);
    }
  };

  const faqData = [
    {
      id: "1",
      question: "What is IntelliContract?",
      answer:
        "IntelliContract is a Generative AI-powered platform that extracts and analyzes unstructured contract data, starting with pharmaceutical contracts and expanding across industries.",
    },
    {
      id: "2",
      question: "How does IntelliContract integrate with Model N?",
      answer:
        "It generates Model N–compatible XML outputs, making contract onboarding seamless and error-free.",
    },
    {
      id: "3",
      question: "Can IntelliContract handle data formats other than PDF?",
      answer: "Yes. While optimized for PDF contracts today, IntelliContract is modular and can supports other formats like Word, JSON, and more.",
    },
    {
      id: "4",
      question: "Is my data secure?",
      answer: "Absolutely. IntelliContract uses role-based access, Single Sign-On (SSO), and enterprise-grade security protocols to keep your data safe.",
    },
    {
      id: "5",
      question: "Do I need technical expertise to use IntelliContract?",
      answer: "No. The interface is user-friendly with dashboards, comparison tools, and a natural language chat for easy interaction.",
    },
    {
      id: "6",
      question: "What industries can use IntelliContract?",
      answer: "Currently tailored for pharma, it’s designed to expand to finance, legal, manufacturing, government, and healthcare.",
    },
  ];

  return (
    <div className="container-FAQ">
      <div className="header">
        <p>Frequently Asked Questions</p>
      </div>

      <Accordion open={open} toggle={toggle}>
        {faqData.map((faq) => (
          <AccordionItem key={faq.id}>
            <AccordionHeader targetId={faq.id} className="custom-accordion-header">
              <div className="accordion-header-content">
                <p className="What-qn">{faq.question}</p>
                {open.includes(faq.id) ? (
                  <MinusCircle size={20} color="#F5F5F6" />
                ) : (
                  <PlusCircle size={20} color="#F5F5F6" />
                )}
              </div>
            </AccordionHeader>
            <AccordionBody accordionId={faq.id}>
              <div className="ans-for-qn">{faq.answer}</div>
            </AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
