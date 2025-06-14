import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutRuby from '../components/AboutRuby'
import PhotoGallery from '../components/PhotoGallery'
import AdoptionForm from '../components/AdoptionForm'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutRuby />
      <PhotoGallery />
      <AdoptionForm />
      <Footer />
    </main>
  )
} 