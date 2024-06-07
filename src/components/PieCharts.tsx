import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { TransformedData } from './TransformedData';

import './PieCharts.css'

interface PieChartsProps {
  data: TransformedData[];
}

const PieCharts: React.FC<PieChartsProps> = ({ data }) => {
  const colors = ['#FFBB28', '#0088FE', '#00C49F', '#FF8042'];

  return (
    <div className='pie-container'>
      <h3 className='pie-heading'>Pie Charts</h3>
      <div className='all-piecharts'>
        <div className='single-piechart'>
          
          <ResponsiveContainer width={220} height={220}>
            <PieChart>
              <Pie stroke='#2c2c2c'
                strokeWidth={2}
                data={data.map(author => ({ name: author.name, value: author.PR_Open }))}
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((author, index) => (
                  console.log(author),
                  <Cell key={index} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <h4 className='pie-title'>PR Open</h4>
        </div>
        <div className='single-piechart'>
          
          <ResponsiveContainer width={220} height={220}>
            <PieChart>
              <Pie stroke='#2c2c2c'
                strokeWidth={2}
                data={data.map(author => ({ name: author.name, value: author.PR_Merged }))}
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((author, index) => (
                  console.log(author),
                  <Cell key={index} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <h4 className='pie-title'>PR Merged</h4>
        </div>
        <div className='single-piechart'>
          
          <ResponsiveContainer width={220} height={220}>
            <PieChart>
              <Pie stroke='#2c2c2c'
                strokeWidth={2}
                data={data.map(author => ({ name: author.name, value: author.Commits }))}
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((author, index) => (
                  console.log(author),
                  <Cell key={index} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <h4 className='pie-title'>Commits</h4>
        </div>
        <div className='single-piechart'>
          
          <ResponsiveContainer width={220} height={220}>
            <PieChart>
              <Pie stroke='#2c2c2c'
                strokeWidth={2}
                data={data.map(author => ({ name: author.name, value: author.PR_Reviewed }))}
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((author, index) => (
                  console.log(author),
                  <Cell key={index} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <h4 className='pie-title'>PR Reviewed</h4>
        </div>
      </div>
    </div>
  );
};

export default PieCharts;
