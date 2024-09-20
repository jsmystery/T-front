"use strict";
exports.__esModule = true;
var balance_png_1 = require("@/assets/images/icons/balance.png");
var city_png_1 = require("@/assets/images/icons/city.png");
var more_png_1 = require("@/assets/images/icons/more.png");
var package_png_1 = require("@/assets/images/icons/package.png");
var phone_black_png_1 = require("@/assets/images/icons/phone-black.png");
var reviews_png_1 = require("@/assets/images/icons/reviews.png");
var subscribers_png_1 = require("@/assets/images/icons/subscribers.png");
var telegram_blue_png_1 = require("@/assets/images/icons/telegram-blue.png");
var whatsapp_png_1 = require("@/assets/images/icons/whatsapp.png");
var Picture_1 = require("@/components/ui/common/picture/Picture");
var List_1 = require("@/components/ui/elements/list/List");
var Logout_1 = require("@/components/ui/elements/logout/Logout");
var TopUp_1 = require("@/components/ui/elements/topUp/TopUp");
var url_constants_1 = require("@/constants/url.constants");
var format_number_util_1 = require("@/utils/formats/format-number.util");
var link_1 = require("next/link");
var AccountSidebar_module_scss_1 = require("./AccountSidebar.module.scss");
var AccountSidebar = function (_a) {
    var brand = _a.brand, balance = _a.balance;
    var getContactItems = function (brand) {
        var items = [
            {
                label: (React.createElement(link_1["default"], { className: AccountSidebar_module_scss_1["default"].contact, href: "" },
                    React.createElement(Picture_1["default"], { src: phone_black_png_1["default"].src, alt: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D" }),
                    brand.phone))
            },
        ];
        if (brand.whatsapp) {
            items.push({
                label: (React.createElement(link_1["default"], { className: AccountSidebar_module_scss_1["default"].contact, href: "" },
                    React.createElement(Picture_1["default"], { src: whatsapp_png_1["default"].src, alt: "Whatsapp" }),
                    brand.whatsapp))
            });
        }
        if (brand.telegram) {
            items.push({
                label: (React.createElement(link_1["default"], { className: AccountSidebar_module_scss_1["default"].contact, href: "" },
                    React.createElement(Picture_1["default"], { src: telegram_blue_png_1["default"].src, alt: "Telegram" }),
                    brand.telegram))
            });
        }
        return items;
    };
    return (React.createElement("aside", { className: AccountSidebar_module_scss_1["default"].sidebar },
        React.createElement("div", { className: AccountSidebar_module_scss_1["default"].infoContainer },
            React.createElement("div", { className: AccountSidebar_module_scss_1["default"].info },
                React.createElement("div", { className: AccountSidebar_module_scss_1["default"].logo },
                    React.createElement(Picture_1["default"], { src: brand.logoPath, alt: brand.name })),
                React.createElement("div", { className: AccountSidebar_module_scss_1["default"].about },
                    React.createElement("div", { className: AccountSidebar_module_scss_1["default"].heading },
                        React.createElement("h1", { className: AccountSidebar_module_scss_1["default"].name }, brand.name),
                        React.createElement("div", { className: AccountSidebar_module_scss_1["default"].city },
                            React.createElement(Picture_1["default"], { src: city_png_1["default"].src, alt: brand.city }),
                            brand.city)),
                    React.createElement(List_1["default"], { items: [
                            {
                                label: (React.createElement(React.Fragment, null,
                                    "\u041D\u0430 \u0441\u0430\u0439\u0442\u0435 \u0441 ",
                                    React.createElement("strong", null, brand.createdAt)))
                            },
                            {
                                label: (React.createElement(React.Fragment, null,
                                    "\u0420\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u043E \u0442\u043E\u0432\u0430\u0440\u043E\u0432:",
                                    ' ',
                                    React.createElement("span", null, format_number_util_1.formatNumber(brand.postedCount))))
                            },
                            {
                                label: brand.email
                            },
                        ], listClassName: AccountSidebar_module_scss_1["default"].terms, itemClassName: AccountSidebar_module_scss_1["default"].term }),
                    React.createElement(List_1["default"], { items: getContactItems(brand), listClassName: AccountSidebar_module_scss_1["default"].contacts, buttonClassName: AccountSidebar_module_scss_1["default"].contact }),
                    React.createElement(link_1["default"], { className: AccountSidebar_module_scss_1["default"].edit, href: url_constants_1.USER_PAGES.ACCOUNT_EDIT }, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435")))),
        React.createElement("div", { className: AccountSidebar_module_scss_1["default"].boxContainer },
            React.createElement("div", { className: AccountSidebar_module_scss_1["default"].box },
                React.createElement("div", { className: AccountSidebar_module_scss_1["default"].balance },
                    React.createElement("div", { className: AccountSidebar_module_scss_1["default"].money },
                        React.createElement(Picture_1["default"], { src: balance_png_1["default"].src, alt: "\u0411\u0430\u043B\u0430\u043D\u0441" }),
                        React.createElement("span", null, "\u0411\u0430\u043B\u0430\u043D\u0441:"),
                        React.createElement("strong", null,
                            format_number_util_1.formatNumber(balance),
                            " \u0440\u0443\u0431.")),
                    React.createElement(TopUp_1["default"], { className: AccountSidebar_module_scss_1["default"].topUp },
                        React.createElement("span", null, "+"),
                        " \u041F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0431\u0430\u043B\u0430\u043D\u0441")),
                React.createElement(List_1["default"], { items: [
                        {
                            label: (React.createElement(React.Fragment, null,
                                React.createElement(Picture_1["default"], { src: package_png_1["default"].src, alt: "\u0422\u043E\u0432\u0430\u0440\u044B" }),
                                React.createElement("span", null, "\u041C\u043E\u0438 \u0442\u043E\u0432\u0430\u0440\u044B:"),
                                React.createElement("strong", null, format_number_util_1.formatNumber(brand.postedCount))))
                        },
                        {
                            label: (React.createElement(React.Fragment, null,
                                React.createElement(Picture_1["default"], { src: subscribers_png_1["default"].src, alt: "\u041F\u043E\u0434\u043F\u0438\u0441\u0447\u0438\u043A\u0438" }),
                                React.createElement("span", null, "\u041C\u043E\u0438 \u043F\u043E\u0434\u043F\u0438\u0441\u0447\u0438\u043A\u0438:"),
                                React.createElement("strong", null, format_number_util_1.formatNumber(brand.subscribers.length)),
                                React.createElement("button", { className: AccountSidebar_module_scss_1["default"].more },
                                    React.createElement(Picture_1["default"], { src: more_png_1["default"].src, alt: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F" }))))
                        },
                        {
                            label: (React.createElement(React.Fragment, null,
                                React.createElement(Picture_1["default"], { src: reviews_png_1["default"].src, alt: "\u041E\u0442\u0437\u044B\u0432\u044B" }),
                                "\u041C\u043E\u0438 \u043E\u0442\u0437\u044B\u0432\u044B")),
                            href: url_constants_1.PUBLIC_PAGES.BRAND_REVIEWS(brand.id)
                        },
                    ], listClassName: AccountSidebar_module_scss_1["default"].list, itemClassName: AccountSidebar_module_scss_1["default"].item, buttonClassName: AccountSidebar_module_scss_1["default"].link }),
                React.createElement(Logout_1["default"], { className: AccountSidebar_module_scss_1["default"].logout }, "\u0412\u044B\u0439\u0442\u0438 \u0438\u0437 \u043F\u0440\u043E\u0444\u0438\u043B\u044F")))));
};
exports["default"] = AccountSidebar;
