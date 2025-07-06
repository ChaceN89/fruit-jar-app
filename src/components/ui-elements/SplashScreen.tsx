
interface SplashScreenProps {
  transitionOut?: boolean
}

export default function SplashScreen({ transitionOut }: SplashScreenProps) {

  return (
    <div
      className={`
        fixed inset-0 z-50 flex flex-col items-center justify-center 
        bg-gradient-to-br from-teal-300 via-orange-100 to-pink-200
        transition-all duration-[1000ms] ease-in-out
        ${transitionOut ? 'opacity-0 pointer-events-none scale-[300%]' : 'opacity-100'}
      `}
    >
      <img src={"/fruit-logo.png"} alt="Fruit Logo" className="w-40 h-40 mb-4" />
      <p className="text-xl font-semibold text-gray-700 loading-dots">Loading</p>
    </div>
  )
}
