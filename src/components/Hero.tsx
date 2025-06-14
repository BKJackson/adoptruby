import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <Image
          src="/images/ruby/hero.jpg"
          alt="Ruby the dog"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Meet Ruby
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            A loving companion looking for her forever home
          </p>
          <a
            href="#adopt"
            className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Adopt Ruby
          </a>
        </div>
      </div>
    </div>
  )
} 