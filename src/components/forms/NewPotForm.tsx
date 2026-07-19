import { Button, Field, Fieldset, Input, Label, Legend } from '@headlessui/react'
import { p } from 'framer-motion/client';
import { useState } from 'react';


function NewPotForm({onSubmit}) {
const inputClass = `mt-1 block bg-amber-50 text-black`

const [target, setTarget] = useState(null)
const [name, setName] = useState('')
const [error, setError] = useState('')

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if(name.trim() !== '' && target >= 100){
onSubmit("ADD_POT", {
    id: crypto.randomUUID(),
    name: name,
    target: Number(target),
    saved: 0,
  });

  console.log({
    id: crypto.randomUUID(),
    name: name,
    target: Number(target),
    saved: 0,
  })
  }

setError('Invalid data or empty fields! Try again!')

  return null
};

  return (
    <>
        <Fieldset className="flex flex-col min-h-full items-center justify-center space-y-8 bg-black p-4">
                                <Legend className="text-lg font-bold">Add new pot</Legend>
                                {error && <p>{error}</p>}
                                <Field>
                                    <Label className="block">Pot name</Label>
                                    <Input className={inputClass} name="name" required onChange={(e) => setName(e.target.value)}/>
                                </Field>
                                <Field>
                                    <Label className="block">target</Label>
                                    <Input type="number" className={inputClass} required name="target" onChange={(e) => setTarget(e.target.value)}/>
                                    {(target !== null && target < 100) && <p>The minimum target is 100!</p>}
                                </Field>
                                <Button onClick={handleSubmit}>Add pot</Button>
                            </Fieldset>
    </>
  )
}

export default NewPotForm