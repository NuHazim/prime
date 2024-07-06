const number=document.getElementById("num");
const result=document.getElementById("result");
number.addEventListener("keydown",(event)=>{
    if(event.key==="Enter"){
        const num=Number(number.value);
        let prime=0;
        for(let i=1;i<num;i++){
            if(num%i==0){
                prime++;
            }
        }
        if(prime==1){
            result.textContent=num+" is a prime number ";
        }
        else{
            result.textContent=num+" is a compound number(not a prime number)"
        }
        number.value="";
    }
})