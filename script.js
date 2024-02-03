

const getArrayofNumbbers=()=>{
    let numbers = []
    for (let i= 0; i <=30; i++){
        let number = Math.floor(Math.random() * 99)
        numbers.push(number)
        }
return numbers;
}
const body = document.querySelector("body")
const table = document.createElement("table")
const tbody = document.createElement("tbody")
body.appendChild(table)
table.appendChild(tbody)

function fillTable(){
    table.innerHTML = "";
    tbody.innerHTML ="";
    let numbers = getArrayofNumbbers()
let indexs = 0
  for (let i= 0; i < 5; i++){
    const tr = document.createElement("tr")
    for (let j= 0; j < 6; j++){
        const td = document.createElement("td")   
        td.textContent=numbers[indexs]
        if (numbers[indexs] >=50){
            td.style.backgroundColor= "#ff6b84"
        }

        tr.appendChild(td)
        indexs = indexs+ 1
    }
    tbody.appendChild(tr)
    table.appendChild(tbody);
  }
}
fillTable()