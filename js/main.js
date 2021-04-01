$(document).ready(function () {
    $('.spoiler-body').hide();
    $('.spoiler-title').click(function () {
        $(this).next().toggle()
    });
});

// create filter width
let widthFilter = document.querySelector('.width__filter');
noUiSlider.create(widthFilter, {
    start: [0, 150],
    connect: true,
    range: {
        'min': [0],
        'max': [150]
    }
});
const widthFilterStart = document.getElementById('width-filter__start');
const widthFilterEnd = document.getElementById('width-filter__end');

widthFilterStart.addEventListener('change', setWidthValues);
widthFilterEnd.addEventListener('change', setWidthValues);

function setWidthValues() {
    let widthFilterStartValue;
    let widthFilterEndValues;
    if (widthFilterStart.value != '') {
        widthFilterStartValue = widthFilterStart.value;
    }
    if (widthFilterEnd.value != '') {
        widthFilterEndValues = widthFilterEnd.value;
    }
    widthFilter.noUiSlider.set([widthFilterStartValue, widthFilterEndValues]);
}
// end filter width

// create filter price
let priceFilter = document.querySelector('.price__filter');
noUiSlider.create(priceFilter, {
    start: [0, 150],
    connect: true,
    range: {
        'min': [0],
        'max': [150]
    }
});
const priceFilterStart = document.getElementById('price-filter__start');
const priceFilterEnd = document.getElementById('price-filter__end');

priceFilterStart.addEventListener('change', setpriceValues);
priceFilterEnd.addEventListener('change', setpriceValues);

function setpriceValues() {
    let priceFilterStartValue;
    let priceFilterEndValues;
    if (priceFilterStart.value != '') {
        priceFilterStartValue = priceFilterStart.value;
    }
    if (priceFilterEnd.value != '') {
        priceFilterEndValues = priceFilterEnd.value;
    }
    priceFilter.noUiSlider.set([priceFilterStartValue, priceFilterEndValues]);
}
// end filter price

// create filter density
let densityFilter = document.querySelector('.density__filter');
noUiSlider.create(densityFilter, {
    start: [0, 150],
    connect: true,
    range: {
        'min': [0],
        'max': [150]
    }
});
const densityFilterStart = document.getElementById('density-filter__start');
const densityFilterEnd = document.getElementById('density-filter__end');

densityFilterStart.addEventListener('change', setdensityValues);
densityFilterEnd.addEventListener('change', setdensityValues);

function setdensityValues() {
    let densityFilterStartValue;
    let densityFilterEndValues;
    if (densityFilterStart.value != '') {
        densityFilterStartValue = densityFilterStart.value;
    }
    if (densityFilterEnd.value != '') {
        densityFilterEndValues = densityFilterEnd.value;
    }
    densityFilter.noUiSlider.set([densityFilterStartValue, densityFilterEndValues]);
}
// end filter density

// Slider
/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания: */
function showSlides(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides = document.getElementsByClassName("item");

    /* Проверяем количество слайдов: */
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    slides[slideIndex - 1].style.display = "block";
}