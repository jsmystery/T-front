'use client';
"use strict";
exports.__esModule = true;
var Announcements_1 = require("@/components/blocks/announcements/Announcements");
var Container_1 = require("@/components/ui/common/container/Container");
var Section_1 = require("@/components/ui/common/section/Section");
var AccountSidebar_1 = require("@/components/ui/templates/account/sidebar/AccountSidebar");
var react_1 = require("react");
var Account_module_scss_1 = require("./Account.module.scss");
var Announcements_module_scss_1 = require("@/components/blocks/announcements/Announcements.module.scss");
var plus_png_1 = require("@/assets/images/icons/plus.png");
var Picture_1 = require("@/components/ui/common/picture/Picture");
var Account = function (_a) {
    var searchParams = _a.searchParams, brand = _a.brand, tariffs = _a.tariffs, categories = _a.categories;
    var _b = react_1.useState((brand === null || brand === void 0 ? void 0 : brand.balance) || 0), balance = _b[0], setBalance = _b[1];
    var _c = react_1.useState((brand === null || brand === void 0 ? void 0 : brand.name) || ''), brandName = _c[0], setBrandName = _c[1];
    var _d = react_1.useState((brand === null || brand === void 0 ? void 0 : brand.city) || ''), city = _d[0], setCity = _d[1];
    var _e = react_1.useState(''), phone = _e[0], setPhone = _e[1];
    var _f = react_1.useState(''), telegram = _f[0], setTelegram = _f[1];
    var _g = react_1.useState(''), whatsapp = _g[0], setWhatsapp = _g[1];
    var _h = react_1.useState(''), email = _h[0], setEmail = _h[1];
    var _j = react_1.useState(''), password = _j[0], setPassword = _j[1];
    var isEdit = searchParams && searchParams.type === 'edit';
    if (!brand.id) {
        return (React.createElement(Section_1["default"], { className: Account_module_scss_1["default"].section },
            React.createElement(Container_1["default"], null,
                React.createElement("div", null, "\u0411\u0440\u0435\u043D\u0434 \u0435\u0449\u0435 \u043D\u0435 \u0441\u043E\u0437\u0434\u0430\u043D"))));
    }
    var handleSave = function () {
        // Logic to save the updated information goes here
        console.log('Saved data:', {
            brandName: brandName,
            city: city,
            phone: phone,
            telegram: telegram,
            whatsapp: whatsapp,
            email: email,
            password: password
        });
    };
    return (React.createElement(Section_1["default"], { className: Account_module_scss_1["default"].section },
        React.createElement(Container_1["default"], null,
            React.createElement("div", { className: Account_module_scss_1["default"].wrapper }, isEdit ? (React.createElement("div", { className: Account_module_scss_1["default"].editFormWrap },
                React.createElement("div", { className: Account_module_scss_1["default"].inputWrap },
                    React.createElement("label", { className: Announcements_module_scss_1["default"].label }, "Brand Name:"),
                    React.createElement("input", { className: Account_module_scss_1["default"].inputEdit, type: "text", value: brandName, onChange: function (e) { return setBrandName(e.target.value); } })),
                React.createElement("div", { className: Account_module_scss_1["default"].inputWrap },
                    React.createElement("label", { className: Announcements_module_scss_1["default"].label }, "City:"),
                    React.createElement("input", { className: Account_module_scss_1["default"].inputEdit, type: "text", value: city, onChange: function (e) { return setCity(e.target.value); } })),
                React.createElement("div", { className: Account_module_scss_1["default"].inputWrap },
                    React.createElement("label", { className: Announcements_module_scss_1["default"].label }, "Phone:"),
                    React.createElement("input", { className: Account_module_scss_1["default"].inputEdit, type: "text", value: phone, onChange: function (e) { return setPhone(e.target.value); } })),
                React.createElement("div", { className: Account_module_scss_1["default"].inputWrap },
                    React.createElement("label", { className: Announcements_module_scss_1["default"].label }, "Telegram:"),
                    React.createElement("input", { className: Account_module_scss_1["default"].inputEdit, type: "text", value: telegram, onChange: function (e) { return setTelegram(e.target.value); } })),
                React.createElement("div", { className: Account_module_scss_1["default"].inputWrap },
                    React.createElement("label", { className: Announcements_module_scss_1["default"].label }, "WhatsApp:"),
                    React.createElement("input", { className: Account_module_scss_1["default"].inputEdit, type: "text", value: whatsapp, onChange: function (e) { return setWhatsapp(e.target.value); } })),
                React.createElement("div", { className: Account_module_scss_1["default"].inputWrap },
                    React.createElement("label", { className: Announcements_module_scss_1["default"].label }, "Email:"),
                    React.createElement("input", { className: Account_module_scss_1["default"].inputEdit, type: "email", value: email, onChange: function (e) { return setEmail(e.target.value); } })),
                React.createElement("div", { className: Account_module_scss_1["default"].inputWrap },
                    React.createElement("label", { className: Announcements_module_scss_1["default"].label }, "Password:"),
                    React.createElement("input", { className: Account_module_scss_1["default"].inputEdit, type: "password", value: password, onChange: function (e) { return setPassword(e.target.value); } })),
                React.createElement("div", { className: Account_module_scss_1["default"].saveEditWrap },
                    React.createElement("button", { className: Account_module_scss_1["default"].newad, onClick: handleSave }, "Save")))) : (React.createElement(React.Fragment, null,
                React.createElement(AccountSidebar_1["default"], { balance: balance, brand: brand }),
                React.createElement(Announcements_1["default"], { setBalance: setBalance, tariffs: tariffs })))),
            !isEdit && (React.createElement("div", { className: Account_module_scss_1["default"].newAdWrap },
                React.createElement("button", { className: Account_module_scss_1["default"].newad },
                    React.createElement(Picture_1["default"], { src: plus_png_1["default"].src, alt: "\u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0442\u043E\u0432\u0430\u0440" }),
                    React.createElement("span", null, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435")))))));
};
exports["default"] = Account;
