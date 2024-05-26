//DO THE BELOW PROGRAM IN ARROW FUNCTIONS.
// print odd numbers in an array
let input = [1,2,3,4,5,6,7,8,9]

let oddNumber = (input) => {
for(let i of input)
{
    if(i%2 !== 0)
    {
        console.log(i);
    }
}
}
oddNumber(input);


//CONVERT ALL THE STRINGS TO TITLE CAPS IN A STRING ARRAY

let strArray = ['ROse', 'Karti', 'pinK', 'red', 'LETTerS']

let titleCap = (strArray) => {
    for(let i=0; i<strArray.length; i++) {
        strArray[i] =  strArray[i].toLowerCase();
        strArray[i] = strArray[i].charAt(0).toUpperCase()+strArray[i].slice(1);
    }
    return strArray;
}
console.log(titleCap(strArray));


//SUM OF ALL NUMBERS IN AN ARRAY

let input = [1,2,3,4,5,6,7,8,9];
(()=> {
    let i=0;
    let sum=0;
    while(i<input.length) {
        sum=sum+input[i]
        i++;
    }
    console.log('Sum of all number is',sum);
})();


//RETURN ALL THE PRIME NUMBERS IN AN ARRAY

let input = [1,2,3,4,5,6,7,8,9,10];

let prime = (input)=>{
    let i=0;
    let arr=[];
    while(i<input.length) {
        let flag=0;
        for(let j=2; j<=input[i]/2; j++)
        {
            if(input[i]%j === 0)
            {
                flag++;
                break;
            }
        }
        if(flag === 0) {
         arr.push(input[i]);
        }
        i++;
    }
    return arr.join();
}

console.log(prime(input));


//RETURN ALL THE PALINDROMES IN AN ARRAY

let input = [12,15,555,11,'mom']


let palindrome = (input)=> {
    let i=0;
    let ans="";
    while(i<input.length) {
      let temp="";
      temp=temp+input[i];
      let flag=0;
      for(let j=0; j<temp.length; j++)
      {
         if(temp[j] == temp[temp.length-1-j])
         {
            flag++;
         }
         else
         {
            break;
         }
      }
        if(flag === temp.length) {
         ans=ans+input[i]+" ";
        }
        i++;
    }
    if(ans.length>0)
    {
        return ans.trimEnd();
    }
    else
    {
        return 'No Palindrome found'
    }
}
console.log(palindrome(input));
