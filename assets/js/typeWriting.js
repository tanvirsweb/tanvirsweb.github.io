const text = document.querySelector(".typing-animation");

const textLoad = ()=>{
    setTimeout( ()=>{
        text.textContent = "a CSE Engineer ."
    }, 0);
    setTimeout( ()=>{
        text.textContent = "a Web Developer ."
    }, 4000);
    setTimeout( ()=>{
        text.textContent = "an Android Developer ."
    }, 8000);
    setTimeout( ()=>{                
        text.textContent = "proficient in PHP .";
    }, 12000);
    setTimeout( ()=>{
        text.textContent = "proficient in Node.js .";
    }, 16000);
    setTimeout( ()=>{
        text.textContent = "proficient in C .";
    }, 20000);
    setTimeout( ()=>{
        text.textContent = "proficient in C++ .";
    }, 24000);
    setTimeout( ()=>{
        text.textContent = "proficient in Python .";
    }, 28000);
    setTimeout( ()=>{
        text.textContent = "proficient in Java .";
    }, 32000);
    setTimeout( ()=>{
        text.textContent = "proficient in Prisma .";
    }, 36000);
    setTimeout( ()=>{
        text.textContent = "proficient in MySQL .";
    }, 40000);
    setTimeout( ()=>{
        text.textContent = "proficient in ExpressJS .";
    }, 44000);
}

textLoad(); // 1st time call textLoad() after 4 seconds (1 time)
setInterval(textLoad, 48000); // after each 16 seconds call textLoad();

