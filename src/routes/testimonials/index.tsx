import { createFileRoute } from '@tanstack/react-router'
import gsap from 'gsap'
import { useCallback, useEffect, useMemo, useRef } from 'react'

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
    testimonial: 'I Love Testimonial',
  },
  { src: 'images/like_star.gif', alt: 'Like Star', type: 'gif' },
  {
    src: 'images/image_spec.png',
    alt: 'Image of a Person wearing Glass',
    type: 'image',
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
  }, [])

  const handleImageMouseLeave = useCallback((index: number) => {
    const image = imageRefs.current[index]
    if (!image) return

    if (ALL_IMAGES[index]?.type === 'gif') return

    gsap.to(image, {
      scale: 1,
      rotation: 0,
      duration: 0.3,
      boxShadow: 'none',
      ease: 'power2.out',
    })
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

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
      className={image.type === 'image' ? 'cursor-pointer' : ''}
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
            <h1 className="text-2xl font-bold text-center mb-4">
              Testimonials
            </h1>
            <p className="text-center text-gray-700">
              Here are some testimonials.
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
