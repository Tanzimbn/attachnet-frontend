'use client'
import { useState, FormEvent } from 'react'
import Logo from '@/components/Logo'
import Button from '@/components/Button'
import Input from '@/components/Input'
import Link from 'next/link'
import type { LoginFormData } from '@/types'

export default function Login() {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: ''
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
          <h1 className="text-2xl font-bold mt-6">Login</h1>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
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
          
          <Button type="submit" variant="primary" className="w-full">
            Login
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