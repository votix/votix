// Самовызывающаяся функция для изоляции кода
!function() {
    // Проверка, не был ли генератор рейтингов уже инициализирован
    if ("undefined" == typeof BloggerRatingGenerator) {
        // Массивы селекторов для поиска элементов на странице
        let n = [".post", ".post-outer", "article", ".item", ".blog-post", ".hentry", ".index-post"], // Селекторы постов
            o = [".post-title", "h1", "h2", "h3"], // Селекторы заголовков
            s = ["#main", "#Blog1", "#Blog00"]; // Селекторы основных контейнеров

        /**
         * Рекурсивно ищет родительский элемент с валидной ссылкой на пост
         * @param {HTMLElement} e - Текущий элемент
         * @returns {HTMLElement|null} - Найденный элемент или null
         */
        function t(e) {
            if ("A" === e.tagName && e.getAttribute("href")) {
                let r = e.getAttribute("href").split("?")[0].split("#")[0];
                // Проверяет, является ли ссылка внутренней и ведёт ли на пост
                return 0 === r.indexOf(location.protocol + "//" + location.host) && 
                       /.*\/\d{4}\/\d{2}\/.*\.html/.test(r) ? e : 
                       e.parentNode && "main" !== e.parentNode.id && 
                       e.parentNode !== document.body ? t(e.parentNode) : null;
            }
        }

        /**
         * Преобразует URL в безопасное имя для рейтинга
         * @param {string} t - URL для преобразования
         * @returns {string} - Безопасное имя
         */
        function e(t) {
            let e = t.split("?")[0].split("#")[0]
                     .replace("https:", "")
                     .replace("http:", "")
                     .replace("file:", "")
                     .replace("ftp:", "")
                     .replace("mailto:", "");
            
            // Удаление начальных слешей
            while("/" == e[0]) e = e.substring(1);
            
            // Удаление www.
            if(0 === e.indexOf("www.")) e = e.replace("www.", "");
            
            // Удаление конечных слешей
            while("/" == e[e.length - 1]) e = e.substring(0, e.length - 1);
            
            // Замена специальных символов
            return e = e.replace(/\./g, "_")
                       .replace(/\//g, "__")
                       .replace(/\,/g, "___")
                       .replace(/\s/g, "");
        }

        /**
         * Создаёт и добавляет виджет рейтинга
         * @param {HTMLElement} t - Элемент, к которому добавляется рейтинг
         * @param {string} r - URL поста
         * @param {string} l - Позиция вставки ('insertAfter' или 'appendChild')
         * @param {Object} i - Настройки рейтинга
         */
        function r(t, r, l, i) {
            // Создание контейнера рейтинга
            let n = document.createElement("div");
            n.setAttribute("class", "BloggerStarRating");
            
            // Вставка контейнера
            "insertAfter" === l ? 
                t.parentNode.insertBefore(n, t.nextSibling) : 
                t.appendChild(n);

            // Создание скрипта рейтинга
            let o = document.createElement("script");
            for (let t in i) o.setAttribute(t, i[t]);
            o.setAttribute("ratingName", e(r));
            o.src = "https://cdn.jsdelivr.net/gh/starratingsystem/script@1.0.1/starrater.js";
            n.appendChild(o);
        }

        /**
         * Добавляет рейтинг на страницу поста
         * @param {HTMLElement} t - Основной контейнер
         * @param {Object} l - Настройки рейтинга
         */
        function l(t, l) {
            let i, s, a = e(location.href);
            
            // Определение порядка поиска селекторов
            "top" === l.position ? (i = o, s = n) : (i = n, s = o);

            // Поиск подходящего элемента для вставки рейтинга
            for (let e = 0; e < i.length; e++) {
                if (t.querySelector(i[e])) {
                    r(t.querySelector(i[e]), a, 
                      "top" === l.position ? "insertAfter" : "appendChild", l);
                    break;
                }
                
                // Если не найден элемент из первого массива, ищем во втором
                if (e === i.length - 1) {
                    for (let e = 0; e < s.length; e++) {
                        if (t.querySelector(s[e])) {
                            r(t.querySelector(s[e]), a,
                              "top" === l.position ? "appendChild" : "insertAfter", l);
                            break;
                        }
                        
                        // Если элемент не найден, создаём фиксированный блок
                        if (e === s.length - 1) {
                            let t = document.createElement("div");
                            document.body.appendChild(t);
                            t.style.display = "block";
                            t.style.position = "fixed";
                            t.style.left = "0";
                            t.style.bottom = "0";
                            t.style.background = "lightblue";
                            t.style.borderTop = "1px solid black";
                            r(t, a, "appendChild", l);
                        }
                    }
                }
            }
        }

        /**
         * Добавляет рейтинги на страницу списка постов
         * @param {HTMLElement} e - Основной контейнер
         * @param {Object} l - Настройки рейтинга
         */
        function i(e, l) {
            for (let i = 0; i < n.length; i++) {
                if (e.querySelector(n[i])) {
                    // Обработка каждого поста
                    e.querySelectorAll(n[i]).forEach(e => {
                        if (!e.querySelector(".BloggerStarRating")) {
                            let i = e.querySelectorAll("a[href]");
                            
                            // Поиск ссылок в посте
                            if (i.length) {
                                for (let n = 0; n < i.length; n++) {
                                    let o = i[n].getAttribute("href").split("?")[0].split("#")[0];
                                    
                                    // Проверка ссылки на пост
                                    if (0 === o.indexOf(location.protocol + "//" + location.host) && 
                                        /.*\/\d{4}\/\d{2}\/.*\.html/.test(o)) {
                                        r(i[n], o, "insertAfter", l);
                                        break;
                                    }
                                    
                                    // Если ссылка не найдена, ищем родительский элемент
                                    if (n === i.length - 1) {
                                        let i = t(e);
                                        i && r(i, i.getAttribute("href"), "insertAfter", l);
                                    }
                                }
                            } else {
                                let i = t(e);
                                i && r(i, i.getAttribute("href"), "insertAfter", l);
                            }
                        }
                    });
                    break;
                }
                
                // Если посты не найдены, ищем все ссылки на посты
                if (i === n.length - 1) {
                    let t = [];
                    e.querySelectorAll("a[href]").forEach(e => {
                        let i = e.getAttribute("href").split("?")[0].split("#")[0];
                        if (0 === i.indexOf(location.protocol + "//" + location.host) && 
                            /.*\/\d{4}\/\d{2}\/.*\.html/.test(i) && 
                            t.indexOf(i) < 0) {
                            r(e, i, "insertAfter", l);
                            t.push(i);
                        }
                    });
                }
            }
        }

        /**
         * Ожидает загрузку DOM перед выполнением callback
         * @param {Function} e - Callback-функция
         */
        !function t(e) {
            /in/.test(document.readyState) ? 
                setTimeout(function() { t(e) }, 100) : 
                e();
        }(function() {
            // Поиск основного контейнера
            let t = document.body;
            for (let e = 0; e < s.length; e++) {
                if (document.querySelector(s[e])) {
                    t = document.querySelector(s[e]);
                    break;
                }
            }

            // Определение типа страницы и добавление рейтингов
            if (/.*\/\d{4}\/\d{2}\/.*\.html/.test(location.href.split("?")[0].split("#")[0])) {
                // Страница поста
                l(t, starRatingSystemSettings.postPage);
            } else if (/.*\/p\/.*\.html/.test(location.href.split("?")[0].split("#")[0])) {
                // Статическая страница
                l(t, starRatingSystemSettings.staticPage);
            } else {
                // Страница списка постов
                i(t, starRatingSystemSettings.indexPage);
                // Периодическая проверка новых постов
                setInterval(function() {
                    i(t, starRatingSystemSettings.indexPage);
                }, 1e3);
            }
        });
    } else {
        BloggerRatingGenerator = !0;
    }
}();