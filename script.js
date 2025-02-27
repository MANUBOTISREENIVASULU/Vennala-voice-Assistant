let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")
let mic=document.querySelector("#mic")


function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="en-US"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning sir")
    }
    else if(hours>=12 && hours<16){
        speak("Good Afternoon sir")
    }else{
        speak("Good Evening sir")
    }
}
//window.addEventListener('load',()=>{
  //  wishMe()
//})
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition=new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="flex"
})
function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"
    if (message.includes("hello")||message.includes("hi")||message.includes("hey")){
        speak("Hello sir,how can I help you")
    }
    else if(message.includes("who are you")){
        speak("I am Vennala, your virtual voice assistant, created by Srinivasulu sir")
    }else if(message.includes("open youtube")){
        speak("open youtube")
        window.open("https://www.youtube.com","_blank")
    }else if(message.includes("open google")){
        speak("open google")
        window.open("https://www.google.com","_blank")    
    }else if(message.includes("open facebook")){
        speak("open facebook")
        window.open("https://www.facebook.com","_blank")
    }else if(message.includes("open instagram")){
        speak("open instagram")
        window.open("https://www.instagram.com","_blank")
    }
    else if(message.includes("open calculator")){
        speak("open calculator")
        window.open("calculator://")
    }else if(message.includes("open whatsapp")){
        speak("open whatsapp")
        window.open("whatsapp://") 
    }
    else if(message.includes("open amazon")){
        speak("open amazon")
        window.open("https://www.amazon.in","_blank")
    }
    else if(message.includes("open flipkart")){
        speak("open flipkart")
        window.open("https://www.flipkart.com","_blank")
    }
    else if (message.includes("time")){
        let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"long",year:"numeric"})
        speak(date)    
    }
    else if(message.includes("ok bye")||message.includes("stop")){
        speak("ok sir,have a nice day")
    }
    else if(message.includes("how are you")){
        speak("I am Fine sir,please care your health sir and how can i help you")
    }
    else if(message.includes("what can you do")){
        speak("I can open youtube,google,facebook,instagram,calculator,amazon,flipkart,whatsapp and tell you about anything you want to know")
    } 
    else if(message.includes("i can use you in any services")){
        speak("yes sir,I can help you in 24/7 services sir")
    }
    else {
        let finalText="this is what i found on internet regarding " + message.replace("vennala","")||message.replace("vanilla","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("vennala","")}`,"_blank")
    }
}

    
    
    
