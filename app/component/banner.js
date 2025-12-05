import Image from 'next/image'

export default function Banner({ title, subtitle, imageSrc = "/test1.jpg", imageAlt = "Banner image" }) {
  return (
    <div className="relative w-full h-96 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-center max-w-3xl drop-shadow-md">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}
