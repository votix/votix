const stringArray = [" / ", "substring", "relative", "left", "starSize", "px)", "position", "Ошибка Firebase. Добавьте атрибут firebaseURL=\"https://YOUR-FIREBASE.firebaseio.com\" к вашему скрипту рейтинга.", "title", "getBoundingClientRect", "https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js", "https://", "function", "none", "textAlign", "Вы уже проголосовали, ваш рейтинг: $userRating$.", "contains", "appendChild", "bottomText", "0 0 0 -", "borderTop", "Ошибка Firebase", "'Comic Sans MS', cursive, sans-serif", "black", "1nhfBNZ", "'Palatino Linotype', 'Book Antiqua', Palatino, serif", "body", "Спасибо за ваш голос", "script[src=\"https://www.gstatic.com/firebasejs/8.1.1/firebase-database.js\"]", "textContent", "100%", "script[src=\"https://cdn.jsdelivr.net/gh/votix/votix/starrating42.js\"]", "transition", "oncontextmenu", "Verdana, Geneva, sans-serif", "Arial, Helvetica, sans-serif", "47143XogIoc", "zIndex", "blockingText", "'Lucida Sans Unicode', 'Lucida Grande', sans-serif", ".kozyr-SRS-average", "opacity", "transparent", "split", "initializeApp", "inline-block", "forEach", "full", "https://1.bp.blogspot.com/-pOr9XGwtSJc/Wsjf8ULOIqI/AAAAAAAAAKE/KBh-LUDIn0YzASKf-t7mQo8UNpdHhr2SgCLcBGAs/s1600/pusta.png", "display", "width", "getElementsByTagName", "Ошибка Firebase. Введите URL-адрес вашего Firebase в атрибут \"firebaseURL\" в вашем скрипте рейтинга.", "30639YMMkMx", "database", "0 0 0 0", "querySelectorAll", "173339trQLKh", "kozyr-SRS-loader", "dawaj 1s linear infinite", "white", "Ошибка Firebase. Неверный URL Firebase", "firebaseio.com", "lineHeight", "firebaseURL", "val", "querySelector", "'Times New Roman', Times, serif", "6px solid #3498db", "\"Lucida Sans Unicode\", \"Lucida Grande\", sans-serif", "remove", "scrollX", "length", "class", "<span class=\"kozyr-SRS-average\">0</span>", "25px", "insertBefore", "1.2", "fullStarImg", "'Arial Black', Gadget, sans-serif", "createElement", "calc(100% - ", "'Trebuchet MS', Helvetica, sans-serif", "hover", "undefined", "round", "Trebuchet", "src", "22055DWlruy", "\"Trebuchet MS\", Helvetica, sans-serif", "Palatino", "'Lucida Console', Monaco, monospace", "offsetWidth", "textColor", "'Courier New', Courier, monospace", "emptyStarImg", "161966UeYhRY", "https://www.gstatic.com/firebasejs/8.1.1/firebase-database.js", "empty", "div", "script", "value", "onclick", "hidden", "ratingName", "Lucida Console", "1px solid #e0e0e0", "align", "preventDefault", "bsrgl_", "object", "set", "head", "onmouseenter", "host", "https://3.bp.blogspot.com/-QSNdWP4Ijx4/Wsjf7QOUZ4I/AAAAAAAAAJ8/F2nReVG5WfA1rLV3dGcAFMsPOnIQck4YwCLcBGAs/s1600/pelna.png", "Arial Black", "Comic Sans", "200px", "fontSize", "Impact", "img", "animation", "1mZwkhr", "9999999", "\"Lucida Console\", Monaco, monospace", "163289RoWWHX", "boxSizing", "wartosc", "padding", "removeChild", "floor", "SRSstar", "borderRadius", "default", "thankYouText", "fontFamily", "other", "cursor", "Inherit", "6px solid #f3f3f3", "Times New Roman", "getAttribute", "parentNode", "height", "Среднее: <b>$average$</b> / $max$ (<b>$votes$</b> голосов)", "setAttribute", "ref", "offsetHeight", "onmouseleave", "topText", "textSize", "Рейтинг:", "maxWidth", "innerHTML", "numberOfStars", "indexOf", "border", "7px", "Tahoma", "inherit", "lastIndexOf", "status", "top", "50%", ".kozyr-SRS-votes", "background", "Verdana", "pointer", "scrollY", "style", "\"Palatino Linotype\", \"Book Antiqua\", Palatino, serif", "Tahoma, Geneva, sans-serif", "absolute", "auto", "right", "replace", "color", "overflow", "@keyframes dawaj {0% {transform: rotate(0deg);} 100% {transform:rotate(360deg);}} .kozyr-SRS-loader ~ div{visibility:hidden;}", "www.", "Impact, Charcoal, sans-serif", "___", "\"Arial Black\", Gadget, sans-serif", "margin", "57794AVuJQd", "2CrxsFw", "center"];

