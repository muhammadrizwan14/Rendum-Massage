let btn=document.getElementById("btn");
let output=document.getElementById("output");
let massage=[

  '  Hi 😍 ',

 '  😍 Your beauty killed all other women in the world for me.',

  ' 😍 I can’t get you out of my mind.',
  '  kia hl hai 😍 ',

    ' 😍 God was definitely showing off when he created you.',

        ' 😍 Do you miss me? Type “Y” for Yes.',

        '  bhot yad ati h tmhri 😍 ',

           ' 😍 I woke up thinking about you.',

            '😍 I can’t wait to see you.',

        ' 😍 Roses are red, violets are blue—baby, I sure miss you.',

             ' 😍 Sweet dreams! I hope I’m in them tonight.',

          ' 😍 I’m still wearing the smile you gave me.',
];
btn.addEventListener('click' ,function(){
    let randomMassage=massage[Math.floor(Math.random()*massage.length)]
    var div=document.createElement("div")
    div.innerHTML=randomMassage
    div.classList.add("active")
    output.append(div)
    
})


function showDiv() {
   document.getElementById('output').style.display = "block";

 
}

// setTimeout(function() {
//     $('output').fadeOut('fast');
// }, 2000); // <-- time in milliseconds

// let x = document.getElementById("output");
//   x.className.style.hidden = "show";
//   setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1000);
