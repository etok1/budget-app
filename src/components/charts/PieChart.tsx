import { Pie, PieChart, Tooltip, Cell, } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';


 const data = [
  { name: 'ffgg', value: 400, fill: '#0088FE' },
  { name: 'Group B', value: 300, fill: '#00C49F' },
  { name: 'Group C', value: 300, fill: '#FFBB28' },
  { name: 'Group D', value: 200, fill: '#FF8042' },
];

// #endregion
export default function PieChartWithPaddingAngle({ isAnimationActive = true }: { isAnimationActive?: boolean }) {
  return (
    <PieChart style={{ width: '200px', maxHeight: '80vh', aspectRatio: 1 }} responsive> 
    {/* <Label position="center" fill="#666" className='text-xs w-2'>
            $555 out of $666
          </Label> */}
      <Pie 
        data={data}
        innerRadius="80%"
        outerRadius="100%" 
        cornerRadius="50%"
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={isAnimationActive}
      >
{data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
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