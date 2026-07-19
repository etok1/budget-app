import { Button, Field, Fieldset, Input, Label, Legend, Select, Textarea } from '@headlessui/react'


function MonthlyBudgetForm ({onSubmit}) {
const inputClass = `mt-1 block bg-amber-50 text-black`

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  console.log9('montlybudget')

  localStorage.setItem(JSON.parse(), 'monthly-budget')
};

  return (
    <>
       <Fieldset className="flex flex-col min-h-full items-center justify-center space-y-8 bg-black p-4">
                        <Legend className="text-lg font-bold">Edit monthly budget goal</Legend>
                        <Field>
                            <Label className="block">Street address</Label>
                            <Input className={inputClass} name="address" />
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
                        <Button onClick={handleSubmit}>Edit monthly budget</Button>
                    </Fieldset>
    </>
  )
}

export default MonthlyBudgetForm 