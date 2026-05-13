console.log("hei")

function klikkDestinasjon(by) {
    document.getElementById("destinasjonendin").textContent = by
}

function selectCard(card) {
    card.classList.toggle("selected")
    document.getElementById("aktivitetendin").textContent = card
}