let StarRatingGenerator=(typeof StarRatingGenerator==='undefined')?0:StarRatingGenerator+1;(function(generatorIndex){if(generatorIndex===0&&!document.querySelector('script[src="https://www.gstatic.com/firebasejs/8.1.1/firebase-database.js"]')){loadDependencies()}function loadDependencies(){const firebaseAppScript=document.createElement('script');firebaseAppScript.src='https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js';document.head.appendChild(firebaseAppScript);firebaseAppScript.onload=function(){const firebaseDatabaseScript=document.createElement('script');firebaseDatabaseScript.src='https://www.gstatic.com/firebasejs/8.1.1/firebase-database.js';document.head.appendChild(firebaseDatabaseScript)};const styleElement=document.createElement('style');styleElement.textContent=`@keyframes dawaj{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.kozyr-SRS-loader~div{visibility:hidden}`;document.head.appendChild(styleElement)}function updateStars(element,rating,starSize){const stars=element.getElementsByTagName('div');for(let i=0;i<stars.length;i++){if(i<=rating){if(i<Math.floor(rating)){stars[i].querySelector('full').style.width='100%';stars[i].querySelector('empty').style.width='0%'}else{const partialValue=rating-Math.floor(rating);const width=Math.round(partialValue*starSize);const currentStar=element.getElementsByTagName('div')[i];currentStar.querySelector('full').style.width=width+'px';currentStar.querySelector('empty').style.width=(starSize-width)+'px';currentStar.querySelector('empty').querySelector('img').style.margin=`0 0 0-${width}px`}}else{stars[i].querySelector('full').style.width='0%';stars[i].querySelector('empty').style.width='100%';stars[i].querySelector('empty').querySelector('img').style.margin='0 0 0 0'}stars[i].querySelector('hover').style.width='0%'}}function showThankYouMessage(message,ratingElement,userRating){const thankYouDiv=document.createElement('div');thankYouDiv.textContent=message.replace(/\$userRating\$/g,userRating);Object.assign(thankYouDiv.style,{position:'absolute',background:'white',color:'black',border:'1px solid #e0e0e0',borderRadius:'3px',padding:'3px 7px',lineHeight:'1.2',textAlign:'center',opacity:'0',transition:'opacity 1s',width:'200px',boxSizing:'border-box',zIndex:'9999999',cursor:'auto'});document.body.appendChild(thankYouDiv);const elementRect=ratingElement.getBoundingClientRect();setTimeout(()=>{thankYouDiv.style.opacity='1';if(ratingElement.style.textAlign==='right'){thankYouDiv.style.left=`${window.scrollX+elementRect.left+ratingElement.offsetWidth-200}px`}else if(ratingElement.style.textAlign==='center'){thankYouDiv.style.left=`${window.scrollX+elementRect.left+ratingElement.offsetWidth/2-100}px`}else{thankYouDiv.style.left=`${window.scrollX+elementRect.left}px`}thankYouDiv.style.top=`${elementRect.top>thankYouDiv.offsetHeight?window.scrollY+elementRect.top-thankYouDiv.offsetHeight:window.scrollY+elementRect.top+thankYouDiv.offsetHeight}px`},10);setTimeout(()=>{thankYouDiv.style.opacity='0';setTimeout(()=>document.body.removeChild(thankYouDiv),1000)},3500)}function initializeRating(index){const ratingElement=document.querySelectorAll('.kozyr-SRS')[index];const currentUrl=processUrl(location.host);let ratingName=getRatingName(ratingElement,currentUrl);const config=getConfiguration(ratingElement);const container=createContainer(ratingName,config.align);const loader=createLoader(config);const{topTextElement,bottomTextElement}=createTextElements(config);const firebaseUrl=validateFirebaseUrl(ratingElement.getAttribute('firebaseURL'));const starsContainer=createStarsContainer(config);createStars(starsContainer,config,ratingName);assembleElements(container,loader,topTextElement,starsContainer,bottomTextElement);initializeFirebase(firebaseUrl,container,config,ratingName,generatorIndex)}function processUrl(url){return url.replace('www.','').replace(/\./g,'_').replace(/\//g,'__')||'default'}function getRatingName(element,defaultUrl){let name=element.getAttribute('ratingName');if(!name||name==='inherit'){name=processUrl(location.href.split('?')[0].split('#')[0].replace(location.protocol+'//','').replace('www.',''))}return name.replace(/[\s#.@!$%&()]/g,'-')}function getConfiguration(element){return{emptyStarImg:element.getAttribute('emptyStarImg')||'https://1.bp.blogspot.com/-pOr9XGwtSJc/Wsjf8ULOIqI/AAAAAAAAAKE/KBh-LUDIn0YzASKf-t7mQo8UNpdHhr2SgCLcBGAs/s1600/pusta.png',fullStarImg:element.getAttribute('fullStarImg')||'https://3.bp.blogspot.com/-QSNdWP4Ijx4/Wsjf7QOUZ4I/AAAAAAAAAJ8/F2nReVG5WfA1rLV3dGcAFMsPOnIQck4YwCLcBGAs/s1600/pelna.png',starSize:validateNumber(element.getAttribute('starSize'),25),align:validateAlign(element.getAttribute('align')),textSize:validateNumber(element.getAttribute('textSize'),15),textColor:element.getAttribute('textColor')||'black',fontFamily:getFontFamily(element.getAttribute('fontFamily')),readonly:element.getAttribute('status')==='readonly',numberOfStars:validateNumber(element.getAttribute('numberOfStars'),5),topText:element.getAttribute('topText')||'Рейтинг:',bottomText:element.getAttribute('bottomText')||'Среднее: <b>$average$</b> / $max$ (<b>$votes$</b> голосов)',thankYouText:element.getAttribute('thankYouText')||'Спасибо за ваш голос'}}function validateNumber(value,defaultValue){const num=Number(value);return(!value||num<0||isNaN(num))?defaultValue:num}function validateAlign(align){return['right','center'].includes(align)?align:'center'}function getFontFamily(font){const fontMap={'Georgia':'Georgia, serif','Times New Roman':'"Times New Roman", Times, serif','Arial':'Arial, Helvetica, sans-serif','Arial Black':'"Arial Black", Gadget, sans-serif','Comic Sans':'"Comic Sans MS", cursive, sans-serif','Impact':'Impact, Charcoal, sans-serif','Lucida Sans':'"Lucida Sans Unicode", "Lucida Grande", sans-serif','Lucida Console':'"Lucida Console", Monaco, monospace','Palatino':'"Palatino Linotype", "Book Antiqua", Palatino, serif','Tahoma':'Tahoma, Geneva, sans-serif','Trebuchet':'"Trebuchet MS", Helvetica, sans-serif','Courier New':'"Courier New", Courier, monospace','Verdana':'Verdana, Geneva, sans-serif'};return fontMap[font]||'inherit'}function initialize(index){if(typeof firebase==='object'&&typeof firebase.database==='function'&&typeof firebase.initializeApp==='function'){initializeRating(index)}else{setTimeout(()=>initialize(index),50)}}initialize(generatorIndex)})(StarRatingGenerator);
