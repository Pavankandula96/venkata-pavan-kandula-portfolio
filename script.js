const words = [
"DevOps Engineer",
"AWS • Kubernetes • Docker",
"Automation Enthusiast"
]

let i = 0
let j = 0
let current = ""
let isDeleting = false

function type(){

current = words[i]

if(!isDeleting){
document.querySelector(".typing").textContent =
current.substring(0,j+1)
j++

if(j === current.length){
isDeleting = true
setTimeout(type,1000)
return
}

}else{

document.querySelector(".typing").textContent =
current.substring(0,j-1)
j--

if(j === 0){
isDeleting = false
i++
if(i === words.length){ i = 0 }
}

}

setTimeout(type,100)

}

type()
