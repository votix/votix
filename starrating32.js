console.log("starrating29.js is running!"); // <-- Эта строка должна быть видна в консоли

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOMContentLoaded event fired!"); // <-- Проверяем, срабатывает ли это событие

    StarRatingGenerator = typeof StarRatingGenerator == "undefined" ? 0 : StarRatingGenerator + 1;
    console.log("StarRatingGenerator initialized:", StarRatingGenerator); // <-- Проверяем инициализацию StarRatingGenerator

    (function(elementIndex) { // <-- Начало IIFE
        console.log("IIFE started with elementIndex:", elementIndex); // <-- Проверяем вход в IIFE

        // Этот блок кода выполняется только один раз при первой инициализации скрипта (elementIndex === 0)
        // и проверяет, не загружен ли уже скрипт starrate.js (чтобы избежать повторной загрузки)
        if (elementIndex === 0) {
            console.log("elementIndex is 0, checking for existing starrating29.js script tag."); // <-- Проверка elementIndex === 0
            if (!document["querySelectorAll"]('script[src="https://cdn.jsdelivr.net/gh/votix/votix/starrating32.js"]').length) { // Исправлено на .length
                console.log("starrating29.js script tag not found, loading Firebase scripts."); // <-- Подтверждение, что скрипт не найден и Firebase будет загружаться

                // Загрузка Firebase App Script - необходим для работы с Firebase Database
                let scriptElement = document["createElement"]("script");
                scriptElement["src"] = "https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js";
                scriptElement.onload = function() {
                    console.log("Firebase App Script loaded."); // <-- Сообщение о загрузке Firebase App Script
                    // После загрузки Firebase App Script, загружаем Firebase Database Script
                    let databaseScriptElement = document.createElement("script");
                    databaseScriptElement["src"] = "https://www.gstatic.com/firebasejs/8.1.1/firebase-database.js";
                    databaseScriptElement.onload = function() {
                        console.log("Firebase Database Script loaded."); // <-- Сообщение о загрузке Firebase Database Script
                    };
                    document.head.appendChild(databaseScriptElement);
                };
                document["head"].appendChild(scriptElement);

                // Добавление стилей для лоадера (анимация загрузки)
                let styleElement = document["createElement"]("style");
                styleElement["innerHTML"] = "@keyframes dawaj {0% {transform: rotate(0deg);} 100% {transform:rotate(360deg);}} .kozyr-SRS-loader ~ div{visibility:hidden;}";
                document.head["insertBefore"](styleElement, document.head.firstChild);
                console.log("Loader styles added."); // <-- Сообщение о добавлении стилей лоадера
            } else {
                console.log("starrating29.js script tag found, skipping Firebase loading."); // <-- Сообщение, что Firebase загрузка пропущена
            }
        } else {
            console.log("elementIndex is not 0, skipping Firebase loading check."); // <-- Сообщение, что проверка загрузки Firebase пропущена для elementIndex != 0
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
            console.log("initializeStarRatingElement completed (without errors before the end)."); // <-- Сообщение об успешном завершении (почти)
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
        console.log("Before initialize(elementIndex) call inside IIFE"); // <-- Проверяем, доходит ли выполнение до вызова initialize
        initialize(elementIndex); // Вызываем функцию инициализации для текущего элемента рейтинга
        console.log("After initialize(elementIndex) call inside IIFE"); // <-- Проверяем, выполняется ли код после вызова initialize

    })(StarRatingGenerator); // <-- Конец IIFE

    console.log("After IIFE execution inside DOMContentLoaded"); // <-- Проверяем, выполняется ли код после IIFE
});

console.log("Script starrating29.js finished parsing (outside DOMContentLoaded)."); // <-- Проверяем, завершился ли парсинг скрипта
