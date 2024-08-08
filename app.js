let number = 0 

for (let i = 0; i<100; i++) {
   number = i + 1
   if (number % 3 === 0 && number % 5 === 0)
   console.log('FizzBuzz')
   else if (number % 3 === 0)
   console.log('Fizz')
   else if (number % 5 === 0)
   console.log('Buzz')
   else
   console.log(number)
}


/*  METODO ALTERNATIVO

let number = 0 
let resto3 = 0 
let resto5 = 0

for (let i = 0; i<100; i++) {
   number = i + 1
   resto3 = number % 3
   resto5 = number % 5
   if (resto3 === 0 && resto5 === 0)
   console.log('FizzBuzz')
   else if (resto3 === 0)
   console.log('Fizz')
   else if (resto5 === 0)
   console.log('Buzz')
   else
   console.log(number)
}

*/