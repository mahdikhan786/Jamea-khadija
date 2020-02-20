//cashing the Dom
const arabicVerse = document.querySelector('.arabic-verse');
const urduVerse = document.querySelector('.urdu-verse');
const engVerse = document.querySelector('.eng-verse');
const ayahNo = document.querySelector('.ayah-no');
const introPage = document.querySelector(".intro-page");
const entryButton = document.querySelector(".entry-button");
const menuToggle = document.querySelector(".menubar");
const menuPage = document.querySelector(".menu-page");
const topToggle = document.querySelector(".top-toggler");
const bottomToggle = document.querySelector(".bottom-toggler");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const imgSlide = document.querySelector(".img-slide");
const aboutPara = document.querySelector(".about-para");
const contactPara = document.querySelector(".contact-para");
const sliderImages = document.querySelectorAll(".slide-img");

// variables
let slideImagesCount = sliderImages.length - 1;
let sliderCount = 0;
let currentImgWidth = sliderImages[sliderCount].offsetWidth;
let quranVersesArabic = ['وَقَالَ رَبُّكُمُ ادْعُونِي أَسْتَجِبْ لَكُمْ ۚ إِنَّ الَّذِينَ يَسْتَكْبِرُونَ عَنْ عِبَادَتِي سَيَدْخُلُونَ جَهَنَّمَ دَاخِرِينَ',
                          'وَمَا كَانَ اللَّهُ لِيُعَذِّبَهُمْ وَأَنتَ فِيهِمْ ۚ وَمَا كَانَ اللَّهُ مُعَذِّبَهُمْ وَهُمْ يَسْتَغْفِرُونَ - ',
                        'فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ - 2:152',
                      'يَعْلَمُ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ وَيَعْلَمُ مَا تُسِرُّونَ وَمَا تُعْلِنُونَ ۚ وَاللَّهُ عَلِيمٌ بِذَاتِ الصُّدُورِ - 64:4',
                      'وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ ۚ وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ ۚ إِنَّ اللَّهَ بَالِغُ أَمْرِهِ ۚ قَدْ جَعَلَ اللَّهُ لِكُلِّ شَيْءٍ قَدْرًا - 65:3',
                    ''];
let quranicVersesEnglish = ['And your Lord says, "Call upon Me; I will respond to you." Indeed, those who disdain My worship will enter Hell [rendered] contemptible.',
"But Allah would not punish them while you, [O Muhammad], are among them, and Allah would not punish them while they seek forgiveness.",
'So remember Me; I will remember you. And be grateful to Me and do not deny Me',
'He knows what is within the heavens and earth and knows what you conceal and what you declare. And Allah is Knowing of that within the chest.',
'And will provide for him from where he does not expect. And whoever relies upon Allah - then He is sufficient for him. Indeed, Allah will accomplish His purpose. Allah has already set for everything a [decreed] extent.',
''];
let quranicVersesUrdu = ['اور آپ کا پروردگار کہتا ہے کہ مجھے پکار لو میں تمہیں جواب دوں گا۔ بے شک جو لوگ میری عبادت سے نفرت کرتے ہیں وہ دوزخ میں داخل ہوں گے',
'لیکن اللہ ان کو عذاب نہیں دیتا جب کہ تم بھی ان میں شامل ہو اور اللہ معافی مانگنے پر انہیں عذاب نہیں دیتا۔',
'تو مجھے یاد کرو۔ میں تمہیں یاد رکھوں گا. اور مجھ پر احسان کرو اور مجھ سے انکار نہ کرو',
'وہی جانتا ہے جو کچھ آسمانوں اور زمین میں ہے اور وہ جانتا ہے جو تم پوشیدہ کرتے ہو اور جو تم اعلان کرتے ہو۔ اور اللہ اس کو سینے میں جانتا ہے۔',
'اور اس کے لئے رزق فراہم کرے گا جہاں سے وہ توقع نہیں کرتا ہے۔ اور جو شخص اللہ پر بھروسہ کرتا ہے تو وہ اس کے لئے کافی ہے۔ بے شک اللہ اپنے مقصد کو پورا کرے گا۔ اللہ نے ہر چیز کے لئے پہلے ہی ایک حد مقرر کردی ہے۔',
];
let quranicAyahNo = ['40:60',
'8:33',
'2:152',
'64:4',
'65:3']
//functions
//quran verse selector
const quranVerseGenerator = () => {
 let randomNumber = Math.floor(Math.random() * 4);
  arabicVerse.innerHTML = quranVersesArabic[randomNumber];
  urduVerse.innerHTML = quranicVersesUrdu[randomNumber];
  engVerse.innerHTML = quranicVersesEnglish[randomNumber];
  ayahNo.innerHTML = `Surah - [${quranicAyahNo[randomNumber]}]`;
};
quranVerseGenerator();
//intro page fading
const introPageFade = () => {
  introPage.classList.add('opacity-toggle');
  setTimeout(() => {
    introPage.classList.add('display-toggle');
  }, 500)
};

// Appear function
const appear = () => {
  let aboutToTop = aboutPara.getBoundingClientRect().top;
  let contactToTop = contactPara.getBoundingClientRect().top;
  let screenHeight = window.innerHeight;
 
  if(aboutToTop < (screenHeight / 1.3)){
    aboutPara.style.opacity = '1' ;
    aboutPara.style.transform = 'translateY(0px)' ;
  };
  if(contactToTop < (screenHeight / 1.3)){
   contactPara.style.opacity = '1';
   contactPara.style.transform = 'translateY(0px)';
  }
 };

//= menu toggler
const menuToggler = () => {
  topToggle.classList.toggle("rotate-downwards");
  bottomToggle.classList.toggle("rotate-upwards");
  menuPage.classList.toggle("menu-toggler");
};

//= image gallery slider
//== to right
const leftSlide = () => {
  // (>) button
  if (sliderCount < slideImagesCount) {
    imgSlide.style.transform = `translateX(-${currentImgWidth +
      currentImgWidth * sliderCount}px)`;
    sliderCount++;
  } else if (sliderCount == slideImagesCount) {
    sliderCount = 0;
    imgSlide.style.transform = `translateX(0px)`;
  }
};
// to left
const rightSlide = () => {
  // (<) button

  if (sliderCount > 0) {
    imgSlide.style.transform = `translateX(-${currentImgWidth * sliderCount -
      currentImgWidth}px)`;
    sliderCount--;
  } else if (sliderCount == 0) {
    sliderCount = slideImagesCount;
    console.log(sliderCount);
    imgSlide.style.transform = `translateX(-${currentImgWidth *
      sliderCount}px)`;
  }
};

//automatic slider
let automaticSlider = setInterval(leftSlide, 2000);

//slider stop
let stopSlider = () => clearInterval(automaticSlider);

//eventListeners
menuToggle.addEventListener("click", menuToggler);
leftBtn.addEventListener("click", rightSlide);
rightBtn.addEventListener("click", leftSlide);
leftBtn.addEventListener("click", stopSlider);
rightBtn.addEventListener("click", stopSlider);
entryButton.addEventListener('click', introPageFade);
window.addEventListener('scroll', appear);