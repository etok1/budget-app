import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"


interface financeProps {
    header: string,
    link: string,
}
const headerContainer = `flex items-center justify-between w-full`
const buttonContainer = ` text-sm text-gray-700 cursor-pointer`


function FinanceBlock({ header, link}:financeProps) {

  return (

          <div className={headerContainer}>
            <h2 className="font-bold text-xl">{header}</h2> 
            <button className={buttonContainer}><Link to={link} className="flex items-center gap-1.5 transition-all duration-150 ease-in-out hover:text-gray-900">View all <ChevronRight size={15}/></Link></button>
          </div>
       
  )
}

export default FinanceBlock