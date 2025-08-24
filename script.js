
function displayScreen(num)
{
    result.value+=num;
    console.log(num);
    
    
}
function allClear()
{
    result.value="";
}
function backSpace()
{
    result.value = result.value.slice(0,-1);
   
    
}

function operation()
{
    let out = eval(result.value);
    console.log(out);
    result.value=out;
    
}