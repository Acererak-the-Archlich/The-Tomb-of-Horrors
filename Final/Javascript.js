function area(π, num1) {
    return π * num1 ** 2;
}

const π = '3.14159265359';

function calculate() {
    let Radius = document.getElementById('num1').value;
    const result = document.getElementById("result");
    Radius = parseInt(Radius);

    if (num1 == "") {
        alert("Enter radius to Calculate");
    }
    console.log(area(π, Radius))
    result.innerHTML = area(π, Radius);
}

