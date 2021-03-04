// Export de la première fonction qui agit lorsque je clique sur une touche de clavier
export function clicKey() {

    
    // Première évènement lorsque je clique sur une touche 
    document.addEventListener("keydown", (event) => {
        // déclaration de la variable correspondant à la lettre sur laquelle on appuie sur le clavier
        let key = event.key;
        // déclaration de la variable qui récupère la balise qui porte le même nom que la lettre
        let audio = document.getElementById(key);


        if (audio !== null) {
            // déclaration de la variable qui récupère la balise bouton (situé juste avant l'audio)
            let previousSibling = audio.previousSibling;
            // déclenche l'audio
            audio.play();
            // remis à 0 à chaque fois que l'on reclique sur la touche
            audio.currentTime = 0;
            // ajout d'une classe au bouton pour changer l'apparence
            previousSibling.classList.add("sound-active");

            // évènement lorsque l'audio se termine
            audio.addEventListener("ended", (event) => {
                // la classe qui a changé l'apparence est retiré, pour revenir à l'apparence de départ
                previousSibling.classList.remove("sound-active");
            })

        }

    }
    )
}

// export de la 2ème fonction qui agit lorsque je clique sur le bouton
export function clicButton() {

    // Premier évènement lorsque je clique sur le bouton
    document.addEventListener("click", (event) => {
        // déclaration de la variable qui va me rendre ma balise du bouton
        let target = event.target;
        // déclaration d'une variable pour isoler l'ID de ma balise
        let id = target.getAttribute("id");
        // je redéclare une variable pour récupérer l'ID de ma balise bouton
        let audio = document.getElementById(id);
        if (audio) {
            // je déclare une variable pour m'attraper la div de l'audio, situé après celle du bouton
            let nextSibling = audio.nextElementSibling;
            // je déclenche l'audio + remise à 0 lorsque je reclique sur le bouton
            nextSibling.play();
            nextSibling.currentTime = 0;
            // j'ajoute une classe à ma div du bouton pour changer l'apparence
            target.classList.add("sound-active");

            // lorsque la musique s'arrête, je supprime la classe qui a changé l'apparence
            nextSibling.addEventListener("ended", (event) => {
                target.classList.remove("sound-active");
            })
            // ne retourne rien dès lors qu'on ne clique pas sur le bouton
        } else {
            return
        }
    })

}
