import { createFileRoute } from '@tanstack/react-router'
import clsx from 'clsx'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

export const Route = createFileRoute('/testimonials/')({
  component: RouteComponent,
})

interface ImageSource {
  src: string
  alt: string
}

const TopImageSources: ImageSource[] = [
  {
    src: 'images/image_16.png',
    alt: 'Image of a Person',
  },
  {
    src: 'images/like_star.gif',
    alt: 'Like Star',
  },
  {
    src: 'images/image_spec.png',
    alt: 'Image of a Person wearing Glass',
  },
]

const MiddleImageSources: ImageSource[] = [
  {
    src: 'images/image_1.png',
    alt: 'Image of a Person',
  },
  {
    src: 'images/image_2.png',
    alt: 'Image of a Girl',
  },
]

const BottomImageSources: ImageSource[] = [
  {
    src: 'images/love_emoji_noti.gif',
    alt: 'Love Emoji Notification',
  },
  {
    src: 'images/image_longhair.png',
    alt: 'Image of a Person with Long Hair',
  },
  {
    src: 'images/trophy.gif',
    alt: 'Trophy GIF',
  },
  {
    src: 'images/image_b.png',
    alt: 'Image of a Person',
  },
  {
    src: 'images/like_love.gif',
    alt: 'Like Love GIF',
  },
]

function RouteComponent() {
  const imageRefs = useRef<(HTMLImageElement | null)[]>([])

  const divRef = useRef<HTMLDivElement>(null)

  const imageHeight = 100
  const imageWidth = 100

  const imageStyle = 'rounded-4xl aspect-square object-cover'

  useEffect(() => {
    const div = divRef.current
    const images = imageRefs.current

    if (!div || images.some((img) => !img)) return

    const handleMouseEnter = () => {
      gsap.to(images[0], {
        x: -100,
        y: -100,
        duration: 0.5,
        ease: 'power2.out',
      })

      gsap.to(images[1], {
        x: 0,
        y: -100,
        duration: 0.5,
        ease: 'power2.out',
      })

      gsap.to(images[2], {
        x: 100,
        y: -100,
        duration: 0.5,
        ease: 'power2.out',
      })
      gsap.to(images[3], {
        x: -100,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
      })
      gsap.to(images[4], {
        x: 100,
        y: 10,
        duration: 0.5,
        ease: 'power2.out',
      })
      gsap.to(images[5], {
        x: -100,
        y: 10,
        duration: 0.5,
        ease: 'power2.out',
      })
      gsap.to(images[6], {
        x: -100,
        y: 100,
        duration: 0.5,
        ease: 'power2.out',
      })
      gsap.to(images[7], {
        x: 0,
        y: 100,
        duration: 0.5,
        ease: 'power2.out',
      })
      gsap.to(images[8], {
        x: 100,
        y: 100,
        duration: 0.5,
        ease: 'power2.out',
      })
      gsap.to(images[9], {
        x: 100,
        y: 50,
        duration: 0.5,
        ease: 'power2.out',
      })
    }

    const handleMouseLeave = () => {
      gsap.to(images, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
      })
    }

    div.addEventListener('mouseenter', handleMouseEnter)
    div.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      div.removeEventListener('mouseenter', handleMouseEnter)
      div.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])
  return (
    <div className="flex  flex-col items-center justify-center h-screen ">
      <div className="h-[500px] w-[700px] bg-red-50 relative flex flex-col items-center justify-center">
        <div
          ref={divRef}
          className="h-full w-full z-10 absolute border-2"
        ></div>
        <div className="flex flex-row gap-10">
          {TopImageSources.map((image, idx) => (
            <img
              key={idx}
              ref={(el) => {
                imageRefs.current[idx] = el
              }}
              height={imageHeight}
              width={imageWidth}
              src={image.src}
              alt={image.alt}
              className={clsx(imageStyle, idx === 1 ? '' : 'mr-2')}
            />
          ))}
        </div>
        <div className="relative mt-4 flex flex-row items-center justify-center">
          <img
            ref={(el) => {
              imageRefs.current[TopImageSources.length] = el
            }}
            height={imageHeight}
            width={imageWidth}
            src={MiddleImageSources[0].src}
            alt={MiddleImageSources[0].alt}
            className={clsx(imageStyle)}
          />
          <div>
            <h1 className="text-2xl font-bold text-center mb-4">
              Testimonials
            </h1>
            <p className="text-center text-gray-700">
              Here are some testimonials from our satisfied customers.
            </p>
          </div>
          <img
            ref={(el) => {
              imageRefs.current[TopImageSources.length + 1] = el
            }}
            height={imageHeight}
            width={imageWidth}
            src={MiddleImageSources[1].src}
            alt={MiddleImageSources[1].alt}
            className={clsx(imageStyle, 'ml-2')}
          />
        </div>
        <div className="flex flex-row">
          {BottomImageSources.map((image, idx) => (
            <img
              key={idx}
              ref={(el) => {
                imageRefs.current[TopImageSources.length + 2 + idx] = el
              }}
              height={imageHeight}
              width={imageWidth}
              src={image.src}
              alt={image.alt}
              className={clsx(imageStyle, 'mr-2')}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
