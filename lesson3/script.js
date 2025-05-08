document.getElementById("checkButton").addEventListener("click", function () {
    // 入力された点数を取得（文字から数値へ変換）
    let score = Number(document.getElementById("scoreInput").value);

    let resultText = "";
    if (isNaN(score) || score === 0) {
        resultText = "点数を入力してください"
    }　else

    // 条件分岐
    if(score >=90) {
        resultText ="特別合格！素晴らしい！";
    } else
    if (score >= 80) {
        resultText = "合格！おめでとう！🎉";
    } else {
        resultText = "残念...不合格です。";
    }

    // 結果を表示
    document.getElementById("result").textContent = resultText;
});

