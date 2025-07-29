'use client';

import { useState, useEffect } from 'react';

interface ClientFormattedDateProps {
  dateString: string;
}

const ClientFormattedDate: React.FC<ClientFormattedDateProps> = ({ dateString }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Render a placeholder or nothing on the server and initial client render
    return null;
  }

  // Now that we're on the client, we can safely render the formatted date
  const formattedDate = new Date(dateString).toLocaleDateString();

  return <>{formattedDate}</>;
};

export default ClientFormattedDate;
