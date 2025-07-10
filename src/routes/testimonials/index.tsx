import { createFileRoute } from '@tanstack/react-router'
import gsap from 'gsap'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import { ArrowRightIcon } from 'lucide-react'

export const Route = createFileRoute('/testimonials/')({
  component: RouteComponent,
})

interface ImageSource {
  src: string
  alt: string
  type: 'image' | 'gif'
  testimonial?: string
}

const ALL_IMAGES: ImageSource[] = [
  // Top row
  {
    src: 'images/image_16.png',
    alt: 'Image of a Person',
    type: 'image',
    testimonial:
      'I was amazed and impressed by the course structure as it was very well organized and easy to follow.',
  },
  { src: 'images/like_star.gif', alt: 'Like Star', type: 'gif' },
  {
    src: 'images/image_spec.png',
    alt: 'Image of a Person wearing Glass',
    type: 'image',
    testimonial:
      'The course exceeded my expectations! The content was relevant and the delivery was top-notch.',
  },
  // Middle row
  { src: 'images/image_1.png', alt: 'Image of a Person', type: 'image' },
  { src: 'images/image_2.png', alt: 'Image of a Girl', type: 'image' },
  // Bottom row
  {
    src: 'images/love_emoji_noti.gif',
    alt: 'Love Emoji Notification',
    type: 'gif',
  },
  {
    src: 'images/image_longhair.png',
    alt: 'Image of a Person with Long Hair',
    type: 'image',
    testimonial:
      'The course was fantastic! The content was engaging and the instructors were knowledgeable.',
  },
  { src: 'images/trophy.gif', alt: 'Trophy GIF', type: 'gif' },
  { src: 'images/image_b.png', alt: 'Image of a Person', type: 'image' },
  { src: 'images/like_love.gif', alt: 'Like Love GIF', type: 'gif' },
]

const ANIMATION_POSITIONS = [
  { x: -100, y: -100 },
  { x: 0, y: -100 },
  { x: 100, y: -100 },
  { x: -100, y: 0 },
  { x: 100, y: 10 },
  { x: -100, y: 10 },
  { x: -100, y: 100 },
  { x: 0, y: 100 },
  { x: 100, y: 100 },
  { x: 100, y: 50 },
]

const ANIMATION_CONFIG = {
  duration: 0.6,
  ease: 'power2.out',
}

