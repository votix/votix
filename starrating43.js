// Массив строк, используемый для хранения текстовых значений в коде.
const stringLiterals = [" / ", "substring", "relative", "left", "starSize", "px)", "position", "Ошибка Firebase. Добавьте атрибут firebaseURL=\"https://YOUR-FIREBASE.firebaseio.com\" к вашему скрипту рейтинга.", "title", "getBoundingClientRect", "https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js", "https://", "function", "none", "textAlign", "Вы уже проголосовали, ваш рейтинг: $userRating$.", "contains", "appendChild", "bottomText", "0 0 0 -", "borderTop", "Ошибка Firebase", "'Comic Sans MS', cursive, sans-serif", "black", "1nhfBNZ", "'Palatino Linotype', 'Book Antiqua', Palatino, serif", "body", "Спасибо за ваш голос", "script[src=\"https://www.gstatic.com/firebasejs/8.1.1/firebase-database.js\"]", "textContent", "100%", "script[src=\"https://cdn.jsdelivr.net/gh/votix/votix/starrating43.js\"]", "transition", "oncontextmenu", "Verdana, Geneva, sans-serif", "Arial, Helvetica, sans-serif", "47143XogIoc", "zIndex", "blockingText", "'Lucida Sans Unicode', 'Lucida Grande', sans-serif", ".kozyr-SRS-average", "opacity", "transparent", "split", "initializeApp", "inline-block", "forEach", "full", "https://1.bp.blogspot.com/-pOr9XGwtSJc/Wsjf8ULOIqI/AAAAAAAAAKE/KBh-LUDIn0YzASKf-t7mQo8UNpdHhr2SgCLcBGAs/s1600/pusta.png", "display", "width", "getElementsByTagName", "Ошибка Firebase. Введите URL-адрес вашего Firebase в атрибут \"firebaseURL\" в вашем скрипте рейтинга.", "30639YMMkMx", "database", "0 0 0 0", "querySelectorAll", "173339trQLKh", "kozyr-SRS-loader", "dawaj 1s linear infinite", "white", "Ошибка Firebase. Неверный URL Firebase", "firebaseio.com", "lineHeight", "firebaseURL", "val", "querySelector", "'Times New Roman', Times, serif", "6px solid #3498db", "\"Lucida Sans Unicode\", \"Lucida Grande\", sans-serif", "remove", "scrollX", "length", "class", "<span class=\"kozyr-SRS-average\">0</span>", "25px", "insertBefore", "1.2", "fullStarImg", "'Arial Black', Gadget, sans-serif", "createElement", "calc(100% - ", "'Trebuchet MS', Helvetica, sans-serif", "hover", "undefined", "round", "Trebuchet", "src", "22055DWlruy", "\"Trebuchet MS\", Helvetica, sans-serif", "Palatino", "'Lucida Console', Monaco, monospace", "offsetWidth", "textColor", "'Courier New', Courier, monospace", "emptyStarImg", "161966UeYhRY", "https://www.gstatic.com/firebasejs/8.1.1/firebase-database.js", "empty", "div", "script", "value", "onclick", "hidden", "ratingName", "Lucida Console", "1px solid #e0e0e0", "align", "preventDefault", "bsrgl_", "object", "set", "head", "onmouseenter", "host", "https://3.bp.blogspot.com/-QSNdWP4Ijx4/Wsjf7QOUZ4I/AAAAAAAAAJ8/F2nReVG5WfA1rLV3dGcAFMsPOnIQck4YwCLcBGAs/s1600/pelna.png", "Arial Black", "Comic Sans", "200px", "fontSize", "Impact", "img", "animation", "1mZwkhr", "9999999", "\"Lucida Console\", Monaco, monospace", "163289RoWWHX", "boxSizing", "wartosc", "padding", "removeChild", "floor", "SRSstar", "borderRadius", "default", "thankYouText", "fontFamily", "other", "cursor", "Inherit", "6px solid #f3f3f3", "Times New Roman", "getAttribute", "parentNode", "height", "Среднее: <b>$average$</b> / $max$ (<b>$votes$</b> голосов)", "setAttribute", "ref", "offsetHeight", "onmouseleave", "topText", "textSize", "Рейтинг:", "maxWidth", "innerHTML", "numberOfStars", "indexOf", "border", "7px", "Tahoma", "inherit", "lastIndexOf", "status", "top", "50%", ".kozyr-SRS-votes", "background", "Verdana", "pointer", "scrollY", "style", "\"Palatino Linotype\", \"Book Antiqua\", Palatino, serif", "Tahoma, Geneva, sans-serif", "absolute", "auto", "right", "replace", "color", "overflow", "@keyframes dawaj {0% {transform: rotate(0deg);} 100% {transform:rotate(360deg);}} .kozyr-SRS-loader ~ div{visibility:hidden;}", "www.", "Impact, Charcoal, sans-serif", "___", "\"Arial Black\", Gadget, sans-serif", "margin", "57794AVuJQd", "2CrxsFw", "center"];

