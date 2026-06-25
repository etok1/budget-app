
interface MoneyProps{
    category: string,
    value: string,
    isActive: boolean
}

function InfoBlock({category, value, isActive}: MoneyProps) {
  return (
    <div className={`w-57.5 shrink-0 flex flex-col items-start gap-1.5 font-poppins px-8 ${isActive ? 'bg-[#242424] text-[#FFF5EE]' : 'bg-[#FFF5EE] text-[#242424]'} py-3 rounded-sm`}>
        <p className='text-sm '>{category}</p>
        <h2 className="text-4xl font-bold">${value}</h2>
        </div>
  )
}

export default InfoBlock
