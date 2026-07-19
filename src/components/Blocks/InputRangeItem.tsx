import { useContext, useState } from "react";
import { budgetContext } from "../../context/Context";
import { Button, Field, Fieldset, Input, Label } from "@headlessui/react";
import Modal from "./Modal";

interface BudgetItemProps {
  category: string;
  spent: number;
  target: number;
}

function InputRangeItem({ id, category, spent, target}: BudgetItemProps) {
   const {state, dispatch} = useContext(budgetContext)

const [addAmount, setAddAmount] = useState(0)
const [isActiceModal, setIsActiceModal] = useState<string | boolean>(false)
const oneBudget = state.budgets.find((item) => item.id === id);

const [editedBudget, setEditedBudget] = useState(oneBudget)
  
  const percentage = Math.min((spent / target) * 100, 100);
  const isOver = spent > target;

const handleEdit = () => {
    setIsActiceModal('edit')
}

const handleRemove = () => {
  console.log("Removing:", id);
  dispatch({type:'DELETE_BUDGET', payload: id})
}

const handleAddNewItem = () => {

  setIsActiceModal('addTo')


}

const handleSubmit = (e, type, value) => {
  e.preventDefault()
  dispatch({type, payload: value})
  console.log(value)
setIsActiceModal(false)
}

  return (
  <>
    <div className="w-full space-y-2" >
      <div className="flex justify-between text-sm">
        <span>{category}</span>

        <div className="flex items-center gap-2">
          <span>
            ${spent} / ${target}
          </span>

          <div>
            <button
                onClick={() => handleEdit()}
                className="text-gray-400 hover:text-gray-700 text-xs transition"
              >
                Edit
              </button> /
              <button
                onClick={() => handleRemove()}
                className="text-gray-400 hover:text-gray-700 text-xs transition"
              >Remove
            </button> /
            <button
                onClick={() => handleAddNewItem()}
                className="text-gray-400 hover:text-gray-700 text-xs transition"
              >Add
            </button>
          </div>
        </div>
      </div>

      <div className="h-3 w-full rounded-full bg-gray-800">
        <div
          className={`h-3 rounded-full ${
            isOver ? "bg-red-500" : "bg-green-500"
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      {isOver && (
        <p className="text-xs text-left text-red-500 font-semibold">
          Budget exceeded ❗
        </p>
      )}
    </div>
    <Modal isOpen={isActiceModal === 'addTo'} setIsOpen={setIsActiceModal}>
       <Input type="number" name="limit" required onChange={(e) => setAddAmount(e.target.value)}/>
       <Button onClick={(e) => handleSubmit(e, 'ADD_TO_BUDGET', {id:id, amount: Number(addAmount)})}>Add budget</Button>
    </Modal>
    <Modal isOpen={isActiceModal === 'edit'} setIsOpen={setIsActiceModal}>
        <Fieldset className="flex flex-col min-h-full items-center justify-center space-y-8 bg-black p-4">
          <Field>
            <Label className="block">Budget name</Label>
            <Input  name="name"   value={editedBudget?.name ?? ""} onChange={(e) =>
    setEditedBudget((prev) => ({
      ...prev,
      name: e.target.value,
    }))
  }/>
          </Field>
          <Field>
            <Label className="block">Limit</Label>
            <Input type="number"  name="limit" required  value={editedBudget?.limit ?? ""} onChange={(e) => setEditedBudget((prev) => 
            ({...prev, limit: Number(e.target.value)}))
          }/>
          </Field>
          <Button onClick={(e) => handleSubmit(e, 'EDIT_BUDGET', editedBudget)}>Edit budget</Button>
        </Fieldset>
    </Modal>
</>
  );
}

export default InputRangeItem