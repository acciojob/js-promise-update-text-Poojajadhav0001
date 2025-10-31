//your JS code here. If required.
// Function that returns a Promise
function getMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000); // 1 second delay
  });
}

// Use the promise to update HTML element
getMessage().then((message) => {
  document.getElementById("output").textContent = message;
});
