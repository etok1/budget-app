import { Plus } from "lucide-react"
import TransactionTable from "../Blocks/TransactionTable"
import { useContext, useState } from "react"
import { budgetContext } from "../../context/Context"
import Modal from "../Blocks/Modal"
import { Field, Fieldset, Input, Label, Legend, Select, Textarea } from '@headlessui/react'

function Transactions() {
    const {state, dispatch} = useContext(budgetContext)
    const [isOpen, setIsOpen] = useState<boolean | null>(false)
    const [transactionsArray, setTransactionsArray] = useState(state.transactions)
    const [filters, setFilters] = useState({
        type: 'all',
        category: 'all',
        title: ''
    })

    const selectionStyles = 'outline-none'


    console.log(state.transaction)


    const handleAddNewtransaction = () => {
    dispatch({
    type: "ADD_TRANSACTION",
    payload: {
        id: 15,
        title: "June salary",
        date: "26-02-12",
        category: "Salary",
        amount: 11126,
        type: "income",
        },
    });
    }

    const filteredTransactions  = state.transactions.filter((item) => {
    
        const matchedType = filters.type === 'all' || item.type.toLowerCase() === filters.type.toLowerCase()

        const matchedCategory = filters.category === 'all' || item.category.toLowerCase() === filters.category.toLowerCase()

        const matchedTitle = item.title.toLowerCase().includes(filters.title.toLowerCase())
console.log(matchedType && matchedCategory && matchedTitle)

        return matchedType && matchedCategory && matchedTitle
    });

 

  return (
    <>
<div className="mt-10 flex h-screen flex-col items-start justify-start  font-poppins px-4">
    <h1 className="text-white">Transactions</h1>
    <div className="mt-10 w-full flex flex-col justify-between bg-[#FFF5EE] text-black">
      <div className="flex justify-evenly items-center py-3">
        <div>
            <input type="search" name="" id="" className="bg-amber-200 placeholder:p-3 placeholder:outline-none placeholder:text-sm" placeholder="Search title" onChange={(e) => setFilters((prev) => ({...prev, title: e.target.value}))}/>
        </div>
        <select name="Filter type" id="filterType" className={selectionStyles} onChange={(e) => setFilters((prev) => ({...prev, type: e.target.value}))}>
            <option value="" disabled selected>Filter type</option>
            <option value="all">All</option>
            <option value="income">income</option>
            <option value="expense">expense</option>
        </select>
        <select name="Filter category" id="filterCategory" className={selectionStyles} onChange={(e) => setFilters((prev) => ({...prev, category: e.target.value}))}>
            <option value="" disabled selected>Filter category</option>
            <option value="all">All</option>
            <option value="food">Food</option>
            <option value="transport">Transport</option>
            <option value="entertainment">Entertainment</option>
            <option value="shopping">Shopping</option>
            <option value="bills">Bills</option>
            <option value="salary">Salary</option>
        </select>
        <button className="px-3.5 py-2 bg-green-500 rounded-lg flex items-center gap-1.5" onClick={() => setIsOpen(true)}><Plus/> Add transaction</button>
      </div>
      {/* <div className="mt-2 h-px flex items-center self-center w-[90%] bg-gray-800 opacity-50"></div> */}
      <div className="w-full mt-10">
        <table className="w-full">
            <thead>
                <tr className="border-b border-gray-700">
                    <th className="px-3 py-4">Date</th>
                     <th className="px-3 py-4">Title</th>
                    <th className="px-3 py-4">Category</th>
                    <th className="px-3 py-4">Amount</th>
                    <th className="px-3 py-4">Type</th>
                </tr>
            </thead>
            <tbody>
                {filteredTransactions.map((item) => (
                    <TransactionTable key={item.id} date={item.date} title={item.title} category={item.category} subcategory={item.subcategory} amount={item.amount} type={item.type} />
                ))}
            </tbody>
        </table>
      </div>
    </div>
</div>
<Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Fieldset className="flex flex-col min-h-full items-center justify-center space-y-8 bg-black p-4">
                        <Legend className="text-lg font-bold">Edit monthly budget goal</Legend>
                        <Field>
                            <Label className="block">Street address</Label>
                            <Input className="mt-1 block" name="address" />
                        </Field>
                        <Field>
                            <Label className="block">Country</Label>
                            <Select className="mt-1 block text-red-500" name="country">
                                <option>Canada</option>
                                <option>Mexico</option>
                                <option>United States</option>
                            </Select>
                        </Field>
                        <Field>
                            <Label className="block">Delivery notes</Label>
                            <Textarea className="mt-1 block" name="notes" />
                        </Field>
                    </Fieldset>
    </Modal>
    </>
  )
}
export default Transactions