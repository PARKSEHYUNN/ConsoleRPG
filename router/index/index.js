// router/index/index.js

// 모듈 선언
const router = require("express").Router();

/**
 * @path {GET} http://0.0.0.0:80/
 * @description 메인 페이지
 */
router.get("/", (req, res) => res.render("index"));

module.exports = router;