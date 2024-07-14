const text= document.querySelector(".text-circle");
text.innerHTML=text.innerText.split('').map(
    (char, i)=>
    `<span style="transform:rotate(${i *12.5}deg)"> ${char}</span>`
).join(' ');