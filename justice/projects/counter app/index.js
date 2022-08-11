

let saveEl = document.getElementById('save-el')
let countEL = document.getElementById('count-el')
let count = 0



function increment(){
 count += 1
 countEL.innerText = count
 // console.log(count)
}

function save(){
 let countStr = count + ' - '

 saveEl.textContent += countStr
 countEL.textContent = 0
 count = 0
}

















// let score = 0

// let scoreDoc = document.getElementById('count-el')

// function increment(){
//  score += 1
//  scoreDoc.innerText = score
// }

// let count = 0

// let saveBtn = document.getElementById('count-el')
// function save(){
//  console.log(count)
 
//  // count -= 1
//  // saveBtn.innerText = score 
// }

