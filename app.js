/*Call fetch(path)
 Read the response when the promise resolves
 Turn the data into an image blog
 Add it to the image element in the HTML
 
 async and await are new features in JS that allow
 us to handle promises in a more readable and eloquent way
 
 We can only use the Keyword await in the context of an async 
 function*/

/*console.log('About to fetch a rainbow');
fetch('rainbow.jpg')
    .then((response) => {
        console.log(response);
        return response.blog();
    })
    .then((blob) => {
        console.log(blob);
        document.getElementsById('rainbow').src = URL.createObjectURL(blob);

    })
    .catch(error =>{
        console.error(error)
    });*/

//Using async and await

catchRainbow()
    //not necessary, just puts out a message when done
    .then((response) => {
        console.log('yay');
    })
    .catch((error) => {
        console.error(error);
    });
async function catchRainbow() {
    //make the fetch request
    const response = await fetch('rainbow.jpg'); //response if the result of the fetch function
    //turns the body of the response into a blob/image
    const blob = await response.blob();
    //Putting the response/image in the img element in HTML
    document.getElementById('rainbow').src = URL.createObjectURL(blob);
}
