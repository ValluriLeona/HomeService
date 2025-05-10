import React, { useState } from 'react';

function Services({ store }) {
  const [selectedService, setSelectedService] = useState('');

  const handleSelect = (e) => {
    const value = e.target.value;
    setSelectedService(value);
    if (value) {
      store.dispatch({ type: 'page', data: value });
    }
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h1 style={{ marginBottom: '20px' }}>Choose a Service</h1>
      <select
        value={selectedService}
        onChange={handleSelect}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          width: '250px',
        }}
      >
        <option value="">-- Select Service --</option>
        <option value="Plumbing">Plumbing</option>
        <option value="Cleaning">Cleaning</option>
        <option value="Carpenter">Carpenter</option>
        <option value="ApplianceRepair">Appliance Repair</option>
        <option value="PackersMovers">Packers & Movers</option>
        <option value="PestControl">Pest Control</option>
      </select>
    </div>
  );
}

export default Services;
