import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, ArrowRight, Star } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none">
                  Premium Sneaker Care for Your Prized Kicks
                </h1>
                <p className="max-w-[600px] text-muted-foreground text-sm sm:text-base md:text-xl">
                  At Kicks Klinik, we're passionate about sneakers. Our expert technicians provide professional
                  cleaning, restoration, and customization services to keep your collection looking fresh.
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Link href="/services">
                  <Button size="lg" className="w-full sm:w-auto gap-1">
                    Our Services
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center mt-8 lg:mt-0">
              <Image
                src="/hero-bg.jpg"
                width={550}
                height={550}
                alt="Premium sneaker care services"
                className="rounded-lg object-cover max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the sections - I'll update just the container classes for brevity */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Kicks Klinik</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Founded by sneaker enthusiasts in 2025, Kicks Klinik has grown from a small workshop to the premier
                destination for sneaker care. Our team combines technical expertise with a genuine passion for footwear
                culture.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <h3 className="text-xl font-bold">Expert Technicians</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Our staff is trained in the latest sneaker care techniques and technologies.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <h3 className="text-xl font-bold">Premium Products</h3>
                    </div>
                    <p className="text-muted-foreground">
                      We use only the highest quality, sneaker-safe cleaning products and materials.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <h3 className="text-xl font-bold">Satisfaction Guaranteed</h3>
                    </div>
                    <p className="text-muted-foreground">
                      If you're not completely satisfied with our work, we'll make it right.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/sneaker-clean.jpg"
                width={400}
                height={400}
                alt="Kicks Klinik workshop"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <Link href="/about">
              <Button variant="outline" size="lg">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
              <p className="max-w-[900px] text-muted-foreground text-sm sm:text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From basic cleaning to complete restoration and custom designs, we offer comprehensive care for all your
                sneakers.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3">
            <Card>
              <CardContent className="p-4 sm:p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M3 11v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3" />
                    <path d="M12 19H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3.83" />
                    <path d="m3 11 7.77-6.04a2 2 0 0 1 2.46 0L21 11H3Z" />
                    <path d="M12.97 19.77 7 15h12.5l-3.75 4.5a2 2 0 0 1-2.78.27Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Premium Cleaning</h3>
                <p className="text-muted-foreground text-sm">
                  Deep cleaning service that removes dirt, stains, and odors while preserving materials.
                </p>
                <Link href="/services#cleaning">
                  <Button variant="outline" size="sm" className="w-full sm:w-auto">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 sm:p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M2 12h20" />
                    <path d="M2 12a10 10 0 0 1 20 0" />
                    <path d="M2 12a10 10 0 0 0 20 0" />
                    <path d="M12 2v20" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Restoration</h3>
                <p className="text-muted-foreground text-sm">
                  Bring worn or damaged sneakers back to life with our expert restoration services.
                </p>
                <Link href="/services#restoration">
                  <Button variant="outline" size="sm" className="w-full sm:w-auto">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card className="sm:col-span-2 md:col-span-1">
              <CardContent className="p-4 sm:p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="m2 2 8 8" />
                    <path d="M6 18H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-9" />
                    <path d="M8 18v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
                    <path d="M18 12V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v6" />
                    <path d="M10 16v4" />
                    <path d="M14 16v4" />
                    <path d="M2 12v-2" />
                    <path d="M22 12v-2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Customization</h3>
                <p className="text-muted-foreground text-sm">
                  Express your unique style with our custom design and painting services.
                </p>
                <Link href="/services#customization">
                  <Button variant="outline" size="sm" className="w-full sm:w-auto">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center">
            <Link href="/services">
              <Button size="lg" className="w-full sm:w-auto">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Clients Say</h2>
              <p className="max-w-[900px] text-muted-foreground text-sm sm:text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Don't just take our word for it. Here's what our satisfied customers have to say about Kicks Klinik.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Jordan M.",
                quote:
                  "I brought in my vintage Air Jordans that I thought were beyond saving. The team at Kicks Klinik worked magic and now they look almost new!",
                rating: 5,
              },
              {
                name: "Samantha K.",
                quote:
                  "The custom design they created for my sneakers is absolutely stunning. Everyone asks where I got them. Worth every penny!",
                rating: 5,
              },
              {
                name: "Marcus T.",
                quote:
                  "Fast service, amazing results. My collection has never looked better. I won't trust my kicks with anyone else.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-4 sm:p-6 flex flex-col space-y-4">
                  <div className="flex">
                    {Array(testimonial.rating)
                      .fill(null)
                      .map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                  </div>
                  <p className="flex-1 text-muted-foreground text-sm">"{testimonial.quote}"</p>
                  <p className="font-medium">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Revive Your Kicks?</h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Call us today and let our experts take care of your prized sneaker collection.
              </p>
            </div>
           
          </div>
        </div>
      </section>
    </div>
  )
}
