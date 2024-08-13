(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [856], {
        67762: function(t) {
            t.exports = function(t, e) {
                for (var n, r = -1, i = t.length; ++r < i;) {
                    var u = e(t[r]);
                    void 0 !== u && (n = void 0 === n ? u : n + u)
                }
                return n
            }
        },
        27561: function(t, e, n) {
            var r = n(67990),
                i = /^\s+/;
            t.exports = function(t) { return t ? t.slice(0, r(t) + 1).replace(i, "") : t }
        },
        89179: function(t, e, n) {
            var r = n(55639),
                i = n(40554),
                u = n(14841),
                o = n(79833),
                l = r.isFinite,
                a = Math.min;
            t.exports = function(t) { var e = Math[t]; return function(t, n) { if (t = u(t), (n = null == n ? 0 : a(i(n), 292)) && l(t)) { var r = (o(t) + "e").split("e"); return +((r = (o(e(r[0] + "e" + (+r[1] + n))) + "e").split("e"))[0] + "e" + (+r[1] - n)) } return e(t) } }
        },
        67990: function(t) {
            var e = /\s/;
            t.exports = function(t) { for (var n = t.length; n-- && e.test(t.charAt(n));); return n }
        },
        5558: function(t, e, n) {
            var r = n(89179)("floor");
            t.exports = r
        },
        73303: function(t, e, n) {
            var r = n(67206),
                i = n(67762);
            t.exports = function(t, e) { return t && t.length ? i(t, r(e, 2)) : 0 }
        },
        18601: function(t, e, n) {
            var r = n(14841),
                i = 1 / 0;
            t.exports = function(t) { return t ? (t = r(t)) === i || t === -i ? (t < 0 ? -1 : 1) * 17976931348623157e292 : t == t ? t : 0 : 0 === t ? t : 0 }
        },
        40554: function(t, e, n) {
            var r = n(18601);
            t.exports = function(t) {
                var e = r(t),
                    n = e % 1;
                return e == e ? n ? e - n : e : 0
            }
        },
        14841: function(t, e, n) {
            var r = n(27561),
                i = n(13218),
                u = n(33448),
                o = 0 / 0,
                l = /^[-+]0x[0-9a-f]+$/i,
                a = /^0b[01]+$/i,
                c = /^0o[0-7]+$/i,
                s = parseInt;
            t.exports = function(t) {
                if ("number" == typeof t) return t;
                if (u(t)) return o;
                if (i(t)) {
                    var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                    t = i(e) ? e + "" : e
                }
                if ("string" != typeof t) return 0 === t ? t : +t;
                t = r(t);
                var n = a.test(t);
                return n || c.test(t) ? s(t.slice(2), n ? 2 : 8) : l.test(t) ? o : +t
            }
        },
        7623: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, { default: function() { return Auth_WithAuth } });
            var r = n(32543);
            let isProtected = t => !["/", "/adminLogin", "/home", "/StoryBook", "/faq", "/terms-and-condition", "/risk-disclosure", "/disclaimer", "/privacy-policy", "/corporate-bond", "/contact-us", "/about-us", "/signup", "/login", "/create-new-account", ...t.includes("/invitations") ? [t] : [], ...t.includes("/blogs") ? [t] : []].includes(t);
            var i = n(67294),
                hooks_useAuthChange = t => { let [e, n] = (0, i.useState)(null); return (0, i.useEffect)(() => { var e; let checkAuthStatus = e => { n(e || null), "function" == typeof t && t(e || null) }; return checkAuthStatus((null === (e = (0, r.v0)()) || void 0 === e ? void 0 : e.token) || null), document.addEventListener("cookie", checkAuthStatus), () => { document.removeEventListener("cookie", checkAuthStatus) } }, [t]), e },
                u = n(51134);
            let isBrowser = () => !0;
            var Auth_WithAuth = t => {
                let { router: e, children: n } = t;
                hooks_useAuthChange(t => (0, u.onAuthChange)(t));
                let i = (0, r.v0)();
                return isBrowser() && !(0, r.$8)(i) && isProtected(e.pathname) && e.replace("/"), n
            }
        },
        86098: function(t, e, n) {
            "use strict";
            n.d(e, { I7: function() { return c }, MC: function() { return f }, N2: function() { return l }, NK: function() { return u }, dJ: function() { return o }, hk: function() { return a }, j1: function() { return d }, pZ: function() { return i }, vR: function() { return r }, y3: function() { return s } });
            let r = "Investment amount should be greater than or equal to",
                i = "Investment amount should be less than or equal to",
                u = "Investment amount should be equal to",
                o = "Investment units should be greater than or equal to",
                l = "Investment units should be less than or equal to",
                a = "Investment units should be equal to",
                c = "Your investment will cause the remaining investment amount in the deal to be lower than the allowed amount. Please choose from an option below, or enter another amount",
                s = "Amount entered must be a multiple of",
                f = "Out of schedule payment has been successfully marked as received",
                d = 3e5
        },
        41292: function(t, e, n) {
            "use strict";
            n.d(e, { Ap: function() { return isNotIfa }, BX: function() { return isNotNullOrUndefined }, C6: function() { return replaceAnchorsWithSpans }, Ii: function() { return getDematAccountNumber }, Kq: function() { return incrementInvestmentUnit }, LR: function() { return isNriInvestor }, Ni: function() { return showKycDematAccordion }, PU: function() { return isDematPresent }, QE: function() { return getInvestmentAmount }, U4: function() { return isKycVerified }, Yw: function() { return removeQueryStringFromUrl }, Zz: function() { return formatSecondsToTimeString }, al: function() { return filterHeaderMenu }, cH: function() { return getAccountNumber }, cR: function() { return l }, cn: function() { return cn }, cr: function() { return isKycUpdated }, dD: function() { return parseQueryString }, ek: function() { return showReferral }, fC: function() { return getPaymentGatewayName }, fi: function() { return showWalletSuggestion }, g1: function() { return isValidAmount }, iD: function() { return regexAmount }, iJ: function() { return getKycStatus }, k$: function() { return getWalletAmount }, k6: function() { return getNumberWithComma }, mC: function() { return showLargeInvestmentAlert }, n2: function() { return isWalletUpdated }, n3: function() { return decrementInvestmentUnit }, oU: function() { return isWalletActive }, rw: function() { return isValidUnits }, sY: function() { return isValidResponseEntity }, uA: function() { return getMobileOS }, uV: function() { return getVan }, uk: function() { return showJiraafSafe }, yv: function() { return getEitherOrDefaultValueOf } });
            var r = n(96338),
                i = n(86098),
                u = n(90512),
                o = n(98388);
            let filterHeaderMenu = (t, e, n) => { if (!e) return []; { let i = [...e]; return (null == t ? void 0 : t.token) ? ((null == n ? void 0 : n.showJiraafSafe) != null && (null == n ? void 0 : n.showJiraafSafe) || (i = i.filter(t => (null == t ? void 0 : t.name) !== r.WalletName)), (null == n ? void 0 : n.showReferral) == null || (null == n ? void 0 : n.showReferral) || (i = i.filter(t => (null == t ? void 0 : t.name) !== "Refer & Earn"))) : i = i.filter(t => (null == t ? void 0 : t.name) !== r.WalletName), i } },
                isWalletActive = t => (null == t ? void 0 : t.isActive) || !1,
                isValidResponseEntity = t => (null == t ? void 0 : t.status) && (null == t ? void 0 : t.entity) || !1,
                isKycVerified = t => (null == t ? void 0 : t.kycStatus) === "Verified",
                getKycStatus = t => (null == t ? void 0 : t.kycStatus) || "Pending",
                isDematPresent = t => { var e; return !!(null == t ? void 0 : null === (e = t.investorDemat) || void 0 === e ? void 0 : e.dematAccount) },
                getDematAccountNumber = t => { var e; return (null == t ? void 0 : null === (e = t.investorDemat) || void 0 === e ? void 0 : e.dematAccount) || "N/A" },
                getAccountNumber = t => { var e; return (null == t ? void 0 : null === (e = t.bankDetails) || void 0 === e ? void 0 : e.accountNumber) || "N/A" },
                isNriInvestor = t => (null == t ? void 0 : t.isNri) || !1,
                getVan = t => (null == t ? void 0 : t.virtualAccountNumber) || "N/A",
                isIfa = t => (null == t ? void 0 : t.entityType) === "ifa",
                isNotIfa = t => null != t && !!t.entityType && (null == t ? void 0 : t.entityType) !== "ifa",
                showReferral = t => !isIfa(t),
                showJiraafSafe = (t, e) => isKycVerified(t) && ((null == e ? void 0 : e.isWalletActive) || !1),
                getWalletAmount = t => (null == t ? void 0 : t.amount) || 0,
                isKycUpdated = (t, e) => !!((null == t ? void 0 : t.isKycVerified) != null && !(null == t ? void 0 : t.isKycVerified) && isValidResponseEntity(e) && isKycVerified(null == e ? void 0 : e.entity)),
                isWalletUpdated = (t, e) => !!(t && ((null == t ? void 0 : t.isKycVerified) == null || !(null == t ? void 0 : t.isKycVerified)) && isWalletActive(null == e ? void 0 : e.entity)),
                showKycDematAccordion = (t, e) => "DematDetails" === t && (!e || "Pending" === e),
                getEitherOrDefaultValueOf = (t, e) => t || e || 0,
                isValidUnits = t => {
                    let { currentUnits: e, minInvestmentUnit: n, remainingUnits: r } = t;
                    if (e === r);
                    else if (r <= n) return "".concat(i.hk, " ").concat(r);
                    else if (e > r) return "".concat(i.N2, " ").concat(r);
                    else if (e < n) return "".concat(i.dJ, " ").concat(n);
                    return null
                },
                isValidAmount = t => {
                    let { currentAmount: e, minAmount: n, maxAmount: r, remainingAmount: u, investmentMultiple: o, isFTI: l = !1, minAmountForFTI: a } = t, c = l ? a : n;
                    if (e < c) return "".concat(u === c ? i.NK : i.vR, " ").concat(getNumberWithComma(c));
                    if (e > r) return "".concat(u === c ? i.NK : i.pZ, " ").concat(getNumberWithComma(r));
                    if (u !== e) {
                        if (u - e < n) {
                            let t = r - n;
                            t -= t % o;
                            let e = [t, r];
                            return { error: i.I7, suggestions: e }
                        }
                        if (e % o != 0) return "".concat(i.y3, " ").concat(o)
                    }
                    return null
                },
                regexAmount = t => /^(\s*|[1-9]\d*)$/.test(t) ? t : 0,
                getNumberWithComma = t => (t || 0).toLocaleString("en-In"),
                getInvestmentAmount = t => { let { isNCD: e, investmentUnits: n, dailyDebenturePrice: r, investmentAmount: i } = t; return Math.round(e ? Number(n) * r : Number(i)) },
                showLargeInvestmentAlert = t => { let { isWalletActive: e, walletAmount: n, investmentAmount: r } = t; return e && n < r && r >= i.j1 },
                decrementInvestmentUnit = t => { let { investmentUnits: e, minInvestmentUnit: n, remainingUnits: r } = t; return e > r || r < n ? r : e < n ? n : e > n && e - 1 },
                incrementInvestmentUnit = t => { let { investmentUnits: e, minInvestmentUnit: n, remainingUnits: r } = t; return e > r || r < n ? r : e < n ? n : e < r && e + 1 },
                getPaymentGatewayName = t => { if (isValidResponseEntity(t)) { var e, n, r; let i = (null == t ? void 0 : null === (n = t.entity[0]) || void 0 === n ? void 0 : null === (e = n.name) || void 0 === e ? void 0 : e.toLowerCase()) || ""; if ((null == t ? void 0 : null === (r = t.entity) || void 0 === r ? void 0 : r.length) === 1) return i } return "" },
                showWalletSuggestion = t => { let { investmentAmount: e, walletAmount: n } = t; return n > 0 && n >= e },
                l = ["production", "uat", "qa", "qaslave", "qamobile", "staging"].includes("production") ? "production" : "sandbox";

            function replaceAnchorsWithSpans(t, e) {
                ! function traverseAndReplace(t) {
                    if (t instanceof HTMLAnchorElement) {
                        let n = document.createElement("span");
                        for (let { name: e, value: r }
                            of(n.innerHTML = t.innerHTML, t.attributes)) n.setAttribute(e, r);
                        n.onclick = function() { e(t.getAttribute("href")) }, t.parentNode.replaceChild(n, t)
                    }
                    if (t.childNodes && t.childNodes.length > 0)
                        for (let e = 0; e < t.childNodes.length; e++) traverseAndReplace(t.childNodes[e])
                }(t)
            }

            function removeQueryStringFromUrl(t) {
                try {
                    let e = new URL(t);
                    e.search = "";
                    let n = e.toString();
                    return "/" != n[n.length - 1] && (n = "".concat(n, "/")), n
                } catch (t) { return "" }
            }
            let getMobileOS = () => { let t = navigator.userAgent.toString().toLowerCase(); return t.includes("android") ? r.mobileDeviceTypes.android : t.includes("iphone") || t.includes("ios") ? r.mobileDeviceTypes.ios : r.mobileDeviceTypes.unknown },
                cn = function() { for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n]; return (0, o.m6)((0, u.W)(e)) },
                isNotNullOrUndefined = t => null != t,
                formatSecondsToTimeString = t => {
                    if (!t) return "";
                    let e = Math.floor(t / 3600),
                        n = Math.floor(t % 3600 / 60);
                    return e > 0 ? n > 0 ? "".concat(e, " hours ").concat(n, " mins") : "".concat(e, " hours") : n > 0 ? "".concat(n, " ").concat(n > 1 ? "mins" : "min") : "".concat(t % 60, " seconds")
                },
                parseQueryString = t => {
                    if (t.startsWith("?") && (t = t.substring(1)), !t) return {};
                    let e = t.split("&"),
                        n = e.reduce((t, e) => { let [n, r] = e.split("="); return t[decodeURIComponent(n)] = r ? decodeURIComponent(r) : "", t }, {});
                    return n
                }
        },
        57051: function(t, e, n) {
            "use strict";
            n.d(e, { H3: function() { return GET_PAYMENT_GATEWAY_MID_DETAILS_URL }, It: function() { return GET_PAYMENT_HISTORY_URL }, K9: function() { return CREATE_PAYMENT_URL }, Kw: function() { return CREATE_OFFLINE_REFUND_OVERSUBSCRIPTION_REPAYMENT }, VK: function() { return CREATE_AISAFE_REFUND_OVERSUBSCRIPTION_REPAYMENT }, Y1: function() { return GET_PAYMENT_GATEWAY_BY_OPPORTUNITY_ID }, aD: function() { return GET_PAYMENT_BY_INVESTMENT_ID_URL }, g_: function() { return GET_PAYMENT_ID_URL }, kW: function() { return GET_PAYMENT_URL }, mt: function() { return GET_PAYMENT_BY_STATUS_URL }, wA: function() { return UPDATE_PAYMENT_URL }, xB: function() { return UPDATE_WALLET_PAYMENT } });
            var r = n(16090);
            let CREATE_PAYMENT_URL = () => (0, r.w)("/v2/payments"),
                UPDATE_PAYMENT_URL = () => (0, r.w)("/payments"),
                GET_PAYMENT_URL = (t, e) => (0, r.w)("/payments?opportunityId=:opportunityId&entityId=:entityId", { opportunityId: t, entityId: e }),
                GET_PAYMENT_HISTORY_URL = (t, e, n) => (0, r.w)("/payment-history/:id?opportunityId=:opportunityId&orderId=:orderId", { id: t, opportunityId: e, orderId: n }),
                GET_PAYMENT_GATEWAY_MID_DETAILS_URL = () => (0, r.w)("/payment-gateways-mid-details"),
                GET_PAYMENT_GATEWAY_BY_OPPORTUNITY_ID = t => (0, r.w)("/payment-gateway/:opportunityId", { opportunityId: t }),
                GET_PAYMENT_ID_URL = t => (0, r.w)("/payment/:id", { id: t }),
                GET_PAYMENT_BY_INVESTMENT_ID_URL = t => (0, r.w)("/payment?investmentId=:investmentId", { investmentId: t }),
                UPDATE_WALLET_PAYMENT = () => (0, r.w)("/payments/wallet"),
                CREATE_AISAFE_REFUND_OVERSUBSCRIPTION_REPAYMENT = () => (0, r.w)("/payments/oversubscribed-refund"),
                CREATE_OFFLINE_REFUND_OVERSUBSCRIPTION_REPAYMENT = () => (0, r.w)("/payments/oversubscribed-refund-offline"),
                GET_PAYMENT_BY_STATUS_URL = (t, e, n) => (0, r.w)("/payment/status/:status?limit=:limit&page=:page", { status: t, limit: e, page: n })
        },
        11163: function(t, e, n) { t.exports = n(38355) }
    }
]);
//# sourceMappingURL=856.1a9d25b3d40b00e1.js.map