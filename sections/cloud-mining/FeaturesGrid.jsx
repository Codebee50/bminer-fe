export default function FeaturesSection() {
    const features = [
      {
        id: 1,
        title: "Over 5 years of BTC Cloud Mining services",
        icon: "6+",
      },
      {
        id: 2,
        title: "Low entry barrier – start with just 1 TH/s to become a cloud miner",
        icon: "6+",
      },
      {
        id: 3,
        title: "Transparent Fee structure - NO hidden FEEs",
        icon: "6+",
      },
      {
        id: 4,
        title: "High Level Security",
        icon: "6+",
      },
      {
        id: 5,
        title: "24/7 Support",
        icon: "6+",
      },
    ]
  
    return (
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col items-start">
              <div className="bg-purple500 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">{feature.icon}</span>
              </div>
              <h3 className="text-gray-800 text-lg font-medium">{feature.title}</h3>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  