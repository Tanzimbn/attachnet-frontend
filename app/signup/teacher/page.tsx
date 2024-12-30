'use client'
import { useState, FormEvent } from 'react'
import Logo from '@/components/Logo'
import Button from '@/components/Button'
import Input from '@/components/Input'
import Link from 'next/link'
import type { TeacherFormData } from '@/types'

export default function TeacherSignUp() {
  const [formData, setFormData] = useState<TeacherFormData>({
    name: '',
    email: '',
    password: '',
    contactNumber: ''
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="space-y-6 max-w-md w-full">
        <div className="text-center">
          <Logo />
          <h1 className="text-2xl font-bold mt-6">Teacher Registration</h1>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Full Name"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <Input
            label="Email"
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <Input
            label="Password"
            id="password"
            type="password"
            required
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
          <Input
            label="Contact Number"
            id="contactNumber"
            type="tel"
            required
            value={formData.contactNumber}
            onChange={(e) => setFormData({...formData, contactNumber: e.target.value})}
          />
          
          <Button type="submit" variant="primary" className="w-full">
            Register
          </Button>
        </form>
        
        <div className="text-center">
          <Link href="/">
            <Button variant="link">Back to Home</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}