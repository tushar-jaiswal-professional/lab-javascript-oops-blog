class Blog {
    constructor(title, detail) {
        this.title = title
        this.detail = detail
    }
    addTitle(innerdiv) {
        let title_card = document.createElement("h1")
        title_card.setAttribute("id", "blog-title")
        innerdiv.appendChild(title_card)
        title_card.innerHTML = this.title
    }
    addDescription(innerdiv) {
        let desccard = document.createElement("p")
        desccard.setAttribute("id", "blog-description")
        innerdiv.appendChild(desccard)
        desccard.innerHTML = this.detail
    }
    addEdit(buttondiv){
        let editbtn = document.createElement("button")
        editbtn.setAttribute("id","edit-button")
        editbtn.setAttribute("class","button")
        editbtn.innerText = "Edit";
        buttondiv.appendChild(editbtn)
    }
    addDelete(buttondiv){
        let deletebtn = document.createElement("button")
        deletebtn.setAttribute("id","delete-button")
        deletebtn.setAttribute("class","button")
        deletebtn.innerText = "Delete";
        buttondiv.appendChild(deletebtn)
    }
}

let add_Blog = () =>{
    document.querySelector("#popupContact").style.display = "block"
    document.querySelector(".body-div2").style.display = "none"
    document.querySelector("#title").value = "";
    document.querySelector("#detail").value = "";
}

document.querySelector("#addBlog").addEventListener("click",add_Blog);

let post_Blog = () =>{
    document.querySelector("#popupContact").style.display = "none"
    document.querySelector(".body-div2").style.display = "flex"

    let inputtitle = document.querySelector("#title")
    let inputdescription = document.querySelector("#detail")
    let object = new Blog(inputtitle.value, inputdescription.value)

    let divisontag = document.createElement("div")
    divisontag.setAttribute("class", "article-card")

    let image = document.createElement("img")
    let path = "./assets/javascript.png"
    image.setAttribute("src", path)

    let innerdiv = document.createElement("div")
    innerdiv.setAttribute("class", "card-text")
    innerdiv.setAttribute("id", "card-text")

    divisontag.appendChild(image)
    divisontag.appendChild(innerdiv)

    let buttondiv = document.createElement("div")
    buttondiv.setAttribute("class","card-buttons")
    buttondiv.setAttribute("id","card-buttons")

    divisontag.appendChild(buttondiv)
    document.querySelector(".body-div2").appendChild(divisontag)

    object.addTitle(innerdiv)
    object.addDescription(innerdiv)
    object.addEdit(buttondiv)
    object.addDelete(buttondiv)
}

document.querySelector("#post").addEventListener("click",post_Blog)

document.querySelector("#close").addEventListener("click", function() {
    document.querySelector("#popupContact").style.display = "none"
    document.querySelector(".body-div2").style.display = "flex"
})

/*
document.querySelector("#delete-button").addEventListener("click", function() {
    alert("Deleting the post!")
    document.querySelector(".body-div2").removeChild(document.querySelector(".article-card"));
})
*/