import Logo from '@/components/Logo'
import Button from '@/components/Button'
import Link from 'next/link'

export default function SignUp() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-md w-full">
        <Logo />
        <h1 className="text-2xl font-bold">Choose Registration Type</h1>
        
        <div className="space-y-4">
          <Link href="/signup/student" className="block">
            <Button variant="primary" className="w-full">
              Register as Student
            </Button>
          </Link>
          <Link href="/signup/teacher" className="block">
            <Button variant="primary" className="w-full">
              Register as Teacher
            </Button>
          </Link>
          <Link href="/">
            <Button variant="link">Back to Home</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}