// Функция для получения строки из массива stringLiterals по индексу.
// Индекс корректируется вычитанием 263.
function getStringLiteral(index) {
  index = index - 263;
  return stringLiterals[index]
}
// Создается псевдоним getStringLiteralProxy для функции getStringLiteral.
const getStringLiteralProxy = getStringLiteral;

// Самовызывающаяся анонимная функция, которая переупорядочивает массив stringLiterals.
(function(stringArray, magicNumber) {
  const stringGetter = getStringLiteralProxy; // Псевдоним для доступа к строковым литералам.
  // Бесконечный цикл для переупорядочивания массива.
  while (true) {
    try {
      // Вычисление контрольной суммы для проверки порядка массива.
      const value = parseInt(stringGetter(285)) + parseInt(stringGetter(414)) * parseInt(stringGetter(316)) + -parseInt(stringGetter(354)) + -parseInt(stringGetter(413)) + -parseInt(stringGetter(324)) * -parseInt(stringGetter(351)) + -parseInt(stringGetter(440)) * parseInt(stringGetter(264)) + parseInt(stringGetter(281));
      // Проверка, достигнут ли правильный порядок массива.
      if (value === magicNumber) break; // Выход из цикла, если порядок правильный.
      else stringArray.push(stringArray.shift()) // Сдвиг массива, если порядок неверный.
    } catch (error) {
      stringArray.push(stringArray.shift()) // Сдвиг массива в случае ошибки.
    }
  }
// Вызов функции с массивом строк и магическим числом для упорядочивания массива.
}(stringLiterals, 141828),
// Инициализация счетчика StarRatingGenerator.
StarRatingGenerator = typeof StarRatingGenerator == getStringLiteralProxy(312) ? 0 : StarRatingGenerator + 1,
// Самовызывающаяся анонимная функция для инициализации рейтинга.
function(ratingIndex) {
  const stringGetter = getStringLiteralProxy; // Псевдоним для доступа к строковым литералам.
  // Проверка, является ли это первая инициализация и отсутствует ли скрипт Starrate.js.
  if (ratingIndex === 0 && !document["contains"]("script[src=\"https://cdn.jsdelivr.net/gh/votix/votix/starrating43.js\"]")) {
    // Создание элемента скрипт для Starrate.js.
    let scriptElement = document["createElement"]('script');
    scriptElement["src"] = "https://cdn.jsdelivr.net/gh/votix/votix/starrating43.js", // Установка src атрибута скрипта.
    document["head"]['appendChild'](scriptElement), // Добавление скрипта в head.
    // Обработчик загрузки скрипта Starrate.js.
    scriptElement['onload'] = function() {
      const stringGetter = getStringLiteralProxy; // Псевдоним для доступа к строковым литералам.
      // Создание элемента скрипт для Firebase Database.
      let databaseScriptElement = document['createElement']('script');
      databaseScriptElement["src"] = "https://www.gstatic.com/firebasejs/8.1.1/firebase-database.js", // Установка src атрибута скрипта.
      document['head']['appendChild'](databaseScriptElement) // Добавление скрипта в head.
    };
    // Создание элемента style для CSS стилей.
    let styleElement = document["createElement"]('style');
    styleElement["textContent"] = "@keyframes dawaj {0% {transform: rotate(0deg);} 100% {transform:rotate(360deg);}} .kozyr-SRS-loader ~ div{visibility:hidden;}", // Установка CSS стилей.
    document['head']['appendChild'](styleElement) // Добавление стилей в head.
  }

  // Функция для обновления визуального отображения звезд рейтинга.
  function updateStars(element, rating, starSize) {
    const stringGetter = getStringLiteralProxy; // Псевдоним для доступа к строковым литералам.
    // Получение всех изображений звезд в элементе.
    let stars = element['getElementsByTagName']('img');
    // Итерация по всем звездам.
    for (let i = 0; i < stars["length"]; i++) {
      // Проверка, должна ли звезда быть заполнена или частично заполнена.
      if (i <= rating) {
        // Если звезда должна быть полностью заполнена.
        if (i < Math["floor"](rating))
          stars[i]["querySelector"]('.full')["style"]["width"] = "100%", // Показать полную звезду.
          stars[i]['querySelector']('.empty')["style"]['width'] = '0%'; // Скрыть пустую звезду.
        // Если звезда должна быть частично заполнена.
        else {
          // Расчет ширины заполнения для частичной звезды.
          let partialStarValue = rating - Math["floor"](rating),
            currentStar = element["getElementsByTagName"]('img')[i],
            width = Math["round"](partialStarValue * starSize);
          currentStar['querySelector']('.full')["style"]["width"] = width + 'px', // Установка ширины полной части звезды.
          currentStar["querySelector"]('.empty')["style"]["width"] = starSize - width + 'px', // Установка ширины пустой части звезды.
          currentStar["querySelector"]('.empty')["querySelector"]('.full')["style"]['margin'] = "0 0 0 -" + width + 'px' // Корректировка отступа для частичной звезды.
        }
      }
      // Если звезда должна быть пустой.
      else i > rating && (
        stars[i]["querySelector"]('full')["style"]["width"] = '0%', // Скрыть полную звезду.
        stars[i]["querySelector"]('.empty')["style"]["width"] = "100%", // Показать пустую звезду.
        stars[i]["querySelector"]('.empty')["querySelector"]('.full')["style"]['margin'] = "0 0 0 0" // Установка отступа для пустой звезды.
      );
      stars[i]['querySelector']('.hover')["style"]['width'] = '0%' // Скрытие hover слоя звезды.
    }
  }

  // Функция для отображения сообщения "Спасибо за ваш голос".
  function showThankYouMessage(message, ratingElement, userRating) {
    const stringGetter = getStringLiteralProxy; // Псевдоним для доступа к строковым литералам.
    // Создание div элемента для сообщения благодарности.
    let thankYouDiv = document["createElement"]('div');
    // Установка текста сообщения, подставляя рейтинг пользователя.
    thankYouDiv["textContent"] = message["replace"](/\$userRating\$/g, userRating),
    thankYouDiv["style"]["position"] = 'absolute', // Абсолютное позиционирование сообщения.
    thankYouDiv['style']['background'] = 'white', // Белый фон сообщения.
    thankYouDiv["style"]["color"] = 'black', // Черный цвет текста сообщения.
    thankYouDiv["style"]['border'] = '1px solid #e0e0e0', // Граница сообщения.
    thankYouDiv["style"]['borderRadius'] = '7px', // Закругленные углы сообщения.
    thankYouDiv["style"]['padding'] = '3px 7px', // Внутренний отступ сообщения.
    thankYouDiv["style"]['lineHeight'] = '1.2', // Межстрочный интервал сообщения.
    thankYouDiv["style"]['textAlign'] = 'center', // Выравнивание текста по центру.
    thankYouDiv['style']['opacity'] = '0', // Начальная прозрачность сообщения (невидимое).
    thankYouDiv['style']['transition'] = 'opacity 1s', // Анимация прозрачности.
    thankYouDiv["style"]['width'] = '200px', // Ширина сообщения.
    thankYouDiv["style"]['boxSizing'] = 'border-box', // Модель расчета размеров блока.
    thankYouDiv["style"]['fontSize'] = '25px', // Размер шрифта сообщения.
    thankYouDiv["style"]['fontFamily'] = "\"Lucida Sans Unicode\", \"Lucida Grande\", sans-serif", // Шрифт сообщения.
    document["body"]['appendChild'](thankYouDiv); // Добавление сообщения в body.

    // Получение позиции элемента рейтинга.
    let elementRect = ratingElement["getBoundingClientRect"]();
    // Задержка перед показом сообщения благодарности.
    setTimeout(function() {
      const stringGetter = getStringLiteralProxy; // Псевдоним для доступа к строковым литералам.
      thankYouDiv['style']['opacity'] = '1'; // Показать сообщение (с анимацией).
      // Позиционирование сообщения по горизонтали в зависимости от выравнивания рейтинга.
      if (ratingElement["style"]['textAlign'] === 'right')
        thankYouDiv['style']['right'] = window["scrollX"] + elementRect["right"] + ratingElement["offsetWidth"] - 200 + 'px';
      else if (ratingElement["style"]['textAlign'] === 'center')
        thankYouDiv['style']['left'] = window["scrollX"] + elementRect['left'] + ratingElement["offsetWidth"] / 2 - 100 + 'px';
      else
        thankYouDiv['style']['left'] = window["scrollX"] + elementRect['left'] + 'px';
      // Позиционирование сообщения по вертикали.
      thankYouDiv["style"]['top'] = (elementRect['top'] > thankYouDiv["offsetHeight"] ?
        window["scrollY"] + elementRect['top'] - thankYouDiv["offsetHeight"] :
        window["scrollY"] + elementRect['top'] + thankYouDiv["offsetHeight"]) + 'px'
    }, 10),
    // Задержка перед скрытием сообщения благодарности.
    setTimeout(function() {
      const stringGetter = getStringLiteralProxy; // Псевдоним для доступа к строковым литералам.
      thankYouDiv['style']['opacity'] = '0', // Скрыть сообщение (с анимацией).
      // Задержка перед удалением сообщения из DOM.
      setTimeout(function() {
        const stringGetter = getStringLiteralProxy; // Псевдоним для доступа к строковым литералам.
        document["body"]['removeChild'](thankYouDiv) // Удаление сообщения из DOM.
      }, 1000)
    }, 3500)
  }

  // Функция для инициализации рейтинга для одного элемента.
  function initializeRating(index) {
    const stringGetter = getStringLiteralProxy; // Псевдоним для доступа к строковым литералам.
    // Получение элемента рейтинга по классу 'SRSstar'.
    let ratingElement = document["querySelectorAll"]('.SRSstar')[index],
      // Формирование уникального имени рейтинга на основе URL страницы.
      currentUrl = location["host"]['replace']("www.", '')['replace'](/\./g, '_')["replace"](/\//g, '__');
    // Если URL пустой, используется имя по умолчанию.
    if (currentUrl === '') currentUrl = "___";
    // Получение имени рейтинга из атрибута 'ratingName'.
    let ratingName = ratingElement["getAttribute"]('ratingName');
    // Если имя рейтинга не задано или является 'default'.
    if (!ratingName || ratingName === 'default') {
      // Формирование имени рейтинга из URL страницы.
      let href = location['href']["indexOf"]('?')[0]['split']('#')[0]['replace'](location['protocol'] + '//', '')["replace"]("https://", '');
      // Удаление последнего символа, если это '/' или '.'.
      (href["lastIndexOf"](href["length"] - 1) === '/' || href["lastIndexOf"](href["length"] - 1) === '.') && (href = href["substring"](0, href["length"] - 1)),
      href = href["replace"](/\./g, '_')["replace"](/\//g, '__')["replace"](/\,/g, '___')["replace"](/\s/g, ''), // Замена символов в имени рейтинга.
      ratingName = href // Установка сформированного имени рейтинга.
    }
    // Очистка имени рейтинга от специальных символов.
    ratingName = ratingName["replace"](/\s/g, '_')['replace'](/\#/g, '-')['replace'](/\./g, '-')['replace'](/\@/g, '-')['replace'](/\!/g, '-')['replace'](/\$/g, '-')['replace'](/\%/g, '-')['replace'](/\&/g, '-')['replace'](/\(/g, '-')['replace'](/\)/g, '-');
    // Получение URL изображений звезд из атрибутов элемента или использование значений по умолчанию.
    let emptyStarImg = ratingElement['getAttribute']('emptyStarImg') ? ratingElement["getAttribute"]('emptyStarImg') : "https://1.bp.blogspot.com/-pOr9XGwtSJc/Wsjf8ULOIqI/AAAAAAAAAKE/KBh-LUDIn0YzASKf-t7mQo8UNpdHhr2SgCLcBGAs/s1600/pusta.png",
      fullStarImg = ratingElement["getAttribute"]('fullStarImg') ? ratingElement["getAttribute"]('fullStarImg') : "https://3.bp.blogspot.com/-QSNdWP4Ijx4/Wsjf7QOUZ4I/AAAAAAAAAJ8/F2nReVG5WfA1rLV3dGcAFMsPOnIQck4YwCLcBGAs/s1600/pelna.png",
      hoverStarImg = ratingElement['getAttribute']('hoverStarImg');
    // Если hover изображение не задано, использовать изображение полной звезды.
    if (hoverStarImg === null || hoverStarImg == '') hoverStarImg = fullStarImg;
    // Получение размера звезд из атрибута 'starSize'.
    let starSize = ratingElement["getAttribute"]('starSize');
    // Проверка и установка размера звезд по умолчанию.
    if (!starSize || Number(starSize) < 0 || isNaN(starSize)) starSize = 25;
    starSize = Number(starSize);
    // Получение URL Firebase из атрибута 'firebaseURL'.
    let firebaseURL = ratingElement['getAttribute']('firebaseURL');
    // Если URL Firebase не задан, использовать сообщение об ошибке по умолчанию.
    if (firebaseURL === null) firebaseURL = "Ошибка Firebase. Введите URL-адрес вашего Firebase в атрибут \"firebaseURL\" в вашем скрипте рейтинга.";
    // Получение выравнивания рейтинга из атрибута 'align'.
    let align = ratingElement["getAttribute"]('align');
    // Проверка и установка выравнивания по умолчанию.
    if (align !== 'center' && align !== 'right') align = 'center';
    // Получение размера текста из атрибута 'textSize'.
    let textSize = ratingElement["getAttribute"]('textSize');
    // Проверка и установка размера текста по умолчанию.
    if (!textSize || Number(textSize) < 0 || isNaN(textSize)) textSize = 15;
    textSize = Number(textSize);
    // Получение цвета текста и шрифта из атрибутов элемента или использование значений по умолчанию.
    let textColor = ratingElement["getAttribute"]('textColor') ? ratingElement["getAttribute"]('textColor') : 'inherit',
      fontFamily = ratingElement['getAttribute']('fontFamily');
    // Выбор шрифта на основе атрибута fontFamily или использование шрифтов по умолчанию.
    if (fontFamily == 'Georgia' || fontFamily == 'Georgia, serif') fontFamily = 'Georgia, serif';
    else {
      if (fontFamily == "'Lucida Sans Unicode', 'Lucida Grande', sans-serif" || fontFamily == "\"Lucida Sans Unicode\", \"Lucida Grande\", sans-serif") fontFamily = "'Lucida Sans Unicode', 'Lucida Grande', sans-serif";
      else {
        if (fontFamily == "'Times New Roman', Times, serif" || fontFamily == "'Times New Roman', Times, serif") fontFamily = '"Times New Roman", Times, serif';
        else {
          if (fontFamily == 'Arial' || fontFamily == "'Arial, Helvetica, sans-serif'") fontFamily = "'Arial, Helvetica, sans-serif'";
          else {
            if (fontFamily == "'Verdana', 'Verdana, Geneva, sans-serif'" || fontFamily == "'Verdana, Geneva, sans-serif'") fontFamily = "'Verdana, Geneva, sans-serif'";
            else {
              if (fontFamily == "'Comic Sans', 'Comic Sans MS', cursive, sans-serif'" || fontFamily == "'Comic Sans MS', cursive, sans-serif'") fontFamily = '"Comic Sans MS", cursive, sans-serif';
              else {
                if (fontFamily == "'Impact', 'Impact, Charcoal, sans-serif'" || fontFamily == 'Impact, Charcoal, sans-serif') fontFamily = 'Impact, Charcoal, sans-serif';
                else {
                  if (fontFamily == 'Lucida Sans' || fontFamily == "'Lucida Console', Monaco, monospace'") fontFamily = "'Lucida Console', Monaco, monospace";
                  else {
                    if (fontFamily == "'Palatino'" || fontFamily == "'Palatino Linotype', 'Book Antiqua', Palatino, serif'") fontFamily = "'Palatino Linotype', 'Book Antiqua', Palatino, serif";
                    else {
                      if (fontFamily == "'Trebuchet'" || fontFamily == "'Trebuchet MS', Helvetica, sans-serif'") fontFamily = "'Trebuchet MS', Helvetica, sans-serif";
                      else {
                        if (fontFamily == "'Tahoma'" || fontFamily == "'Tahoma, Geneva, sans-serif'") fontFamily = "'Tahoma, Geneva, sans-serif'";
                        else {
                          if (fontFamily == 'Courier New' || fontFamily == "'Courier New', Courier, monospace'") fontFamily = "'Courier New', Courier, monospace";
                          else fontFamily == "'Arial Black'" || fontFamily == "'Arial Black', Gadget, sans-serif'" ? fontFamily = "'Arial Black', Gadget, sans-serif" : fontFamily = 'inherit'
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
    // Проверка, является ли рейтинг "только для чтения" на основе атрибута 'status'.
    let readonly = ratingElement["getAttribute"]('status') === 'readonly' ? !![] : false,
      // Получение текста верхней и нижней подписи из атрибутов элемента.
      topText = ratingElement["getAttribute"]('topText') !== null ? ratingElement["getAttribute"]('topText') : 'Рейтинг:',
      bottomText = ratingElement["getAttribute"]('bottomText') !== null ? ratingElement["getAttribute"]('bottomText') : 'Среднее: <b>$average$</b> / $max$ (<b>$votes$</b> голосов)',
      // Получение количества звезд из атрибута 'numberOfStars'.
      numberOfStars = Number(ratingElement['getAttribute']('numberOfStars'));
    // Проверка и установка количества звезд по умолчанию.
    if (numberOfStars < 1 || isNaN(numberOfStars)) numberOfStars = 5;
    // Получение текста благодарности из атрибута 'thankYouText'.
    let thankYouText = ratingElement["getAttribute"]('thankYouText') !== null ? ratingElement["getAttribute"]('thankYouText') : 'Спасибо за ваш голос',
      // Создание контейнера div для рейтинга.
      container = document["createElement"]('div');
    container["setAttribute"]('ratingName', ratingName), // Установка атрибута ratingName.
    ratingElement["parentNode"]["insertBefore"](container, ratingElement), // Вставка контейнера перед элементом рейтинга.
    container['style']['textAlign'] = align, // Установка выравнивания текста.
    container["style"]["position"] = 'relative', // Установка относительного позиционирования.
    // Предотвращение контекстного меню при клике правой кнопкой мыши.
    container["oncontextmenu"] = function(event) {
      const stringGetter = getStringLiteralProxy; // Псевдоним для доступа к строковым литералам.
      return event["preventDefault"](), false
    };
    // Создание элемента div для загрузчика.
    let loader = document["createElement"]('div');
    loader["setAttribute"]('class', 'kozyr-SRS-loader'), // Установка класса для загрузчика.
    loader["style"]['animation'] = 'dawaj 1s linear infinite', // Анимация загрузчика.
    loader["style"]['borderRadius'] = '50%', // Закругление углов загрузчика.
    loader["style"]['borderTop'] = '6px solid #3498db', // Верхняя граница загрузчика.
    loader["style"]['width'] = '25px', // Ширина загрузчика.
    loader["style"]['height'] = '25px', // Высота загрузчика.
    loader['style']['border'] = '6px solid #f3f3f3'; // Граница загрузчика.
    // Центрирование загрузчика, если рейтинг выровнен по центру.
    if (align === 'center') loader["style"]['margin'] = 'auto';
    // Установка отступа слева для загрузчика при выравнивании по правому краю.
    else align === 'right' && (loader['style']['marginLeft'] = "calc(100% - " + starSize * numberOfStars + "px)");
    container['appendChild'](loader); // Добавление загрузчика в контейнер.

    // Создание элементов div для верхней и нижней подписи.
    let topTextElement = document["createElement"]('div'),
      bottomTextElement = document["createElement"]('div');
    // Форматирование нижней подписи, заменяя плейсхолдеры.
    bottomText = bottomText["replace"](/\$average\$/g, '0')["replace"](/\$votes\$/g, '<span class=\"kozyr-SRS-votes\">0</span>')["replace"](/\$max\$/g, numberOfStars),
    topTextElement["textContent"] = topText, // Установка текста верхней подписи.
    topTextElement["style"]['fontSize'] = textSize + 'px', // Размер шрифта верхней подписи.
    topTextElement["style"]['lineHeight'] = '1.2', // Межстрочный интервал верхней подписи.
    topTextElement["style"]['fontFamily'] = fontFamily, // Шрифт верхней подписи.
    topTextElement["style"]['textAlign'] = align, // Выравнивание текста верхней подписи.
    topTextElement['style']['color'] = textColor, // Цвет текста верхней подписи.
    container['appendChild'](topTextElement), // Добавление верхней подписи в контейнер.
    bottomTextElement["style"]['fontSize'] = textSize + 'px', // Размер шрифта нижней подписи.
    bottomTextElement["style"]['lineHeight'] = '1.2', // Межстрочный интервал нижней подписи.
    bottomTextElement["style"]['fontFamily'] = fontFamily, // Шрифт нижней подписи.
    bottomTextElement["style"]['textAlign'] = align, // Выравнивание текста нижней подписи.
    bottomTextElement['style']['color'] = textColor, // Цвет текста нижней подписи.
    bottomTextElement["textContent"] = bottomText; // Установка текста нижней подписи.

    // Получение URL Firebase из атрибута элемента.
    let firebase_URL = ratingElement['getAttribute']('firebaseURL');
    // Проверка и обработка URL Firebase на ошибки.
    if (firebase_URL === null) firebase_URL = "Ошибка Firebase. Неверный URL Firebase";
    else {
      if (firebase_URL == '') firebase_URL = "Ошибка Firebase. Введите URL-адрес вашего Firebase в атрибут \"firebaseURL\" в вашем скрипте рейтинга.";
      else {
        if (firebase_URL["indexOf"]('firebaseio.com') !== 0) firebase_URL = "Ошибка Firebase. Неверный URL Firebase";
        else {
          if (firebase_URL["lastIndexOf"]('.') < 5) firebase_URL = "Ошибка Firebase. Неверный URL Firebase";
          else firebase_URL["lastIndexOf"]('/') !== firebase_URL["length"] - 1 && (firebase_URL = firebase_URL + '/')
        }
      }
    }

    // Создание контейнера div для звезд.
    let starsContainer = document["createElement"]('div');
    starsContainer["style"]['width'] = starSize * numberOfStars + 'px', // Установка ширины контейнера звезд.
    starsContainer["style"]['display'] = 'inline-block', // Отображение как строчно-блочный элемент.
    container['appendChild'](starsContainer); // Добавление контейнера звезд в основной контейнер.

    // Создание звезд и добавление их в контейнер звезд.
    for (let i = 1; i <= numberOfStars; i++) {
      // Создание элемента img для звезды.
      let star = document["createElement"]('img');
      star["style"]['display'] = 'inline-block', // Отображение звезды как строчно-блочный элемент.
      star["style"]['width'] = starSize + 'px', // Установка ширины звезды.
      // Установка курсора и блокировка голосования, если уже проголосовано или рейтинг "только для чтения".
      star['style']['cursor'] = !localStorage['bsrgl_' + ratingName] && !readonly ? 'pointer' : 'default';

      // Обработчик клика на звезду (для голосования).
      !readonly && (star["onclick"] = function() {
        const stringGetter = getStringLiteralProxy; // Псевдоним для доступа к строковым литералам.
        // Проверка, голосовал ли пользователь ранее.
        if (!localStorage['bsrgl_' + ratingName]) {
          // Получение всех элементов звезд в контейнере.
          let stars = container["getElementsByTagName"]('img');
          // Обновление отображения звезд в зависимости от выбранной звезды.
          for (let j = 0; j < stars["length"]; j++) {
            // Заполнение звезд до выбранной.
            j < i ? (
              stars[j]["querySelector"]('.full')['style']['width'] = '0%',
              stars[j]["querySelector"]('.empty')["style"]['width'] = '0%',
              stars[j]["querySelector"]('.hover')['style']['width'] = "100%"
            ) : ( // Опустошение звезд после выбранной.
              stars[j]["querySelector"]('.full')['style']['width'] = '0%',
              stars[j]["querySelector"]('.hover')['style']['width'] = '0%',
              stars[j]["querySelector"]('empty')["style"]['width'] = "100%",
              stars[j]["querySelector"]('empty')["querySelector"]('img')["style"]['margin'] = "0 0 0 0"
            )
          }
          // Обновление верхней подписи, если она есть.
          if (topText != '') topTextElement["textContent"] = i + ' / ' + numberOfStars
        } else // Если пользователь уже голосовал, показать сообщение.
          container["title"] = firebaseURL["replace"](/\$userRating\$/g, localStorage['bsrgl_' + ratingName]),
          container["style"]['cursor'] = 'default' // Блокировка курсора.
      });
      star["setAttribute"]('value', i); // Установка атрибута value для звезды.

      // Создание div элементов для состояний звезды (полная, пустая, hover).
      let fullStar = document["createElement"]('div');
      fullStar["style"]['display'] = 'inline-block', // Отображение как строчно-блочный элемент.
      fullStar["style"]['overflow'] = 'hidden'; // Скрытие содержимого, выходящего за границы.

      let emptyStar = document["createElement"]('div');
      emptyStar["style"]['display'] = 'inline-block', // Отображение как строчно-блочный элемент.
      emptyStar["style"]['overflow'] = 'hidden'; // Скрытие содержимого, выходящего за границы.

      let hoverStar = document["createElement"]('div');
      hoverStar["style"]['display'] = 'inline-block', // Отображение как строчно-блочный элемент.
      hoverStar["style"]['overflow'] = 'hidden'; // Скрытие содержимого, выходящего за границы.

      // Создание элементов img для изображений состояний звезды.
      let emptyStarImage = document['createElement']('img');
      emptyStarImage['style']['height'] = '100%', // Высота 100%.
      emptyStarImage["style"]['animation'] = 'none', // Отключение анимации.
      emptyStarImage["style"]['padding'] = '0', // Установка padding в 0.
      emptyStarImage["style"]['margin'] = '0', // Установка margin в 0.
      emptyStarImage['style']['maxWidth'] = '100%'; // Максимальная ширина 100%.

      let fullStarImageContainer = document["createElement"]('div');
      fullStarImageContainer["style"]['height'] = '100%', // Высота 100%.
      fullStarImageContainer["style"]['animation'] = 'none', // Отключение анимации.
      fullStarImageContainer["style"]['padding'] = '0', // Установка padding в 0.
      fullStarImageContainer["style"]['margin'] = '0', // Установка margin в 0.
      fullStarImageContainer["style"]['maxWidth'] = '100%'; // Максимальная ширина 100%.

      let hoverStarImageContainer = document["createElement"]('div');
      hoverStarImageContainer["style"]['height'] = '100%', // Высота 100%.
      hoverStarImageContainer["style"]['animation'] = 'none', // Отключение анимации.
      hoverStarImageContainer["style"]['padding'] = '0', // Установка padding в 0.
      hoverStarImageContainer["style"]['margin'] = '0', // Установка margin в 0.
      hoverStarImageContainer["style"]['maxWidth'] = '100%'; // Максимальная ширина 100%.

      // Установка src для изображений состояний звезды.
      emptyStarImage["src"] = emptyStarImg,
      fullStarImageContainer["src"] = fullStarImg,
      hoverStarImageContainer["src"] = hoverStarImg,

      // Установка ширины для изображений состояний звезды.
      emptyStarImage['style']['width'] = starSize + 'px',
      fullStarImageContainer['style']['width'] = starSize + 'px',
      hoverStarImageContainer['style']['width'] = starSize + 'px',

      star["style"]['lineHeight'] = '0', // Установка межстрочного интервала в 0.

      // Добавление контейнеров изображений в соответствующие div элементы звезды.
      fullStar['appendChild'](fullStarImageContainer),
      emptyStar['appendChild'](emptyStarImage),
      hoverStar['appendChild'](hoverStarImageContainer),

      // Добавление div элементов состояний в элемент звезды.
      star['appendChild'](fullStar),
      star['appendChild'](emptyStar),
      star['appendChild'](hoverStar),

      starsContainer['appendChild'](star) // Добавление звезды в контейнер звезд.
    }

    container['appendChild'](bottomTextElement), // Добавление нижней подписи в контейнер.
    updateStars(container, 0, starSize); // Инициализация отображения звезд с рейтингом 0.

    // Проверка, является ли URL Firebase корректным для инициализации Firebase.
    if (firebase_URL["indexOf"]('firebaseio.com') < 0) {
      container["textContent"] = firebase_URL // Отображение сообщения об ошибке Firebase.
    } else {
      // Конфигурация Firebase.
      const firebaseConfig = {};
      firebaseConfig['databaseURL'] = firebase_URL;
      // Инициализация Firebase приложения.
      let app = firebase["initializeApp"](firebaseConfig, ratingName + ratingIndex),
        // Получение ссылки на базу данных Firebase.
        databaseRef = app["database"]()["ref"]('StarRatingSystem/' + currentUrl + '/' + ratingName);

      // Слушатель изменений значения рейтинга в Firebase.
      databaseRef["on"]('value', snapshot => {
        const stringGetter = getStringLiteralProxy; // Псевдоним для доступа к строковым литералам.
        // Получение данных из snapshot.
        let data = snapshot["val"]();
        // Если данные отсутствуют, установить начальные значения.
        if (!data) {
          const initialData = {};
          initialData['OO'] = 0, initialData['O0'] = 0, data = initialData
        }
        // Обновление визуального отображения звезд на основе данных из Firebase.
        updateStars(container, data['OO'] * numberOfStars, starSize);
        // Удаление загрузчика после загрузки данных.
        if (container["contains"](loader)) loader["remove"]();

        // Обработчик наведения мыши на контейнер звезд.
        starsContainer["onmouseenter"] = function() {
          const stringGetter = getStringLiteralProxy; // Псевдоним для доступа к строковым литералам.
          updateStars(container, data['OO'] * numberOfStars, starSize), // Обновление звезд при наведении.
          topTextElement["textContent"] = topText // Восстановление текста верхней подписи.
        },
        // Обновление среднего значения рейтинга на странице.
        container["querySelectorAll"]('.kozyr-SRS-average')["forEach"](averageElement => averageElement["innerHTML"] = Math["round"](data['OO'] * numberOfStars * 100) / 100),
        // Обновление количества голосов на странице.
        container["querySelectorAll"]('.kozyr-SRS-votes')["forEach"](votesElement => votesElement["innerHTML"] = data['O0']),
        // Добавление обработчиков клика на звезды для голосования (если рейтинг не "только для чтения").
        !readonly && container['querySelectorAll']('img')["forEach"]((starElement, starIndex) => {
          const stringGetter = getStringLiteralProxy; // Псевдоним для доступа к строковым литералам.
          starElement["onclick"] = function() {
            const stringGetter = getStringLiteralProxy; // Псевдоним для доступа к строковым литералам.
            // Проверка, голосовал ли пользователь ранее.
            if (!localStorage['bsrgl_' + ratingName]) {
              // Вычисление нового среднего рейтинга.
              var averageRating = (data['OO'] * data['O0'] + (starIndex + 1) / numberOfStars) / (data['O0'] + 1);
              const newData = {};
              newData['OO'] = averageRating, newData['O0'] = data['O0'] + 1,
              // Обновление данных рейтинга в Firebase.
              databaseRef["set"](newData),
              // Сохранение информации о голосовании в localStorage.
              localStorage['bsrgl_' + ratingName] = starIndex + 1,
              // Блокировка возможности повторного голосования.
              container["querySelectorAll"]('img')["forEach"](star => star["style"]['cursor'] = 'default'),
              // Показ сообщения благодарности.
              showThankYouMessage(thankYouText, container, starIndex + 1),
              // Восстановление текста верхней подписи.
              topTextElement["textContent"] = topText
            } else // Если пользователь уже голосовал, показать сообщение об этом.
              showThankYouMessage(firebaseURL, container, localStorage['bsrgl_' + ratingName])
          }
        })
      })
    }
  }

  // Функция инициализации, проверяющая готовность Firebase перед инициализацией рейтинга.
  function initialize(index) {
    const stringGetter = getStringLiteralProxy; // Псевдоним для доступа к строковым литералам.
    // Проверка, загружен ли Firebase и доступны ли необходимые функции.
    typeof firebase == 'object' && typeof firebase["database"] == 'object' && typeof firebase["initializeApp"] == 'function' ?
      initializeRating(index) : // Инициализация рейтинга, если Firebase готов.
      // Повторная попытка инициализации через 50мс, если Firebase не готов.
      setTimeout(function() {
        initialize(index)
      }, 50)
  }
  initialize(ratingIndex) // Вызов функции инициализации рейтинга.
}(StarRatingGenerator));
