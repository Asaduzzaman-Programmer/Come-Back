function stopWatch(){
    const watch = 0;
    return function(){
        watch++
        return watch;
    }
}
const watch1 = stopWatch()
console.log(watch1);
