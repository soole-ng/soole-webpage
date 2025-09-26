import React from 'react'
import { faqs } from '@/utils/constants'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FaqSection = () => {
  return (
    <section className='brand-width'>
        <div className='flex flex-col mx-auto justify-center items-center max-w-[712px] text-center gap-4'>
            <h4 className='text-[24px] md:text-[52px] font-medium'>Frequently Asked <span className='text-[#3861BF]'>Questions</span></h4>
        </div>

        <div className='border-[#F5F5F5] mt-12 border-t-[2.5px]'>
          <Accordion type='multiple'  className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{index + 1}. {faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer || "Information not available at this time."}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
    </section>
  )
}

export default FaqSection