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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.useAnnouncements = void 0;
var output_1 = require("@/__generated__/output");
var useSearchFilter_1 = require("@/hooks/helpers/filters/useSearchFilter");
var react_1 = require("react");
var react_hot_toast_1 = require("react-hot-toast");
exports.useAnnouncements = function (query, setBalance) {
    var _a = useSearchFilter_1.useSearchFilter(), searchTerm = _a.searchTerm, debounceSearch = _a.debounceSearch, handleSearch = _a.handleSearch;
    var _b = react_1.useState([]), checked = _b[0], setChecked = _b[1];
    var _c = react_1.useState([]), announcements = _c[0], setAnnouncements = _c[1];
    var _d = react_1.useState(1), page = _d[0], setPage = _d[1];
    var scrollRef = react_1.useRef(null);
    var placeOrderMutate = output_1.usePlaceOrderMutation({
        fetchPolicy: 'no-cache',
        onError: function (_a) {
            var message = _a.message;
            react_hot_toast_1["default"].error(message);
        }
    })[0];
    var placeOrder = function (data, price, closeModal) {
        return placeOrderMutate({
            variables: {
                data: data
            },
            onCompleted: function (_a) {
                var placeOrder = _a.placeOrder;
                setAnnouncements(function (prev) {
                    return prev.map(function (item) {
                        if (item.id !== data.productId) {
                            return item;
                        }
                        return __assign(__assign({}, item), { orders: __spreadArrays(item.orders, [placeOrder]) });
                    });
                });
                setBalance(function (prev) { return prev && (prev - price < 0 ? prev : prev - price); });
                closeModal();
            }
        });
    };
    var _e = output_1.useAnnouncementsQuery({
        fetchPolicy: 'no-cache',
        variables: {
            query: __assign(__assign({}, query), { searchTerm: debounceSearch })
        }
    }), data = _e.data, error = _e.error, refetch = _e.refetch;
    react_1.useEffect(function () {
        var count = (data === null || data === void 0 ? void 0 : data.announcements.count) || 0;
        var pagesCount = Math.ceil(count / (query.perPage || 15));
        var scrollArea = scrollRef.current;
        if (!scrollArea || pagesCount <= 1 || page >= pagesCount)
            return;
        var handleScroll = function () {
            var scrollTop = scrollArea.scrollTop, clientHeight = scrollArea.clientHeight, scrollHeight = scrollArea.scrollHeight;
            if (scrollTop + clientHeight >= scrollHeight * 0.9) {
                setPage(function (prev) { return prev + 1; });
            }
        };
        window.addEventListener('scroll', handleScroll);
        return function () {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [page]);
    react_1.useEffect(function () {
        var announcements = data === null || data === void 0 ? void 0 : data.announcements.announcements;
        if (announcements) {
            setAnnouncements(announcements);
        }
    }, [data]);
    var toggle = function (announcementId) {
        setChecked(function (prev) {
            return prev.includes(announcementId)
                ? prev.filter(function (id) { return id !== announcementId; })
                : __spreadArrays(prev, [announcementId]);
        });
    };
    // Return `refetch` along with other data
    return {
        toggle: toggle,
        checked: checked,
        setChecked: setChecked,
        scrollRef: scrollRef,
        announcements: announcements,
        error: error,
        searchTerm: searchTerm,
        handleSearch: handleSearch,
        placeOrder: placeOrder,
        refetch: refetch
    };
};
