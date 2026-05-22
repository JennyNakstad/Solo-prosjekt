console.log("hei")

function klikkDestinasjon(by) {
    document.getElementById("destinasjonendin").textContent = by
}


function selectCard(card) {
    card.classList.toggle("selected")

    let aktivitetListe = document.getElementById("aktivitetendin")
    let navn = card.textContent

    if (card.classList.contains("selected")) {
        let li = document.createElement("li")
        li.textContent = navn
        li.id = navn 

        aktivitetListe.appendChild(li)

    } else {
        let element = document.getElementById(navn)
        if (element) {
            element.remove()
        }
    }
}

const opplevelserElm = document.getElementById("opplevelserid")
const opplevelsergridElm = document.getElementById("opplevelsergrid")
opplevelserElm.addEventListener("click", function () {
                opplevelsergridElm.classList.remove("hidden")
                naturgridElm.classList.add("hidden")
                kulturgridElm.classList.add("hidden")
            })
           
const kulturElm = document.getElementById("kulturid")
const kulturgridElm = document.getElementById("kulturgrid")
kulturElm.addEventListener("click", function () {
                kulturgridElm.classList.remove("hidden")
                naturgridElm.classList.add("hidden")
                opplevelsergridElm.classList.add("hidden")
            })

const naturElm = document.getElementById("naturid")
const naturgridElm = document.getElementById("naturgrid")
naturElm.addEventListener("click", function () {
                naturgridElm.classList.remove("hidden")
                kulturgridElm.classList.add("hidden")
                opplevelsergridElm.classList.add("hidden")
            })


const gridmatElm = document.getElementById("gridmat")

function scrollHoyre(){
    gridmatElm.scrollBy({
        left: 260,
        behavior: "smooth"
    })
}

function scrollVenstre(){
    gridmatElm.scrollBy({
        left: -260,
        behavior: "smooth"
    })
}

function selectMatCard(matcard) {
    matcard.classList.toggle("selected")

    let matListe = document.getElementById("matendin")
    let navn = matcard.textContent

    if (matcard.classList.contains("selected")) {
        let li = document.createElement("li")
        li.textContent = navn
        li.id = matnavn

        matListe.appendChild(li)

    } else {
        let element = document.getElementById(matnavn)
        if (element) {
            element.remove()
        }
    }
}