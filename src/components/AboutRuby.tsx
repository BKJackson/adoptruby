import React from 'react'

export default function AboutRuby() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Ruby</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Ruby's Story</h3>
            <p className="text-gray-600 mb-4">
              Ruby was found as a stray and unchipped. She was emaciated and appeared to have been recently nursing puppies. None of the shelters would take her because she was a large dog. I got her vaccinated, neutered, chipped, and dewormed. She is a very sweet girl who loves to cuddle and play. She has been to doggy daycare and gets along with other dogs, though she can be on the shy side. She loves walks and car rides. She is crate trained. 
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Ruby's Personality</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Age: 2-3 years old</li>
              <li>Breed: American Pit Bull Terrier</li>
              <li>Size: 75 lbs</li>
              <li>Energy Level: Medium to High</li>
              <li>Good with: Dogs, Kids, Car Rides, Walks</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
} 