type TransactionProps = {
    date: string;
    title:  string;
    category: string; 
    subcategory?: string;
    amount: number;
    type: "income" | "expense";
}

function TransactionTable({date, title, category, subcategory, amount, type}: TransactionProps) {

  return (
    <tr className="border-b border-gray-700">
        <td className="px-3 py-2">{date}</td>
        <td className="px-3 py-2">{title}</td>
        <td className="px-3 py-2">{category} {subcategory ? '• ' + subcategory : '' }</td>
        <td className="px-3 py-2">{amount}</td>
        <td className="px-3 py-2">{type}</td>
    </tr>
  )
}
export default TransactionTable