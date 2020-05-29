const minhaPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => {resolve('OK')}, 2000);
});

minhaPromise().then(response => {
  console.log(response);
});