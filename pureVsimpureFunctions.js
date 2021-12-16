
//=> explaination is on the word file (pureVSimpureFunctions)

//pure function
const pureAdd=(num1,num2)=>{
    return num1 + num2;
}
// if i give it the same values it gives me the same result
pureAdd(5,5);
// 10
// it will always return the same value


// impure function
let x=0;
const impureAdd=(num)=>{
    return (x+=num);
}

// it will return a different value every time
impureAdd(5)
// 5   x=5 !!
impureAdd(5)
// x+5
// 10
