import { createFileRoute } from '@tanstack/react-router'
import { gsap } from 'gsap'
import { GSDevTools } from 'gsap/GSDevTools'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/')({
  component: App,
})

gsap.registerPlugin(GSDevTools)

function App() {
  const [highlightedBoxes, setHighlightedBoxes] = useState(new Set())
  const [gridDimensions, setGridDimensions] = useState({ rows: 0, cols: 0 })
  const boxWidth = 90
  const boxHeight = 120

  useEffect(() => {
    const calculateGrid = () => {
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight

      // Calculate how many boxes fit in each dimension
      const cols = Math.floor(viewportWidth / boxWidth)
      const rows = Math.floor(viewportHeight / boxHeight)

      setGridDimensions({ rows, cols })
    }

    calculateGrid()
    window.addEventListener('resize', calculateGrid)

    return () => window.removeEventListener('resize', calculateGrid)
  }, [])

  useEffect(() => {
    if (gridDimensions.rows === 0 || gridDimensions.cols === 0) return

    const totalBoxes = gridDimensions.rows * gridDimensions.cols

    const interval = setInterval(() => {
      // Generate random boxes to highlight
      const numBoxes = Math.floor(Math.random() * 8) + 5
      const newHighlighted = new Set()

      for (let i = 0; i < numBoxes; i++) {
        const randomIndex = Math.floor(Math.random() * totalBoxes)
        newHighlighted.add(randomIndex)
      }

      setHighlightedBoxes(newHighlighted)
    }, 2000)
    return () => clearInterval(interval)
  }, [gridDimensions])

  const totalBoxes = gridDimensions.rows * gridDimensions.cols

  return (
    <div className="w-screen h-screen bg-gray-100 overflow-hidden">
      <div
        className="grid gap-0.5 p-1 h-full w-full"
        style={{
          gridTemplateColumns: `repeat(${gridDimensions.cols}, ${boxWidth}px)`,
          gridTemplateRows: `repeat(${gridDimensions.rows}, ${boxHeight}px)`,
        }}
      >
        {Array.from({ length: totalBoxes }, (_, index) => (
          <div
            key={index}
            className={`
              transition-all duration-700 ease-in-out border-gray-100
              ${
                highlightedBoxes.has(index)
                  ? 'bg-purple-500'
                  : 'bg-white hover:bg-gray-50'
              }
            `}
            style={{
              width: `${boxWidth}px`,
              height: `${boxHeight}px`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
