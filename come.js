 const a = 4;
 const b = "sawon";
 const ages = [45, 45, 45];
 const student = {id: 45, class:7};
 console.log(typeof a, typeof b, typeof ages, typeof student);

 let x = 7;
 let y = x;
 console.log(x, y)
 y = 5;
 console.log(x, y)


// let p = {job: "web developer"};
// let q = p;
// q = {job: "backend"}
// console.log(p, q)


let e = {class:7};
let f = e;
f.class=10;
console.log(e, f);

let g = {class:7};
let h = g;
h={class: 4};
console.log(g, h);
