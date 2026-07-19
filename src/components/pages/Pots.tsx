import { useContext, useState } from "react"
import InputRangeItem from "../Blocks/InputRangeItem"
import { budgetContext } from "../../context/Context"
import InputPotsItem from "../Blocks/InputPotsBlock";
import Modal from "../Blocks/Modal";
import BudgetForm from "../forms/BudgetForm";
import NewPotForm from "../forms/NewPotForm";

function Pots() {

const {state, dispatch} = useContext(budgetContext);
const [isActiceModal, setIsActiceModal] = useState<string | boolean>(false)



console.log(state)

const amountPotsDone = () => {
  const array = state.pots
  return array.reduce((count, pot) => {
      if(pot.saved >= pot.target){
        return count+1
      }
      return count 
  },0)
}


const submitForm = (typeDispatch, value) =>{
  dispatch({
  type: typeDispatch,
  payload: value
});
setIsActiceModal(false)
}


  return (
    <>
<div className="mt-10 flex h-screen flex-col items-start justify-start text-white font-poppins px-4">
    <h1>Pots</h1>
    <div className="w-full flex justify-between">
      <div className="flex flex-col w-[48%] h-full">
        <div className="mt-10 px-6 py-4 flex flex-col bg-[#FFF5EE] rounded-2xl">
          <div className="flex w-full justify-between text-black">
            <h2 className="text-2xl font-semibold">Categories</h2>
            
          </div>
         
            <div className="mt-3 flex flex-col w-full justify-start gap-2.5 text-black">
              {state.pots.map((pot) => (
                <InputPotsItem key={pot.id} id={pot.id} category={pot.name} current={pot.saved} target={pot.target}/>
              ))}
            </div>
        </div>
        
      </div>
      <div className="mt-10 w-[48%] h-full flex flex-col ">
        <div className="flex flex-col w-full items-start gap-5 text-black bg-[#FFF5EE] rounded-2xl px-6 py-4">
            <h2 className="text-2xl font-semibold">Goals </h2>
         
              <p > <span className="text-green-600 font-bold">{amountPotsDone() + `/` + state.pots.length}</span> goals accomoplished!</p>
          
        </div>
        <div className="mt-10 px-6 py-4 flex flex-col items-start bg-[#FFF5EE] rounded-2xl text-black">
          <h2 className="text-2xl font-semibold">Quick actions</h2>
          <div className="mt-5 w-full grid grid-cols-2 grid-rows-2 gap-3 items-start"> 
                <button className="text-blue-500 bg-blue-100 p-2 rounded-2xl" onClick={() => setIsActiceModal('budget')}>Add new pot</button>
          </div>
        </div>
      </div>
    </div>
</div>
<Modal isOpen={isActiceModal === 'budget'} setIsOpen={setIsActiceModal}>
      <NewPotForm onSubmit={submitForm}/>
    </Modal>
</>
  )
}
export default Pots