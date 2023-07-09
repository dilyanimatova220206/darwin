const  input = document.querySelector('input')
const btn = document.querySelector('button')
const h1 = document.querySelector('h1')


input.addEventListener('keyup' , (e) =>{
  if (e.key === 'Enter'){
      h1.innerText = input.value
  }
})


h1.innerText='hello dom'




input.addEventListener('keyup' , (e) =>{
    if (e.key === 'Shift') {
        alert(input.value)
    }
})
