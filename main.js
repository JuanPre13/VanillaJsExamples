//Callbacks Functions


/*
function main(callback){
    alert('Primero hago algo y luego ejecuto un callback');
    callback();
}
function greeting(){
    alert('Soy un callback')
}

main(greeting);

main(function(){
    alert('saludos');  
})
*/
/*
function userName(callback){
    let name = prompt('Give me your name: ');
    callback(name);
}

function buildGreeting(name){
    alert('Hello '+ name)
}
userName(buildGreeting);
*/
//parameters

function math(a,b,callback){
    let res = a+b;
    callback(res);
}


function suma(res){
    if (res > 10){
        alert('el resultado de la suma es muy grande: '+res);
    }else{
        alert('el resultado de la suma es muy pequeño: '+res);
    }
}
math(6,6    ,suma)

