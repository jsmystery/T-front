'use client';
"use strict";
exports.__esModule = true;
var output_1 = require("@/__generated__/output");
var Announcements_1 = require("@/components/blocks/announcements/Announcements");
var Container_1 = require("@/components/ui/common/container/Container");
var Section_1 = require("@/components/ui/common/section/Section");
var AccountSidebar_1 = require("@/components/ui/templates/account/sidebar/AccountSidebar");
var react_1 = require("react");
var Account_module_scss_1 = require("./Account.module.scss");
var react_hot_toast_1 = require("react-hot-toast");
var navigation_1 = require("next/navigation");
var plus_png_1 = require("@/assets/images/icons/plus.png");
var Picture_1 = require("@/components/ui/common/picture/Picture");
var Account = function (_a) {
    var searchParams = _a.searchParams, brand = _a.brand, tariffs = _a.tariffs, categories = _a.categories;
    var router = navigation_1.useRouter();
    var UpdateUserProfileMutate = output_1.useUpdateUserProfileMutation({
        fetchPolicy: 'no-cache',
        onError: function (_a) {
            var message = _a.message;
            react_hot_toast_1["default"].error(message);
        },
        onCompleted: function () {
            console.log('save profie');
            react_hot_toast_1["default"].success("Сохранено");
        }
    })[0];
    var UpdateBrandMutate = output_1.useUpdateBrandMutation({
        fetchPolicy: 'no-cache',
        onError: function (_a) {
            var message = _a.message;
            react_hot_toast_1["default"].error(message);
        },
        onCompleted: function () {
            console.log('Brand saved');
            react_hot_toast_1["default"].success("Бренд сохранен");
        }
    })[0];
    var CreateBrandMutate = output_1.useCreateBrandMutation({
        fetchPolicy: 'no-cache',
        onError: function (_a) {
            var message = _a.message;
            react_hot_toast_1["default"].error(message);
        },
        onCompleted: function () {
            console.log('Brand created');
            react_hot_toast_1["default"].success("Бренд создан");
            router.push('/');
        }
    })[0];
    var handleCreateProductComplete = function () {
        console.log('Product creating OOO');
        setCreateProductCompleteValue(true);
    };
    var CreateProductMutate = output_1.useCreateProductMutation({
        fetchPolicy: 'no-cache',
        onError: function (_a) {
            var message = _a.message;
            react_hot_toast_1["default"].error(message);
        },
        onCompleted: function () {
            console.log('Product created');
            react_hot_toast_1["default"].success("Продукт создан");
            // router.push('/');
            handleCreateProductComplete();
        }
    })[0];
    var _b = react_1.useState((brand === null || brand === void 0 ? void 0 : brand.balance) || 0), balance = _b[0], setBalance = _b[1];
    var _c = react_1.useState((brand === null || brand === void 0 ? void 0 : brand.name) || ''), brandName = _c[0], setBrandName = _c[1];
    var _d = react_1.useState((brand === null || brand === void 0 ? void 0 : brand.city) || ''), city = _d[0], setCity = _d[1];
    var _e = react_1.useState((brand === null || brand === void 0 ? void 0 : brand.phone) || ''), phone = _e[0], setPhone = _e[1];
    var _f = react_1.useState((brand === null || brand === void 0 ? void 0 : brand.telegram) || ''), telegram = _f[0], setTelegram = _f[1];
    var _g = react_1.useState((brand === null || brand === void 0 ? void 0 : brand.whatsapp) || ''), whatsapp = _g[0], setWhatsapp = _g[1];
    var _h = react_1.useState((brand === null || brand === void 0 ? void 0 : brand.email) || ''), email = _h[0], setEmail = _h[1];
    var _j = react_1.useState((brand === null || brand === void 0 ? void 0 : brand.about) || ''), about = _j[0], setAbout = _j[1];
    var _k = react_1.useState(''), password = _k[0], setPassword = _k[1];
    var _l = react_1.useState(''), slug = _l[0], setSlug = _l[1];
    var _m = react_1.useState(''), newPassword = _m[0], setNewPassword = _m[1];
    var _o = react_1.useState(false), handleCreateProductCompleteValue = _o[0], setCreateProductCompleteValue = _o[1];
    var _p = react_1.useState(''), productName = _p[0], setProductName = _p[1];
    var _q = react_1.useState(0), productPrice = _q[0], setProductPrice = _q[1];
    var _r = react_1.useState(), productPrice2 = _r[0], setProductPrice2 = _r[1];
    var _s = react_1.useState(), productPrice3 = _s[0], setProductPrice3 = _s[1];
    var _t = react_1.useState(1), productMinQuantity = _t[0], setProductMinQuantity = _t[1];
    var _u = react_1.useState(), productMinQuantity2 = _u[0], setProductMinQuantity2 = _u[1];
    var _v = react_1.useState(), productMinQuantity3 = _v[0], setProductMinQuantity3 = _v[1];
    var _w = react_1.useState(''), productAbout = _w[0], setProductAbout = _w[1];
    var _x = react_1.useState(false), addItem = _x[0], setAddItem = _x[1];
    var isEdit = searchParams && searchParams.type === 'edit';
    // const showAddProduct = () => setAddItem(true) 
    var showAddProduct = function () { return setAddItem(!addItem); };
    var handleCreateBrand = function () {
        if (!brandName || !city || !about) {
            react_hot_toast_1["default"].error("Пожалуйста, заполните все поля для создания бренда.");
            return;
        }
        CreateBrandMutate({
            variables: {
                // id: brand.id,
                input: {
                    name: brandName,
                    city: city,
                    about: about,
                    slug: slug,
                    logoPath: '/uploads/brands/brand-1.png'
                }
            }
        });
    };
    var handleAddProduct = function () {
        if (!productName || !productAbout || !productPrice || !productMinQuantity) {
            react_hot_toast_1["default"].error("Пожалуйста, заполните все поля для создания бренда.");
            return;
        }
        CreateProductMutate({
            variables: {
                // id: brand.id,
                input: {
                    name: productName,
                    about: productAbout,
                    price: productPrice,
                    minQuantity: productMinQuantity,
                    price2: productPrice2,
                    minQuantity2: productMinQuantity2,
                    price3: productPrice3,
                    minQuantity3: productMinQuantity3
                }
            }
        });
    };
    if (!(brand === null || brand === void 0 ? void 0 : brand.id)) {
        return (React.createElement(Section_1["default"], { className: Account_module_scss_1["default"].section },
            React.createElement(Container_1["default"], null,
                React.createElement("div", { className: Account_module_scss_1["default"].editFormWrap },
                    React.createElement("div", null,
                        React.createElement("div", { className: Account_module_scss_1["default"].editHeader + " text-center" },
                            React.createElement("h2", null, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0431\u0440\u0435\u043D\u0434")),
                        React.createElement("div", { className: Account_module_scss_1["default"].inputWrap },
                            React.createElement("label", { className: Account_module_scss_1["default"].label }, "\u0418\u043C\u044F \u0431\u0440\u0435\u043D\u0434\u0430"),
                            React.createElement("input", { className: Account_module_scss_1["default"].inputEdit, type: "text", value: brandName, onChange: function (e) { return setBrandName(e.target.value); } })),
                        React.createElement("div", { className: Account_module_scss_1["default"].inputWrap },
                            React.createElement("label", { className: Account_module_scss_1["default"].label }, "\u0413\u043E\u0440\u043E\u0434"),
                            React.createElement("input", { className: Account_module_scss_1["default"].inputEdit, type: "text", value: city, onChange: function (e) { return setCity(e.target.value); } })),
                        React.createElement("div", { className: Account_module_scss_1["default"].inputWrap },
                            React.createElement("label", { className: Account_module_scss_1["default"].label }, "URL"),
                            React.createElement("input", { className: Account_module_scss_1["default"].inputEdit, type: "text", value: slug, onChange: function (e) { return setSlug(e.target.value); } })),
                        React.createElement("div", { className: Account_module_scss_1["default"].inputWrap },
                            React.createElement("label", { className: Account_module_scss_1["default"].label }, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"),
                            React.createElement("input", { className: Account_module_scss_1["default"].inputEdit, type: "textarea", value: about, onChange: function (e) { return setAbout(e.target.value); } })),
                        React.createElement("div", { className: Account_module_scss_1["default"].saveEditWrap },
                            React.createElement("button", { className: Account_module_scss_1["default"].newad, onClick: handleCreateBrand },
                                React.createElement("span", { className: Account_module_scss_1["default"].editSaveBtn }, "\u0421\u041E\u0417\u0414\u0410\u0422\u042C"))))))));
    }
    var handleSaveBrand = function () {
        if (!brandName || !city || !about) {
            react_hot_toast_1["default"].error("Пожалуйста, заполните все поля для обновления бренда.");
            return;
        }
        UpdateBrandMutate({
            variables: {
                id: brand.id,
                input: {
                    name: brandName,
                    city: city,
                    about: about
                }
            }
        });
        console.log('Saved data:', {
            brandName: brandName,
            city: city,
            about: about
        });
    };
    var handleSaveProfile = function () {
        if (!email || email.length <= 5 || !email.includes('@')) {
            react_hot_toast_1["default"].error("Email должен быть не пустым, содержать более 5 символов и включать символ '@'.");
            throw new Error("Email должен быть не пустым, содержать более 5 символов и включать символ '@'.");
        }
        if (!phone || phone.length <= 7) {
            react_hot_toast_1["default"].error("Телефон должен быть не пустым и содержать более 7 символов");
            throw new Error("Телефон должен быть не пустым и содержать более 7 символов");
        }
        // Проверка, изменились ли phone или email по сравнению с текущими значениями в brand
        var isPhoneChanged = phone !== brand.phone;
        var isEmailChanged = email !== brand.email;
        // Если phone или email изменились, проверяем, введен ли пароль
        if ((isPhoneChanged || isEmailChanged) && !password) {
            react_hot_toast_1["default"].error("Введите пароль для подтверждения изменений в телефоне или email.");
            throw new Error("Введите пароль для подтверждения изменений в телефоне или email.");
        }
        // Если указан новый пароль, проверяем наличие текущего пароля
        if (newPassword && !password) {
            react_hot_toast_1["default"].error('Введите текущий пароль для изменения пароля.');
            throw new Error('Введите текущий пароль для изменения пароля.');
        }
        UpdateUserProfileMutate({
            variables: {
                input: {
                    email: email,
                    password: password,
                    whatsapp: whatsapp,
                    telegram: telegram,
                    phone: phone,
                    newPassword: newPassword
                }
            }
        });
        console.log('Saved data:', {
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
                React.createElement("div", null,
                    React.createElement("div", { className: Account_module_scss_1["default"].editHeader },
                        React.createElement("h2", null, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0431\u0440\u0435\u043D\u0434")),
                    React.createElement("div", { className: Account_module_scss_1["default"].inputWrap },
                        React.createElement("label", { className: Account_module_scss_1["default"].label }, "\u0418\u043C\u044F \u0431\u0440\u0435\u043D\u0434\u0430:"),
                        React.createElement("input", { className: Account_module_scss_1["default"].inputEdit, type: "text", value: brandName, onChange: function (e) { return setBrandName(e.target.value); } })),
                    React.createElement("div", { className: Account_module_scss_1["default"].inputWrap },
                        React.createElement("label", { className: Account_module_scss_1["default"].label }, "\u0413\u043E\u0440\u043E\u0434:"),
                        React.createElement("input", { className: Account_module_scss_1["default"].inputEdit, type: "text", value: city, onChange: function (e) { return setCity(e.target.value); } })),
                    React.createElement("div", { className: Account_module_scss_1["default"].inputWrap },
                        React.createElement("label", { className: Account_module_scss_1["default"].label }, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435:"),
                        React.createElement("input", { className: Account_module_scss_1["default"].inputEdit, type: "textarea", value: about, onChange: function (e) { return setAbout(e.target.value); } })),
                    React.createElement("div", { className: Account_module_scss_1["default"].saveEditWrap },
                        React.createElement("button", { className: Account_module_scss_1["default"].newad, onClick: handleSaveBrand },
                            React.createElement("span", { className: Account_module_scss_1["default"].editSaveBtn }, "\u0421\u041E\u0425\u0420\u0410\u041D\u0418\u0422\u042C")))),
                React.createElement("div", null,
                    React.createElement("div", { className: Account_module_scss_1["default"].editHeader },
                        React.createElement("h2", null, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u0440\u043E\u0444\u0438\u043B\u044C")),
                    React.createElement("div", { className: Account_module_scss_1["default"].inputWrap },
                        React.createElement("label", { className: Account_module_scss_1["default"].label }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:"),
                        React.createElement("input", { className: Account_module_scss_1["default"].inputEdit, type: "text", value: phone, onChange: function (e) { return setPhone(e.target.value); } })),
                    React.createElement("div", { className: Account_module_scss_1["default"].inputWrap },
                        React.createElement("label", { className: Account_module_scss_1["default"].label }, "Telegram:"),
                        React.createElement("input", { className: Account_module_scss_1["default"].inputEdit, type: "text", value: telegram, onChange: function (e) { return setTelegram(e.target.value); } })),
                    React.createElement("div", { className: Account_module_scss_1["default"].inputWrap },
                        React.createElement("label", { className: Account_module_scss_1["default"].label }, "WhatsApp:"),
                        React.createElement("input", { className: Account_module_scss_1["default"].inputEdit, type: "text", value: whatsapp, onChange: function (e) { return setWhatsapp(e.target.value); } })),
                    React.createElement("div", { className: Account_module_scss_1["default"].inputWrap },
                        React.createElement("label", { className: Account_module_scss_1["default"].label }, "Email:"),
                        React.createElement("input", { className: Account_module_scss_1["default"].inputEdit, type: "email", value: email, onChange: function (e) { return setEmail(e.target.value); } })),
                    React.createElement("div", { className: Account_module_scss_1["default"].inputWrap },
                        React.createElement("label", { className: Account_module_scss_1["default"].label }, "\u041F\u0430\u0440\u043E\u043B\u044C:"),
                        React.createElement("input", { className: Account_module_scss_1["default"].inputEdit, type: "password", value: password, onChange: function (e) { return setPassword(e.target.value); } })),
                    React.createElement("div", { className: Account_module_scss_1["default"].inputWrap },
                        React.createElement("label", { className: Account_module_scss_1["default"].label }, "\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C:"),
                        React.createElement("input", { className: Account_module_scss_1["default"].inputEdit, type: "password", value: newPassword, onChange: function (e) { return setNewPassword(e.target.value); } })),
                    React.createElement("div", { className: Account_module_scss_1["default"].saveEditWrap },
                        React.createElement("button", { className: Account_module_scss_1["default"].newad, onClick: handleSaveProfile },
                            React.createElement("span", { className: Account_module_scss_1["default"].editSaveBtn }, "\u0421\u041E\u0425\u0420\u0410\u041D\u0418\u0422\u042C")))))) : (React.createElement(React.Fragment, null,
                React.createElement(AccountSidebar_1["default"], { balance: balance, brand: brand }),
                React.createElement(Announcements_1["default"], { setBalance: setBalance, tariffs: tariffs, onCreateProductCompleteValue: handleCreateProductCompleteValue })))),
            !isEdit && (React.createElement("div", { className: Account_module_scss_1["default"].newAdWrap },
                React.createElement("button", { className: Account_module_scss_1["default"].newad, onClick: showAddProduct },
                    React.createElement(Picture_1["default"], { src: plus_png_1["default"].src, alt: "\u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0442\u043E\u0432\u0430\u0440" }),
                    React.createElement("span", null, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435")))),
            addItem && (React.createElement("div", { className: Account_module_scss_1["default"].newProductWrap },
                React.createElement("div", { className: Account_module_scss_1["default"].editFormWrap },
                    React.createElement("div", null,
                        React.createElement("div", { className: Account_module_scss_1["default"].editHeader + " text-center" },
                            React.createElement("h2", null, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u0431\u044A\u044F\u0432\u043B\u0435\u043D\u0438\u0435")),
                        React.createElement("div", { className: Account_module_scss_1["default"].inputWrap },
                            React.createElement("label", { className: Account_module_scss_1["default"].label }, "\u0418\u043C\u044F \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430"),
                            React.createElement("input", { className: Account_module_scss_1["default"].inputEdit, type: "text", value: productName, onChange: function (e) { return setProductName(e.target.value); } })),
                        React.createElement("div", { className: Account_module_scss_1["default"].inputWrap },
                            React.createElement("label", { className: Account_module_scss_1["default"].label }, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u044F"),
                            React.createElement("textarea", { className: Account_module_scss_1["default"].inputEdit, value: productAbout, onChange: function (e) { return setProductAbout(e.target.value); } })),
                        React.createElement("h4", { className: "text-center font-bold" }, "\u0426\u0435\u043D\u0430 \u0437\u0430 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0432 \u0437\u0430\u043A\u0430\u0437\u0435"),
                        React.createElement("h6", null, "(\u0435\u0441\u0442\u044C 3 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0430 - \u043F\u0435\u0440\u0432\u044B\u0439 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F)"),
                        React.createElement("h6", null, "\u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0440\u0430\u0437\u043D\u0443\u044E \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0437\u0430 \u0440\u0430\u0437\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0432 \u0437\u0430\u043A\u0430\u0437\u0435"),
                        React.createElement("div", { className: Account_module_scss_1["default"].inputWrap }, "\u0412\u0430\u0440\u0438\u0430\u043D\u0442 1 (\u0431\u0430\u0437\u043E\u0432\u044B\u0439 - \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F)"),
                        React.createElement("div", { className: Account_module_scss_1["default"].inputWrap },
                            React.createElement("label", { className: Account_module_scss_1["default"].label }, "\u0426\u0435\u043D\u0430"),
                            React.createElement("input", { className: Account_module_scss_1["default"].inputEdit, type: "number", value: productPrice, onChange: function (e) { return setProductPrice(Number(e.target.value)); } })),
                        React.createElement("div", { className: Account_module_scss_1["default"].inputWrap },
                            React.createElement("label", { className: Account_module_scss_1["default"].label }, "\u041C\u0438\u043D\u0438\u043C\u0443\u043C \u043D\u0430 \u0437\u0430\u043A\u0430\u0437"),
                            React.createElement("input", { className: Account_module_scss_1["default"].inputEdit, type: "number", value: productMinQuantity, onChange: function (e) { return setProductMinQuantity(Number(e.target.value)); } })),
                        React.createElement("div", { className: Account_module_scss_1["default"].inputWrap }, "\u0412\u0430\u0440\u0438\u0430\u043D\u0442 2"),
                        React.createElement("div", { className: Account_module_scss_1["default"].inputWrap },
                            React.createElement("label", { className: Account_module_scss_1["default"].label }, "\u0426\u0435\u043D\u0430"),
                            React.createElement("input", { className: Account_module_scss_1["default"].inputEdit, type: "number", value: productPrice2, onChange: function (e) { return setProductPrice2(Number(e.target.value)); } })),
                        React.createElement("div", { className: Account_module_scss_1["default"].inputWrap },
                            React.createElement("label", { className: Account_module_scss_1["default"].label }, "\u041C\u0438\u043D\u0438\u043C\u0443\u043C \u043D\u0430 \u0437\u0430\u043A\u0430\u0437"),
                            React.createElement("input", { className: Account_module_scss_1["default"].inputEdit, type: "number", value: productMinQuantity2, onChange: function (e) { return setProductMinQuantity2(Number(e.target.value)); } })),
                        React.createElement("div", { className: Account_module_scss_1["default"].inputWrap }, "\u0412\u0430\u0440\u0438\u0430\u043D\u0442 3"),
                        React.createElement("div", { className: Account_module_scss_1["default"].inputWrap },
                            React.createElement("label", { className: Account_module_scss_1["default"].label }, "\u0426\u0435\u043D\u0430"),
                            React.createElement("input", { className: Account_module_scss_1["default"].inputEdit, type: "number", value: productPrice3, onChange: function (e) { return setProductPrice3(Number(e.target.value)); } })),
                        React.createElement("div", { className: Account_module_scss_1["default"].inputWrap },
                            React.createElement("label", { className: Account_module_scss_1["default"].label }, "\u041C\u0438\u043D\u0438\u043C\u0443\u043C \u043D\u0430 \u0437\u0430\u043A\u0430\u0437"),
                            React.createElement("input", { className: Account_module_scss_1["default"].inputEdit, type: "number", value: productMinQuantity3, onChange: function (e) { return setProductMinQuantity3(Number(e.target.value)); } })),
                        React.createElement("div", { className: Account_module_scss_1["default"].saveEditWrap },
                            React.createElement("button", { className: Account_module_scss_1["default"].newad, onClick: handleAddProduct },
                                React.createElement("span", { className: Account_module_scss_1["default"].editSaveBtn }, "\u0414\u041E\u0411\u0410\u0412\u0418\u0422\u042C \u041E\u0411\u042C\u042F\u0412\u041B\u0415\u041D\u0418\u0415"))))))))));
};
exports["default"] = Account;
