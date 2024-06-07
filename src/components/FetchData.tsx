import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AuthorTables from './AuthorTables';
import LineChartComponent from './LineChart';
import PieCharts from './PieCharts';
import { transformData } from './TransformedData';

import './FetchData.css'

interface Activity {
  name: string;
  value: string;
}

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
  totalActivity: Activity[];
  dayWiseActivity: DayWiseActivity[];
}

interface Data {
  data: {
    AuthorWorklog: {
      rows: Author[];
    };
  };
}

const FetchData: React.FC = () => {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedAuthor, setSelectedAuthor] = useState<string | null>(null);
  const [view, setView] = useState<string>('Individual Contributions');

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/prasadcode58/personal-datasets/main/sample-data.json')
      .then(res => {
        setData(res.data);
        setSelectedAuthor(res.data.data.AuthorWorklog.rows[0].name);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const chartData = transformData(data);

  const handleAuthorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAuthor(event.target.value);
  };

  const handleViewChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setView(event.target.value);
  };

  const authors = data?.data?.AuthorWorklog?.rows.map(author => author.name) || [];
  const filteredAuthorData = data?.data?.AuthorWorklog?.rows.find(author => author.name === selectedAuthor);

  return (
    <div className='container'>
      <div className='main-page-selector'>
        <label htmlFor="view-select">Select view</label>
        <br></br>
        <select id="view-select" onChange={handleViewChange} value={view}>
          <option value="Individual Contributions">Individual Contributions</option>
          <option value="Total Stats">Total Stats</option>
          <option value="Average Contribution">Average Contribution</option>
        </select>
      </div>

      {view === 'Individual Contributions' && (
        <div className='author-selector'>
          <label htmlFor="author-select">Select an author</label>
          <select id="author-select" onChange={handleAuthorChange} value={selectedAuthor || ''}>
            {authors.map(author => (
              <option key={author} value={author}>{author}</option>
            ))}
          </select>

          {selectedAuthor && filteredAuthorData && (
            <AuthorTables data={[filteredAuthorData]} />
          )}
        </div>
      )}

      {view === 'Total Stats' && (
        <LineChartComponent data={chartData} />
      )}

      {view === 'Average Contribution' && (
        <PieCharts data={chartData} />
      )}
    </div>
  );
};

export default FetchData;
