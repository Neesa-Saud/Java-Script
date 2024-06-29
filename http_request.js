fetch('https://jsonplaceholder.typicode.com/todos/1') //we are requesting the api to give us data 
      .then( function(response)
{
    return response.json(); //we get the requiired response or request
})
      .then(function (data)
    {
        console.log(data); // check that what data we have now
    })
    
fetch('https://dummyjson.com/products/add', { //dummyjason is also fake api
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }, // here we create new data
    body: JSON.stringify({
      title: 'BMW Pencil',
      /* other product data */
    })
  })
  .then(res => res.json())
  .then(console.log);
              