export function clicKey() {

    document.addEventListener("keydown", (event) => {
        // let tab = ["a", "z", "e", "r", "t", "y", "u", "i", "o"];
        let key = event.key;
        let audio = document.getElementById(key);


        if (audio !== null) {
            let previousSibling = audio.previousSibling;
            console.log(previousSibling);
            audio.play();
            audio.currentTime = 0;
            previousSibling.classList.add("sound-active");

            audio.addEventListener("ended", (event) => {
                previousSibling.classList.remove("sound-active");
            })

        }

    }
    )
}

export function clicButton() {

    document.addEventListener("click", (event) => {
        // let tab = ["a", "z", "e", "r", "t", "y", "u", "i", "o"];
        let target = event.target;
        let id = target.getAttribute("id");
        let audio = document.getElementById(id);
        if (!audio) return;
        if (audio) {
            let nextSibling = audio.nextElementSibling;
            audio.currentTime = 0;
            nextSibling.play();
            target.classList.add("sound-active");

            nextSibling.addEventListener("ended", (event) => {
                target.classList.remove("sound-active");
            })
        }
    })

}