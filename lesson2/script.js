document.getElementById("greetButton").addEventListener("click", function () {
    // 入力された名前を変数に入れる
    let name = document.getElementById("nameInput").value;
    let age = document.getElementById("ageInput").value;

    // あいさつメッセージを作る
    let message = name + "さん、こんにちは！" + name + "さんは" +age+"歳ですね";

    // 画面に表示する
    document.getElementById("message").textContent = message;
});