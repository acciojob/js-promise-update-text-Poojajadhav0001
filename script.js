//your JS code here. If required.
// Function that returns a Promise
function sayHello() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000); // 1 second delay
  });
}

// Use the promise to update HTML element
sayHello().then((data) => {
  document.getElementById("output").textContent = data;
});
