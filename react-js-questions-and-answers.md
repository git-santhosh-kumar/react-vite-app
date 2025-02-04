# React.js Interview Questions & Answers

## Basic Questions

**1. What is React?**

**Answer:** A JavaScript library for building UI components.

**2. Props vs State**

**Answer:**

- **Props** are immutable [can not be changed] and passed down.
- **State** is mutable and managed inside a component.

**3. Difference between Class and Functional Components**

**Answer:**

- **Class Component**: Uses lifecycle methods.
- **Functional Component**: Uses Hooks.

**4. Virtual DOM**

**Answer:** A lightweight copy of the real DOM that updates efficiently.

**5. Handling Forms in React**

```sh
const [value, setValue] = useState('');
<input value={value} onChange={e => setValue(e.target.value)} />;
```

**6. What is JSX?**

**Answer:** A syntax extension for writing HTML in JavaScript.

**7. Conditional Rendering**

```sh
{isLoggedIn ? <Dashboard /> : <Login />}
```

**8. `useState` vs `useReducer`**

**Answer:**

- `useState` for simple states.
- `useReducer` for complex state logic.

**9. `useEffect` Hook**

```sh
useEffect(() => {
    console.log('Component mounted');
}, []);
```

**10. Controlled vs Uncontrolled Components**

**Answer:** Controlled components use state, while uncontrolled components use refs.

## Intermediate to Advanced React Questions

**11. Handling Side Effects**

```sh
useEffect(() => {
    fetchData();
}, []);
```

**12. Context API**
```sh
const MyContext = React.createContext();
<MyContext.Provider value={data}>...</MyContext.Provider>
```

**13. `React.memo` and `useCallback`**

```sh
const MemoizedComponent = React.memo(MyComponent);
const handleClick = useCallback(() => {...}, []);
```

**14. Importance of Keys in Lists**

**Answer:** Keys help React track changes efficiently.

**15. State Management in React (Redux vs Context)**

- **Redux** for large-scale apps.
- **Context** API for simple global states.

**16. Higher-Order Components (HOCs)**

```sh
const withLogger = Component => props => {
    console.log('Rendering:', Component.name);
    return <Component {...props} />;
};
```

**17. Server-Side Rendering (SSR)**

**Answer:** Next.js enables SSR for React.

**18. Optimizing Performance**

- Use `React.memo`
- Use `lazy loading`
- Optimize re-renders