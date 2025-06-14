import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Carousel, CarouselItem, CarouselContent } from "@/components/ui/carousel"
import companies from '../data/companies.json'
import Autoplay from "embla-carousel-autoplay"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import faqs from '../data/faq.json'


const LandingPage = () => { 
  return (
    <main className="flex flex-col gap-5 sm:gap-10 py-5 sm:py-10">
      <section className="text-center">
        <h1 className="flex flex-col items-center justify-center gradient-title text-2xl font-extrabold sm:text-4xl lg:text-6xl tracking-tighter py-4">Unleash Your Dream Job{" "}
          <span className="flex items-center gap-2 sm:gap-6">
            with{" "}
            <img src="/logo.png" alt="hirrd Logo" className="h-14 sm:h-24 lg:h-32" />
          </span>
        </h1> 
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Discover Jobs That Match Your Passion or Connect with top talent to grow your team
        </p>
      </section>
      <div className="flex gap-6 justify-center">
        <Link to="/jobs-listing">
          <Button variant="blue" size="lg">
            Find Job
          </Button>
        </Link>
        <Link to="/post-job">
          <Button variant="destructive" size="lg">
            Post a Job
          </Button>
        </Link>
      </div>

      {/* {Carousel} */}
      <Carousel plugins={[Autoplay({ delay: 2000})]} 
      className="w-full py-10 px-10">
      <CarouselContent className="flex gap-5 sm:gap-20 items-center">
        {companies.map(({name,id,path})=>
        {
          return <CarouselItem key={id} className="basis-1/3 lg:basis-1/5"> 
            <img src={path} alt={name} className="h-9 sm:h-14 object-contain"/>
          </CarouselItem>
        })}
      </CarouselContent>
    </Carousel>
    {/* {Banner} */}
    <img src="/banner.jpeg" alt="banner" className="w-full"/>
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
      <CardHeader>
        <CardTitle className="font-extrabold">For Job Seekers</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Search and apply for jobs, track applications, more.</p>
      </CardContent>
    </Card>
      <Card>
      <CardHeader>
        <CardTitle className="font-extrabold">For Recruiters</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Post jobs,manage applications, find the best candidates.</p>
      </CardContent>
    </Card>
    </section>
    <Accordion type="single" collapsible>
      {faqs.map((faq,index) => {
        return (<AccordionItem key={index} value={`item-${index+1}`}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
        )
      })}
    </Accordion>
    </main>
  )
}

export default LandingPage