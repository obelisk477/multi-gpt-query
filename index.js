let addQueryButtons = document.querySelectorAll("i")
let cardHolder = document.getElementById("cardHolder")

let staticCardTemplate =`<div class="card col">
<div class="card-body">
  <div class="input-group">
    <div class="input-group-prepend">
      <span class="input-group-text">With textarea</span>
    </div>
    <textarea class="form-control" aria-label="With textarea"></textarea>
  </div>
</div>
</div>`

let dynamicCardTemplate = `<div class="card col">
<div class="card-body">
  <form>
    <div class="form-group">
      <label for="exampleFormControlFile1">Example file input</label>
      <input type="file" class="form-control-file" id="exampleFormControlFile1">
    </div>
  </form>
</div>
</div>`

function handleQueryAdd(event) {
    let cardType = event.target.id
    if (cardType === "static") {
        addStaticCard()
    } else {
        addDynamicCard()
    }
}

function addDynamicCard() {
    let newDynamic = document.createElement('div')
    cardHolder.appendChild(newDynamic)
    newDynamic.outerHTML = dynamicCardTemplate
}

function addStaticCard() {
    let newStatic = document.createElement('div')
    cardHolder.appendChild(newStatic)
    newStatic.outerHTML = staticCardTemplate

}

for (let i=0; i< addQueryButtons.length; i++) {
    addQueryButtons[i].addEventListener('click', handleQueryAdd)
}