function getString(index) {
  index = index - 263;
  return stringArray[index]
}
const getStringProxy = getString;
(function(array, number) {
  const stringGetter = getStringProxy;
  while (true) {
    try {
      const value = parseInt(stringGetter(285)) + parseInt(stringGetter(414)) * parseInt(stringGetter(316)) + -parseInt(stringGetter(354)) + -parseInt(stringGetter(413)) + -parseInt(stringGetter(324)) * -parseInt(stringGetter(351)) + -parseInt(stringGetter(440)) * parseInt(stringGetter(264)) + parseInt(stringGetter(281));
      if (value === number) break;
      else array.push(array.shift())
    } catch (error) {
      array.push(array.shift())
    }
  }
}(stringArray, 141828), StarRatingGenerator = typeof StarRatingGenerator == getStringProxy(312) ? 0 : StarRatingGenerator + 1, function(starRatingGeneratorIndex) {
  const stringGetter = getStringProxy;
  if (starRatingGeneratorIndex === 0 && !document[stringGetter(294)](stringGetter(444))) {
    let scriptElement = document[stringGetter(308)](stringGetter(328));
    scriptElement[stringGetter(315)] = stringGetter(426), document[stringGetter(340)]['appendChild'](scriptElement), scriptElement['onload'] = function() {
      const stringGetter = getStringProxy;
      let databaseScriptElement = document['createElement'](stringGetter(328));
      databaseScriptElement[stringGetter(315)] = stringGetter(325), document['head']['appendChild'](databaseScriptElement)
    };
    let styleElement = document[stringGetter(308)]('style');
    styleElement[stringGetter(382)] = stringGetter(407), document['head'][stringGetter(433)](styleElement)
  }

  function updateStars(element, rating, starSize) {
    const stringGetter = getStringProxy;
    let stars = element['getElementsByTagName'](stringGetter(360));
    for (let i = 0; i < stars[stringGetter(300)]; i++) {
      if (i <= rating) {
        if (i < Math[stringGetter(359)](rating)) stars[i][stringGetter(294)](stringGetter(275))[stringGetter(398)][stringGetter(278)] = stringGetter(446), stars[i]['querySelector'](stringGetter(326))[stringGetter(398)]['width'] = '0%';
        else {
          let partialStarValue = rating - Math[stringGetter(359)](rating),
            currentStar = element[stringGetter(279)](stringGetter(360))[i],
            width = Math[stringGetter(313)](partialStarValue * starSize);
          currentStar['querySelector'](stringGetter(275))[stringGetter(398)][stringGetter(278)] = width + 'px', currentStar[stringGetter(294)](stringGetter(326))[stringGetter(398)][stringGetter(278)] = starSize - width + 'px', currentStar[stringGetter(294)](stringGetter(326))[stringGetter(294)](stringGetter(349))[stringGetter(398)]['margin'] = stringGetter(435) + width + 'px'
        }
      } else i > rating && (stars[i][stringGetter(294)]('full')[stringGetter(398)][stringGetter(278)] = '0%', stars[i][stringGetter(294)](stringGetter(326))[stringGetter(398)][stringGetter(278)] = stringGetter(446), stars[i][stringGetter(294)](stringGetter(326))[stringGetter(294)](stringGetter(349))[stringGetter(398)][stringGetter(412)] = stringGetter(283));
      stars[i]['querySelector'](stringGetter(311))['style'][stringGetter(278)] = '0%'
    }
  }

  function showThankYouMessage(message, ratingElement, userRating) {
    const stringGetter = getStringProxy;
    let thankYouDiv = document[stringGetter(308)](stringGetter(327));
    thankYouDiv[stringGetter(382)] = message[stringGetter(404)](/\$userRating\$/g, userRating), thankYouDiv[stringGetter(398)][stringGetter(422)] = stringGetter(401), thankYouDiv['style']['background'] = stringGetter(439), thankYouDiv[stringGetter(398)][stringGetter(405)] = stringGetter(288), thankYouDiv[stringGetter(398)]['border'] = stringGetter(334), thankYouDiv[stringGetter(398)][stringGetter(361)] = stringGetter(386), thankYouDiv[stringGetter(398)][stringGetter(357)] = '3px 7px', thankYouDiv[stringGetter(398)][stringGetter(291)] = stringGetter(305), thankYouDiv[stringGetter(398)][stringGetter(430)] = stringGetter(415), thankYouDiv['style'][stringGetter(269)] = '0', thankYouDiv['style'][stringGetter(448)] = 'opacity 1s', thankYouDiv[stringGetter(398)][stringGetter(278)] = stringGetter(346), thankYouDiv[stringGetter(398)][stringGetter(355)] = 'border-box', thankYouDiv[stringGetter(398)][stringGetter(265)] = stringGetter(352), thankYouDiv[stringGetter(398)][stringGetter(364)] = stringGetter(441), document[stringGetter(442)]['appendChild'](thankYouDiv);
    let elementRect = ratingElement[stringGetter(425)]();
    setTimeout(function() {
      const stringGetter = getStringProxy;
      thankYouDiv['style'][stringGetter(269)] = '1';
      if (ratingElement[stringGetter(398)][stringGetter(430)] === 'right') thankYouDiv['style'][stringGetter(419)] = window[stringGetter(299)] + elementRect[stringGetter(419)] + ratingElement[stringGetter(320)] - 200 + 'px';
      else ratingElement[stringGetter(398)][stringGetter(430)] === stringGetter(415) ? thankYouDiv['style'][stringGetter(419)] = window[stringGetter(299)] + elementRect['left'] + ratingElement[stringGetter(320)] / 2 - 100 + 'px' : thankYouDiv['style']['left'] = window[stringGetter(299)] + elementRect[stringGetter(419)] + 'px';
      thankYouDiv[stringGetter(398)][stringGetter(391)] = (elementRect['top'] > thankYouDiv[stringGetter(376)] ? window[stringGetter(397)] + elementRect[stringGetter(391)] - thankYouDiv[stringGetter(376)] : window[stringGetter(397)] + elementRect[stringGetter(391)] + thankYouDiv[stringGetter(376)]) + 'px'
    }, 10), setTimeout(function() {
      const stringGetter = getStringProxy;
      thankYouDiv['style'][stringGetter(269)] = '0', setTimeout(function() {
        const stringGetter = getStringProxy;
        document[stringGetter(442)][stringGetter(358)](thankYouDiv)
      }, 1000)
    }, 3500)
  }

  function initializeRating(index) {
    const stringGetter = getStringProxy;
    let ratingElement = document[stringGetter(284)](stringGetter(447))[index],
      currentUrl = location[stringGetter(342)]['replace'](stringGetter(408), '')['replace'](/\./g, '_')[stringGetter(404)](/\//g, '__');
    if (currentUrl === '') currentUrl = stringGetter(365);
    let ratingName = ratingElement[stringGetter(370)](stringGetter(332));
    if (!ratingName || ratingName === stringGetter(402)) {
      let href = location['href'][stringGetter(271)]('?')[0]['split']('#')[0]['replace'](location['protocol'] + '//', '')[stringGetter(404)](stringGetter(408), '');
      (href[stringGetter(417)](href[stringGetter(300)] - 1) === '/' || href[stringGetter(417)](href[stringGetter(300)] - 1) === '.') && (href = href['substring'](0, href[stringGetter(300)] - 1)), href = href[stringGetter(404)](/\./g, '_')[stringGetter(404)](/\//g, '__')[stringGetter(404)](/\,/g, stringGetter(410))[stringGetter(404)](/\s/g, ''), ratingName = href
    }
    ratingName = ratingName[stringGetter(404)](/\s/g, '_')['replace'](/\#/g, '-')['replace'](/\./g, '-')['replace'](/\@/g, '-')[stringGetter(404)](/\!/g, '-')[stringGetter(404)](/\$/g, '-')[stringGetter(404)](/\%/g, '-')['replace'](/\&/g, '-')[stringGetter(404)](/\(/g, '-')['replace'](/\)/g, '-');
    let emptyStarImg = ratingElement['getAttribute'](stringGetter(323)) ? ratingElement[stringGetter(370)]('emptyStarImg') : stringGetter(276),
      fullStarImg = ratingElement[stringGetter(370)](stringGetter(306)) ? ratingElement[stringGetter(370)](stringGetter(306)) : stringGetter(343),
      hoverStarImg = ratingElement['getAttribute']('hoverStarImg');
    if (hoverStarImg === null || hoverStarImg == '') hoverStarImg = fullStarImg;
    let starSize = ratingElement[stringGetter(370)](stringGetter(420));
    if (!starSize || Number(starSize) < 0 || isNaN(starSize)) starSize = 25;
    starSize = Number(starSize);
    let firebaseURL = ratingElement['getAttribute'](stringGetter(266));
    if (firebaseURL === null) firebaseURL = stringGetter(431);
    let align = ratingElement[stringGetter(370)](stringGetter(335));
    if (align !== stringGetter(403) && align !== stringGetter(419)) align = stringGetter(415);
    let textSize = ratingElement[stringGetter(370)](stringGetter(379));
    if (!textSize || Number(textSize) < 0 || isNaN(textSize)) textSize = 15;
    textSize = Number(textSize);
    let textColor = ratingElement[stringGetter(370)](stringGetter(321)) ? ratingElement[stringGetter(370)](stringGetter(321)) : stringGetter(388),
      fontFamily = ratingElement['getAttribute']('fontFamily');
    if (fontFamily == 'Georgia' || fontFamily == 'Georgia, serif') fontFamily = 'Georgia, serif';
    else {
      if (fontFamily == stringGetter(318) || fontFamily == stringGetter(441)) fontFamily = stringGetter(399);
      else {
        if (fontFamily == stringGetter(369) || fontFamily == stringGetter(295)) fontFamily = '"Times New Roman", Times, serif';
        else {
          if (fontFamily == 'Arial' || fontFamily == stringGetter(263)) fontFamily = stringGetter(263);
          else {
            if (fontFamily == stringGetter(344) || fontFamily == stringGetter(307)) fontFamily = stringGetter(411);
            else {
              if (fontFamily == stringGetter(345) || fontFamily == stringGetter(438)) fontFamily = '"Comic Sans MS", cursive, sans-serif';
              else {
                if (fontFamily == stringGetter(348) || fontFamily == 'Impact, Charcoal, sans-serif') fontFamily = stringGetter(409);
                else {
                  if (fontFamily == 'Lucida Sans' || fontFamily == stringGetter(267)) fontFamily = stringGetter(297);
                  else {
                    if (fontFamily == stringGetter(387) || fontFamily == stringGetter(400)) fontFamily = stringGetter(400);
                    else {
                      if (fontFamily == stringGetter(314) || fontFamily == stringGetter(310)) fontFamily = stringGetter(317);
                      else {
                        if (fontFamily == stringGetter(395) || fontFamily == stringGetter(450)) fontFamily = stringGetter(450);
                        else {
                          if (fontFamily == 'Courier New' || fontFamily == stringGetter(322)) fontFamily = '"Courier New", Courier, monospace';
                          else fontFamily == stringGetter(333) || fontFamily == stringGetter(319) ? fontFamily = stringGetter(353) : fontFamily = stringGetter(367)
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
    let readonly = ratingElement[stringGetter(370)](stringGetter(390)) === 'readonly' ? !![] : false,
      topText = ratingElement[stringGetter(370)](stringGetter(378)) !== null ? ratingElement[stringGetter(370)](stringGetter(378)) : stringGetter(380),
      bottomText = ratingElement[stringGetter(370)](stringGetter(434)) !== null ? ratingElement[stringGetter(370)](stringGetter(434)) : stringGetter(373),
      numberOfStars = Number(ratingElement['getAttribute'](stringGetter(383)));
    if (numberOfStars < 1 || isNaN(numberOfStars)) numberOfStars = 5;
    let thankYouText = ratingElement[stringGetter(370)](stringGetter(363)) !== null ? ratingElement[stringGetter(370)](stringGetter(363)) : stringGetter(443),
      container = document[stringGetter(308)]('div');
    container[stringGetter(374)](stringGetter(332), ratingName), ratingElement[stringGetter(371)][stringGetter(304)](container, ratingElement), container['style'][stringGetter(430)] = align, container[stringGetter(398)][stringGetter(422)] = stringGetter(418), container[stringGetter(449)] = function(event) {
      const stringGetter = getStringProxy;
      return event[stringGetter(336)](), false
    };
    let loader = document[stringGetter(308)](stringGetter(327));
    loader[stringGetter(374)](stringGetter(301), stringGetter(286)), loader[stringGetter(398)][stringGetter(385)] = stringGetter(368), loader[stringGetter(398)]['borderRadius'] = stringGetter(392), loader[stringGetter(398)][stringGetter(436)] = stringGetter(296), loader[stringGetter(398)]['width'] = stringGetter(303), loader[stringGetter(398)][stringGetter(372)] = stringGetter(303), loader['style'][stringGetter(350)] = stringGetter(287);
    if (align === 'center') loader[stringGetter(398)][stringGetter(412)] = stringGetter(402);
    else align === stringGetter(403) && (loader['style']['marginLeft'] = stringGetter(309) + starSize * numberOfStars + stringGetter(421));
    container[stringGetter(433)](loader);
    let topTextElement = document[stringGetter(308)](stringGetter(327)),
      bottomTextElement = document[stringGetter(308)](stringGetter(327));
    bottomText = bottomText[stringGetter(404)](/\$average\$/g, stringGetter(302))[stringGetter(404)](/\$votes\$/g, '<span class=\"kozyr-SRS-votes\">0</span>')[stringGetter(404)](/\$max\$/g, numberOfStars), topTextElement[stringGetter(382)] = topText, topTextElement[stringGetter(398)][stringGetter(347)] = textSize + 'px', topTextElement[stringGetter(398)][stringGetter(291)] = '1.2', topTextElement[stringGetter(398)][stringGetter(364)] = fontFamily, topTextElement[stringGetter(398)][stringGetter(430)] = align, topTextElement['style']['color'] = textColor, container[stringGetter(433)](topTextElement), bottomTextElement[stringGetter(398)]['fontSize'] = textSize + 'px', bottomTextElement[stringGetter(398)]['lineHeight'] = stringGetter(305), bottomTextElement[stringGetter(398)][stringGetter(364)] = fontFamily, bottomTextElement[stringGetter(398)][stringGetter(430)] = align, bottomTextElement['style'][stringGetter(405)] = textColor, bottomTextElement[stringGetter(382)] = bottomText;
    let firebase_URL = ratingElement['getAttribute'](stringGetter(292));
    if (firebase_URL === null) firebase_URL = stringGetter(423);
    else {
      if (firebase_URL == '') firebase_URL = stringGetter(280);
      else {
        if (firebase_URL[stringGetter(384)](stringGetter(427)) !== 0) firebase_URL = stringGetter(289);
        else {
          if (firebase_URL[stringGetter(389)](stringGetter(290)) < 5) firebase_URL = stringGetter(289);
          else firebase_URL[stringGetter(389)]('/') !== firebase_URL['length'] - 1 && (firebase_URL = firebase_URL + '/')
        }
      }
    }
    let starsContainer = document[stringGetter(308)]('div');
    starsContainer[stringGetter(398)][stringGetter(278)] = starSize * numberOfStars + 'px', starsContainer[stringGetter(398)][stringGetter(277)] = stringGetter(273), container[stringGetter(433)](starsContainer);
    for (let i = 1; i <= numberOfStars; i++) {
      let star = document[stringGetter(308)](stringGetter(360));
      star[stringGetter(398)][stringGetter(277)] = stringGetter(273), star[stringGetter(398)]['width'] = starSize + 'px', star['style'][stringGetter(366)] = !localStorage[stringGetter(337) + ratingName] && !readonly ? stringGetter(396) : stringGetter(362);
      !readonly && (star[stringGetter(341)] = function() {
        const stringGetter = getStringProxy;
        if (!localStorage[stringGetter(337) + ratingName]) {
          let stars = container[stringGetter(279)](stringGetter(360));
          for (let j = 0; j < stars[stringGetter(300)]; j++) {
            j < i ? (stars[j][stringGetter(294)](stringGetter(275))['style'][stringGetter(278)] = '0%', stars[j][stringGetter(294)](stringGetter(326))[stringGetter(398)][stringGetter(278)] = '0%', stars[j][stringGetter(294)](stringGetter(311))['style'][stringGetter(278)] = stringGetter(446)) : (stars[j][stringGetter(294)](stringGetter(275))['style'][stringGetter(278)] = '0%', stars[j][stringGetter(294)](stringGetter(311))['style'][stringGetter(278)] = '0%', stars[j][stringGetter(294)]('empty')[stringGetter(398)][stringGetter(278)] = stringGetter(446), stars[j][stringGetter(294)]('empty')[stringGetter(294)]('img')[stringGetter(398)][stringGetter(412)] = '0 0 0 0')
          }
          if (topText != '') topTextElement[stringGetter(382)] = i + stringGetter(416) + numberOfStars
        } else container[stringGetter(424)] = firebaseURL[stringGetter(404)](/\$userRating\$/g, localStorage[stringGetter(337) + ratingName]), container[stringGetter(398)][stringGetter(366)] = stringGetter(362)
      });
      star[stringGetter(374)](stringGetter(356), i);
      let fullStar = document[stringGetter(308)](stringGetter(275));
      fullStar[stringGetter(398)][stringGetter(277)] = 'inline-block', fullStar[stringGetter(398)][stringGetter(406)] = stringGetter(331);
      let emptyStar = document[stringGetter(308)](stringGetter(326));
      emptyStar[stringGetter(398)][stringGetter(277)] = stringGetter(273), emptyStar[stringGetter(398)]['overflow'] = stringGetter(331);
      let hoverStar = document[stringGetter(308)](stringGetter(311));
      hoverStar[stringGetter(398)][stringGetter(277)] = stringGetter(273), hoverStar[stringGetter(398)][stringGetter(406)] = stringGetter(331);
      let emptyStarImage = document['createElement']('img');
      emptyStarImage['style'][stringGetter(394)] = stringGetter(270), emptyStarImage[stringGetter(398)][stringGetter(385)] = '0', emptyStarImage[stringGetter(398)][stringGetter(357)] = '0', emptyStarImage[stringGetter(398)][stringGetter(412)] = '0', emptyStarImage['style']['maxWidth'] = stringGetter(429);
      let fullStarImageContainer = document[stringGetter(308)](stringGetter(349));
      fullStarImageContainer[stringGetter(398)][stringGetter(394)] = stringGetter(270), fullStarImageContainer['style'][stringGetter(385)] = '0', fullStarImageContainer[stringGetter(398)]['padding'] = '0', fullStarImageContainer[stringGetter(398)][stringGetter(412)] = '0', fullStarImageContainer[stringGetter(398)][stringGetter(381)] = stringGetter(429);
      let hoverStarImageContainer = document[stringGetter(308)](stringGetter(349));
      hoverStarImageContainer[stringGetter(398)][stringGetter(394)] = stringGetter(270), hoverStarImageContainer[stringGetter(398)][stringGetter(385)] = '0', hoverStarImageContainer[stringGetter(398)]['padding'] = '0', hoverStarImageContainer[stringGetter(398)]['margin'] = '0', hoverStarImageContainer[stringGetter(398)][stringGetter(381)] = stringGetter(429), emptyStarImage[stringGetter(315)] = emptyStarImg, fullStarImageContainer[stringGetter(315)] = fullStarImg, hoverStarImageContainer[stringGetter(315)] = hoverStarImg, emptyStarImage['style']['width'] = starSize + 'px', fullStarImageContainer['style'][stringGetter(278)] = starSize + 'px', hoverStarImageContainer['style'][stringGetter(278)] = starSize + 'px', star[stringGetter(398)][stringGetter(291)] = '0', fullStar['appendChild'](fullStarImageContainer), emptyStar['appendChild'](emptyStarImage), hoverStar['appendChild'](hoverStarImageContainer), star[stringGetter(433)](fullStar), star[stringGetter(433)](emptyStar), star['appendChild'](hoverStar), starsContainer[stringGetter(433)](star)
    }
    container[stringGetter(433)](bottomTextElement), updateStars(container, 0, starSize);
    if (firebase_URL[stringGetter(384)](stringGetter(437)) < 0) {
      const firebaseConfig = {};
      firebaseConfig['databaseURL'] = firebase_URL;
      let app = firebase['initializeApp'](firebaseConfig, ratingName + starRatingGeneratorIndex),
        databaseRef = app[stringGetter(282)]()[stringGetter(375)]('StarRatingSystem/' + currentUrl + '/' + ratingName);
      databaseRef['on'](stringGetter(329), snapshot => {
        const stringGetter = getStringProxy;
        let data = snapshot[stringGetter(293)]();
        if (!data) {
          const initialData = {};
          initialData['OO'] = 0, initialData['O0'] = 0, data = initialData
        }
        updateStars(container, data['OO'] * numberOfStars, starSize);
        if (container[stringGetter(432)](loader)) loader[stringGetter(298)]();
        starsContainer[stringGetter(377)] = function() {
          const stringGetter = getStringProxy;
          updateStars(container, data['OO'] * numberOfStars, starSize), topTextElement[stringGetter(382)] = topText
        }, container[stringGetter(284)](stringGetter(268))['forEach'](averageElement => averageElement[stringGetter(445)] = Math[stringGetter(313)](data['OO'] * numberOfStars * 100) / 100), container[stringGetter(284)](stringGetter(393))[stringGetter(274)](votesElement => votesElement[stringGetter(445)] = data['O0']), !readonly && container['querySelectorAll'](stringGetter(360))[stringGetter(274)]((starElement, starIndex) => {
          const stringGetter = getStringProxy;
          starElement[stringGetter(330)] = function() {
            const stringGetter = getStringProxy;
            if (!localStorage[stringGetter(337) + ratingName]) {
              var averageRating = (data['OO'] * data['O0'] + (starIndex + 1) / numberOfStars) / (data['O0'] + 1);
              const newData = {};
              newData['OO'] = averageRating, newData['O0'] = data['O0'] + 1, databaseRef[stringGetter(339)](newData), localStorage[stringGetter(337) + ratingName] = starIndex + 1, container[stringGetter(284)](stringGetter(360))['forEach'](star => star[stringGetter(398)][stringGetter(366)] = stringGetter(362)), showThankYouMessage(thankYouText, container, starIndex + 1), topTextElement[stringGetter(382)] = topText
            } else showThankYouMessage(firebaseURL, container, localStorage[stringGetter(337) + ratingName])
          }
        })
      })
    } else container[stringGetter(382)] = firebase_URL
  }

  function initialize(index) {
    const stringGetter = getStringProxy;
    typeof firebase == stringGetter(338) && typeof firebase[stringGetter(282)] == stringGetter(428) && typeof firebase[stringGetter(272)] == 'function' ? initializeRating(index) : setTimeout(function() {
      initialize(index)
    }, 50)
  }
  initialize(starRatingGeneratorIndex)
}(StarRatingGenerator));
