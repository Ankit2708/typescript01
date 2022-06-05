const numElement1 = document.getElementById('num1') as HTMLInputElement
const numElement2 = document.getElementById('num2') as HTMLInputElement
const buttonElement=document.querySelector('button')!
const numResults:Number[]=[]
const textResults:String[]=[]
type NumorString= number|string
type Result={val:number;timestamp:Date}//type script functinality
interface ResultObj{//interface can also be used
    val:number;
    timestamp:Date;
}
function add(num1:NumorString,num2:NumorString){
    if(typeof num1==="number" && num2==="number"){
        return num1 + num2
    }else if(typeof num1==="string" && num2==="string"){
        return num1 + ''+ num2
    }
    return +num1 + +num2
}

function printResult(resultObj:Result){
    console.log(resultObj.val)
}
console.log(add(1,6))
console.log(add(1,6))
buttonElement.addEventListener('click',()=>{
    const num1=numElement1.value
    const num2=numElement2.value
    const result=add(+num1,+num2)
    numResults.push(result as Number)
    const stringResult=add(num1,num2)
    textResults.push(stringResult as string)
    console.log(result)
    printResult({val:result as number,timestamp:new Date()})
    console.log(numResults,textResults)
})
const myPromise=new Promise<string>((resolve,reject)=>{//string generics in promise
    setTimeout(()=>{
        console.log('It worked')
    },1000)
})
myPromise.then((result)=>{
    console.log(result.split('w'))
})
