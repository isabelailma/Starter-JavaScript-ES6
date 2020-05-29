const minhaPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => {resolve('OK')}, 2000);
});

// minhaPromise()
//   .then(response => {
//     console.log(response);
//   })
//   .catch(err => {
//     console.log(err);
//   });

async function executaPromise() {
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());
}

executaPromise();