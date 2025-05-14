// static/script/state.js

const gameState = {
    location: "main",
    main: {
        nowMenuSelect: 0
    }
};

// 페이지 이동
const movePage = (page) => {
    // 모든 컨테이너 숨기기
    $(".container").hide();

    // 보이고 싶은 컨테이너 보이기
    $(`#${page}-container`).show();
};