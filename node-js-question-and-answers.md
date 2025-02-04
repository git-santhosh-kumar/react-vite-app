# Node.js Interview Questions & Answers

## Basic Questions

**1. What is Node.js, and how does it work?**

**Answer:** Node.js is a JavaScript runtime built on Chrome’s V8 engine. It allows running JavaScript on the server, handling I/O operations asynchronously with its event-driven architecture.

**2. Difference between `require` and `import`**

**Answer:**

- `require()` is CommonJS, used in Node.js (`const module = require('module')`).
- `import` is ES6, used in modern JavaScript (`import module from 'module'`).
- `import` supports tree shaking; `require` does not.

**3. What is the Event Loop in Node.js?**

**Answer:** The event loop handles async operations in Node.js by offloading tasks to worker threads and executing callbacks when they are ready.

**4. Synchronous vs. Asynchronous programming**

**Answer:**

- **Synchronous:** Blocks execution until the current task finishes.
- **Asynchronous:** Uses callbacks, promises, or async/await to handle tasks without blocking execution.

**5. What is middleware in Express.js?**

**Answer:** Middleware functions intercept requests and responses in Express.js.

Example:

```sh
app.use((req, res, next) => {
    console.log('Middleware executed');
    next();
});
```

**6. How does the `fs` module work?**

**Answer:** The `fs` module handles file operations like reading, writing, and deleting files in Node.js.

Example:

```sh
const fs = require('fs');
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
```

**7. Difference between `process.nextTick()` and `setImmediate()`**

**Answer:**

- `process.nextTick()`: Executes after the current operation, before I/O.
- `setImmediate()`: Executes after the I/O phase.

**8. Error handling in Node.js**

**Answer:**

```sh
try {
    throw new Error('Something went wrong');
} catch (error) {
    console.error(error.message);
}
```

**9. Difference between `spawn`, `fork`, and `exec`**

**Answer:**

- `spawn`: Runs a new process (stream-based).
- `exec`: Runs a command and buffers output.
- `fork`: Creates a child Node.js process.

**10. Purpose of Streams in Node.js**

**Answer:** Streams allow handling large data efficiently without loading everything into memory.

## Intermediate Questions

**11. What are Promises and async/await?**

**Answer:**
```sh
async function fetchData() {
    return await fetch('https://api.example.com/data');
}
```

**12. Difference between Process and Thread**

**Answer:**

- A `process` has its own memory space.
- A `thread` is a lightweight unit within a process.

**13. Managing Environment Variables**

**Answer:** Using `dotenv`:
```sh
require('dotenv').config();
console.log(process.env.API_KEY);
```

**14. Rate Limiter in Express.js**

```sh
const rateLimit = require('express-rate-limit');
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
```

**15. What is clustering?**

**Answer:** Runs multiple instances of a Node.js process for better performance.

```sh
const cluster = require('cluster');
if (cluster.isMaster) {
    cluster.fork();
}
```

**16. WebSockets in Node.js**

```sh
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });
```

**17. JWT Authentication**

```sh
const jwt = require('jsonwebtoken');
const token = jwt.sign({ userId: 123 }, 'secret_key');
```

**18. Caching in Node.js**

**Answer:** Use **Redis** or **in-memory** caching like:
```sh
const cache = new Map();
cache.set('user', { id: 1, name: 'John' });
```
