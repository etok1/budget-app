import { ChevronRight } from "lucide-react"


interface financeProps {

    header: string,
}
const headerContainer = `flex items-center justify-between w-full`
const buttonContainer = `flex items-center gap-1.5 text-sm text-gray-700 cursor-pointer`


function FinanceBlock({ header}:financeProps) {

  return (

          <div className={headerContainer}>
            <h2 className="font-bold text-xl">{header}</h2> 
            <button className={buttonContainer}>View all <ChevronRight size={15}/></button>
          </div>
       
  )
}

export default FinanceBlock