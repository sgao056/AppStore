const advertisement = document.getElementById('advertisement');

const adArray = [
    {
        name:"ad 1", 
        text:"insert ad 1"
    },
    {
        name:"ad 2", 
        text:"insert ad 2"
    },
    {
        name:"ad 3", 
        text:"insert ad 3"
    },
]

adArray.forEach(item=>{
    const newAd = document.createElement("div")
    newAd.innerHTML = `<h1>${item.text}</h1>`
    advertisement.appendChild(newAd)
})