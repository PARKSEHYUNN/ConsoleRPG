// static/script/index.js

$(document).ready(() => {
    // 메인 메뉴 관리
    mainMenuManager();

    // 로그인 페이지 관리
    loginPageManager();
});

// 메인 메뉴 관리
const mainMenuManager = () => {
    // 모든 컨테이너 숨기기
    $(".container").hide();

    // 메인 컨테이너 보이기
    $("#main-container").show();

    // 타이틀
    const TITLE = "   _____                      _      _____  _____   _____ \n  / ____|                    | |    |  __ \\|  __ \\ / ____|\n | |     ___  _ __  ___  ___ | | ___| |__) | |__) | |  __ \n | |    / _ \\| '_ \\/ __|/ _ \\| |/ _ \\  _  /|  ___/| | |_ |\n | |___| (_) | | | \\__ \\ (_) | |  __/ | \\ \\| |    | |__| |\n  \\_____\\___/|_| |_|___/\\___/|_|\\___|_|  \\_\\_|     \\_____|\n";
    $(".main-title").append($("<pre>").addClass("font").text(TITLE));
    
    const SUB_TITLE = " __   __          ___          \n \\ \\ / /__ _ _   |   \\ _____ __\n  \\ V / -_) '_|  | |) / -_) V /\n   \\_/\\___|_|(_) |___/\\___|\\_/ \n                               ";
    $(".main-sub-title").append($("<pre>").addClass("font").text(SUB_TITLE));
    
    // 키보드 조작
    let nowMenuSelect = gameState.main.nowMenuSelect;

    $(document).keydown((event) => {
        if(event.key === "ArrowUp" && nowMenuSelect !== 0) 
            menuSelect(-- nowMenuSelect);
        else if(event.key === "ArrowDown" && nowMenuSelect !== 2)
            menuSelect(++ nowMenuSelect);
        else if(event.key === "Enter")
            movePage($($(".main-button")[nowMenuSelect]).attr("data-page"));
    });

    // 메인 메뉴 선택 마우스 조작
    $(".main-button").hover(function () {
        nowMenuSelect = $(this).index(".main-button");
        menuSelect(nowMenuSelect);
    });

    $(".main-button").click(function () {
        movePage($(this).attr("data-page"));
    });
};

// 메인 메뉴 선택
const menuSelect = (select) => {
    // 전체 버튼 초기화
    $(".main-button").map((i, element) => {
        $(element).removeClass("active");
        $(element).children("p").removeClass("active");
        //$(element).text($(element).attr("data-text"));
    });

    // 선택 버튼 활성화
    $($(".main-button")[select]).addClass("active");
    $($(".main-button")[select]).children("p").addClass("active");
    //$($(".main-button")[select]).text(`▸ ${$($(".main-button")[select]).attr("data-text")} ◂`);
}

// 로그인 페이지 관리
const loginPageManager = () => {
    // 타이틀
    const TITLE = "   _____                      _      _____  _____   _____ \n  / ____|                    | |    |  __ \\|  __ \\ / ____|\n | |     ___  _ __  ___  ___ | | ___| |__) | |__) | |  __ \n | |    / _ \\| '_ \\/ __|/ _ \\| |/ _ \\  _  /|  ___/| | |_ |\n | |___| (_) | | | \\__ \\ (_) | |  __/ | \\ \\| |    | |__| |\n  \\_____\\___/|_| |_|___/\\___/|_|\\___|_|  \\_\\_|     \\_____|\n";
    $(".login-title").append($("<pre>").addClass("font").text(TITLE));

    const SUB_TITLE = "  _              _      \n | |   ___  __ _(_)_ _  \n | |__/ _ \\/ _` | | ' \\ \n |____\\___/\\__, |_|_||_|\n           |___/        ";
    $(".login-sub-title").append($("<pre>").addClass("font").text(SUB_TITLE));
    
}