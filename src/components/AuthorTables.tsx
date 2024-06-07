import React from 'react';

import './AuthorTables.css'

interface DayWiseActivityItem {
  fillColor: string;
  count: number;
}

interface DayWiseActivity {
  date: string;
  items: {
    children: DayWiseActivityItem[];
  };
}

interface Author {
  name: string;
  dayWiseActivity: DayWiseActivity[];
}

interface AuthorTablesProps {
  data: Author[];
}

const AuthorTables: React.FC<AuthorTablesProps> = ({ data }) => {
  return (
    <div className='author-tables'>
      {data.map((author, index) => (
        <div key={index}>
          <table className='main-table'>
            <thead>
              <tr>
                <th>Date</th>
                <th>PR Open</th>
                <th>PR Merged</th>
                <th>Commits</th>
                <th>PR Reviewed</th>
                <th>PR Comments</th>
                <th>Incident Alerts</th>
                <th>Incidents Resolved</th>
              </tr>
            </thead>
            <tbody>
              {author.dayWiseActivity.map((dayActivity, index) => (
                <tr key={index}>
                  <td className='table-dates'>{dayActivity.date}</td>
                  {dayActivity.items.children.map((item, index) => (
                    <td key={index} style={{ backgroundColor: item.fillColor }}>{item.count}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default AuthorTables;
