import { createFileRoute } from '@tanstack/react-router'
import gsap from 'gsap'
import { ArrowRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

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

const ICON_SRCS = [
  'icons/Group.png',
  'icons/Group-2.png',
  'icons/Group-3.png',
  'icons/Group-4.png',
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
  const extrasRefs = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
    setExpandedCardIndex(0)
    animateCardOpen(0, false)
  }, [])

  const handleCardClick = (index: number, prevExpandedIndex: number) => {
    const isPreviousCardOnLeft = prevExpandedIndex < index
    if (expandedCardIndex === index) {
      // Close current card
      animateCardClose(index, isPreviousCardOnLeft)
      setExpandedCardIndex(null)
    } else {
      // Close previous card if exists
      if (expandedCardIndex !== null) {
        animateCardClose(expandedCardIndex, isPreviousCardOnLeft)
      }
      // Open new card
      setExpandedCardIndex(index)
      animateCardOpen(index, isPreviousCardOnLeft)
    }
  }

  const ANIMATION_HELPER = {
    //FOR EXTRA like "View All Courses" and icons
    extra_duration: 0.6,

    //FOR BACKGROUND
    bg_duration: 0.6,

    //FOR CONTENT
    content_duration: 0.6,
    content_delay: 0.1,

    //FOR CARD
    card_duration: 0.6,
    initial_card_width: '280px',
    expanded_card_width: '500px',

    //FOR TEXT like h2 and p
    text_duration: 0.3,
    text_delay: 0.1,
  }

  const animateCardOpen = (index: number, isPreviousCardOnLeft: boolean) => {
    const card = cardRefs.current[index]
    const content = contentRefs.current[index]
    const bg = bgRefs.current[index]
    const extra = extrasRefs.current[index]

    if (!card || !content || !bg || !extra) return

    const startX = isPreviousCardOnLeft ? -900 : 900
    const tl = gsap.timeline()
    const cardSelector = gsap.utils.selector(card)

    tl.fromTo(
      extra,
      { display: 'hidden', x: startX },
      { display: 'block', duration: ANIMATION_HELPER.extra_duration, x: 0 },
      0.2,
    )
    tl.fromTo(
      bg,
      {
        clipPath: 'circle(150% at 0 100%)',
      },
      {
        clipPath: 'circle(0% at 0 100%)',
        duration: ANIMATION_HELPER.bg_duration,
        ease: 'power1.inOut',
        backgroundColor: COLOR_SECONDARY,
      },
      0,
    )
    tl.to(
      card,
      {
        width: ANIMATION_HELPER.expanded_card_width,
        // backgroundColor: COLOR_SECONDARY,
        duration: ANIMATION_HELPER.card_duration,
        ease: 'power2.inOut',
      },
      0,
    )
      .to(
        content,
        {
          color: COLOR_SECONDARY_FOREGROUND,
          opacity: 1,
          rotation: 90,
          x: 300,
          y: 190,
          duration: ANIMATION_HELPER.content_duration,
          delay: ANIMATION_HELPER.content_delay,
          ease: 'back.in(1.7)',
        },
        0,
      )
      .to(
        cardSelector('h2,p'),
        {
          color: COLOR_SECONDARY_FOREGROUND,
          duration: ANIMATION_HELPER.text_duration,
          delay: ANIMATION_HELPER.text_delay,
        },
        0,
      )
  }

  const animateCardClose = (index: number, isPreviousCardOnLeft: boolean) => {
    const card = cardRefs.current[index]
    const content = contentRefs.current[index]
    const bg = bgRefs.current[index]
    const extra = extrasRefs.current[index]

    if (!card || !content || !bg || !extra) return

    const endX = isPreviousCardOnLeft ? 900 : -900
    const tl = gsap.timeline()
    const cardSelector = gsap.utils.selector(card)

    tl.fromTo(
      extra,
      { display: 'block', x: 0 },
      { display: 'block', duration: ANIMATION_HELPER.extra_duration, x: endX },
      0.2,
    )
    tl.fromTo(
      bg,
      { clipPath: 'circle(0% at 0 100%)' },
      {
        clipPath: 'circle(150% at 0 100%)',
        duration: ANIMATION_HELPER.bg_duration,
        ease: 'power1.inOut',
        backgroundColor: COLOR_SECONDARY_FOREGROUND,
      },
      0,
    )
    tl.to(
      content,
      {
        opacity: 1,
        rotation: 0,
        x: 0,
        y: 0,
        duration: ANIMATION_HELPER.content_duration,
        delay: ANIMATION_HELPER.content_delay,
        ease: 'back.in(1.7)',
      },
      0,
    )
      .to(
        card,
        {
          // backgroundColor: COLOR_SECONDARY_FOREGROUND,
          width: ANIMATION_HELPER.initial_card_width,
          duration: ANIMATION_HELPER.card_duration,
          ease: 'power2.inOut',
        },
        0,
      )
      .to(
        cardSelector('h2, p'),
        {
          color: COLOR_SECONDARY,
          duration: ANIMATION_HELPER.text_duration,
          delay: ANIMATION_HELPER.text_delay,
        },
        0,
      )
  }
  return (
    <div className="flex flex-col pt-20 px-10 gap-8">
      <div className="flex flex-col gap-4">
        <p className="text-xl font-outfit mb-4">
          Explore our classes and master trending skills!
        </p>
        <p className="font-bold text-4xl mb-4">
          Dive Into
          <span className="text-primary">What&apos;s Hot Right Now! 🔥</span>
        </p>
      </div>
      <div className="flex flex-row gap-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            ref={(el) => {
              cardRefs.current[index] = el
            }}
            onClick={() => handleCardClick(index, expandedCardIndex ?? 0)}
            className={`relative overflow-hidden rounded-4xl px-6 py-8 cursor-pointer bg-secondary transition-all duration-300 hover:shadow-lg`}
          >
            {/* <<< background layer */}
            <div
              ref={(el) => {
                bgRefs.current[index] = el
              }}
              className="absolute inset-0 bg-secondary-foreground"
            />

            <div className="relative z-10">
              <div
                className="hidden absolute inset-0 flex-col"
                ref={(el) => {
                  extrasRefs.current[index] = el
                }}
              >
                <div
                  className="flex flex-row text-md items-center text-secondary-foreground justify-end gap-2 mb-4"
                  onClick={() => alert('View All Courses')}
                >
                  <p className="font-outfit font-bold">View All Courses</p>
                  <ArrowRight size={18} />
                </div>
                <div className="flex mt-10 flex-row gap-8 justify-center">
                  {ICON_SRCS.map((src, iconIndex) => (
                    <img
                      key={iconIndex}
                      src={src}
                      alt={`Icon ${iconIndex + 1}`}
                      className="size-20"
                    />
                  ))}
                </div>
              </div>
              <div
                className="[writing-mode:sideways-lr] text-secondary h-[300px] px-4"
                ref={(el) => {
                  contentRefs.current[index] = el
                }}
              >
                <h2 className="font-bold text-3xl text-secondary px-2">
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
