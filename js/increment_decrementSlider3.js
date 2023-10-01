const incrementDecrement_SliderThree = document.querySelectorAll('.incrementDecrement_SliderThree');

incrementDecrement_SliderThree.forEach(button => {
    const input_SliderThree_box = document.getElementById("input_SliderThree_box");
    button.addEventListener('click', () => {

        let increment_decrement_svg = document.getElementById("increment_decrement_svg");
        let currentValue = parseInt(input_SliderThree_box.textContent);

        if (button.classList.contains("liked")) {
            currentValue -= 1;
            button.classList.remove('liked');
            increment_decrement_svg.classList.remove('increment_decrement_svg');
            increment_decrement_svg.style.fill ="#76607A";
        } else {
            currentValue += 1;
            button.classList.add('liked');
            increment_decrement_svg.classList.add('increment_decrement_svg');
            increment_decrement_svg.style.fill ="#ffb700";
        }
        input_SliderThree_box.textContent = currentValue;

    });
});
/*-----------------------------------------------------------two----------------------------------------------------*/
const incrementDecrementTwo_SliderThree = document.querySelectorAll('.incrementDecrementTwo_SliderThree');

incrementDecrementTwo_SliderThree.forEach(button => {
    const input_SliderThree_boxTwo = document.getElementById("input_SliderThree_boxTwo");
    button.addEventListener('click', () => {

        let increment_decrement_svgTwo = document.getElementById("increment_decrement_svgTwo");
        let currentValue = parseInt(input_SliderThree_boxTwo.textContent);

        if (button.classList.contains("liked")) {
            currentValue -= 1;
            button.classList.remove('liked');
            increment_decrement_svgTwo.classList.remove('increment_decrement_svgTwo');
            increment_decrement_svgTwo.style.fill ="#76607A";
        } else {
            currentValue += 1;
            button.classList.add('liked');
            increment_decrement_svgTwo.classList.add('increment_decrement_svgTwo');
            increment_decrement_svgTwo.style.fill ="#ffb700";
        }
        input_SliderThree_boxTwo.textContent = currentValue;

    });
});
/*-----------------------------------------------------------three----------------------------------------------------*/
const incrementDecrementThree_SliderThree = document.querySelectorAll('.incrementDecrementThree_SliderThree');

incrementDecrementThree_SliderThree.forEach(button => {
    const input_SliderThree_boxThree = document.getElementById("input_SliderThree_boxThree");
    button.addEventListener('click', () => {

        let increment_decrement_svgThree = document.getElementById("increment_decrement_svgThree");
        let currentValue = parseInt(input_SliderThree_boxThree.textContent);

        if (button.classList.contains("liked")) {
            currentValue -= 1;
            button.classList.remove('liked');
            increment_decrement_svgThree.classList.remove('increment_decrement_svgThree');
            increment_decrement_svgThree.style.fill ="#76607A";
        } else {
            currentValue += 1;
            button.classList.add('liked');
            increment_decrement_svgThree.classList.add('increment_decrement_svgThree');
            increment_decrement_svgThree.style.fill ="#ffb700";
        }
        input_SliderThree_boxThree.textContent = currentValue;

    });
});
/*-----------------------------------------------------------four----------------------------------------------------*/
const incrementDecrementFour_SliderThree = document.querySelectorAll('.incrementDecrementFour_SliderThree');

incrementDecrementFour_SliderThree.forEach(button => {
    const input_SliderThree_boxFour = document.getElementById("input_SliderThree_boxFour");
    button.addEventListener('click', () => {

        let increment_decrement_svgFour = document.getElementById("increment_decrement_svgFour");
        let currentValue = parseInt(input_SliderThree_boxFour.textContent);

        if (button.classList.contains("liked")) {
            currentValue -= 1;
            button.classList.remove('liked');
            increment_decrement_svgFour.classList.remove('increment_decrement_svgFour');
            increment_decrement_svgFour.style.fill ="#76607A";
        } else {
            currentValue += 1;
            button.classList.add('liked');
            increment_decrement_svgFour.classList.add('increment_decrement_svgFour');
            increment_decrement_svgFour.style.fill ="#ffb700";
        }
        input_SliderThree_boxFour.textContent = currentValue;

    });
});
/*-----------------------------------------------------------five----------------------------------------------------*/
const incrementDecrementFive_SliderThree = document.querySelectorAll('.incrementDecrementFive_SliderThree');

