import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const topic = [
  {
    text: "pythan",
    img: "/py.png",
    desc: "lets discuss about python",
    slug: "python-disscussion",

  },
  {
    text: "javascript",
    img: "/js.png",
    desc: "lets discuss about javascript",
    slug: "javascript-discussion",
  },
  {
    text: "java",
    img: "/java.png",
    desc: "lets discuss about java",
    slug: "java-discussion",
  },
  {
    text: "c",
    img: "/c++.png",
    desc: "lets discuss about c",
    slug: "c-discussion",
  },
  {
    text: "c#",
    img: "/c.png",
    desc: "lets discuss about c#",
    slug: "csharp-discussion",
  },
  {
    text: "php",
    img: "/php.png",
    desc: "lets discuss about php",
    slug: "php-discussion",
  },
  {
    text: "html",
    img: "/html.png",
    desc: "lets discuss about html",
    slug: "html-discussion",
  },
  {
    text: "css",
    img: "/css.png",
    desc: "lets discuss about css",
    slug: "css-discussion",
  },
]

const Forums = () => {
  return (
    <div className='container mx-auto bg-white '>
      <h1 className='text-3xl text-center text-black py-8 text-bold'>Discussion Forums</h1>
      <div className='flex flex-col items-center justify-center'>
        {topic.map((item, index) => (
          <div key={index} className="flex items-center w-[450px]  bg-gray-400 text-black shadow-lg rounded-lg p-4 mb-4">
            {/* <Image src={item.img} alt={item.text} width={64} height={64} className=' text-black  rounded-full mr-4'/> */}
            <img src={item.img} alt={item.text} className="w-16 text-black h-16 rounded-full mr-4" />
            <div>
              <h2 className="text-xl text-black font-semibold">{item.text}</h2>
              <p className="text-black">{item.desc}</p>
            </div>
            <Link href={`/forum/${item.slug}`} className="ml-auto">
              <Button className="ml-auto px-4 py-2 rounded hover:bg-blue-400">
                Discuss now
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Forums
