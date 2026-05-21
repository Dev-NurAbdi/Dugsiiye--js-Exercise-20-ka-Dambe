
document.addEventListener("DOMContentLoaded", function () {
    const languages = {
    ar: "Arabic",
    so: "Somali",
    en: "English",
    fr: "French",
    es: "Spanish",
    de: "German",
    it: "Italian",
    tr: "Turkish",
    sw: "Swahili",
    am: "Amharic",
    zh: "Chinese",
    ru: "Russian",
    hi: "Hindi",
    pt: "Portuguese",
    ja: "Japanese",
    ko: "Korean"
    };
    const fromSelect = document.getElementById("fromLang");
    const toSelect = document.getElementById("toLang");
    // buuxi dropdown
    for (let code in languages) {
        const option1 = document.createElement("option");
        option1.value = code;
        option1.textContent = languages[code];

        const option2 = document.createElement("option");
        option2.value = code;
        option2.textContent = languages[code];

        fromSelect.appendChild(option1);
        toSelect.appendChild(option2);
    }

    fromSelect.value = "en";
    toSelect.value = "so";

    // FUNCTION
    window.translateText = async function () {
        const text = document.getElementById("inputText").value.trim();
        const from = fromSelect.value;
        const to = toSelect.value;
        const output = document.getElementById("outputText");
        if (text === "") {
            output.innerText = "Fadlan wax ku qor mesha aad ka tagtay!";
            return;
        }
        output.innerText = "Waa la turjumayaa...";
        try {
            const response = await fetch(
                `https://api.mymemory.translated.net/get?q=${text}&langpair=${from}|${to}`
            );

            const data = await response.json();

            output.innerText = data.responseData.translatedText;

        } catch (error) {
            console.error(error);
            output.innerText = "Qalad ayaa dhacay ❌";
        }
    };

});