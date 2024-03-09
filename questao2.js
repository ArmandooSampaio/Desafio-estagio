const fibbonaci = () =>{
    

    const isInSequence = (num) => {
        let current = 0;
        let next = 1;
        if(num === current || num === next){
            return true;
        }

        while(num >= next){
            let aux = next;
            next = current + next;
            current = aux;

            if(next === num){
                return true;
            }
        }
        return false;
    }

    return{isInSequence};
}

fibo = fibbonaci();

console.log(fibo.isInSequence(0));
console.log(fibo.isInSequence(1));
console.log(fibo.isInSequence(2));
console.log(fibo.isInSequence(3));
console.log(fibo.isInSequence(4));
console.log(fibo.isInSequence(7));
console.log(fibo.isInSequence(34));
console.log(fibo.isInSequence(35));




