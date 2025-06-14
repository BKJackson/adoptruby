'use client'
import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function AdoptionForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    livingSituation: '',
    experience: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      setSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        livingSituation: '',
        experience: '',
      })
    } catch (err) {
      setError('Something went wrong. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="adopt" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Interested in Adopting Ruby?
        </h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 text-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 text-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 text-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Living Situation
            </label>
            <textarea
              name="livingSituation"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 text-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
              rows={3}
              value={formData.livingSituation}
              onChange={handleChange}
              placeholder="Do you own or rent? Do you have a yard? Other pets?"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Previous Dog Experience
            </label>
            <textarea
              name="experience"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 text-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
              rows={3}
              value={formData.experience}
              onChange={handleChange}
              placeholder="Tell us about your experience with dogs..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Additional Message
            </label>
            <textarea
              name="message"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-100 text-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Anything else you'd like us to know..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit Application'}
          </button>
          {success && (
            <p className="text-green-600 text-center mt-4">Thank you for your interest in Ruby! We will contact you soon.</p>
          )}
          {error && (
            <p className="text-red-600 text-center mt-4">{error}</p>
          )}
        </form>
      </div>
    </section>
  )
} 