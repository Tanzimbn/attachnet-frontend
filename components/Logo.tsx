import Image from 'next/image'

const Logo: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <Image
        src="/logo.png"
        alt="Logo"
        width={80}
        height={80}
        className="rounded-full"
      />
      <span className="text-xl font-bold text-black">AttachNet</span>
    </div>
  )
}

export default Logo