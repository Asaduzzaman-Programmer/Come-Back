function kitchen(){
    let roast = 0;
    return function(){
        roast++
        return roast;
    }
}

const bal = kitchen()
console.log(bal());
console.log(bal());
console.log(bal());
console.log(bal());
console.log(bal());
