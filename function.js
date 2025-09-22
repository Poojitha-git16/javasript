//functions are used to code reusability
//to perform the multiple task at single code
//fist way
// function add()
// {
// var a=98;
// var b=78;
// document.write(a+b);h
// console.log(a+b);
// };
// add();
//second way ES6(represents unique & immutable indebtifier)
// const add =() => {
//      var a=98;
//      var b=78;
//      document.write(a+b);
//      console.log(a+b);

// };
// add();
// const name =() =>
// {
//     b = "poojitha";
//     // document.write(b);
//     console.log(b);
// };
// name();
//ES7 write in single line of code
// const add=(43,76);
// const add=(a,b) =>console.log(a+b);
// add(56,67);
// console.log(b);
// b=87;-its not excute because b is not defined
//hosting is to declare the variable on the top
let name="john";
function apna(){
    let name ="poojitha";
    document.write(`Hello, my name is $(name)`);

}
// document.write(`Hello my name is $(name)`);
apna();