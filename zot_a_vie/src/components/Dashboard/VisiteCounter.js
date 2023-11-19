import React, { useEffect, useState } from 'react';

const VisitsCounter = () => {
  const [visits, setVisits] = useState(0);
  useEffect(() => {
    const storedVisits = localStorage.getItem('visits');
    setVisits(storedVisits ? parseInt(storedVisits, 10) : 0);
    localStorage.setItem('visits', visits + 1);
  }, [visits]);

  return (
    <div>
      <p>Nombre de visites : {visits}</p>
    </div>
  );
};

export default VisitsCounter;
