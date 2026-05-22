interface BudgetItemProps {
  category: string;
  current: number;
  target: number;
}

function InputRangeItem({ category, current, target }: BudgetItemProps) {
  const percentage = Math.min((current / target) * 100, 100);
  const isOver = current > target;
const handleEdit = () => {}
const handleAdd = () => {}
  return (
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
            Edit /
          </button>
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
      Budget exceeded ❗
    </p>
  )}
</div>
  );
}

export default InputRangeItem