// let i = 7
// function count(){
//    i += 2
//    console.log(i)

  
// }
// count()

// function large(a,b) {
//  sum = a*b
//  return sum
 

// } 
// large(10,2)

// function small(large) {
//   ya = large / 4
//   return ya
// }
// console.log(ya)


// let add = function(name  , score){
//  return   name + score
// }

// let value = add( 'just', 5)
// console.log(value)

// let resturant = function(total,tip = 0.2){
//   return  total  *  tip
// }

// let value = resturant(40,.3)

// console.log(`A ${tip} tip on ${total} would be ${value} `)

// let number = function(num){
// let multi = num * num
// console.log(multi)
// }
// number(4)

// student score , total posible score
// 15/20 -> you got a c (75%)!
// A 90-100 ,B 80 -89, C 70-79, D 60-69,F 0 - 59


let exam = function( studentscore, total = 20,){
  let examscore = studentscore / total * 100
  if( examscore >= 90){
   return `you got A ${examscore} !`
  } else if (examscore >= 80 && examscore <=89){
return `you got a B ${examscore}!`
  }else if (examscore >= 70 && examscore <=79){
return `you got a c ${examscore}!`
}else if (examscore >= 60 && examscore <=69){
return `you got a D ${examscore}!`
}else if (examscore >= 0 && examscore <= 59){
return `you got a f ${examscore}!`
} 
  
}


let reuslt = exam(15,20)
console.log(reuslt)

