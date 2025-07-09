import { createFileRoute } from '@tanstack/react-router'
import clsx from 'clsx'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

export const Route = createFileRoute('/testimonials/')({
  component: RouteComponent,
})

function RouteComponent() {
  const image1Ref = useRef<HTMLImageElement>(null)
  const image2Ref = useRef<HTMLImageElement>(null)
  const image3Ref = useRef<HTMLImageElement>(null)

  const divRef = useRef<HTMLDivElement>(null)

  const imageHeight = 100
  const imageWidth = 100

  const imageStyle = 'rounded-4xl aspect-square object-cover'

  useEffect(() => {
    const div = divRef.current
    const image1 = image1Ref.current
    const image2 = image2Ref.current
    const image3 = image3Ref.current
    if (!div || !image1 || !image2 || !image3) return

    const handleMouseEnter = () => {
      gsap.to(image1, {
        x: -100,
        y: -100,
        duration: 0.5,
        ease: 'power2.out',
      })

      gsap.to(image2, {
        x: 0,
        y: -100,
        duration: 0.5,
        ease: 'power2.out',
      })

      gsap.to(image3, {
        x: 100,
        y: -100,
        duration: 0.5,
        ease: 'power2.out',
      })
    }

    const handleMouseLeave = () => {
      gsap.to([image1, image2, image3], {
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
        <div className="flex flex-row">
          <img
            ref={image1Ref}
            height={imageHeight}
            width={imageWidth}
            src="images/image_16.png"
            alt="Image of a Person"
            className={clsx(imageStyle)}
          />
          <img
            ref={image2Ref}
            src="images/like_star.gif"
            alt="Like Star"
            height={imageHeight}
            width={imageWidth}
          />
          <img
            ref={image3Ref}
            src="images/image_spec.png"
            alt="Image of a Person wearing Glass"
            height={imageHeight}
            width={imageWidth}
            className={clsx(imageStyle)}
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-center mb-4">Testimonials</h1>
          <p className="text-center text-gray-700">
            Here are some testimonials from our satisfied customers.
          </p>
        </div>
        <div className="flex flex-row">
          <img
            // ref={image1Ref}
            height={imageHeight}
            width={imageWidth}
            src="images/image_16.png"
            alt="Image of a Person"
            className={clsx(imageStyle)}
          />
          <img
            // ref={image2Ref}
            src="images/like_star.gif"
            alt="Like Star"
            height={imageHeight}
            width={imageWidth}
          />
          <img
            // ref={image3Ref}
            src="images/image_spec.png"
            alt="Image of a Person wearing Glass"
            height={imageHeight}
            width={imageWidth}
            className={clsx(imageStyle)}
          />
        </div>
      </div>
    </div>
  )
}
