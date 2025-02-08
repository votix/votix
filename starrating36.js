console.log("starrating32.js is running! (With DOMContentLoaded and delay)");

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOMContentLoaded event fired in starrating32.js!"); // Проверяем, что DOMContentLoaded срабатывает

    setTimeout(function() { // <-- Добавляем setTimeout
        console.log("Timeout started, waiting 100ms before initialization..."); // Сообщение о начале задержки

        StarRatingGenerator = typeof StarRatingGenerator == "undefined" ? 0 : StarRatingGenerator + 1;
        console.log("StarRatingGenerator initialized:", StarRatingGenerator);

        (function(elementIndex) { // <-- Начало IIFE
            console.log("IIFE started with elementIndex:", elementIndex);

            // ... (остальной код IIFE, как в starrating31.js, но уже *внутри* setTimeout) ...
            if (elementIndex === 0) {
                console.log("elementIndex is 0, checking for existing starrating32.js script tag.");
                if (!document["querySelectorAll"]('script[src="https://cdn.jsdelivr.net/gh/votix/votix/starrating36.js"]').length) {
                    console.log("starrating32.js script tag not found, loading Firebase scripts.");

                    // Загрузка Firebase App Script
                    let scriptElement = document["createElement"]("script");
                    scriptElement["src"] = "https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js";
                    scriptElement.onload = function() {
                        console.log("Firebase App Script loaded.");
                        // Загрузка Firebase Database Script
                        let databaseScriptElement = document.createElement("script");
                        databaseScriptElement["src"] = "https://www.gstatic.com/firebasejs/8.1.1/firebase-database.js";
                        databaseScriptElement.onload = function() {
                            console.log("Firebase Database Script loaded.");
                        };
                        document.head.appendChild(databaseScriptElement);
                    };
                    document["head"].appendChild(scriptElement);

                    // Добавление стилей для лоадера
                    let styleElement = document["createElement"]("style");
                    styleElement["innerHTML"] = "@keyframes dawaj {0% {transform: rotate(0deg);} 100% {transform:rotate(360deg);}} .kozyr-SRS-loader ~ div{visibility:hidden;}";
                    document.head["insertBefore"](styleElement, document.head.firstChild);
                    console.log("Loader styles added.");
                } else {
                    console.log("starrating32.js script tag found, skipping Firebase loading.");
                }
            } else {
                console.log("elementIndex is not 0, skipping Firebase loading check.");
            }

            function updateStarRatingsDisplay(ratingContainerElement, ratingValue, starSize) { /* ... (ваш код функции) ... */ }
            function displayThankYouMessage(thankYouMessageText, ratingElement, userRating) { /* ... (ваш код функции) ... */ }

            function initializeStarRatingElement(ratingElementIndex) {
                console.log("Вызвана initializeStarRatingElement с индексом:", ratingElementIndex);
                const ratingElements = document["querySelectorAll"](".kozyr-SRS-average");
                console.log("Результат querySelectorAll('.kozyr-SRS-average'):", ratingElements);
                console.log("Длина NodeList:", ratingElements.length);
                let ratingElement = ratingElements[ratingElementIndex];
                console.log("ratingElement после индексации:", ratingElement);

                if (!ratingElement) {
                    console.error("Элемент рейтинга с классом .kozyr-SRS-average не найден с индексом:", ratingElementIndex);
                    return;
                }

                // ... (остальной код функции initializeStarRatingElement) ...
                console.log("initializeStarRatingElement completed (without errors before the end).");
                 // ... (Остальной код initializeStarRatingElement) ...
            }

            function initialize(ratingInitIndex) {
                console.log("Вызвана initialize с индексом:", ratingInitIndex);

                function checkFirebaseReady() {
                    console.log("Проверка готовности Firebase...");
                    if (typeof firebase == "object" && typeof firebase["database"] == "function" && typeof firebase["initializeApp"] == "function") {
                        console.log("Firebase готова, инициализация элемента рейтинга.");
                        initializeStarRatingElement(ratingInitIndex);
                    } else {
                        console.log("Firebase еще не готова, повторная проверка через 50мс.");
                        setTimeout(checkFirebaseReady, 50);
                    }
                }
                checkFirebaseReady();
            }
            console.log("Before initialize(elementIndex) call inside IIFE");
            initialize(elementIndex);
            console.log("After initialize(elementIndex) call inside IIFE");

        })(StarRatingGenerator); // <-- Конец IIFE

        console.log("Timeout finished, initialization should be complete."); // Сообщение об окончании задержки

    }, 100); // <-- Задержка в 100 миллисекунд
    console.log("DOMContentLoaded handler finished."); // Сообщение об окончании обработчика DOMContentLoaded

});

console.log("Script starrating32.js finished parsing (outside DOMContentLoaded).");
