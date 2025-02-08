// Firebase configuration and initialization
let StarRatingGenerator = 0; // Initialize StarRatingGenerator to 0

function initializeStarRating(generatorIndex) {
    // Load Firebase scripts if not already loaded
    if (generatorIndex === 0 && !document.querySelector('script[src="https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js"]')) {
        // Load Firebase app script
        let firebaseScript = document.createElement('script');
        firebaseScript.src = 'https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js';
        document.head.appendChild(firebaseScript);

        // Load Firebase database script after app script loads
        firebaseScript.onload = function() {
            let databaseScript = document.createElement('script');
            databaseScript.src = 'https://www.gstatic.com/firebasejs/8.1.1/firebase-database.js';
            document.head.appendChild(databaseScript);
        };

        // Add loader animation styles
        let styleElement = document.createElement('style');
        styleElement.textContent = '@keyframes dawaj {0% {transform: rotate(0deg);} 100% {transform:rotate(360deg);}} .kozyr-SRS-loader ~ div{visibility:hidden;}';
        document.head.appendChild(styleElement);
    }

    // Helper function to update star display
    function updateStars(element, rating, starSize) {
        let stars = element.getElementsByTagName('div');
        for (let i = 0; i < stars.length; i++) {
            if (i <= rating) {
                if (i < Math.floor(rating)) {
                    stars[i].querySelector('full').style.width = '100%';
                    stars[i].querySelector('empty').style.width = '0%';
                } else {
                    let partialValue = rating - Math.floor(rating);
                    let currentStar = element.getElementsByTagName('div')[i];
                    let width = Math.round(partialValue * starSize);
                    currentStar.querySelector('full').style.width = width + 'px';
                    currentStar.querySelector('empty').style.width = (starSize - width) + 'px';
                    currentStar.querySelector('empty').querySelector('img').style.margin = '0 0 0 -' + width + 'px';
                }
            } else {
                stars[i].querySelector('full').style.width = '0%';
                stars[i].querySelector('empty').style.width = '100%';
                stars[i].querySelector('empty').querySelector('img').style.margin = '0 0 0 0';
            }
            stars[i].querySelector('hover').style.width = '0%';
        }
    }

    // Helper function to show thank you message
    function showThankYouMessage(message, ratingElement, userRating) {
        let thankYouDiv = document.createElement('div');
        thankYouDiv.textContent = message.replace(/\$userRating\$/g, userRating);

        // Style the thank you message
        Object.assign(thankYouDiv.style, {
            position: 'absolute',
            background: 'white',
            color: 'black',
            border: '1px solid #e0e0e0',
            borderRadius: '3px',
            padding: '3px 7px',
            lineHeight: '1.2',
            zIndex: '9999999',
            opacity: '0',
            transition: 'opacity 1s',
            width: '200px',
            boxSizing: 'border-box',
            textAlign: 'center',
            cursor: 'inherit'
        });

        document.body.appendChild(thankYouDiv);
        let elementRect = ratingElement.getBoundingClientRect();

        setTimeout(() => {
            thankYouDiv.style.opacity = '1';

            // Position the message based on rating element alignment
            if (ratingElement.style.textAlign === 'right') {
                thankYouDiv.style.left = (window.scrollX + elementRect.left + ratingElement.offsetWidth - 200) + 'px';
            } else if (ratingElement.style.textAlign === 'center') {
                thankYouDiv.style.left = (window.scrollX + elementRect.left + ratingElement.offsetWidth / 2 - 100) + 'px';
            } else {
                thankYouDiv.style.left = (window.scrollX + elementRect.left) + 'px';
            }

            // Position vertically
            thankYouDiv.style.top = (elementRect.top > thankYouDiv.offsetHeight ?
                window.scrollY + elementRect.top - thankYouDiv.offsetHeight :
                window.scrollY + elementRect.top + thankYouDiv.offsetHeight) + 'px';
        }, 10);

        // Remove message after delay
        setTimeout(() => {
            thankYouDiv.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(thankYouDiv);
            }, 1000);
        }, 3500);
    }

    // Main rating initialization function
    function initializeRating(index) {
        let ratingElement = document.querySelectorAll('.kozyr-SRS-average')[index];
        let currentUrl = location.host.replace('www.', '').replace(/\./g, '_').replace(/\//g, '__');
        if (currentUrl === '') currentUrl = 'other';

        // Get rating name from element or generate from URL
        let ratingName = ratingElement.getAttribute('ratingName');
        if (!ratingName || ratingName === 'auto') {
            let href = location.href.split('?')[0].split('#')[0]
                .replace(location.protocol + '//', '')
                .replace('www.', '');

            if (href.charAt(href.length - 1) === '/' || href.charAt(href.length - 1) === '.') {
                href = href.substring(0, href.length - 1);
            }

            ratingName = href.replace(/\./g, '_')
                .replace(/\//g, '__')
                .replace(/\,/g, '___')
                .replace(/\s/g, '');
        }

        // Clean rating name
        ratingName = ratingName.replace(/[\s#.@!$%&()]/g, '-');

        // Get configuration from attributes
        let emptyStarImg = ratingElement.getAttribute('emptyStarImg') ||
            'https://1.bp.blogspot.com/-pOr9XGwtSJc/Wsjf8ULOIqI/AAAAAAAAAKE/KBh-LUDIn0YzASKf-t7mQo8UNpdHhr2SgCLcBGAs/s1600/pusta.png';
        let fullStarImg = ratingElement.getAttribute('fullStarImg') ||
            'https://3.bp.blogspot.com/-QSNdWP4Ijx4/Wsjf7QOUZ4I/AAAAAAAAAJ8/F2nReVG5WfA1rLV3dGcAFMsPOnIQck4YwCLcBGAs/s1600/pelna.png';
        let hoverStarImg = ratingElement.getAttribute('hoverStarImg') || fullStarImg;

        let starSize = Number(ratingElement.getAttribute('starSize')) || 25;
        let align = ratingElement.getAttribute('align');
        if (align !== 'right' && align !== 'left') align = 'center';

        let textSize = Number(ratingElement.getAttribute('textSize')) || 15;
        let textColor = ratingElement.getAttribute('textColor') || 'black';
        let fontFamily = getFontFamily(ratingElement.getAttribute('fontFamily'));

        let readonly = ratingElement.getAttribute('readonly') === 'readonly';
        let topText = ratingElement.getAttribute('topText') ?? 'Рейтинг:';
        let bottomText = ratingElement.getAttribute('bottomText') ??
            'Среднее: <b>$average$</b> / $max$ (<b>$votes$</b> голосов)';
        let numberOfStars = Number(ratingElement.getAttribute('numberOfStars')) || 5;
        let thankYouText = ratingElement.getAttribute('thankYouText') ?? 'Спасибо за ваш голос';

        // Create container and loader
        let container = createContainer(ratingName, align);
        let loader = createLoader(align, starSize, numberOfStars);
        container.appendChild(loader);

        // Create text elements
        let [topTextElement, bottomTextElement] = createTextElements(
            topText,
            bottomText,
            numberOfStars,
            textSize,
            fontFamily,
            align,
            textColor
        );
        container.appendChild(topTextElement);

        // Validate Firebase URL
        let firebaseUrl = validateFirebaseUrl(ratingElement.getAttribute('firebaseURL'));

        // Create stars container and stars
        let starsContainer = createStarsContainer(starSize, numberOfStars);
        container.appendChild(starsContainer);

        createStars(
            starsContainer,
            numberOfStars,
            starSize,
            readonly,
            ratingName,
            emptyStarImg,
            fullStarImg,
            hoverStarImg,
            container,
            topText,
            topTextElement,
            firebaseUrl
        );

        container.appendChild(bottomTextElement);
        updateStars(container, 0, starSize);

        // Initialize Firebase if URL is valid
        if (firebaseUrl.indexOf('Ошибка Firebase') < 0) {
            initializeFirebase(
                firebaseUrl,
                ratingName,
                StarRatingGenerator, // Use the current value of StarRatingGenerator
                currentUrl,
                container,
                loader,
                starsContainer,
                numberOfStars,
                starSize,
                topText,
                topTextElement,
                thankYouText,
                readonly
            );
        } else {
            container.innerHTML = firebaseUrl;
        }
    }

    // Helper function to get font family
    function getFontFamily(font) {
        const fontMap = {
            'Georgia': 'Georgia, serif',
            'Times New Roman': '"Times New Roman", Times, serif',
            'Arial': 'Arial, Helvetica, sans-serif',
            'Arial Black': '"Arial Black", Gadget, sans-serif',
            'Comic Sans': '"Comic Sans MS", cursive, sans-serif',
            'Impact': 'Impact, Charcoal, sans-serif',
            'Lucida Sans': '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
            'Lucida Console': '"Lucida Console", Monaco, monospace',
            'Palatino': '"Palatino Linotype", "Book Antiqua", Palatino, serif',
            'Tahoma': 'Tahoma, Geneva, sans-serif',
            'Trebuchet': '"Trebuchet MS", Helvetica, sans-serif',
            'Verdana': 'Verdana, Geneva, sans-serif',
            'Courier New': '"Courier New", Courier, monospace'
        };

        return fontMap[font] || 'inherit';
    }

    // Helper function to create container
    function createContainer(ratingName, align) {
        let container = document.createElement('div');
        container.setAttribute('ratingName', ratingName);
        container.style.textAlign = align;
        container.style.position = 'relative';
        container.oncontextmenu = event => {
            event.preventDefault();
            return false;
        };
        return container;
    }

    // Helper function to create loader
    function createLoader(align, starSize, numberOfStars) {
        let loader = document.createElement('div');
        loader.setAttribute('class', 'kozyr-SRS-loader');
        loader.style.animation = 'dawaj 1s linear infinite';
        loader.style.borderRadius = '50%';
        loader.style.border = '6px solid #f3f3f3';
        loader.style.borderTop = '6px solid #3498db';
        loader.style.width = '25px';
        loader.style.height = '25px';

        if (align === 'center') {
            loader.style.margin = 'auto';
        } else if (align === 'right') {
            loader.style.marginLeft = 'calc(100% - ' + (starSize * numberOfStars) + 'px)';
        }

        return loader;
    }

    // Helper function to create text elements
    function createTextElements(topText, bottomText, numberOfStars, textSize, fontFamily, align, textColor) {
        let topTextElement = document.createElement('div');
        let bottomTextElement = document.createElement('div');

        bottomText = bottomText
            .replace(/\$average\$/g, '<span class="kozyr-SRS-average">0</span>')
            .replace(/\$votes\$/g, '<span class="kozyr-SRS-votes">0</span>')
            .replace(/\$max\$/g, numberOfStars);

        // Style text elements
        const textStyle = {
            fontSize: textSize + 'px',
            lineHeight: '1.2',
            fontFamily: fontFamily,
            textAlign: align,
            color: textColor
        };

        Object.assign(topTextElement.style, textStyle);
        Object.assign(bottomTextElement.style, textStyle);

        topTextElement.innerHTML = topText;
        bottomTextElement.innerHTML = bottomText;

        return [topTextElement, bottomTextElement];
    }

    // Helper function to validate Firebase URL
    function validateFirebaseUrl(url) {
        if (url === null) {
            return 'Ошибка Firebase. Добавьте атрибут firebaseURL="https://YOUR-FIREBASE.firebaseio.com" к вашему скрипту рейтинга.';
        }
        if (url === '') {
            return 'Ошибка Firebase. Введите URL-адрес вашего Firebase в атрибут "firebaseURL" в вашем скрипте рейтинга.';
        }
        if (url.indexOf('https://') !== 0) {
            return 'Ошибка Firebase. Неверный URL Firebase';
        }
        if (url.indexOf('firebaseio.com') < 5) {
            return 'Ошибка Firebase. Неверный URL Firebase';
        }
        if (url.lastIndexOf('/') !== url.length - 1) {
            url += '/';
        }
        return url;
    }

    // Helper function to create stars container
    function createStarsContainer(starSize, numberOfStars) {
        let container = document.createElement('div');
        container.style.width = (starSize * numberOfStars) + 'px';
        container.style.display = 'inline-block';
        return container;
    }

    // Helper function to create stars
    function createStars(container, numberOfStars, starSize, readonly, ratingName, emptyStarImg, fullStarImg, hoverStarImg, parentContainer, topText, topTextElement, firebaseUrl) {
        for (let i = 1; i <= numberOfStars; i++) {
            let star = document.createElement('div');
            star.style.display = 'inline-block';
            star.style.width = starSize + 'px';
            star.style.cursor = !localStorage['bsrgl_' + ratingName] && !readonly ? 'pointer' : 'inherit';

            if (!readonly) {
                star.onmouseenter = function() {
                    if (!localStorage['bsrgl_' + ratingName]) {
                        let stars = container.getElementsByTagName('div');
                        for (let j = 0; j < stars.length; j++) {
                            if (j < i) {
                                stars[j].querySelector('full').style.width = '0%';
                                stars[j].querySelector('empty').style.width = '0%';
                                stars[j].querySelector('hover').style.width = '100%';
                            } else {
                                stars[j].querySelector('full').style.width = '0%';
                                stars[j].querySelector('hover').style.width = '0%';
                                stars[j].querySelector('empty').style.width = '100%';
                                stars[j].querySelector('empty').querySelector('img').style.margin = '0 0 0 0';
                            }
                        }
                        if (topText !== '') {
                            topTextElement.innerHTML = i + ' / ' + numberOfStars;
                        }
                    } else {
                        parentContainer.textContent = firebaseUrl.replace(/\$userRating\$/g, localStorage['bsrgl_' + ratingName]);
                        parentContainer.style.cursor = 'inherit';
                    }
                };
            }

            star.setAttribute('starSize', i);

            // Create star components (full, empty, hover)
            let fullStar = document.createElement('full');
            fullStar.style.display = 'inline-block';
            fullStar.style.overflow = 'hidden';

            let emptyStar = document.createElement('empty');
            emptyStar.style.display = 'inline-block';
            emptyStar.style.overflow = 'hidden';

            let hoverStar = document.createElement('hover');
            hoverStar.style.display = 'inline-block';
            hoverStar.style.overflow = 'hidden';

            // Create and style star images
            let emptyStarImage = document.createElement('img');
            Object.assign(emptyStarImage.style, {
                position: 'relative',
                border: '0',
                padding: '0',
                margin: '0',
                maxWidth: 'inherit'
            });

            let fullStarImageContainer = document.createElement('img');
            Object.assign(fullStarImageContainer.style, {
                position: 'relative',
                border: '0',
                padding: '0',
                margin: '0',
                maxWidth: 'inherit'
            });

            let hoverStarImageContainer = document.createElement('img');
            Object.assign(hoverStarImageContainer.style, {
                position: 'relative',
                border: '0',
                padding: '0',
                margin: '0',
                maxWidth: 'inherit'
            });

            // Set image sources and sizes
            emptyStarImage.src = emptyStarImg;
            fullStarImageContainer.src = fullStarImg;
            hoverStarImageContainer.src = hoverStarImg;

            emptyStarImage.style.width = starSize + 'px';
            fullStarImageContainer.style.width = starSize + 'px';
            hoverStarImageContainer.style.width = starSize + 'px';

            star.style.lineHeight = '0';

            // Assemble star components
            fullStar.appendChild(fullStarImageContainer);
            emptyStar.appendChild(emptyStarImage);
            hoverStar.appendChild(hoverStarImageContainer);
            star.appendChild(fullStar);
            star.appendChild(emptyStar);
            star.appendChild(hoverStar);

            container.appendChild(star);
        }
    }

    // Helper function to initialize Firebase
    function initializeFirebase(firebaseUrl, ratingName, generatorIndex, currentUrl, container, loader, starsContainer, numberOfStars, starSize, topText, topTextElement, thankYouText, readonly) {
        const firebaseConfig = {
            databaseURL: firebaseUrl
        };

        let app = firebase.initializeApp(firebaseConfig, ratingName + generatorIndex);
        let databaseRef = app.database().ref('StarRatingSystem/' + currentUrl + '/' + ratingName);

        databaseRef.on('value', snapshot => {
            let data = snapshot.val();
            if (!data) {
                data = {
                    OO: 0, // average rating
                    O0: 0  // number of votes
                };
            }

            updateStars(container, data.OO * numberOfStars, starSize);

            if (container.contains(loader)) {
                loader.remove();
            }

            // Reset stars on mouse leave
            starsContainer.onmouseleave = function() {
                updateStars(container, data.OO * numberOfStars, starSize);
                topTextElement.innerHTML = topText;
            };

            // Update average and votes display
            container.querySelectorAll('.kozyr-SRS-average').forEach(el =>
                el.textContent = Math.round(data.OO * numberOfStars * 100) / 100
            );
            container.querySelectorAll('.kozyr-SRS-votes').forEach(el =>
                el.textContent = data.O0
            );

            if (!readonly) {
                // Add click handlers to stars
                container.querySelectorAll('div').forEach((star, index) => {
                    star.onclick = function() {
                        if (!localStorage['bsrgl_' + ratingName]) {
                            // Calculate new average
                            var newAverage = (data.OO * data.O0 + (index + 1) / numberOfStars) / (data.O0 + 1);

                            // Update Firebase
                            databaseRef.set({
                                OO: newAverage,
                                O0: data.O0 + 1
                            });

                            // Save vote to localStorage
                            localStorage['bsrgl_' + ratingName] = index + 1;

                            // Update UI
                            container.querySelectorAll('div').forEach(s =>
                                s.style.cursor = 'inherit'
                            );

                            showThankYouMessage(thankYouText, container, index + 1);
                            topTextElement.innerHTML = topText;
                        } else {
                            showThankYouMessage(firebaseUrl, container, localStorage['bsrgl_' + ratingName]);
                        }
                    };
                });
            }
        });
    }

    // Start initialization process
    function initialize(index) {
        if (typeof firebase === 'object' && typeof firebase.database === 'function' && typeof firebase.initializeApp === 'function') {
            initializeRating(index);
        } else {
            setTimeout(() => initialize(index), 50);
        }
    }

    initialize(generatorIndex); // Use the passed generatorIndex here
}

initializeStarRating(StarRatingGenerator);
StarRatingGenerator++; // Increment StarRatingGenerator after the first initialization if needed for subsequent calls.
