let list = document.querySelector("#to-do-list");
let addInput = document.querySelector("#inlineFormInputGroup");
let searchInput = document.querySelector("#search-fom input");
let addBtn = document.querySelector(".custom-email-f");

list.addEventListener("click", (e)=>{
        if(e.target.className == "delete-btn white"){
           e.target.parentNode.remove()
           if(list.children.length==0){
             let listEmpyMsg = document.createElement("div");
             listEmpyMsg.style.textAlign = "center"
             listEmpyMsg.style.color = "blue"
             listEmpyMsg.style.marginTop = "70px"
             listEmpyMsg.innerText = " شما هیچ لیست برنامه ای ندارید " 
             listEmpyMsg.id = "emptyMsg"
             list.appendChild(listEmpyMsg)
           }
        }
    
})

addBtn.addEventListener("click",(e)=>{
  e.preventDefault();
  if(!addInput.value){
    return
  }
  if(document.querySelector("#emptyMsg")){
    document.querySelector("#emptyMsg").remove();
  }
  list.append(createListItem(addInput.value))
  addInput.value = ""
})
function createListItem(itemValue) {
  let item = document.createElement("li")
  let btn = document.createElement("span")
  let title = document.createElement("span")

  item.className = "to-do-item"

  btn.className = "delete-btn white"
  btn.innerText = "حذف"

  title.className = "title"
  title.innerText = itemValue

  item.appendChild(btn)
  item.appendChild(title)

  return item;
}

searchInput.addEventListener("input", (e)=>{
  Array.from(list.children).forEach(Element=>{
    if(document.querySelector("#emptyMsg")){
      return
    }
    if(Element.querySelector(".title").innerText.toLowerCase().includes(e.target.value.toLowerCase())){
              Element.style.display = "flex"
    }else{
              Element.style.display = "none"
    }
  })
})