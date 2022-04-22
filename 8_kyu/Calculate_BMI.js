function bmi(weight, height) {
    let result = weight / (height * height);
    if (result <= 18.5) {
        return "Underweight"
    } else if (result <= 25.00 && result > 18.5) {
        return "Normal"
    } else if (result <= 30.00 && result > 25) {
        return "Overweight"
    } else if (result > 30) {
        return "Obese"
    }
    return result;
}


console.log(bmi(80, 1.80))//, "Normal");
