import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/testimonials/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex  flex-col items-center justify-center h-screen ">
      <div className="h-20 hover:bg-black group w-20 bg-red-400">
        <img src="images/image_16.png" alt="Image of a Person" />
      </div>
    </div>
  )
}
