```javascript
//Incorrect way to update state in React functional component
import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    count = count + 1; // Incorrect: This does not trigger a re-render
    setCount(count); // Incorrect: count is not updated correctly
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default MyComponent;
```