function RouteComponent() {
  const imageRefs = useRef<(HTMLImageElement | null)[]>([])
  const breathingTimelines = useRef<(gsap.core.Timeline | null)[]>([])
  const mainTimelines = useRef<(gsap.core.Tween | null)[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([])
  const arrowRef = useRef<SVGSVGElement>(null)

  const imageProps = {
    height: 100,
    width: 100,
    className: 'rounded-4xl aspect-square object-cover',
  }

  const imageSections = useMemo(
    () => ({
      top: ALL_IMAGES.slice(0, 3),
      middle: ALL_IMAGES.slice(3, 5),
      bottom: ALL_IMAGES.slice(5, 10),
    }),
    [],
  )

  //ANIMATIONS HANDLERS
  const startBreathingAnimation = useCallback(
    (image: HTMLImageElement, index: number) => {
      if (ALL_IMAGES[index]?.type !== 'image') return

      // Kill existing breathing animation first
      if (breathingTimelines.current[index]) {
        breathingTimelines.current[index]!.kill()
      }
      const tl = gsap.timeline({ repeat: -1, yoyo: true })

      tl.to(image, {
        y: (ANIMATION_POSITIONS[index]?.y || 0) + (index % 2 ? -45 : 45),
        duration: 2.5,
        ease: 'power1.inOut',
        delay: index * 0.1,
      })

      breathingTimelines.current[index] = tl
    },
    [],
  )

  const stopBreathingAnimation = useCallback((index: number) => {
    if (breathingTimelines.current[index] != null) {
      breathingTimelines.current[index]!.kill()
      breathingTimelines.current[index] = null
    }
  }, [])

  const handleContainerMouseEnter = useCallback(() => {
    const images = imageRefs.current
    if (images.some((img) => !img)) return

    images.forEach((image, idx) => {
      if (image && ANIMATION_POSITIONS[idx]) {
        if (mainTimelines.current[idx]) {
          mainTimelines.current[idx]!.kill()
        }

        // Also stop any breathing animation
        stopBreathingAnimation(idx)
        const tween = gsap.to(image, {
          ...ANIMATION_POSITIONS[idx],
          ...ANIMATION_CONFIG,
          onComplete: () => {
            startBreathingAnimation(image, idx)
          },
        })
        mainTimelines.current[idx] = tween
      }
    })
  }, [startBreathingAnimation, stopBreathingAnimation])

  const handleContainerMouseLeave = useCallback(() => {
    const images = imageRefs.current

    images.forEach((image, idx) => {
      // Kill all existing animations
      if (mainTimelines.current[idx]) {
        mainTimelines.current[idx]!.kill()
        mainTimelines.current[idx] = null
      }
      stopBreathingAnimation(idx)

      if (image) {
        gsap.to(image, {
          x: 0,
          y: 0,
          scale: 1,
          rotation: 0,
          ...ANIMATION_CONFIG,
        })
      }
    })
  }, [stopBreathingAnimation])

  const handleImageMouseEnter = useCallback((index: number) => {
    const image = imageRefs.current[index]
    const testimonialBox = testimonialRefs.current[index]

    if (!image) return

    if (ALL_IMAGES[index]?.type === 'gif') return

    const hasTestimonial = ALL_IMAGES[index]?.testimonial
    const shadowColor = hasTestimonial
      ? '0 0 20px 5px rgba(59, 130, 246, 0.8)'
      : '0 10px 10px rgba(0, 0, 0, 0.5)'

    gsap.to(image, {
      scale: 1.2,
      rotation: 5,
      duration: 0.3,
      boxShadow: shadowColor,
      ease: 'power2.out',
    })

    if (hasTestimonial && testimonialBox) {
      gsap.fromTo(
        testimonialBox,
        {
          opacity: 0,
          y: -20,
          scale: 0.1,
          display: 'block',
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.8,
          ease: 'back.out(1.7)',
        },
      )
    }
  }, [])

  const handleImageMouseLeave = useCallback((index: number) => {
    const image = imageRefs.current[index]
    const testimonialBox = testimonialRefs.current[index]
    if (!image) return

    if (ALL_IMAGES[index]?.type === 'gif') return

    gsap.to(image, {
      scale: 1,
      rotation: 0,
      duration: 0.3,
      boxShadow: 'none',
      ease: 'power2.out',
    })

    if (testimonialBox) {
      gsap.to(testimonialBox, {
        opacity: 0,
        y: -20,
        scale: 0.8,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => {
          gsap.set(testimonialBox, { display: 'none' })
        },
      })
    }
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    gsap.fromTo(
      arrowRef.current,
      {
        x: -2,
      },
      {
        x: 10,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      },
    )

    container.addEventListener('mouseenter', handleContainerMouseEnter)
    container.addEventListener('mouseleave', handleContainerMouseLeave)

    return () => {
      container.removeEventListener('mouseenter', handleContainerMouseEnter)
      container.removeEventListener('mouseleave', handleContainerMouseLeave)
    }
  }, [handleContainerMouseEnter, handleContainerMouseLeave])

  //Img component
  const ImageComponent = ({
    image,
    index,
  }: {
    image: ImageSource
    index: number
  }) => (
    <div
      onMouseEnter={() => handleImageMouseEnter(index)}
      onMouseLeave={() => handleImageMouseLeave(index)}
      className={`relative ${image.type === 'image' ? 'cursor-pointer' : ''}`}
    >
      <img
        key={index}
        ref={(el) => {
          imageRefs.current[index] = el
        }}
        {...imageProps}
        src={image.src}
        alt={image.alt}
      />
      {image.testimonial && (
        <div
          ref={(el) => {
            testimonialRefs.current[index] = el
          }}
          className="absolute w-60 -top-0 left-1/2 transform -translate-x-1/2 bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-lg z-10 whitespace-nowrap opacity-0 hidden"
          style={{ display: 'none' }}
        >
          <div className="text-sm w-full text-wrap font-medium text-gray-800">
            {image.testimonial}
          </div>
        </div>
      )}
    </div>
  )

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div
        ref={containerRef}
        className="h-[500px] w-[800px] relative flex flex-col items-center justify-center"
      >
        {/* Top row */}
        <div className="flex flex-row gap-10">
          {imageSections.top.map((image, idx) => (
            <ImageComponent key={idx} image={image} index={idx} />
          ))}
        </div>

        {/* Middle row with content */}
        <div className="relative mt-4 flex flex-row items-center justify-center gap-4">
          <ImageComponent image={imageSections.middle[0]} index={3} />

          <div className="px-8">
            <h1 className="text-2xl font-light text-center mb-4 font-outfit">
              Head How They Level Up Their Game
            </h1>
            <p className="text-center font-extrabold text-4xl text-gray-700 font-nunito-sans">
              Skill <span className="text-primary"> Masters </span>
              Unite! 🤝
            </p>
            <p className="text-center text-lg mt-4 cursor-pointer font-medium">
              View all Testimonials{' '}
              <ArrowRightIcon className="inline" ref={arrowRef} />
            </p>
          </div>

          <ImageComponent image={imageSections.middle[1]} index={4} />
        </div>

        {/* Bottom row */}
        <div className="flex flex-row gap-4">
          {imageSections.bottom.map((image, idx) => (
            <ImageComponent key={idx} image={image} index={idx + 5} />
          ))}
        </div>
      </div>
    </div>
  )
}
