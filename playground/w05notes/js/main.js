// let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
// let response = await fetch(url);

// let commits = await response.json(); // read response body and parse as JSON

// alert(commits[0].author.login);


// fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
//   .then(response => response.json())
//   .then(commits => alert(commits[0].author.login));


// let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');

// let text = await response.text(); // read response body as text

// alert(text.slice(0, 80) + '...');


// let response = await fetch('/article/fetch/logo-fetch.svg');

// let blob = await response.blob(); // download as Blob object

// // create <img> for it
// let img = document.createElement('img');
// img.style = 'position:fixed;top:10px;left:10px;width:100px';
// document.body.append(img);

// // show it
// img.src = URL.createObjectURL(blob);

// setTimeout(() => { // hide after three seconds
//   img.remove();
//   URL.revokeObjectURL(img.src);
// }, 3000);



// let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');

// // get one header
// alert(response.headers.get('Content-Type')); // application/json; charset=utf-8

// // iterate over all headers
// for (let [key, value] of response.headers) {
//   alert(`${key} = ${value}`);
// }



// let response = fetch(protectedUrl, {
//     headers: {
//       Authentication: 'secret'
//     }
//   });



let user = {
    name: 'John',
    surname: 'Smith'
  };
  
  let response = await fetch('/article/fetch/post/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
  });
  
  let result = await response.json();
  alert(result.message);