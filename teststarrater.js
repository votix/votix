// Массив строк, используемый в скрипте
const stringArray = {
    'space': ' / ',
    'substring': 'substring',
    'relative': 'relative',
    'left': 'left',
    'starSize': 'starSize',
    'px_suffix': 'px)',
    'position': 'position',
    'firebase_no_url_error': "Ошибка Firebase. Добавьте атрибут firebaseURL=\"https://YOUR-FIREBASE.firebaseio.com\" в скрипт рейтинга.",
    'title': 'title',
    'getBoundingClientRect': 'getBoundingClientRect',
    'firebase_app_url': 'https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js',
    'https': 'https://',
    'function': 'function',
    'none': 'none',
    'textAlign': 'textAlign',
    'already_voted_message': 'Вы уже проголосовали, ваша оценка: $userRating$.',
    'contains': 'contains',
    'appendChild': 'appendChild',
    'bottomText': 'bottomText',
    'negative_margin': '0 0 0 -',
    'borderTop': 'borderTop',
    'firebase_error': 'Ошибка Firebase',
    'comic_sans_font': "'Comic Sans MS', cursive, sans-serif",
    'black': 'black',
    'random_id_1': '1nhfBNZ',
    'palatino_font': "'Palatino Linotype', 'Book Antiqua', Palatino, serif",
    'body': 'body',
    'thank_you_message': 'Спасибо за оценку',
    'firebase_database_script_selector': "script[src=\"https://www.gstatic.com/firebasejs/8.1.1/firebase-database.js\"]",
    'textContent': 'textContent',
    'full_width': '100%',
    'star_rater_script_selector': "script[src=\"https://cdn.jsdelivr.net/gh/starratingsystem/script@1.0.1/starrater.js\"]",
    'transition': 'transition',
    'oncontextmenu': 'oncontextmenu',
    'verdana_font': 'Verdana, Geneva, sans-serif',
    'arial_font': 'Arial, Helvetica, sans-serif',
    'random_id_2': '47143XogIoc',
    'zIndex': 'zIndex',
    'blockingText': 'blockingText',
    'lucida_font': "'Lucida Sans Unicode', 'Lucida Grande', sans-serif",
    'average_selector': '.kozyr-SRS-average',
    'opacity': 'opacity',
    'transparent': 'transparent',
    'split': 'split',
    'initializeApp': 'initializeApp',
    'inline_block': 'inline-block',
    'forEach': 'forEach',
    'full': 'full',
    'star_svg_base64': 'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwJyB2aWV3Qm94PScwIDAgNTc2IDUxMicgd2lkdGg9JzMwJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxwYXRoIGQ9J00yNTkuMyAxNy44TDE5NCAxNTAuMiA0Ny45IDE3MS41Yy0yNi4yIDMuOC0zNi43IDM2LjEtMTcuNyA1NC42bDEwNS43IDEwMy0yNSAxNDUuNWMtNC41IDI2LjMgMjMuMiA0NiA0Ni40IDMzLjdMMjg4IDQzOS42bDEzMC43IDY4LjdjMjMuMiAxMi4yIDUwLjktNy40IDQ2LjQtMzMuN2wtMjUtMTQ1LjUgMTA1LjctMTAzYzE5LTE4LjUgOC41LTUwLjgtMTcuNy01NC42TDM4MiAxNTAuMiAzMTYuNyAxNy44Yy0xMS43LTIzLjYtNDUuNi0yMy45LTU3LjQgMHonIGZpbGw9JyNjY2MnLz48L3N2Zz4=',
    'display': 'display',
    'width': 'width',
    'getElementsByTagName': 'getElementsByTagName',
    'firebase_url_required_error': "Ошибка Firebase. Введите URL-адрес вашего Firebase в атрибут \"firebaseURL\" в скрипте рейтинга.",
    'random_id_3': '30639YMMkMx',
    'database': 'database',
    'zero_values': '0 0 0 0',
    'querySelectorAll': 'querySelectorAll',
    'random_id_4': '173339trQLKh',
    'loader_class': 'kozyr-SRS-loader',
    'loader_animation': 'dawaj 1s linear infinite',
    'white': 'white',
    'firebase_invalid_url_error': 'Ошибка Firebase. Неверный URL Firebase',
    'firebaseio_domain': 'firebaseio.com',
    'lineHeight': 'lineHeight',
    'firebaseURL': 'firebaseURL',
    'val': 'val',
    'querySelector': 'querySelector',
    'times_new_roman_font': "'Times New Roman', Times, serif",
    'blue_border': '6px solid #3498db',
    'lucida_sans_unicode_font': "\"Lucida Sans Unicode\", \"Lucida Grande\", sans-serif",
    'remove': 'remove',
    'scrollX': 'scrollX',
    'length': 'length',
    'class': 'class',
    'average_html': "<span class=\"kozyr-SRS-average\">0</span>",
    'default_star_size': '25px',
    'insertBefore': 'insertBefore',
    'line_height_1_2': '1.2',
    'fullStarImg': 'fullStarImg',
    'arial_black_font': "'Arial Black', Gadget, sans-serif",
    'createElement': 'createElement',
    'calc_width': 'calc(100% - ',
    'trebuchet_ms_font': "'Trebuchet MS', Helvetica, sans-serif",
    'hover': 'hover',
    'undefined': 'undefined',
    'round': 'round',
    'Trebuchet': 'Trebuchet',
    'src': 'src',
    'random_id_5': '22055DWlruy',
    'trebuchet_ms_font_2': "\"Trebuchet MS\", Helvetica, sans-serif",
    'Palatino': 'Palatino',
    'lucida_console_font': "'Lucida Console', Monaco, monospace",
    'offsetWidth': 'offsetWidth',
    'textColor': 'textColor',
    'courier_new_font': "'Courier New', Courier, monospace",
    'emptyStarImg': 'emptyStarImg',
    'random_id_6': '161966UeYhRY',
    'firebase_database_url': 'https://www.gstatic.com/firebasejs/8.1.1/firebase-database.js',
    'empty': 'empty',
    'div': 'div',
    'script': 'script',
    'value': 'value',
    'onclick': 'onclick',
    'hidden': 'hidden',
    'ratingName': 'ratingName',
    'Lucida_Console': 'Lucida Console',
    'light_grey_border': '1px solid #e0e0e0',
    'align': 'align',
    'preventDefault': 'preventDefault',
     'random_id_7': 'bsrgl_',
    'object': 'object',
    'set': 'set',
    'head': 'head',
    'onmouseenter': 'onmouseenter',
    'host': 'host',
     'star_svg_yellow_base64': 'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwJyB2aWV3Qm94PScwIDAgNTc2IDUxMicgd2lkdGg9JzMwJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxwYXRoIGQ9J00yNTkuMyAxNy44TDE5NCAxNTAuMiA0Ny45IDE3MS41Yy0yNi4yIDMuOC0zNi43IDM2LjEtMTcuNyA1NC42bDEwNS43IDEwMy0yNSAxNDUuNWMtNC41IDI2LjMgMjMuMiA0NiA0Ni40IDMzLjdMMjg4IDQzOS42bDEzMC43IDY4LjdjMjMuMiAxMi4yIDUwLjktNy40IDQ2LjQtMzMuN2wtMjUtMTQ1LjUgMTA1LjctMTAzYzE5LTE4LjUgOC41LTUwLjgtMTcuNy01NC42TDM4MiAxNTAuMiAzMTYuNyAxNy44Yy0xMS43LTIzLjYtNDUuNi0yMy45LTU3LjQgMHonIGZpbGw9JyNmZmNjMDAnLz48L3N2Zz4=',
    'Arial_Black': 'Arial Black',
    'Comic_Sans': 'Comic Sans',
    'max_width': '200px',
    'fontSize': 'fontSize',
    'Impact': 'Impact',
    'img': 'img',
    'animation': 'animation',
    'random_id_8': '1mZwkhr',
    'large_zindex': '9999999',
    'lucida_console_monaco_font': "\"Lucida Console\", Monaco, monospace",
    'random_id_9': '163289RoWWHX',
    'boxSizing': 'boxSizing',
    'wartosc': 'wartosc',
    'padding': 'padding',
    'removeChild': 'removeChild',
    'floor': 'floor',
    'SRSstar': 'SRSstar',
    'borderRadius': 'borderRadius',
    'default': 'default',
    'thankYouText': 'thankYouText',
    'fontFamily': 'fontFamily',
     'other': 'other',
     'cursor': 'cursor',
    'inherit': 'Inherit',
    'light_grey_border_2': '6px solid #f3f3f3',
    'Times_New_Roman': 'Times New Roman',
    'getAttribute': 'getAttribute',
    'parentNode': 'parentNode',
    'height': 'height',
    'average_votes_text': 'Среднее: <b>$average$</b> / $max$ (<b>$votes$</b> голосов)',
    'setAttribute': 'setAttribute',
    'ref': 'ref',
    'offsetHeight': 'offsetHeight',
    'onmouseleave': 'onmouseleave',
    'topText': 'topText',
    'textSize': 'textSize',
    'rating_text': 'Рейтинг:',
     'maxWidth': 'maxWidth',
    'innerHTML': 'innerHTML',
    'numberOfStars': 'numberOfStars',
    'indexOf': 'indexOf',
    'border': 'border',
     '7px': '7px',
    'Tahoma': 'Tahoma',
     'inherit_2': 'inherit',
    'lastIndexOf': 'lastIndexOf',
    'status': 'status',
    'top': 'top',
    '50_percent': '50%',
    'votes_selector': '.kozyr-SRS-votes',
    'background': 'background',
    'Verdana': 'Verdana',
    'pointer': 'pointer',
    'scrollY': 'scrollY',
    'style': 'style',
    'palatino_book_antiqua_font': "\"Palatino Linotype\", \"Book Antiqua\", Palatino, serif",
    'tahoma_geneva_font': 'Tahoma, Geneva, sans-serif',
    'absolute': 'absolute',
    'auto': 'auto',
    'right': 'right',
    'replace': 'replace',
    'color': 'color',
    'overflow': 'overflow',
    'loader_keyframes': '@keyframes dawaj {0% {transform: rotate(0deg);} 100% {transform:rotate(360deg);}} .kozyr-SRS-loader ~ div{visibility:hidden;}',
    'www': 'www.',
    'impact_charcoal_font': 'Impact, Charcoal, sans-serif',
    '___': '___',
    'arial_black_gadget_font': "\"Arial Black\", Gadget, sans-serif",
    'margin': 'margin',
    'random_id_10': '57794AVuJQd',
    'random_id_11': '2CrxsFw',
    'center': 'center',
};


