'use client'

export default function Home() {
  return (
    <div className="bg-brown min-h-screen w-full relative">
      <div className="w-full max-w-[1512px] mx-auto relative">
        {/* Main Section */}
        <section className="relative w-full min-h-[1011px] pt-8 pb-32 px-4 md:px-8 lg:px-0">
          {/* A 442 EVENT Title */}
          <h1 className="font-futura font-bold text-[48px] md:text-[64px] lg:text-[96px] leading-[1] text-cream tracking-[-1.92px] absolute left-4 md:left-8 lg:left-[243px] top-8 md:top-16 lg:top-[144px] whitespace-nowrap z-10">
            A 442 EVENT
          </h1>

          {/* Autumn 2026 Badge - Rotated */}
          <div className="absolute left-1/2 md:left-auto md:right-8 lg:left-[942px] top-[80px] md:top-[100px] lg:top-[119px] transform -translate-x-1/2 md:translate-x-0 z-10">
            <div className="rotate-[4deg]">
              <div className="bg-cream border-2 border-cream border-solid h-[100px] md:h-[115px] lg:h-[123px] w-[280px] md:w-[310px] lg:w-[327px] flex items-center justify-center rounded-lg">
                <p className="font-futura font-medium text-[36px] md:text-[42px] lg:text-[48px] leading-[28px] text-purple tracking-[-0.4492px] whitespace-nowrap">
                  Autumn 2026
                </p>
              </div>
            </div>
          </div>

          {/* Montreal Title */}
          <h2 className="font-momo text-[80px] md:text-[120px] lg:text-[150px] leading-[0.9] text-cream tracking-[-1.92px] absolute left-1/2 transform -translate-x-1/2 top-[180px] md:top-[240px] lg:top-[316px] whitespace-nowrap text-center z-10">
            Montreal
          </h2>

          {/* About AI Section */}
          <div className="absolute left-1/2 transform -translate-x-1/2 md:left-auto md:transform-none md:left-[548px] top-[360px] md:top-[420px] lg:top-[511px] flex items-center gap-2 z-10">
            <p className="font-futura font-bold text-[48px] md:text-[56px] lg:text-[64px] leading-[70.4px] text-cream tracking-[-1.0612px] whitespace-nowrap">
              about
            </p>
            <div className="bg-cream border-4 border-cream border-solid h-[65px] md:h-[72px] lg:h-[78px] w-[70px] md:w-[75px] lg:w-[80px] flex items-center justify-center rounded-lg">
              <p className="font-inter font-bold text-[48px] md:text-[56px] lg:text-[64px] leading-[70.4px] text-purple tracking-[-1.0612px]">
                AI
              </p>
            </div>
          </div>

          {/* Buttons Section */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-[480px] md:top-[540px] lg:top-[654px] flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-8 z-10">
            {/* Get Update Button */}
            <div className="rotate-[-2deg]">
              <button className="bg-cream border-2 border-brown border-solid h-[100px] md:h-[110px] lg:h-[115px] w-[280px] md:w-[290px] lg:w-[300px] flex items-center justify-center rounded-lg hover:opacity-90 transition-opacity">
                <p className="font-inter font-medium text-[28px] md:text-[32px] lg:text-[36px] leading-[25.2px] text-purple tracking-[-0.4395px] whitespace-nowrap">
                  Get Update
                </p>
              </button>
            </div>

            {/* Contact Us Button */}
            <div className="rotate-[2deg]">
              <button className="bg-purple border-2 border-brown border-solid h-[100px] md:h-[110px] lg:h-[115px] w-[280px] md:w-[290px] lg:w-[300px] flex items-center justify-center rounded-lg hover:opacity-90 transition-opacity">
                <p className="font-inter font-medium text-[28px] md:text-[32px] lg:text-[36px] leading-[25.2px] text-cream tracking-[-0.4395px] whitespace-nowrap">
                  Contact Us
                </p>
              </button>
            </div>

            {/* Join Our Team Button */}
            <div className="rotate-[-4deg]">
              <button className="bg-cream border-2 border-brown border-solid h-[100px] md:h-[110px] lg:h-[115px] w-[280px] md:w-[290px] lg:w-[300px] flex items-center justify-center rounded-lg hover:opacity-90 transition-opacity">
                <p className="font-inter font-medium text-[28px] md:text-[32px] lg:text-[36px] leading-[25.2px] text-purple tracking-[-0.4395px] whitespace-nowrap">
                  Join our team
                </p>
              </button>
            </div>
          </div>

          {/* Description Paragraph */}
          <div className="absolute left-4 md:left-8 lg:left-[320px] top-[680px] md:top-[750px] lg:top-[834px] w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:w-[871px] z-10">
            <p className="font-futura font-medium text-[18px] md:text-[20px] lg:text-[24px] leading-[32.4px] text-cream tracking-[-0.4395px]">
              Join our next AI community meetup in Montreal to{' '}
              <span className="text-purple">connect, learn and get inspired.</span>{' '}
              Hear from four incredible speakers on the latest developments in artificial intelligence, machine learning, and emerging technologies. Network with fellow enthusiasts and innovators while exploring the future of AI. Whether you&apos;re a seasoned professional or just starting your journey, this event offers valuable insights and meaningful connections in the vibrant Montreal tech scene.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

