import Image from "next/image";
import { Button } from "@/components/ui/button";
import RegButton from "@/components/RegButton";
const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800">
          Why choose us
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Card */}
          <div className="bg-purple-50 rounded-3xl p-8 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 max-w-md">
                You may ask, what's unique about 1BitUp? Without a doubt, we are
                the best.
              </h3>
              <p className="text-gray-600 mb-6">
                So, why are we the best fit for you?
              </p>

              <RegButton label="Get started Now" />
            </div>
            <div className="mt-8">
              <Image
                src="/mining-rigs.webp"
                alt="Mining Rigs Illustration"
                width={500}
                height={300}
                className="w-full object-contain"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="bg-white rounded-3xl border border-gray-100 p-8 space-y-6">
            <p className="text-gray-600">
              As a mining farm, continuous expansion has been our guiding
              principle since our inception in 2017. Due to the dynamic nature
              of digital assets, our competent staff works tirelessly to stay up
              with the latest developments.
            </p>

            <p className="text-gray-600">
              When it comes to hashing, no one has been more inventive than our
              experience since 2017.
            </p>

            <p className="text-gray-600">
              We partner with leading data centers and meticulously select the
              most dependable technologies and equipment to ensure optimal
              performance and dependability.
            </p>

            <p className="text-gray-600">
              We can increase our manufacturing capacity and provide better
              service to our clients as a result. Furthermore, we only employ
              equipment that is fully protected by warranty, which enables us to
              quickly identify and resolve any potential disruptions.
            </p>

            <p className="text-gray-600">
              Our initial plan all along was to establish a fully functional
              mining operation by purchasing and operating our equipment. Since
              this initial assignment taught us so much, we recognized a chance
              to broaden our scope.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
