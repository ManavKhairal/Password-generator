
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let randomIndex = ""
let pass1 = ""
let pass2 = ""


document.getElementById("genPass").addEventListener('click',function randomPass(){
    pass1 = ""
    pass2 = ""
    for(let i = 0; i <= 15; i++){
        pass1 += characters[Math.floor(Math.random() * characters.length)];
    }

    for(let i = 0; i <= 15; i++){
        pass2 += characters[Math.floor(Math.random() * characters.length)];
    }
     document.getElementById("passResult1").textContent = pass1
    document.getElementById("passResult2").textContent = pass2

    // Copy To Clipboard Secttion
    const copyBtn1 = document.getElementById("result1")
    const copyBtn2 = document.getElementById("result2")
   
    copyBtn1.addEventListener("click", function(){
       const text1 = copyBtn1.innerText
       navigator.clipboard.writeText(pass1)
       alert("Password Copied!")
    })


    copyBtn2.addEventListener("click", function(){
        const text2 = copyBtn2.innerText
        navigator.clipboard.writeText(pass2)
        alert("Password Copied!")
     }

    
   
   )
   
}
 )
 




