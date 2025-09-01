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
        "IntelliContract integrates seamlessly with Model N by providing structured insights and automating contract management workflows.",
    },
    {
      id: "3",
      question: "Can IntelliContract handle data formats other than PDF?",
      answer: "Yes, it supports multiple file formats including Word, Excel, and scanned images.",
    },
    {
      id: "4",
      question: "Is my data secure?",
      answer: "Absolutely. IntelliContract uses enterprise-grade encryption and follows strict compliance protocols.",
    },
    {
      id: "5",
      question: "Do I need technical expertise to use IntelliContract?",
      answer: "No, the platform is designed for business users with a simple and intuitive interface.",
    },
    {
      id: "6",
      question: "What industries can use IntelliContract?",
      answer: "Pharma, finance, healthcare, legal, manufacturing, and many more.",
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