incrementDecrementFive_SliderThree.forEach(button => {
    const input_SliderThree_boxFive = document.getElementById("input_SliderThree_boxFive");
    button.addEventListener('click', () => {

        let increment_decrement_svgFive = document.getElementById("increment_decrement_svgFive");
        let currentValue = parseInt(input_SliderThree_boxFive.textContent);

        if (button.classList.contains("liked")) {
            currentValue -= 1;
            button.classList.remove('liked');
            increment_decrement_svgFive.classList.remove('increment_decrement_svgFive');
            increment_decrement_svgFive.style.fill ="#76607A";
        } else {
            currentValue += 1;
            button.classList.add('liked');
            increment_decrement_svgFive.classList.add('increment_decrement_svgFive');
            increment_decrement_svgFive.style.fill ="#ffb700";
        }
        input_SliderThree_boxFive.textContent = currentValue;

    });
});
/*-----------------------------------------------------------six----------------------------------------------------*/
const incrementDecrementSix_SliderThree = document.querySelectorAll('.incrementDecrementSix_SliderThree');

incrementDecrementSix_SliderThree.forEach(button => {
    const input_SliderThree_boxSix = document.getElementById("input_SliderThree_boxSix");
    button.addEventListener('click', () => {

        let increment_decrement_svgSix = document.getElementById("increment_decrement_svgSix");
        let currentValue = parseInt(input_SliderThree_boxSix.textContent);

        if (button.classList.contains("liked")) {
            currentValue -= 1;
            button.classList.remove('liked');
            increment_decrement_svgSix.classList.remove('increment_decrement_svgSix');
            increment_decrement_svgSix.style.fill ="#76607A";
        } else {
            currentValue += 1;
            button.classList.add('liked');
            increment_decrement_svgSix.classList.add('increment_decrement_svgSix');
            increment_decrement_svgSix.style.fill ="#ffb700";
        }
        input_SliderThree_boxSix.textContent = currentValue;

    });
});
/*-----------------------------------------------------------seven----------------------------------------------------*/
const incrementDecrementSeven_SliderThree = document.querySelectorAll('.incrementDecrementSeven_SliderThree');

incrementDecrementSeven_SliderThree.forEach(button => {
    const input_SliderThree_boxSeven = document.getElementById("input_SliderThree_boxSeven");
    button.addEventListener('click', () => {

        let increment_decrement_svgSeven = document.getElementById("increment_decrement_svgSeven");
        let currentValue = parseInt(input_SliderThree_boxSeven.textContent);

        if (button.classList.contains("liked")) {
            currentValue -= 1;
            button.classList.remove('liked');
            increment_decrement_svgSeven.classList.remove('increment_decrement_svgSeven');
            increment_decrement_svgSeven.style.fill ="#76607A";
        } else {
            currentValue += 1;
            button.classList.add('liked');
            increment_decrement_svgSeven.classList.add('increment_decrement_svgSeven');
            increment_decrement_svgSeven.style.fill ="#ffb700";
        }
        input_SliderThree_boxSeven.textContent = currentValue;

    });
});
/*-----------------------------------------------------------eight----------------------------------------------------*/
const incrementDecrementEight_SliderThree = document.querySelectorAll('.incrementDecrementEight_SliderThree');

incrementDecrementEight_SliderThree.forEach(button => {
    const input_SliderThree_boxEight = document.getElementById("input_SliderThree_boxEight");
    button.addEventListener('click', () => {

        let increment_decrement_svgEight = document.getElementById("increment_decrement_svgEight");
        let currentValue = parseInt(input_SliderThree_boxEight.textContent);

        if (button.classList.contains("liked")) {
            currentValue -= 1;
            button.classList.remove('liked');
            increment_decrement_svgEight.classList.remove('increment_decrement_svgEight');
            increment_decrement_svgEight.style.fill ="#76607A";
        } else {
            currentValue += 1;
            button.classList.add('liked');
            increment_decrement_svgEight.classList.add('increment_decrement_svgEight');
            increment_decrement_svgEight.style.fill ="#ffb700";
        }
        input_SliderThree_boxEight.textContent = currentValue;

    });
});
/*-----------------------------------------------------------nine----------------------------------------------------*/
const incrementDecrementNine_SliderThree = document.querySelectorAll('.incrementDecrementNine_SliderThree');

incrementDecrementNine_SliderThree.forEach(button => {
    const input_SliderThree_boxNine = document.getElementById("input_SliderThree_boxNine");
    button.addEventListener('click', () => {

        let increment_decrement_svgNine = document.getElementById("increment_decrement_svgNine");
        let currentValue = parseInt(input_SliderThree_boxNine.textContent);

        if (button.classList.contains("liked")) {
            currentValue -= 1;
            button.classList.remove('liked');
            increment_decrement_svgNine.classList.remove('increment_decrement_svgNine');
            increment_decrement_svgNine.style.fill ="#76607A";
        } else {
            currentValue += 1;
            button.classList.add('liked');
            increment_decrement_svgNine.classList.add('increment_decrement_svgNine');
            increment_decrement_svgNine.style.fill ="#ffb700";
        }
        input_SliderThree_boxNine.textContent = currentValue;

    });
});