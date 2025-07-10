import { createFileRoute } from '@tanstack/react-router'
import gsap from 'gsap'
import { useRef, useState } from 'react'

export const Route = createFileRoute('/classes/')({
  component: RouteComponent,
})

const cardData = [
  {
    title: 'All Courses',
    description: "Courses you're powering through right now.",
    count: '23+',
  },
  {
    title: 'Upcoming Courses',
    description: 'exciting new courses waiting to boost your skills.',
    count: '05+',
  },
  {
    title: 'Ongoing Courses',
    description: `currently happening-don't. miss out the action!`,
    count: '10+',
  },
]

const COLOR_SECONDARY = 'oklch(0.5449 0.1807 20.24)'
const COLOR_SECONDARY_FOREGROUND = 'oklch(0.9514 0.0152 12.43)'

function RouteComponent() {
  const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(
    null,
  )
  const cardRefs = useRef<Array<HTMLDivElement | null>>([])
  const contentRefs = useRef<Array<HTMLDivElement | null>>([])
  const bgRefs = useRef<Array<HTMLDivElement | null>>([])

  const handleCardClick = (index: number) => {
    if (expandedCardIndex === index) {
      // Close current card
      animateCardClose(index)
      setExpandedCardIndex(null)
    } else {
      // Close previous card if exists
      if (expandedCardIndex !== null) {
        animateCardClose(expandedCardIndex)
      }
      // Open new card
      animateCardOpen(index)
      setExpandedCardIndex(index)
    }
  }

  const animateCardOpen = (index: number) => {
    const card = cardRefs.current[index]
    const content = contentRefs.current[index]
    const bg = bgRefs.current[index]

    if (!card || !content || !bg) return

    gsap.set(bg, { clipPath: 'circle(0% at 0 100%)' })

    const tl = gsap.timeline()
    const cardSelector = gsap.utils.selector(card)

    gsap.set(card, {
      clipPath: 'circle(150% at 0 100%)',
    })

    tl.to(
      bg,
      {
        clipPath: 'circle(150% at 0 100%)',
        backgroundColor: COLOR_SECONDARY,
        duration: 0.5,
        ease: 'power2.inOut',
      },
      0,
    )
    tl.to(
      card,
      {
        width: '500px',
        // clipPath: 'circle(150% at 0 100%)',
        // backgroundColor: COLOR_SECONDARY,
        duration: 0.5,
        ease: 'power2.inOut',
      },
      0,
    )
      .to(
        content,
        {
          // clipPath: 'circle(100% at 0 100%)',
          color: COLOR_SECONDARY_FOREGROUND,
          opacity: 1,
          rotation: 90,
          x: 250,
          y: 160,
          duration: 0.5,
          delay: 0.1,
          ease: 'back.in(1.7)',
        },
        0,
      )
      .to(
        cardSelector('h2,p'),
        {
          color: COLOR_SECONDARY_FOREGROUND,
          duration: 0.6,
          delay: 0.4,
        },
        0,
      )
  }

  const animateCardClose = (index: number) => {
    const card = cardRefs.current[index]
    const content = contentRefs.current[index]
    const bg = bgRefs.current[index]

    if (!card || !content || !bg) return

    const tl = gsap.timeline()
    const cardSelector = gsap.utils.selector(card)

    // gsap.set(content, {
    //   clipPath: 'circle(0% at 0 100%)',
    //   opacity: 1,
    // })
    tl.to(
      bg,
      {
        clipPath: 'circle(0% at 0 100%)',
        backgroundColor: COLOR_SECONDARY_FOREGROUND,
        duration: 0.5,
        ease: 'power2.inOut',
      },
      0,
    )
    tl.to(
      content,
      {
        // backgroundColor: 'oklch(0.5449 0.1807 20.24)',
        opacity: 1,
        rotation: -0,
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'back.in(1.7)',
      },
      0,
    )
      .to(
        card,
        {
          backgroundColor: COLOR_SECONDARY_FOREGROUND,
          width: '280px',
          duration: 0.5,
          ease: 'power2.inOut',
        },
        0,
      )
      .to(
        cardSelector('h2, p'),
        {
          color: COLOR_SECONDARY,
          duration: 0.6,
          delay: 0.4,
        },
        0,
      )
  }
  return (
    <div className="flex flex-col pt-20 px-10 gap-8">
      {/* … header … */}
      <div className="flex flex-row gap-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            ref={(el) => {
              cardRefs.current[index] = el
            }}
            onClick={() => handleCardClick(index)}
            className="relative overflow-hidden rounded-4xl px-6 py-8 w-[280px] cursor-pointer transition-all duration-300 hover:shadow-lg"
          >
            {/* <<< background layer */}
            <div
              ref={(el) => {
                bgRefs.current[index] = el
              }}
              className="absolute inset-0 bg-secondary-foreground"
            />

            {/* <<< always-visible content */}
            <div className="relative z-10">
              <div
                className="[writing-mode:sideways-lr] text-secondary h-70 p-8"
                ref={(el) => {
                  contentRefs.current[index] = el
                }}
              >
                <h2 className="font-bold text-3xl text-secondary">
                  {card.title}
                </h2>
                <p className="text-secondary">{card.description}</p>
              </div>
              <p className="font-extrabold text-8xl text-secondary">
                {card.count}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
