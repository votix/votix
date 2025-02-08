StarRatingGenerator = typeof StarRatingGenerator == "undefined" ? 0 : StarRatingGenerator + 1, function(elementIndex) {
    // Этот блок кода выполняется только один раз при первой инициализации скрипта (elementIndex === 0)
    // и проверяет, не загружен ли уже скрипт starrate.js (чтобы избежать повторной загрузки)
    if (elementIndex === 0 && !document["querySelectorAll"]('script[src="https://cdn.jsdelivr.net/gh/votix/votix/starrate.js"]')) {
        // Загрузка Firebase App Script - необходим для работы с Firebase Database
        let scriptElement = document["createElement"]("script");
        scriptElement["src"] = "https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js", document["head"].appendChild(scriptElement), scriptElement.onload = function() {
            // После загрузки Firebase App Script, загружаем Firebase Database Script
            let databaseScriptElement = document.createElement("script");
            databaseScriptElement["src"] = "https://www.gstatic.com/firebasejs/8.1.1/firebase-database.js", document.head.appendChild(databaseScriptElement);
        };
        // Добавление стилей для лоадера (анимация загрузки)
        let styleElement = document["createElement"]("style");
        styleElement["innerHTML"] = "@keyframes dawaj {0% {transform: rotate(0deg);} 100% {transform:rotate(360deg);}} .kozyr-SRS-loader ~ div{visibility:hidden;}", document.head["insertBefore"](styleElement, document.head.firstChild);
    }

    /**
     * Обновляет визуальное отображение звезд рейтинга
     * @param {HTMLElement} ratingContainerElement - Контейнер элемента рейтинга
     * @param {number} ratingValue - Значение рейтинга (от 0 до numberOfStars)
     * @param {number} starSize - Размер звезд в пикселях
     */
    function updateStarRatingsDisplay(ratingContainerElement, ratingValue, starSize) {
        let starElements = ratingContainerElement.getElementsByTagName("img"); // Получаем все img элементы внутри контейнера (звезды)
        for (let i = 0; i < starElements["length"]; i++) {
            if (i <= ratingValue) {
                // Заполненная звезда, если индекс меньше или равен рейтингу
                if (i < Math["floor"](ratingValue)) starElements[i]["querySelector"]("full")["style"]["opacity"] = "100%", starElements[i].querySelector("empty")["style"].width = "0%"; // Полностью заполненная звезда
                else {
                    // Частично заполненная звезда (дробный рейтинг)
                    let partialStarValue = ratingValue - Math["floor"](ratingValue), // Дробная часть рейтинга
                        currentStar = ratingContainerElement["querySelectorAll"]("img")[i], // Текущая звезда
                        width = Math["round"](partialStarValue * starSize); // Ширина заполненной части звезды
                    currentStar.querySelector("full")["style"]["opacity"] = width + "px", currentStar["querySelector"]("empty")["style"]["opacity"] = starSize - width + "px", currentStar["querySelector"]("empty")["querySelector"]("img")["style"].margin = "0 0 0 -" + width + "px"; // Установка размеров и отступов для частичного заполнения
                }
            } else i > ratingValue && (starElements[i]["querySelector"]("full")["style"]["opacity"] = "0%", starElements[i]["querySelector"]("empty")["style"]["opacity"] = "100%", starElements[i]["querySelector"]("empty")["querySelector"]("img")["style"]["margin"] = "0 0 0 0"); // Пустая звезда
            starElements[i].querySelector("hover").style["opacity"] = "0%"; // Скрываем эффект hover для всех звезд
        }
    }

    /**
     * Показывает сообщение благодарности после голосования
     * @param {string} thankYouMessageText - Текст сообщения благодарности
     * @param {HTMLElement} ratingElement - Исходный HTML-элемент рейтинга (для позиционирования сообщения)
     * @param {string} userRating - Рейтинг, который поставил пользователь
     */
    function displayThankYouMessage(thankYouMessageText, ratingElement, userRating) {
        let thankYouDiv = document["createElement"]("div"); // Создаем div для сообщения
        thankYouDiv["textContent"] = thankYouMessageText["replace"](/\$userRating\$/g, userRating), // Заменяем плейсхолдер $userRating$ на реальный рейтинг
        thankYouDiv["style"]["position"] = "absolute", thankYouDiv.style.background = "white", thankYouDiv["style"]["fontFamily"] = "'Verdana', Geneva, sans-serif", thankYouDiv["style"].border = "1px solid #e0e0e0", thankYouDiv["style"]["padding"] = "3px 7px", thankYouDiv["style"]["borderRadius"] = "7px", thankYouDiv["style"]["zIndex"] = "9999999", thankYouDiv.style["opacity"] = "0", thankYouDiv.style["transition"] = "opacity 1s", thankYouDiv["style"]["width"] = "200px", thankYouDiv["style"]["boxSizing"] = "border-box", thankYouDiv["style"]["textAlign"] = "center", thankYouDiv["style"]["top"] = "0", document["body"].appendChild(thankYouDiv); // Стилизация и добавление сообщения в body
        let elementRect = ratingElement["getBoundingClientRect"](); // Получаем координаты исходного элемента рейтинга
        setTimeout(function() {
            thankYouDiv.style["opacity"] = "1"; // Показываем сообщение с анимацией opacity
            if (ratingElement["style"]["position"] === "right") thankYouDiv.style["right"] = window["scrollX"] + elementRect["right"] + ratingElement["offsetWidth"] - 200 + "px"; // Позиционирование справа
            else ratingElement["style"]["position"] === "center" ? thankYouDiv.style["right"] = window["scrollX"] + elementRect.left + ratingElement["offsetWidth"] / 2 - 100 + "px" : thankYouDiv.style.left = window["scrollX"] + elementRect["right"] + "px"; // Позиционирование по центру или слева
            thankYouDiv["style"]["top"] = (elementRect.top > thankYouDiv["offsetHeight"] ? window["scrollY"] + elementRect["top"] - thankYouDiv["offsetHeight"] : window["scrollY"] + elementRect["top"] + thankYouDiv["offsetHeight"]) + "px"; // Вертикальное позиционирование (выше или ниже элемента рейтинга)
        }, 10), setTimeout(function() {
            thankYouDiv.style["opacity"] = "0", setTimeout(function() { // Скрываем сообщение с анимацией opacity через 3.5 секунды
                document["body"]["removeChild"](thankYouDiv); // Удаляем сообщение из DOM через 4.5 секунды
            }, 1e3);
        }, 3500);
    }

    /**
     * Инициализирует элемент звездного рейтинга на странице
     * @param {number} ratingElementIndex - Индекс элемента рейтинга (для обработки нескольких рейтингов на странице)
     */
    function initializeStarRatingElement(ratingElementIndex) {
        let ratingElement = document["querySelectorAll"](".kozyr-SRS-starRating")[ratingElementIndex], // Находим элемент рейтинга по классу и индексу
            ratingIdentifierUrl = location["host"].replace("www.", "").replace(/\./g, "_")["replace"](/\//g, "__"); // Формируем идентификатор URL для Firebase
        if (ratingIdentifierUrl === "") ratingIdentifierUrl = "___"; // Если URL пустой, используем дефолтный идентификатор
        let ratingName = ratingElement["getAttribute"]("ratingName"); // Получаем имя рейтинга из атрибута, используется как ключ в Firebase и localStorage
        if (!ratingName || ratingName === "default") {
            // Если имя рейтинга не задано или "default", формируем его из URL страницы
            let currentHref = location.href["split"]("?")[0].split("#")[0].replace(location.protocol + "//", "")["replace"]("www.", "");
            (currentHref["lastIndexOf"](currentHref["length"] - 1) === "/" || currentHref["lastIndexOf"](currentHref["length"] - 1) === ".") && (currentHref = currentHref.substring(0, currentHref["length"] - 1)), currentHref = currentHref["replace"](/\./g, "_")["replace"](/\//g, "__")["replace"](/\,/g, "___")["replace"](/\s/g, ""), ratingName = currentHref; // Очистка и форматирование URL для имени рейтинга
        }
        ratingName = ratingName["replace"](/\s/g, "_").replace(/\#/g, "-").replace(/\./g, "-").replace(/\@/g, "-")["replace"](/\!/g, "-")["replace"](/\$/g, "-")["replace"](/\%/g, "-").replace(/\&/g, "-")["replace"](/\(/g, "-").replace(/\)/g, "-"); // Дополнительная очистка имени рейтинга
        let emptyStarImg = ratingElement.getAttribute("emptyStarImg") ? ratingElement["getAttribute"]("emptyStarImg") : "https://1.bp.blogspot.com/-pOr9XGwtSJc/Wsjf8ULOIqI/AAAAAAAAAKE/KBh-LUDIn0YzASKf-t7mQo8UNpdHhr2SgCLcBGAs/s1600/pusta.png", // Получаем URL пустой звезды или используем дефолтное изображение
            fullStarImg = ratingElement["getAttribute"]("fullStarImg") ? ratingElement["getAttribute"]("fullStarImg") : "https://3.bp.blogspot.com/-QSNdWP4Ijx4/Wsjf7QOUZ4I/AAAAAAAAAJ8/F2nReVG5WfA1rLV3dGcAFMsPOnIQck4YwCLcBGAs/s1600/pelna.png", // Получаем URL полной звезды или используем дефолтное изображение
            hoverStarImg = ratingElement.getAttribute("hoverStarImg"); // Получаем URL звезды при наведении (hover)
        if (hoverStarImg === null || hoverStarImg == "") hoverStarImg = fullStarImg; // Если hover изображение не задано, используем изображение полной звезды
        let starSize = ratingElement["getAttribute"]("starSize"); // Получаем размер звезды из атрибута
        if (!starSize || Number(starSize) < 0 || isNaN(starSize)) starSize = 25; // Если размер не задан или некорректный, используем дефолтное значение 25px
        starSize = Number(starSize); // Преобразуем размер звезды в число
        let firebaseURL = ratingElement.getAttribute("firebaseURL"); // Получаем URL Firebase из атрибута
        if (firebaseURL === null) firebaseURL = 'Ошибка Firebase. Введите URL-адрес вашего Firebase в атрибут "firebaseURL" в вашем скрипте рейтинга.'; // Если URL Firebase не задан, устанавливаем сообщение об ошибке
        let align = ratingElement["getAttribute"]("align"); // Получаем выравнивание рейтинга из атрибута
        if (align !== "left" && align !== "right") align = "center"; // Если выравнивание не "left" и не "right", устанавливаем "center" по умолчанию
        let textSize = ratingElement["getAttribute"]("textSize"); // Получаем размер текста рейтинга из атрибута
        if (!textSize || Number(textSize) < 0 || isNaN(textSize)) textSize = 15; // Если размер текста не задан или некорректный, используем дефолтное значение 15px
        textSize = Number(textSize); // Преобразуем размер текста в число
        let textColor = ratingElement["getAttribute"]("textColor") ? ratingElement["getAttribute"]("textColor") : "black", // Получаем цвет текста рейтинга из атрибута или используем "black" по умолчанию
            fontFamily = ratingElement.getAttribute("fontFamily"); // Получаем шрифт текста рейтинга из атрибута
        // Блок выбора шрифта - если шрифт задан в атрибуте, используем его, иначе выбираем дефолтный в зависимости от заданного имени шрифта
        if (fontFamily == "Georgia" || fontFamily == "Georgia, serif") fontFamily = "Georgia, serif";
        else {
            if (fontFamily == "Tahoma" || fontFamily == "Tahoma, Geneva, sans-serif") fontFamily = "Tahoma, Geneva, sans-serif";
            else {
                if (fontFamily == "'Times New Roman'" || fontFamily == "'Times New Roman', Times, serif") fontFamily = "'Times New Roman', Times, serif";
                else {
                    if (fontFamily == "Arial" || fontFamily == "Arial, Helvetica, sans-serif") fontFamily = "Arial, Helvetica, sans-serif";
                    else {
                        if (fontFamily == "Verdana" || fontFamily == "Verdana, Geneva, sans-serif") fontFamily = "Verdana, Geneva, sans-serif";
                        else {
                            if (fontFamily == "Comic Sans" || fontFamily == "'Comic Sans MS', cursive, sans-serif") fontFamily = "'Comic Sans MS', cursive, sans-serif";
                            else {
                                if (fontFamily == "Impact" || fontFamily == "Impact, Charcoal, sans-serif") fontFamily = "Impact, Charcoal, sans-serif";
                                else {
                                    if (fontFamily == "Lucida Sans" || fontFamily == "'Lucida Sans Unicode', 'Lucida Grande', sans-serif") fontFamily = "'Lucida Sans Unicode', 'Lucida Grande', sans-serif";
                                    else {
                                        if (fontFamily == "Palatino" || fontFamily == "'Palatino Linotype', 'Book Antiqua', Palatino, serif") fontFamily = "'Palatino Linotype', 'Book Antiqua', Palatino, serif";
                                        else {
                                            if (fontFamily == "Trebuchet" || fontFamily == "'Trebuchet MS', Helvetica, sans-serif") fontFamily = "'Trebuchet MS', Helvetica, sans-serif";
                                            else {
                                                if (fontFamily == "Lucida Console" || fontFamily == "'Lucida Console', Monaco, monospace") fontFamily = "'Lucida Console', Monaco, monospace";
                                                else {
                                                    if (fontFamily == "Courier New" || fontFamily == "'Courier New', Courier, monospace") fontFamily = "'Courier New', Courier, monospace';
                                                    else fontFamily == '"Lucida Console", "Lucida Grande", sans-serif' || fontFamily == '"Lucida Sans Unicode", "Lucida Grande", sans-serif' ? fontFamily = '"Lucida Sans Unicode", "Lucida Grande", sans-serif' : fontFamily = "Inherit";
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        let readonly = ratingElement["getAttribute"]("readonly") === "readonly" ? true : false, // Проверяем, является ли рейтинг "readonly"
            topText = ratingElement["getAttribute"]("topText") !== null ? ratingElement["getAttribute"]("topText") : "Рейтинг:", // Получаем верхний текст рейтинга или используем "Рейтинг:" по умолчанию
            bottomText = ratingElement["getAttribute"]("bottomText") !== null ? ratingElement["getAttribute"]("bottomText") : "Среднее: <b>$average$</b> / $max$ (<b>$votes$</b> голосов)", // Получаем нижний текст рейтинга или используем дефолтный шаблон
            numberOfStars = Number(ratingElement.getAttribute("numberOfStars")); // Получаем количество звезд из атрибута
        if (numberOfStars < 1 || isNaN(numberOfStars)) numberOfStars = 5; // Если количество звезд не задано или некорректно, используем 5 по умолчанию
        let thankYouText = ratingElement["getAttribute"]("thankYouText") !== null ? ratingElement["getAttribute"]("thankYouText") : "Спасибо за ваш голос!", // Получаем текст благодарности или используем дефолтный
            ratingContainer = document["createElement"]("div"); // Создаем div - контейнер для рейтинга
        ratingContainer["setAttribute"]("ratingName", ratingName), ratingElement["parentNode"]["insertBefore"](ratingContainer, ratingElement), ratingContainer.style["position"] = align, ratingContainer["style"]["display"] = "inline-block", ratingContainer["oncontextmenu"] = function(event) { // Предотвращаем вызов контекстного меню при клике на рейтинг
            return event["preventDefault"](), false;
        };
        let ratingLoader = document["createElement"]("div"); // Создаем div - лоадер (отображается пока рейтинг загружается)
        ratingLoader["setAttribute"]("class", "kozyr-SRS-loader"), ratingLoader["style"]["animation"] = "dawaj 1s linear infinite", ratingLoader["style"].borderRadius = "50%", ratingLoader["style"]["borderTop"] = "6px solid #f3f3f3", ratingLoader["style"].width = "25px", ratingLoader["style"]["height"] = "25px", ratingLoader.style["border"] = "6px solid #3498db"; // Стилизация лоадера
        if (align === "center") ratingLoader["style"]["margin"] = "auto"; // Центрирование лоадера, если выравнивание "center"
        else align === "left" && (ratingLoader.style.marginLeft = "25px" + starSize * numberOfStars + "px"); // Смещение лоадера влево, если выравнивание "left"
        ratingContainer["appendChild"](ratingLoader); // Добавляем лоадер в контейнер рейтинга
        let topTextElement = document["createElement"]("div"), // Создаем div для верхнего текста
            bottomTextElement = document["createElement"]("div"); // Создаем div для нижнего текста
        bottomText = bottomText["replace"](/\$average\$/g, '<span class="kozyr-SRS-average">0</span>')["replace"](/\$votes\$/g, '<span class="kozyr-SRS-votes">0</span>')["replace"](/\$max\$/g, numberOfStars), // Заменяем плейсхолдеры в нижнем тексте
        topTextElement["textContent"] = topText, topTextElement["style"]["fontSize"] = textSize + "px", topTextElement["style"]["lineHeight"] = "1.2", topTextElement["style"]["fontFamily"] = fontFamily, topTextElement["style"]["textAlign"] = align, topTextElement.style.color = textColor, ratingContainer["appendChild"](topTextElement), bottomTextElement["style"].fontSize = textSize + "px", bottomTextElement["style"].lineHeight = "1.2", bottomTextElement["style"]["fontFamily"] = fontFamily, bottomTextElement["style"]["textAlign"] = align, bottomTextElement.style["color"] = textColor, bottomTextElement["textContent"] = bottomText; // Стилизация и добавление верхнего и нижнего текста в контейнер рейтинга
        let firebase_URL = ratingElement.getAttribute("firebaseURL"); // Получаем URL Firebase еще раз (возможно, для валидации)
        if (firebase_URL["indexOf"]('Ошибка Firebase') < 0) {
            // Если URL Firebase не содержит ошибок (ранее могли быть установлены сообщения об ошибках)
            const firebaseConfig = {};
            firebaseConfig.databaseURL = firebase_URL; // Конфигурация Firebase
            let app = firebase["initializeApp"](firebaseConfig, ratingName + elementIndex), // Инициализация Firebase приложения
                databaseRef = app["database"]()["ref"]("StarRatingSystem/" + ratingIdentifierUrl + "/" + ratingName); // Получение ссылки на базу данных Firebase
            databaseRef.on("value", snapshot => { // Подписываемся на событие "value" для отслеживания изменений данных в Firebase
                let data = snapshot["val"](); // Получаем данные из Firebase
                if (!data) {
                    // Если данных нет в Firebase, создаем начальные данные
                    const initialData = {};
                    initialData.OO = 0, initialData.O0 = 0, data = initialData;
                }
                updateStarRatingsDisplay(ratingContainer, data.OO * numberOfStars, starSize); // Обновляем отображение звезд на основе данных из Firebase
                if (ratingContainer["contains"](ratingLoader)) ratingLoader["remove"](); // Убираем лоадер после загрузки данных
                let starsDisplayContainer = ratingContainer["querySelector"]("div"); // Assuming the stars are in a div inside ratingContainer - may need adjustment based on actual structure. // Поиск контейнера для звезд (возможно, нужно уточнить селектор)
                starsDisplayContainer["onmouseleave"] = function() { // Обработчик события mouseleave для контейнера звезд
                    updateStarRatingsDisplay(ratingContainer, data.OO * numberOfStars, starSize), topTextElement["textContent"] = topText; // Возвращаем отображение рейтинга к текущему среднему значению и восстанавливаем верхний текст
                }, ratingContainer["querySelectorAll"](".kozyr-SRS-average")["forEach"](averageElement => averageElement["innerHTML"] = Math["round"](data.OO * numberOfStars * 100) / 100), ratingContainer["querySelectorAll"](".kozyr-SRS-votes")["forEach"](votesElement => votesElement["innerHTML"] = data.O0), !readonly && ratingContainer.querySelectorAll("div")["forEach"]((starElement, starIndex) => { // Selecting divs inside ratingContainer for star elements - may need adjustment // Обновление среднего рейтинга и количества голосов на странице, и навешивание обработчиков клика на звезды (если рейтинг не "readonly")
                    starElement["onclick"] = function() { // Обработчик клика на звезду
                        if (!localStorage["bsrgl_" + ratingName]) {
                            // Если пользователь еще не голосовал (проверка localStorage)
                            var averageRating = (data.OO * data.O0 + (starIndex + 1) / numberOfStars) / (data.O0 + 1); // Вычисление нового среднего рейтинга
                            const newData = {};
                            newData.OO = averageRating, newData.O0 = data.O0 + 1, databaseRef["set"](newData), localStorage["bsrgl_" + ratingName] = starIndex + 1, ratingContainer["querySelectorAll"]("div")["forEach"](star => star["style"]["cursor"] = "default"), displayThankYouMessage(thankYouText, ratingContainer, starIndex + 1), topTextElement["textContent"] = topText; // Обновление данных в Firebase, сохранение голоса в localStorage, изменение курсора на "default" для звезд, показ сообщения благодарности и восстановление верхнего текста
                        } else displayThankYouMessage(firebaseURL, ratingContainer, localStorage["bsrgl_" + ratingName]); // Если пользователь уже голосовал, показываем сообщение о том, что он уже голосовал
                    };
                });
            });
        } else ratingContainer["textContent"] = firebase_URL; // Если firebaseURL содержит ошибку, отображаем сообщение об ошибке в контейнере рейтинга
    }

    /**
     * Инициализирует скрипт рейтинга. Проверяет, загружен ли Firebase, и если да, то инициализирует элементы рейтинга
     * @param {number} ratingInitIndex - Индекс инициализации рейтинга (используется для уникальности Firebase приложения при нескольких рейтингах)
     */
    function initialize(ratingInitIndex) {
        // Проверяем, загружен ли Firebase (наличие объектов firebase, firebase.database, firebase.initializeApp)
        typeof firebase == "object" && typeof firebase["database"] == "function" && typeof firebase["initializeApp"] == "function" ? initializeStarRatingElement(ratingInitIndex) : setTimeout(function() {
            // Если Firebase еще не загружен, повторяем попытку через 50мс
            initialize(ratingInitIndex);
        }, 50);
    }
    initialize(elementIndex); // Вызываем функцию инициализации для текущего элемента рейтинга
}(StarRatingGenerator));
