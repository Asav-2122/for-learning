// let textAreaChar  = document.getElementById('text-area');
// let totalChar = document.getElementById('total-char');
// let remainingChar = document.getElementById('remain-char');
// let btn = document.getElementById('btn');

// let characterCount = ()=>{
//     totalChar.innerText = textAreaChar.value.length;
//     remainingChar.innerText = 50 - textAreaChar.value.length;
// }

// let copyText = () =>{
//     textAreaChar.select();
//     navigator.clipboard.writeText(textAreaChar.value);
// }

// textAreaChar.addEventListener('keyup',characterCount);
// btn.addEventListener('click',copyText);



var x= 7;

function learningHoisting(){
    console.log("Learning Hoisting");
}
learningHoisting();
console.log(x);


