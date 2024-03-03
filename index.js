// Helper function to simulate an asynchronous operation with a Promise
function simulateAsyncOperation(data, delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.8) {
          resolve(`Operation successful with data: ${data}`);
        } else {
          reject(new Error(`Operation failed for data: ${data}`));
        }
      }, delay);
    });
  }
  
  // Helper function to handle multiple asynchronous operations concurrently
  async function performConcurrentAsyncOperations(dataArray, delay) {
    const promises = dataArray.map(data => simulateAsyncOperation(data, delay));
  
    try {
      const results = await Promise.all(promises);
      console.log("All operations completed successfully:", results);
    } catch (error) {
      console.error("Error during async operations:", error.message);
    }
  }
  
  // Demo using the helper functions
  try {
    const dataToProcess = ["A", "B", "C", "D", "E"];
    const delayInMillis = 1000; // 1 second
  
    performConcurrentAsyncOperations(dataToProcess, delayInMillis);
  } catch (error) {
    console.error("Error:", error.message);
  }
  