"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, Linkedin, MapPin } from "lucide-react"
import Link from "next/link"

interface TeamMember {
  name: {
    first: string
    last: string
  }
  email: string
  phone: string
  picture: {
    large: string
  }
  location: {
    city: string
    country: string
  }
  login: {
    uuid: string
  }
}

export default function TeamPage() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=8&seed=kicks")
        const data = await response.json()
        setTeamMembers(data.results)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching team members:", error)
        setLoading(false)
      }
    }

    fetchTeamMembers()
  }, [])

  // Team roles to assign to random users
  const teamRoles = [
    "Head of Cleaning Services",
    "Senior Restoration Specialist",
    "Custom Design Artist",
    "Client Relations Manager",
    "Materials Specialist",
    "Quality Control Supervisor",
    "Sneaker Authentication Expert",
    "Workshop Manager",
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Team</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The passionate sneaker experts behind Kicks Klinik.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          {loading ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {teamMembers.map((member, index) => (
                <Card key={member.login.uuid} className="overflow-hidden">
                  <div className="aspect-square relative">
                    <Image
                      src={member.picture.large || "/placeholder.svg"}
                      alt={`${member.name.first} ${member.name.last}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4 sm:p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold truncate">{`${member.name.first} ${member.name.last}`}</h3>
                        <p className="text-sm text-muted-foreground">{teamRoles[index]}</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                          <span className="text-xs sm:text-sm truncate">{member.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                          <span className="text-xs sm:text-sm">{member.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                          <span className="text-xs sm:text-sm truncate">{`${member.location.city}, ${member.location.country}`}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full gap-1">
                        <Linkedin className="h-4 w-4" />
                        Connect
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Join Our Team */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Team</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  We're always looking for talented, passionate individuals to join the Kicks Klinik family.
                </p>
              </div>
              <ul className="grid gap-2 py-4">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1 flex items-center justify-center">
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
                      className="h-4 w-4 text-primary"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <span>Competitive salary and benefits</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1 flex items-center justify-center">
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
                      className="h-4 w-4 text-primary"
                    >
                      <path d="M12 2v20" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <span>Professional development opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1 flex items-center justify-center">
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
                      className="h-4 w-4 text-primary"
                    >
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                    </svg>
                  </div>
                  <span>Employee sneaker discounts and perks</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1 flex items-center justify-center">
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
                      className="h-4 w-4 text-primary"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                  </div>
                  <span>Continuous learning and training</span>
                </li>
              </ul>
              <div>
              <Button size="lg" variant="outline">
                <Link href="https://wa.me/6281296238548">Contact us to join</Link>
              </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/team-photo.jpg"
                width={600}
                height={400}
                alt="Team together"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Have Questions?</h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our team is here to help. Reach out to us with any questions about our services or career opportunities.
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
