import SectionWrapper from "@/components/SectionWrapper";
import { Check, X } from "lucide-react";

export default function BitcoinMiningComparison() {
  return (
    <SectionWrapper pad={false}>
      <div className="mt-[50px] mx-auto p-6 font-sans">
        <div className="text-gray-400 text-sm mb-2">Comparison chart</div>

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-darkmuted leading-tight">
              Bitcoin mining:
              <br />
              Cost and Benefits
            </h1>
          </div>

          <div className="md:w-1/2">
            <p className="text-gray-700 text-lg">
              A chart to compare the costs and benefits of having your own
              hardware versus having a contract with our Bitcoin mining cloud
              service - 1BitUp
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Pluses Section */}
          <div className="bg-[#f9f7fc] rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Pluses
            </h2>

            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="mt-1 mr-3 flex-shrink-0">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <span className="text-gray-700">
                  One-time Contract Purchase Price
                </span>
              </li>

              <li className="flex items-start">
                <div className="mt-1 mr-3 flex-shrink-0">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <span className="text-gray-700">No additional fees</span>
              </li>

              <li className="flex items-start">
                <div className="mt-1 mr-3 flex-shrink-0">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <span className="text-gray-700">
                  Enjoy the best possible electricity rates
                </span>
              </li>

              <li className="flex items-start">
                <div className="mt-1 mr-3 flex-shrink-0">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <span className="text-gray-700">Begin mining right away!</span>
              </li>

              <li className="flex items-start">
                <div className="mt-1 mr-3 flex-shrink-0">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <span className="text-gray-700">
                  We guarantee 100% uptime and cover system downtimes with our
                  own miners
                </span>
              </li>

              <li className="flex items-start">
                <div className="mt-1 mr-3 flex-shrink-0">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <span className="text-gray-700">
                  Remote hardware eliminates excessive heat
                </span>
              </li>

              <li className="flex items-start">
                <div className="mt-1 mr-3 flex-shrink-0">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <span className="text-gray-700">
                  Remote hardware means no noisy equipment
                </span>
              </li>
            </ul>
          </div>

          {/* Minuses Section */}
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Minuses
            </h2>

            <div className="grid md:grid-cols-2 gap-x-6 gap-y-6">
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="mt-1 mr-3 flex-shrink-0">
                    <X className="h-5 w-5 text-red-400" />
                  </div>
                  <span className="text-gray-700">Hardware costs</span>
                </li>

                <li className="flex items-start">
                  <div className="mt-1 mr-3 flex-shrink-0">
                    <X className="h-5 w-5 text-red-400" />
                  </div>
                  <span className="text-gray-700">
                    Potential customs duties
                  </span>
                </li>

                <li className="flex items-start">
                  <div className="mt-1 mr-3 flex-shrink-0">
                    <X className="h-5 w-5 text-red-400" />
                  </div>
                  <span className="text-gray-700">
                    Electricity consumption of additional equipment
                  </span>
                </li>

                <li className="flex items-start">
                  <div className="mt-1 mr-3 flex-shrink-0">
                    <X className="h-5 w-5 text-red-400" />
                  </div>
                  <span className="text-gray-700">
                    Delivery wait time – loss of mining days and depreciation of
                    purchased hardware
                  </span>
                </li>

                <li className="flex items-start">
                  <div className="mt-1 mr-3 flex-shrink-0">
                    <X className="h-5 w-5 text-red-400" />
                  </div>
                  <span className="text-gray-700">
                    Additional equipment costs
                  </span>
                </li>

                <li className="flex items-start">
                  <div className="mt-1 mr-3 flex-shrink-0">
                    <X className="h-5 w-5 text-red-400" />
                  </div>
                  <span className="text-gray-700">Loud noise</span>
                </li>
              </ul>

              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="mt-1 mr-3 flex-shrink-0">
                    <X className="h-5 w-5 text-red-400" />
                  </div>
                  <span className="text-gray-700">Shipping fees</span>
                </li>

                <li className="flex items-start">
                  <div className="mt-1 mr-3 flex-shrink-0">
                    <X className="h-5 w-5 text-red-400" />
                  </div>
                  <span className="text-gray-700">
                    Typically high electricity rates
                  </span>
                </li>

                <li className="flex items-start">
                  <div className="mt-1 mr-3 flex-shrink-0">
                    <X className="h-5 w-5 text-red-400" />
                  </div>
                  <span className="text-gray-700">Cooling expenses</span>
                </li>

                <li className="flex items-start">
                  <div className="mt-1 mr-3 flex-shrink-0">
                    <X className="h-5 w-5 text-red-400" />
                  </div>
                  <span className="text-gray-700">
                    Mining downtime due to system issues
                  </span>
                </li>

                <li className="flex items-start">
                  <div className="mt-1 mr-3 flex-shrink-0">
                    <X className="h-5 w-5 text-red-400" />
                  </div>
                  <span className="text-gray-700">Excessive heat</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
