//window.onload = () => {
    
    
    let numbers = document.querySelector("#input");
    let btnDraw = document.querySelector("#btnRojo");
    let cartas = [];
    let franja = document.querySelector(".franja")
    let btnSort
    
    btnDraw.addEventListener("click",() => {
        for (let i= 0; i < numbers.value; i++) {
            let myDiv = document.createElement("div");
            myDiv.classList.add("card");
            let div = document.createElement("div");
            div.classList.add("num");
            div.classList.add(generateRandomSuite());
            div.innerHTML = generateRandomNumber();
            myDiv.appendChild(div);
            franja.appendChild(myDiv);

        }
    })

    


     let generateRandomNumber = () => {    
        let numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        let indexNumbers = Math.floor(Math.random() * numeros.length);
        return numeros[indexNumbers];
    }    
    
    let generateRandomSuite =  () => {
        var suit = ["spades", "clubs", "hearts", "diamonds"];
        let indexsuit = Math.floor(Math.random() * suit.length);
        return suit[indexsuit];
    }    



    

   //document.querySelector('.num').classList.add(generateRandomSuite());
   //document.querySelector('.num').innerHTML = generateRandomNumber();

//};


