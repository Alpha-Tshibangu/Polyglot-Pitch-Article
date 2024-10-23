import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Define the interface for the initial data
interface RevenueData {
  source: string;
  users: number;
  revenue: number;
}

// Define the prop type for the component
interface RevenueBreakdownProps {
  initialData?: RevenueData[] | null; 
}


const RevenueBreakdown: React.FC<RevenueBreakdownProps> = ({ initialData }) => {
  const [revenueData, setRevenueData] = useState<RevenueData[]>(initialData || [
    { source: 'Enterprise Contracts', users: 3, revenue: 33500 },
    { source: 'Event Based Contracts', users: 15, revenue: 7500 },
    { source: 'Converted Freemium Subscriptions', users: 575, revenue: 500 }
  ]);

  const handleRevenueChange = (index: number, field: keyof RevenueData, value: string) => {
    const newData = [...revenueData];
  
    if (field === 'users' || field === 'revenue') {
      newData[index][field] = parseInt(value) || 0;
    }
  
    setRevenueData(newData);
  };

  const calculateTotal = () => {
    return revenueData.reduce((total, item) => total + item.users * item.revenue, 0);
  };

  useEffect(() => {
    if (initialData) {
      setRevenueData(initialData);
    }
  }, [initialData]);

  return (
    <div className="space-y-4">
      <div className="overflow-x-auto rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100 dark:bg-gray-800">
              <TableHead className="font-bold">Revenue Source</TableHead>
              <TableHead className="font-bold">Number of Users/Contracts</TableHead>
              <TableHead className="font-bold">Revenue/User or Contract (Annual)</TableHead>
              <TableHead className="font-bold">Annual Revenue Contribution</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {revenueData.map((item, index) => (
              <TableRow key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <TableCell>{item.source}</TableCell>
                <TableCell>
                  <input
                    type="number"
                    value={item.users}
                    onChange={(e) => handleRevenueChange(index, 'users', e.target.value)}
                    className="w-full bg-transparent focus:outline-none focus:ring-1 focus:ring-gray-500 rounded px-1"
                  />
                </TableCell>
                <TableCell>
                  <input
                    type="number"
                    value={item.revenue}
                    onChange={(e) => handleRevenueChange(index, 'revenue', e.target.value)}
                    className="w-full bg-transparent focus:outline-none focus:ring-1 focus:ring-gray-500 rounded px-1"
                  />
                </TableCell>
                <TableCell>
                  ${(item.users * item.revenue).toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
            <TableRow className="font-bold bg-gray-50 dark:bg-gray-800">
              <TableCell>Total</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
              <TableCell>${calculateTotal().toLocaleString()}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 italic">
        Curious about the numbers? Edit them and see for yourself how changes in users or revenue per user affect the total revenue.
        Note that converted Freemium subscriptions represent 5% of total Freemium users.
      </p>
    </div>
  );
};

export default RevenueBreakdown;