// static/script/index.js

$(document).ready(() => {
    // 현재 위치
    let now = "main";

    // 타이틀
    const TITLE = "   _____                      _      _____  _____   _____ \n  / ____|                    | |    |  __ \\|  __ \\ / ____|\n | |     ___  _ __  ___  ___ | | ___| |__) | |__) | |  __ \n | |    / _ \\| '_ \\/ __|/ _ \\| |/ _ \\  _  /|  ___/| | |_ |\n | |___| (_) | | | \\__ \\ (_) | |  __/ | \\ \\| |    | |__| |\n  \\_____\\___/|_| |_|___/\\___/|_|\\___|_|  \\_\\_|     \\_____|\n";
    $(".main-title").append($("<pre>").addClass("font").text(TITLE));

    // 메인 버튼
    $(".main-button").hover(function () {
        const mainButton = $(".main-button");

        mainButton.map((i, element) => {
            const TEXT = $(element).attr("data-text");

            $(element).text(TEXT);
        });

        const TEXT = $(this).attr("data-text");

        $(this).text(`▸ ${TEXT} ◂`);

        gameState.main.menu = $(this).index(".main-button");
    }, function () {
        const mainButton = $(".main-button");

        mainButton.map((i, element) => {
            const TEXT = $(element).attr("data-text");

            $(element).text(TEXT);
        });

        const TEXT = $(this).attr("data-text");

        $(this).text(TEXT);
    });

    // 키보드 입력
    $(document).keydown(function (event) {
        // 메인 메뉴
        if(gameState.location === "main") {
            switch(event.key) {
                case "ArrowUp":
                    mainMenuSelect("up");
                    break;

                case "ArrowDown":
                    mainMenuSelect("down");
                    break;
            }
        }
    })
});

// 메인 메뉴 위치 조정
const mainMenuSelect = (arrow) => {
    switch(arrow) {
        case "up":
            if(gameState.main.menu !== 0) 
                gameState.main.menu -= 1;
            break;

        case "down":
            if(gameState.main.menu !== 2)
                gameState.main.menu += 1;
            break;
    }

    const mainButton = $(".main-button");

    mainButton.map((i, element) => {
        const TEXT = $(element).attr("data-text");

        $(element).text(TEXT);
    });

    const TEXT2 = $(mainButton[gameState.main.menu]).attr("data-text");

    $(mainButton[gameState.main.menu]).text(`▸ ${TEXT2} ◂`);
}