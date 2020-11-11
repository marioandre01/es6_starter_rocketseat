const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {resolve('OK')}, 2000);
});

//uso da promise no es6
/*minhaPromise()
    .then(response => {
        console.log(response);
    })
    .catch(err => {

    });
*/

//minhaPromise().then(response => ...);

//No es8
/*async function executaPromise(){
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());

    //mesmo ação usando .then, bem mais verbosa
    /*
    minhaPromise().then(response => {
        console.log(response);

        minhaPromise().then(response => {
            console.log(response);

            minhaPromise().then(response => {
                console.log(response);
            })
        })
    })
}
*/

//mesma ação usando arrow function
const executaPromise = async () => {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());    
}

executaPromise();

//O async/await vai ajudar muito a controlar a parte de programação assíncrona dentro do javascript