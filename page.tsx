import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { NavigationBar } from "@/components/navigation-bar"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="w-full">
      <NavigationBar />
      {/* Hero Section */}
      <section className="bg-[#3749E9] px-4 py-16 md:py-24">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Your future in tech starts here
            </h1>
            <p className="text-white text-sm sm:text-base md:text-lg">
              Immersive Bootcamps in Web Development, UX/UI Design, and Data Analytics. Supercharge your career and join
              a global network of next-generation tech leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input className="bg-white" placeholder="Email address" />
              <Input className="bg-white" placeholder="Phone number" />
              <Button className="bg-[#6B4CE6] hover:bg-[#5B3CD6] text-white">Get Started</Button>
            </div>
          </div>
          <div className="relative aspect-square max-w-md mx-auto hidden md:block">
            <div className="absolute inset-0 bg-[#6B4CE6] rounded-[2rem] rotate-45 transform -translate-x-4 translate-y-4" />
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_URL}/placeholder.svg`}
              alt="Students learning"
              width={400}
              height={400}
              className="relative rounded-[2rem] object-cover"
            />
          </div>
        </div>
      </section>

      {/* What's New Section */}
      <section className="py-16 container mx-auto">
        <h2 className="text-2xl font-semibold mb-8">What's new at Ironhack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-4">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL}/placeholder.svg`}
                alt="Profile"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <h3 className="font-medium">Latest Update</h3>
                <p className="text-sm text-gray-600">Recent announcement</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 container mx-auto">
        <h2 className="text-2xl font-semibold mb-8">Join a global community</h2>
        <div className="flex flex-wrap gap-8 justify-center mb-16">
          {[1, 2, 3, 4].map((i) => (
            <Image
              key={i}
              src={`${process.env.NEXT_PUBLIC_BASE_URL}/placeholder.svg`}
              alt="Community member"
              width={64}
              height={64}
              className="rounded-full"
            />
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-[#3749E9]">18,000+</div>
            <div className="text-sm">GRADUATED STUDENTS</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#3749E9]">600+</div>
            <div className="text-sm">PARTNER COMPANIES</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#3749E9]">70+</div>
            <div className="text-sm">STUDENT NATIONALITIES</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#3749E9]">10</div>
            <div className="text-sm">CAMPUSES WORLDWIDE</div>
          </div>
        </div>
      </section>

      {/* Career Partners Section */}
      <section className="py-16 container mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-12">Your career partners, all the way</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL}/placeholder.svg`}
                alt="Career partner"
                width={80}
                height={80}
                className="rounded-full"
              />
              <div className="text-sm font-medium">Partner Name</div>
              <div className="text-xs text-gray-600">Position</div>
            </div>
          ))}
        </div>
      </section>

      {/* Bootcamp Section */}
      <section className="py-16 bg-[#3749E9]">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-white mb-8">Apply for your bootcamp</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="bg-white rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">Web development</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="rounded-full text-xs font-normal">
                        Full Time
                      </Badge>
                      <span className="text-sm text-gray-500">9 Weeks</span>
                    </div>
                    <div className="text-sm text-gray-500">Start: Jul 15</div>
                  </div>
                </div>
                <div className="bg-gray-50 p-4">
                  <Button className="w-full bg-[#6B4CE6] hover:bg-[#5B3CD6] text-white">APPLY</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Financing Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-[#3749E9] to-[#6B4CE6] rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-semibold mb-4">Get your bootcamp financed</h2>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="flex-grow">
                <p className="text-sm mb-2">We have multiple options to get your career started</p>
                <div className="flex gap-2">
                  <Button variant="secondary" className="rounded-full text-xs px-4">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="secondary" className="rounded-full w-10 h-10 p-0">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="secondary" className="rounded-full w-10 h-10 p-0">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-12">Experience life as an Ironhacker</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="overflow-hidden">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}/placeholder.svg`}
                  alt="Experience"
                  width={400}
                  height={300}
                  className="w-full object-cover"
                />
                <div className="p-4">
                  <Badge className="mb-2">Campus Life</Badge>
                  <h3 className="font-medium mb-2">Experience Title</h3>
                  <p className="text-sm text-gray-600">Short description of the experience</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Section */}
      <section className="py-16 container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold">Recommended for you</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="rounded-full">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              title: "UX/UI Design Course and Career Paths at Ironhack",
              image: "/placeholder.svg",
              tag: "UX/UI Design",
            },
            {
              title: "5 Great Jobs To Kick-Start Your Tech Career",
              image: "/placeholder.svg",
              tag: "Career Support",
            },
            {
              title: "What is a Tech Lead?",
              image: "/placeholder.svg",
              tag: "Web Dev",
            },
            {
              title: "Google Meet: What it means for remote learning",
              image: "/placeholder.svg",
              tag: "Remote Learning",
            },
          ].map((item, i) => (
            <Card key={i} className="overflow-hidden">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={300}
                height={200}
                className="w-full aspect-video object-cover"
              />
              <div className="p-4">
                <Badge variant="outline" className="mb-2 rounded-full">
                  {item.tag}
                </Badge>
                <h3 className="font-medium text-sm line-clamp-2">{item.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2B2B2B] text-white">
        <div className="container mx-auto py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Study with us!</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="#">Web Development</Link>
                </li>
                <li>
                  <Link href="#">Data Analytics</Link>
                </li>
                <li>
                  <Link href="#">UX/UI Design</Link>
                </li>
                <li>
                  <Link href="#">Cybersecurity</Link>
                </li>
                <li>
                  <Link href="#">Financial Analysis</Link>
                </li>
                <li>
                  <Link href="#">Digital Marketing</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Need some support?</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="#">Financial options</Link>
                </li>
                <li>
                  <Link href="#">FAQ</Link>
                </li>
                <li>
                  <Link href="#">Contact us</Link>
                </li>
                <li>
                  <Link href="#">Whistleblower channel</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Professional pages</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="#">Work with us</Link>
                </li>
                <li>
                  <Link href="#">Hire talent</Link>
                </li>
                <li>
                  <Link href="#">Blog</Link>
                </li>
                <li>
                  <Link href="#">Success stories</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <select className="bg-transparent border border-gray-700 rounded px-3 py-1 text-sm">
                <option>Change country</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Spain</option>
                <option>Germany</option>
              </select>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-300 hover:text-white">
                  <Image src="/placeholder.svg" alt="Instagram" width={20} height={20} />
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white">
                  <Image src="/placeholder.svg" alt="Facebook" width={20} height={20} />
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white">
                  <Image src="/placeholder.svg" alt="LinkedIn" width={20} height={20} />
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white">
                  <Image src="/placeholder.svg" alt="YouTube" width={20} height={20} />
                </Link>
              </div>
            </div>
            <div className="text-xs text-gray-400">
              <Link href="#">Legal notice</Link>
              <span className="mx-2">·</span>
              <Link href="#">Terms and conditions</Link>
              <span className="mx-2">·</span>
              <span>© 2024 Ironhack All Rights Reserved</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

