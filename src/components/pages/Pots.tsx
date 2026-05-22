import { useContext } from "react"
import InputRangeItem from "../Blocks/InputRangeItem"
import { budgetContext } from "../../context/Context"

function Pots() {

const {state, dispatch} = useContext(budgetContext);


const handleAddNewPot = () => {
 dispatch({
  type: "ADD_POT",
  payload: {
    id: 55,
    name: "uni",
    saved: 150,
    target: 100,
  },
});
}
console.log(state)
  return (
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
                <InputRangeItem key={pot.id} category={pot.name} current={pot.saved} target={pot.target}/>
              ))}
            </div>
        </div>
        <div className="mt-10 px-6 py-4 flex flex-col items-start bg-[#FFF5EE] rounded-2xl text-black">
          <h2 className="text-2xl font-semibold">Quick actions</h2>
          <div className="mt-5 w-full grid grid-cols-2 grid-rows-2 gap-3 items-start"> 
                <button className="text-blue-500 bg-blue-100 p-2 rounded-2xl" onClick={handleAddNewPot}>Add new pot</button>
                <button className="text-blue-500 bg-blue-100 p-2 rounded-2xl">Add new goal</button>
          </div>
        </div>
      </div>
      <div className="mt-10 w-[48%] h-fit px-6 py-4 flex flex-col bg-[#FFF5EE] rounded-2xl">
        <div className="flex flex-col w-full items-start justify-between text-black">
          <h2 className="text-2xl font-semibold">Goals</h2>
          <div className="mt-5 flex flex-col items-start gap-2 ">
            {state.pots.map((pot) => (
              <p >{pot.name}: ${pot.saved}/${pot.target} <span className={
                pot.saved >= pot.target
                  ? "text-green-500"
                  : "text-yellow-400"
              }>{Math.min((pot.saved / pot.target)*100, 100)}%</span></p>
            ))}
          </div>
        </div>
      </div>
    </div>
</div>
  )
}
export default Pots