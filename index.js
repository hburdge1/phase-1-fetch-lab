const fetchBooks = () => 
   fetch("https://anapioficeandfire.com/api/books")
    .then ((resp) => {
      resp.json})    
    .then((json) => {
      return renderBooks(json)})
    

function renderBooks(inp) {
  const h2 = document.querySelector('#h2')
    let li = document.createElement('li')
    li.innerHTML = `${inp}`
  }

  document.addEventListener('DOMContentLoaded', fetchBooks)

