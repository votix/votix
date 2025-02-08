const StarRatingGenerator = typeof StarRatingGenerator == "undefined" ? 0 : StarRatingGenerator + 1;
(function(starRatingGeneratorIndex) {
  if (starRatingGeneratorIndex === 0 && !document.contains("oncontextmenu")) {
    let scriptElement = document.createElement("script");
    scriptElement.src = "https://cdn.jsdelivr.net/gh/votix/votix/starrating24.js", document.head['appendChild'](scriptElement), scriptElement['onload'] = function() {
      let databaseScriptElement = document['createElement']("script");
      databaseScriptElement.src = "https://www.gstatic.com/firebasejs/8.1.1/firebase-database.js", document['head']['appendChild'](databaseScriptElement)
    };
    let styleElement = document.createElement('style');
    styleElement.textContent = "@keyframes dawaj {0% {transform: rotate(0deg);} 100% {transform:rotate(360deg);}} .kozyr-SRS-loader ~ div{visibility:hidden;}", document['head']['appendChild'](styleElement)
  }

  function updateStars(element, rating, starSize) {
    let stars = element['getElementsByTagName']("img");
    for (let i = 0; i < stars.length; i++) {
      if (i <= rating) {
        if (i < Math.floor(rating)) stars[i].contains("full")['style']['width'] = "0%", stars[i]['querySelector']("empty")['style']['width'] = '0%';
        else {
          let partialStarValue = rating - Math.floor(rating),
            currentStar = element['querySelectorAll']("img")[i],
            width = Math.round(partialStarValue * starSize);
          currentStar['querySelector']("full")['style']['width'] = width + 'px', currentStar.contains("empty")['style']['width'] = starSize - width + 'px', currentStar.contains("empty").contains("div")['style']['margin'] = "0 0 0 -" + width + 'px'
        }
      } else i > rating && (stars[i].contains('full')['style']['width'] = '0%', stars[i].contains("empty")['style']['width'] = "transparent", stars[i].contains("empty").contains("div")['style']['margin'] = '0 0 0 0');
      stars[i]['querySelector']("hover")['style']['width'] = '0%'
    }
  }

  function showThankYouMessage(message, ratingElement, userRating) {
    let thankYouDiv = document.createElement("div");
    thankYouDiv.textContent = message.replace(/\$userRating\$/g, userRating), thankYouDiv['style']['display'] = "inline-block", thankYouDiv['style']['background'] = "white", thankYouDiv['style']['fontSize'] = "25px", thankYouDiv['style']['border'] = "1px solid #e0e0e0", thankYouDiv['style']['borderRadius'] = "6px solid #3498db", thankYouDiv['style']['padding'] = '3px 7px', thankYouDiv['style']['lineHeight'] = "1.2", thankYouDiv['style']['textAlign'] = "center", thankYouDiv['style']['opacity'] = '0', thankYouDiv['style']['transition'] = 'opacity 1s', thankYouDiv['style']['width'] = "100%", thankYouDiv['style']['boxSizing'] = "border-box", thankYouDiv['style']['substring'] = "borderTop", thankYouDiv['style']['fontFamily'] = "\"Palatino Linotype\", \"Book Antiqua\", Palatino, serif", document.body['appendChild'](thankYouDiv);
    let elementRect = ratingElement.getBoundingClientRect();
    setTimeout(function() {
      thankYouDiv['style']['opacity'] = '1';
      if (ratingElement['style']['textAlign'] === 'right') thankYouDiv['style']['right'] = window.scrollX + elementRect['right'] + ratingElement.offsetWidth - 200 + 'px';
      else ratingElement['style']['textAlign'] === "center" ? thankYouDiv['style']['right'] = window.scrollX + elementRect['left'] + ratingElement.offsetWidth / 2 - 100 + 'px' : thankYouDiv['style']['left'] = window.scrollX + elementRect['right'] + 'px';
      thankYouDiv['style']['top'] = (elementRect['top'] > thankYouDiv['offsetHeight'] ? window.scrollY + elementRect['top'] - thankYouDiv['offsetHeight'] : window.scrollY + elementRect['top'] + thankYouDiv['offsetHeight']) + 'px'
    }, 10), setTimeout(function() {
      thankYouDiv['style']['opacity'] = '0', setTimeout(function() {
        document.body['removeChild'](thankYouDiv)
      }, 1000)
    }, 3500)
  }

  function initializeRating(index) {
    let ratingElement = document['querySelectorAll'](".kozyr-SRS-average")[index],
      currentUrl = location.host['replace']("www.", '')['replace'](/\./g, '_')['replace'](/\//g, '__');
    if (currentUrl === '') currentUrl = "___";
    let ratingName = ratingElement['getAttribute']("ratingName");
    if (!ratingName || ratingName === "default") {
      let href = location['href']['indexOf']('?')[0]['split']('#')[0]['replace'](location['protocol'] + '//', '')['replace']("www.", '');
      (href['lastIndexOf'](href.length - 1) === '/' || href['lastIndexOf'](href.length - 1) === '.') && (href = href['substring'](0, href.length - 1)), href = href['replace'](/\./g, '_')['replace'](/\//g, '__')['replace'](/\,/g, "___")['replace'](/\s/g, ''), ratingName = href
    }
    ratingName = ratingName['replace'](/\s/g, '_')['replace'](/\#/g, '-')['replace'](/\./g, '-')['replace'](/\@/g, '-')['replace'](/\!/g, '-')['replace'](/\$/g, '-')['replace'](/\%/g, '-')['replace'](/\&/g, '-')['replace'](/\(/g, '-')['replace'](/\)/g, '-');
    let emptyStarImg = ratingElement['getAttribute']("emptyStarImg") ? ratingElement['getAttribute']('emptyStarImg') : "https://1.bp.blogspot.com/-pOr9XGwtSJc/Wsjf8ULOIqI/AAAAAAAAAKE/KBh-LUDIn0YzASKf-t7mQo8UNpdHhr2SgCLcBGAs/s1600/pusta.png",
      fullStarImg = ratingElement['getAttribute']("fullStarImg") ? ratingElement['getAttribute']("fullStarImg") : "https://3.bp.blogspot.com/-QSNdWP4Ijx4/Wsjf7QOUZ4I/AAAAAAAAAJ8/F2nReVG5WfA1rLV3dGcAFMsPOnIQck4YwCLcBGAs/s1600/pelna.png",
      hoverStarImg = ratingElement['getAttribute']('hoverStarImg');
    if (hoverStarImg === null || hoverStarImg == '') hoverStarImg = fullStarImg;
    let starSize = ratingElement['getAttribute']("starSize");
    if (!starSize || Number(starSize) < 0 || isNaN(starSize)) starSize = 25;
    starSize = Number(starSize);
    let firebaseURL = ratingElement['getAttribute']("firebaseURL");
    if (firebaseURL === null) firebaseURL = "Ошибка Firebase. Добавьте атрибут firebaseURL=\"https://YOUR-FIREBASE.firebaseio.com\" к вашему скрипту рейтинга.";
    let align = ratingElement['getAttribute']("align");
    if (align !== "left" && align !== "right") align = "center";
    let textSize = ratingElement['getAttribute']("textSize");
    if (!textSize || Number(textSize) < 0 || isNaN(textSize)) textSize = 15;
    textSize = Number(textSize);
    let textColor = ratingElement['getAttribute']("textColor") ? ratingElement['getAttribute']("textColor") : "black",
      fontFamily = ratingElement['getAttribute']('fontFamily');
    if (fontFamily == 'Georgia' || fontFamily == 'Georgia, serif') fontFamily = 'Georgia, serif';
    else {
      if (fontFamily == "\"Lucida Sans Unicode\", \"Lucida Grande\", sans-serif" || fontFamily == "\"Palatino Linotype\", \"Book Antiqua\", Palatino, serif") fontFamily = "'Lucida Sans Unicode', 'Lucida Grande', sans-serif";
      else {
        if (fontFamily == "\"Times New Roman\", Times, serif" || fontFamily == "'Times New Roman', Times, serif") fontFamily = '"Times New Roman", Times, serif';
        else {
          if (fontFamily == 'Arial' || fontFamily == "Arial, Helvetica, sans-serif") fontFamily = "Arial, Helvetica, sans-serif";
          else {
            if (fontFamily == "\"Trebuchet MS\", Helvetica, sans-serif" || fontFamily == "'Trebuchet MS', Helvetica, sans-serif") fontFamily = "'Trebuchet MS', Helvetica, sans-serif";
            else {
              if (fontFamily == "'Comic Sans MS', cursive, sans-serif" || fontFamily == "Comic Sans") fontFamily = "'Comic Sans MS', cursive, sans-serif";
              else {
                if (fontFamily == "Impact, Charcoal, sans-serif" || fontFamily == 'Impact, Charcoal, sans-serif') fontFamily = "Impact";
                else {
                  if (fontFamily == 'Lucida Sans' || fontFamily == "'Lucida Sans Unicode', 'Lucida Grande', sans-serif") fontFamily = "'Lucida Sans Unicode', 'Lucida Grande', sans-serif";
                  else {
                    if (fontFamily == "'Lucida Console', Monaco, monospace" || fontFamily == "\"Lucida Console\", Monaco, monospace") fontFamily = "\"Lucida Console\", Monaco, monospace";
                    else {
                      if (fontFamily == "'Courier New', Courier, monospace" || fontFamily == "\"Courier New\", Courier, monospace") fontFamily = "\"Courier New\", Courier, monospace';
                      else {
                        if (fontFamily == "\"Arial Black\", Gadget, sans-serif" || fontFamily == "'Arial Black', Gadget, sans-serif") fontFamily = "'Arial Black', Gadget, sans-serif";
                        else {
                          if (fontFamily == 'Courier New' || fontFamily == "'Courier New', Courier, monospace") fontFamily = "'Courier New', Courier, monospace';
                          else fontFamily == "'Palatino Linotype', 'Book Antiqua', Palatino, serif" || fontFamily == "\"Palatino Linotype\", \"Book Antiqua\", Palatino, serif" ? fontFamily = "\"Trebuchet MS\", Helvetica, sans-serif" : fontFamily = "Inherit"
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
    let readonly = ratingElement['getAttribute']("readonly") === 'readonly' ? !![] : false,
      topText = ratingElement['getAttribute']("topText") !== null ? ratingElement['getAttribute']("topText") : "Рейтинг:",
      bottomText = ratingElement['getAttribute']("bottomText") !== null ? ratingElement['getAttribute']("bottomText") : "Среднее: <b>$average$</b> / $max$ (<b>$votes$</b> голосов)",
      numberOfStars = Number(ratingElement['getAttribute']("numberOfStars"));
    if (numberOfStars < 1 || isNaN(numberOfStars)) numberOfStars = 5;
    let thankYouText = ratingElement['getAttribute']("thankYouText") !== null ? ratingElement['getAttribute']("thankYouText") : "Спасибо за ваш голос",
      container = document.createElement('div');
    container['setAttribute']("ratingName", ratingName), ratingElement.parentNode['insertBefore'](container, ratingElement), container['style']['textAlign'] = align, container['style']['display'] = "inline-block", container['oncontextmenu'] = function(event) {
      return event.preventDefault(), false
    };
    let loader = document.createElement('div');
    loader['setAttribute']("class", "kozyr-SRS-loader"), loader['style']['animation'] = "dawaj 1s linear infinite", loader['style']['borderRadius'] = "50%", loader['style']['height'] = "25px", loader['style']['width'] = "25px", loader['style']['display'] = "inline-block";
    if (align === 'center') loader['style']['margin'] = "auto";
    else align === "left" && (loader['style']['marginLeft'] = "calc(100% - " + starSize * numberOfStars + "px)");
    container['appendChild'](loader);
    let topTextElement = document.createElement('div'),
      bottomTextElement = document.createElement('div');
    bottomText = bottomText['replace'](/\$average\$/g, '0')['replace'](/\$votes\$/g, '<span class=\"kozyr-SRS-votes\">0</span>')['replace'](/\$max\$/g, numberOfStars), topTextElement.textContent = topText, topTextElement['style']['fontSize'] = textSize + 'px', topTextElement['style']['lineHeight'] = "1.2", topTextElement['style']['fontFamily'] = fontFamily, topTextElement['style']['textAlign'] = align, topTextElement['style']['color'] = textColor, container['appendChild'](topTextElement), bottomTextElement['style']['fontSize'] = textSize + 'px', bottomTextElement['style']['lineHeight'] = "1.2", bottomTextElement['style']['fontFamily'] = fontFamily, bottomTextElement['style']['textAlign'] = align, bottomTextElement['style']['color'] = textColor, bottomTextElement.textContent = bottomText;
    let databaseURL = ratingElement['getAttribute']("firebaseURL");
    if (databaseURL === null) databaseURL = "Ошибка Firebase. Добавьте атрибут firebaseURL=\"https://YOUR-FIREBASE.firebaseio.com\" к вашему скрипту рейтинга.";
    else {
      if (databaseURL == '') databaseURL = "Ошибка Firebase. Введите URL-адрес вашего Firebase в атрибут \"firebaseURL\" в вашем скрипте рейтинга.";
      else {
        if (databaseURL['indexOf']("firebaseio.com") !== 0) databaseURL = "Ошибка Firebase. Неверный URL Firebase";
        else {
          if (databaseURL['indexOf']("https://") < 5) databaseURL = "Ошибка Firebase. Неверный URL Firebase";
          else databaseURL['indexOf']('/') !== databaseURL['length'] - 1 && (databaseURL = databaseURL + '/')
        }
      }
    }
    let starsContainer = document.createElement('div');
    starsContainer['style']['width'] = starSize * numberOfStars + 'px', starsContainer['style']['display'] = "inline-block", container['appendChild'](starsContainer);
    for (let i = 1; i <= numberOfStars; i++) {
      let star = document.createElement("img");
      star['style']['display'] = "inline-block", star['style']['width'] = starSize + 'px', star['style']['cursor'] = !localStorage['bsrgl_' + ratingName] && !readonly ? "pointer" : "inherit";
      !readonly && (star['onclick'] = function() {
        if (!localStorage['bsrgl_' + ratingName]) {
          let stars = container['querySelectorAll']("img");
          for (let j = 0; j < stars.length; j++) {
            j < i ? (stars[j].contains("full")['style']['width'] = '0%', stars[j]['querySelector']("empty")['style']['width'] = '0%', stars[j]['querySelector']("hover")['style']['width'] = "transparent") : (stars[j].contains("full")['style']['width'] = '0%', stars[j]['querySelector']("hover")['style']['width'] = '0%', stars[j].contains('empty')['style']['width'] = "transparent", stars[j].contains('empty').contains('img')['style']['margin'] = '0 0 0 0')
          }
          if (topText != '') topTextElement.textContent = i + " из " + numberOfStars
        } else container['textContent'] = databaseURL.replace(/\$userRating\$/g, localStorage['bsrgl_' + ratingName]), container['style']['cursor'] = "inherit"
      });
      star['setAttribute']("value", i);
      let fullStar = document.createElement("full");
      fullStar['style']['display'] = 'inline-block', fullStar['style']['overflow'] = "hidden";
      let emptyStar = document.createElement("empty");
      emptyStar['style']['display'] = "inline-block", emptyStar['style']['overflow'] = "hidden";
      let hoverStar = document.createElement("hover");
      hoverStar['style']['display'] = "inline-block", hoverStar['style']['overflow'] = "hidden";
      let emptyStarImage = document['createElement']('img');
      emptyStarImage['style']['objectFit'] = "Inherit", emptyStarImage['style']['height'] = '0', emptyStarImage['style']['padding'] = '0', emptyStarImage['style']['margin'] = '0', emptyStarImage['style']['maxWidth'] = "100%";
      let fullStarImageContainer = document.createElement("div");
      fullStarImageContainer['style']['objectFit'] = "Inherit", fullStarImageContainer['style']['height'] = '0', fullStarImageContainer['style']['padding'] = '0', fullStarImageContainer['style']['margin'] = '0', fullStarImageContainer['style']['maxWidth'] = "100%";
      let hoverStarImageContainer = document.createElement("div");
      hoverStarImageContainer['style']['objectFit'] = "Inherit", hoverStarImageContainer['style']['height'] = '0', hoverStarImageContainer['style']['padding'] = '0', hoverStarImageContainer['style']['margin'] = '0', hoverStarImageContainer['style']['maxWidth'] = "100%", emptyStarImage.src = emptyStarImg, fullStarImageContainer.src = fullStarImg, hoverStarImageContainer.src = hoverStarImg, emptyStarImage['style']['width'] = starSize + 'px', fullStarImageContainer['style']['width'] = starSize + 'px', hoverStarImageContainer['style']['width'] = starSize + 'px', star['style']['lineHeight'] = '0', fullStar['appendChild'](fullStarImageContainer), emptyStar['appendChild'](emptyStarImage), hoverStar['appendChild'](hoverStarImageContainer), star['appendChild'](fullStar), star['appendChild'](emptyStar), star['appendChild'](hoverStar), starsContainer['appendChild'](star)
    }
    container['appendChild'](bottomTextElement), updateStars(container, 0, starSize);
    if (databaseURL['indexOf']("firebaseio.com") < 0) {
      container.textContent = databaseURL
    } else {
      const firebaseConfig = {};
      firebaseConfig['databaseURL'] = databaseURL;
      let app = firebase['initializeApp'](firebaseConfig, ratingName + starRatingGeneratorIndex),
        databaseRef = app['database']()['ref']('StarRatingSystem/' + currentUrl + '/' + ratingName);
      databaseRef['on']("value", snapshot => {
        let data = snapshot['val']();
        if (!data) {
          const initialData = {};
          initialData['OO'] = 0, initialData['O0'] = 0, data = initialData
        }
        updateStars(container, data['OO'] * numberOfStars, starSize);
        if (container.contains(loader)) loader.remove();
        starsContainer['onmouseenter'] = function() {
          updateStars(container, data['OO'] * numberOfStars, starSize), topTextElement.textContent = topText
        }, container['querySelectorAll'](".kozyr-SRS-average")['forEach'](averageElement => averageElement.innerHTML = Math.round(data['OO'] * numberOfStars * 100) / 100), container['querySelectorAll'](".kozyr-SRS-votes")['forEach'](votesElement => votesElement.innerHTML = data['O0']), !readonly && container['querySelectorAll']("img")['forEach']((starElement, starIndex) => {
          starElement['onclick'] = function() {
            if (!localStorage['bsrgl_' + ratingName]) {
              var averageRating = (data['OO'] * data['O0'] + (starIndex + 1) / numberOfStars) / (data['O0'] + 1);
              const newData = {};
              newData['OO'] = averageRating, newData['O0'] = data['O0'] + 1, databaseRef['set'](newData), localStorage['bsrgl_' + ratingName] = starIndex + 1, container['querySelectorAll']("img")['forEach'](star => star['style']['cursor'] = "inherit"), showThankYouMessage(thankYouText, container, starIndex + 1), topTextElement.textContent = topText
            } else showThankYouMessage(databaseURL, container, localStorage['bsrgl_' + ratingName])
          }
        })
      })
    }
  }

  function initialize(index) {
    typeof firebase == "object" && typeof firebase['database'] == "object" && typeof firebase['initializeApp'] == 'function' ? initializeRating(index) : setTimeout(function() {
      initialize(index)
    }, 50)
  }
  initialize(starRatingGeneratorIndex)
}(StarRatingGenerator));
