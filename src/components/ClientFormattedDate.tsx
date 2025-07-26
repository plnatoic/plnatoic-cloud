'use client';

import { useState, useEffect } from 'react';

interface ClientFormattedDateProps {
  dateString: string;
}

const ClientFormattedDate: React.FC<ClientFormattedDateProps> = ({ dateString }) => {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    // This code runs only on the client, after hydration
    setFormattedDate(new Date(dateString).toLocaleDateString());
  }, [dateString]);

  // Render the formatted date, or nothing/placeholder until it's ready
  return <>{formattedDate}</>;
};

export default ClientFormattedDate;
