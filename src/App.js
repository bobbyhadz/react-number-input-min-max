import './App.css';

import {useState} from 'react';

const App = () => {
  const min = 1;
  const max = 100;

  const [value, setValue] = useState(1);

  const handleChange = event => {
    const value = Math.max(
      min,
      Math.min(max, Number(event.target.value)),
    );
    setValue(value);
  };

  console.log(value);
  console.log(typeof value);

  return (
    <div>
      <h2>Min 1 / Max 100</h2>
      <h3>1500 / -50</h3>
      <input
        type="number"
        placeholder="Your fav number"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default App;
