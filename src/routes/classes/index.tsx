import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/classes/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-col pt-20 px-10 gap-8">
      <div className="flex flex-col gap-4">
        <p className="text-xl">
          Explore our classes and master trending skills!
        </p>
        <p className="font-bold text-4xl">
          Dive Into{' '}
          <span className="text-primary">What&apos;s Hot Right Now! 🔥</span>
        </p>
      </div>
      <div className="flex flex-row gap-8 cursor-pointer">
        <div className="bg-secondary-foreground rounded-4xl px-6 py-8 w-fit">
          <div className="[writing-mode:sideways-lr] text-secondary h-70 p-8">
            <h2 className="font-bold text-3xl">All Courses</h2>
            <p>Courses you&apos;re powering through right now.</p>
          </div>
          <p className="text-secondary font-extrabold text-8xl">23+</p>
        </div>
        <div className="bg-secondary-foreground rounded-4xl px-6 py-8 w-fit">
          <div className="[writing-mode:sideways-lr] text-secondary h-70 p-8">
            <h2 className="font-bold text-3xl">All Courses</h2>
            <p>Courses you&apos;re powering through right now.</p>
          </div>
          <p className="text-secondary font-extrabold text-8xl">23+</p>
        </div>
        <div className="bg-secondary-foreground rounded-4xl px-6 py-8 w-fit">
          <div className="[writing-mode:sideways-lr] text-secondary h-70 p-8">
            <h2 className="font-bold text-3xl">All Courses</h2>
            <p>Courses you&apos;re powering through right now.</p>
          </div>
          <p className="text-secondary font-extrabold text-8xl">23+</p>
        </div>
      </div>
    </div>
  )
}
