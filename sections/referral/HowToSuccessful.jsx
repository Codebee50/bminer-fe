import CommunicateSection from "@/components/CommunicateSection";
import SectionWrapper from "@/components/SectionWrapper";
import React from "react";

const HowToSuccessful = () => {
  const sectionList = [
    {
      title: "Communicate with your friends about 1BitUP cloud mining",
      image: "/communicate.avif",
      points: [
        "Discuss with your friends about 1BitUp Cloud mining opportunities",
        "Inform them about trends and possibilities of Cloud Mining",
        "Try to give them advice when selecting any hashpower plans",
      ],
    },

    {
      title: "Use Social Media",
      image: "/social.avif",
      points: [
        "Placement of referral links in your group",
        "Placement of referral links on your personal page",
        "Commenting on thematic groups, video clips, posts, etc.",
        "Record and post your videos in the album",
        "Place our official video in your album",
      ],
      reverse: true,
    },
    {
      title: "Record a video for YouTube",
      image: "/record.avif",
      points: [
        "Create and upload your personal video review of the 1BitUp service (including referral links in the video description)",
        "Feature our official video on your channel",
        "Create an engaging YouTube review highlighting 1BitUp's unique features, with referral links for viewers to learn more or sign up.",
      ],
    },
    {
      title: "Use your website",
      image: "/usewebsite.avif",
      points: [
        "Post articles about 1BitUp",
        "Place our advertising banners in your website",
        "Place our text advertising banners on your website",
        "Place a calculator on your website page",
      ],
      reverse: true,
    },
    {
      title: "Communicate on forums, blogs and relevant websites",
      image: "/forums.avif",
      points: [
        "Create new topics in the forums",
        "Answer in thematic thread forums",
        "Specify affiliate links in the signatures of your messages.",
      ],
    },
  ];

  return (
    <SectionWrapper pad={false}>
      <div className="flex flex-col ">
        <h1 className="text-darkmuted text-[40px] font-semibold text-center">
          How to become a successful affiliate?
        </h1>

        {sectionList.map((section) => (
          <CommunicateSection {...section} key={section.title}/>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default HowToSuccessful;
