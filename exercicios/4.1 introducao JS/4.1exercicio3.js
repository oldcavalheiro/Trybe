let a = 8; 
let b = 5; 
let c = 3;

if (a > b && a > c) {
    console.log("número maior é", a);
}
else if (b > c) {
    console.log("número maior é", b);
}
else if (c > b) {
    console.log("número maior é", c);
} else {
    console.log("todos números identicos", a);
}