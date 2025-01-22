import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import { programmingQuestions } from '@/data/idx';

export function AnimatedTestimonialsDemo() {
  return (
    <div className="p-4 overflow-hidden">
      <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        Discover and Solve Real-World Programming Challenges{' '}
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-green-400 via-blue-500 to-purple-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">tailored for developers like you.</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 py-4">
            <span className="">tailored for developers like you.</span>
          </div>
        </div>
      </h2>
      <AnimatedTestimonials testimonials={programmingQuestions} />
    </div>
  );
}
