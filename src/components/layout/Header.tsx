import { Link } from "react-router-dom"
import { useFirstVisit } from "../../hooks/FirstVisit"
import { UserProfileIcon } from "../Blocks/UserProfileIcon"
import { useAuth } from "../../context/AuthContext"


const links = [
    {
        name: 'Pots',
        link:'/pots'
    },
    {
        name: 'Budget',
        link:'/budget'
    },
    {
        name: 'Transaction',
        link:'/transactions'
    },
]

function Header() {
const {isAuthenticated} = useAuth()

  return (
    <header className="sticky top-0 flex items-center justify-between py-3">
        <h1 className="uppercase">b<span className="text-green-500">v</span>dget</h1>
    
        {!isAuthenticated ? <p className="cursor-pointer">Dashboard</p>: <Link to={'/'}>Dashboard</Link>}
        <nav className="flex items-center gap-5">
            {links.map((link) => (
                 <>{!isAuthenticated && <p className="cursor-pointer">{link.name}</p>}
                 {isAuthenticated && <Link to={link.link}>{link.name}</Link>}</>
            ))}
            
        </nav>
        <UserProfileIcon/>
    </header>
  )
}

export default Header