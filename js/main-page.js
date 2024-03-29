// Main slide
// $(document).ready(function() {
$('.sl').slick({
  dots: true,
  fade: true,
  arrows: false,
  responsive: [{
    breakpoint: 376,
    settings: {
      fade: false,
    }
  }]
});
// }); 
// Slide3
$('.sl3').slick({
  cssEasy: 'easy-in',
  slidesToScroll: 1,
  centerMode: true,
  arrows: false,
  variableWidth: true,
  arrows: true,
  prevArrow: '.slide3_prev',
  nextArrow: '.slide3_next',
  speed: 800,
  responsive: [{
    breakpoint: 376,
    settings: {
      dots: true,
      arrows: false
    }
  }]
});
// Slide2
$('.slider-pro').slick({
  centerMode: true,
  centerPadding: '20px',
  slidesToShow: 3,
  variableWidth: true,
  arrows: false,
  arrows: true,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  responsive: [{
    breakpoint: 376,
    settings: {
      dots: true,
      arrows: false
    }
  }]
});
// Block9
function DropDown(el) {
  this.wrapper = el;
  this.placeholder = this.wrapper.children('span');
  this.opts = this.wrapper.find('ul.dropdown > li');
  this.val = '';
  this.index = -1;
  this.initEvents();
  this.valueElement = false;
}
DropDown.prototype = {
  initEvents: function () {
    let obj = this;

    obj.wrapper.on('click', function (event) {
      console.log(this)
      $(this).toggleClass('active');
      return false;
    });

    obj.opts.on('click', function (ev) {
      let opt = $(this);
      obj.val = opt.text();
      obj.index = opt.index();
      if (obj.valueElement) {
        const val = opt.context.getElementsByClassName("phoneMenuItem")[0].getElementsByClassName("number-phone")[0].innerText;
        obj.placeholder.text(val);
        obj.val = val;
      } else {
        obj.placeholder.text(obj.val);
      }
    });
  },
  getValue: function () {
    return this.val;
  },
  getIndex: function () {
    return this.index;
  }
};
$(function () {
  const array = [
    ['Украина', '+380'],
    ['Австралия', '+61'],
    ['Австрия', '+43'],
    ['Азербайджан', '+994'],
    ['Албания', '+355'],
    ['Алжир', '+213'],
    ['Ангола', '+244'],
    ['Андорра', '+376'],
    ['Антигуа и Барбуда', '+1268'],
    ['Аргентина', '+54'],
    ['Армения', '+374'],
    ['Афганистан', '+93'],
    ['Багамы', '+1242'],
    ['Бангладеш', '+880'],
    ['Барбадос', '+1246'],
    ['Бахрейн', '+973'],
    ['Беларусь', '+375'],
    ['Белиз', '+501'],
    ['Бельгия', '+32'],
    ['Бенин', '+229'],
    ['Болгария', '+359'],
    ['Боливия', '+591'],
    ['Босния и Герцеговина', '+387'],
    ['Ботсвана', '+267'],
    ['Бразилия', '+55'],
    ['Бруней', '673'],
    ['Буркина Фасо', '+226'],
    ['Бурунди', '+257'],
    ['Бутан', '+975'],
    ['Вануату', '+678'],
    ['Ватикан', '+39'],
    ['Великобритания', '+44'],
    ['Венгрия', '+36'],
    ['Венесуэла', '+58'],
    ['Восточный Тимор', '+670'],
    ['Вьетнам', '+84'],
    ['Габон', '+241'],
    ['Гаити', '+509'],
    ['Гайана', '+592'],
    ['Гамбия', '+220'],
    ['Гана', '+233'],
    ['Гватемала', '+502'],
    ['Гвинея', '+224'],
    ['Гвинея-Бисау', '+245'],
    ['Германия', '+49'],
    ['Гондурас', '+504'],
    ['Гренада', '+1473'],
    ['Греция', '+30'],
    ['Грузия', '+995'],
    ['Дания', '+45'],
    ['Джибути', '+253'],
    ['Доминика', '+1767'],
    ['Доминиканская Республика', '+1809'],
    ['Египет', '+20'],
    ['Замбия', '+260'],
    ['Зимбабве', '+263'],
    ['Израиль', '+972'],
    ['Индия', '+91'],
    ['Индонезия', '+62'],
    ['Иордания', '+962'],
    ['Ирак', '+964'],
    ['Иран', '+98'],
    ['Ирландия', '+353'],
    ['Исландия', '+354'],
    ['Испания', '+34'],
    ['Италия', '+39'],
    ['Йемен', '+967'],
    ['Кабо-Верде', '+238'],
    ['Казахстан', '+77'],
    ['Камбоджа', '+855'],
    ['Камерун', '+237'],
    ['Канада', '+1'],
    ['Катар', '+974'],
    ['Кения', '+254'],
    ['Кипр', '+357'],
    ['Киргизия', '+996'],
    ['Кирибати', '+686'],
    ['Китай', '+86'],
    ['Колумбия', '+57'],
    ['Коморы', '+269'],
    ['Республика Конго', '+243'],
    ['Конго, республика', '+242'],
    ['Коста-Рика', '+506'],
    ['Кот-д’Ивуар', '+225'],
    ['Куба', '+53'],
    ['Кувейт', '+965'],
    ['Лаос', '+856'],
    ['Латвия', '+371'],
    ['Лесото', '+266'],
    ['Либерия', '+231'],
    ['Ливан', '+961'],
    ['Ливия', '+218'],
    ['Литва', '+370'],
    ['Лихтенштейн', '+423'],
    ['Люксембург', '+352'],
    ['Маврикий', '+230'],
    ['Мавритания', '+222'],
    ['Мадагаскар', '+261'],
    ['Македония', '+389'],
    ['Малави', '+265'],
    ['Малайзия', '+60'],
    ['Мали', '+223'],
    ['Мальдивы', '+960'],
    ['Мальта', '+356'],
    ['Марокко', '+212'],
    ['Маршалловы Острова', '+692'],
    ['Мексика', '+52'],
    ['Мозамбик', '+259'],
    ['Молдавия', '+373'],
    ['Монако', '+377'],
    ['Монголия', '+976'],
    ['Мьянма', '+95'],
    ['Намибия', '+264'],
    ['Науру', '+674'],
    ['Непал', '+977'],
    ['Нигер', '+227'],
    ['Нигерия', '+234'],
    ['Нидерланды', '+31'],
    ['Никарагуа', '+505'],
    ['Новая Зеландия', '+64'],
    ['Норвегия', '+47'],
    ['Объединенные Арабские Эмираты', '+971'],
    ['Оман', '+968'],
    ['Пакистан', '+92'],
    ['Палау', '+680'],
    ['Панама', '+507'],
    ['Папуа - Новая Гвинея', '+675'],
    ['Парагвай', '+595'],
    ['Перу', '+51'],
    ['Польша', '+48'],
    ['Португалия', '+351'],
    ['Россия', '+7'],
    ['Руанда', '+250'],
    ['Румыния', '+40'],
    ['Сальвадор', '+503'],
    ['Самоа', '+685'],
    ['Сан-Марино', '+378'],
    ['Сан-Томе и Принсипи', '+239'],
    ['Саудовская Аравия', '+966'],
    ['Свазиленд', '+268'],
    ['Северная Корея', '+850'],
    ['Сейшелы', '+248'],
    ['Сенегал', '+221'],
    ['Сент-Китс и Невис', '+1869'],
    ['Сент-Люсия', '+1758'],
    ['Сербия', '+381'],
    ['Сингапур', '+65'],
    ['Сирия', '+963'],
    ['Словакия', '+421'],
    ['Словения', '+986'],
    ['Соединенные Штаты Америки', '+1'],
    ['Соломоновы Острова', '+677'],
    ['Сомали', '+252'],
    ['Судан', '+249'],
    ['Суринам', '+597'],
    ['Сьерра-Леоне', '+232'],
    ['Таджикистан', '+992'],
    ['Таиланд', '+66'],
    ['Танзания', '+255'],
    ['Того', '+228'],
    ['Тонга', '+676'],
    ['Тринидад и Тобаго', '+1868'],
    ['Тувалу', '+688'],
    ['Тунис', '+216'],
    ['Туркмения', '+993'],
    ['Турция', '+90'],
    ['Уганда', '+256'],
    ['Узбекистан', '+998'],
    ['Уругвай', '+598'],
    ['Фиджи', '+679'],
    ['Филиппины', '+63'],
    ['Финляндия', '+358'],
    ['Франция', '+33'],
    ['Хорватия', '+385'],
    ['Чад', '+235'],
    ['Черногория', '+381'],
    ['Чехия', '+420'],
    ['Чили', '+56'],
    ['Швейцария', '+41'],
    ['Швеция', '+46'],
    ['Шри-Ланка', '+94'],
    ['Эквадор', '+593'],
    ['Эритрея', '+291'],
    ['Эстония', '+372'],
    ['Эфиопия', '+251'],
    ['Южная Корея', '+82'],
    ['Ямайка', '+1876'],
    ['Япония', '+81']
  ]
  const dropdown = $('<ul class="dropdown">');
  array.forEach(el => {
    const li = $(`<li>`)
    const div = $("<div class='phoneMenuItem'>")
    const num = $("<div class='number-phone'>")
    const country = $("<div class='country-phone'>")
    country.text(el[0]);
    num.text(el[1])
    div.append(num);
    div.append(country);
    li.append(div);
    dropdown.append(li);
  })
  $('.name-phone > .wrapper').append(dropdown);
  let wrapper = new DropDown($('.name-phone > .wrapper'));
  wrapper.placeholder = $(".phone-number");
  wrapper.valueElement = true;
  $(document).click(function () {
    $('.name-phone > .wrapper').removeClass('active');
  });
});
let phone = document.getElementById('border-input');
let arrowPhone = document.getElementById('arrow-phone');

phone.addEventListener('click', function () {
  phone.style.opacity = '1';
  arrowPhone.classList.toggle('rotate');
});
arrowPhone.addEventListener('click', function () {
  phone.style.opacity = '1';
  arrowPhone.classList.toggle('rotate');
});
