import { Plus } from "lucide-react"

function Transactions() {

const selectionStyles = 'outline-none'
const DUMMY_DATA = [
    {
        date: '24-12-12',
        category: 'Food',
        amount: '-$26',
        type: 'expense' 
    },
    {
        date: '24-12-32',
        category: 'Food',
        amount: '+$26',
        type: 'income' 
    }
]
  return (
<div className="mt-10 flex h-screen flex-col items-start justify-start  font-poppins px-4">
    <h1 className="text-white">Transactions</h1>
    <div className="mt-10 w-full flex flex-col justify-between bg-[#FFF5EE] text-black">
      <div className="flex justify-evenly items-center py-3">
        <div><input type="search" name="" id="" className="bg-amber-200 placeholder:p-3 placeholder:outline-none placeholder:text-sm" placeholder="Search transaction"/></div>
        <select name="Filter type" id="filterType" className={selectionStyles}>
            <option value="" disabled selected>Filter type</option>
            <option value="fg">dgg</option>
            <option value="gg">gf</option>
            <option value="fd">df</option>
            <option value="jj">jj</option>
        </select>
        <select name="Filter category" id="filterCategory" className={selectionStyles}>
            <option value="" disabled selected>Filter category</option>
            <option value="fg">dgg</option>
            <option value="gg">gf</option>
            <option value="fd">df</option>
            <option value="jj">jj</option>
        </select>
        <button className="px-3.5 py-2 bg-green-500 rounded-lg flex items-center gap-1.5"><Plus/> Add transaction</button>
      </div>
      {/* <div className="mt-2 h-px flex items-center self-center w-[90%] bg-gray-800 opacity-50"></div> */}
      <div className="w-full mt-10">
        <table className="w-full">
            <thead>
                <tr className="border-b border-gray-700">
                    <th className="px-3 py-4">Date</th>
                    <th className="px-3 py-4">Category</th>
                    <th className="px-3 py-4">Amount</th>
                    <th className="px-3 py-4">Type</th>
                </tr>
            </thead>
            <tbody>
                {DUMMY_DATA.map((item) => (
                    <tr className="border-b border-gray-700">
                        <td className="px-3 py-2">{item.date}</td>
                        <td className="px-3 py-2">{item.category}</td>
                        <td className="px-3 py-2">{item.amount}</td>
                        <td className="px-3 py-2">{item.type}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
</div>
  )
}
export default Transactions