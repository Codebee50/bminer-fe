"use client";

import SectionWrapper from "@/components/SectionWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection({ faqs = [], doubleCols = true }) {
  return (
    <SectionWrapper pad={false}>
      <section className="py-16 px-4 mx-auto">
        <h2 className="text-[40px] font-medium text-darkmuted mb-12">
          Frequently Asked Questions
        </h2>

        <div className={`grid ${doubleCols && "md:grid-cols-2"} gap-6`}>
          {faqs.map((faq, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem
                value="item-1"
                className="border-b border-gray-200 cursor-pointer"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-gray-800 hover:no-underline cursor-pointer">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
}
