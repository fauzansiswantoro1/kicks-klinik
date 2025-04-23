import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive sneaker care solutions tailored to your collection's needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cleaning Service */}
      <section id="cleaning" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Premium Cleaning</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Our signature cleaning service removes dirt, stains, and odors while preserving your sneakers'
                  materials and finish.
                </p>
              </div>
              <ul className="grid gap-2 py-4">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Deep cleaning of all surfaces including uppers, midsoles, and outsoles</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Material-specific treatments for leather, suede, canvas, knit, and more</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Lace cleaning or replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Deodorizing treatment</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Finishing touches and quality inspection</span>
                </li>
              </ul>
              <div className="space-y-2">
                <p className="font-bold">Pricing:</p>
                <p className="text-muted-foreground">Basic Clean: Rp 50.0000 | Premium Clean: Rp 120.0000 | Deluxe Clean: Rp 200.000</p>
              </div>
           
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/cleaning.jpg"
                width={600}
                height={400}
                alt="Sneaker cleaning process"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Restoration Service */}
      <section id="restoration" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex items-center justify-center order-last lg:order-first">
              <Image
                src="/restoration.jpg"
                width={600}
                height={400}
                alt="Sneaker restoration process"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Restoration</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Bring your worn or damaged sneakers back to life with our comprehensive restoration services.
                </p>
              </div>
              <ul className="grid gap-2 py-4">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Sole regluing and repair</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Color restoration and touch-ups</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Suede and nubuck revitalization</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Midsole repainting and restoration</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Structural repairs and reinforcement</span>
                </li>
              </ul>
              <div className="space-y-2">
                <p className="font-bold">Pricing:</p>
                <p className="text-muted-foreground">
                  Starting at Rp 75.000 (Final price depends on condition and work required)
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Customization Service */}
      <section id="customization" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Customization</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Express your unique style with our custom design and painting services.
                </p>
              </div>
              <ul className="grid gap-2 py-4">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Custom artwork and designs</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Color changes and dye jobs</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Material swaps and additions</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Personalized text and logos</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Protective coating for longevity</span>
                </li>
              </ul>
              <div className="space-y-2">
                <p className="font-bold">Pricing:</p>
                <p className="text-muted-foreground">Starting at Rp 1.500.000 (Final price depends on design complexity)</p>
              </div>
              
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/custom-sneaker.jpg"
                width={600}
                height={400}
                alt="Sneaker customization"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Protection Service */}
      <section id="protection" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex items-center justify-center order-last lg:order-first">
              <Image
                src="/sneaker-protection.jpg"
                width={600}
                height={400}
                alt="Sneaker protection"
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Protection</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Preserve your sneakers and protect them from future damage with our premium protection services.
                </p>
              </div>
              <ul className="grid gap-2 py-4">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Water and stain repellent treatments</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>UV protection to prevent fading</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Anti-bacterial treatments</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Material-specific conditioners and protectants</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Preventative maintenance advice</span>
                </li>
              </ul>
              <div className="space-y-2">
                <p className="font-bold">Pricing:</p>
                <p className="text-muted-foreground">Basic Protection: Rp 75.000 | Premium Protection: Rp 150.000</p>
                <p className="text-muted-foreground">(Add-on to any cleaning or restoration service: Rp 60.000)</p>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Service Packages</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Save with our bundled service packages designed for different needs.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-4 sm:p-6 flex flex-col space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold">Essential Care</h3>
                <p className="text-2xl sm:text-3xl font-bold">Rp 125.000</p>
                <p className="text-muted-foreground text-sm">Basic cleaning + Basic protection</p>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Surface cleaning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Deodorizing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Water repellent treatment</span>
                  </li>
                </ul>
                
              </CardContent>
            </Card>
            <Card className="border-primary md:scale-105 md:shadow-lg">
              <CardContent className="p-4 sm:p-6 flex flex-col space-y-4">
                <div className="bg-primary text-primary-foreground text-xs sm:text-sm font-medium py-1 px-3 rounded-full w-fit mx-auto">
                  Most Popular
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">Premium Care</h3>
                <p className="text-2xl sm:text-3xl font-bold">Rp 250.000</p>
                <p className="text-muted-foreground text-sm">Premium cleaning + Premium protection</p>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Deep cleaning of all surfaces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Lace cleaning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Deodorizing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Advanced protection treatment</span>
                  </li>
                </ul>
               
              </CardContent>
            </Card>
            <Card className="md:col-span-2 lg:col-span-1">
              <CardContent className="p-4 sm:p-6 flex flex-col space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold">Collector's Care</h3>
                <p className="text-2xl sm:text-3xl font-bold">Rp 350.000</p>
                <p className="text-muted-foreground text-sm">Deluxe cleaning + Restoration + Premium protection</p>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Complete deep cleaning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Minor restoration work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Color touch-ups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Premium protection treatment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Lace replacement</span>
                  </li>
                </ul>
                
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Revive Your Kicks?</h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Call us today and let our experts take care of your prized sneaker collection.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              
              <Button size="lg" variant="secondary">
                <Link href="https://wa.me/6281296238548">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
