//DO THE BELOW PROGRAMS IN ANONYMOUS AND IIFE Function

//PRINT ODD NUMBER IN AN ARRAY
//ANONYMOUS

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];


b = function() {
let c = [];
for (let i = 0; i < a.length; i++) {
if (a[i] % 2 != 0) {
c.push(a[i]);

}

}

console.log(c);

};

b();

//IIFE
var array=[1,2,3,4,5,6,7,8,9];
 (function (array)
 {
    for(var i=0; i<array.length; i++)
    {
      if(array[i]%2!==0)
      {
         console.log(array[i]);
      }
    }
 })(array);

//sum of all numbers in array
//anonymous
a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
b = function() {
let sum = 0;
for (let i = 0; i < a.length; i++) {
sum = sum + a[i];
}
return sum;
}
console.log(b());

//IIFE
a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
b = (function() {
     let sum = 0;

    for (let i = 0; i < a.length; i++) {
    
    sum = sum + a[i];
    
    }
    
    console.log(sum);
    
    })();

    //ROTATE AN ARRAY BY K TIMES
    //AN0NYMOUS
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let k = 3;
    
    let rot = function(arr) {
    
    for (let i = 0; i < k; i++) {

    arr.unshift(arr.pop());
    
    }
    
    console.log(arr);
    
    }
    
    rot(arr);
    
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    //IIFE
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let k = 9;
    let rot =(function(arr) {
        for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop());
        }
        console.log(arr);
        })(arr);

//CONVERT ALL THE STRINGS TO TITLE CAPS IN A STRING ARRAY
// ANONYMOUS
b = function(str) {
    var sentence = str.toLowerCase().split(“ “);
    for (let i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    console.log(sentence.join(“ “));
    return sentence;
    }
    b(“java script is the best”);

    //IIFE
    (function(str) {

        var sentence = str.toLowerCase().split(“ “);
        for (let i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
        }
        console.log(sentence.join(“ “));
        
        return sentence;

        })(“java script is the best”);

        //RETURN ALL THE PRIME NUMBER


let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

//anonymous function

b = function(…a) {

for (let i = 0; i < a.length; i++) {
for (let j = 2; j <= a[i] — 1; j++) {
if (a[i] % j == 0) {
return false;
}

}
return a[i] > 1;
}
};
console.log(a.filter(b));

//IIFE
(prime = function(a) {

    for (let j = 2; j <= a — 1; j++) {
    if (a % j == 0) {
    return false;
    }
    }
    return a > 1
    })();
    console.log(a.filter(prime))
//NAME THE PALINDROMES IN AN ARRAY
    let arr = [‘aha’, ‘raghu’, ‘gaag’, ‘hello’, ‘jooj’, ‘kook’];

    //anonymous function
    
    let palin = function(arr) {
    
    let c = [];
    for (let i = 0; i < arr.length; i++) {
    let strarr = arr[i]
    let revstr = strarr.split(‘’).reverse().join(‘’);
    if (strarr == revstr)
    c.push(strarr);
    }
    }
    console.log(c);

    }
    palin(arr);

    //IIFE function

(function(arr) 
    let c = [];
    for (let i = 0; i < arr.length; i++) {
    let strarr = arr[i]
    let revstr = strarr.split(‘’).reverse().join(‘’);
    if (strarr == revstr) {
    c.push(strarr);
    }
    }
    console.log(c);
    })(arr);


//Return median of two sorted arrays of same size

let arr1 = [45, 56, 23, 78, 89, 57, 70];

let arr2 = [23, 56, 78, 90, 80, 32, 67];
//anonymous function

let med = function(arr1, arr2) {
let l = arr1.length;
arr1.sort(function(a, b) { return a — b });
arr2.sort(function(a, b) { return a — b });
console.log(arr1, arr2);
if (arr1.length % 2 === 0) {
console.log((arr1[l / 2] + arr1[l / 2–1]) / 2)
console.log((arr2[l / 2] + arr2[l / 2–1]) / 2)
}
else {
console.log((arr1[(l — 1) / 2]))
console.log((arr2[(l — 1) / 2]))
}
};

med(arr1, arr2);

//IIFE function

(function(arr1, arr2) {
let l = arr1.length;
arr1.sort(function(a, b) { return a — b });
arr2.sort(function(a, b) { return a — b });
console.log(arr1, arr2);
if (arr1.length % 2 === 0) {
console.log((arr1[l / 2] + arr1[l / 2–1]) / 2)
console.log((arr2[l / 2] + arr2[l / 2–1]) / 2)
}
else {
console.log((arr1[(l — 1) / 2]))
console.log((arr2[(l — 1) / 2]))
}
})(arr1, arr2);

//REMOVE DUPLICATE FROM AN ARRAY

let arr = [1, 2, 2, 2, 4, 6, 6, 6, 7, 7, 8, 8, 8, 8, 8, 9, 22, 4, 4, 567, 67, 78, 78, 45, 67, 45, 45, 45, 78, 67, 56, 54];

//anonymous function

let dup = function(arr) {
let newarr = […new Set(arr)];
console.log(newarr);
}
dup(arr);

//IIFE function
(function(arr) {
let newarr = […new Set(arr)];
console.log(newarr);
})(arr)



      
















