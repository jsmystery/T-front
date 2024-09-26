"use strict";
exports.__esModule = true;
var city_png_1 = require("@/assets/images/icons/city.png");
var Container_1 = require("@/components/ui/common/container/Container");
var Picture_1 = require("@/components/ui/common/picture/Picture");
var Section_1 = require("@/components/ui/common/section/Section");
var Contact_1 = require("@/components/ui/elements/contact/Contact");
var List_1 = require("@/components/ui/elements/list/List");
var lucide_react_1 = require("lucide-react");
var BrandAbout_module_scss_1 = require("./BrandAbout.module.scss");
var BrandAbout = function (_a) {
    var brand = _a.brand;
    return (React.createElement(Section_1["default"], { className: BrandAbout_module_scss_1["default"].section },
        React.createElement(Container_1["default"], null,
            React.createElement("div", { className: BrandAbout_module_scss_1["default"].wrapper },
                React.createElement("div", { className: BrandAbout_module_scss_1["default"].box },
                    React.createElement("div", { className: BrandAbout_module_scss_1["default"].preview },
                        React.createElement(Picture_1["default"], { src: brand.logoPath, alt: brand.name })),
                    React.createElement("div", { className: BrandAbout_module_scss_1["default"].about },
                        React.createElement("div", { className: BrandAbout_module_scss_1["default"].top },
                            React.createElement("h1", { className: BrandAbout_module_scss_1["default"].name }, brand.name),
                            React.createElement(List_1["default"], { items: [
                                    {
                                        label: brand.city,
                                        image: {
                                            src: city_png_1["default"].src,
                                            width: city_png_1["default"].width,
                                            height: city_png_1["default"].height,
                                            alt: 'Город'
                                        }
                                    },
                                    {
                                        label: (React.createElement(React.Fragment, null,
                                            "\u041D\u0430 \u0441\u0430\u0439\u0442\u0435 \u0441 ",
                                            React.createElement("strong", null, brand.createdAt)))
                                    },
                                    {
                                        label: (React.createElement(React.Fragment, null,
                                            "\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043E",
                                            React.createElement("span", null,
                                                brand.postedCount,
                                                " \u0442\u043E\u0432\u0430\u0440\u043E\u0432")))
                                    },
                                ], listClassName: BrandAbout_module_scss_1["default"].terms, itemClassName: BrandAbout_module_scss_1["default"].term })),
                        React.createElement("div", { className: BrandAbout_module_scss_1["default"].center },
                            React.createElement("div", { className: BrandAbout_module_scss_1["default"].rating },
                                React.createElement(lucide_react_1.Star, null),
                                brand.rating,
                                " \u0441\u0440\u0435\u0434\u043D\u0438\u0439 \u0440\u0435\u0439\u0442\u0438\u043D\u0433 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0430"),
                            React.createElement("div", { className: BrandAbout_module_scss_1["default"].postedMobile },
                                "\u041E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D\u043E",
                                React.createElement("span", null,
                                    brand.postedCount,
                                    " \u0442\u043E\u0432\u0430\u0440\u043E\u0432"))),
                        React.createElement(Contact_1["default"], { isBrandOwner: brand.isBrandOwner, isSubscribed: brand.isSubscribed, brandId: brand.id, phone: brand.phone, whatsapp: brand.whatsapp, telegram: brand.telegram }))),
                React.createElement("div", { className: BrandAbout_module_scss_1["default"].info },
                    React.createElement("h2", { className: BrandAbout_module_scss_1["default"].title }, "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043E \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u0435"),
                    React.createElement("div", { className: BrandAbout_module_scss_1["default"].text, dangerouslySetInnerHTML: { __html: brand.about } }))))));
};
exports["default"] = BrandAbout;