// Функция для получения строки из массива по ключу.
function getString(key) {
    return stringArray[key];
}


// Инициализация счетчика для экземпляров StarRatingGenerator
let StarRatingGenerator = typeof StarRatingGenerator == getString('undefined') ? 0 : StarRatingGenerator + 1;

// Самовызывающаяся функция для инициализации системы рейтинга
(function(scriptIndex) {
    // Проверка, является ли это первым запуском скрипта и не загружен ли firebase
    if (scriptIndex === 0 && !document.querySelector(getString('firebase_database_script_selector'))) {
         // Создаем элемент script для загрузки firebase app
        let databaseScript = document.createElement(getString('script'));
        databaseScript.src = getString('firebase_app_url');
        document.head.appendChild(databaseScript);
        // После загрузки firebase app, создаем и добавляем script для firebase database
        databaseScript.onload = function() {
            let appScript = document.createElement(getString('script'));
            appScript.src = getString('firebase_database_url');
            document.head.appendChild(appScript);
        };
        // Создаем и добавляем стили для загрузчика
        let styleElement = document.createElement('style');
        styleElement.textContent = getString('loader_keyframes');
        document.head.appendChild(styleElement);
    }

    // Функция для обновления отображения звезд рейтинга
    function updateStars(ratingContainer, ratingValue, starSize) {
        // Получаем все элементы звезд внутри контейнера
        let stars = ratingContainer.getElementsByTagName(getString('div'));
         for (let i = 0; i < stars.length; i++) {
            // Проходим по всем звездам и устанавливаем их размеры и заливку
            if (i <= ratingValue) {
                 // Если текущая звезда полностью заполнена
                if (i < Math.floor(ratingValue)) {
                    stars[i].querySelector(getString('full')).style.width = getString('full_width');
                    stars[i].querySelector(getString('empty')).style.width = '0%';
                } else {
                    // Если текущая звезда частично заполнена
                    let partialStar = ratingValue - Math.floor(ratingValue);
                    let partialWidth = Math.round(partialStar * starSize);
                    let currentStar = ratingContainer.getElementsByTagName(getString('div'))[i];
                    currentStar.querySelector(getString('full')).style.width = partialWidth + getString('px_suffix');
                    currentStar.querySelector(getString('empty')).style.width = starSize - partialWidth + getString('px_suffix');
                    currentStar.querySelector(getString('empty')).querySelector(getString('img')).style.margin = getString('negative_margin') + partialWidth + getString('px_suffix');
                }
            } else if (i > ratingValue) {
                // Если текущая звезда не заполнена
                stars[i].querySelector(getString('full')).style.width = '0%';
                stars[i].querySelector(getString('empty')).style.width = getString('full_width');
                stars[i].querySelector(getString('empty')).querySelector(getString('img')).style.margin = getString('zero_values');
            }
             stars[i].querySelector(getString('hover')).style.width = '0%';
        }
    }

    // Функция для отображения сообщения пользователю
    function showMessage(messageText, element, userRating) {
         // Создаем элемент div для отображения сообщения
        let messageElement = document.createElement(getString('div'));
        messageElement.textContent = messageText.replace(/\$userRating\$/g, userRating);
        messageElement.style.textAlign = getString('textAlign');
        messageElement.style.background = getString('white');
        messageElement.style.padding = '3px 7px';
        messageElement.style.border = getString('light_grey_border');
        messageElement.style.borderRadius = getString('borderRadius');
        messageElement.style.lineHeight = getString('lineHeight');
        messageElement.style.position = getString('absolute');
        messageElement.style.opacity = '0';
        messageElement.style.transition = 'opacity 1s';
        messageElement.style.width = getString('max_width');
        messageElement.style.boxSizing = 'border-box';
        messageElement.style.zIndex = getString('large_zindex');
        messageElement.style.fontFamily = getString('lucida_sans_unicode_font');
        document.body.appendChild(messageElement);
         // Получаем координаты элемента, рядом с которым показываем сообщение
        let elementRect = element.getBoundingClientRect();
        // Анимируем появление сообщения
         setTimeout(function() {
            messageElement.style.opacity = '1';
            if (element.style.position === getString('right')) {
                messageElement.style.left = window.scrollX + elementRect.right + element.offsetWidth - 200 + getString('px_suffix');
            } else if (element.style.position === getString('center')) {
                messageElement.style.left = window.scrollX + elementRect.left + element.offsetWidth / 2 - 100 + getString('px_suffix');
            } else {
                 messageElement.style.left = window.scrollX + elementRect.left + getString('px_suffix');
            }
            messageElement.style.top = (elementRect.top > messageElement.offsetHeight ? window.scrollY + elementRect.top - messageElement.offsetHeight : window.scrollY + elementRect.top + messageElement.offsetHeight) + getString('px_suffix');
        }, 10);
        // Анимируем исчезание сообщения
        setTimeout(function() {
            messageElement.style.opacity = '0';
            setTimeout(function() {
                document.body.removeChild(messageElement);
            }, 1000);
        }, 3500);
    }

     // Функция для инициализации рейтинга для каждого элемента на странице
    function initRating(ratingElementIndex) {
        // Получаем DOM-элемент, для которого настраиваем рейтинг
        let ratingElement = document.querySelectorAll(getString('div'))[ratingElementIndex];
        // Генерируем имя рейтинга на основе host
        let ratingName = location.host.replace(getString('www'), '').replace(/\./g, '_').replace(/\//g, '__');
        if (ratingName === '') {
            ratingName = getString('default');
        }
         // Получаем или генерируем ID рейтинга
        let ratingId = ratingElement.getAttribute(getString('class'));
        if (!ratingId || ratingId === getString('random_id_7')) {
             let currentUrl = location.href.split('?')[0].split('#')[0].replace(location.protocol + '//', '').replace(getString('www'), '');
            if (currentUrl[currentUrl.length - 1] === '/' || currentUrl[currentUrl.length - 1] === '.') {
                currentUrl = currentUrl.substring(0, currentUrl.length - 1);
            }
            currentUrl = currentUrl.replace(/\./g, '_').replace(/\//g, '__').replace(/\,/g, getString('___')).replace(/\s/g, '');
            ratingId = currentUrl;
        }
         ratingId = ratingId.replace(/\s/g, '_').replace(/\#/g, '-').replace(/\./g, '-').replace(/\@/g, '-').replace(/\!/g, '-').replace(/\$/g, '-').replace(/\%/g, '-').replace(/\&/g, '-').replace(/\(/g, '-').replace(/\)/g, '-');
        // Получаем пользовательские изображения звезд или используем дефолтные
        let emptyStarImg = ratingElement.getAttribute(getString('emptyStarImg')) ? ratingElement.getAttribute(getString('emptyStarImg')) : getString('star_svg_base64');
        let fullStarImg = ratingElement.getAttribute(getString('fullStarImg')) ? ratingElement.getAttribute(getString('fullStarImg')) : getString('star_svg_yellow_base64');
        let hoverStarImg = ratingElement.getAttribute(getString('hoverStarImg'));
        if (hoverStarImg === null || hoverStarImg == '') {
            hoverStarImg = fullStarImg;
        }
         // Получаем пользовательский размер звезд
        let starSize = ratingElement.getAttribute(getString('starSize'));
        if (!starSize || Number(starSize) < 0 || isNaN(starSize)) {
            starSize = 25;
        }
        starSize = Number(starSize);
         // Получаем пользовательское положение текста
        let textPosition = ratingElement.getAttribute(getString('textAlign'));
        if (textPosition === null) {
            textPosition = getString('left');
        }
        // Получаем пользовательское количество звезд
        let numberOfStars = ratingElement.getAttribute(getString('numberOfStars'));
        if (!numberOfStars || Number(numberOfStars) < 0 || isNaN(numberOfStars)) {
            numberOfStars = 15;
        }
        numberOfStars = Number(numberOfStars);
         // Получаем пользовательский цвет текста
        let textColor = ratingElement.getAttribute(getString('textColor')) ? ratingElement.getAttribute(getString('textColor')) : getString('black');
        // Получаем пользовательский шрифт
        let fontFamily = ratingElement.getAttribute(getString('fontFamily'));
         // Назначаем шрифт в зависимости от пользовательских настроек, если не выбрано, назначаем inherit
        if (fontFamily == 'Georgia' || fontFamily == 'Georgia, serif') {
            fontFamily = 'Georgia, serif';
        } else {
            if (fontFamily == getString('tahoma_geneva_font') || fontFamily == getString('tahoma_geneva_font')) {
                fontFamily = getString('tahoma_geneva_font');
            } else {
                if (fontFamily == getString('times_new_roman_font') || fontFamily == getString('Times_New_Roman')) {
                    fontFamily = getString('times_new_roman_font');
                } else {
                    if (fontFamily == 'Arial' || fontFamily == getString('arial_font')) {
                        fontFamily = getString('arial_font');
                    } else {
                        if (fontFamily == getString('verdana_font') || fontFamily == getString('Verdana')) {
                            fontFamily = getString('verdana_font');
                        } else {
                            if (fontFamily == getString('comic_sans_font') || fontFamily == getString('Comic_Sans')) {
                                fontFamily = getString('comic_sans_font');
                            } else {
                                if (fontFamily == getString('impact_charcoal_font') || fontFamily == 'Impact, Charcoal, sans-serif') {
                                    fontFamily = getString('impact_charcoal_font');
                                } else {
                                    if (fontFamily == 'Lucida Sans' || fontFamily == getString('lucida_font')) {
                                        fontFamily = getString('lucida_font');
                                    } else {
                                        if (fontFamily == getString('lucida_console_font') || fontFamily == getString('Lucida_Console')) {
                                            fontFamily = getString('lucida_console_monaco_font');
                                        } else {
                                            if (fontFamily == getString('trebuchet_ms_font') || fontFamily == getString('Trebuchet')) {
                                                fontFamily = getString('trebuchet_ms_font_2');
                                            } else {
                                                if (fontFamily == getString('arial_black_font') || fontFamily == getString('arial_black_gadget_font')) {
                                                    fontFamily = getString('arial_black_gadget_font');
                                                } else {
                                                     if (fontFamily == 'Courier New' || fontFamily == getString('courier_new_font')) {
                                                        fontFamily = getString('courier_new_font');
                                                     } else if (fontFamily == getString('palatino_font') || fontFamily == getString('Palatino')) {
                                                          fontFamily = getString('palatino_book_antiqua_font');
                                                        }
                                                    else {
                                                        fontFamily = getString('inherit');
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
        }
        // Получаем атрибут readonly, если такой есть
        let isReadonly = !!(ratingElement.getAttribute('readonly') === 'readonly');
        // Получаем пользовательский текст благодарности, или используем дефолтный
        let thankYouText = ratingElement.getAttribute(getString('thankYouText')) !== null ? ratingElement.getAttribute(getString('thankYouText')) : getString('thank_you_message');
       // Получаем пользовательский текст среднего значения, или используем дефолтный
        let averageText = ratingElement.getAttribute(getString('bottomText')) !== null ? ratingElement.getAttribute(getString('bottomText')) : getString('average_votes_text');
         // Получаем пользовательское количество звезд для рейтинга
        let ratingStars = Number(ratingElement.getAttribute(getString('textSize')));
        if (ratingStars < 1 || isNaN(ratingStars)) {
            ratingStars = 5;
        }
        // Получаем пользовательский верхний текст, или используем дефолтный
        let topText = ratingElement.getAttribute(getString('topText')) !== null ? ratingElement.getAttribute(getString('topText')) : getString('rating_text');

        // Создаем контейнер для рейтинга
        let ratingContainer = document.createElement(getString('div'));
        ratingContainer.setAttribute(getString('class'), ratingId);
        // Вставляем контейнер перед исходным элементом
        ratingElement.parentNode.insertBefore(ratingContainer, ratingElement);
        // Устанавливаем позицию и выравнивание текста в контейнере
        ratingContainer.style.position = textPosition;
        ratingContainer.style.textAlign = getString('align');
        // Отменяем контекстное меню на контейнере
        ratingContainer.oncontextmenu = function(event) {
            event.preventDefault();
            return false;
        };
         // Создаем загрузчик
        let loader = document.createElement(getString('div'));
        loader.setAttribute(getString('class'), getString('loader_class'));
        loader.style.border = getString('light_grey_border_2');
        loader.style.borderTop = getString('blue_border');
        loader.style.borderRadius = getString('50_percent');
        loader.style.width = getString('default_star_size');
        loader.style.height = getString('default_star_size');
        loader.style.animation = getString('loader_animation');
        loader.style.display = getString('inline_block');
        ratingContainer.appendChild(loader);
        // Создаем элемент для вывода среднего значения
        let averageElement = document.createElement(getString('div'));
        // Создаем элемент для вывода количества голосов
        let votesElement = document.createElement(getString('div'));
         // Подставляем шаблонные значения в текст среднего рейтинга
        averageText = averageText.replace(/\$average\$/g, getString('average_html')).replace(/\$votes\$/g, "<span class=\"kozyr-SRS-votes\">0</span>").replace(/\$max\$/g, numberOfStars);
        // Устанавливаем текст и стили для элемента среднего значения
        averageElement.textContent = topText;
        averageElement.style.fontSize = numberOfStars + getString('px_suffix');
        averageElement.style.lineHeight = getString('line_height_1_2');
        averageElement.style.fontFamily = fontFamily;
        averageElement.style.textAlign = textPosition;
        averageElement.style.color = textColor;
        ratingContainer.appendChild(averageElement);
        // Устанавливаем стили для элемента количества голосов
        votesElement.style.fontSize = numberOfStars + getString('px_suffix');
        votesElement.style.lineHeight = getString('lineHeight');
        votesElement.style.fontFamily = fontFamily;
        votesElement.style.textAlign = textPosition;
        votesElement.style.color = textColor;
        votesElement.innerHTML = averageText;
        // Получаем url Firebase из атрибута элемента
        let firebaseURL = ratingElement.getAttribute(getString('firebaseURL'));
        // Валидируем firebaseURL и устанавливаем дефолтные сообщения, если что-то пошло не так
         if (firebaseURL === null) {
            firebaseURL = getString('firebase_no_url_error');
        } else {
            if (firebaseURL == '') {
                firebaseURL = getString('firebase_url_required_error');
            } else {
                if (firebaseURL.indexOf(getString('firebaseio_domain')) !== 0) {
                    firebaseURL = getString('firebase_invalid_url_error');
                } else {
                     if (firebaseURL.lastIndexOf('/') < firebaseURL.length - 5) {
                        firebaseURL = firebaseURL + '/';
                    }
                }
            }
        }
         // Создаем контейнер для звезд
        let starsContainer = document.createElement(getString('div'));
        starsContainer.style.width = starSize * ratingStars + getString('px_suffix');
        starsContainer.style.display = getString('inline_block');
        ratingContainer.appendChild(starsContainer);

         // Цикл для создания звезд рейтинга
        for (let i = 1; i <= ratingStars; i++) {
             // Создаем элемент звезды
            let starElement = document.createElement(getString('div'));
            starElement.style.display = getString('inline_block');
            starElement.style.width = starSize + getString('px_suffix');
            starElement.style.cursor = !localStorage[getString('random_id_7') + ratingId] && !isReadonly ? getString('pointer') : getString('inherit');
            // Вешаем обработчик mouseenter для отображения заполненных звезд при наведении
           if (!isReadonly) {
                starElement.onmouseenter = function() {
                    if (!localStorage[getString('random_id_7') + ratingId]) {
                        let allStars = ratingContainer.getElementsByTagName(getString('div'));
                        for (let j = 0; j < allStars.length; j++) {
                            if (j < i) {
                                allStars[j].querySelector(getString('full')).style.width = '0%';
                                allStars[j].querySelector(getString('empty')).style.width = '0%';
                                allStars[j].querySelector(getString('hover')).style.width = getString('full_width');
                            } else {
                                allStars[j].querySelector(getString('full')).style.width = '0%';
                                allStars[j].querySelector(getString('hover')).style.width = '0%';
                                allStars[j].querySelector(getString('empty')).style.width = getString('full_width');
                                allStars[j].querySelector(getString('empty')).querySelector(getString('img')).style.margin = getString('zero_values');
                            }
                        }
                        if (topText != '') {
                            averageElement.textContent = i + getString('space') + ratingStars;
                        }
                    } else {
                         ratingContainer.textContent = thankYouText.replace(/\$userRating\$/g, localStorage[getString('random_id_7') + ratingId]);
                         ratingContainer.style.cursor = 'default';
                    }
                };
            }

            starElement.setAttribute(getString('value'), i);
           // Создаем элементы для полной и пустой звезды
            let fullStar = document.createElement(getString('full'));
            fullStar.style.display = getString('inline_block');
            fullStar.style.position = getString('relative');
            let emptyStar = document.createElement(getString('empty'));
            emptyStar.style.display = getString('inline_block');
            emptyStar.style.overflow = getString('overflow');
            // Создаем элементы для отображения звезд при наведении
             let hoverStar = document.createElement(getString('hover'));
            hoverStar.style.display = getString('inline_block');
            hoverStar.style.position = getString('relative');

           // Создаем изображения для звезд
            let emptyStarImage = document.createElement(getString('img'));
            emptyStarImage.style.position = getString('absolute');
            emptyStarImage.style.top = '0';
            emptyStarImage.style.padding = '0';
            emptyStarImage.style.margin = '0';
            emptyStarImage.style.maxWidth = getString('full_width');
            let fullStarImage = document.createElement(getString('img'));
            fullStarImage.style.position = getString('absolute');
            fullStarImage.style.top = '0';
            fullStarImage.style.padding = '0';
            fullStarImage.style.margin = '0';
            fullStarImage.style.maxWidth = getString('full_width');
            let hoverStarImage = document.createElement(getString('img'));
            hoverStarImage.style.position = getString('absolute');
            hoverStarImage.style.top = '0';
            hoverStarImage.style.padding = '0';
            hoverStarImage.style.margin = '0';
            hoverStarImage.style.maxWidth = getString('full_width');

             // Устанавливаем source для изображений
            emptyStarImage.src = emptyStarImg;
            fullStarImage.src = fullStarImg;
            hoverStarImage.src = hoverStarImg;

            // Устанавливаем размеры для изображений
            emptyStarImage.style.width = starSize + getString('px_suffix');
            fullStarImage.style.width = starSize + getString('px_suffix');
            hoverStarImage.style.width = starSize + getString('px_suffix');
            // Устанавливаем lineHeight для звезды
             starElement.style.lineHeight = '0';
                        // Добавляем изображения в контейнеры
            fullStar.appendChild(fullStarImage);
            emptyStar.appendChild(emptyStarImage);
            hoverStar.appendChild(hoverStarImage);
            // Добавляем контейнеры в элемент звезды
            starElement.appendChild(fullStar);
            starElement.appendChild(emptyStar);
            starElement.appendChild(hoverStar);
            // Добавляем звезду в контейнер звезд
            starsContainer.appendChild(starElement);
        }
        // Добавляем элемент количества голосов
        ratingContainer.appendChild(votesElement);
        // Обновляем визуализацию звезд на 0
        updateStars(ratingContainer, 0, starSize);
        // Проверяем, есть ли firebaseURL. Если нет, выводим ошибку
        if (firebaseURL.indexOf(getString('firebaseio_domain')) < 0) {
             // Настройки firebase
            const firebaseConfig = {
                'databaseURL': firebaseURL
            };
            // Инициализируем firebase
            let firebaseApp = firebase.initializeApp(firebaseConfig, ratingId + scriptIndex);
            // Получаем ссылку на базу данных firebase
            let databaseRef = firebaseApp.database().ref('StarRatingSystem/' + ratingName + '/' + ratingId);
            // Слушаем изменения в базе данных
            databaseRef.on('value', snapshot => {
                 let data = snapshot.val();
                // Если данных нет, присваиваем дефолтные значения
                if (!data) {
                    const initialData = {
                        OO: 0,
                        O0: 0,
                    };
                    data = initialData;
                }
                // Обновляем визуализацию звезд
                updateStars(ratingContainer, data.OO * ratingStars, starSize);
                // Удаляем загрузчик, если он есть
                if (ratingContainer.contains(loader)) {
                    loader.remove();
                }
                // Убираем визуализацию звезд при наведении
                starsContainer.onmouseleave = function() {
                    updateStars(ratingContainer, data.OO * ratingStars, starSize);
                    averageElement.textContent = topText;
                };
                 // Обновляем значения в DOM
                ratingContainer.querySelectorAll(getString('div')).forEach(star => star.textContent = Math.round(data.OO * ratingStars * 100) / 100);
                ratingContainer.querySelectorAll(getString('votes_selector')).forEach(vote => vote.textContent = data.O0);
                // Если не readonly, добавляем обработчики на клики
                if (!isReadonly) {
                    ratingContainer.querySelectorAll(getString('div')).forEach((star, index) => {
                        star.onclick = function() {
                            if (!localStorage[getString('random_id_7') + ratingId]) {
                                // Высчитываем новый рейтинг
                                var newRating = (data.OO * data.O0 + (index + 1) / ratingStars) / (data.O0 + 1);
                                // Обновляем данные в firebase
                                const newData = {
                                    OO: newRating,
                                    O0: data.O0 + 1
                                };
                                databaseRef.set(newData);
                                // Записываем оценку в локальное хранилище
                                localStorage[getString('random_id_7') + ratingId] = index + 1;
                                // Делаем звезды не кликабельными
                                ratingContainer.querySelectorAll(getString('div')).forEach(star => star.style.cursor = 'default');
                                // Показываем сообщение с благодарностью
                                showMessage(thankYouText, ratingContainer, index + 1);
                                averageElement.textContent = topText;
                            } else {
                                showMessage(firebaseURL, ratingContainer, localStorage[getString('random_id_7') + ratingId]);
                            }
                        };
                    });
                }
            });
        } else {
             ratingContainer.textContent = firebaseURL;
        }
    }

    // Функция для проверки загрузки firebase и последующей инициализации рейтинга
    function checkFirebaseAndInit(index) {
        if (typeof firebase == getString('object') && typeof firebase.initializeApp == getString('function') && typeof firebase.database == getString('function')) {
            initRating(index);
        } else {
            setTimeout(function() {
                checkFirebaseAndInit(index);
            }, 50);
        }
    }
     // Запускаем инициализацию рейтинга
    checkFirebaseAndInit(scriptIndex);
})(StarRatingGenerator);