function submitData(name, email){
    return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
    "Content-Type": 'application/json',
    "Accept" : 'application/json',
    },
    body: JSON.stringify({
        'name' : name, 
        'email' : email,
    }),   
})
    .then(response => response.json())
    .then(json => {
       let p = document.createElement('p');
       p.textContent += `The logged ID is ${json.id}.`
       document.body.appendChild(p);
    })
    .catch(message => {
        let errorP = document.createElement('p');
        errorP.textContent = `Sorry bro here is an error: ${message}`;
        document.body.appendChild(errorP)
    })

}

// console.log(submitData('Rodrigo', '456'));
