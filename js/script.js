{
    function HelloMessage() {
        console.log("Hello my friend")
    }
    HelloMessage();
    const HideAdvertising = () => {
        const button = document.querySelector(".buttonHideAdvertising")
        const reklama = document.querySelector(".reklama")
        reklama.remove();
    };

    const toogleBackground = (zmienTlo) => {
        const calaStrona = document.querySelector(".body__background")
        calaStrona.classList.toggle("body__background-change")
        if (zmienTlo.innerText === "Zmień tło na różowe") {
            zmienTlo.innerText = "Zmień tło na szare";
        } else
            zmienTlo.innerText = "Zmień tło na różowe";
    };

    const init = () => {
        const zmienTlo = document.querySelector(".button2");
        zmienTlo.addEventListener("click", toogleBackground);
        const button = document.querySelector(".buttonHideAdvertising");
        button.addEventListener("click", HideAdvertising);
       
    };

    init();
}