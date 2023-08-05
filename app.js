const container = document.querySelector('.container'),
    weightInput = document.querySelector('#weight'),
    heightInput = document.querySelector('#height'),
    weight = document.querySelector('.weight'),
    height = document.querySelector('.height'),
    result = document.querySelector('.result'),
    category = document.querySelector('.category')
const bmiCalculator = () => {
    let weightInputValue = weightInput.value
    let heightInputValue = heightInput.value

    weight.innerHTML = `${weightInputValue} kg`
    height.innerHTML = `${heightInputValue} cm`

    let bmi = (weightInputValue / Math.pow(heightInputValue / 100, 2)).toFixed(1)
    result.innerHTML = bmi
    if (bmi < 18.5) {
        category.innerHTML = 'Under Weight'
        result.style.color = '#ffc44d'
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category.innerHTML = 'Normal Weight'
        result.style.color = '#0be881'
    } else if (bmi >= 25 && bmi < 29.9) {
        category.innerHTML = 'Over Weight'
        result.style.color = '#ff884d'
    } else {
        category.innerHTML = 'Obese'
        result.style.color = '#ff5e4d'
    }
}


weightInput.addEventListener('input', bmiCalculator)
heightInput.addEventListener('input', bmiCalculator)