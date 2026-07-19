import { useContext, useState } from "react";
import { budgetContext } from "../../context/Context";
import { Button, Field, Fieldset, Input, Label } from "@headlessui/react";
import Modal from "./Modal";


interface BlockItemProps {
  category: string;
  current: number;
  target: number;
}

function InputPotsItem({ id, category, current, target }: BlockItemProps) {
  const {state, dispatch} = useContext(budgetContext)
  const percentage = Math.min((current / target) * 100, 100);
  const isOver = current > target;
const [isActiceModal, setIsActiceModal] = useState<string | boolean>(false)

const [addAmount, setAddAmount] = useState(0)
const [editedPot, setEditedPot] = useState(null)


const handleEdit = () => {
    setIsActiceModal('edit')
      const onePot = state.pots.find((item) => item.id === id);
      setEditedPot(onePot)
}

const handleRemove = () => {
  console.log("Removing:", id);
  dispatch({type:'DELETE_POT', payload: id})
}

const handleAdd= () => {

  setIsActiceModal('addTo')


}

const handleSubmit = (e, type, value) => {

  console.log(editedPot);
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
          ${current} / ${target}
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
              onClick={() => handleAdd()}
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
        Goal accomplished ❗
      </p>
    )}
  </div>

  <Modal isOpen={isActiceModal === 'addTo'} setIsOpen={setIsActiceModal}>
        <Input type="number" name="limit" required onChange={(e) => setAddAmount(e.target.value)}/>
        <Button onClick={(e) => handleSubmit(e, 'ADD_TO_POT', {id:id, amount: Number(addAmount)})}>Add pot</Button>
      </Modal>
      <Modal isOpen={isActiceModal === 'edit'} setIsOpen={setIsActiceModal}>
          <Fieldset className="flex flex-col min-h-full items-center justify-center space-y-8 bg-black p-4">
            <Field>
              <Label className="block">Pot name</Label>
              <Input  name="name"   value={editedPot?.name ?? ""} onChange={(e) =>
      setEditedPot((prev) => ({
        ...prev,
        name: e.target.value,
      }))
    }/>
            </Field>
            <Field>
              <Label className="block">Target</Label>
              <Input type="number"  name="target" required  value={editedPot?.target ?? ""} onChange={(e) => setEditedPot((prev) => 
              ({...prev, target: Number(e.target.value)}))
            }/>
            </Field>
            <Button onClick={(e) => handleSubmit(e, 'EDIT_POT', editedPot)}>Edit Pot</Button>
          </Fieldset>
      </Modal>

    </>
  );
}

export default InputPotsItem