var selectLabel = document.querySelector('.custom-select-label');
var selectOptions = document.querySelector('.custom-select-options');

selectLabel.addEventListener('click', function () {
    selectOptions.style.display = (selectOptions.style.display === 'block') ? 'none' : 'block';
});

selectOptions.addEventListener('click', function (event) {
    if (event.target.tagName === 'DIV') {
        selectLabel.textContent = event.target.textContent;
        selectOptions.style.display = 'none';
    }
});

document.addEventListener('click', function (event) {
    if (!selectLabel.contains(event.target) && !selectOptions.contains(event.target)) {
        selectOptions.style.display = 'none';
    }
});

/*-------------------------------------------------------------two-------------------------------------------*/

var selectLabel_two = document.querySelector('.custom-select-label_two');
var selectOptions_two = document.querySelector('.custom-select-options_two');

selectLabel_two.addEventListener('click', function () {
    selectOptions_two.style.display = (selectOptions_two.style.display === 'block') ? 'none' : 'block';
});

selectOptions_two.addEventListener('click', function (event) {
    if (event.target.tagName === 'DIV') {
        selectLabel_two.textContent = event.target.textContent;
        selectOptions_two.style.display = 'none';
    }
});

document.addEventListener('click', function (event) {
    if (!selectLabel_two.contains(event.target) && !selectOptions_two.contains(event.target)) {
        selectOptions_two.style.display = 'none';
    }
});

/*--------------------------------------------------------three---------------------------------------------*/

var selectLabel_three = document.querySelector('.custom-select-label_three');
var selectOptions_three = document.querySelector('.custom-select-options_three');

selectLabel_three.addEventListener('click', function () {
    selectOptions_three.style.display = (selectOptions_three.style.display === 'block') ? 'none' : 'block';
});

selectOptions_three.addEventListener('click', function (event) {
    if (event.target.tagName === 'DIV') {
        selectLabel_three.textContent = event.target.textContent;
        selectOptions_three.style.display = 'none';
    }
});

document.addEventListener('click', function (event) {
    if (!selectLabel_three.contains(event.target) && !selectOptions_three.contains(event.target)) {
        selectOptions_three.style.display = 'none';
    }
});