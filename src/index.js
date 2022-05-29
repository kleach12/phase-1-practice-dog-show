document.addEventListener('DOMContentLoaded', () => {

  // will keep all global variables here
  const dogList = document.querySelector("#table-body")
  const formName =document.querySelector("#dogName")
  const formBreed =document.querySelector("#dogBreed")
  const formSex =document.querySelector("#dogSex")


  // will handle the fetching of all dogs 
  function handleDogs(){
    fetch("http://localhost:3000/dogs")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data) confirmed that the data was being passed
      handleDogList(data)
    })
  }
  handleDogs()

  // will sort each dog
  function handleDogList(arrOfDog){
    const dogArr = arrOfDog
    dogArr.map((dog) => addDogs(dog))
  }

  // will append each dog to the dom
  function addDogs(dog){
    const dogRow = document.createElement("tr")
    dogRow.innerHTML = `
    <td>${dog.name}</td>
    <td>${dog.breed}</td>
    <td>${dog.sex}</td>
    <td><button id = btn_${dog.id}>Edit</button></td>
    `
    dogList.appendChild(dogRow)
    

    // creating within function to use scope 
    const dogEditBtn = document.querySelector(`#btn_${dog.id}`)
    dogEditBtn.addEventListener('click', () => {
      formName.value = dog.name
      formBreed.value = dog.breed
      formSex.value = dog.sex
    })
  }

  console.log(formName.value)







})