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
}

const ALL_IMAGES: ImageSource[] = [
  // Top row
  { src: 'images/image_16.png', alt: 'Image of a Person', type: 'image' },
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
  const divRef = useRef<HTMLDivElement>(null)

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

  const handleMouseEnter = useCallback(() => {
    const images = imageRefs.current
    if (images.some((img) => !img)) return

    images.forEach((image, idx) => {
      if (image && ANIMATION_POSITIONS[idx]) {
        gsap.to(image, {
          ...ANIMATION_POSITIONS[idx],
          ...ANIMATION_CONFIG,
        })
      }
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    const images = imageRefs.current
    gsap.to(images, {
      x: 0,
      y: 0,
      ...ANIMATION_CONFIG,
    })
  }, [])

  useEffect(() => {
    const div = divRef.current
    if (!div) return

    div.addEventListener('mouseenter', handleMouseEnter)
    div.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      div.removeEventListener('mouseenter', handleMouseEnter)
      div.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [handleMouseEnter, handleMouseLeave])

  //Img component
  const ImageComponent = ({
    image,
    index,
  }: {
    image: ImageSource
    index: number
  }) => (
    <img
      key={index}
      ref={(el) => {
        imageRefs.current[index] = el
      }}
      {...imageProps}
      src={image.src}
      alt={image.alt}
    />
  )

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="h-[500px] w-[800px] relative flex flex-col items-center justify-center">
        <div ref={divRef} className="h-full w-full z-10 absolute" />

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
