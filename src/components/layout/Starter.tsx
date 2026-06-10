import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import LogIn from "../Blocks/LogIn";

const fakeUsers = [
  {email: 'johndoe@gmail.com', password: '112233'}
]


function Starter() {


const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState('')
const {isAuthenticated} = useAuth()

if(isAuthenticated){
  return <Navigate to={'/home'}/>
}

function handleEmail(e) {
  setEmail(e.target.value)
}

function handlePassword(e) {
  setPassword(e.target.value)
}


function handleError(message) {
  setError(message)
}

  return (
    <div className="flex items-center justify-center w-full h-[calc(100vh-64px)]">
      {error && <p className="text-red-600">{error}</p>}
      <LogIn email={email}  password={password} handleEmail={handleEmail} handlePassword={handlePassword} setError={handleError}/>
    </div>
  )
}

export default Starter





















// function Starter() {
// const navigate = useNavigate()
// const {hasVisited, markFirstVisit} = useFirstVisit()

// useEffect(() => {
//   if(hasVisited){
//     navigate('/home', {replace: true})
//   }
//   // eslint-disable-next-line react-hooks/exhaustive-deps
// }, [hasVisited])

// const handleStart = () => {
//     markFirstVisit()
// }

//   return (
//     <div className="flex h-screen flex-col items-center text-white font-poppins px-4">
//   <div className="flex flex-col items-center justify-center flex-1 gap-3">
//     <HandCoins size={120} strokeWidth={1} />

//     <h1 className="mt-10">Hello</h1>

//     <p className="text-center text-gray-400">
//       Track your income and expenses in one place.
//       <br />
//       <span className="font-semibold text-white">Stay aware</span> of your balance and build better money habits.
//     </p>

//     <button onClick={handleStart} className="w-fit mt-2 text-sm bg-purple-500 py-1.5 px-4 rounded-md transition-all duration-150 ease-in-out hover:bg-purple-700 ">
//       Start
//     </button>
//   </div>


//   <p className="pb-4 text-xs text-gray-600">
//     By continuing in, you accept the <span className="text-white">privacy policy and terms of use.</span>
//   </p>
// </div>

//   )
// }

// export default Starter
