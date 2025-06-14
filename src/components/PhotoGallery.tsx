'use client'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'

const images = [
  '/images/ruby/Ruby_sofa.jpg',
  '/images/ruby/RubySaturday.jpg',
  '/images/ruby/RubySnoozing.jpg',
  // Add more image paths here
]

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Photo Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative h-64 cursor-pointer"
              onClick={() => setSelectedImage(src)}
            >
              <Image
                src={src}
                alt={`Ruby photo ${index + 1}`}
                width={400}
                height={256}
                className="object-cover rounded-lg w-full h-full"
              />
            </div>
          ))}
        </div>
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative w-full h-full max-w-4xl max-h-[90vh] m-4">
              <Image
                src={selectedImage}
                alt="Ruby"
                fill
                className="object-contain"
              />
              <button
                className="absolute top-4 right-4 text-white text-4xl"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
} 