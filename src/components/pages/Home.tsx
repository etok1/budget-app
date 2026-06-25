// import PieChartWithPaddingAngle from "./charts/PieChart"
import { PiggyBank } from "lucide-react"
import InfoBlock from "../Blocks/InfoBlock"
import FinanceBlock from "../Blocks/FinanceBlock"
import TransactionBlock from "../Blocks/TransactionBlock"
import PieChartWithPaddingAngle from "../charts/PieChart"
import BudgetBlock from "../Blocks/BudgetBlock"
import { data } from "../../data"
import { useContext } from "react"
import { budgetContext } from "../../context/Context"



const sectionContainer = `bg-white px-10 py-5 flex flex-col items-start rounded-lg`
function Home() {
const {state} = useContext(budgetContext)

const totalBudget = state.budgets.reduce((acc, item) => {
      return acc + item.spent
},0)

const randomColor = () => {
  const colors = ['bg-red-600', 'bg-green-600', 'bg-blue-600', 'bg-purple-600', 'bg-yellow-600']

  const randomIndex = Math.floor(Math.random() * colors.length)

  return colors[randomIndex]
}

const sumIncome = () => {
  return state.transactions.reduce((sum, item) => {
    if(item.type === 'income'){
      return sum + item.amount
    }

    return sum
  }, 0)
}

const sumExpense = () => {
  return state.transactions.reduce((sum, item) => {
    if(item.type === 'expense'){
      return sum + item.amount
    }

    return sum
  }, 0)
}

const moneyCategoryData = [
  {
    category: 'Current valance',
    value: '1,678.00',
    isActive: true,
  },{
    category: 'Income',
    value: sumIncome(), isActive: false,
  },{
    category: 'Expenses',
    value: sumExpense(), isActive: false,
  },
]

  return (
    <div className="mt-10 flex h-screen flex-col items-start justify-start text-white font-poppins px-4">
      <h1>Overview</h1>
      
      <div className="flex items-center justify-between mt-10 w-full">
        {moneyCategoryData.map((item) => (
          <InfoBlock category={item.category} value={item.value} isActive={item.isActive}/>
        ))}
      </div>
      
      <div className="mt-10 w-full flex items-start justify-between text-black">
        <div className="flex flex-col gap-10 w-[55%]">
          <div className={sectionContainer}>
            <FinanceBlock header={'Pots'} link='/pots'/>
            <div className="mt-7 w-full flex gap-16">
              <div className="flex items-center gap-5 bg-[#FFF5EE] py-5 px-7 rounded-2xl text-[#242424]">
                <PiggyBank size={65} strokeWidth={1.3} color="#00C49F"/>
                <div className="flex flex-col h-full items-start gap-3"><p className="text-sm">Total saved</p><h3 className="text-3xl font-black">
                  {state.pots.reduce((acc, item) => {
                      return acc + item.saved
                  },0)}
                  </h3></div>
              </div>
              <div className="grid grid-cols-2 grid-rows-2 gap-5">
                {state.pots.map((item) => (
                  <BudgetBlock key={item.id} header={item.name} price={item.saved} color="#0088FE"/>
                ))}
                
              </div>
            </div>
          </div>
          
          <div className={sectionContainer}>
             <FinanceBlock header={'Transaction'} link={'/transactions'}/>
             <div className="mt-5 w-full flex flex-col gap-2">
              {state.transactions.slice(0, 2).map((item) => (
                <TransactionBlock key={item.id} title={item.title} category={item.category} subcategory={item.subcategory} icon={randomColor()} type={item.type} amount={item.amount} date={item.date}/>
              ))}
              </div>  
          </div>
        </div>
      
        <div className={`${sectionContainer} w-[40%]`}>
          <FinanceBlock header={'Budget'} link={'/budget'}/>
          <div className="mt-10 w-full flex justify-around">
            <PieChartWithPaddingAngle label={totalBudget} budgetData={state.budgets}/>
            <div className="flex flex-col gap-3">
              {state.budgets.map((item) => (
                <BudgetBlock header={item.name} price={item.spent} color={item.fill}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
// {/* /> */}