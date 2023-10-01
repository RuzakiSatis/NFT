const incrementDecrementButtons = document.querySelectorAll('.increment_decrement');

incrementDecrementButtons.forEach(button => {
    const inputBox = document.getElementById("input_box");
    button.addEventListener('click', () => {

        let svg_increment_decrement = document.getElementById("svg_increment_decrement");
        let currentValue = parseInt(inputBox.textContent);

        if (button.classList.contains("liked")) {
            currentValue -= 1;
            button.classList.remove('liked');
            svg_increment_decrement.classList.remove('svg_increment_decrement');
            svg_increment_decrement.style.fill ="#76607A";
        } else {
            currentValue += 1;
            button.classList.add('liked');
            svg_increment_decrement.classList.add('svg_increment_decrement');
            svg_increment_decrement.style.fill ="#ffb700";
        }
        inputBox.textContent = currentValue;

    });
});
/*------------------------------------------------------two--------------------------------------------------*/

const incrementDecrementButtons_two = document.querySelectorAll('.increment_decrement_two');

incrementDecrementButtons_two.forEach(button => {
    const inputBox_two = document.getElementById("input_box_two");
    button.addEventListener('click', () => {

        let svg_increment_decrement_two = document.getElementById("svg_increment_decrement_two");
        let currentValue = parseInt(inputBox_two.textContent);

        if (button.classList.contains("liked")) {
            currentValue -= 1;
            button.classList.remove('liked');
            svg_increment_decrement_two.classList.remove('svg_increment_decrement');
            svg_increment_decrement_two.style.fill ="#76607A";
        } else {
            currentValue += 1;
            button.classList.add('liked');
            svg_increment_decrement_two.classList.add('svg_increment_decrement');
            svg_increment_decrement_two.style.fill ="#ffb700";
        }
        inputBox_two.textContent = currentValue;

    });
});

/*-------------------------------------------------three-----------------------------------------------*/

const incrementDecrementButtons_three = document.querySelectorAll('.increment_decrement_three');

incrementDecrementButtons_three.forEach(button => {
    const inputBox_three = document.getElementById("input_box_three");
    button.addEventListener('click', () => {

        let svg_increment_decrement_three = document.getElementById("svg_increment_decrement_three");
        let currentValue = parseInt(inputBox_three.textContent);

        if (button.classList.contains("liked")) {
            currentValue -= 1;
            button.classList.remove('liked');
            svg_increment_decrement_three.classList.remove('svg_increment_decrement_three');
            svg_increment_decrement_three.style.fill ="#76607A";
        } else {
            currentValue += 1;
            button.classList.add('liked');
            svg_increment_decrement_three.classList.add('svg_increment_decrement_three');
            svg_increment_decrement_three.style.fill ="#ffb700";
        }
        inputBox_three.textContent = currentValue;

    });
});

/*--------------------------------------------four----------------------------------------------------*/

const incrementDecrementButtons_four = document.querySelectorAll('.increment_decrement_four');

incrementDecrementButtons_four.forEach(button => {
    const inputBox_four = document.getElementById("input_box_four");
    button.addEventListener('click', () => {

        let svg_increment_decrement_four = document.getElementById("svg_increment_decrement_four");
        let currentValue = parseInt(inputBox_four.textContent);

        if (button.classList.contains("liked")) {
            currentValue -= 1;
            button.classList.remove('liked');
            svg_increment_decrement_four.classList.remove('svg_increment_decrement_four');
            svg_increment_decrement_four.style.fill ="#76607A";
        } else {
            currentValue += 1;
            button.classList.add('liked');
            svg_increment_decrement_four.classList.add('svg_increment_decrement_four');
            svg_increment_decrement_four.style.fill ="#ffb700";
        }
        inputBox_four.textContent = currentValue;

    });
});

/*-----------------------------------------------------five------------------------------------------*/

const incrementDecrementButtons_five = document.querySelectorAll('.increment_decrement_five');

incrementDecrementButtons_five.forEach(button => {
    const inputBox_five = document.getElementById("input_box_five");
    button.addEventListener('click', () => {

        let svg_increment_decrement_five = document.getElementById("svg_increment_decrement_five");
        let currentValue = parseInt(inputBox_five.textContent);

        if (button.classList.contains("liked")) {
            currentValue -= 1;
            button.classList.remove('liked');
            svg_increment_decrement_five.classList.remove('svg_increment_decrement_five');
            svg_increment_decrement_five.style.fill ="#76607A";
        } else {
            currentValue += 1;
            button.classList.add('liked');
            svg_increment_decrement_five.classList.add('svg_increment_decrement_five');
            svg_increment_decrement_five.style.fill ="#ffb700";
        }
        inputBox_five.textContent = currentValue;

    });
});

