type TransactionType = 'income' | 'expense';

interface transactionProps{
  title: string,
    category: string, 
    subcategory: string,
    icon: string,
      type: TransactionType; 
  amount: number;
    date: string,
}

function TransactionBlock({title, category, subcategory, icon, type, amount, date}: transactionProps) {

const isIncome = type === 'income'

  return (
    <div className=" flex items-center justify-start gap-5">
        <div className={`w-12 h-12 rounded-full ${icon}`}></div>
        <div className="flex flex-col items-start">
          <h2 className="text-sm">{title}</h2>
          <h2 className="text-xs">{category} {subcategory ? '• ' + subcategory : '' }</h2>
        </div>
        <div className="ml-auto text-sm flex flex-col gap-1">
            <p className={`font-bold ${isIncome ? 'text-green-600' : 'text-red-600'}`}>{isIncome ? '+' : '-'}${amount}</p>
            <span className="text-xs">{date}</span>
        </div>
    </div>
  )
}

export default TransactionBlock