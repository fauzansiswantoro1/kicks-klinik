import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Clock, Users, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Kicks Klinik</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  We're more than just a sneaker cleaning service. We're passionate sneakerheads dedicated to preserving
                  and enhancing your prized footwear collection.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/about.jpg"
                width={600}
                height={400}
                alt="Kicks Klinik team"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Story</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From humble beginnings to becoming the premier sneaker care destination.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Founded in 2025</h3>
                <p className="text-muted-foreground">
                  Started as a small workshop by Fauzan with a passion for sneakers and a vision to provide premium
                  care services.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Growing Team</h3>
                <p className="text-muted-foreground">
                  Expanded to a team of skilled technicians, each bringing unique expertise in different aspects of
                  sneaker care.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Community Focus</h3>
                <p className="text-muted-foreground">
                  Built a loyal community of sneaker enthusiasts through quality service, education, and events.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <p className="text-muted-foreground">
              What began as a small operation in a garage has grown into the city's most trusted sneaker care service.
              Our founders, Fauzan, combined their backgrounds in IT field and passion about sneaker to
              develop techniques that clean and restore sneakers without compromising their integrity.
            </p>
            <p className="text-muted-foreground">
              In 2025, we expanded to our current location, adding customization services and launching our own line of
              premium sneaker care products. Throughout our growth, we've maintained our commitment to quality,
              attention to detail, and exceptional customer service.
            </p>
          </div>
        </div>
      </section>

      {/* Team Overview */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Leadership Team</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Meet the passionate individuals behind Kicks Klinik.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-1">
  
            <Card>
              <CardContent className="p-4 sm:p-6 flex flex-col items-center text-center space-y-4">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
                  <Image
                    src="/fauzan.jpeg"
                    fill
                    alt="Fauzan Siswantoro"
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Fauzan Siswantoro</h3>
                  <p className="text-sm text-muted-foreground">Founder & Creative Director</p>
                </div>
                <p className="text-muted-foreground text-sm">
                  Fauzan leads our customization department, combining her IT background with a passion for
                  sneaker culture to create unique content and website.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center">
            <Link href="/team">
              <Button size="lg">Meet Our Full Team</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Culture & Values</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The principles that guide everything we do at Kicks Klinik.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <h3 className="text-xl font-bold">Passion for Sneakers</h3>
                    </div>
                    <p className="text-muted-foreground">
                      We're sneakerheads first and foremost, with a genuine love for footwear culture.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <h3 className="text-xl font-bold">Attention to Detail</h3>
                    </div>
                    <p className="text-muted-foreground">
                      We treat every pair with meticulous care, focusing on the smallest details.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <h3 className="text-xl font-bold">Continuous Learning</h3>
                    </div>
                    <p className="text-muted-foreground">
                      We're always researching new techniques and materials to improve our services.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <h3 className="text-xl font-bold">Community Engagement</h3>
                    </div>
                    <p className="text-muted-foreground">
                      We actively participate in and support the local sneaker community.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/team-photo.jpg"
                width={400}
                height={400}
                alt="Kicks Klinik team working"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      
    </div>
  )
}
