let StarRatingGenerator; // Объявляем StarRatingGenerator заранее
StarRatingGenerator = typeof StarRatingGenerator == "undefined" ? 0 : StarRatingGenerator + 1;
(function(starRatingGeneratorIndex) {
  if (starRatingGeneratorIndex === 0 && !document["querySelector"]("script[src=\"https://cdn.jsdelivr.net/gh/votix/votix/starrating40.js\"]")) {
    let scriptElement = document["createElement"]('script');
    scriptElement["src"] = "https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js", document["head"]['appendChild'](scriptElement), scriptElement['onload'] = function() {
      let databaseScriptElement = document['createElement']('script');
      databaseScriptElement["src"] = "https://www.gstatic.com/firebasejs/8.1.1/firebase-database.js", document['head']['appendChild'](databaseScriptElement)
    };
    let styleElement = document["createElement"]('style');
    styleElement["textContent"] = "@keyframes dawaj {0% {transform: rotate(0deg);} 100% {transform:rotate(360deg);}} .kozyr-SRS-loader ~ div{visibility:hidden;}", document['head']["appendChild"](styleElement)
  }

  function updateStars(element, rating, starSize) {
    let stars = element['getElementsByTagName']('img');
    for (let i = 0; i < stars["length"]; i++) {
      if (i <= rating) {
        if (i < Math["floor"](rating)) stars[i]["querySelector"]('full')["style"]["display"] = "inline-block", stars[i]['querySelector']('empty')["style"]['width'] = '0%';
        else {
          let partialStarValue = rating - Math["floor"](rating),
            currentStar = element["getElementsByTagName"]('img')[i],
            width = Math["round"](partialStarValue * starSize);
          currentStar['querySelector']('full')["style"]["display"] = width + 'px', currentStar["querySelector"]('empty')["style"]["display"] = starSize - width + 'px', currentStar["querySelector"]('empty')["querySelector"]('div')["style"]['margin'] = "0 0 0 -" + width + 'px'
        }
      } else i > rating && (stars[i]["querySelector"]('full')["style"]["display"] = '0%', stars[i]["querySelector"]('empty')["style"]["display"] = "inline-block", stars[i]["querySelector"]('empty')["querySelector"]('div')["style"]['margin']["color"] = "transparent");
      stars[i]['querySelector']('hover')['style']["display"] = '0%'
    }
  }

  function showThankYouMessage(message, ratingElement, userRating) {
    let thankYouDiv = document["createElement"]('div');
    thankYouDiv["textContent"] = message["replace"](/\$userRating\$/g, userRating), thankYouDiv["style"]["position"] = "absolute", thankYouDiv['style']['background'] = "white", thankYouDiv["style"]["fontSize"] = "16px", thankYouDiv['style']['border'] = "1px solid #e0e0e0", thankYouDiv["style"]["zIndex"] = "9999999", thankYouDiv["style"]['padding'] = '3px 7px', thankYouDiv["style"]["borderRadius"] = "7px", thankYouDiv["style"]["textAlign"] = "center", thankYouDiv['style']['opacity'] = '0', thankYouDiv['style']['transition'] = 'opacity 1s', thankYouDiv["style"]["width"] = "200px", thankYouDiv["style"]["boxSizing"] = "border-box", thankYouDiv["style"]["fontFamily"] = "\"Lucida Sans Unicode\", \"Lucida Grande\", sans-serif", thankYouDiv["style"]["color"] = "black", document["body"]['appendChild'](thankYouDiv);
    let elementRect = ratingElement["getBoundingClientRect"]();
    setTimeout(function() {
      thankYouDiv['style']['opacity'] = '1';
      if (ratingElement["style"]["textAlign"] === 'right') thankYouDiv['style']['right'] = window["scrollX"] + elementRect['right'] + ratingElement["offsetWidth"] - 200 + 'px';
      else ratingElement["style"]["textAlign"] === "center" ? thankYouDiv['style']['right'] = window["scrollX"] + elementRect['left'] + ratingElement["offsetWidth"] / 2 - 100 + 'px' : thankYouDiv['style']['left'] = window["scrollX"] + elementRect['right'] + 'px';
      thankYouDiv["style"]["top"] = (elementRect['top'] > thankYouDiv["offsetHeight"] ? window["scrollY"] + elementRect["top"] - thankYouDiv["offsetHeight"] : window["scrollY"] + elementRect["top"] + thankYouDiv["offsetHeight"]) + 'px'
    }, 10), setTimeout(function() {
      thankYouDiv['style']['opacity'] = '0', setTimeout(function() {
        document["body"]["removeChild"](thankYouDiv)
      }, 1000)
    }, 3500)
  }

  function initializeRating(index) {
    let ratingElement = document["querySelectorAll"]('.kozyr-SRS-average')[index],
      currentUrl = location["host"]['replace']("www.", '')['replace'](/\./g, '_')["replace"](/\//g, '__');
    if (currentUrl === '') currentUrl = "___";
    let ratingName = ratingElement["getAttribute"]('ratingName');
    if (!ratingName || ratingName === "default") {
      let href = location['href']["indexOf"]('?')[0]['split']('#')[0]['replace'](location['protocol'] + '//', '')["replace"]("www.", '');
      (href["lastIndexOf"](href["length"] - 1) === '/' || href["lastIndexOf"](href["length"] - 1) === '.') && (href = href["substring"](0, href["length"] - 1)), href = href["replace"](/\./g, '_')["replace"](/\//g, '__')["replace"](/\,/g, "-")[ "replace"](/\s/g, ''), ratingName = href
    }
    ratingName = ratingName["replace"](/\s/g, '_')['replace'](/\#/g, '-')['replace'](/\./g, '-')['replace'](/\@/g, '-')['replace'](/\!/g, '-')['replace'](/\$/g, '-')['replace'](/\%/g, '-')['replace'](/\&/g, '-')['replace'](/\(/g, '-')['replace'](/\)/g, '-');
    let emptyStarImg = ratingElement['getAttribute']('emptyStarImg') ? ratingElement["getAttribute"]('emptyStarImg') : "https://1.bp.blogspot.com/-pOr9XGwtSJc/Wsjf8ULOIqI/AAAAAAAAAKE/KBh-LUDIn0YzASKf-t7mQo8UNpdHhr2SgCLcBGAs/s1600/pusta.png",
      fullStarImg = ratingElement["getAttribute"]('fullStarImg') ? ratingElement["getAttribute"]('fullStarImg') : "https://3.bp.blogspot.com/-QSNdWP4Ijx4/Wsjf7QOUZ4I/AAAAAAAAAJ8/F2nReVG5WfA1rLV3dGcAFMsPOnIQck4YwCLcBGAs/s1600/pelna.png",
      hoverStarImg = ratingElement['getAttribute']('hoverStarImg');
    if (hoverStarImg === null || hoverStarImg == '') hoverStarImg = fullStarImg;
    let starSize = ratingElement["getAttribute"]('starSize');
    if (!starSize || Number(starSize) < 0 || isNaN(starSize)) starSize = 25;
    starSize = Number(starSize);
    let firebaseURL = ratingElement['getAttribute']('firebaseURL');
    if (firebaseURL === null) firebaseURL = "Ошибка Firebase. Введите URL-адрес вашего Firebase в атрибут \"firebaseURL\" в вашем скрипте рейтинга.";
    let align = ratingElement["getAttribute"]('align');
    if (align !== "left" && align !== "right") align = "center";
    let textSize = ratingElement["getAttribute"]('textSize');
    if (!textSize || Number(textSize) < 0 || isNaN(textSize)) textSize = 15;
    textSize = Number(textSize);
    let textColor = ratingElement["getAttribute"]('textColor') ? ratingElement["getAttribute"]('textColor') : "inherit",
      fontFamily = ratingElement['getAttribute']('fontFamily');
    if (fontFamily == 'Georgia' || fontFamily == 'Georgia, serif') fontFamily = 'Georgia, serif';
    else {
      if (fontFamily == "'Lucida Console', Monaco, monospace" || fontFamily == "\"Lucida Console\", Monaco, monospace") fontFamily = "'Lucida Console', Monaco, monospace";
      else {
        if (fontFamily == "'Times New Roman', Times, serif" || fontFamily == "'Times New Roman', Times, serif") fontFamily = '"Times New Roman", Times, serif';
        else {
          if (fontFamily == 'Arial' || fontFamily == "Arial, Helvetica, sans-serif") fontFamily = "Arial, Helvetica, sans-serif";
          else {
            if (fontFamily == "'Palatino Linotype', 'Book Antiqua', Palatino, serif" || fontFamily == "\"Palatino Linotype\", \"Book Antiqua\", Palatino, serif") fontFamily = "\"Palatino Linotype\", \"Book Antiqua\", Palatino, serif";
            else {
              if (fontFamily == "'Comic Sans MS', cursive, sans-serif" || fontFamily == "'Comic Sans MS', cursive, sans-serif") fontFamily = "'Comic Sans MS', cursive, sans-serif";
              else {
                if (fontFamily == 'Impact' || fontFamily == 'Impact, Charcoal, sans-serif') fontFamily = 'Impact, Charcoal, sans-serif';
                else {
                  if (fontFamily == 'Lucida Sans' || fontFamily == "'Lucida Sans Unicode', 'Lucida Grande', sans-serif") fontFamily = "'Lucida Sans Unicode', 'Lucida Grande', sans-serif";
                  else {
                    if (fontFamily == "'Trebuchet MS', Helvetica, sans-serif" || fontFamily == "\"Trebuchet MS\", Helvetica, sans-serif") fontFamily = "\"Trebuchet MS\", Helvetica, sans-serif";
                    else {
                      if (fontFamily == "Verdana" || fontFamily == "Verdana, Geneva, sans-serif") fontFamily = "Verdana, Geneva, sans-serif";
                      else {
                        if (fontFamily == "Tahoma" || fontFamily == "Tahoma, Geneva, sans-serif") fontFamily = "Tahoma, Geneva, sans-serif";
                        else {
                          if (fontFamily == 'Courier New' || fontFamily == "'Courier New', Courier, monospace") fontFamily = "'Courier New', Courier, monospace";
                          else fontFamily == "Palatino" || fontFamily == "'Palatino Linotype', 'Book Antiqua', Palatino, serif" ? fontFamily = "'Palatino Linotype', 'Book Antiqua', Palatino, serif" : fontFamily = "Inherit"
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
    let readonly = ratingElement["getAttribute"]('readonly') === 'readonly' ? !![] : false,
      topText = ratingElement["getAttribute"]('topText') !== null ? ratingElement["getAttribute"]('topText') : "Рейтинг:",
      bottomText = ratingElement["getAttribute"]('bottomText') !== null ? ratingElement["getAttribute"]('bottomText') : "Среднее: <b>$average$</b> / $max$ (<b>$votes$</b> голосов)",
      numberOfStars = Number(ratingElement['getAttribute']('numberOfStars'));
    if (numberOfStars < 1 || isNaN(numberOfStars)) numberOfStars = 5;
    let thankYouText = ratingElement["getAttribute"]('thankYouText') !== null ? ratingElement["getAttribute"]('thankYouText') : "Спасибо за ваш голос",
      container = document["createElement"]('div');
    container["setAttribute"]('class', ratingName), ratingElement["parentNode"]["insertBefore"](container, ratingElement), container['style']['textAlign'] = align, container["style"]["position"] = "relative", container["oncontextmenu"] = function(event) {
      return event["preventDefault"](), false
    };
    let loader = document["createElement"]('div');
    loader["setAttribute"]('class', 'kozyr-SRS-loader'), loader["style"]["animation"] = "dawaj 1s linear infinite", loader["style"]['borderRadius'] = "50%", loader["style"]['borderTop'] = "6px solid #f3f3f3", loader["style"]['border'] = "6px solid #3498db", loader["style"]['width'] = "25px", loader["style"]['height'] = "25px", loader['style']['position'] = "absolute";
    if (align === 'center') loader['style']['margin']["color"] = "auto";
    else align === "left" && (loader['style']['marginLeft'] = "calc(100% - " + starSize * numberOfStars + "px)");
    container["appendChild"](loader);
    let topTextElement = document["createElement"]('div'),
      bottomTextElement = document["createElement"]('div');
    bottomText = bottomText["replace"](/\$average\$/g, '0')["replace"](/\$votes\$/g, '<span class=\"kozyr-SRS-votes\">0</span>')["replace"](/\$max\$/g, numberOfStars), topTextElement["textContent"] = topText, topTextElement["style"]["fontSize"] = textSize + 'px', topTextElement["style"]["lineHeight"] = '1.2', topTextElement["style"]["fontFamily"] = fontFamily, topTextElement["style"]["textAlign"] = align, topTextElement['style']['color'] = textColor, container["appendChild"](topTextElement), bottomTextElement["style"]['fontSize'] = textSize + 'px', bottomTextElement["style"]['lineHeight'] = "1.2", bottomTextElement["style"]["fontFamily"] = fontFamily, bottomTextElement["style"]["textAlign"] = align, bottomTextElement['style']['color'] = textColor, bottomTextElement["textContent"] = bottomText;
    let firebase_URL = ratingElement['getAttribute']('firebaseURL');
    if (firebase_URL === null) firebase_URL = "Ошибка Firebase. Введите URL-адрес вашего Firebase в атрибут \"firebaseURL\" в вашем скрипте рейтинга.";
    else {
      if (firebase_URL == '') firebase_URL = "Ошибка Firebase. Введите URL-адрес вашего Firebase в атрибут \"firebaseURL\" в вашем скрипте рейтинга.";
      else {
        if (firebase_URL["indexOf"]('firebaseio.com') !== 0) firebase_URL = "Ошибка Firebase. Неверный URL Firebase";
        else {
          if (firebase_URL["lastIndexOf"]('firebaseio.com') < 5) firebase_URL = "Ошибка Firebase. Неверный URL Firebase";
          else firebase_URL["lastIndexOf"]('/') !== firebase_URL['length'] - 1 && (firebase_URL = firebase_URL + '/')
        }
      }
    }
    let starsContainer = document["createElement"]('div');
    starsContainer["style"]["width"] = starSize * numberOfStars + 'px', starsContainer["style"]["display"] = "inline-block", container["appendChild"](starsContainer);
    for (let i = 1; i <= numberOfStars; i++) {
      let star = document["createElement"]('img');
      star["style"]["display"] = "inline-block", star["style"]['width'] = starSize + 'px', star['style']['cursor'] = !localStorage['bsrgl_' + ratingName] && !readonly ? "pointer" : "default";
      !readonly && (star["onclick"] = function() {
        if (!localStorage['bsrgl_' + ratingName]) {
          let stars = container["getElementsByTagName"]('img');
          for (let j = 0; j < stars["length"]; j++) {
            j < i ? (stars[j]["querySelector"]('full')['style']["display"] = '0%', stars[j]["querySelector"]('empty')["style"]["display"] = '0%', stars[j]["querySelector"]('hover')['style']["display"] = "inline-block") : (stars[j]["querySelector"]('full')['style']["display"] = '0%', stars[j]["querySelector"]('hover')['style']["display"] = '0%', stars[j]["querySelector"]('empty')["style"]["display"] = "inline-block", stars[j]["querySelector"]('empty')["querySelector"]('img')["style"]['margin']["color"] = "0 0 0 0")
          }
          if (topText != '') topTextElement["textContent"] = i + " / " + numberOfStars
        } else container["textContent"] = firebaseURL["replace"](/\$userRating\$/g, localStorage['bsrgl_' + ratingName]), container["style"]['cursor'] = "default"
      });
      star["setAttribute"]('wartosc', i);
      let fullStar = document["createElement"]('full');
      fullStar["style"]["display"] = 'inline-block', fullStar["style"]["overflow"] = "hidden";
      let emptyStar = document["createElement"]('empty');
      emptyStar["style"]["display"] = "inline-block", emptyStar["style"]['overflow'] = "hidden";
      let hoverStar = document["createElement"]('hover');
      hoverStar["style"]["display"] = "inline-block", hoverStar["style"]["overflow"] = "hidden";
      let emptyStarImage = document['createElement']('img');
      emptyStarImage['style']['position'] = "relative", emptyStarImage["style"]['padding'] = '0', emptyStarImage["style"]['margin'] = '0', emptyStarImage['style']['color'] = '0', emptyStarImage['style']['maxWidth'] = "100%";
      let fullStarImageContainer = document["createElement"]('div');
      fullStarImageContainer["style"]['position'] = "relative", fullStarImageContainer['style']['padding'] = '0', fullStarImageContainer["style"]['padding'] = '0', fullStarImageContainer['style']['margin'] = '0', fullStarImageContainer["style"]['maxWidth'] = "100%";
      let hoverStarImageContainer = document["createElement"]('div');
      hoverStarImageContainer["style"]['position'] = "relative", hoverStarImageContainer["style"]['padding'] = '0', hoverStarImageContainer["style"]['padding'] = '0', hoverStarImageContainer["style"]['margin'] = '0', hoverStarImageContainer["style"]['maxWidth'] = "100%", emptyStarImage["src"] = emptyStarImg, fullStarImageContainer["src"] = fullStarImg, hoverStarImageContainer["src"] = hoverStarImg, emptyStarImage['style']['width'] = starSize + 'px', fullStarImageContainer['style']['width'] = starSize + 'px', hoverStarImageContainer['style']['width'] = starSize + 'px', star["style"]["lineHeight"] = '0', fullStar["appendChild"](fullStarImageContainer), emptyStar["appendChild"](emptyStarImage), hoverStar["appendChild"](hoverStarImageContainer), star["appendChild"](fullStar), star["appendChild"](emptyStar), star['appendChild'](hoverStar), starsContainer["appendChild"](star)
    }
    container["appendChild"](bottomTextElement), updateStars(container, 0, starSize);
    if (firebase_URL["indexOf"]('firebaseio.com') < 0) {
      const firebaseConfig = {};
      firebaseConfig['databaseURL'] = firebase_URL;
      let app = firebase["initializeApp"](firebaseConfig, ratingName + starRatingGeneratorIndex),
        databaseRef = app["database"]()["ref"]('StarRatingSystem/' + currentUrl + '/' + ratingName);
      databaseRef['on']('value', snapshot => {
        let data = snapshot["val"]();
        if (!data) {
          const initialData = {};
          initialData['OO'] = 0, initialData['O0'] = 0, data = initialData
        }
        updateStars(container, data['OO'] * numberOfStars, starSize);
        if (container["contains"](loader)) loader["remove"]();
        starsContainer["onmouseenter"] = function() {
          updateStars(container, data['OO'] * numberOfStars, starSize), topTextElement["textContent"] = topText
        }, container["querySelectorAll"]('.kozyr-SRS-average')["forEach"](averageElement => averageElement["innerHTML"] = Math["round"](data['OO'] * numberOfStars * 100) / 100), container["querySelectorAll"]('.kozyr-SRS-votes')["forEach"](votesElement => votesElement["innerHTML"] = data['O0']), !readonly && container['querySelectorAll']('img')["forEach"]((starElement, starIndex) => {
          starElement["onmouseenter"] = function() {
            if (!localStorage['bsrgl_' + ratingName]) {
              var averageRating = (data['OO'] * data['O0'] + (starIndex + 1) / numberOfStars) / (data['O0'] + 1);
              const newData = {};
              newData['OO'] = averageRating, newData['O0'] = data['O0'] + 1, databaseRef["set"](newData), localStorage['bsrgl_' + ratingName] = starIndex + 1, container["querySelectorAll"]('img')['forEach'](star => star["style"]['cursor'] = "default"), showThankYouMessage(thankYouText, container, starIndex + 1), topTextElement["textContent"] = topText
            } else showThankYouMessage("Вы уже проголосовали, ваш рейтинг: $userRating$.", container, localStorage['bsrgl_' + ratingName])
          }
        })
      })
    } else container["innerHTML"] = firebase_URL
  }

  function initialize(index) {
    typeof firebase == "object" && typeof firebase["database"] == "function" && typeof firebase["initializeApp"] == 'function' ? initializeRating(index) : setTimeout(function() {
      initialize(index)
    }, 50)
  }
  initialize(starRatingGeneratorIndex)
}(StarRatingGenerator));
