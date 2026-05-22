interface budgetProps{
header: string,
price: number,
color: string
}

function BudgetBlock({ header, price, color}:budgetProps) {

  return (

          <div className={`border-l-4 px-2 flex flex-col items-start justify-evenly text-[#242424]`} style={{ borderLeftColor: color }}>
                  <h4 className="text-sm ">{header}</h4>
                  <p className="font-bold text-md">${price}</p>
                </div>
       
  )
}
export default BudgetBlock