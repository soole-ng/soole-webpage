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

        <div className='border-[#F5F5F5] border-t-[2.5px]'>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer || "Information not available at this time."}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
    </section>
  )
}

export default FaqSection
              {
                "question": "What is Soole and how does it work?",
                "answer": "Soole is a peer-to-peer intercity ride-sharing platform that connects everyday travelers with verified drivers heading in the same direction. Users can book seats, share rides, and travel safely across Nigeria."
              },
              {
                "question": "Who can become a Soole driver?",
                "answer": "Anyone traveling between cities in Nigeria can offer seats on Soole. You don’t need to be a Commercial driver, just verified, responsible, and heading out of town."
              },
              {
                "question": "Is my personal data safe with Soole?",
                "answer": "Yes. We use encryption, secure storage, and strict access controls to protect your data. We do not sell your information and only share it with trusted partners or authorities when required."
              },
              {
                "question": "What kind of data does Soole collect?",
                "answer": "We collect account details, trip history, location data, payment information, and verification documents to ensure safety, improve service, and comply with regulations."
              },
              {
                "question": "Is Soole a bus service or a taxi app?",
                "answer": "No, Soole is neither a bus service nor a taxi app. We’re a smarter way to travel a platform that connects people going the same way. By sharing rides with everyday drivers already on the move, you can save time, reduce costs, and avoid the stress of terminals or long waits."
              },
              {
                "question": "Can I use Soole without internet access?",
                "answer": ""
              },
              {
                "question": "How does the SOS feature work?",
                "answer": ""
              },
              {
                "question": "How are fares determined?",
                "answer": ""
              },
              {
                "question": "What happens if I want to delete my account?",
                "answer": ""
              },
              {
                "question": "Does Soole work with transport unions?",
                "answer": ""
              },
              {
                "question": "How do I contact Soole support?",
                "answer": ""
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer || "Information not available at this time."}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
    </section>
  )
}

export default FaqSection