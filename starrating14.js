(function () {
  const strings = [
    ' / ',
    'substring',
    'relative',
    'left',
    'starSize',
    'px)',
    'position',
    'Firebase error. Add attribute firebaseURL="https://YOUR-FIREBASE.firebaseio.com" to your rating script.',
    'title',
    'getBoundingClientRect',
    'https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js',
    'https://',
    'function',
    'none',
    'textAlign',
    'You have already cast your vote, your rating is $userRating$.',
    'contains',
    'appendChild',
    'bottomText',
    '0 0 0 -',
    'borderTop',
    'Firebase error',
    "'Comic Sans MS', cursive, sans-serif",
    'black',
    '1nhfBNZ',
    "'Palatino Linotype', 'Book Antiqua', Palatino, serif",
    'body',
    'Thanks for voting',
    'script[src="https://www.gstatic.com/firebasejs/8.1.1/firebase-database.js"]',
    'textContent',
    '100%',
    'script[src="https://cdn.jsdelivr.net/gh/votix/votix/starrating14.js"]',
    'transition',
    'oncontextmenu',
    'Verdana, Geneva, sans-serif',
    'Arial, Helvetica, sans-serif',
    '47143XogIoc',
    'zIndex',
    'blockingText',
    "'Lucida Sans Unicode', 'Lucida Grande', sans-serif",
    '.kozyr-SRS-average',
    'opacity',
    'transparent',
    'split',
    'initializeApp',
    'inline-block',
    'forEach',
    'full',
    'https://1.bp.blogspot.com/-pOr9XGwtSJc/Wsjf8ULOIqI/AAAAAAAAAKE/KBh-LUDIn0YzASKf-t7mQo8UNpdHhr2SgCLcBGAs/s1600/pusta.png',
    'display',
    'width',
    'getElementsByTagName',
    'Firebase error. Enter the URL adress of your Firebase to "firebaseURL" attribute in your rating script.',
    '30639YMMkMx',
    'database',
    '0 0 0 0',
    'querySelectorAll',
    '173339trQLKh',
    'kozyr-SRS-loader',
    'dawaj 1s linear infinite',
    'white',
    'Firebase error. Invalid Fierabse URL',
    'firebaseio.com',
    'lineHeight',
    'firebaseURL',
    'val',
    'querySelector',
    "'Times New Roman', Times, serif",
    '6px solid #3498db',
    '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
    'remove',
    'scrollX',
    'length',
    'class',
    '<span class="kozyr-SRS-average">0</span>',
    '25px',
    'insertBefore',
    '1.2',
    'fullStarImg',
    "'Arial Black', Gadget, sans-serif",
    'createElement',
    'calc(100% - ',
    "'Trebuchet MS', Helvetica, sans-serif",
    'hover',
    'undefined',
    'round',
    'Trebuchet',
    'src',
    '22055DWlruy',
    '"Trebuchet MS", Helvetica, sans-serif',
    'Palatino',
    "'Lucida Console', Monaco, monospace",
    'offsetWidth',
    'textColor',
    "'Courier New', Courier, monospace",
    'emptyStarImg',
    '161966UeYhRY',
    'https://www.gstatic.com/firebasejs/8.1.1/firebase-database.js',
    'empty',
    'div',
    'script',
    'value',
    'onclick',
    'hidden',
    'ratingName',
    'Lucida Console',
    '1px solid #e0e0e0',
    'align',
    'preventDefault',
    'bsrgl_',
    'object',
    'set',
    'head',
    'onmouseenter',
    'host',
    'https://3.bp.blogspot.com/-QSNdWP4Ijx4/Wsjf7QOUZ4I/AAAAAAAAAJ8/F2nReVG5WfA1rLV3dGcAFMsPOnIQck4YwCLcBGAs/s1600/pelna.png',
    'Arial Black',
    'Comic Sans',
    '200px',
    'fontSize',
    'Impact',
    'img',
    'animation',
    '1mZwkhr',
    '9999999',
    '"Lucida Console", Monaco, monospace',
    '163289RoWWHX',
    'boxSizing',
    'wartosc',
    'padding',
    'removeChild',
    'floor',
    'SRSstar',
    'borderRadius',
    'default',
    'thankYouText',
    'fontFamily',
    'other',
    'cursor',
    'Inherit',
    '6px solid #f3f3f3',
    'Times New Roman',
    'getAttribute',
    'parentNode',
    'height',
    'Average: <b>$average$</b> / $max$ (<b>$votes$</b> votes)',
    'setAttribute',
    'ref',
    'offsetHeight',
    'onmouseleave',
    'topText',
    'textSize',
    'Rating:',
    'maxWidth',
    'innerHTML',
    'numberOfStars',
    'indexOf',
    'border',
    '7px',
    'Tahoma',
    'inherit',
    'lastIndexOf',
    'status',
    'top',
    '50%',
    '.kozyr-SRS-votes',
    'background',
    'Verdana',
    'pointer',
    'scrollY',
    'style',
    '"Palatino Linotype", "Book Antiqua", Palatino, serif',
    'Tahoma, Geneva, sans-serif',
    'absolute',
    'auto',
    'right',
    'replace',
    'color',
    'overflow',
    '@keyframes dawaj {0% {transform: rotate(0deg);} 100% {transform:rotate(360deg);}} .kozyr-SRS-loader ~ div{visibility:hidden;}',
    'www.',
    'Impact, Charcoal, sans-serif',
    '___',
    '"Arial Black", Gadget, sans-serif',
    'margin',
    '57794AVuJQd',
    '2CrxsFw',
    'center',
  ];

  const getString = (index) => {
    return strings[index - 0x107];
  };

  let StarRatingGenerator = window.StarRatingGenerator || 0;
  StarRatingGenerator++;


  (function (generatorIndex) {
    if (generatorIndex === 0 && !document.querySelector(getString(0x1bc))) {
      let firebaseAppScript = document.createElement(getString(0x148));
      firebaseAppScript.src = getString(0x1aa);
      document.head.appendChild(firebaseAppScript);

      firebaseAppScript.onload = function () {
        let firebaseDatabaseScript = document.createElement(getString(0x148));
        firebaseDatabaseScript.src = getString(0x145);
        document.head.appendChild(firebaseDatabaseScript);
      };

      let style = document.createElement('style');
      style.textContent = getString(0x197);
      document.head.appendChild(style);
    }

    function updateStars(ratingContainer, ratingValue, starWidth) {
      if (!ratingContainer) return;

      let stars = ratingContainer.getElementsByTagName('img');

      for (let i = 0; i < stars.length; i++) {
        if (i <= ratingValue) {
          if (i < Math.floor(ratingValue)) {
            if (stars[i].querySelector('.full')) stars[i].querySelector('.full').style.width = '100%';
            if (stars[i].querySelector('.empty')) stars[i].querySelector('.empty').style.width = '0%';
            if (stars[i].querySelector('.empty img')) stars[i].querySelector('.empty img').style.margin = '0 0 0 0px';
          } else {
            let partialStarValue = ratingValue - Math.floor(ratingValue);
            let filledWidth = Math.floor(partialStarValue * starWidth);

            if (stars[i].querySelector('.full')) stars[i].querySelector('.full').style.width = filledWidth + 'px';
            if (stars[i].querySelector('.empty')) stars[i].querySelector('.empty').style.width = starWidth - filledWidth + 'px';
            if (stars[i].querySelector('.empty img')) stars[i].querySelector('.empty img').style.margin = '0 0 0 ' + filledWidth + 'px';
          }
        } else {
          if (stars[i].querySelector('.full')) stars[i].querySelector('.full').style.width = '0%';
          if (stars[i].querySelector('.empty')) stars[i].querySelector('.empty').style.width = '100%';
          if (stars[i].querySelector('.empty img')) stars[i].querySelector('.empty img').style.margin = '0 0 0 0px';
        }
        if (stars[i].querySelector('.SRSstar')) stars[i].querySelector('.SRSstar').style.width = '0%';
      }
    }

    function showThankYouMessage(message, ratingContainer, userRating) {
      const thankYouElement = document.createElement('div');
      thankYouElement.textContent = message.replace(/\$userRating\$/g, userRating);
      thankYouElement.style.textAlign = 'center';
      thankYouElement.style.background = 'white';
      thankYouElement.style.position = 'absolute';
      thankYouElement.style.border = '6px solid #3498db';
      thankYouElement.style.borderRadius = '25px';
      thankYouElement.style.padding = '3px 7px';
      thankYouElement.style.zIndex = '9999999';
      thankYouElement.style.cursor = 'Inherit';
      thankYouElement.style.opacity = '0';
      thankYouElement.style.transition = 'opacity 1s';
      thankYouElement.style.boxSizing = 'border-box';
      thankYouElement.style.maxWidth = '200px';
      thankYouElement.style.fontFamily = '"Lucida Console", Monaco, monospace';
      thankYouElement.style.display = 'none';

      document.body.appendChild(thankYouElement);

      const containerRect = ratingContainer.getBoundingClientRect();

      setTimeout(() => {
        thankYouElement.style.opacity = '1';
        if (ratingContainer.style.position === 'right') {
          thankYouElement.style.right = window.scrollX + containerRect.right + ratingContainer.offsetWidth - 200 + 'px';
        } else if (ratingContainer.style.position === 'center') {
          thankYouElement.style.left = window.scrollX + containerRect.left + ratingContainer.offsetWidth / 2 - 100 + 'px';
        } else {
          thankYouElement.style.left = window.scrollX + containerRect.left + 'px';
        }

        thankYouElement.style.top =
          containerRect.top > thankYouElement.offsetHeight
            ? window.scrollY + containerRect.top - thankYouElement.offsetHeight + 'px'
            : window.scrollY + containerRect.top + thankYouElement.offsetHeight + 'px';
      }, 10);

      setTimeout(() => {
        thankYouElement.style.opacity = '0';
        setTimeout(() => {
          document.body.removeChild(thankYouElement);
        }, 1000);
      }, 3500);
    }

    function initializeRating(ratingElementIndex) {
      const ratingElement = document.getElementsByClassName('bsrgl_')[ratingElementIndex];

       if (!ratingElement) {
            console.warn('No rating element found with index:', ratingElementIndex);
            return;
        }

      let pageURL = location.host.replace('www.', '').replace(/\./g, '_').replace(/\//g, '__');

      if (pageURL === '') {
        pageURL = '___';
      }

      let ratingName = ratingElement.getAttribute('ratingName');

      if (!ratingName || ratingName === undefined) {
        const tempUrl = location.href.split('?')[0].split('#')[0].replace(location.protocol + '//', '').replace('/', '');

        ratingName = tempUrl;
        if (tempUrl.lastIndexOf('/') === tempUrl.length - 1 || tempUrl.lastIndexOf('.') === tempUrl.length - 1) {
          ratingName = tempUrl.substring(0, tempUrl.length - 1);
        }

        ratingName = ratingName.replace(/\./g, '_').replace(/\//g, '__').replace(/\,/g, '___').replace(/\s/g, '');
      }

      ratingName = ratingName
        .replace(/\s/g, '_')
        .replace(/\#/g, '-')
        .replace(/\./g, '-')
        .replace(/\@/g, '-')
        .replace(/\!/g, '-')
        .replace(/\$/g, '-')
        .replace(/\%/g, '-')
        .replace(/\&/g, '-')
        .replace(/\(/g, '-')
        .replace(/\)/g, '-');

      const emptyStarImage = ratingElement.getAttribute('emptyStarImg') || 'https://1.bp.blogspot.com/-pOr9XGwtSJc/Wsjf8ULOIqI/AAAAAAAAAKE/KBh-LUDIn0YzASKf-t7mQo8UNpdHhr2SgCLcBGAs/s1600/pusta.png';
      const fullStarImage = ratingElement.getAttribute('fullStarImg') || 'https://3.bp.blogspot.com/-QSNdWP4Ijx4/Wsjf7QOUZ4I/AAAAAAAAAJ8/F2nReVG5WfA1rLV3dGcAFMsPOnIQck4YwCLcBGAs/s1600/pelna.png';
      let hoverStarImage = ratingElement.getAttribute('hoverStarImg');

      if (hoverStarImage === null || hoverStarImage === '') {
        hoverStarImage = fullStarImage;
      }

      let starSize = ratingElement.getAttribute('starSize');
      if (!starSize || Number(starSize) < 0 || isNaN(starSize)) {
        starSize = 25;
      }
      starSize = Number(starSize);

      let ratingPosition = ratingElement.getAttribute('align');
      if (ratingPosition !== 'left' && ratingPosition !== 'right') {
        ratingPosition = 'center';
      }

      let textSize = ratingElement.getAttribute('textSize');
      if (!textSize || Number(textSize) < 0 || isNaN(textSize)) {
        textSize = 15;
      }
      textSize = Number(textSize);

      let textColor = ratingElement.getAttribute('textColor') ? ratingElement.getAttribute('textColor') : 'black';
      let fontFamily = ratingElement.getAttribute('fontFamily');

      if (fontFamily == 'Georgia' || fontFamily == 'Georgia,serif') fontFamily = 'Georgia,serif';
      else {
        if (fontFamily == 'Times New Roman' || fontFamily == "'Times New Roman', Times, serif")
          fontFamily = '"Times New Roman",Times,serif';
        else {
          if (fontFamily == 'Arial' || fontFamily == 'Arial, Helvetica, sans-serif')
            fontFamily = 'Arial, Helvetica, sans-serif';
          else {
            if (fontFamily == 'Comic Sans' || fontFamily == "'Comic Sans MS', cursive, sans-serif")
              fontFamily = "'Comic Sans MS',cursive,sans-serif";
            else {
              if (fontFamily == 'Impact' || fontFamily == 'Impact,Charcoal,sans-serif') fontFamily = 'Impact, Charcoal, sans-serif';
              else {
                if (fontFamily == 'Lucida Sans' || fontFamily == "'Lucida Sans Unicode', 'Lucida Grande', sans-serif")
                  fontFamily = "'Lucida Sans Unicode', 'Lucida Grande', sans-serif";
                else {
                  if (fontFamily == 'Trebuchet' || fontFamily == "'Trebuchet MS', Helvetica, sans-serif")
                    fontFamily = "'Trebuchet MS', Helvetica, sans-serif";
                  else {
                    if (fontFamily == 'Verdana' || fontFamily == 'Verdana, Geneva, sans-serif')
                      fontFamily = 'Verdana, Geneva, sans-serif';
                    else {
                      if (fontFamily == 'Palatino' || fontFamily == "'Palatino Linotype', 'Book Antiqua', Palatino, serif")
                        fontFamily = "'Palatino Linotype', 'Book Antiqua', Palatino, serif";
                      else {
                        if (fontFamily == 'Lucida Console' || fontFamily == "'Lucida Console', Monaco, monospace")
                          fontFamily = '"Lucida Console",Monaco,monospace';
                        else {
                          if (fontFamily == 'Courier New' || fontFamily == "'Courier New', Courier, monospace")
                            fontFamily = '"Courier New",Courier,monospace';
                          else if (fontFamily == 'Tahoma' || fontFamily == 'Tahoma, Geneva, sans-serif')
                            fontFamily = 'Tahoma, Geneva, sans-serif';
                          else fontFamily = 'Arial, Helvetica, sans-serif';
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

      const isReadOnly = ratingElement.getAttribute('readonly') === 'readonly' ? true : false;
      const topText = ratingElement.getAttribute('topText') !== null ? ratingElement.getAttribute('topText') : 'Rating:';
      const bottomText =
        ratingElement.getAttribute('bottomText') !== null
          ? ratingElement.getAttribute('bottomText')
          : 'Average: <b>$average$</b> / $max$ (<b>$votes$</b> votes)';
      let numberOfStars = Number(ratingElement.getAttribute('numberOfStars'));

      if (numberOfStars < 1 || isNaN(numberOfStars)) {
        numberOfStars = 5;
      }

      const thankYouText = ratingElement.getAttribute('thankYouText') !== null ? ratingElement.getAttribute('thankYouText') : 'Thanks for voting';

      const ratingContainer = document.createElement('div');
      ratingContainer.setAttribute('ratingName', ratingName);
      ratingElement.parentNode.insertBefore(ratingContainer, ratingElement);
      ratingContainer.style.position = ratingPosition;
      ratingContainer.style.textAlign = 'center';

      ratingContainer.oncontextmenu = function (event) {
        event.preventDefault();
        return false;
      };

      const loader = document.createElement('div');
      loader.setAttribute('class', 'kozyr-SRS-loader');
      loader.style.borderTop = '6px solid #f3f3f3';
      loader.style.borderRadius = '50%';
      loader.style.border = '6px solid #3498db';
      loader.style.width = '25px';
      loader.style.height = '25px';
      loader.style.animation = 'dawaj 1s linear infinite';
      loader.style.marginLeft = 'auto';
      loader.style.marginRight = 'auto';
      loader.style.display = 'block';

      if (ratingPosition === 'center') {
        loader.style.marginLeft = 'auto';
        loader.style.marginRight = 'auto';
      } else if (ratingPosition === 'right') {
        loader.style.marginLeft = starSize * numberOfStars + 'px';
      }

      ratingContainer.appendChild(loader);

      const topTextElement = document.createElement('div');
      const bottomTextElement = document.createElement('div');

      bottomTextElement.style.fontSize = textSize + 'px';
      bottomTextElement.style.lineHeight = '1.2';
      bottomTextElement.style.fontFamily = fontFamily;
      bottomTextElement.style.textAlign = ratingPosition;
      bottomTextElement.style.color = textColor;
      bottomTextElement.textContent = bottomText;

      let firebaseURL = ratingElement.getAttribute('firebaseURL');

      if (firebaseURL === null) {
        firebaseURL = 'default';
      } else {
        if (firebaseURL === '') {
          firebaseURL = 'none';
        } else {
          if (firebaseURL.indexOf('firebaseio.com') !== 0) {
            firebaseURL = 'Firebase error';
          } else {
            if (firebaseURL.lastIndexOf('/') < firebaseURL.length - 5) firebaseURL = firebaseURL + '/';
          }
        }
      }

      const starsContainer = document.createElement('div');
      starsContainer.style.width = starSize * numberOfStars + 'px';
      starsContainer.style.display = 'inline-block';
      ratingContainer.appendChild(starsContainer);

      for (let i = 1; i <= numberOfStars; i++) {
        const starElement = document.createElement('img');
        starElement.style.cursor = !localStorage['SRSvalue' + ratingName] && !isReadOnly ? 'pointer' : 'Inherit';

        starElement.setAttribute('wartosc', i);

        starElement.onmouseenter = function () {
          if (!localStorage['SRSvalue' + ratingName]) {
            let stars = ratingContainer.getElementsByTagName('img');

            for (let j = 0; j < stars.length; j++) {
              j < i
                ? ((stars[j].querySelector('.full').style.width = '100%'),
                  (stars[j].querySelector('.empty').style.width = '0%'),
                  (stars[j].querySelector('.empty img').style.margin = '0 0 0 0px'))
                : ((stars[j].querySelector('.full').style.width = '0%'),
                  (stars[j].querySelector('.empty').style.width = '100%'),
                  (stars[j].querySelector('.empty img').style.margin = '0 0 0 0px')),
                (stars[j].querySelector('.SRSstar').style.width = '0%');
            }

            if (topText != '') bottomTextElement.textContent = i + '/' + numberOfStars;
          } else {
            ratingContainer.textContent = firebaseURL.replace(/\$userRating\$/g, localStorage['SRSvalue' + ratingName]);
            ratingContainer.style.cursor = 'Inherit';
          }
        };

        starElement.setAttribute('index', i);

        const fullStar = document.createElement('div');
        fullStar.style.display = 'inline-block';
        fullStar.style.position = 'absolute';
        fullStar.style.overflow = 'hidden';

        const emptyStar = document.createElement('div');
        emptyStar.style.display = 'inline-block';
        emptyStar.style.position = 'absolute';
        emptyStar.style.overflow = 'hidden';

        const srsStar = document.createElement('div');
        srsStar.style.position = 'absolute';
        srsStar.style.zIndex = '9999999';
        srsStar.style.top = '50%';

        let emptyStarImageElement = document.createElement('img');
        emptyStarImageElement.style.zIndex = '9999999';
        emptyStarImageElement.style.border = '0';
        emptyStarImageElement.style.padding = '0';
        emptyStarImageElement.style.margin = '0';
        emptyStarImageElement.style.maxWidth = '100%';

        let fullStarImageElement = document.createElement('img');
        fullStarImageElement.style.zIndex = '9999999';
        fullStarImageElement.style.border = '0';
        fullStarImageElement.style.padding = '0';
        fullStarImageElement.style.margin = '0';
        fullStarImageElement.style.maxWidth = '100%';

        let hoverStarImageElement = document.createElement('img');
        hoverStarImageElement.style.zIndex = '9999999';
        hoverStarImageElement.style.border = '0';
        hoverStarImageElement.style.padding = '0';
        hoverStarImageElement.style.margin = '0';
        hoverStarImageElement.style.maxWidth = '100%';

        emptyStarImageElement.src = emptyStarImage;
        fullStarImageElement.src = fullStarImage;
        hoverStarImageElement.src = hoverStarImage;
        fullStarImageElement.style.width = starSize + 'px';
        hoverStarImageElement.style.width = starSize + 'px';
        starElement.style.cursor = !localStorage['SRSvalue' + ratingName] && !isReadOnly ? 'pointer' : 'Inherit';

        starElement.setAttribute('index', i);

        starsContainer.appendChild(starElement);
      }

      ratingContainer.appendChild(bottomTextElement);
      updateStars(ratingContainer, 0, starSize);

      if (firebaseURL.indexOf('firebaseio.com') < 0) {
        const config = {};
        config.databaseURL = firebaseURL;

        let firebaseApp = firebase.initializeApp(config, ratingName + generatorIndex);
        let ratingRef = firebaseApp.database().ref('StarRatingSystem/' + pageURL + '/' + ratingName);

        ratingRef.on('value', (snapshot) => {
          let data = snapshot.val();

          if (!data) {
            data = {
              OO: 0,
              O0: 0,
            };
          }

          updateStars(ratingContainer, data.OO * numberOfStars, starSize);

          if (ratingContainer.contains(loader)) loader.remove();

          starsContainer.onmouseleave = function () {
            updateStars(ratingContainer, data.OO * numberOfStars, starSize);
            bottomTextElement.textContent = topText;
          };

          ratingContainer.querySelectorAll('.kozyr-SRS-average').forEach((element) => (element.textContent = Math.floor(data.OO * numberOfStars * 100) / 100));
          ratingContainer.querySelectorAll('.kozyr-SRS-votes').forEach((element) => (element.textContent = data.O0));

          if (!isReadOnly)
            ratingContainer.querySelectorAll('img').forEach((star, starIndex) => {
              star.onclick = function () {
                if (!localStorage['SRSvalue' + ratingName]) {
                  var newAverage = (data.OO * data.O0 + (starIndex + 1) / numberOfStars) / (data.O0 + 1);
                  const newData = {};
                  newData.OO = newAverage;
                  newData.O0 = data.O0 + 1;
                  ratingRef.set(newData);
                  localStorage['SRSvalue' + ratingName] = starIndex + 1;
                  ratingContainer.querySelectorAll('img').forEach((s) => (s.style.cursor = 'Inherit'));
                  showThankYouMessage(thankYouText, ratingContainer, starIndex + 1);
                  bottomTextElement.textContent = topText;
                } else showThankYouMessage(firebaseURL, ratingContainer, localStorage['SRSvalue' + ratingName]);
              };
            });
        });
      } else {
        ratingContainer.textContent = firebaseURL;
      }
    }

    function tryInitializeRating(index) {
      typeof firebase !== 'undefined' &&
      typeof firebase.initializeApp === 'function' &&
      typeof firebase.database === 'function'
        ? initializeRating(index)
        : setTimeout(function () {
            tryInitializeRating(index);
          }, 50);
    }

    try {
        const ratingElements = document.getElementsByClassName('bsrgl_');
        if (ratingElements && ratingElements.length > 0) {
            tryInitializeRating(generatorIndex); // Use generatorIndex to initialise the first rating element
        }
    } catch (error) {
        console.error("Error during initialization:", error);
    }

  })(StarRatingGenerator);
})();
