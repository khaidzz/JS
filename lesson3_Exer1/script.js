document.getElementById("checkButton").addEventListener("click", function() {
    const number = Number(document.getElementById("numberInput").value);
    let message;
    if (isNaN(number)) {
        message = "有効な数を入力してください。";
    } else if (number % 2 === 0) {
        message = "偶数です。";
    } else {
        message = "奇数です。";
    }
    document.getElementById("resultMessage").textContent = message;
});
