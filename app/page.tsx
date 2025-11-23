'use client'

import { useState, useEffect } from 'react'

const TYPEWRITER_WORDS = ['Medicine', 'Architecture', 'Law', 'And Many More...']

export default function Home() {
  const [currentWord, setCurrentWord] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = TYPEWRITER_WORDS[currentWord]
    let timeout: NodeJS.Timeout

    if (displayText === '' && !isDeleting && currentWord === 0) {
      // Initialize with first character
      timeout = setTimeout(() => {
        setDisplayText(current[0])
      }, 100)
    } else {
      timeout = setTimeout(() => {
        if (!isDeleting) {
          if (displayText.length < current.length) {
            setDisplayText(current.slice(0, displayText.length + 1))
          } else {
            // Wait before starting to delete
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentWord((prev) => (prev + 1) % TYPEWRITER_WORDS.length)
          }
        }
      }, isDeleting ? 50 : 100)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentWord])

  const montrealFonts = [
    'font-montreal1', // Momo Signature (original)
    'font-montreal2', // Playfair Display
    'font-montreal3', // Great Vibes
    'font-montreal4', // Pacifico
  ]

  return (
    <div className="bg-brown min-h-screen w-full">
      <div className="w-full max-w-[1512px] mx-auto">
        {/* Main Section */}
        <section className="relative w-full flex flex-col items-center px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16 space-y-8 md:space-y-12 lg:space-y-16">
          {/* Header Box - A 442 EVENT and Autumn 2026 */}
          <div className="relative w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8">
            {/* A 442 EVENT Title */}
            <h1 className="font-futura font-bold text-[48px] md:text-[64px] lg:text-[96px] leading-[1] text-cream tracking-[-1.92px] whitespace-nowrap">
              A 442 EVENT
            </h1>

            {/* Autumn 2026 Badge - Rotated */}
            <div className="relative md:absolute md:right-0">
              <div className="rotate-[4deg]">
                <div className="bg-cream border-2 border-cream border-solid h-[100px] md:h-[115px] lg:h-[123px] w-[280px] md:w-[310px] lg:w-[327px] flex items-center justify-center rounded-lg">
                  <p className="font-futura font-medium text-[36px] md:text-[42px] lg:text-[48px] leading-[28px] text-purple tracking-[-0.4492px] whitespace-nowrap">
                    Autumn 2026
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Montreal Title Box - Infinite Scrolling Animation */}
          <div className="relative w-full h-[135px] md:h-[162px] lg:h-[203px] overflow-hidden flex items-center justify-center">
            <div className="montreal-scroll">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex flex-row items-center">
                  {montrealFonts.map((fontClass, idx) => (
                    <h2
                      key={idx}
                      className={`${fontClass} text-[80px] md:text-[120px] lg:text-[150px] leading-[0.9] text-cream tracking-[-1.92px] whitespace-nowrap px-8 md:px-12 lg:px-16`}
                    >
                      Montreal
                    </h2>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* About AI Section Box */}
          <div className="relative w-full flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-4">
            <p className="font-futura font-bold text-[48px] md:text-[56px] lg:text-[64px] leading-[70.4px] text-cream tracking-[-1.0612px] whitespace-nowrap">
              about
            </p>
            <div className="bg-cream border-4 border-cream border-solid h-[65px] md:h-[72px] lg:h-[78px] w-[70px] md:w-[75px] lg:w-[80px] flex items-center justify-center rounded-lg">
              <p className="font-inter font-bold text-[48px] md:text-[56px] lg:text-[64px] leading-[70.4px] text-purple tracking-[-1.0612px]">
                AI
              </p>
            </div>
            <p className="font-futura font-bold text-[48px] md:text-[56px] lg:text-[64px] leading-[70.4px] text-cream tracking-[-1.0612px] whitespace-nowrap">
              in
            </p>
            <div className="bg-cream border-4 border-cream border-solid min-h-[65px] md:min-h-[72px] lg:min-h-[78px] min-w-[120px] md:min-w-[140px] lg:min-w-[200px] px-4 md:px-6 flex items-center justify-center rounded-lg">
              <p className="font-inter font-bold text-[48px] md:text-[56px] lg:text-[64px] leading-[70.4px] text-purple tracking-[-1.0612px] whitespace-nowrap">
                {displayText}
                <span className="animate-pulse ml-1">|</span>
              </p>
            </div>
          </div>

          {/* Buttons Section Box */}
          <div className="relative w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-8">
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

          {/* Description Paragraph Box */}
          <div className="relative w-full max-w-[871px] mx-auto">
            <p className="font-futura font-medium text-[18px] md:text-[20px] lg:text-[24px] leading-[32.4px] text-cream tracking-[-0.4395px] text-center md:text-left">
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

