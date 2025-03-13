import React from "react";
import FAQSection from "@/sections/FaqSection";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";

const page = () => {
  const faqList = [
    {
      question: "What is Bitcoin miner?",
      answer:
        "Bitcoin miner is a digital assets cloud mining service that offers an easy and safe way to purchase hashpower without having to deal with hardware and software setup. We provide hashrate services and a variety of mining-related solutions to small and large-scale customers.",
    },
    {
      question: "How does hashing plan work with Bitcoin miner?",
      answer:
        "It's very easy! As soon as you pass the KYC/AML procedure, you can pay for your contract, and it will be added to your profile, allowing you to start mining immediately. Depending on the blockchain algorithm you select, you can mine native digital assets. The rewards are processed every day, following 24 hours after the mining day is over.",
    },
    {
      question: "How can I contact you for more questions?",
      answer:
        "If you have any inquiries or need to ask additional questions, feel free to reach out to Bitcoin miner through various communication channels. Our physical address is Trading Way FZCO, located at DSO-FZCO-21102 in Dubai Silicon Oasis. You can contact us by sending an email to [email protected]. You can also visit the 'Contact Customer Service' section on our website to leave a message. We have a dedicated support team available to assist you promptly.",
    },
    {
      question: "Where is your hashing farm located?",
      answer:
        "For security reasons, we do not disclose the location of our farm.",
    },
    {
      question: "Which pools do we use for hashing service?",
      answer:
        "We use the best available pools for the mining process. Criteria used for pool selection include reliability, low fees, and rate of rejection.",
    },
    {
      question: "What is KYC/AML procedure?",
      answer:
        "To buy hashrate, you need to verify your account. To complete the verification, you will need government-issued documents, such as an ID, passport, or driver's license, as well as a photo of yourself. Verification of customers' identities is executed to prevent fraud and money laundering, as well as to comply with international laws. We do not store your personal data but cooperate with first-class service providers to ensure all information is kept confidential and stored safely.",
    },
    {
      question: "What is Cloud Mining?",
      answer:
        "Cloud mining is a way to mine cryptocurrencies like Bitcoin without having to buy or manage any of the hardware yourself. Instead of setting up expensive and complex mining equipment in your home or office, you rent or purchase a portion of mining power from a company that operates large data centers.",
    },
    {
      question: "Why is my mining output decreasing?",
      answer:
        "We do not control market evolution and cannot control mining rewards. Various factors may influence your rewards depending on the contract you have selected. A lower mining output may lead to decreased global interest in mining the coin of your contract, reducing mining difficulty and potentially increasing your outputs. Conversely, if difficulty rises, your output will decrease. Also, keep in mind that some of our products might have maintenance fees attached.",
    },
    {
      question: "Which algorithms are used for?",
      answer:
        "Most digital assets utilize different proof-of-work algorithms to secure their blockchains. For example, Bitcoin uses SHA256.",
    },
    {
      question: "How can I get started?",
      answer:
        "Once you choose which coin you want to mine, you can submit your order: complete the KYC/AML procedure, go to the 'BUY HASHPOWER' section in your Bitcoin miner account, select your hashrate, and proceed to payment. After payment, your order should show as approved in your  account. If this is not the case, please contact customer service through our web form or the 'Contact Customer Service' section of your account.",
    },
    {
      question: "Is the cost a monthly or yearly payment?",
      answer:
        "The cost is a one-off payment. Additionally, some of our products might have a daily maintenance fee, which is deducted from the daily mining rewards. You will find details about upfront costs and fees in the Terms of Service of your contract.",
    },
    {
      question: "Can I get a refund?",
      answer: "No refunds are accepted.",
    },
    {
      question: "Why has my purchase order expired?",
      answer:
        "We only allow 30 minutes for the payment in cryptocurrencies to reach our wallet. After this period, the order will be canceled.",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <TopNav />
      <div className="w-full bg-[#f8f8f8]">
        <FAQSection faqs={faqList} doubleCols={false} />
      </div>

      <Footer />
    </div>
  );
};

export default page;
