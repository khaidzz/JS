document.getElementById("fortuneButton").addEventListener("click", function() {
    const fortunes = ["大吉", "中吉", "小吉", "凶"];
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const fortune = fortunes[randomIndex];
    document.getElementById("fortuneMessage").textContent = fortune;
});
