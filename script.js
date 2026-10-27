const button = document.getElementById("generate");
const promptBox = document.getElementById("prompt");
const mood = document.getElementById("mood");
const result = document.getElementById("result");

button.addEventListener("click", () => {
    const topic = promptBox.value.trim();

    if (!topic) {
        result.textContent = "👻 Enter a story idea first...";
        promptBox.focus();
        return;
    }

    const stories = {
        Spooky: `At midnight, ${topic} appeared in the haunted forest. Green smoke crawled between the twisted trees. A lonely pumpkin glowed beside an abandoned house. Then the moon disappeared. Someone whispered your name from inside the locked door...`,

        Mysterious: `Nobody knew why ${topic} appeared every night beneath the blue moon. Strange green lights floated above the trees. One evening, a hidden door opened beneath the oldest pumpkin in the garden. Behind it was a secret no living person remembered...`,

        Supernatural: `The night ${topic} awakened, the sky turned black and green lightning flashed above the haunted house. Ghostly shadows danced across the walls. The trees bent toward the glowing moon, and a mysterious voice announced that an ancient spirit had returned...`
    };

    result.textContent = "🌫️ The spirits are awakening...\n\n" +
        stories[mood.value];
});