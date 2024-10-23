"use strict";
exports.__esModule = true;
// Users.tsx
var react_1 = require("react");
var Users = function () {
    return (react_1["default"].createElement("div", { className: "p-4" },
        react_1["default"].createElement("h1", { className: "text-2xl font-bold mb-4" }, "Users List"),
        react_1["default"].createElement("ul", { className: "list-disc pl-5" },
            react_1["default"].createElement("li", null, "User 1"),
            react_1["default"].createElement("li", null, "User 2"),
            react_1["default"].createElement("li", null, "User 3"))));
};
exports["default"] = Users;
