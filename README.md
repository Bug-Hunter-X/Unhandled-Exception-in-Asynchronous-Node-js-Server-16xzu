# Unhandled Exception in Asynchronous Node.js Server

This repository demonstrates a common error in Node.js: unhandled exceptions within asynchronous operations.  Improper error handling in asynchronous callbacks can lead to server crashes, data loss, and unexpected behavior.

## The Bug

The `bug.js` file contains a simple HTTP server.  However, within the asynchronous `setTimeout` callback, there's a 50% chance of throwing an error.  This error isn't caught, resulting in a server crash.

## The Solution

The `bugSolution.js` file shows the correct way to handle such errors using `try...catch` blocks within the asynchronous callback, or with a general `process.on('uncaughtException')` handler.  This ensures graceful error handling and prevents unexpected server crashes.

## How to Run

1. Clone this repository.
2. Navigate to the repository directory.
3. Run `node bug.js` to observe the crash (50% chance).
4. Run `node bugSolution.js` to see the improved, more robust implementation.