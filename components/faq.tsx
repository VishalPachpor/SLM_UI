"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { HelpCircle, Plus } from "lucide-react";

const faqs = [
  {
    question: "What is SLM Smart Liquidity Commander?",
    answer:
      "SLM is a non-custodial yield optimization platform on StarkNet that automatically manages your stablecoin deposits to generate the best possible returns across multiple money markets.",
  },
  {
    question: "How does the yield optimization work?",
    answer:
      "Our smart vaults continuously monitor and analyze various money markets to identify the highest yielding opportunities. The system automatically rebalances funds to maximize returns while maintaining strict security parameters.",
  },
  {
    question: "Is there a lock-up period?",
    answer:
      "No, there are no lock-up periods. You can withdraw your funds at any time without penalties or waiting periods.",
  },
  {
    question: "What are the risks involved?",
    answer:
      "SLM exclusively uses lending strategies, eliminating borrowing exposure and liquidation risks. All smart contracts are thoroughly audited, and the platform operates non-custodially, meaning you always maintain control of your assets.",
  },
  {
    question: "What are the fees?",
    answer:
      "The platform charges a small performance fee on the yields generated. There are no deposit or withdrawal fees. Detailed fee structures are transparently displayed in the app dashboard.",
  },
  {
    question: "How secure are my assets?",
    answer:
      "Your assets are secured through multiple layers of protection including audited smart contracts, multi-sig controls, and non-custodial architecture. We prioritize security above all else.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function FAQ() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0a1229]">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#ed796b]/5" />
        <div className="absolute h-[1000px] w-[1000px] -bottom-[500px] -right-[500px] bg-[#BB86FC]/10 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-2 rounded-full bg-[#ed796b]/10 mb-4"
          >
            <HelpCircle className="w-6 h-6 text-[#ed796b]" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#E6EDF3]">
            Frequently Asked Questions
          </h2>
          <p className="text-[#A8B2D1] text-lg max-w-2xl mx-auto">
            Everything you need to know about SLM Smart Liquidity Commander
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-4"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={item}>
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-[#ed796b]/20 rounded-lg mb-4 last:mb-0 data-[state=open]:bg-[#0a1229]/50 overflow-hidden backdrop-blur-sm group"
                >
                  <AccordionTrigger className="hover:no-underline px-6 py-4 text-left [&[data-state=open]>div>.icon]:rotate-45 [&[data-state=open]]:text-[#ed796b]">
                    <div className="flex items-center gap-4">
                      <Plus className="icon w-5 h-5 text-[#ed796b] transition-transform duration-200" />
                      <span className="text-[#E6EDF3] group-hover:text-[#ed796b] transition-colors">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0 text-[#A8B2D1]">
                    <div className="pl-9">{faq.answer}</div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
