let array = [1, 1.2 , "hello", 2, 3];

console.log("length of the array:", array.length);
array.push(4); 
console.log("after push(4):", array);
array.pop(); 
console.log("pop():", array);

array.shift();
console.log("shift():", array);

array.unshift(0);
console.log("unshift(0):", array);

delete array[2];
console.log("delete:", array);

const Array1 = array.join("-");
console.log("joined Array:", Array1);

const Array2 = [7, 8, 9];
const Array3 = array.concat(Array2); 
console.log("Concatenat Array:", Array3);

const Array4 = array.splice(2, 2, 10, 11);
console.log("After splice():", Array4);

const Array5 = Array4.slice(1, 4);
console.log("Slice():", Array5);

const temp = [1, [2, 3], [4]];
console.log("flat():", temp.flat());


const person = {
    name: "Urvin Thummar",
    age: 19,
};


function display(obj) {
    console.log("name:", obj.name+ " age : "+obj.age);
}

display(person);