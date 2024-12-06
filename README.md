# Incorrect State Update in React Functional Component
This repository demonstrates a common error in React functional components: incorrectly updating state variables.  The provided code attempts to update the state directly, which does not trigger a re-render and results in incorrect behavior. The solution illustrates the correct approach using the setter function from the `useState` hook.

## Bug Description
Directly mutating the state variable (e.g., `count = count + 1;`) within a React functional component does not trigger a re-render.  The component's UI will not reflect the changes. Using the setState function with the old value will lead to incorrect count.