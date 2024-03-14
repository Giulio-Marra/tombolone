const generateTab =  tab => {
    const table79 = document.querySelector(".tabel")
    const result = []

    console.log(result)
    
    for (let i = 1; i <91; i++){
        const contNum = document.createElement("div")
        contNum.className = "contNumtomb"

        const nambTomb = document.createElement("h2")
        nambTomb.className = "classNambTomb"
        nambTomb.textContent = i;


        contNum.appendChild(nambTomb)
        table79.appendChild(contNum)

        result.push(nambTomb)
     
    }
     
    const buttonStart = document.getElementById("randomButton")
    const resNambNum = document.createElement("div")
     resNambNum.className = "classRandNumb"
    
     buttonStart.onclick = event =>{
         const randomNumber = Math.floor(Math.random() * 90) + 1;
        const randomNumberElement = document.createElement("h2")
         randomNumberElement.className = "randNumbh"
         randomNumberElement.textContent = randomNumber
    
        resNambNum.innerHTML = '';
        resNambNum.appendChild(randomNumberElement)

        for (let i = 0; i < result.length; i++) {
            const number = parseInt(result[i].textContent);
            if (randomNumber === number) {
                result[i].parentElement.classList.add("newClassDiv");
            }
        }


    }
 
    document.body.appendChild(resNambNum);


}





generateTab()



