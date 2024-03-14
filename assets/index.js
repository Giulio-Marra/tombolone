const start = document.getElementById("randomButton")
 start.onclick = event =>{
    start.remove()

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
            const buttonStart = document.createElement("button")
            buttonStart.className = ("startGame")
            buttonStart.textContent = "ROLL"
            const resNambNum = document.createElement("div")
            resNambNum.className = "classRandNumb"
          
            const allNumUsciti = []
            
            buttonStart.onclick = event =>{

                const randomNumber = Math.floor(Math.random() * 90) + 1;
                const randomNumberElement = document.createElement("h2")
                randomNumberElement.className = "randNumbh"
                randomNumberElement.textContent = randomNumber
                
                allNumUsciti.push(randomNumberElement)
         
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
         document.body.appendChild(buttonStart)
      
     } 
     generateTab()
 }



