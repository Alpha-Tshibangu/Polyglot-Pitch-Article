import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface RevenueChartsProps {
  darkMode: boolean;
}

const RevenueCharts = ({ darkMode }: RevenueChartsProps) => {
  const freemiumData = [
    { year: 0, users: 575.0 },
    { year: 1, users: 1006.25 },
    { year: 2, users: 1760.94 },
    { year: 3, users: 3081.64 },
    { year: 4, users: 5392.87 },
    { year: 5, users: 9437.52 },
    { year: 6, users: 95250 },
  ];

  const eventBasedData = [
    { year: 0, users: 15.0 },
    { year: 1, users: 21.0 },
    { year: 2, users: 29.4 },
    { year: 3, users: 41.16 },
    { year: 4, users: 57.62 },
    { year: 5, users: 80.67 },
    { year: 6, users: 300 },
  ];

  const enterpriseData = [
    { year: 0, users: 3.0 },
    { year: 1, users: 3.6 },
    { year: 2, users: 4.32 },
    { year: 3, users: 5.18 },
    { year: 4, users: 6.22 },
    { year: 5, users: 7.46 },
    { year: 6, users: 5 },
  ];

  const combinedData = [
    { year: 0, freemium: 575.0, eventBased: 15.0, enterprise: 3.0 },
    { year: 1, freemium: 1006.25, eventBased: 21.0, enterprise: 3.6 },
    { year: 2, freemium: 1760.94, eventBased: 29.4, enterprise: 4.32 },
    { year: 3, freemium: 3081.64, eventBased: 41.16, enterprise: 5.18 },
    { year: 4, freemium: 5392.87, eventBased: 57.62, enterprise: 6.22 },
    { year: 5, freemium: 9437.52, eventBased: 80.67, enterprise: 7.46 },
    { year: 6, freemium: 95250, eventBased: 300, enterprise: 5 },
  ];  

  const chartStyle = {
    text: darkMode ? '#e2e8f0' : '#2d3748',
    grid: darkMode ? '#4a5568' : '#e2e8f0',
  };

  return (
    <div className="space-y-8">
      <section>
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Freemium Users Growth
        </h3>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={freemiumData}>
              <CartesianGrid strokeDasharray="3 3" stroke={chartStyle.grid} />
              <XAxis dataKey="year" stroke={chartStyle.text} />
              <YAxis stroke={chartStyle.text} />
              <Tooltip contentStyle={{ backgroundColor: darkMode ? '#1a202c' : '#ffffff' }} />
              <Legend />
              <Line type="monotone" dataKey="users" name="Users/Contracts" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mt-4 text-lg leading-relaxed">
          Our freemium user base shows the rapid growth of freemium users over 7 years, reflecting their significant ARR contribution. 
          Starting with 575 converted users, the ARR grows exponentially due to the 150% annual growth rate, 
          reaching a substantial contribution by year 7.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Event-Based Contracts Growth
        </h3>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={eventBasedData}>
              <CartesianGrid strokeDasharray="3 3" stroke={chartStyle.grid} />
              <XAxis dataKey="year" stroke={chartStyle.text} />
              <YAxis stroke={chartStyle.text} />
              <Tooltip contentStyle={{ backgroundColor: darkMode ? '#1a202c' : '#ffffff' }} />
              <Legend />
              <Line type="monotone" dataKey="users" name="Users/Contracts" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mt-4 text-lg leading-relaxed">
          Our event-based contracts show the more moderate growth of enterprise contracts and event-based contracts. 
          While enterprise contracts show slower growth (110% annually), event-based contracts grow at 130%, showing steady contribution. 
          The slower start reflects the nature of high-value contracts that require more time to scale.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Enterprise Contracts Growth
        </h3>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={enterpriseData}>
              <CartesianGrid strokeDasharray="3 3" stroke={chartStyle.grid} />
              <XAxis dataKey="year" stroke={chartStyle.text} />
              <YAxis stroke={chartStyle.text} />
              <Tooltip contentStyle={{ backgroundColor: darkMode ? '#1a202c' : '#ffffff' }} />
              <Legend />
              <Line type="monotone" dataKey="users" name="Users/Contracts" stroke="#ffc658" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mt-4 text-lg leading-relaxed">
        In the final graph, we can clearly see that freemium users drive the majority of ARR growth, overshadowing the slower, 
        but still valuable, contributions from enterprise and event-based contracts. 
        Freemium&#39;s rapid adoption boosts overall ARR significantly, while the other two customer bases provide stable, 
        high-value contributions over time.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Combined User/Contract Growth (All Customer Bases)
        </h3>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={combinedData}>
              <CartesianGrid strokeDasharray="3 3" stroke={chartStyle.grid} />
              <XAxis dataKey="year" stroke={chartStyle.text} />
              <YAxis stroke={chartStyle.text} />
              <Tooltip contentStyle={{ backgroundColor: darkMode ? '#1a202c' : '#ffffff' }} />
              <Legend />
              <Line type="monotone" dataKey="freemium" name="Freemium Users ($)" stroke="#8884d8" />
              <Line type="monotone" dataKey="eventBased" name="Event-Based Contracts ($)" stroke="#82ca9d" />
              <Line type="monotone" dataKey="enterprise" name="Enterprise Contracts ($)" stroke="#ffc658" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mt-4 text-lg leading-relaxed">
          When we combine all customer bases, we see a clear trend of accelerating growth. Our freemium users are 
          projected to be the primary driver of our ARR growth, followed by event-based contracts and enterprise contracts.
        </p>
      </section>
    </div>
  );
};

export default RevenueCharts;