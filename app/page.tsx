import Logo from '@/components/Logo'
import Button from '@/components/Button'
import Card from '@/components/Card'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <div className="text-center space-y-6">
          <Logo />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Welcome to AttchNet
          </h1>
          <p className="text-gray-600">Helper for Industrial Attachment</p>
          
          <div className="space-y-4">
            <Link href="/login" className="block">
              <Button variant="primary" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                Login
              </Button>
            </Link>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white/80 text-gray-500 rounded-full">or</span>
              </div>
            </div>
            
            <Link href="/signup" className="block">
              <Button variant="secondary" className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </main>
  )
}