import Link from "next/link"
import { FootprintsIcon as Shoe, Instagram, Twitter, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40 w-full">
      <div className="container mx-auto flex flex-col gap-6 py-8">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Shoe className="h-6 w-6" />
              <span className="text-xl font-bold">Kicks Klinik</span>
            </Link>
            <p className="text-sm text-muted-foreground">Revive. Restore. Reimagine.</p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-extrabold">Navigation</h3>
              <nav className="flex flex-col gap-2">
                <Link href="/" className="text-sm hover:underline">
                  Home
                </Link>
                <Link href="/about" className="text-sm hover:underline">
                  About Us
                </Link>
                <Link href="/services" className="text-sm hover:underline">
                  Services
                </Link>
                <Link href="/team" className="text-sm hover:underline">
                  Team
                </Link>
              </nav>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-extrabold">Services</h3>
              <nav className="flex flex-col gap-2">
                <Link href="/services#cleaning" className="text-sm hover:underline">
                  Cleaning
                </Link>
                <Link href="/services#restoration" className="text-sm hover:underline">
                  Restoration
                </Link>
                <Link href="/services#customization" className="text-sm hover:underline">
                  Customization
                </Link>
                <Link href="/services#protection" className="text-sm hover:underline">
                  Protection
                </Link>
              </nav>
            </div>
            <div className="flex flex-col gap-2 col-span-2 sm:col-span-1 mt-6 sm:mt-0">
              <h3 className="text-sm font-extrabold">Contact</h3>
              <p className="text-sm">Jl. Pancawarga I</p>
              <p className="text-sm">Jatinegara, 13410</p>
              <p className="text-sm">fauzansiswantoro@gmail.com</p>
              <p className="text-sm">(+62) 812-9623-8548</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Fauzan Siswantoro. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="https://www.instagram.com/fauzansiswantoro1/?hl=en" className="text-muted-foreground hover:text-foreground">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://github.com/fauzansiswantoro1" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
              <span className="sr-only">Github</span>
            </Link>
            <Link href="https://x.com/Fa_ojan" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
