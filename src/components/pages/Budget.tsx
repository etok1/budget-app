import { useContext, useState } from "react";
import InputRangeItem from "../Blocks/InputRangeItem"
import { budgetContext } from "../../context/Context";
import Modal from "../Blocks/Modal";
import BudgetForm from "../forms/BudgetForm";
import MonthlyBudgetForm from "../forms/MonthlyBudgetForm";

function Budget() {
const {state, dispatch} = useContext(budgetContext);
const [isActiceModal, setIsActiceModal] = useState<string | boolean>(false)



const submitForm = (typeDispatch, value) =>{
  dispatch({
  type: typeDispatch,
  payload: value
});
setIsActiceModal(false)
}

console.log(isActiceModal)
  return (
<div className="mt-10 flex h-screen flex-col items-start justify-start text-white font-poppins px-4">
    <h1>Budget</h1>
    <div className="w-full flex justify-between">
      <div className="flex flex-col w-[50%] h-full">
        <div className="mt-10 px-6 py-4 flex flex-col bg-[#FFF5EE] rounded-2xl text-black">
          <div className="flex w-full justify-between ">
            <h2 className="text-2xl font-semibold">Budget</h2>
          </div>
          <div className="mt-3 flex flex-col w-full justify-start gap-2.5">
            {state.budgets.map((item) => (
              <InputRangeItem key={item.id} category={item.name} current={item.spent} target={item.target}/>
            ))}
            
    
          </div>
        </div>
        <div className="mt-10 px-6 py-4 flex flex-col items-start bg-[#FFF5EE] rounded-2xl text-black">
            <h2 className="text-2xl font-semibold">Monthly Overview. March 2026</h2>
            <div className="mt-3 w-full text-left text-sm flex flex-col gap-0.5">
              <p>Budgeted: <span className="font-bold">$1000</span></p>
              <p className="text-red-700">Spent: <span className="font-bold">$740</span></p>
              <p className="text-green-700">Remaining: <span className="font-bold">$260</span></p>
            </div>
        </div>
      </div>
      <div className="w-[48%] h-fit mt-10 px-6 py-4 flex flex-col items-start bg-[#FFF5EE] rounded-2xl text-black">
          <h2 className="text-2xl font-semibold">Quick actions</h2>
          <div className="mt-5 w-full grid grid-cols-2 grid-rows-2 gap-3 items-start"> 
                <button className="text-blue-500 bg-blue-100 p-2 rounded-2xl" onClick={() => setIsActiceModal('budget')}>Add new budget</button>
                <button className="text-blue-500 bg-blue-100 p-2 rounded-2xl">Edit limits</button>
                <button className="text-blue-500 bg-blue-100 p-2 rounded-2xl"  onClick={() => setIsActiceModal('monthly')}>Edit monthly budget</button>
    
          </div>
        </div>
    </div>
    <Modal isOpen={isActiceModal === 'budget'} setIsOpen={setIsActiceModal}>
      <BudgetForm onSubmit={submitForm}/>
    </Modal>
    
    <Modal isOpen={isActiceModal === 'monthly'} setIsOpen={setIsActiceModal}>
      <MonthlyBudgetForm onSubmit={submitForm}/>
    </Modal>
</div>

  )
}
export default Budget