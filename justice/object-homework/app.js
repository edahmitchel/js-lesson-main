// var student = {
//  name: 'dave',
//  grade: [1,5,85,90]
// }

// for ( var key in student){
//  console.log(student[key])
// }

// var person = {
//  name: 'justice',
//  age: 12,
//  country: 'luxembourg',
//  height: 'tall',
//  treeHouseStudent: true,
//  skills:['javaScript','HTML','CSS']
 
// }

// let i = 0;
// console.log('height' in person)

// for( key in person){
//  i++
//  console.log(i)

//  person[key]==='tall'?console.log('he is tall'):console.log(person[key])
//  console.log('his name is ' +  key,':', person[key])
//  // if (key.age === 12){
//  //  console.log('the age is righ')
//  // } else{'please try again'}
//  // console.log(person[key])
//  // console.log(key,':',person[key])
// }

// var team = {
//  name: 'temi',
//  age: 12,
//  location: 'china'

// }

// i = 1;

// for ( var key in player){
//  i = i * 2
// console.log(i)
// }

// var students = {
//  trainee1: 'justice',
//  trainee2:'ekan',
//  trainee3:'temi'
// }



// for (let key in students){
//   var fish =  students[key]
//  if(fish === 'ekan'){
//    console.log('found user')
//  }else {
//   console.log('user not found')
//  }
// }


// var food = {
//  igbo: 'egusi',
//  yoruba:'amala',
//  hausa:'tuwo'
// }

// for( goat in food){
//  var temi = food[goat]
//  if (temi === 'amala'){
//    console.log('i have not found food')
//  }
// }


 var rootHub = {
   trainer:{
     name:' mitchell',
     age:6,
     position:'boss',
     height: 6.5 ,
     location: 'uyo',
     gender: 'male',
     slills:['HTML','CSS','JAVESCRIPT','PHP','PYTHON','JAVA']
   },
   trainee1:{
     name:'justice',
     age:40,
     position:'learner',
     height: 7.5 ,
     location: 'luxembourg',
     gender: 'male',
     slills:['HTML','CSS','JAVESCRIPT','PHP','PYTHON','JAVA','C++']
   },
   trainee2:{
     name:'ekan',
     age:9,
     position:'learner',
     height: 4.2 ,
     location: 'abak',
     gender: 'male',
      slills:['HTML','CSS','JAVESCRIPT','JAVA','C++']
   },
   trainee3:{
     name:'temi',
     age:10,
     position:'learner',
     height: 3 ,
     location: 'osun',
     gender: 'female',
      slills:['HTML','CSS','JAVESCRIPT','FARMING','SLEEPING']
   },
trainee4:{
     name:' chisom',
     age:10,
     position:'learner',
     height: 3 ,
     location: 'osun',
     gender: 'female',
      slills:['HTML','CSS','JAVESCRIPT','JAVA','C++']
   },
   trainee5:{
     name:' ROSE',
     age:10,
     position:'HR',
     height: 3 ,
     location: 'DELTA',
     gender: 'female',
      slills:['ADMINISTRATION']
   },
   trainee6:{
     name:'sunday',
     age:10,
     position:'learner',
     height: 3 ,
     location: 'DELTA',
     gender: 'female',
      slills:['HTML','CSS','JAVESCRIPT','JAVA','C++']
   },
    trainer1:{
     name:'mk',
     age:7,
     position:'boss',
     height: 6.5 ,
     location: 'uyo',
     gender: 'male',
     slills:['HTML','CSS','JAVESCRIPT','PHP','PYTHON','JAVA']
   },
   trainee7:{
     name:'sunday',
     age:80,
     position:'learner',
     height: 5.5 ,
     location: 'uyo',
     gender: 'male',
      slills:['HTML','CSS','JAVESCRIPT','JAVA','C++']
   },
trainee8:{
     name:'ada',
     age:25,
     position:'learner',
     height:4.8 ,
     location: 'uyo',
     gender: 'female',
      slills:['HTML','CSS','JAVESCRIPT','C++']
   },
 }

// let getValue = prompt("What do you want to search for");
// for (let y in rootHub) {
//     // let y = x.name
//     let x = rootHub[x].y
//   if (getValue == y){
//         console.log("The " + x + "has age of " + y)
//     }
// }

//  i = 0;
// for ( var Personeel in rootHub){
//  // console.log(rootHub[Personeel])
// var people = rootHub[Personeel]
// if (people === 'java'){
// console.log('user found ')
// }else{
//   console.log('not found')
// }

// }

//  let getValue = prompt("search for a name ");
 

for(user in rootHub){
  let currentuser = (rootHub[user].age)
  let displayname = (rootHub[user].name)
  console.log(currentuser)
  console.log(displayname)
  

// //   if (currentuser === getValue ){
// //     document.write(user,':',rootHub[user].name)
// //        console.log(user,':',rootHub[user].name)
       
// //   // } else{
// //   //   console.log('not here')
    
// //   }

// // // 
 

// // // if ( currentuser === user ){
// // // console.log('user found ')
// // // }else{
// // //    console.log('user not found') 
// // // }

}