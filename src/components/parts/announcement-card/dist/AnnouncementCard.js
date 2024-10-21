"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var output_1 = require("@/__generated__/output");
var city_png_1 = require("@/assets/images/icons/city.png");
var Container_1 = require("@/components/ui/common/container/Container");
var Section_1 = require("@/components/ui/common/section/Section");
var eye_png_1 = require("@/assets/images/icons/eye.png");
var fill_gray_png_1 = require("@/assets/images/icons/fill-gray.png");
var fill_png_1 = require("@/assets/images/icons/fill.png");
var question_png_1 = require("@/assets/images/icons/question.png");
var raise_gray_png_1 = require("@/assets/images/icons/raise-gray.png");
var raise_png_1 = require("@/assets/images/icons/raise.png");
var ruble_black_png_1 = require("@/assets/images/icons/ruble-black.png");
var ruble_green_png_1 = require("@/assets/images/icons/ruble-green.png");
var vip_gray_png_1 = require("@/assets/images/icons/vip-gray.png");
var vip_png_1 = require("@/assets/images/icons/vip.png");
var Picture_1 = require("@/components/ui/common/picture/Picture");
var List_1 = require("@/components/ui/elements/list/List");
var Modal_1 = require("@/components/ui/templates/modal/Modal");
var format_number_util_1 = require("@/utils/formats/format-number.util");
var clsx_1 = require("clsx");
var lucide_react_1 = require("lucide-react");
var react_1 = require("react");
var react_hot_toast_1 = require("react-hot-toast");
var AnnouncementCard_module_scss_1 = require("./AnnouncementCard.module.scss");
var navigation_1 = require("next/navigation");
var AnnouncementCard = function (_a) {
    var _b;
    var placeOrder = _a.placeOrder, tariffs = _a.tariffs, announcement = _a.announcement, className = _a.className, onDeleteAnnouncement = _a.onDeleteAnnouncement, onEditAnnouncement = _a.onEditAnnouncement;
    var router = navigation_1.useRouter();
    var _c = react_1.useState({
        isShow: false,
        type: output_1.TariffType.Top
    }), _d = _c[0], isShow = _d.isShow, type = _d.type, setModalState = _c[1];
    var _e = react_1.useState(false), editItem = _e[0], setEditItem = _e[1]; // Added state for editItem
    var currentTariff = tariffs.find(function (tariff) { return tariff.type === type; });
    var isTop = type === output_1.TariffType.Top;
    var isFill = type === output_1.TariffType.Fill;
    var _f = react_1.useState(announcement.name), name = _f[0], setName = _f[1]; // Name state
    var _g = react_1.useState(announcement.about), about = _g[0], setAbout = _g[1]; // About state
    var _h = react_1.useState(announcement.maxPrice), productPrice = _h[0], setProductPrice = _h[1];
    var _j = react_1.useState(1), productMinQuantity = _j[0], setProductMinQuantity = _j[1];
    var UpdateProductMutate = output_1.useUpdateProductMutation({
        fetchPolicy: 'no-cache',
        onError: function (_a) {
            var message = _a.message;
            react_hot_toast_1["default"].error(message);
        },
        onCompleted: function () {
            console.log('Product saved');
            react_hot_toast_1["default"].success("Изменения сохранены");
            onEditAnnouncement();
            setEditItem(false);
        }
    })[0];
    var handleEditItem = function () {
        if (!name || !about || !productPrice || !productMinQuantity) {
            react_hot_toast_1["default"].error("Пожалуйста, заполните все поля.");
            return;
        }
        UpdateProductMutate({
            variables: {
                id: announcement.id,
                data: {
                    name: name,
                    about: about,
                    price: productPrice,
                    minQuantity: productMinQuantity
                }
            }
        });
        ;
    };
    var deleteProductMutate = output_1.useDeleteProductMutation({
        fetchPolicy: 'no-cache',
        onError: function (_a) {
            var message = _a.message;
            react_hot_toast_1["default"].error(message);
        },
        onCompleted: function () {
            onDeleteAnnouncement();
        }
    })[0];
    var handleDelete = function () { return deleteProductMutate({
        variables: {
            id: announcement.id
        }
    }); };
    var handleEdit = function () { return setEditItem(true); };
    return (React.createElement(React.Fragment, null,
        !editItem && (React.createElement("div", { className: clsx_1["default"](AnnouncementCard_module_scss_1["default"].announcement, className && className) },
            React.createElement("div", { className: AnnouncementCard_module_scss_1["default"].fill },
                React.createElement("div", { className: AnnouncementCard_module_scss_1["default"].poster },
                    React.createElement(Picture_1["default"], { src: announcement.posterPath, alt: announcement.name })),
                React.createElement("div", { className: AnnouncementCard_module_scss_1["default"].box },
                    React.createElement(List_1["default"], { listClassName: AnnouncementCard_module_scss_1["default"].terms, itemClassName: AnnouncementCard_module_scss_1["default"].term, items: [
                            {
                                label: "\u0410\u0440\u0442\u0438\u043A\u0443\u043B: " + announcement.sku
                            },
                            {
                                label: announcement.createdAt
                            },
                            {
                                label: (React.createElement(React.Fragment, null,
                                    announcement.views,
                                    React.createElement(Picture_1["default"], { src: eye_png_1["default"].src, alt: "\u0413\u043B\u0430\u0437" })))
                            },
                        ] }),
                    React.createElement("h2", { className: AnnouncementCard_module_scss_1["default"].name }, announcement.name),
                    React.createElement("div", { className: clsx_1["default"](AnnouncementCard_module_scss_1["default"].price, (_b = {},
                            _b[AnnouncementCard_module_scss_1["default"].hot] = false,
                            _b)) },
                        announcement.maxPrice >= 1000000 ? (React.createElement(React.Fragment, null,
                            React.createElement("span", null, "\u041E\u0442"),
                            " ",
                            format_number_util_1.formatNumber(announcement.minPrice))) : (React.createElement(React.Fragment, null, announcement.minPrice === announcement.maxPrice
                            ? format_number_util_1.formatNumber(announcement.minPrice)
                            : format_number_util_1.formatNumber(announcement.minPrice) +
                                ' - ' +
                                format_number_util_1.formatNumber(announcement.maxPrice))),
                        React.createElement(Picture_1["default"], { src: true ? ruble_green_png_1["default"].src : ruble_black_png_1["default"].src, alt: "\u0420\u0443\u0431\u043B\u0438" })),
                    React.createElement("div", { className: AnnouncementCard_module_scss_1["default"].city },
                        React.createElement(Picture_1["default"], { src: city_png_1["default"].src, alt: "\u0413\u043E\u0440\u043E\u0434" }),
                        announcement.city),
                    React.createElement("div", { className: AnnouncementCard_module_scss_1["default"].editWrap },
                        React.createElement("button", { className: AnnouncementCard_module_scss_1["default"].editBtn, onClick: handleEdit },
                            " ",
                            "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C"),
                        React.createElement("button", { className: AnnouncementCard_module_scss_1["default"].delBtn, onClick: handleDelete }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"))),
                React.createElement("div", { className: AnnouncementCard_module_scss_1["default"].serviceWrap },
                    React.createElement("div", { className: AnnouncementCard_module_scss_1["default"].serviceBtnWrap },
                        React.createElement("button", { className: AnnouncementCard_module_scss_1["default"].editBtn },
                            React.createElement(Picture_1["default"], { src: raise_png_1["default"].src, alt: "\u041F\u043E\u0434\u043D\u044F\u0442\u044C" }),
                            "\u041F\u043E\u0434\u043D\u044F\u0442\u044C \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435"),
                        React.createElement(Picture_1["default"], { className: AnnouncementCard_module_scss_1["default"].hint, src: question_png_1["default"].src, alt: "\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430" })),
                    React.createElement("div", { className: AnnouncementCard_module_scss_1["default"].serviceBtnWrap },
                        React.createElement("button", { className: AnnouncementCard_module_scss_1["default"].delBtn },
                            React.createElement(Picture_1["default"], { src: fill_png_1["default"].src, alt: "\u0412\u044B\u0434\u0435\u043B\u0438\u0442\u044C" }),
                            "\u0412\u044B\u0434\u0435\u043B\u0438\u0442\u044C \u0446\u0432\u0435\u0442\u043E\u043C"),
                        React.createElement(Picture_1["default"], { className: AnnouncementCard_module_scss_1["default"].hint, src: question_png_1["default"].src, alt: "\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430" })),
                    React.createElement("div", { className: AnnouncementCard_module_scss_1["default"].serviceBtnWrap },
                        React.createElement("button", { className: AnnouncementCard_module_scss_1["default"].delBtn },
                            React.createElement(Picture_1["default"], { src: vip_png_1["default"].src, alt: "\u0420\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u0435" }),
                            "\u0420\u0430\u0437\u043C\u0435\u0449\u0435\u043D\u0438\u0435"),
                        React.createElement(Picture_1["default"], { className: AnnouncementCard_module_scss_1["default"].hint, src: question_png_1["default"].src, alt: "\u041F\u043E\u0434\u0441\u043A\u0430\u0437\u043A\u0430" })))),
            React.createElement("div", { className: AnnouncementCard_module_scss_1["default"].payments }, tariffs.map(function (tariff) {
                var _a;
                var isFill = tariff.type === output_1.TariffType.Fill;
                var isTop = tariff.type === output_1.TariffType.Top;
                var order = (_a = announcement.orders) === null || _a === void 0 ? void 0 : _a.find(function (_a) {
                    var type = _a.tariff.type;
                    return type === tariff.type;
                });
                var isActive = !(order === null || order === void 0 ? void 0 : order.expirationDate);
                var isLittleLeft = order === null || order === void 0 ? void 0 : order.isLittleLeft;
                return (React.createElement("div", { key: tariff.type, className: AnnouncementCard_module_scss_1["default"].payment },
                    React.createElement("button", { type: "button", className: clsx_1["default"](AnnouncementCard_module_scss_1["default"].pay, isActive ? AnnouncementCard_module_scss_1["default"].active : AnnouncementCard_module_scss_1["default"].payed, isLittleLeft && AnnouncementCard_module_scss_1["default"].left), onClick: function () {
                            return isActive &&
                                setModalState({
                                    isShow: true,
                                    type: tariff.type
                                });
                        } },
                        isLittleLeft && React.createElement(lucide_react_1.AlertCircle, null),
                        React.createElement(Picture_1["default"], { src: isActive
                                ? isTop
                                    ? raise_png_1["default"].src
                                    : isFill
                                        ? fill_png_1["default"].src
                                        : vip_png_1["default"].src
                                : isTop
                                    ? raise_gray_png_1["default"].src
                                    : isFill
                                        ? fill_gray_png_1["default"].src
                                        : vip_gray_png_1["default"].src, alt: "" }),
                        !isActive
                            ? "\u0414\u043E " + order.expirationDate
                            : isTop
                                ? 'Поднять объявление'
                                : isFill
                                    ? 'Выделить цветом'
                                    : 'VIP'),
                    React.createElement("div", { className: AnnouncementCard_module_scss_1["default"].info },
                        React.createElement(Picture_1["default"], { src: question_png_1["default"].src, alt: "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u043E" }),
                        tariff.description && (React.createElement("div", { className: AnnouncementCard_module_scss_1["default"].about },
                            React.createElement("div", { className: AnnouncementCard_module_scss_1["default"].description, dangerouslySetInnerHTML: { __html: tariff.description } }))))));
            })))),
        editItem && ( /* Added condition to check if editItem is true */React.createElement(Section_1["default"], { className: AnnouncementCard_module_scss_1["default"].section },
            React.createElement(Container_1["default"], null,
                React.createElement("div", { className: AnnouncementCard_module_scss_1["default"].editFormWrap },
                    React.createElement("div", null,
                        React.createElement("div", { className: AnnouncementCard_module_scss_1["default"].editHeader + " text-center" },
                            React.createElement("h2", null, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435")),
                        React.createElement("div", { className: AnnouncementCard_module_scss_1["default"].inputWrap },
                            React.createElement("label", { className: AnnouncementCard_module_scss_1["default"].label }, "\u0418\u043C\u044F \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430"),
                            React.createElement("input", { className: AnnouncementCard_module_scss_1["default"].inputEdit, type: "text", value: name, 
                                // onChange={(e) => setBrandName(e.target.value)}
                                onChange: function (e) { return setName(e.target.value); } })),
                        React.createElement("div", { className: AnnouncementCard_module_scss_1["default"].inputWrap },
                            React.createElement("label", { className: AnnouncementCard_module_scss_1["default"].label }, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u044F"),
                            React.createElement("textarea", { className: AnnouncementCard_module_scss_1["default"].inputEdit, value: about, onChange: function (e) { return setAbout(e.target.value); } })),
                        React.createElement("div", { className: AnnouncementCard_module_scss_1["default"].inputWrap },
                            React.createElement("label", { className: AnnouncementCard_module_scss_1["default"].label }, "\u0426\u0435\u043D\u0430"),
                            React.createElement("input", { className: AnnouncementCard_module_scss_1["default"].inputEdit, type: "number", value: productPrice, onChange: function (e) { return setProductPrice(Number(e.target.value)); } })),
                        React.createElement("div", { className: AnnouncementCard_module_scss_1["default"].inputWrap },
                            React.createElement("label", { className: AnnouncementCard_module_scss_1["default"].label }, "\u041C\u0438\u043D\u0438\u043C\u0443\u043C \u043D\u0430 \u0437\u0430\u043A\u0430\u0437"),
                            React.createElement("input", { className: AnnouncementCard_module_scss_1["default"].inputEdit, type: "number", value: productMinQuantity, onChange: function (e) { return setProductMinQuantity(Number(e.target.value)); } })),
                        React.createElement("div", { className: AnnouncementCard_module_scss_1["default"].saveEditWrap },
                            React.createElement("button", { className: AnnouncementCard_module_scss_1["default"].newad, onClick: handleEditItem },
                                React.createElement("span", { className: AnnouncementCard_module_scss_1["default"].editSaveBtn }, "\u0418\u0417\u041C\u0415\u041D\u0418\u0422\u042C \u041E\u0411\u042C\u042F\u0412\u041B\u0415\u041D\u0418\u0415")))))))),
        isShow && currentTariff && (React.createElement(Modal_1["default"], { heading: isTop ? 'Поднять объявление' : isFill ? 'Выделить цветом' : 'VIP', closeModal: function () {
                return setModalState(function (prev) { return (__assign(__assign({}, prev), { isShow: false })); });
            } },
            currentTariff.description && (React.createElement("div", { className: AnnouncementCard_module_scss_1["default"].modalDescription, dangerouslySetInnerHTML: { __html: currentTariff.description } })),
            React.createElement("button", { className: AnnouncementCard_module_scss_1["default"].buy, onClick: function () {
                    return placeOrder({
                        productId: announcement.id,
                        tariffType: currentTariff.type
                    }, currentTariff.price, function () {
                        return setModalState(function (prev) { return (__assign(__assign({}, prev), { isShow: false })); });
                    });
                } },
                "\u041A\u0443\u043F\u0438\u0442\u044C \u0437\u0430 ",
                currentTariff.price,
                " \u20BD")))));
};
exports["default"] = AnnouncementCard;
