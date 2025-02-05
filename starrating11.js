const srs_strings = [
  ' / ', 'substring', 'relative', 'left', 'starSize', 'px)', 'position', 'Firebase error. Add attribute firebaseURL="https://YOUR-FIREBASE.firebaseio.com" to your rating script.', 'title', 'getBoundingClientRect', 'https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js', 'https://', 'function', 'none', 'textAlign', 'You have already cast your vote, your rating is $userRating$.', 'contains', 'appendChild', 'bottomText', '0 0 0 -', 'borderTop', 'Firebase error', '\'Comic Sans MS\', cursive, sans-serif', 'black', '1nhfBNZ', '\'Palatino Linotype\', \'Book Antiqua\', Palatino, serif', 'body', 'Thanks for voting', 'script[src="https://www.gstatic.com/firebasejs/8.1.1/firebase-database.js"]', 'textContent', '100%', 'script[src="https://cdn.jsdelivr.net/gh/votix/votix/starrating11.js"]', 'transition', 'oncontextmenu', 'Verdana, Geneva, sans-serif', 'Arial, Helvetica, sans-serif', '47143XogIoc', 'zIndex', 'blockingText', '\'Lucida Sans Unicode\', \'Lucida Grande\', sans-serif', '.kozyr-SRS-average', 'opacity', 'transparent', 'split', 'initializeApp', 'inline-block', 'forEach', 'full', 'https://1.bp.blogspot.com/-pOr9XGwtSJc/Wsjf8ULOIqI/AAAAAAAAAKE/KBh-LUDIn0YzASKf-t7mQo8UNpdHhr2SgCLcBGAs/s1600/pusta.png', 'display', 'width', 'getElementsByTagName', 'Firebase error. Enter the URL adress of your Firebase to "firebaseURL" attribute in your rating script.', '30639YMMkMx', 'database', '0 0 0 0', 'querySelectorAll', '173339trQLKh', 'kozyr-SRS-loader', 'dawaj 1s linear infinite', 'white', 'Firebase error. Invalid Fierabse URL', 'firebaseio.com', 'lineHeight', 'firebaseURL', 'val', 'querySelector', '\'Times New Roman\', Times, serif', '6px solid #3498db', '"Lucida Sans Unicode", "Lucida Grande", sans-serif', 'remove', 'scrollX', 'length', 'class', '<span class="kozyr-SRS-average">0</span>', '25px', 'insertBefore', '1.2', 'fullStarImg', '\'Arial Black\', Gadget, sans-serif', 'createElement', 'calc(100% - ', '\'Trebuchet MS\', Helvetica, sans-serif', 'hover', 'undefined', 'round', 'Trebuchet', 'src', '22055DWlruy', '"Trebuchet MS", Helvetica, sans-serif', 'Palatino', '\'Lucida Console\', Monaco, monospace', 'offsetWidth', 'textColor', '\'Courier New\', Courier, monospace', 'emptyStarImg', '161966UeYhRY', 'https://www.gstatic.com/firebasejs/8.1.1/firebase-database.js', 'empty', 'div', 'script', 'value', 'onclick', 'hidden', 'ratingName', 'Lucida Console', '1px solid #e0e0e0', 'align', 'preventDefault', 'bsrgl_', 'object', 'set', 'head', 'onmouseenter', 'host', 'https://3.bp.blogspot.com/-QSNdWP4Ijx4/Wsjf7QOUZ4I/AAAAAAAAAJ8/F2nReVG5WfA1rLV3dGcAFMsPOnIQck4YwCLcBGAs/s1600/pelna.png', 'Arial Black', 'Comic Sans', '200px', 'fontSize', 'Impact', 'img', 'animation', '1mZwkhr', '9999999', '"Lucida Console", Monaco, monospace', '163289RoWWHX', 'boxSizing', 'wartosc', 'padding', 'removeChild', 'floor', 'SRSstar', 'borderRadius', 'default', 'thankYouText', 'fontFamily', 'other', 'cursor', 'Inherit', '6px solid #f3f3f3', 'Times New Roman', 'getAttribute', 'parentNode', 'height', 'Average: <b>$average$</b> / $max$ (<b>$votes$</b> votes)', 'setAttribute', 'ref', 'offsetHeight', 'onmouseleave', 'topText', 'textSize', 'Rating:', 'maxWidth', 'innerHTML', 'numberOfStars', 'indexOf', 'border', '7px', 'Tahoma', 'inherit', 'lastIndexOf', 'status', 'top', '50%', '.kozyr-SRS-votes', 'background', 'Verdana', 'pointer', 'scrollY', 'style', '"Palatino Linotype", "Book Antiqua", Palatino, serif', 'Tahoma, Geneva, sans-serif', 'absolute', 'auto', 'right', 'replace', 'color', 'overflow', '@keyframes dawaj {0% {transform: rotate(0deg);} 100% {transform:rotate(360deg);}} .kozyr-SRS-loader ~ div{visibility:hidden;}', 'www.', 'Impact, Charcoal, sans-serif', '___', '"Arial Black", Gadget, sans-serif', 'margin', '57794AVuJQd', '2CrxsFw', 'center'];

const srs_get_string = index => srs_strings[index];

const srs_decode = (function(strings, key) {
  let decodedStrings = [];
  while (true) {
    try {
      let decodedIndex = parseInt(srs_get_string(0x11d)) + parseInt(srs_get_string(0x19e)) * parseInt(srs_get_string(0x13c)) + -parseInt(srs_get_string(0x162)) + -parseInt(srs_get_string(0x19d)) + -parseInt(srs_get_string(0x144)) * -parseInt(srs_get_string(0x15f)) + -parseInt(srs_get_string(0x1b8)) * parseInt(srs_get_string(0x108)) + parseInt(srs_get_string(0x119)); //Obfuscated index calculation
      if (decodedIndex === key) break;
      else strings.push(strings.shift());
    } catch (e) {
      strings.push(strings.shift());
    }
  }
  return strings;
}(srs_strings, 0x22a04));


let StarRatingGenerator = typeof StarRatingGenerator === srs_get_string(0x138) ? 0 : StarRatingGenerator + 0x1;

(function(generator) {

  function loadFirebaseJS() {
    if (generator === 0 && !document.querySelector(srs_get_string(0x1bc))) {
      let script = document.createElement(srs_get_string(0x148));
      script.src = srs_get_string(0x1aa);
      document.body.appendChild(script);
      script.onload = function() {
        let script2 = document.createElement(srs_get_string(0x148));
        script2.src = srs_get_string(0x145);
        document.head.appendChild(script2);
      };
      let style = document.createElement('style');
      style.textContent = srs_get_string(0x197);
      document.head.appendChild(style);
    }
  }


  function updateStars(_ratingContainer, numFilledStars, starSize) {
    let stars = _ratingContainer.getElementsByTagName(srs_get_string(0x168));
    for (let i = 0; i < stars.length; i++) {
      if (i <= numFilledStars) {
        if (i < Math.floor(numFilledStars)) {
          stars[i].querySelector(srs_get_string(0x113)).style.width = '100%';
          stars[i].querySelector(srs_get_string(0x146)).style.width = '0%';
        } else {
          let remainingWidth = numFilledStars - Math.floor(numFilledStars);
          let star = _ratingContainer.querySelectorAll(srs_get_string(0x168))[i];
          star.querySelector(srs_get_string(0x113)).style.width = Math.round(remainingWidth * starSize) + 'px';
}(StarRatingGenerator));
