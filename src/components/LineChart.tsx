import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TransformedData } from './TransformedData';

import './LineChart.css'

interface LineChartComponentProps {
  data: TransformedData[];
}

const LineChartComponent: React.FC<LineChartComponentProps> = ({ data }) => {
  return (
    <div className='main-chart'>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke='#7a7a7a'/>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="PR_Open" stroke="#EF6B6B" />
          <Line type="monotone" dataKey="PR_Merged" stroke="#88b544" />
          <Line type="monotone" dataKey="Commits" stroke="#f2bc00" />
          <Line type="monotone" dataKey="PR_Reviewed" stroke="#C2528B" />
          <Line type="monotone" dataKey="PR_Comments" stroke="#0396A6" />
          <Line type="monotone" dataKey="Incident_Alerts" stroke="#5F50A9" />
          <Line type="monotone" dataKey="Incidents_Resolved" stroke="#8F3519" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
