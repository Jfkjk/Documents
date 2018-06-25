document.write(" <br/> numbers from 1 to 20. ");
for(var i = 1; i <= 20; i++){
    document.write("<br/>",i);
}

document.write(" <br />  numbers from 1 to 20");
for(var i = 1; i <= 10; i++){
    document.write("<br/>",i+i);
}

document.write(" <br/> odd numbers from 1 to 20. ");
for(var i = 1; i <= 20; i++){
    document.write(i++);
}
document.write("  <br/> multiples of 5 up to 100. ");
for(var i = 1; i <=20 ;i++){
    document.write("<br/>",i+i+i+i+i);
}
document.write("<br/> square numbers up to 100. ");
for(var i = 1; i <= 10; i++){
    document.write("<br/>",i*i);
}
document.write(" <br/> numbers Backwards 20 to 1. ");
for(var i=20 ;i<=20 && i>=1 ; i--){
    document.write("<br/>",i);
}
document.write(" <br/> even numbers backwards from 20 to 1. ");
for(var i=20 ;i<=20 && i>=1 ; i--){
    if(i%2===0){
        document.write("<br/>",i);
    }
   
}
document.write("<br/> 0dd numbers backward 20 to 1.");
for(var i=20 ;i<=20 && i>=1 ; i--){
    if(i%2!=0){
    document.write("<br/>",i);
    }
    }
document.write("  <br/> multiples of 5 counting backwards from 100. ");
for(var i = 100; i >=5 ;i-=5){
    document.write("<br/>",i);
}
document.write("<br/> square numbers countind down from 100. ");
for(var i = 10; i >= 1; i--){
    document.write("<br/>",i*i);
}


    
   