/*--------------------------------------------------six--------------------------------------------*/

const incrementDecrementButtons_six = document.querySelectorAll('.increment_decrement_six');

incrementDecrementButtons_six.forEach(button => {
    const inputBox_six = document.getElementById("input_box_six");
    button.addEventListener('click', () => {

        let svg_increment_decrement_six = document.getElementById("svg_increment_decrement_six");
        let currentValue = parseInt(inputBox_six.textContent);

        if (button.classList.contains("liked")) {
            currentValue -= 1;
            button.classList.remove('liked');
            svg_increment_decrement_six.classList.remove('svg_increment_decrement_six');
            svg_increment_decrement_six.style.fill ="#76607A";
        } else {
            currentValue += 1;
            button.classList.add('liked');
            svg_increment_decrement_six.classList.add('svg_increment_decrement_six');
            svg_increment_decrement_six.style.fill ="#ffb700";
        }
        inputBox_six.textContent = currentValue;

    });
});

/*---------------------------------------------seven--------------------------------------*/

const incrementDecrementButtons_seven = document.querySelectorAll('.increment_decrement_seven');

incrementDecrementButtons_seven.forEach(button => {
    const inputBox_seven = document.getElementById("input_box_seven");
    button.addEventListener('click', () => {

        let svg_increment_decrement_seven = document.getElementById("svg_increment_decrement_seven");
        let currentValue = parseInt(inputBox_seven.textContent);

        if (button.classList.contains("liked")) {
            currentValue -= 1;
            button.classList.remove('liked');
            svg_increment_decrement_seven.classList.remove('svg_increment_decrement_seven');
            svg_increment_decrement_seven.style.fill ="#76607A";
        } else {
            currentValue += 1;
            button.classList.add('liked');
            svg_increment_decrement_seven.classList.add('svg_increment_decrement_seven');
            svg_increment_decrement_seven.style.fill ="#ffb700";
        }
        inputBox_seven.textContent = currentValue;

    });
});

/*---------------------------------------eight----------------------------------------------------*/

const incrementDecrementButtons_eight = document.querySelectorAll('.increment_decrement_eight');

incrementDecrementButtons_eight.forEach(button => {
    const inputBox_eight = document.getElementById("input_box_eight");
    button.addEventListener('click', () => {

        let svg_increment_decrement_eight = document.getElementById("svg_increment_decrement_eight");
        let currentValue = parseInt(inputBox_eight.textContent);

        if (button.classList.contains("liked")) {
            currentValue -= 1;
            button.classList.remove('liked');
            svg_increment_decrement_eight.classList.remove('svg_increment_decrement_eight');
            svg_increment_decrement_eight.style.fill ="#76607A";
        } else {
            currentValue += 1;
            button.classList.add('liked');
            svg_increment_decrement_eight.classList.add('svg_increment_decrement_eight');
            svg_increment_decrement_eight.style.fill ="#ffb700";
        }
        inputBox_eight.textContent = currentValue;

    });
});

/*-------------------------------------------------nine-----------------------------------------*/

const incrementDecrementButtons_nine = document.querySelectorAll('.increment_decrement_nine');

incrementDecrementButtons_nine.forEach(button => {
    const inputBox_nine = document.getElementById("input_box_nine");
    button.addEventListener('click', () => {

        let svg_increment_decrement_nine = document.getElementById("svg_increment_decrement_nine");
        let currentValue = parseInt(inputBox_nine.textContent);

        if (button.classList.contains("liked")) {
            currentValue -= 1;
            button.classList.remove('liked');
            svg_increment_decrement_nine.classList.remove('svg_increment_decrement_nine');
            svg_increment_decrement_nine.style.fill ="#76607A";
        } else {
            currentValue += 1;
            button.classList.add('liked');
            svg_increment_decrement_nine.classList.add('svg_increment_decrement_nine');
            svg_increment_decrement_nine.style.fill ="#ffb700";
        }
        inputBox_nine.textContent = currentValue;

    });
});