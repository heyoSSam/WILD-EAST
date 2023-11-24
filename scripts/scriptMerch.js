const buttonT = document.getElementById("t-shirt");
const buttonCargo = document.getElementById("cargo");
const buttonNoski = document.getElementById("noski");

buttonT.addEventListener("click", () => {
    window.open('https://noncitizen.store/product/t-shirt-magdalene-navy-blue', '_blank');
});

buttonCargo.addEventListener("click", () => {
    alert("Sorry, this product is out of stock. Check later.");
});

buttonNoski.addEventListener("click", () => {
    window.open('https://noncitizen.store/product/socks-logo-beige', '_blank');
});