let btn=document.getElementById("btn");
let output=document.getElementById("output");
let massage=[

  '  Hi π ',

 '  π Your beauty killed all other women in the world for me.',

  ' π I canβt get you out of my mind.',
  '  kia hl hai π ',

    ' π God was definitely showing off when he created you.',

        ' π Do you miss me? Type βYβ for Yes.',

        '  bhot yad ati h tmhri π ',

           ' π I woke up thinking about you.',

            'π I canβt wait to see you.',

        ' π Roses are red, violets are blueβbaby, I sure miss you.',

             ' π Sweet dreams! I hope Iβm in them tonight.',

          ' π Iβm still wearing the smile you gave me.',
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
