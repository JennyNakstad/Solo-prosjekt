console.log("hei")

const menuToggle = document.querySelector(".menu-toggle")
const nav = document.querySelector("nav")
const icon = document.querySelector(".menu-toggle i")

menuToggle.addEventListener("click", function () {

    nav.classList.toggle("active")

    if (nav.classList.contains("active")) {
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-xmark")
    }
    else {
        icon.classList.remove("fa-xmark")
        icon.classList.add("fa-bars")
    }

})

function klikkDestinasjon(element, by) {
    document.getElementById("destinasjonendin").textContent = by

    let alleByer = document.querySelectorAll(".by")

    alleByer.forEach(bykort => {
        bykort.classList.remove("selected")
    })

    element.classList.add("selected")
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

function scrollHoyre() {
    gridmatElm.scrollBy({
        left: 260,
        behavior: "smooth"
    })
}

function scrollVenstre() {
    gridmatElm.scrollBy({
        left: -260,
        behavior: "smooth"
    })
}

function selectMatCard(matcard) {
    matcard.classList.toggle("selected")

    let matListe = document.getElementById("matendin")
    let matnavn = matcard.querySelector("h4").textContent

    if (matcard.classList.contains("selected")) {
        let li = document.createElement("li")
        li.textContent = matnavn
        li.id = matnavn

        matListe.appendChild(li)

    } else {
        let element = document.getElementById(matnavn)
        if (element) {
            element.remove()
        }
    }
}

