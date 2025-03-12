import Image from "next/image";
import { Circle } from "lucide-react";

const CommunicateSection = ({ title, image, points = [], reverse = false }) => {
  const bulletPoints = [
    "Discuss with your friends about 1BitUp Cloud mining opportunities",
    "Inform them about trends and possibilities of Cloud Mining",
    "Try to give them advice when selecting any hashpower plans",
  ];

  return (
    <div className="container mx-auto px-4 py-[20px]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className={`relative aspect-square bg-gradient-to-br  rounded-3xl overflow-hidden ${reverse && 'order-last'}`}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[420px] h-[420px] rounded-[24px] overflow-hidden ">
                <Image
                  src={image}
                  alt="Bitcoin miner Cloud Mining"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-darkmuted leading-tight">
              {title}
            </h2>

            <div className="space-y-6">
              {points.map((point, index) => (
                <div key={index} className="flex items-start gap-3 border-b border-b-[#ececec] pb-[20px]">
                  {/* <Circle className="w-2 h-2 mt-2 text-purple-600 flex-shrink-0 fill-current" /> */}
                  <Image
                    height={20}
                    width={20}
                    className="rounded-full"
                    src="point-icon.svg"
                    alt=""
                  />
                  <p className="text-[#585858] leading-relaxed text-[20px]">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunicateSection;
