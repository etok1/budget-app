import { Button, Field, Fieldset, Input, Label, Legend } from '@headlessui/react'
import { useState } from 'react';


function BudgetForm({onSubmit}) {
const inputClass = `mt-1 block bg-amber-50 text-black`

const [limit, setLimit] = useState(null)
const [name, setName] = useState('')

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  onSubmit("ADD_BUDGET", {
    id: crypto.randomUUID(),
    name: name,
    limit: Number(limit),
    spent: 0,
  });

  console.log({
    id: crypto.randomUUID(),
    name: name,
    limit: Number(limit),
    spent: 0,
  })
};

  return (
    <>
        <Fieldset className="flex flex-col min-h-full items-center justify-center space-y-8 bg-black p-4">
                                <Legend className="text-lg font-bold">Add new budget</Legend>
                                <Field>
                                    <Label className="block">Budget name</Label>
                                    <Input className={inputClass} name="name" onChange={(e) => setName(e.target.value)}/>
                                </Field>
                                <Field>
                                    <Label className="block">Limit</Label>
                                    <Input type="number" className={inputClass} name="limit" required onChange={(e) => setLimit(e.target.value)}/>
                                </Field>
                                <Button onClick={handleSubmit}>Add budget</Button>
                            </Fieldset>
    </>
  )
}

export default BudgetForm