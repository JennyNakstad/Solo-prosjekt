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