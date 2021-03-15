function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000);
    })
}

falarDepoisDe(3, "Que legal as promises")
    .then(frase => frase.concat("?!?!"))
    .then(frase => frase.concat("?!?!"))
    .then(frase => frase.concat("?!?!"))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e));


// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(frase)
//     }, 1 * 1000);
// })
// .then((frase) => frase.concat("?!?!"))
// .catch(console.log("erro"))

// gdfgfd


// let promise = new Promise(function(resolve, reject) {
//     // the function is executed automatically when the promise is constructed

//     // after 1 second signal that the job is done with the result "done"
//     setTimeout(() => resolve("done"), 1000);
//   });

// promise
//     .then((result => console.log(result)))

// promise.then((result => console.log("teste" + result)));


