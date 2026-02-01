import { HandCoins } from "lucide-react"
import { ONBOARDING_KEY } from "../../App"
import { useNavigate } from "react-router-dom"

function Starter() {
const navigate = useNavigate()

const handleStart = () => {
    localStorage.setItem(ONBOARDING_KEY, 'true')

    navigate('/home')
}

  return (
    <div className="flex h-screen flex-col items-center text-white font-poppins px-4">
  <div className="flex flex-col items-center justify-center flex-1 gap-3">
    <HandCoins size={120} strokeWidth={1} />

    <h1 className="mt-10">Hello</h1>

    <p className="text-center text-gray-400">
      Track your income and expenses in one place.
      <br />
      <span className="font-semibold text-white">Stay aware</span> of your balance and build better money habits.
    </p>

    <button onClick={handleStart} className="w-fit mt-2 text-sm bg-purple-500 py-1.5 px-4 rounded-md transition-all duration-150 ease-in-out hover:bg-purple-700 ">
      Start
    </button>
  </div>


  <p className="pb-4 text-xs text-gray-600">
    By continuing in, you accept the <span className="text-white">privacy policy and terms of use.</span>
  </p>
</div>

  )
}

export default Starter
