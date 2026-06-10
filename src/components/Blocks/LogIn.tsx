import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"

type LogInProps = {
  email: string;
  password: string;
  handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setError: React.Dispatch<React.SetStateAction<string>>;
};

function LogIn({email, password, handleEmail, handlePassword, setError}:LogInProps) {
    const navigate = useNavigate()
    const {login} = useAuth()

    const inputClass = `bg-white text-black px-2 py-0.5 rounded-xs`
    const labelClass = `flex flex-col w-fit items-start mb-5`
    function handleSubmit(e){
         alert("submitted");
        const fakeUsers = JSON.parse(localStorage.getItem('users') || '[]' ) 
        e.preventDefault()

        console.log(fakeUsers)
        const user = fakeUsers.find((u) => u.email === email && u.password === password)
        console.log(user)

        if(!user){
            setError('Invalid email or password')
            return
        }

        login()
        navigate("/home");
    }

  return (
<form className="w-fit py-7 px-10 rounded-sm flex flex-col items-center justify-center bg-amber-950" onSubmit={handleSubmit}>
        <label className={labelClass}> Email:
          <input type="email" className={inputClass} value={email} onChange={handleEmail}/>
        </label>
        <label className={labelClass}> Password:
          <input type='password' className={inputClass} value={password} onChange={handlePassword}/>
        </label>
        <button type="button" onClick={handleSubmit}>Login</button>
      </form>
  )
}
export default LogIn