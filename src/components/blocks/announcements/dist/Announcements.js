'use client';
"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var output_1 = require("@/__generated__/output");
var sort_png_1 = require("@/assets/images/icons/sort.png");
var AnnouncementCard_1 = require("@/components/parts/announcement-card/AnnouncementCard");
var Check_1 = require("@/components/ui/elements/check/Check");
var Filter_1 = require("@/components/ui/elements/filters/Filter");
var details_constants_1 = require("@/constants/details.constants");
var useAnnouncements_hook_1 = require("@/hooks/queries/product/useAnnouncements.hook");
var clsx_1 = require("clsx");
var react_1 = require("react");
var Announcements_module_scss_1 = require("./Announcements.module.scss");
var AnnouncementSearch_1 = require("./search/AnnouncementSearch");
var Announcements = function (_a) {
    var _b;
    var tariffs = _a.tariffs, setBalance = _a.setBalance;
    var _c = useAnnouncements_hook_1.useAnnouncements({
        perPage: 15,
        page: 1,
        sort: output_1.Sort.Desc
    }, setBalance), toggle = _c.toggle, checked = _c.checked, setChecked = _c.setChecked, scrollRef = _c.scrollRef, 
    // announcements,
    initialAnnouncements = _c.announcements, error = _c.error, searchTerm = _c.searchTerm, handleSearch = _c.handleSearch, placeOrder = _c.placeOrder;
    var _d = react_1.useState(initialAnnouncements), announcements = _d[0], setAnnouncements = _d[1]; // Highlight: UseState to manage announcements reactively
    react_1.useEffect(function () {
        setAnnouncements(initialAnnouncements);
    }, [initialAnnouncements]);
    var onDeleteAnnouncementHandler = function (id) {
        setAnnouncements(function (prev) { return prev.filter(function (announcement) { return announcement.id !== id; }); });
    };
    if (error)
        return null;
    return (React.createElement("div", { className: Announcements_module_scss_1["default"].wrapper },
        React.createElement("div", { className: Announcements_module_scss_1["default"].top },
            React.createElement("div", { className: Announcements_module_scss_1["default"].select },
                React.createElement(Check_1["default"], { isChecked: announcements.length === 0
                        ? false
                        : announcements.length === checked.length, toggle: function () {
                        return setChecked(announcements.length === checked.length
                            ? []
                            : __spreadArrays(announcements.map(function (a) { return a.id; })));
                    } }),
                "\u0412\u044B\u0431\u0440\u0430\u0442\u044C ",
                checked.length,
                " \u0438\u0437 ",
                announcements.length),
            React.createElement("div", { className: Announcements_module_scss_1["default"].filter },
                React.createElement("span", { className: Announcements_module_scss_1["default"].label }, "\u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430"),
                React.createElement(Filter_1["default"], { options: ['01'], image: {
                        src: sort_png_1["default"].src,
                        alt: 'Сортировка'
                    }, label: "\u041F\u043E \u0434\u043D\u044F\u043C \u043D\u0430 " + details_constants_1.SITE_NAME })),
            React.createElement(AnnouncementSearch_1["default"], { searchTerm: searchTerm, handleSearch: handleSearch })),
        React.createElement("div", { className: Announcements_module_scss_1["default"].fill }, announcements.length > 0 && (React.createElement("div", { ref: scrollRef, className: clsx_1["default"](Announcements_module_scss_1["default"].announcements, (_b = {},
                _b[Announcements_module_scss_1["default"].big] = announcements.length > 3,
                _b)) }, announcements.map(function (announcement) { return (React.createElement("div", { key: announcement.id, className: Announcements_module_scss_1["default"].announcement },
            React.createElement("div", { className: Announcements_module_scss_1["default"].pick },
                React.createElement(Check_1["default"], { isChecked: checked.includes(announcement.id), toggle: function () { return toggle(announcement.id); } })),
            React.createElement(AnnouncementCard_1["default"], { key: announcement.id, placeOrder: placeOrder, tariffs: tariffs, announcement: announcement, onDeleteAnnouncement: function () { return onDeleteAnnouncementHandler(announcement.id); } }))); }))))));
};
exports["default"] = Announcements;
