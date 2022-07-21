        
inputItem=document.getElementById('inputItem')
inputItem.addEventListener("keyup", (event)=>{
    if(event.keyCode === 13){
        addItem()
    }
})
let itemList=[]

getFromStorage()

function addItem() {
    let text=inputItem.value.trim()
    if(text){
        itemList.push(text)
        addToLocalStorage(itemList)
        console.log(`added ${text}`)
        getItems()
    }
    inputItem.value=''
    
};
function getItems(){
    ul=document.getElementById('itemList')
    ul.innerHTML=''
    itemList.forEach((value,index)=>{
        const li=document.createElement('li')
        li.innerHTML=`<span>${value}</span><button onclick=onDelete(${index})>X</button>`
        ul.appendChild(li)
    })

}

function onDelete(id){
    let item = itemList[id]
    itemList.splice(id,1)
    console.log(`deleted ${item} from list`)
    getItems()
    addToLocalStorage(itemList)


}
function clearAll(){
    itemList=[]
    addToLocalStorage(itemList)
    getItems()
}
function addToLocalStorage(todos){
    localStorage.setItem('todos',JSON.stringify(todos))
    getItems()
}
function getFromStorage(){
    const items=localStorage.getItem('todos')
    if(items){
        itemList=JSON.parse(items)
        getItems()
    }
}
