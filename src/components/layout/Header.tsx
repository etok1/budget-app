import { Link } from "react-router-dom"
import { useFirstVisit } from "../../hooks/FirstVisit"


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
const {hasVisited} = useFirstVisit()

  return (
    <header className="flex items-center justify-between py-3">
        <h1 className="uppercase">b<span className="text-green-500">v</span>dget</h1>
    
        {!hasVisited ? <p className="cursor-pointer">Dashboard</p>: <Link to={'/'}>Dashboard</Link>}
        <nav className="flex items-center gap-5">
            {links.map((link) => (
                 <>{!hasVisited && <p className="cursor-pointer">{link.name}</p>}
                 {hasVisited && <Link to={link.link}>{link.name}</Link>}</>
            ))}
        </nav>
    </header>
  )
}

export default Header