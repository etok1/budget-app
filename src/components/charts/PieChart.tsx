import { Pie, PieChart, Tooltip, Cell, Label, } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

interface CustomPieChartProps {
  isAnimationActive?: boolean;
  label: string,
  budgetData: []
}
 const data = [
  { name: 'ffgg', value: 400, fill: '#0088FE' },
  { name: 'Group B', value: 300, fill: '#00C49F' },
  { name: 'Group C', value: 300, fill: '#FFBB28' },
  { name: 'Group D', value: 200, fill: '#FF8042' },
];

// #endregion
export default function PieChartWithPaddingAngle({ isAnimationActive = true, label, budgetData }: CustomPieChartProps ) {
  return (
    <PieChart style={{ width: '200px', maxHeight: '80vh', aspectRatio: 1 }} responsive> 
    <Label position="center" fill="#000" className='text-2xl w-2'>
              {`$${label}`}
          </Label>
      <Pie 
        data={budgetData}
        innerRadius="80%"
        outerRadius="100%" 
        cornerRadius="50%"
        fill="#8884d8"
        paddingAngle={5}
        dataKey="spent"
        isAnimationActive={isAnimationActive}
      >
{budgetData.map((item) => (
              <Cell key={item.id} fill={item.fill} />
            ))}
          </Pie>
          
          <Tooltip 
            contentStyle={{ backgroundColor: '#121418', border: 'none', borderRadius: '8px', color: '#fff' }}
            itemStyle={{ color: '#fff' }}
          />

      
      <RechartsDevtools />
    </PieChart>
  );
}