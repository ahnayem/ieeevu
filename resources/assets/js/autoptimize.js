/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
    function(a, b, c) {
        function d(c) {
            var d = b.console;
            f[c] || (f[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()))
        }

        function e(b, c, e, f) {
            if (Object.defineProperty) try {
                return void Object.defineProperty(b, c, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return d(f), e
                    },
                    set: function(a) {
                        d(f), e = a
                    }
                })
            } catch (g) {}
            a._definePropertyBroken = !0, b[c] = e
        }
        a.migrateVersion = "1.4.1";
        var f = {};
        a.migrateWarnings = [], b.console && b.console.log && b.console.log("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion), a.migrateTrace === c && (a.migrateTrace = !0), a.migrateReset = function() {
            f = {}, a.migrateWarnings.length = 0
        }, "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode");
        var g = a("<input/>", {
                size: 1
            }).attr("size") && a.attrFn,
            h = a.attr,
            i = a.attrHooks.value && a.attrHooks.value.get || function() {
                return null
            },
            j = a.attrHooks.value && a.attrHooks.value.set || function() {
                return c
            },
            k = /^(?:input|button)$/i,
            l = /^[238]$/,
            m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            n = /^(?:checked|selected)$/i;
        e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"), a.attr = function(b, e, f, i) {
            var j = e.toLowerCase(),
                o = b && b.nodeType;
            return i && (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"), b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = {
                get: function(b, d) {
                    var e, f = a.prop(b, d);
                    return f === !0 || "boolean" != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue !== !1 ? d.toLowerCase() : c
                },
                set: function(b, c, d) {
                    var e;
                    return c === !1 ? a.removeAttr(b, d) : (e = a.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d
                }
            }, n.test(j) && d("jQuery.fn.attr('" + j + "') might use property instead of attribute")), h.call(a, b, e, f))
        }, a.attrHooks.value = {
            get: function(a, b) {
                var c = (a.nodeName || "").toLowerCase();
                return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"), b in a ? a.value : null)
            },
            set: function(a, b) {
                var c = (a.nodeName || "").toLowerCase();
                return "button" === c ? j.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value', val) no longer sets properties"), void(a.value = b))
            }
        };
        var o, p, q = a.fn.init,
            r = a.find,
            s = a.parseJSON,
            t = /^\s*</,
            u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
            v = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
            w = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
        a.fn.init = function(b, e, f) {
            var g, h;
            return b && "string" == typeof b && !a.isPlainObject(e) && (g = w.exec(a.trim(b))) && g[0] && (t.test(b) || d("$(html) HTML strings must start with '<' character"), g[3] && d("$(html) HTML text after last tag is ignored"), "#" === g[0].charAt(0) && (d("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), e && e.context && e.context.nodeType && (e = e.context), a.parseHTML) ? q.call(this, a.parseHTML(g[2], e && e.ownerDocument || e || document, !0), e, f) : (h = q.apply(this, arguments), b && b.selector !== c ? (h.selector = b.selector, h.context = b.context) : (h.selector = "string" == typeof b ? b : "", b && (h.context = b.nodeType ? b : e || document)), h)
        }, a.fn.init.prototype = a.fn, a.find = function(a) {
            var b = Array.prototype.slice.call(arguments);
            if ("string" == typeof a && u.test(a)) try {
                document.querySelector(a)
            } catch (c) {
                a = a.replace(v, function(a, b, c, d) {
                    return "[" + b + c + '"' + d + '"]'
                });
                try {
                    document.querySelector(a), d("Attribute selector with '#' must be quoted: " + b[0]), b[0] = a
                } catch (e) {
                    d("Attribute selector with '#' was not fixed: " + b[0])
                }
            }
            return r.apply(this, b)
        };
        var x;
        for (x in r) Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = r[x]);
        a.parseJSON = function(a) {
            return a ? s.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"), null)
        }, a.uaMatch = function(a) {
            a = a.toLowerCase();
            var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
            return {
                browser: b[1] || "",
                version: b[2] || "0"
            }
        }, a.browser || (o = a.uaMatch(navigator.userAgent), p = {}, o.browser && (p[o.browser] = !0, p.version = o.version), p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0), a.browser = p), e(a, "browser", a.browser, "jQuery.browser is deprecated"), a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode, e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"), e(a.support, "boxModel", a.support.boxModel, "jQuery.support.boxModel is deprecated"), a.sub = function() {
            function b(a, c) {
                return new b.fn.init(a, c)
            }
            a.extend(!0, b, this), b.superclass = this, b.fn = b.prototype = this(), b.fn.constructor = b, b.sub = this.sub, b.fn.init = function(d, e) {
                var f = a.fn.init.call(this, d, e, c);
                return f instanceof b ? f : b(f)
            }, b.fn.init.prototype = b.fn;
            var c = b(document);
            return d("jQuery.sub() is deprecated"), b
        }, a.fn.size = function() {
            return d("jQuery.fn.size() is deprecated; use the .length property"), this.length
        };
        var y = !1;
        a.swap && a.each(["height", "width", "reliableMarginRight"], function(b, c) {
            var d = a.cssHooks[c] && a.cssHooks[c].get;
            d && (a.cssHooks[c].get = function() {
                var a;
                return y = !0, a = d.apply(this, arguments), y = !1, a
            })
        }), a.swap = function(a, b, c, e) {
            var f, g, h = {};
            y || d("jQuery.swap() is undocumented and deprecated");
            for (g in b) h[g] = a.style[g], a.style[g] = b[g];
            f = c.apply(a, e || []);
            for (g in b) a.style[g] = h[g];
            return f
        }, a.ajaxSetup({
            converters: {
                "text json": a.parseJSON
            }
        });
        var z = a.fn.data;
        a.fn.data = function(b) {
            var e, f, g = this[0];
            return !g || "events" !== b || 1 !== arguments.length || (e = a.data(g, b), f = a._data(g, b), e !== c && e !== f || f === c) ? z.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"), f)
        };
        var A = /\/(java|ecma)script/i;
        a.clean || (a.clean = function(b, c, e, f) {
            c = c || document, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, d("jQuery.clean() is deprecated");
            var g, h, i, j, k = [];
            if (a.merge(k, a.buildFragment(b, c).childNodes), e)
                for (i = function(a) {
                        return !a.type || A.test(a.type) ? f ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a) : e.appendChild(a) : void 0
                    }, g = 0; null != (h = k[g]); g++) a.nodeName(h, "script") && i(h) || (e.appendChild(h), "undefined" != typeof h.getElementsByTagName && (j = a.grep(a.merge([], h.getElementsByTagName("script")), i), k.splice.apply(k, [g + 1, 0].concat(j)), g += j.length));
            return k
        });
        var B = a.event.add,
            C = a.event.remove,
            D = a.event.trigger,
            E = a.fn.toggle,
            F = a.fn.live,
            G = a.fn.die,
            H = a.fn.load,
            I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
            J = new RegExp("\\b(?:" + I + ")\\b"),
            K = /(?:^|\s)hover(\.\S+|)\b/,
            L = function(b) {
                return "string" != typeof b || a.event.special.hover ? b : (K.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), b && b.replace(K, "mouseenter$1 mouseleave$1"))
            };
        a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), a.event.add = function(a, b, c, e, f) {
            a !== document && J.test(b) && d("AJAX events should be attached to document: " + b), B.call(this, a, L(b || ""), c, e, f)
        }, a.event.remove = function(a, b, c, d, e) {
            C.call(this, a, L(b) || "", c, d, e)
        }, a.each(["load", "unload", "error"], function(b, c) {
            a.fn[c] = function() {
                var a = Array.prototype.slice.call(arguments, 0);
                return "load" === c && "string" == typeof a[0] ? H.apply(this, a) : (d("jQuery.fn." + c + "() is deprecated"), a.splice(0, 0, c), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this))
            }
        }), a.fn.toggle = function(b, c) {
            if (!a.isFunction(b) || !a.isFunction(c)) return E.apply(this, arguments);
            d("jQuery.fn.toggle(handler, handler...) is deprecated");
            var e = arguments,
                f = b.guid || a.guid++,
                g = 0,
                h = function(c) {
                    var d = (a._data(this, "lastToggle" + b.guid) || 0) % g;
                    return a._data(this, "lastToggle" + b.guid, d + 1), c.preventDefault(), e[d].apply(this, arguments) || !1
                };
            for (h.guid = f; g < e.length;) e[g++].guid = f;
            return this.click(h)
        }, a.fn.live = function(b, c, e) {
            return d("jQuery.fn.live() is deprecated"), F ? F.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e), this)
        }, a.fn.die = function(b, c) {
            return d("jQuery.fn.die() is deprecated"), G ? G.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c), this)
        }, a.event.trigger = function(a, b, c, e) {
            return c || J.test(a) || d("Global events are undocumented and deprecated"), D.call(this, a, b, c || document, e)
        }, a.each(I.split("|"), function(b, c) {
            a.event.special[c] = {
                setup: function() {
                    var b = this;
                    return b !== document && (a.event.add(document, c + "." + a.guid, function() {
                        a.event.trigger(c, Array.prototype.slice.call(arguments, 1), b, !0)
                    }), a._data(this, c, a.guid++)), !1
                },
                teardown: function() {
                    return this !== document && a.event.remove(document, c + "." + a._data(this, c)), !1
                }
            }
        }), a.event.special.ready = {
            setup: function() {
                this === document && d("'ready' event is deprecated")
            }
        };
        var M = a.fn.andSelf || a.fn.addBack,
            N = a.fn.find;
        if (a.fn.andSelf = function() {
                return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), M.apply(this, arguments)
            }, a.fn.find = function(a) {
                var b = N.apply(this, arguments);
                return b.context = this.context, b.selector = this.selector ? this.selector + " " + a : a, b
            }, a.Callbacks) {
            var O = a.Deferred,
                P = [
                    ["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]
                ];
            a.Deferred = function(b) {
                var c = O(),
                    e = c.promise();
                return c.pipe = e.pipe = function() {
                    var b = arguments;
                    return d("deferred.pipe() is deprecated"), a.Deferred(function(d) {
                        a.each(P, function(f, g) {
                            var h = a.isFunction(b[f]) && b[f];
                            c[g[1]](function() {
                                var b = h && h.apply(this, arguments);
                                b && a.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[g[0] + "With"](this === e ? d.promise() : this, h ? [b] : arguments)
                            })
                        }), b = null
                    }).promise()
                }, c.isResolved = function() {
                    return d("deferred.isResolved is deprecated"), "resolved" === c.state()
                }, c.isRejected = function() {
                    return d("deferred.isRejected is deprecated"), "rejected" === c.state()
                }, b && b.call(c, c), c
            }
        }
    }(jQuery, window);
/*
 * @fileOverview TouchSwipe - jQuery Plugin
 * @version 1.6.9
 *
 * @author Matt Bryson http://www.github.com/mattbryson
 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @see http://labs.skinkers.com/touchSwipe/
 * @see http://plugins.jquery.com/project/touchSwipe
 *
 * Copyright (c) 2010 Matt Bryson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
(function(a) {
    if (typeof define === "function" && define.amd && define.amd.jQuery) {
        define(["jquery"], a)
    } else {
        a(jQuery)
    }
}(function(f) {
    var y = "1.6.9",
        p = "left",
        o = "right",
        e = "up",
        x = "down",
        c = "in",
        A = "out",
        m = "none",
        s = "auto",
        l = "swipe",
        t = "pinch",
        B = "tap",
        j = "doubletap",
        b = "longtap",
        z = "hold",
        E = "horizontal",
        u = "vertical",
        i = "all",
        r = 10,
        g = "start",
        k = "move",
        h = "end",
        q = "cancel",
        a = "ontouchstart" in window,
        v = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
        d = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
        C = "TouchSwipe";
    var n = {
        fingers: 1,
        threshold: 75,
        cancelThreshold: null,
        pinchThreshold: 20,
        maxTimeThreshold: null,
        fingerReleaseThreshold: 250,
        longTapThreshold: 500,
        doubleTapThreshold: 200,
        swipe: null,
        swipeLeft: null,
        swipeRight: null,
        swipeUp: null,
        swipeDown: null,
        swipeStatus: null,
        pinchIn: null,
        pinchOut: null,
        pinchStatus: null,
        click: null,
        tap: null,
        doubleTap: null,
        longTap: null,
        hold: null,
        triggerOnTouchEnd: true,
        triggerOnTouchLeave: false,
        allowPageScroll: "auto",
        fallbackToMouseEvents: true,
        excludedElements: "label, button, input, select, textarea, a, .noSwipe",
        preventDefaultEvents: true
    };
    f.fn.swipetp = function(H) {
        var G = f(this),
            F = G.data(C);
        if (F && typeof H === "string") {
            if (F[H]) {
                return F[H].apply(this, Array.prototype.slice.call(arguments, 1))
            } else {
                f.error("Method " + H + " does not exist on jQuery.swipetp")
            }
        } else {
            if (!F && (typeof H === "object" || !H)) {
                return w.apply(this, arguments)
            }
        }
        return G
    };
    f.fn.swipetp.version = y;
    f.fn.swipetp.defaults = n;
    f.fn.swipetp.phases = {
        PHASE_START: g,
        PHASE_MOVE: k,
        PHASE_END: h,
        PHASE_CANCEL: q
    };
    f.fn.swipetp.directions = {
        LEFT: p,
        RIGHT: o,
        UP: e,
        DOWN: x,
        IN: c,
        OUT: A
    };
    f.fn.swipetp.pageScroll = {
        NONE: m,
        HORIZONTAL: E,
        VERTICAL: u,
        AUTO: s
    };
    f.fn.swipetp.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        ALL: i
    };

    function w(F) {
        if (F && (F.allowPageScroll === undefined && (F.swipe !== undefined || F.swipeStatus !== undefined))) {
            F.allowPageScroll = m
        }
        if (F.click !== undefined && F.tap === undefined) {
            F.tap = F.click
        }
        if (!F) {
            F = {}
        }
        F = f.extend({}, f.fn.swipetp.defaults, F);
        return this.each(function() {
            var H = f(this);
            var G = H.data(C);
            if (!G) {
                G = new D(this, F);
                H.data(C, G)
            }
        })
    }

    function D(a5, aw) {
        var aA = (a || d || !aw.fallbackToMouseEvents),
            K = aA ? (d ? (v ? "MSPointerDown" : "pointerdown") : "touchstart") : "mousedown",
            az = aA ? (d ? (v ? "MSPointerMove" : "pointermove") : "touchmove") : "mousemove",
            V = aA ? (d ? (v ? "MSPointerUp" : "pointerup") : "touchend") : "mouseup",
            T = aA ? null : "mouseleave",
            aE = (d ? (v ? "MSPointerCancel" : "pointercancel") : "touchcancel");
        var ah = 0,
            aQ = null,
            ac = 0,
            a2 = 0,
            a0 = 0,
            H = 1,
            ar = 0,
            aK = 0,
            N = null;
        var aS = f(a5);
        var aa = "start";
        var X = 0;
        var aR = null;
        var U = 0,
            a3 = 0,
            a6 = 0,
            ae = 0,
            O = 0;
        var aX = null,
            ag = null;
        try {
            aS.bind(K, aO);
            aS.bind(aE, ba)
        } catch (al) {
            f.error("events not supported " + K + "," + aE + " on jQuery.swipetp")
        }
        this.enable = function() {
            aS.bind(K, aO);
            aS.bind(aE, ba);
            return aS
        };
        this.disable = function() {
            aL();
            return aS
        };
        this.destroy = function() {
            aL();
            aS.data(C, null);
            aS = null
        };
        this.option = function(bd, bc) {
            if (aw[bd] !== undefined) {
                if (bc === undefined) {
                    return aw[bd]
                } else {
                    aw[bd] = bc
                }
            } else {
                f.error("Option " + bd + " does not exist on jQuery.swipetp.options")
            }
            return null
        };

        function aO(be) {
            if (aC()) {
                return
            }
            if (f(be.target).closest(aw.excludedElements, aS).length > 0) {
                return
            }
            var bf = be.originalEvent ? be.originalEvent : be;
            var bd, bg = bf.touches,
                bc = bg ? bg[0] : bf;
            aa = g;
            if (bg) {
                X = bg.length
            } else {
                be.preventDefault()
            }
            ah = 0;
            aQ = null;
            aK = null;
            ac = 0;
            a2 = 0;
            a0 = 0;
            H = 1;
            ar = 0;
            aR = ak();
            N = ab();
            S();
            if (!bg || (X === aw.fingers || aw.fingers === i) || aY()) {
                aj(0, bc);
                U = au();
                if (X == 2) {
                    aj(1, bg[1]);
                    a2 = a0 = av(aR[0].start, aR[1].start)
                }
                if (aw.swipeStatus || aw.pinchStatus) {
                    bd = P(bf, aa)
                }
            } else {
                bd = false
            }
            if (bd === false) {
                aa = q;
                P(bf, aa);
                return bd
            } else {
                if (aw.hold) {
                    ag = setTimeout(f.proxy(function() {
                        aS.trigger("hold", [bf.target]);
                        if (aw.hold) {
                            bd = aw.hold.call(aS, bf, bf.target)
                        }
                    }, this), aw.longTapThreshold)
                }
                ap(true)
            }
            return null
        }

        function a4(bf) {
            var bi = bf.originalEvent ? bf.originalEvent : bf;
            if (aa === h || aa === q || an()) {
                return
            }
            var be, bj = bi.touches,
                bd = bj ? bj[0] : bi;
            var bg = aI(bd);
            a3 = au();
            if (bj) {
                X = bj.length
            }
            if (aw.hold) {
                clearTimeout(ag)
            }
            aa = k;
            if (X == 2) {
                if (a2 == 0) {
                    aj(1, bj[1]);
                    a2 = a0 = av(aR[0].start, aR[1].start)
                } else {
                    aI(bj[1]);
                    a0 = av(aR[0].end, aR[1].end);
                    aK = at(aR[0].end, aR[1].end)
                }
                H = a8(a2, a0);
                ar = Math.abs(a2 - a0)
            }
            if ((X === aw.fingers || aw.fingers === i) || !bj || aY()) {
                aQ = aM(bg.start, bg.end);
                am(bf, aQ);
                ah = aT(bg.start, bg.end);
                ac = aN();
                aJ(aQ, ah);
                if (aw.swipeStatus || aw.pinchStatus) {
                    be = P(bi, aa)
                }
                if (!aw.triggerOnTouchEnd || aw.triggerOnTouchLeave) {
                    var bc = true;
                    if (aw.triggerOnTouchLeave) {
                        var bh = aZ(this);
                        bc = F(bg.end, bh)
                    }
                    if (!aw.triggerOnTouchEnd && bc) {
                        aa = aD(k)
                    } else {
                        if (aw.triggerOnTouchLeave && !bc) {
                            aa = aD(h)
                        }
                    }
                    if (aa == q || aa == h) {
                        P(bi, aa)
                    }
                }
            } else {
                aa = q;
                P(bi, aa)
            }
            if (be === false) {
                aa = q;
                P(bi, aa)
            }
        }

        function M(bc) {
            var bd = bc.originalEvent ? bc.originalEvent : bc,
                be = bd.touches;
            if (be) {
                if (be.length) {
                    G();
                    return true
                }
            }
            if (an()) {
                X = ae
            }
            a3 = au();
            ac = aN();
            if (bb() || !ao()) {
                aa = q;
                P(bd, aa)
            } else {
                if (aw.triggerOnTouchEnd || (aw.triggerOnTouchEnd == false && aa === k)) {
                    bc.preventDefault();
                    aa = h;
                    P(bd, aa)
                } else {
                    if (!aw.triggerOnTouchEnd && a7()) {
                        aa = h;
                        aG(bd, aa, B)
                    } else {
                        if (aa === k) {
                            aa = q;
                            P(bd, aa)
                        }
                    }
                }
            }
            ap(false);
            return null
        }

        function ba() {
            X = 0;
            a3 = 0;
            U = 0;
            a2 = 0;
            a0 = 0;
            H = 1;
            S();
            ap(false)
        }

        function L(bc) {
            var bd = bc.originalEvent ? bc.originalEvent : bc;
            if (aw.triggerOnTouchLeave) {
                aa = aD(h);
                P(bd, aa)
            }
        }

        function aL() {
            aS.unbind(K, aO);
            aS.unbind(aE, ba);
            aS.unbind(az, a4);
            aS.unbind(V, M);
            if (T) {
                aS.unbind(T, L)
            }
            ap(false)
        }

        function aD(bg) {
            var bf = bg;
            var be = aB();
            var bd = ao();
            var bc = bb();
            if (!be || bc) {
                bf = q
            } else {
                if (bd && bg == k && (!aw.triggerOnTouchEnd || aw.triggerOnTouchLeave)) {
                    bf = h
                } else {
                    if (!bd && bg == h && aw.triggerOnTouchLeave) {
                        bf = q
                    }
                }
            }
            return bf
        }

        function P(be, bc) {
            var bd, bf = be.touches;
            if ((J() || W()) || (Q() || aY())) {
                if (J() || W()) {
                    bd = aG(be, bc, l)
                }
                if ((Q() || aY()) && bd !== false) {
                    bd = aG(be, bc, t)
                }
            } else {
                if (aH() && bd !== false) {
                    bd = aG(be, bc, j)
                } else {
                    if (aq() && bd !== false) {
                        bd = aG(be, bc, b)
                    } else {
                        if (ai() && bd !== false) {
                            bd = aG(be, bc, B)
                        }
                    }
                }
            }
            if (bc === q) {
                ba(be)
            }
            if (bc === h) {
                if (bf) {
                    if (!bf.length) {
                        ba(be)
                    }
                } else {
                    ba(be)
                }
            }
            return bd
        }

        function aG(bf, bc, be) {
            var bd;
            if (be == l) {
                aS.trigger("swipeStatus", [bc, aQ || null, ah || 0, ac || 0, X, aR]);
                if (aw.swipeStatus) {
                    bd = aw.swipeStatus.call(aS, bf, bc, aQ || null, ah || 0, ac || 0, X, aR);
                    if (bd === false) {
                        return false
                    }
                }
                if (bc == h && aW()) {
                    aS.trigger("swipe", [aQ, ah, ac, X, aR]);
                    if (aw.swipe) {
                        bd = aw.swipe.call(aS, bf, aQ, ah, ac, X, aR);
                        if (bd === false) {
                            return false
                        }
                    }
                    switch (aQ) {
                        case p:
                            aS.trigger("swipeLeft", [aQ, ah, ac, X, aR]);
                            if (aw.swipeLeft) {
                                bd = aw.swipeLeft.call(aS, bf, aQ, ah, ac, X, aR)
                            }
                            break;
                        case o:
                            aS.trigger("swipeRight", [aQ, ah, ac, X, aR]);
                            if (aw.swipeRight) {
                                bd = aw.swipeRight.call(aS, bf, aQ, ah, ac, X, aR)
                            }
                            break;
                        case e:
                            aS.trigger("swipeUp", [aQ, ah, ac, X, aR]);
                            if (aw.swipeUp) {
                                bd = aw.swipeUp.call(aS, bf, aQ, ah, ac, X, aR)
                            }
                            break;
                        case x:
                            aS.trigger("swipeDown", [aQ, ah, ac, X, aR]);
                            if (aw.swipeDown) {
                                bd = aw.swipeDown.call(aS, bf, aQ, ah, ac, X, aR)
                            }
                            break
                    }
                }
            }
            if (be == t) {
                aS.trigger("pinchStatus", [bc, aK || null, ar || 0, ac || 0, X, H, aR]);
                if (aw.pinchStatus) {
                    bd = aw.pinchStatus.call(aS, bf, bc, aK || null, ar || 0, ac || 0, X, H, aR);
                    if (bd === false) {
                        return false
                    }
                }
                if (bc == h && a9()) {
                    switch (aK) {
                        case c:
                            aS.trigger("pinchIn", [aK || null, ar || 0, ac || 0, X, H, aR]);
                            if (aw.pinchIn) {
                                bd = aw.pinchIn.call(aS, bf, aK || null, ar || 0, ac || 0, X, H, aR)
                            }
                            break;
                        case A:
                            aS.trigger("pinchOut", [aK || null, ar || 0, ac || 0, X, H, aR]);
                            if (aw.pinchOut) {
                                bd = aw.pinchOut.call(aS, bf, aK || null, ar || 0, ac || 0, X, H, aR)
                            }
                            break
                    }
                }
            }
            if (be == B) {
                if (bc === q || bc === h) {
                    clearTimeout(aX);
                    clearTimeout(ag);
                    if (Z() && !I()) {
                        O = au();
                        aX = setTimeout(f.proxy(function() {
                            O = null;
                            aS.trigger("tap", [bf.target]);
                            if (aw.tap) {
                                bd = aw.tap.call(aS, bf, bf.target)
                            }
                        }, this), aw.doubleTapThreshold)
                    } else {
                        O = null;
                        aS.trigger("tap", [bf.target]);
                        if (aw.tap) {
                            bd = aw.tap.call(aS, bf, bf.target)
                        }
                    }
                }
            } else {
                if (be == j) {
                    if (bc === q || bc === h) {
                        clearTimeout(aX);
                        O = null;
                        aS.trigger("doubletap", [bf.target]);
                        if (aw.doubleTap) {
                            bd = aw.doubleTap.call(aS, bf, bf.target)
                        }
                    }
                } else {
                    if (be == b) {
                        if (bc === q || bc === h) {
                            clearTimeout(aX);
                            O = null;
                            aS.trigger("longtap", [bf.target]);
                            if (aw.longTap) {
                                bd = aw.longTap.call(aS, bf, bf.target)
                            }
                        }
                    }
                }
            }
            return bd
        }

        function ao() {
            var bc = true;
            if (aw.threshold !== null) {
                bc = ah >= aw.threshold
            }
            return bc
        }

        function bb() {
            var bc = false;
            if (aw.cancelThreshold !== null && aQ !== null) {
                bc = (aU(aQ) - ah) >= aw.cancelThreshold
            }
            return bc
        }

        function af() {
            if (aw.pinchThreshold !== null) {
                return ar >= aw.pinchThreshold
            }
            return true
        }

        function aB() {
            var bc;
            if (aw.maxTimeThreshold) {
                if (ac >= aw.maxTimeThreshold) {
                    bc = false
                } else {
                    bc = true
                }
            } else {
                bc = true
            }
            return bc
        }

        function am(bc, bd) {
            if (aw.preventDefaultEvents === false) {
                return
            }
            if (aw.allowPageScroll === m) {
                bc.preventDefault()
            } else {
                var be = aw.allowPageScroll === s;
                switch (bd) {
                    case p:
                        if ((aw.swipeLeft && be) || (!be && aw.allowPageScroll != E)) {
                            bc.preventDefault()
                        }
                        break;
                    case o:
                        if ((aw.swipeRight && be) || (!be && aw.allowPageScroll != E)) {
                            bc.preventDefault()
                        }
                        break;
                    case e:
                        if ((aw.swipeUp && be) || (!be && aw.allowPageScroll != u)) {
                            bc.preventDefault()
                        }
                        break;
                    case x:
                        if ((aw.swipeDown && be) || (!be && aw.allowPageScroll != u)) {
                            bc.preventDefault()
                        }
                        break
                }
            }
        }

        function a9() {
            var bd = aP();
            var bc = Y();
            var be = af();
            return bd && bc && be
        }

        function aY() {
            return !!(aw.pinchStatus || aw.pinchIn || aw.pinchOut)
        }

        function Q() {
            return !!(a9() && aY())
        }

        function aW() {
            var bf = aB();
            var bh = ao();
            var be = aP();
            var bc = Y();
            var bd = bb();
            var bg = !bd && bc && be && bh && bf;
            return bg
        }

        function W() {
            return !!(aw.swipe || aw.swipeStatus || aw.swipeLeft || aw.swipeRight || aw.swipeUp || aw.swipeDown)
        }

        function J() {
            return !!(aW() && W())
        }

        function aP() {
            return ((X === aw.fingers || aw.fingers === i) || !a)
        }

        function Y() {
            return aR[0].end.x !== 0
        }

        function a7() {
            return !!(aw.tap)
        }

        function Z() {
            return !!(aw.doubleTap)
        }

        function aV() {
            return !!(aw.longTap)
        }

        function R() {
            if (O == null) {
                return false
            }
            var bc = au();
            return (Z() && ((bc - O) <= aw.doubleTapThreshold))
        }

        function I() {
            return R()
        }

        function ay() {
            return ((X === 1 || !a) && (isNaN(ah) || ah < aw.threshold))
        }

        function a1() {
            return ((ac > aw.longTapThreshold) && (ah < r))
        }

        function ai() {
            return !!(ay() && a7())
        }

        function aH() {
            return !!(R() && Z())
        }

        function aq() {
            return !!(a1() && aV())
        }

        function G() {
            a6 = au();
            ae = event.touches.length + 1
        }

        function S() {
            a6 = 0;
            ae = 0
        }

        function an() {
            var bc = false;
            if (a6) {
                var bd = au() - a6;
                if (bd <= aw.fingerReleaseThreshold) {
                    bc = true
                }
            }
            return bc
        }

        function aC() {
            return !!(aS.data(C + "_intouch") === true)
        }

        function ap(bc) {
            if (bc === true) {
                aS.bind(az, a4);
                aS.bind(V, M);
                if (T) {
                    aS.bind(T, L)
                }
            } else {
                aS.unbind(az, a4, false);
                aS.unbind(V, M, false);
                if (T) {
                    aS.unbind(T, L, false)
                }
            }
            aS.data(C + "_intouch", bc === true)
        }

        function aj(bd, bc) {
            var be = bc.identifier !== undefined ? bc.identifier : 0;
            aR[bd].identifier = be;
            aR[bd].start.x = aR[bd].end.x = bc.pageX || bc.clientX;
            aR[bd].start.y = aR[bd].end.y = bc.pageY || bc.clientY;
            return aR[bd]
        }

        function aI(bc) {
            var be = bc.identifier !== undefined ? bc.identifier : 0;
            var bd = ad(be);
            bd.end.x = bc.pageX || bc.clientX;
            bd.end.y = bc.pageY || bc.clientY;
            return bd
        }

        function ad(bd) {
            for (var bc = 0; bc < aR.length; bc++) {
                if (aR[bc].identifier == bd) {
                    return aR[bc]
                }
            }
        }

        function ak() {
            var bc = [];
            for (var bd = 0; bd <= 5; bd++) {
                bc.push({
                    start: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    },
                    identifier: 0
                })
            }
            return bc
        }

        function aJ(bc, bd) {
            bd = Math.max(bd, aU(bc));
            N[bc].distance = bd
        }

        function aU(bc) {
            if (N[bc]) {
                return N[bc].distance
            }
            return undefined
        }

        function ab() {
            var bc = {};
            bc[p] = ax(p);
            bc[o] = ax(o);
            bc[e] = ax(e);
            bc[x] = ax(x);
            return bc
        }

        function ax(bc) {
            return {
                direction: bc,
                distance: 0
            }
        }

        function aN() {
            return a3 - U
        }

        function av(bf, be) {
            var bd = Math.abs(bf.x - be.x);
            var bc = Math.abs(bf.y - be.y);
            return Math.round(Math.sqrt(bd * bd + bc * bc))
        }

        function a8(bc, bd) {
            var be = (bd / bc) * 1;
            return be.toFixed(2)
        }

        function at() {
            if (H < 1) {
                return A
            } else {
                return c
            }
        }

        function aT(bd, bc) {
            return Math.round(Math.sqrt(Math.pow(bc.x - bd.x, 2) + Math.pow(bc.y - bd.y, 2)))
        }

        function aF(bf, bd) {
            var bc = bf.x - bd.x;
            var bh = bd.y - bf.y;
            var be = Math.atan2(bh, bc);
            var bg = Math.round(be * 180 / Math.PI);
            if (bg < 0) {
                bg = 360 - Math.abs(bg)
            }
            return bg
        }

        function aM(bd, bc) {
            var be = aF(bd, bc);
            if ((be <= 45) && (be >= 0)) {
                return p
            } else {
                if ((be <= 360) && (be >= 315)) {
                    return p
                } else {
                    if ((be >= 135) && (be <= 225)) {
                        return o
                    } else {
                        if ((be > 45) && (be < 135)) {
                            return x
                        } else {
                            return e
                        }
                    }
                }
            }
        }

        function au() {
            var bc = new Date();
            return bc.getTime()
        }

        function aZ(bc) {
            bc = f(bc);
            var be = bc.offset();
            var bd = {
                left: be.left,
                right: be.left + bc.outerWidth(),
                top: be.top,
                bottom: be.top + bc.outerHeight()
            };
            return bd
        }

        function F(bc, bd) {
            return (bc.x > bd.left && bc.x < bd.right && bc.y > bd.top && bc.y < bd.bottom)
        }
    }
}));
if (typeof(console) === 'undefined') {
    var console = {}
    console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = console.groupCollapsed = function() {};
}
if (window.tplogs == true) try {
    console.groupCollapsed("ThemePunch GreenSocks Logs");
} catch (e) {}
var oldgs = window.GreenSockGlobals;
oldgs_queue = window._gsQueue;
var punchgs = window.GreenSockGlobals = {};
if (window.tplogs == true) try {
    console.info("Build GreenSock SandBox for ThemePunch Plugins");
    console.info("GreenSock TweenLite Engine Initalised by ThemePunch Plugin");
} catch (e) {}
/*!
 * VERSION: 1.17.0
 * DATE: 2015-05-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
(function(t, e) {
    "use strict";
    var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
    if (!i.TweenLite) {
        var s, n, r, a, o, l = function(t) {
                var e, s = t.split("."),
                    n = i;
                for (e = 0; s.length > e; e++) n[s[e]] = n = n[s[e]] || {};
                return n
            },
            h = l("com.greensock"),
            _ = 1e-10,
            u = function(t) {
                var e, i = [],
                    s = t.length;
                for (e = 0; e !== s; i.push(t[e++]));
                return i
            },
            m = function() {},
            f = function() {
                var t = Object.prototype.toString,
                    e = t.call([]);
                return function(i) {
                    return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                }
            }(),
            c = {},
            p = function(s, n, r, a) {
                this.sc = c[s] ? c[s].sc : [], c[s] = this, this.gsClass = null, this.func = r;
                var o = [];
                this.check = function(h) {
                    for (var _, u, m, f, d = n.length, v = d; --d > -1;)(_ = c[n[d]] || new p(n[d], [])).gsClass ? (o[d] = _.gsClass, v--) : h && _.sc.push(this);
                    if (0 === v && r)
                        for (u = ("com.greensock." + s).split("."), m = u.pop(), f = l(u.join("."))[m] = this.gsClass = r.apply(r, o), a && (i[m] = f, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + s.split(".").pop(), [], function() {
                                return f
                            }) : s === e && "undefined" != typeof module && module.exports && (module.exports = f)), d = 0; this.sc.length > d; d++) this.sc[d].check()
                }, this.check(!0)
            },
            d = t._gsDefine = function(t, e, i, s) {
                return new p(t, e, i, s)
            },
            v = h._class = function(t, e, i) {
                return e = e || function() {}, d(t, [], function() {
                    return e
                }, i), e
            };
        d.globals = i;
        var g = [0, 0, 1, 1],
            T = [],
            y = v("easing.Ease", function(t, e, i, s) {
                this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? g.concat(e) : g
            }, !0),
            w = y.map = {},
            P = y.register = function(t, e, i, s) {
                for (var n, r, a, o, l = e.split(","), _ = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --_ > -1;)
                    for (r = l[_], n = s ? v("easing." + r, null, !0) : h.easing[r] || {}, a = u.length; --a > -1;) o = u[a], w[r + "." + o] = w[o + r] = n[o] = t.getRatio ? t : t[o] || new t
            };
        for (r = y.prototype, r._calcEnd = !1, r.getRatio = function(t) {
                if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                var e = this._type,
                    i = this._power,
                    s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2
            }, s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], n = s.length; --n > -1;) r = s[n] + ",Power" + n, P(new y(null, null, 1, n), r, "easeOut", !0), P(new y(null, null, 2, n), r, "easeIn" + (0 === n ? ",easeNone" : "")), P(new y(null, null, 3, n), r, "easeInOut");
        w.linear = h.easing.Linear.easeIn, w.swing = h.easing.Quad.easeInOut;
        var b = v("events.EventDispatcher", function(t) {
            this._listeners = {}, this._eventTarget = t || this
        });
        r = b.prototype, r.addEventListener = function(t, e, i, s, n) {
            n = n || 0;
            var r, l, h = this._listeners[t],
                _ = 0;
            for (null == h && (this._listeners[t] = h = []), l = h.length; --l > -1;) r = h[l], r.c === e && r.s === i ? h.splice(l, 1) : 0 === _ && n > r.pr && (_ = l + 1);
            h.splice(_, 0, {
                c: e,
                s: i,
                up: s,
                pr: n
            }), this !== a || o || a.wake()
        }, r.removeEventListener = function(t, e) {
            var i, s = this._listeners[t];
            if (s)
                for (i = s.length; --i > -1;)
                    if (s[i].c === e) return s.splice(i, 1), void 0
        }, r.dispatchEvent = function(t) {
            var e, i, s, n = this._listeners[t];
            if (n)
                for (e = n.length, i = this._eventTarget; --e > -1;) s = n[e], s && (s.up ? s.c.call(s.s || i, {
                    type: t,
                    target: i
                }) : s.c.call(s.s || i))
        };
        var k = t.requestAnimationFrame,
            A = t.cancelAnimationFrame,
            S = Date.now || function() {
                return (new Date).getTime()
            },
            x = S();
        for (s = ["ms", "moz", "webkit", "o"], n = s.length; --n > -1 && !k;) k = t[s[n] + "RequestAnimationFrame"], A = t[s[n] + "CancelAnimationFrame"] || t[s[n] + "CancelRequestAnimationFrame"];
        v("Ticker", function(t, e) {
            var i, s, n, r, l, h = this,
                u = S(),
                f = e !== !1 && k,
                c = 500,
                p = 33,
                d = "tick",
                v = function(t) {
                    var e, a, o = S() - x;
                    o > c && (u += o - p), x += o, h.time = (x - u) / 1e3, e = h.time - l, (!i || e > 0 || t === !0) && (h.frame++, l += e + (e >= r ? .004 : r - e), a = !0), t !== !0 && (n = s(v)), a && h.dispatchEvent(d)
                };
            b.call(h), h.time = h.frame = 0, h.tick = function() {
                v(!0)
            }, h.lagSmoothing = function(t, e) {
                c = t || 1 / _, p = Math.min(e, c, 0)
            }, h.sleep = function() {
                null != n && (f && A ? A(n) : clearTimeout(n), s = m, n = null, h === a && (o = !1))
            }, h.wake = function() {
                null !== n ? h.sleep() : h.frame > 10 && (x = S() - c + 5), s = 0 === i ? m : f && k ? k : function(t) {
                    return setTimeout(t, 0 | 1e3 * (l - h.time) + 1)
                }, h === a && (o = !0), v(2)
            }, h.fps = function(t) {
                return arguments.length ? (i = t, r = 1 / (i || 60), l = this.time + r, h.wake(), void 0) : i
            }, h.useRAF = function(t) {
                return arguments.length ? (h.sleep(), f = t, h.fps(i), void 0) : f
            }, h.fps(t), setTimeout(function() {
                f && 5 > h.frame && h.useRAF(!1)
            }, 1500)
        }), r = h.Ticker.prototype = new h.events.EventDispatcher, r.constructor = h.Ticker;
        var R = v("core.Animation", function(t, e) {
            if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, B) {
                o || a.wake();
                var i = this.vars.useFrames ? q : B;
                i.add(this, i._time), this.vars.paused && this.paused(!0)
            }
        });
        a = R.ticker = new h.Ticker, r = R.prototype, r._dirty = r._gc = r._initted = r._paused = !1, r._totalTime = r._time = 0, r._rawPrevTime = -1, r._next = r._last = r._onUpdate = r._timeline = r.timeline = null, r._paused = !1;
        var C = function() {
            o && S() - x > 2e3 && a.wake(), setTimeout(C, 2e3)
        };
        C(), r.play = function(t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, r.pause = function(t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, r.resume = function(t, e) {
            return null != t && this.seek(t, e), this.paused(!1)
        }, r.seek = function(t, e) {
            return this.totalTime(Number(t), e !== !1)
        }, r.restart = function(t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
        }, r.reverse = function(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, r.render = function() {}, r.invalidate = function() {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
        }, r.isActive = function() {
            var t, e = this._timeline,
                i = this._startTime;
            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
        }, r._enabled = function(t, e) {
            return o || a.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
        }, r._kill = function() {
            return this._enabled(!1, !1)
        }, r.kill = function(t, e) {
            return this._kill(t, e), this
        }, r._uncache = function(t) {
            for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
            return this
        }, r._swapSelfInParams = function(t) {
            for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
            return i
        }, r._callback = function(t) {
            var e = this.vars;
            e[t].apply(e[t + "Scope"] || e.callbackScope || this, e[t + "Params"] || T)
        }, r.eventCallback = function(t, e, i, s) {
            if ("on" === (t || "").substr(0, 2)) {
                var n = this.vars;
                if (1 === arguments.length) return n[t];
                null == e ? delete n[t] : (n[t] = e, n[t + "Params"] = f(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, n[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }, r.delay = function(t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
        }, r.duration = function(t) {
            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, r.totalDuration = function(t) {
            return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
        }, r.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
        }, r.totalTime = function(t, e, i) {
            if (o || a.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var s = this._totalDuration,
                        n = this._timeline;
                    if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : n._time) - (this._reversed ? s - t : t) / this._timeScale, n._dirty || this._uncache(!1), n._timeline)
                        for (; n._timeline;) n._timeline._time !== (n._startTime + n._totalTime) / n._timeScale && n.totalTime(n._totalTime, !0), n = n._timeline
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), z.length && $())
            }
            return this
        }, r.progress = r.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
        }, r.startTime = function(t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
        }, r.endTime = function(t) {
            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
        }, r.timeScale = function(t) {
            if (!arguments.length) return this._timeScale;
            if (t = t || _, this._timeline && this._timeline.smoothChildTiming) {
                var e = this._pauseTime,
                    i = e || 0 === e ? e : this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / t
            }
            return this._timeScale = t, this._uncache(!1)
        }, r.reversed = function(t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        }, r.paused = function(t) {
            if (!arguments.length) return this._paused;
            var e, i, s = this._timeline;
            return t != this._paused && s && (o || t || a.wake(), e = s.rawTime(), i = e - this._pauseTime, !t && s.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && this.render(s.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, !0, !0)), this._gc && !t && this._enabled(!0, !1), this
        };
        var D = v("core.SimpleTimeline", function(t) {
            R.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        r = D.prototype = new R, r.constructor = D, r.kill()._gc = !1, r._first = r._last = r._recent = null, r._sortChildren = !1, r.add = r.insert = function(t, e) {
            var i, s;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                for (s = t._startTime; i && i._startTime > s;) i = i._prev;
            return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this
        }, r._remove = function(t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
        }, r.render = function(t, e, i) {
            var s, n = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; n;) s = n._next, (n._active || t >= n._startTime && !n._paused) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = s
        }, r.rawTime = function() {
            return o || a.wake(), this._totalTime
        };
        var I = v("TweenLite", function(e, i, s) {
                if (R.call(this, i, s), this.render = I.prototype.render, null == e) throw "Cannot tween a null target.";
                this.target = e = "string" != typeof e ? e : I.selector(e) || e;
                var n, r, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                    l = this.vars.overwrite;
                if (this._overwrite = l = null == l ? Q[I.defaultOverwrite] : "number" == typeof l ? l >> 0 : Q[l], (o || e instanceof Array || e.push && f(e)) && "number" != typeof e[0])
                    for (this._targets = a = u(e), this._propLookup = [], this._siblings = [], n = 0; a.length > n; n++) r = a[n], r ? "string" != typeof r ? r.length && r !== t && r[0] && (r[0] === t || r[0].nodeType && r[0].style && !r.nodeType) ? (a.splice(n--, 1), this._targets = a = a.concat(u(r))) : (this._siblings[n] = K(r, this, !1), 1 === l && this._siblings[n].length > 1 && J(r, this, null, 1, this._siblings[n])) : (r = a[n--] = I.selector(r), "string" == typeof r && a.splice(n + 1, 1)) : a.splice(n--, 1);
                else this._propLookup = {}, this._siblings = K(e, this, !1), 1 === l && this._siblings.length > 1 && J(e, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -_, this.render(-this._delay))
            }, !0),
            E = function(e) {
                return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
            },
            O = function(t, e) {
                var i, s = {};
                for (i in t) G[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!F[i] || F[i] && F[i]._autoCSS) || (s[i] = t[i], delete t[i]);
                t.css = s
            };
        r = I.prototype = new R, r.constructor = I, r.kill()._gc = !1, r.ratio = 0, r._firstPT = r._targets = r._overwrittenProps = r._startAt = null, r._notifyPluginsOfEnabled = r._lazy = !1, I.version = "1.17.0", I.defaultEase = r._ease = new y(null, null, 1, 1), I.defaultOverwrite = "auto", I.ticker = a, I.autoSleep = 120, I.lagSmoothing = function(t, e) {
            a.lagSmoothing(t, e)
        }, I.selector = t.$ || t.jQuery || function(e) {
            var i = t.$ || t.jQuery;
            return i ? (I.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
        };
        var z = [],
            N = {},
            L = I._internals = {
                isArray: f,
                isSelector: E,
                lazyTweens: z
            },
            F = I._plugins = {},
            U = L.tweenLookup = {},
            j = 0,
            G = L.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1,
                lazy: 1,
                onOverwrite: 1,
                callbackScope: 1
            },
            Q = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                "true": 1,
                "false": 0
            },
            q = R._rootFramesTimeline = new D,
            B = R._rootTimeline = new D,
            M = 30,
            $ = L.lazyRender = function() {
                var t, e = z.length;
                for (N = {}; --e > -1;) t = z[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                z.length = 0
            };
        B._startTime = a.time, q._startTime = a.frame, B._active = q._active = !0, setTimeout($, 1), R._updateRoot = I.render = function() {
            var t, e, i;
            if (z.length && $(), B.render((a.time - B._startTime) * B._timeScale, !1, !1), q.render((a.frame - q._startTime) * q._timeScale, !1, !1), z.length && $(), a.frame >= M) {
                M = a.frame + (parseInt(I.autoSleep, 10) || 120);
                for (i in U) {
                    for (e = U[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete U[i]
                }
                if (i = B._first, (!i || i._paused) && I.autoSleep && !q._first && 1 === a._listeners.tick.length) {
                    for (; i && i._paused;) i = i._next;
                    i || a.sleep()
                }
            }
        }, a.addEventListener("tick", R._updateRoot);
        var K = function(t, e, i) {
                var s, n, r = t._gsTweenID;
                if (U[r || (t._gsTweenID = r = "t" + j++)] || (U[r] = {
                        target: t,
                        tweens: []
                    }), e && (s = U[r].tweens, s[n = s.length] = e, i))
                    for (; --n > -1;) s[n] === e && s.splice(n, 1);
                return U[r].tweens
            },
            H = function(t, e, i, s) {
                var n, r, a = t.vars.onOverwrite;
                return a && (n = a(t, e, i, s)), a = I.onOverwrite, a && (r = a(t, e, i, s)), n !== !1 && r !== !1
            },
            J = function(t, e, i, s, n) {
                var r, a, o, l;
                if (1 === s || s >= 4) {
                    for (l = n.length, r = 0; l > r; r++)
                        if ((o = n[r]) !== e) o._gc || o._kill(null, t, e) && (a = !0);
                        else if (5 === s) break;
                    return a
                }
                var h, u = e._startTime + _,
                    m = [],
                    f = 0,
                    c = 0 === e._duration;
                for (r = n.length; --r > -1;)(o = n[r]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || V(e, 0, c), 0 === V(o, h, c) && (m[f++] = o)) : u >= o._startTime && o._startTime + o.totalDuration() / o._timeScale > u && ((c || !o._initted) && 2e-10 >= u - o._startTime || (m[f++] = o)));
                for (r = f; --r > -1;)
                    if (o = m[r], 2 === s && o._kill(i, t, e) && (a = !0), 2 !== s || !o._firstPT && o._initted) {
                        if (2 !== s && !H(o, e)) continue;
                        o._enabled(!1, !1) && (a = !0)
                    }
                return a
            },
            V = function(t, e, i) {
                for (var s = t._timeline, n = s._timeScale, r = t._startTime; s._timeline;) {
                    if (r += s._startTime, n *= s._timeScale, s._paused) return -100;
                    s = s._timeline
                }
                return r /= n, r > e ? r - e : i && r === e || !t._initted && 2 * _ > r - e ? _ : (r += t.totalDuration() / t._timeScale / n) > e + _ ? 0 : r - e - _
            };
        r._init = function() {
            var t, e, i, s, n, r = this.vars,
                a = this._overwrittenProps,
                o = this._duration,
                l = !!r.immediateRender,
                h = r.ease;
            if (r.startAt) {
                this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), n = {};
                for (s in r.startAt) n[s] = r.startAt[s];
                if (n.overwrite = !1, n.immediateRender = !0, n.lazy = l && r.lazy !== !1, n.startAt = n.delay = null, this._startAt = I.to(this.target, 0, n), l)
                    if (this._time > 0) this._startAt = null;
                    else if (0 !== o) return
            } else if (r.runBackwards && 0 !== o)
                if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                else {
                    0 !== this._time && (l = !1), i = {};
                    for (s in r) G[s] && "autoCSS" !== s || (i[s] = r[s]);
                    if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && r.lazy !== !1, i.immediateRender = l, this._startAt = I.to(this.target, 0, i), l) {
                        if (0 === this._time) return
                    } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                }
            if (this._ease = h = h ? h instanceof y ? h : "function" == typeof h ? new y(h, r.easeParams) : w[h] || I.defaultEase : I.defaultEase, r.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, r.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null) && (e = !0);
            else e = this._initProps(this.target, this._propLookup, this._siblings, a);
            if (e && I._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), r.runBackwards)
                for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
            this._onUpdate = r.onUpdate, this._initted = !0
        }, r._initProps = function(e, i, s, n) {
            var r, a, o, l, h, _;
            if (null == e) return !1;
            N[e._gsTweenID] && $(), this.vars.css || e.style && e !== t && e.nodeType && F.css && this.vars.autoCSS !== !1 && O(this.vars, e);
            for (r in this.vars) {
                if (_ = this.vars[r], G[r]) _ && (_ instanceof Array || _.push && f(_)) && -1 !== _.join("").indexOf("{self}") && (this.vars[r] = _ = this._swapSelfInParams(_, this));
                else if (F[r] && (l = new F[r])._onInitTween(e, this.vars[r], this)) {
                    for (this._firstPT = h = {
                            _next: this._firstPT,
                            t: l,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: !0,
                            n: r,
                            pg: !0,
                            pr: l._priority
                        }, a = l._overwriteProps.length; --a > -1;) i[l._overwriteProps[a]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (o = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                } else this._firstPT = i[r] = h = {
                    _next: this._firstPT,
                    t: e,
                    p: r,
                    f: "function" == typeof e[r],
                    n: r,
                    pg: !1,
                    pr: 0
                }, h.s = h.f ? e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(e[r]), h.c = "string" == typeof _ && "=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * Number(_.substr(2)) : Number(_) - h.s || 0;
                h && h._next && (h._next._prev = h)
            }
            return n && this._kill(n, e) ? this._initProps(e, i, s, n) : this._overwrite > 1 && this._firstPT && s.length > 1 && J(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, n)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (N[e._gsTweenID] = !0), o)
        }, r.render = function(t, e, i) {
            var s, n, r, a, o = this._time,
                l = this._duration,
                h = this._rawPrevTime;
            if (t >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, n = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > h || h === _ && "isPause" !== this.data) && h !== t && (i = !0, h > _ && (n = "onReverseComplete")), this._rawPrevTime = a = !e || t || h === t ? t : _);
            else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && h > 0) && (n = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== _ || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || h === t ? t : _)), this._initted || (i = !0);
            else if (this._totalTime = this._time = t, this._easeType) {
                var u = t / l,
                    m = this._easeType,
                    f = this._easePower;
                (1 === m || 3 === m && u >= .5) && (u = 1 - u), 3 === m && (u *= 2), 1 === f ? u *= u : 2 === f ? u *= u * u : 3 === f ? u *= u * u * u : 4 === f && (u *= u * u * u * u), this.ratio = 1 === m ? 1 - u : 2 === m ? u : .5 > t / l ? u / 2 : 1 - u / 2
            } else this.ratio = this._ease.getRatio(t / l);
            if (this._time !== o || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = h, z.push(this), this._lazy = [t, e], void 0;
                    this._time && !s ? this.ratio = this._ease.getRatio(this._time / l) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : n || (n = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), r = this._firstPT; r;) r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s, r = r._next;
                this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== o || s) && this._callback("onUpdate")), n && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[n] && this._callback(n), 0 === l && this._rawPrevTime === _ && a !== _ && (this._rawPrevTime = 0))
            }
        }, r._kill = function(t, e, i) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : I.selector(e) || e;
            var s, n, r, a, o, l, h, _, u, m = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
            if ((f(e) || E(e)) && "number" != typeof e[0])
                for (s = e.length; --s > -1;) this._kill(t, e[s], i) && (l = !0);
            else {
                if (this._targets) {
                    for (s = this._targets.length; --s > -1;)
                        if (e === this._targets[s]) {
                            o = this._propLookup[s] || {}, this._overwrittenProps = this._overwrittenProps || [], n = this._overwrittenProps[s] = t ? this._overwrittenProps[s] || {} : "all";
                            break
                        }
                } else {
                    if (e !== this.target) return !1;
                    o = this._propLookup, n = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (o) {
                    if (h = t || o, _ = t !== n && "all" !== n && t !== o && ("object" != typeof t || !t._tempKill), i && (I.onOverwrite || this.vars.onOverwrite)) {
                        for (r in h) o[r] && (u || (u = []), u.push(r));
                        if ((u || !t) && !H(this, i, e, u)) return !1
                    }
                    for (r in h)(a = o[r]) && (m && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, l = !0), a.pg && a.t._kill(h) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[r]), _ && (n[r] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return l
        }, r.invalidate = function() {
            return this._notifyPluginsOfEnabled && I._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], R.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -_, this.render(-this._delay)), this
        }, r._enabled = function(t, e) {
            if (o || a.wake(), t && this._gc) {
                var i, s = this._targets;
                if (s)
                    for (i = s.length; --i > -1;) this._siblings[i] = K(s[i], this, !0);
                else this._siblings = K(this.target, this, !0)
            }
            return R.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? I._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
        }, I.to = function(t, e, i) {
            return new I(t, e, i)
        }, I.from = function(t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new I(t, e, i)
        }, I.fromTo = function(t, e, i, s) {
            return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new I(t, e, s)
        }, I.delayedCall = function(t, e, i, s, n) {
            return new I(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: s,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                lazy: !1,
                useFrames: n,
                overwrite: 0
            })
        }, I.set = function(t, e) {
            return new I(t, 0, e)
        }, I.getTweensOf = function(t, e) {
            if (null == t) return [];
            t = "string" != typeof t ? t : I.selector(t) || t;
            var i, s, n, r;
            if ((f(t) || E(t)) && "number" != typeof t[0]) {
                for (i = t.length, s = []; --i > -1;) s = s.concat(I.getTweensOf(t[i], e));
                for (i = s.length; --i > -1;)
                    for (r = s[i], n = i; --n > -1;) r === s[n] && s.splice(i, 1)
            } else
                for (s = K(t).concat(), i = s.length; --i > -1;)(s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
            return s
        }, I.killTweensOf = I.killDelayedCallsTo = function(t, e, i) {
            "object" == typeof e && (i = e, e = !1);
            for (var s = I.getTweensOf(t, e), n = s.length; --n > -1;) s[n]._kill(i, t)
        };
        var W = v("plugins.TweenPlugin", function(t, e) {
            this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = W.prototype
        }, !0);
        if (r = W.prototype, W.version = "1.10.1", W.API = 2, r._firstPT = null, r._addTween = function(t, e, i, s, n, r) {
                var a, o;
                return null != s && (a = "number" == typeof s || "=" !== s.charAt(1) ? Number(s) - Number(i) : parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2))) ? (this._firstPT = o = {
                    _next: this._firstPT,
                    t: t,
                    p: e,
                    s: i,
                    c: a,
                    f: "function" == typeof t[e],
                    n: n || e,
                    r: r
                }, o._next && (o._next._prev = o), o) : void 0
            }, r.setRatio = function(t) {
                for (var e, i = this._firstPT, s = 1e-6; i;) e = i.c * t + i.s, i.r ? e = Math.round(e) : s > e && e > -s && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
            }, r._kill = function(t) {
                var e, i = this._overwriteProps,
                    s = this._firstPT;
                if (null != t[this._propName]) this._overwriteProps = [];
                else
                    for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                for (; s;) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
                return !1
            }, r._roundProps = function(t, e) {
                for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
            }, I._onPluginEvent = function(t, e) {
                var i, s, n, r, a, o = e._firstPT;
                if ("_onInitAllProps" === t) {
                    for (; o;) {
                        for (a = o._next, s = n; s && s.pr > o.pr;) s = s._next;
                        (o._prev = s ? s._prev : r) ? o._prev._next = o: n = o, (o._next = s) ? s._prev = o : r = o, o = a
                    }
                    o = e._firstPT = n
                }
                for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                return i
            }, W.activate = function(t) {
                for (var e = t.length; --e > -1;) t[e].API === W.API && (F[(new t[e])._propName] = t[e]);
                return !0
            }, d.plugin = function(t) {
                if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                var e, i = t.propName,
                    s = t.priority || 0,
                    n = t.overwriteProps,
                    r = {
                        init: "_onInitTween",
                        set: "setRatio",
                        kill: "_kill",
                        round: "_roundProps",
                        initAll: "_onInitAllProps"
                    },
                    a = v("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                        W.call(this, i, s), this._overwriteProps = n || []
                    }, t.global === !0),
                    o = a.prototype = new W(i);
                o.constructor = a, a.API = t.API;
                for (e in r) "function" == typeof t[e] && (o[r[e]] = t[e]);
                return a.version = t.version, W.activate([a]), a
            }, s = t._gsQueue) {
            for (n = 0; s.length > n; n++) s[n]();
            for (r in c) c[r].func || t.console.log("GSAP encountered missing dependency: com.greensock." + r)
        }
        o = !1
    }
})("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite");
/*!
 * VERSION: 1.17.0
 * DATE: 2015-05-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
            var s = function(t) {
                    e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                    var i, s, r = this.vars;
                    for (s in r) i = r[s], h(i) && -1 !== i.join("").indexOf("{self}") && (r[s] = this._swapSelfInParams(i));
                    h(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                },
                r = 1e-10,
                n = i._internals,
                a = s._internals = {},
                o = n.isSelector,
                h = n.isArray,
                l = n.lazyTweens,
                _ = n.lazyRender,
                u = [],
                f = _gsScope._gsDefine.globals,
                c = function(t) {
                    var e, i = {};
                    for (e in t) i[e] = t[e];
                    return i
                },
                p = a.pauseCallback = function(t, e, i, s) {
                    var n, a = t._timeline,
                        o = a._totalTime,
                        h = t._startTime,
                        l = 0 > t._rawPrevTime || 0 === t._rawPrevTime && a._reversed,
                        _ = l ? 0 : r,
                        f = l ? r : 0;
                    if (e || !this._forcingPlayhead) {
                        for (a.pause(h), n = t._prev; n && n._startTime === h;) n._rawPrevTime = f, n = n._prev;
                        for (n = t._next; n && n._startTime === h;) n._rawPrevTime = _, n = n._next;
                        e && e.apply(s || a.vars.callbackScope || a, i || u), (this._forcingPlayhead || !a._paused) && a.seek(o)
                    }
                },
                m = function(t) {
                    var e, i = [],
                        s = t.length;
                    for (e = 0; e !== s; i.push(t[e++]));
                    return i
                },
                d = s.prototype = new e;
            return s.version = "1.17.0", d.constructor = s, d.kill()._gc = d._forcingPlayhead = !1, d.to = function(t, e, s, r) {
                var n = s.repeat && f.TweenMax || i;
                return e ? this.add(new n(t, e, s), r) : this.set(t, s, r)
            }, d.from = function(t, e, s, r) {
                return this.add((s.repeat && f.TweenMax || i).from(t, e, s), r)
            }, d.fromTo = function(t, e, s, r, n) {
                var a = r.repeat && f.TweenMax || i;
                return e ? this.add(a.fromTo(t, e, s, r), n) : this.set(t, r, n)
            }, d.staggerTo = function(t, e, r, n, a, h, l, _) {
                var u, f = new s({
                    onComplete: h,
                    onCompleteParams: l,
                    callbackScope: _,
                    smoothChildTiming: this.smoothChildTiming
                });
                for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], o(t) && (t = m(t)), n = n || 0, 0 > n && (t = m(t), t.reverse(), n *= -1), u = 0; t.length > u; u++) r.startAt && (r.startAt = c(r.startAt)), f.to(t[u], e, c(r), u * n);
                return this.add(f, a)
            }, d.staggerFrom = function(t, e, i, s, r, n, a, o) {
                return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, s, r, n, a, o)
            }, d.staggerFromTo = function(t, e, i, s, r, n, a, o, h) {
                return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, s, r, n, a, o, h)
            }, d.call = function(t, e, s, r) {
                return this.add(i.delayedCall(0, t, e, s), r)
            }, d.set = function(t, e, s) {
                return s = this._parseTimeOrLabel(s, 0, !0), null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused), this.add(new i(t, 0, e), s)
            }, s.exportRoot = function(t, e) {
                t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                var r, n, a = new s(t),
                    o = a._timeline;
                for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r;) n = r._next, e && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay), r = n;
                return o.add(a, 0), a
            }, d.add = function(r, n, a, o) {
                var l, _, u, f, c, p;
                if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, r)), !(r instanceof t)) {
                    if (r instanceof Array || r && r.push && h(r)) {
                        for (a = a || "normal", o = o || 0, l = n, _ = r.length, u = 0; _ > u; u++) h(f = r[u]) && (f = new s({
                            tweens: f
                        })), this.add(f, l), "string" != typeof f && "function" != typeof f && ("sequence" === a ? l = f._startTime + f.totalDuration() / f._timeScale : "start" === a && (f._startTime -= f.delay())), l += o;
                        return this._uncache(!0)
                    }
                    if ("string" == typeof r) return this.addLabel(r, n);
                    if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                    r = i.delayedCall(0, r)
                }
                if (e.prototype.add.call(this, r, n), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                    for (c = this, p = c.rawTime() > r._startTime; c._timeline;) p && c._timeline.smoothChildTiming ? c.totalTime(c._totalTime, !0) : c._gc && c._enabled(!0, !1), c = c._timeline;
                return this
            }, d.remove = function(e) {
                if (e instanceof t) return this._remove(e, !1);
                if (e instanceof Array || e && e.push && h(e)) {
                    for (var i = e.length; --i > -1;) this.remove(e[i]);
                    return this
                }
                return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
            }, d._remove = function(t, i) {
                e.prototype._remove.call(this, t, i);
                var s = this._last;
                return s ? this._time > s._startTime + s._totalDuration / s._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
            }, d.append = function(t, e) {
                return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
            }, d.insert = d.insertMultiple = function(t, e, i, s) {
                return this.add(t, e || 0, i, s)
            }, d.appendMultiple = function(t, e, i, s) {
                return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s)
            }, d.addLabel = function(t, e) {
                return this._labels[t] = this._parseTimeOrLabel(e), this
            }, d.addPause = function(t, e, s, r) {
                var n = i.delayedCall(0, p, ["{self}", e, s, r], this);
                return n.data = "isPause", this.add(n, t)
            }, d.removeLabel = function(t) {
                return delete this._labels[t], this
            }, d.getLabelTime = function(t) {
                return null != this._labels[t] ? this._labels[t] : -1
            }, d._parseTimeOrLabel = function(e, i, s, r) {
                var n;
                if (r instanceof t && r.timeline === this) this.remove(r);
                else if (r && (r instanceof Array || r.push && h(r)))
                    for (n = r.length; --n > -1;) r[n] instanceof t && r[n].timeline === this && this.remove(r[n]);
                if ("string" == typeof i) return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s);
                if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                else {
                    if (n = e.indexOf("="), -1 === n) return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                    i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1)), e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s) : this.duration()
                }
                return Number(e) + i
            }, d.seek = function(t, e) {
                return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
            }, d.stop = function() {
                return this.paused(!0)
            }, d.gotoAndPlay = function(t, e) {
                return this.play(t, e)
            }, d.gotoAndStop = function(t, e) {
                return this.pause(t, e)
            }, d.render = function(t, e, i) {
                this._gc && this._enabled(!0, !1);
                var s, n, a, o, h, u = this._dirty ? this.totalDuration() : this._totalDuration,
                    f = this._time,
                    c = this._startTime,
                    p = this._timeScale,
                    m = this._paused;
                if (t >= u) this._totalTime = this._time = u, this._reversed || this._hasPausedChild() || (n = !0, o = "onComplete", h = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (h = !0, this._rawPrevTime > r && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = u + 1e-4;
                else if (1e-7 > t)
                    if (this._totalTime = this._time = 0, (0 !== f || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (o = "onReverseComplete", n = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (h = n = !0, o = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (h = !0), this._rawPrevTime = t;
                    else {
                        if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, 0 === t && n)
                            for (s = this._first; s && 0 === s._startTime;) s._duration || (n = !1), s = s._next;
                        t = 0, this._initted || (h = !0)
                    }
                else this._totalTime = this._time = this._rawPrevTime = t;
                if (this._time !== f && this._first || i || h) {
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== f && t > 0 && (this._active = !0), 0 === f && this.vars.onStart && 0 !== this._time && (e || this._callback("onStart")), this._time >= f)
                        for (s = this._first; s && (a = s._next, !this._paused || m);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                    else
                        for (s = this._last; s && (a = s._prev, !this._paused || m);)(s._active || f >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                    this._onUpdate && (e || (l.length && _(), this._callback("onUpdate"))), o && (this._gc || (c === this._startTime || p !== this._timeScale) && (0 === this._time || u >= this.totalDuration()) && (n && (l.length && _(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o)))
                }
            }, d._hasPausedChild = function() {
                for (var t = this._first; t;) {
                    if (t._paused || t instanceof s && t._hasPausedChild()) return !0;
                    t = t._next
                }
                return !1
            }, d.getChildren = function(t, e, s, r) {
                r = r || -9999999999;
                for (var n = [], a = this._first, o = 0; a;) r > a._startTime || (a instanceof i ? e !== !1 && (n[o++] = a) : (s !== !1 && (n[o++] = a), t !== !1 && (n = n.concat(a.getChildren(!0, e, s)), o = n.length))), a = a._next;
                return n
            }, d.getTweensOf = function(t, e) {
                var s, r, n = this._gc,
                    a = [],
                    o = 0;
                for (n && this._enabled(!0, !0), s = i.getTweensOf(t), r = s.length; --r > -1;)(s[r].timeline === this || e && this._contains(s[r])) && (a[o++] = s[r]);
                return n && this._enabled(!1, !0), a
            }, d.recent = function() {
                return this._recent
            }, d._contains = function(t) {
                for (var e = t.timeline; e;) {
                    if (e === this) return !0;
                    e = e.timeline
                }
                return !1
            }, d.shiftChildren = function(t, e, i) {
                i = i || 0;
                for (var s, r = this._first, n = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                if (e)
                    for (s in n) n[s] >= i && (n[s] += t);
                return this._uncache(!0)
            }, d._kill = function(t, e) {
                if (!t && !e) return this._enabled(!1, !1);
                for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; --s > -1;) i[s]._kill(t, e) && (r = !0);
                return r
            }, d.clear = function(t) {
                var e = this.getChildren(!1, !0, !0),
                    i = e.length;
                for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                return t !== !1 && (this._labels = {}), this._uncache(!0)
            }, d.invalidate = function() {
                for (var e = this._first; e;) e.invalidate(), e = e._next;
                return t.prototype.invalidate.call(this)
            }, d._enabled = function(t, i) {
                if (t === this._gc)
                    for (var s = this._first; s;) s._enabled(t, !0), s = s._next;
                return e.prototype._enabled.call(this, t, i)
            }, d.totalTime = function() {
                this._forcingPlayhead = !0;
                var e = t.prototype.totalTime.apply(this, arguments);
                return this._forcingPlayhead = !1, e
            }, d.duration = function(t) {
                return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
            }, d.totalDuration = function(t) {
                if (!arguments.length) {
                    if (this._dirty) {
                        for (var e, i, s = 0, r = this._last, n = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > n && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : n = r._startTime, 0 > r._startTime && !r._paused && (s -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), n = 0), i = r._startTime + r._totalDuration / r._timeScale, i > s && (s = i), r = e;
                        this._duration = this._totalDuration = s, this._dirty = !1
                    }
                    return this._totalDuration
                }
                return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
            }, d.paused = function(e) {
                if (!e)
                    for (var i = this._first, s = this._time; i;) i._startTime === s && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                return t.prototype.paused.apply(this, arguments)
            }, d.usesFrames = function() {
                for (var e = this._timeline; e._timeline;) e = e._timeline;
                return e === t._rootFramesTimeline
            }, d.rawTime = function() {
                return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
            }, s
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t) {
        "use strict";
        var e = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[t]
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (require("./TweenLite.js"), module.exports = e())
    }("TimelineLite");
/*!
 * VERSION: beta 1.15.2
 * DATE: 2015-01-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
        var e, i, s, r = _gsScope.GreenSockGlobals || _gsScope,
            n = r.com.greensock,
            a = 2 * Math.PI,
            o = Math.PI / 2,
            h = n._class,
            l = function(e, i) {
                var s = h("easing." + e, function() {}, !0),
                    r = s.prototype = new t;
                return r.constructor = s, r.getRatio = i, s
            },
            _ = t.register || function() {},
            u = function(t, e, i, s) {
                var r = h("easing." + t, {
                    easeOut: new e,
                    easeIn: new i,
                    easeInOut: new s
                }, !0);
                return _(r, t), r
            },
            c = function(t, e, i) {
                this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
            },
            f = function(e, i) {
                var s = h("easing." + e, function(t) {
                        this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                    }, !0),
                    r = s.prototype = new t;
                return r.constructor = s, r.getRatio = i, r.config = function(t) {
                    return new s(t)
                }, s
            },
            p = u("Back", f("BackOut", function(t) {
                return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
            }), f("BackIn", function(t) {
                return t * t * ((this._p1 + 1) * t - this._p1)
            }), f("BackInOut", function(t) {
                return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
            })),
            m = h("easing.SlowMo", function(t, e, i) {
                e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
            }, !0),
            d = m.prototype = new t;
        return d.constructor = m, d.getRatio = function(t) {
            var e = t + (.5 - t) * this._p;
            return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
        }, m.ease = new m(.7, .7), d.config = m.config = function(t, e, i) {
            return new m(t, e, i)
        }, e = h("easing.SteppedEase", function(t) {
            t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
        }, !0), d = e.prototype = new t, d.constructor = e, d.getRatio = function(t) {
            return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
        }, d.config = e.config = function(t) {
            return new e(t)
        }, i = h("easing.RoughEase", function(e) {
            e = e || {};
            for (var i, s, r, n, a, o, h = e.taper || "none", l = [], _ = 0, u = 0 | (e.points || 20), f = u, p = e.randomize !== !1, m = e.clamp === !0, d = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1;) i = p ? Math.random() : 1 / u * f, s = d ? d.getRatio(i) : i, "none" === h ? r = g : "out" === h ? (n = 1 - i, r = n * n * g) : "in" === h ? r = i * i * g : .5 > i ? (n = 2 * i, r = .5 * n * n * g) : (n = 2 * (1 - i), r = .5 * n * n * g), p ? s += Math.random() * r - .5 * r : f % 2 ? s += .5 * r : s -= .5 * r, m && (s > 1 ? s = 1 : 0 > s && (s = 0)), l[_++] = {
                x: i,
                y: s
            };
            for (l.sort(function(t, e) {
                    return t.x - e.x
                }), o = new c(1, 1, null), f = u; --f > -1;) a = l[f], o = new c(a.x, a.y, o);
            this._prev = new c(0, 0, 0 !== o.t ? o : o.next)
        }, !0), d = i.prototype = new t, d.constructor = i, d.getRatio = function(t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t;) e = e.next;
                e = e.prev
            } else
                for (; e.prev && e.t >= t;) e = e.prev;
            return this._prev = e, e.v + (t - e.t) / e.gap * e.c
        }, d.config = function(t) {
            return new i(t)
        }, i.ease = new i, u("Bounce", l("BounceOut", function(t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }), l("BounceIn", function(t) {
            return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }), l("BounceInOut", function(t) {
            var e = .5 > t;
            return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
        })), u("Circ", l("CircOut", function(t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }), l("CircIn", function(t) {
            return -(Math.sqrt(1 - t * t) - 1)
        }), l("CircInOut", function(t) {
            return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        })), s = function(e, i, s) {
            var r = h("easing." + e, function(t, e) {
                    this._p1 = t >= 1 ? t : 1, this._p2 = (e || s) / (1 > t ? t : 1), this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0), this._p2 = a / this._p2
                }, !0),
                n = r.prototype = new t;
            return n.constructor = r, n.getRatio = i, n.config = function(t, e) {
                return new r(t, e)
            }, r
        }, u("Elastic", s("ElasticOut", function(t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
        }, .3), s("ElasticIn", function(t) {
            return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
        }, .3), s("ElasticInOut", function(t) {
            return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) + 1
        }, .45)), u("Expo", l("ExpoOut", function(t) {
            return 1 - Math.pow(2, -10 * t)
        }), l("ExpoIn", function(t) {
            return Math.pow(2, 10 * (t - 1)) - .001
        }), l("ExpoInOut", function(t) {
            return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        })), u("Sine", l("SineOut", function(t) {
            return Math.sin(t * o)
        }), l("SineIn", function(t) {
            return -Math.cos(t * o) + 1
        }), l("SineInOut", function(t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        })), h("easing.EaseLookup", {
            find: function(e) {
                return t.map[e]
            }
        }, !0), _(r.SlowMo, "SlowMo", "ease,"), _(i, "RoughEase", "ease,"), _(e, "SteppedEase", "ease,"), p
    }, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()();
/*!
 * VERSION: 1.17.0
 * DATE: 2015-05-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
            var i, r, s, n, a = function() {
                    t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
                },
                o = _gsScope._gsDefine.globals,
                l = {},
                h = a.prototype = new t("css");
            h.constructor = a, a.version = "1.17.0", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", a.defaultSmoothOrigin = !0, h = "px", a.suffixMap = {
                top: h,
                right: h,
                bottom: h,
                left: h,
                width: h,
                height: h,
                fontSize: h,
                padding: h,
                margin: h,
                perspective: h,
                lineHeight: ""
            };
            var u, f, c, p, _, d, m = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                g = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                y = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                x = /(?:\d|\-|\+|=|#|\.)*/g,
                T = /opacity *= *([^)]*)/i,
                w = /opacity:([^;]*)/i,
                b = /alpha\(opacity *=.+?\)/i,
                P = /^(rgb|hsl)/,
                S = /([A-Z])/g,
                O = /-([a-z])/gi,
                k = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                C = function(t, e) {
                    return e.toUpperCase()
                },
                R = /(?:Left|Right|Width)/i,
                A = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                M = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                D = /,(?=[^\)]*(?:\(|$))/gi,
                N = Math.PI / 180,
                L = 180 / Math.PI,
                F = {},
                X = document,
                z = function(t) {
                    return X.createElementNS ? X.createElementNS("http://www.w3.org/1999/xhtml", t) : X.createElement(t)
                },
                B = z("div"),
                E = z("img"),
                I = a._internals = {
                    _specialProps: l
                },
                Y = navigator.userAgent,
                W = function() {
                    var t = Y.indexOf("Android"),
                        e = z("a");
                    return c = -1 !== Y.indexOf("Safari") && -1 === Y.indexOf("Chrome") && (-1 === t || Number(Y.substr(t + 8, 1)) > 3), _ = c && 6 > Number(Y.substr(Y.indexOf("Version/") + 8, 1)), p = -1 !== Y.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Y)) && (d = parseFloat(RegExp.$1)), e ? (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity)) : !1
                }(),
                V = function(t) {
                    return T.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                },
                j = function(t) {
                    window.console && console.log(t)
                },
                G = "",
                U = "",
                q = function(t, e) {
                    e = e || B;
                    var i, r, s = e.style;
                    if (void 0 !== s[t]) return t;
                    for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], r = 5; --r > -1 && void 0 === s[i[r] + t];);
                    return r >= 0 ? (U = 3 === r ? "ms" : i[r], G = "-" + U.toLowerCase() + "-", U + t) : null
                },
                H = X.defaultView ? X.defaultView.getComputedStyle : function() {},
                Q = a.getStyle = function(t, e, i, r, s) {
                    var n;
                    return W || "opacity" !== e ? (!r && t.style[e] ? n = t.style[e] : (i = i || H(t)) ? n = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(S, "-$1").toLowerCase()) : t.currentStyle && (n = t.currentStyle[e]), null == s || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : s) : V(t)
                },
                Z = I.convertToPixels = function(t, i, r, s, n) {
                    if ("px" === s || !s) return r;
                    if ("auto" === s || !r) return 0;
                    var o, l, h, u = R.test(i),
                        f = t,
                        c = B.style,
                        p = 0 > r;
                    if (p && (r = -r), "%" === s && -1 !== i.indexOf("border")) o = r / 100 * (u ? t.clientWidth : t.clientHeight);
                    else {
                        if (c.cssText = "border:0 solid red;position:" + Q(t, "position") + ";line-height:0;", "%" !== s && f.appendChild) c[u ? "borderLeftWidth" : "borderTopWidth"] = r + s;
                        else {
                            if (f = t.parentNode || X.body, l = f._gsCache, h = e.ticker.frame, l && u && l.time === h) return l.width * r / 100;
                            c[u ? "width" : "height"] = r + s
                        }
                        f.appendChild(B), o = parseFloat(B[u ? "offsetWidth" : "offsetHeight"]), f.removeChild(B), u && "%" === s && a.cacheWidths !== !1 && (l = f._gsCache = f._gsCache || {}, l.time = h, l.width = 100 * (o / r)), 0 !== o || n || (o = Z(t, i, r, s, !0))
                    }
                    return p ? -o : o
                },
                $ = I.calculateOffset = function(t, e, i) {
                    if ("absolute" !== Q(t, "position", i)) return 0;
                    var r = "left" === e ? "Left" : "Top",
                        s = Q(t, "margin" + r, i);
                    return t["offset" + r] - (Z(t, e, parseFloat(s), s.replace(x, "")) || 0)
                },
                K = function(t, e) {
                    var i, r, s, n = {};
                    if (e = e || H(t, null))
                        if (i = e.length)
                            for (; --i > -1;) s = e[i], (-1 === s.indexOf("-transform") || Pe === s) && (n[s.replace(O, C)] = e.getPropertyValue(s));
                        else
                            for (i in e)(-1 === i.indexOf("Transform") || be === i) && (n[i] = e[i]);
                    else if (e = t.currentStyle || t.style)
                        for (i in e) "string" == typeof i && void 0 === n[i] && (n[i.replace(O, C)] = e[i]);
                    return W || (n.opacity = V(t)), r = Xe(t, e, !1), n.rotation = r.rotation, n.skewX = r.skewX, n.scaleX = r.scaleX, n.scaleY = r.scaleY, n.x = r.x, n.y = r.y, Oe && (n.z = r.z, n.rotationX = r.rotationX, n.rotationY = r.rotationY, n.scaleZ = r.scaleZ), n.filters && delete n.filters, n
                },
                J = function(t, e, i, r, s) {
                    var n, a, o, l = {},
                        h = t.style;
                    for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || s && s[a]) && -1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (l[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(y, "") ? n : 0 : $(t, a), void 0 !== h[a] && (o = new pe(h, a, h[a], o)));
                    if (r)
                        for (a in r) "className" !== a && (l[a] = r[a]);
                    return {
                        difs: l,
                        firstMPT: o
                    }
                },
                te = {
                    width: ["Left", "Right"],
                    height: ["Top", "Bottom"]
                },
                ee = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                ie = function(t, e, i) {
                    var r = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                        s = te[e],
                        n = s.length;
                    for (i = i || H(t, null); --n > -1;) r -= parseFloat(Q(t, "padding" + s[n], i, !0)) || 0, r -= parseFloat(Q(t, "border" + s[n] + "Width", i, !0)) || 0;
                    return r
                },
                re = function(t, e) {
                    (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
                    var i = t.split(" "),
                        r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                        s = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                    return null == s ? s = "center" === r ? "50%" : "0" : "center" === s && (s = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), t = r + " " + s + (i.length > 2 ? " " + i[2] : ""), e && (e.oxp = -1 !== r.indexOf("%"), e.oyp = -1 !== s.indexOf("%"), e.oxr = "=" === r.charAt(1), e.oyr = "=" === s.charAt(1), e.ox = parseFloat(r.replace(y, "")), e.oy = parseFloat(s.replace(y, "")), e.v = t), e || t
                },
                se = function(t, e) {
                    return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
                },
                ne = function(t, e) {
                    return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
                },
                ae = function(t, e, i, r) {
                    var s, n, a, o, l, h = 1e-6;
                    return null == t ? o = e : "number" == typeof t ? o = t : (s = 360, n = t.split("_"), l = "=" === t.charAt(1), a = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(n[0].substr(2)) : parseFloat(n[0])) * (-1 === t.indexOf("rad") ? 1 : L) - (l ? 0 : e), n.length && (r && (r[i] = e + a), -1 !== t.indexOf("short") && (a %= s, a !== a % (s / 2) && (a = 0 > a ? a + s : a - s)), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * s) % s - (0 | a / s) * s : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * s) % s - (0 | a / s) * s)), o = e + a), h > o && o > -h && (o = 0), o
                },
                oe = {
                    aqua: [0, 255, 255],
                    lime: [0, 255, 0],
                    silver: [192, 192, 192],
                    black: [0, 0, 0],
                    maroon: [128, 0, 0],
                    teal: [0, 128, 128],
                    blue: [0, 0, 255],
                    navy: [0, 0, 128],
                    white: [255, 255, 255],
                    fuchsia: [255, 0, 255],
                    olive: [128, 128, 0],
                    yellow: [255, 255, 0],
                    orange: [255, 165, 0],
                    gray: [128, 128, 128],
                    purple: [128, 0, 128],
                    green: [0, 128, 0],
                    red: [255, 0, 0],
                    pink: [255, 192, 203],
                    cyan: [0, 255, 255],
                    transparent: [255, 255, 255, 0]
                },
                le = function(t, e, i) {
                    return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
                },
                he = a.parseColor = function(t) {
                    var e, i, r, s, n, a;
                    return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), oe[t] ? oe[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), r = t.charAt(3), t = "#" + e + e + i + i + r + r), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(m), s = Number(t[0]) % 360 / 360, n = Number(t[1]) / 100, a = Number(t[2]) / 100, i = .5 >= a ? a * (n + 1) : a + n - a * n, e = 2 * a - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = le(s + 1 / 3, e, i), t[1] = le(s, e, i), t[2] = le(s - 1 / 3, e, i), t) : (t = t.match(m) || oe.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : oe.black
                },
                ue = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
            for (h in oe) ue += "|" + h + "\\b";
            ue = RegExp(ue + ")", "gi");
            var fe = function(t, e, i, r) {
                    if (null == t) return function(t) {
                        return t
                    };
                    var s, n = e ? (t.match(ue) || [""])[0] : "",
                        a = t.split(n).join("").match(v) || [],
                        o = t.substr(0, t.indexOf(a[0])),
                        l = ")" === t.charAt(t.length - 1) ? ")" : "",
                        h = -1 !== t.indexOf(" ") ? " " : ",",
                        u = a.length,
                        f = u > 0 ? a[0].replace(m, "") : "";
                    return u ? s = e ? function(t) {
                        var e, c, p, _;
                        if ("number" == typeof t) t += f;
                        else if (r && D.test(t)) {
                            for (_ = t.replace(D, "|").split("|"), p = 0; _.length > p; p++) _[p] = s(_[p]);
                            return _.join(",")
                        }
                        if (e = (t.match(ue) || [n])[0], c = t.split(e).join("").match(v) || [], p = c.length, u > p--)
                            for (; u > ++p;) c[p] = i ? c[0 | (p - 1) / 2] : a[p];
                        return o + c.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                    } : function(t) {
                        var e, n, c;
                        if ("number" == typeof t) t += f;
                        else if (r && D.test(t)) {
                            for (n = t.replace(D, "|").split("|"), c = 0; n.length > c; c++) n[c] = s(n[c]);
                            return n.join(",")
                        }
                        if (e = t.match(v) || [], c = e.length, u > c--)
                            for (; u > ++c;) e[c] = i ? e[0 | (c - 1) / 2] : a[c];
                        return o + e.join(h) + l
                    } : function(t) {
                        return t
                    }
                },
                ce = function(t) {
                    return t = t.split(","),
                        function(e, i, r, s, n, a, o) {
                            var l, h = (i + "").split(" ");
                            for (o = {}, l = 0; 4 > l; l++) o[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                            return s.parse(e, o, n, a)
                        }
                },
                pe = (I._setPluginRatio = function(t) {
                    this.plugin.setRatio(t);
                    for (var e, i, r, s, n = this.data, a = n.proxy, o = n.firstMPT, l = 1e-6; o;) e = a[o.v], o.r ? e = Math.round(e) : l > e && e > -l && (e = 0), o.t[o.p] = e, o = o._next;
                    if (n.autoRotate && (n.autoRotate.rotation = a.rotation), 1 === t)
                        for (o = n.firstMPT; o;) {
                            if (i = o.t, i.type) {
                                if (1 === i.type) {
                                    for (s = i.xs0 + i.s + i.xs1, r = 1; i.l > r; r++) s += i["xn" + r] + i["xs" + (r + 1)];
                                    i.e = s
                                }
                            } else i.e = i.s + i.xs0;
                            o = o._next
                        }
                }, function(t, e, i, r, s) {
                    this.t = t, this.p = e, this.v = i, this.r = s, r && (r._prev = this, this._next = r)
                }),
                _e = (I._parseToProxy = function(t, e, i, r, s, n) {
                    var a, o, l, h, u, f = r,
                        c = {},
                        p = {},
                        _ = i._transform,
                        d = F;
                    for (i._transform = null, F = e, r = u = i.parse(t, e, r, s), F = d, n && (i._transform = _, f && (f._prev = null, f._prev && (f._prev._next = null))); r && r !== f;) {
                        if (1 >= r.type && (o = r.p, p[o] = r.s + r.c, c[o] = r.s, n || (h = new pe(r, "s", o, h, r.r), r.c = 0), 1 === r.type))
                            for (a = r.l; --a > 0;) l = "xn" + a, o = r.p + "_" + l, p[o] = r.data[l], c[o] = r[l], n || (h = new pe(r, l, o, h, r.rxp[l]));
                        r = r._next
                    }
                    return {
                        proxy: c,
                        end: p,
                        firstMPT: h,
                        pt: u
                    }
                }, I.CSSPropTween = function(t, e, r, s, a, o, l, h, u, f, c) {
                    this.t = t, this.p = e, this.s = r, this.c = s, this.n = l || e, t instanceof _e || n.push(this.n), this.r = h, this.type = o || 0, u && (this.pr = u, i = !0), this.b = void 0 === f ? r : f, this.e = void 0 === c ? r + s : c, a && (this._next = a, a._prev = this)
                }),
                de = function(t, e, i, r, s, n) {
                    var a = new _e(t, e, i, r - i, s, -1, n);
                    return a.b = i, a.e = a.xs0 = r, a
                },
                me = a.parseComplex = function(t, e, i, r, s, n, a, o, l, h) {
                    i = i || n || "", a = new _e(t, e, 0, 0, a, h ? 2 : 1, null, !1, o, i, r), r += "";
                    var f, c, p, _, d, v, y, x, T, w, b, S, O = i.split(", ").join(",").split(" "),
                        k = r.split(", ").join(",").split(" "),
                        C = O.length,
                        R = u !== !1;
                    for ((-1 !== r.indexOf(",") || -1 !== i.indexOf(",")) && (O = O.join(" ").replace(D, ", ").split(" "), k = k.join(" ").replace(D, ", ").split(" "), C = O.length), C !== k.length && (O = (n || "").split(" "), C = O.length), a.plugin = l, a.setRatio = h, f = 0; C > f; f++)
                        if (_ = O[f], d = k[f], x = parseFloat(_), x || 0 === x) a.appendXtra("", x, se(d, x), d.replace(g, ""), R && -1 !== d.indexOf("px"), !0);
                        else if (s && ("#" === _.charAt(0) || oe[_] || P.test(_))) S = "," === d.charAt(d.length - 1) ? ")," : ")", _ = he(_), d = he(d), T = _.length + d.length > 6, T && !W && 0 === d[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(k[f]).join("transparent")) : (W || (T = !1), a.appendXtra(T ? "rgba(" : "rgb(", _[0], d[0] - _[0], ",", !0, !0).appendXtra("", _[1], d[1] - _[1], ",", !0).appendXtra("", _[2], d[2] - _[2], T ? "," : S, !0), T && (_ = 4 > _.length ? 1 : _[3], a.appendXtra("", _, (4 > d.length ? 1 : d[3]) - _, S, !1)));
                    else if (v = _.match(m)) {
                        if (y = d.match(g), !y || y.length !== v.length) return a;
                        for (p = 0, c = 0; v.length > c; c++) b = v[c], w = _.indexOf(b, p), a.appendXtra(_.substr(p, w - p), Number(b), se(y[c], b), "", R && "px" === _.substr(w + b.length, 2), 0 === c), p = w + b.length;
                        a["xs" + a.l] += _.substr(p)
                    } else a["xs" + a.l] += a.l ? " " + _ : _;
                    if (-1 !== r.indexOf("=") && a.data) {
                        for (S = a.xs0 + a.data.s, f = 1; a.l > f; f++) S += a["xs" + f] + a.data["xn" + f];
                        a.e = S + a["xs" + f]
                    }
                    return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                },
                ge = 9;
            for (h = _e.prototype, h.l = h.pr = 0; --ge > 0;) h["xn" + ge] = 0, h["xs" + ge] = "";
            h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, h.appendXtra = function(t, e, i, r, s, n) {
                var a = this,
                    o = a.l;
                return a["xs" + o] += n && o ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = r || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = s, a["xn" + o] = e, a.plugin || (a.xfirst = new _e(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, s, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
                    s: e + i
                }, a.rxp = {}, a.s = e, a.c = i, a.r = s, a)) : (a["xs" + o] += e + (r || ""), a)
            };
            var ve = function(t, e) {
                    e = e || {}, this.p = e.prefix ? q(t) || t : t, l[t] = l[this.p] = this, this.format = e.formatter || fe(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                },
                ye = I._registerComplexSpecialProp = function(t, e, i) {
                    "object" != typeof e && (e = {
                        parser: i
                    });
                    var r, s, n = t.split(","),
                        a = e.defaultValue;
                    for (i = i || [a], r = 0; n.length > r; r++) e.prefix = 0 === r && e.prefix, e.defaultValue = i[r] || a, s = new ve(n[r], e)
                },
                xe = function(t) {
                    if (!l[t]) {
                        var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                        ye(t, {
                            parser: function(t, i, r, s, n, a, h) {
                                var u = o.com.greensock.plugins[e];
                                return u ? (u._cssRegister(), l[r].parse(t, i, r, s, n, a, h)) : (j("Error: " + e + " js file not loaded."), n)
                            }
                        })
                    }
                };
            h = ve.prototype, h.parseComplex = function(t, e, i, r, s, n) {
                var a, o, l, h, u, f, c = this.keyword;
                if (this.multi && (D.test(i) || D.test(e) ? (o = e.replace(D, "|").split("|"), l = i.replace(D, "|").split("|")) : c && (o = [e], l = [i])), l) {
                    for (h = l.length > o.length ? l.length : o.length, a = 0; h > a; a++) e = o[a] = o[a] || this.dflt, i = l[a] = l[a] || this.dflt, c && (u = e.indexOf(c), f = i.indexOf(c), u !== f && (-1 === f ? o[a] = o[a].split(c).join("") : -1 === u && (o[a] += " " + c)));
                    e = o.join(", "), i = l.join(", ")
                }
                return me(t, this.p, e, i, this.clrs, this.dflt, r, this.pr, s, n)
            }, h.parse = function(t, e, i, r, n, a) {
                return this.parseComplex(t.style, this.format(Q(t, this.p, s, !1, this.dflt)), this.format(e), n, a)
            }, a.registerSpecialProp = function(t, e, i) {
                ye(t, {
                    parser: function(t, r, s, n, a, o) {
                        var l = new _e(t, s, 0, 0, a, 2, s, !1, i);
                        return l.plugin = o, l.setRatio = e(t, r, n._tween, s), l
                    },
                    priority: i
                })
            }, a.useSVGTransformAttr = c || p;
            var Te, we = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                be = q("transform"),
                Pe = G + "transform",
                Se = q("transformOrigin"),
                Oe = null !== q("perspective"),
                ke = I.Transform = function() {
                    this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = a.defaultForce3D !== !1 && Oe ? a.defaultForce3D || "auto" : !1
                },
                Ce = window.SVGElement,
                Re = function(t, e, i) {
                    var r, s = X.createElementNS("http://www.w3.org/2000/svg", t),
                        n = /([a-z])([A-Z])/g;
                    for (r in i) s.setAttributeNS(null, r.replace(n, "$1-$2").toLowerCase(), i[r]);
                    return e.appendChild(s), s
                },
                Ae = X.documentElement,
                Me = function() {
                    var t, e, i, r = d || /Android/i.test(Y) && !window.chrome;
                    return X.createElementNS && !r && (t = Re("svg", Ae), e = Re("rect", t, {
                        width: 100,
                        height: 50,
                        x: 100
                    }), i = e.getBoundingClientRect().width, e.style[Se] = "50% 50%", e.style[be] = "scaleX(0.5)", r = i === e.getBoundingClientRect().width && !(p && Oe), Ae.removeChild(t)), r
                }(),
                De = function(t, e, i, r, s) {
                    var n, o, l, h, u, f, c, p, _, d, m, g, v, y, x = t._gsTransform,
                        T = Fe(t, !0);
                    x && (v = x.xOrigin, y = x.yOrigin), (!r || 2 > (n = r.split(" ")).length) && (c = t.getBBox(), e = re(e).split(" "), n = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * c.width : parseFloat(e[0])) + c.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * c.height : parseFloat(e[1])) + c.y]), i.xOrigin = h = parseFloat(n[0]), i.yOrigin = u = parseFloat(n[1]), r && T !== Le && (f = T[0], c = T[1], p = T[2], _ = T[3], d = T[4], m = T[5], g = f * _ - c * p, o = h * (_ / g) + u * (-p / g) + (p * m - _ * d) / g, l = h * (-c / g) + u * (f / g) - (f * m - c * d) / g, h = i.xOrigin = n[0] = o, u = i.yOrigin = n[1] = l), x && (s || s !== !1 && a.defaultSmoothOrigin !== !1 ? (o = h - v, l = u - y, x.xOffset += o * T[0] + l * T[2] - o, x.yOffset += o * T[1] + l * T[3] - l) : x.xOffset = x.yOffset = 0), t.setAttribute("data-svg-origin", n.join(" "))
                },
                Ne = function(t) {
                    return !!(Ce && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
                },
                Le = [1, 0, 0, 1, 0, 0],
                Fe = function(t, e) {
                    var i, r, s, n, a, o = t._gsTransform || new ke,
                        l = 1e5;
                    if (be ? r = Q(t, Pe, null, !0) : t.currentStyle && (r = t.currentStyle.filter.match(A), r = r && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), o.x || 0, o.y || 0].join(",") : ""), i = !r || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r, (o.svg || t.getBBox && Ne(t)) && (i && -1 !== (t.style[be] + "").indexOf("matrix") && (r = t.style[be], i = 0), s = t.getAttribute("transform"), i && s && (-1 !== s.indexOf("matrix") ? (r = s, i = 0) : -1 !== s.indexOf("translate") && (r = "matrix(1,0,0,1," + s.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return Le;
                    for (s = (r || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], ge = s.length; --ge > -1;) n = Number(s[ge]), s[ge] = (a = n - (n |= 0)) ? (0 | a * l + (0 > a ? -.5 : .5)) / l + n : n;
                    return e && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s
                },
                Xe = I.getTransform = function(t, i, r, n) {
                    if (t._gsTransform && r && !n) return t._gsTransform;
                    var o, l, h, u, f, c, p = r ? t._gsTransform || new ke : new ke,
                        _ = 0 > p.scaleX,
                        d = 2e-5,
                        m = 1e5,
                        g = Oe ? parseFloat(Q(t, Se, i, !1, "0 0 0").split(" ")[2]) || p.zOrigin || 0 : 0,
                        v = parseFloat(a.defaultTransformPerspective) || 0;
                    if (p.svg = !(!t.getBBox || !Ne(t)), p.svg && (De(t, Q(t, Se, s, !1, "50% 50%") + "", p, t.getAttribute("data-svg-origin")), Te = a.useSVGTransformAttr || Me), o = Fe(t), o !== Le) {
                        if (16 === o.length) {
                            var y, x, T, w, b, P = o[0],
                                S = o[1],
                                O = o[2],
                                k = o[3],
                                C = o[4],
                                R = o[5],
                                A = o[6],
                                M = o[7],
                                D = o[8],
                                N = o[9],
                                F = o[10],
                                X = o[12],
                                z = o[13],
                                B = o[14],
                                E = o[11],
                                I = Math.atan2(A, F);
                            p.zOrigin && (B = -p.zOrigin, X = D * B - o[12], z = N * B - o[13], B = F * B + p.zOrigin - o[14]), p.rotationX = I * L, I && (w = Math.cos(-I), b = Math.sin(-I), y = C * w + D * b, x = R * w + N * b, T = A * w + F * b, D = C * -b + D * w, N = R * -b + N * w, F = A * -b + F * w, E = M * -b + E * w, C = y, R = x, A = T), I = Math.atan2(D, F), p.rotationY = I * L, I && (w = Math.cos(-I), b = Math.sin(-I), y = P * w - D * b, x = S * w - N * b, T = O * w - F * b, N = S * b + N * w, F = O * b + F * w, E = k * b + E * w, P = y, S = x, O = T), I = Math.atan2(S, P), p.rotation = I * L, I && (w = Math.cos(-I), b = Math.sin(-I), P = P * w + C * b, x = S * w + R * b, R = S * -b + R * w, A = O * -b + A * w, S = x), p.rotationX && Math.abs(p.rotationX) + Math.abs(p.rotation) > 359.9 && (p.rotationX = p.rotation = 0, p.rotationY += 180), p.scaleX = (0 | Math.sqrt(P * P + S * S) * m + .5) / m, p.scaleY = (0 | Math.sqrt(R * R + N * N) * m + .5) / m, p.scaleZ = (0 | Math.sqrt(A * A + F * F) * m + .5) / m, p.skewX = 0, p.perspective = E ? 1 / (0 > E ? -E : E) : 0, p.x = X, p.y = z, p.z = B, p.svg && (p.x -= p.xOrigin - (p.xOrigin * P - p.yOrigin * C), p.y -= p.yOrigin - (p.yOrigin * S - p.xOrigin * R))
                        } else if (!(Oe && !n && o.length && p.x === o[4] && p.y === o[5] && (p.rotationX || p.rotationY) || void 0 !== p.x && "none" === Q(t, "display", i))) {
                            var Y = o.length >= 6,
                                W = Y ? o[0] : 1,
                                V = o[1] || 0,
                                j = o[2] || 0,
                                G = Y ? o[3] : 1;
                            p.x = o[4] || 0, p.y = o[5] || 0, h = Math.sqrt(W * W + V * V), u = Math.sqrt(G * G + j * j), f = W || V ? Math.atan2(V, W) * L : p.rotation || 0, c = j || G ? Math.atan2(j, G) * L + f : p.skewX || 0, Math.abs(c) > 90 && 270 > Math.abs(c) && (_ ? (h *= -1, c += 0 >= f ? 180 : -180, f += 0 >= f ? 180 : -180) : (u *= -1, c += 0 >= c ? 180 : -180)), p.scaleX = h, p.scaleY = u, p.rotation = f, p.skewX = c, Oe && (p.rotationX = p.rotationY = p.z = 0, p.perspective = v, p.scaleZ = 1), p.svg && (p.x -= p.xOrigin - (p.xOrigin * W + p.yOrigin * j), p.y -= p.yOrigin - (p.xOrigin * V + p.yOrigin * G))
                        }
                        p.zOrigin = g;
                        for (l in p) d > p[l] && p[l] > -d && (p[l] = 0)
                    }
                    return r && (t._gsTransform = p, p.svg && (Te && t.style[be] ? e.delayedCall(.001, function() {
                        Ie(t.style, be)
                    }) : !Te && t.getAttribute("transform") && e.delayedCall(.001, function() {
                        t.removeAttribute("transform")
                    }))), p
                },
                ze = function(t) {
                    var e, i, r = this.data,
                        s = -r.rotation * N,
                        n = s + r.skewX * N,
                        a = 1e5,
                        o = (0 | Math.cos(s) * r.scaleX * a) / a,
                        l = (0 | Math.sin(s) * r.scaleX * a) / a,
                        h = (0 | Math.sin(n) * -r.scaleY * a) / a,
                        u = (0 | Math.cos(n) * r.scaleY * a) / a,
                        f = this.t.style,
                        c = this.t.currentStyle;
                    if (c) {
                        i = l, l = -h, h = -i, e = c.filter, f.filter = "";
                        var p, _, m = this.t.offsetWidth,
                            g = this.t.offsetHeight,
                            v = "absolute" !== c.position,
                            y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + h + ", M22=" + u,
                            w = r.x + m * r.xPercent / 100,
                            b = r.y + g * r.yPercent / 100;
                        if (null != r.ox && (p = (r.oxp ? .01 * m * r.ox : r.ox) - m / 2, _ = (r.oyp ? .01 * g * r.oy : r.oy) - g / 2, w += p - (p * o + _ * l), b += _ - (p * h + _ * u)), v ? (p = m / 2, _ = g / 2, y += ", Dx=" + (p - (p * o + _ * l) + w) + ", Dy=" + (_ - (p * h + _ * u) + b) + ")") : y += ", sizingMethod='auto expand')", f.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(M, y) : y + " " + e, (0 === t || 1 === t) && 1 === o && 0 === l && 0 === h && 1 === u && (v && -1 === y.indexOf("Dx=0, Dy=0") || T.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(" && e.indexOf("Alpha")) && f.removeAttribute("filter")), !v) {
                            var P, S, O, k = 8 > d ? 1 : -1;
                            for (p = r.ieOffsetX || 0, _ = r.ieOffsetY || 0, r.ieOffsetX = Math.round((m - ((0 > o ? -o : o) * m + (0 > l ? -l : l) * g)) / 2 + w), r.ieOffsetY = Math.round((g - ((0 > u ? -u : u) * g + (0 > h ? -h : h) * m)) / 2 + b), ge = 0; 4 > ge; ge++) S = ee[ge], P = c[S], i = -1 !== P.indexOf("px") ? parseFloat(P) : Z(this.t, S, parseFloat(P), P.replace(x, "")) || 0, O = i !== r[S] ? 2 > ge ? -r.ieOffsetX : -r.ieOffsetY : 2 > ge ? p - r.ieOffsetX : _ - r.ieOffsetY, f[S] = (r[S] = Math.round(i - O * (0 === ge || 2 === ge ? 1 : k))) + "px"
                        }
                    }
                },
                Be = I.set3DTransformRatio = I.setTransformRatio = function(t) {
                    var e, i, r, s, n, a, o, l, h, u, f, c, _, d, m, g, v, y, x, T, w, b, P, S = this.data,
                        O = this.t.style,
                        k = S.rotation,
                        C = S.rotationX,
                        R = S.rotationY,
                        A = S.scaleX,
                        M = S.scaleY,
                        D = S.scaleZ,
                        L = S.x,
                        F = S.y,
                        X = S.z,
                        z = S.svg,
                        B = S.perspective,
                        E = S.force3D;
                    if (!(((1 !== t && 0 !== t || "auto" !== E || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && E || X || B || R || C) && (!Te || !z) && Oe)) return k || S.skewX || z ? (k *= N, b = S.skewX * N, P = 1e5, e = Math.cos(k) * A, s = Math.sin(k) * A, i = Math.sin(k - b) * -M, n = Math.cos(k - b) * M, b && "simple" === S.skewType && (v = Math.tan(b), v = Math.sqrt(1 + v * v), i *= v, n *= v, S.skewY && (e *= v, s *= v)), z && (L += S.xOrigin - (S.xOrigin * e + S.yOrigin * i) + S.xOffset, F += S.yOrigin - (S.xOrigin * s + S.yOrigin * n) + S.yOffset, Te && (S.xPercent || S.yPercent) && (d = this.t.getBBox(), L += .01 * S.xPercent * d.width, F += .01 * S.yPercent * d.height), d = 1e-6, d > L && L > -d && (L = 0), d > F && F > -d && (F = 0)), x = (0 | e * P) / P + "," + (0 | s * P) / P + "," + (0 | i * P) / P + "," + (0 | n * P) / P + "," + L + "," + F + ")", z && Te ? this.t.setAttribute("transform", "matrix(" + x) : O[be] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + x) : O[be] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + A + ",0,0," + M + "," + L + "," + F + ")", void 0;
                    if (p && (d = 1e-4, d > A && A > -d && (A = D = 2e-5), d > M && M > -d && (M = D = 2e-5), !B || S.z || S.rotationX || S.rotationY || (B = 0)), k || S.skewX) k *= N, m = e = Math.cos(k), g = s = Math.sin(k), S.skewX && (k -= S.skewX * N, m = Math.cos(k), g = Math.sin(k), "simple" === S.skewType && (v = Math.tan(S.skewX * N), v = Math.sqrt(1 + v * v), m *= v, g *= v, S.skewY && (e *= v, s *= v))), i = -g, n = m;
                    else {
                        if (!(R || C || 1 !== D || B || z)) return O[be] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" : "translate3d(") + L + "px," + F + "px," + X + "px)" + (1 !== A || 1 !== M ? " scale(" + A + "," + M + ")" : ""), void 0;
                        e = n = 1, i = s = 0
                    }
                    h = 1, r = a = o = l = u = f = 0, c = B ? -1 / B : 0, _ = S.zOrigin, d = 1e-6, T = ",", w = "0", k = R * N, k && (m = Math.cos(k), g = Math.sin(k), o = -g, u = c * -g, r = e * g, a = s * g, h = m, c *= m, e *= m, s *= m), k = C * N, k && (m = Math.cos(k), g = Math.sin(k), v = i * m + r * g, y = n * m + a * g, l = h * g, f = c * g, r = i * -g + r * m, a = n * -g + a * m, h *= m, c *= m, i = v, n = y), 1 !== D && (r *= D, a *= D, h *= D, c *= D), 1 !== M && (i *= M, n *= M, l *= M, f *= M), 1 !== A && (e *= A, s *= A, o *= A, u *= A), (_ || z) && (_ && (L += r * -_, F += a * -_, X += h * -_ + _), z && (L += S.xOrigin - (S.xOrigin * e + S.yOrigin * i) + S.xOffset, F += S.yOrigin - (S.xOrigin * s + S.yOrigin * n) + S.yOffset), d > L && L > -d && (L = w), d > F && F > -d && (F = w), d > X && X > -d && (X = 0)), x = S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" : "matrix3d(", x += (d > e && e > -d ? w : e) + T + (d > s && s > -d ? w : s) + T + (d > o && o > -d ? w : o), x += T + (d > u && u > -d ? w : u) + T + (d > i && i > -d ? w : i) + T + (d > n && n > -d ? w : n), C || R ? (x += T + (d > l && l > -d ? w : l) + T + (d > f && f > -d ? w : f) + T + (d > r && r > -d ? w : r), x += T + (d > a && a > -d ? w : a) + T + (d > h && h > -d ? w : h) + T + (d > c && c > -d ? w : c) + T) : x += ",0,0,0,0,1,0,", x += L + T + F + T + X + T + (B ? 1 + -X / B : 1) + ")", O[be] = x
                };
            h = ke.prototype, h.x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = h.xOffset = h.yOffset = 0, h.scaleX = h.scaleY = h.scaleZ = 1, ye("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                parser: function(t, e, i, r, n, o, l) {
                    if (r._lastParsedTransform === l) return n;
                    r._lastParsedTransform = l;
                    var h, u, f, c, p, _, d, m, g, v = t._gsTransform,
                        y = r._transform = Xe(t, s, !0, l.parseTransform),
                        x = t.style,
                        T = 1e-6,
                        w = we.length,
                        b = l,
                        P = {},
                        S = "transformOrigin";
                    if ("string" == typeof b.transform && be) f = B.style, f[be] = b.transform, f.display = "block", f.position = "absolute", X.body.appendChild(B), h = Xe(B, null, !1), X.body.removeChild(B), null != b.xPercent && (h.xPercent = ne(b.xPercent, y.xPercent)), null != b.yPercent && (h.yPercent = ne(b.yPercent, y.yPercent));
                    else if ("object" == typeof b) {
                        if (h = {
                                scaleX: ne(null != b.scaleX ? b.scaleX : b.scale, y.scaleX),
                                scaleY: ne(null != b.scaleY ? b.scaleY : b.scale, y.scaleY),
                                scaleZ: ne(b.scaleZ, y.scaleZ),
                                x: ne(b.x, y.x),
                                y: ne(b.y, y.y),
                                z: ne(b.z, y.z),
                                xPercent: ne(b.xPercent, y.xPercent),
                                yPercent: ne(b.yPercent, y.yPercent),
                                perspective: ne(b.transformPerspective, y.perspective)
                            }, d = b.directionalRotation, null != d)
                            if ("object" == typeof d)
                                for (f in d) b[f] = d[f];
                            else b.rotation = d;
                        "string" == typeof b.x && -1 !== b.x.indexOf("%") && (h.x = 0, h.xPercent = ne(b.x, y.xPercent)), "string" == typeof b.y && -1 !== b.y.indexOf("%") && (h.y = 0, h.yPercent = ne(b.y, y.yPercent)), h.rotation = ae("rotation" in b ? b.rotation : "shortRotation" in b ? b.shortRotation + "_short" : "rotationZ" in b ? b.rotationZ : y.rotation, y.rotation, "rotation", P), Oe && (h.rotationX = ae("rotationX" in b ? b.rotationX : "shortRotationX" in b ? b.shortRotationX + "_short" : y.rotationX || 0, y.rotationX, "rotationX", P), h.rotationY = ae("rotationY" in b ? b.rotationY : "shortRotationY" in b ? b.shortRotationY + "_short" : y.rotationY || 0, y.rotationY, "rotationY", P)), h.skewX = null == b.skewX ? y.skewX : ae(b.skewX, y.skewX), h.skewY = null == b.skewY ? y.skewY : ae(b.skewY, y.skewY), (u = h.skewY - y.skewY) && (h.skewX += u, h.rotation += u)
                    }
                    for (Oe && null != b.force3D && (y.force3D = b.force3D, _ = !0), y.skewType = b.skewType || y.skewType || a.defaultSkewType, p = y.force3D || y.z || y.rotationX || y.rotationY || h.z || h.rotationX || h.rotationY || h.perspective, p || null == b.scale || (h.scaleZ = 1); --w > -1;) i = we[w], c = h[i] - y[i], (c > T || -T > c || null != b[i] || null != F[i]) && (_ = !0, n = new _e(y, i, y[i], c, n), i in P && (n.e = P[i]), n.xs0 = 0, n.plugin = o, r._overwriteProps.push(n.n));
                    return c = b.transformOrigin, y.svg && (c || b.svgOrigin) && (m = y.xOffset, g = y.yOffset, De(t, re(c), h, b.svgOrigin, b.smoothOrigin), n = de(y, "xOrigin", (v ? y : h).xOrigin, h.xOrigin, n, S), n = de(y, "yOrigin", (v ? y : h).yOrigin, h.yOrigin, n, S), (m !== y.xOffset || g !== y.yOffset) && (n = de(y, "xOffset", v ? m : y.xOffset, y.xOffset, n, S), n = de(y, "yOffset", v ? g : y.yOffset, y.yOffset, n, S)), c = Te ? null : "0px 0px"), (c || Oe && p && y.zOrigin) && (be ? (_ = !0, i = Se, c = (c || Q(t, i, s, !1, "50% 50%")) + "", n = new _e(x, i, 0, 0, n, -1, S), n.b = x[i], n.plugin = o, Oe ? (f = y.zOrigin, c = c.split(" "), y.zOrigin = (c.length > 2 && (0 === f || "0px" !== c[2]) ? parseFloat(c[2]) : f) || 0, n.xs0 = n.e = c[0] + " " + (c[1] || "50%") + " 0px", n = new _e(y, "zOrigin", 0, 0, n, -1, n.n), n.b = f, n.xs0 = n.e = y.zOrigin) : n.xs0 = n.e = c) : re(c + "", y)), _ && (r._transformType = y.svg && Te || !p && 3 !== this._transformType ? 2 : 3), n
                },
                prefix: !0
            }), ye("boxShadow", {
                defaultValue: "0px 0px 0px 0px #999",
                prefix: !0,
                color: !0,
                multi: !0,
                keyword: "inset"
            }), ye("borderRadius", {
                defaultValue: "0px",
                parser: function(t, e, i, n, a) {
                    e = this.format(e);
                    var o, l, h, u, f, c, p, _, d, m, g, v, y, x, T, w, b = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                        P = t.style;
                    for (d = parseFloat(t.offsetWidth), m = parseFloat(t.offsetHeight), o = e.split(" "), l = 0; b.length > l; l++) this.p.indexOf("border") && (b[l] = q(b[l])), f = u = Q(t, b[l], s, !1, "0px"), -1 !== f.indexOf(" ") && (u = f.split(" "), f = u[0], u = u[1]), c = h = o[l], p = parseFloat(f), v = f.substr((p + "").length), y = "=" === c.charAt(1), y ? (_ = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), _ *= parseFloat(c), g = c.substr((_ + "").length - (0 > _ ? 1 : 0)) || "") : (_ = parseFloat(c), g = c.substr((_ + "").length)), "" === g && (g = r[i] || v), g !== v && (x = Z(t, "borderLeft", p, v), T = Z(t, "borderTop", p, v), "%" === g ? (f = 100 * (x / d) + "%", u = 100 * (T / m) + "%") : "em" === g ? (w = Z(t, "borderLeft", 1, "em"), f = x / w + "em", u = T / w + "em") : (f = x + "px", u = T + "px"), y && (c = parseFloat(f) + _ + g, h = parseFloat(u) + _ + g)), a = me(P, b[l], f + " " + u, c + " " + h, !1, "0px", a);
                    return a
                },
                prefix: !0,
                formatter: fe("0px 0px 0px 0px", !1, !0)
            }), ye("backgroundPosition", {
                defaultValue: "0 0",
                parser: function(t, e, i, r, n, a) {
                    var o, l, h, u, f, c, p = "background-position",
                        _ = s || H(t, null),
                        m = this.format((_ ? d ? _.getPropertyValue(p + "-x") + " " + _.getPropertyValue(p + "-y") : _.getPropertyValue(p) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                        g = this.format(e);
                    if (-1 !== m.indexOf("%") != (-1 !== g.indexOf("%")) && (c = Q(t, "backgroundImage").replace(k, ""), c && "none" !== c)) {
                        for (o = m.split(" "), l = g.split(" "), E.setAttribute("src", c), h = 2; --h > -1;) m = o[h], u = -1 !== m.indexOf("%"), u !== (-1 !== l[h].indexOf("%")) && (f = 0 === h ? t.offsetWidth - E.width : t.offsetHeight - E.height, o[h] = u ? parseFloat(m) / 100 * f + "px" : 100 * (parseFloat(m) / f) + "%");
                        m = o.join(" ")
                    }
                    return this.parseComplex(t.style, m, g, n, a)
                },
                formatter: re
            }), ye("backgroundSize", {
                defaultValue: "0 0",
                formatter: re
            }), ye("perspective", {
                defaultValue: "0px",
                prefix: !0
            }), ye("perspectiveOrigin", {
                defaultValue: "50% 50%",
                prefix: !0
            }), ye("transformStyle", {
                prefix: !0
            }), ye("backfaceVisibility", {
                prefix: !0
            }), ye("userSelect", {
                prefix: !0
            }), ye("margin", {
                parser: ce("marginTop,marginRight,marginBottom,marginLeft")
            }), ye("padding", {
                parser: ce("paddingTop,paddingRight,paddingBottom,paddingLeft")
            }), ye("clip", {
                defaultValue: "rect(0px,0px,0px,0px)",
                parser: function(t, e, i, r, n, a) {
                    var o, l, h;
                    return 9 > d ? (l = t.currentStyle, h = 8 > d ? " " : ",", o = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (o = this.format(Q(t, this.p, s, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, n, a)
                }
            }), ye("textShadow", {
                defaultValue: "0px 0px 0px #999",
                color: !0,
                multi: !0
            }), ye("autoRound,strictUnits", {
                parser: function(t, e, i, r, s) {
                    return s
                }
            }), ye("border", {
                defaultValue: "0px solid #000",
                parser: function(t, e, i, r, n, a) {
                    return this.parseComplex(t.style, this.format(Q(t, "borderTopWidth", s, !1, "0px") + " " + Q(t, "borderTopStyle", s, !1, "solid") + " " + Q(t, "borderTopColor", s, !1, "#000")), this.format(e), n, a)
                },
                color: !0,
                formatter: function(t) {
                    var e = t.split(" ");
                    return e[0] + " " + (e[1] || "solid") + " " + (t.match(ue) || ["#000"])[0]
                }
            }), ye("borderWidth", {
                parser: ce("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
            }), ye("float,cssFloat,styleFloat", {
                parser: function(t, e, i, r, s) {
                    var n = t.style,
                        a = "cssFloat" in n ? "cssFloat" : "styleFloat";
                    return new _e(n, a, 0, 0, s, -1, i, !1, 0, n[a], e)
                }
            });
            var Ee = function(t) {
                var e, i = this.t,
                    r = i.filter || Q(this.data, "filter") || "",
                    s = 0 | this.s + this.c * t;
                100 === s && (-1 === r.indexOf("atrix(") && -1 === r.indexOf("radient(") && -1 === r.indexOf("oader(") ? (i.removeAttribute("filter"), e = !Q(this.data, "filter")) : (i.filter = r.replace(b, ""), e = !0)), e || (this.xn1 && (i.filter = r = r || "alpha(opacity=" + s + ")"), -1 === r.indexOf("pacity") ? 0 === s && this.xn1 || (i.filter = r + " alpha(opacity=" + s + ")") : i.filter = r.replace(T, "opacity=" + s))
            };
            ye("opacity,alpha,autoAlpha", {
                defaultValue: "1",
                parser: function(t, e, i, r, n, a) {
                    var o = parseFloat(Q(t, "opacity", s, !1, "1")),
                        l = t.style,
                        h = "autoAlpha" === i;
                    return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), h && 1 === o && "hidden" === Q(t, "visibility", s) && 0 !== e && (o = 0), W ? n = new _e(l, "opacity", o, e - o, n) : (n = new _e(l, "opacity", 100 * o, 100 * (e - o), n), n.xn1 = h ? 1 : 0, l.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = a, n.setRatio = Ee), h && (n = new _e(l, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), n.xs0 = "inherit", r._overwriteProps.push(n.n), r._overwriteProps.push(i)), n
                }
            });
            var Ie = function(t, e) {
                    e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(S, "-$1").toLowerCase())) : t.removeAttribute(e))
                },
                Ye = function(t) {
                    if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                        this.t.setAttribute("class", 0 === t ? this.b : this.e);
                        for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Ie(i, e.p), e = e._next;
                        1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                    } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                };
            ye("className", {
                parser: function(t, e, r, n, a, o, l) {
                    var h, u, f, c, p, _ = t.getAttribute("class") || "",
                        d = t.style.cssText;
                    if (a = n._classNamePT = new _e(t, r, 0, 0, a, 2), a.setRatio = Ye, a.pr = -11, i = !0, a.b = _, u = K(t, s), f = t._gsClassPT) {
                        for (c = {}, p = f.data; p;) c[p.p] = 1, p = p._next;
                        f.setRatio(1)
                    }
                    return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : _.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", a.e), h = J(t, u, K(t), l, c), t.setAttribute("class", _), a.data = h.firstMPT, t.style.cssText = d, a = a.xfirst = n.parse(t, h.difs, a, o)
                }
            });
            var We = function(t) {
                if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                    var e, i, r, s, n, a = this.t.style,
                        o = l.transform.parse;
                    if ("all" === this.e) a.cssText = "", s = !0;
                    else
                        for (e = this.e.split(" ").join("").split(","), r = e.length; --r > -1;) i = e[r], l[i] && (l[i].parse === o ? s = !0 : i = "transformOrigin" === i ? Se : l[i].p), Ie(a, i);
                    s && (Ie(a, be), n = this.t._gsTransform, n && (n.svg && this.t.removeAttribute("data-svg-origin"), delete this.t._gsTransform))
                }
            };
            for (ye("clearProps", {
                    parser: function(t, e, r, s, n) {
                        return n = new _e(t, r, 0, 0, n, 2), n.setRatio = We, n.e = e, n.pr = -10, n.data = s._tween, i = !0, n
                    }
                }), h = "bezier,throwProps,physicsProps,physics2D".split(","), ge = h.length; ge--;) xe(h[ge]);
            h = a.prototype, h._firstPT = h._lastParsedTransform = h._transform = null, h._onInitTween = function(t, e, o) {
                if (!t.nodeType) return !1;
                this._target = t, this._tween = o, this._vars = e, u = e.autoRound, i = !1, r = e.suffixMap || a.suffixMap, s = H(t, ""), n = this._overwriteProps;
                var h, p, d, m, g, v, y, x, T, b = t.style;
                if (f && "" === b.zIndex && (h = Q(t, "zIndex", s), ("auto" === h || "" === h) && this._addLazySet(b, "zIndex", 0)), "string" == typeof e && (m = b.cssText, h = K(t, s), b.cssText = m + ";" + e, h = J(t, h, K(t)).difs, !W && w.test(e) && (h.opacity = parseFloat(RegExp.$1)), e = h, b.cssText = m), this._firstPT = p = e.className ? l.className.parse(t, e.className, "className", this, null, null, e) : this.parse(t, e, null), this._transformType) {
                    for (T = 3 === this._transformType, be ? c && (f = !0, "" === b.zIndex && (y = Q(t, "zIndex", s), ("auto" === y || "" === y) && this._addLazySet(b, "zIndex", 0)), _ && this._addLazySet(b, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (T ? "visible" : "hidden"))) : b.zoom = 1, d = p; d && d._next;) d = d._next;
                    x = new _e(t, "transform", 0, 0, null, 2), this._linkCSSP(x, null, d), x.setRatio = be ? Be : ze, x.data = this._transform || Xe(t, s, !0), x.tween = o, x.pr = -1, n.pop()
                }
                if (i) {
                    for (; p;) {
                        for (v = p._next, d = m; d && d.pr > p.pr;) d = d._next;
                        (p._prev = d ? d._prev : g) ? p._prev._next = p: m = p, (p._next = d) ? d._prev = p : g = p, p = v
                    }
                    this._firstPT = m
                }
                return !0
            }, h.parse = function(t, e, i, n) {
                var a, o, h, f, c, p, _, d, m, g, v = t.style;
                for (a in e) p = e[a], o = l[a], o ? i = o.parse(t, p, a, this, i, n, e) : (c = Q(t, a, s) + "", m = "string" == typeof p, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || m && P.test(p) ? (m || (p = he(p), p = (p.length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), i = me(v, a, c, p, !0, "transparent", i, 0, n)) : !m || -1 === p.indexOf(" ") && -1 === p.indexOf(",") ? (h = parseFloat(c), _ = h || 0 === h ? c.substr((h + "").length) : "", ("" === c || "auto" === c) && ("width" === a || "height" === a ? (h = ie(t, a, s), _ = "px") : "left" === a || "top" === a ? (h = $(t, a, s), _ = "px") : (h = "opacity" !== a ? 0 : 1, _ = "")), g = m && "=" === p.charAt(1), g ? (f = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), f *= parseFloat(p), d = p.replace(x, "")) : (f = parseFloat(p), d = m ? p.replace(x, "") : ""), "" === d && (d = a in r ? r[a] : _), p = f || 0 === f ? (g ? f + h : f) + d : e[a], _ !== d && "" !== d && (f || 0 === f) && h && (h = Z(t, a, h, _), "%" === d ? (h /= Z(t, a, 100, "%") / 100, e.strictUnits !== !0 && (c = h + "%")) : "em" === d ? h /= Z(t, a, 1, "em") : "px" !== d && (f = Z(t, a, f, d), d = "px"), g && (f || 0 === f) && (p = f + h + d)), g && (f += h), !h && 0 !== h || !f && 0 !== f ? void 0 !== v[a] && (p || "NaN" != p + "" && null != p) ? (i = new _e(v, a, f || h || 0, 0, i, -1, a, !1, 0, c, p), i.xs0 = "none" !== p || "display" !== a && -1 === a.indexOf("Style") ? p : c) : j("invalid " + a + " tween value: " + e[a]) : (i = new _e(v, a, h, f - h, i, 0, a, u !== !1 && ("px" === d || "zIndex" === a), 0, c, p), i.xs0 = d)) : i = me(v, a, c, p, !0, null, i, 0, n)), n && i && !i.plugin && (i.plugin = n);
                return i
            }, h.setRatio = function(t) {
                var e, i, r, s = this._firstPT,
                    n = 1e-6;
                if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                    if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                        for (; s;) {
                            if (e = s.c * t + s.s, s.r ? e = Math.round(e) : n > e && e > -n && (e = 0), s.type)
                                if (1 === s.type)
                                    if (r = s.l, 2 === r) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2;
                                    else if (3 === r) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3;
                            else if (4 === r) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4;
                            else if (5 === r) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4 + s.xn4 + s.xs5;
                            else {
                                for (i = s.xs0 + e + s.xs1, r = 1; s.l > r; r++) i += s["xn" + r] + s["xs" + (r + 1)];
                                s.t[s.p] = i
                            } else -1 === s.type ? s.t[s.p] = s.xs0 : s.setRatio && s.setRatio(t);
                            else s.t[s.p] = e + s.xs0;
                            s = s._next
                        } else
                            for (; s;) 2 !== s.type ? s.t[s.p] = s.b : s.setRatio(t), s = s._next;
                    else
                        for (; s;) {
                            if (2 !== s.type)
                                if (s.r && -1 !== s.type)
                                    if (e = Math.round(s.s + s.c), s.type) {
                                        if (1 === s.type) {
                                            for (r = s.l, i = s.xs0 + e + s.xs1, r = 1; s.l > r; r++) i += s["xn" + r] + s["xs" + (r + 1)];
                                            s.t[s.p] = i
                                        }
                                    } else s.t[s.p] = e + s.xs0;
                            else s.t[s.p] = s.e;
                            else s.setRatio(t);
                            s = s._next
                        }
            }, h._enableTransforms = function(t) {
                this._transform = this._transform || Xe(this._target, s, !0), this._transformType = this._transform.svg && Te || !t && 3 !== this._transformType ? 2 : 3
            };
            var Ve = function() {
                this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
            };
            h._addLazySet = function(t, e, i) {
                var r = this._firstPT = new _e(t, e, 0, 0, this._firstPT, 2);
                r.e = i, r.setRatio = Ve, r.data = this
            }, h._linkCSSP = function(t, e, i, r) {
                return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, r = !0), i ? i._next = t : r || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
            }, h._kill = function(e) {
                var i, r, s, n = e;
                if (e.autoAlpha || e.alpha) {
                    n = {};
                    for (r in e) n[r] = e[r];
                    n.opacity = 1, n.autoAlpha && (n.visibility = 1)
                }
                return e.className && (i = this._classNamePT) && (s = i.xfirst, s && s._prev ? this._linkCSSP(s._prev, i._next, s._prev._prev) : s === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, s._prev), this._classNamePT = null), t.prototype._kill.call(this, n)
            };
            var je = function(t, e, i) {
                var r, s, n, a;
                if (t.slice)
                    for (s = t.length; --s > -1;) je(t[s], e, i);
                else
                    for (r = t.childNodes, s = r.length; --s > -1;) n = r[s], a = n.type, n.style && (e.push(K(n)), i && i.push(n)), 1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || je(n, e, i)
            };
            return a.cascadeTo = function(t, i, r) {
                var s, n, a, o, l = e.to(t, i, r),
                    h = [l],
                    u = [],
                    f = [],
                    c = [],
                    p = e._internals.reservedProps;
                for (t = l._targets || l.target, je(t, u, c), l.render(i, !0, !0), je(t, f), l.render(0, !0, !0), l._enabled(!0), s = c.length; --s > -1;)
                    if (n = J(c[s], u[s], f[s]), n.firstMPT) {
                        n = n.difs;
                        for (a in r) p[a] && (n[a] = r[a]);
                        o = {};
                        for (a in n) o[a] = u[s][a];
                        h.push(e.fromTo(c[s], i, o, n))
                    }
                return h
            }, t.activate([a]), a
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t) {
        "use strict";
        var e = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[t]
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = e())
    }("CSSPlugin");
/*!
 * VERSION: beta 0.3.3
 * DATE: 2014-10-29
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://www.greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(function(t) {
    "use strict";
    var e = t.GreenSockGlobals || t,
        i = function(t) {
            var i, s = t.split("."),
                r = e;
            for (i = 0; s.length > i; i++) r[s[i]] = r = r[s[i]] || {};
            return r
        },
        s = i("com.greensock.utils"),
        r = function(t) {
            var e = t.nodeType,
                i = "";
            if (1 === e || 9 === e || 11 === e) {
                if ("string" == typeof t.textContent) return t.textContent;
                for (t = t.firstChild; t; t = t.nextSibling) i += r(t)
            } else if (3 === e || 4 === e) return t.nodeValue;
            return i
        },
        n = document,
        a = n.defaultView ? n.defaultView.getComputedStyle : function() {},
        o = /([A-Z])/g,
        h = function(t, e, i, s) {
            var r;
            return (i = i || a(t, null)) ? (t = i.getPropertyValue(e.replace(o, "-$1").toLowerCase()), r = t || i.length ? t : i[e]) : t.currentStyle && (i = t.currentStyle, r = i[e]), s ? r : parseInt(r, 10) || 0
        },
        l = function(t) {
            return t.length && t[0] && (t[0].nodeType && t[0].style && !t.nodeType || t[0].length && t[0][0]) ? !0 : !1
        },
        _ = function(t) {
            var e, i, s, r = [],
                n = t.length;
            for (e = 0; n > e; e++)
                if (i = t[e], l(i))
                    for (s = i.length, s = 0; i.length > s; s++) r.push(i[s]);
                else r.push(i);
            return r
        },
        u = ")eefec303079ad17405c",
        c = /(?:<br>|<br\/>|<br \/>)/gi,
        f = n.all && !n.addEventListener,
        p = "<div style='position:relative;display:inline-block;" + (f ? "*display:inline;*zoom:1;'" : "'"),
        m = function(t) {
            t = t || "";
            var e = -1 !== t.indexOf("++"),
                i = 1;
            return e && (t = t.split("++").join("")),
                function() {
                    return p + (t ? " class='" + t + (e ? i++ : "") + "'>" : ">")
                }
        },
        d = s.SplitText = e.SplitText = function(t, e) {
            if ("string" == typeof t && (t = d.selector(t)), !t) throw "cannot split a null element.";
            this.elements = l(t) ? _(t) : [t], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = e || {}, this.split(e)
        },
        g = function(t, e, i) {
            var s = t.nodeType;
            if (1 === s || 9 === s || 11 === s)
                for (t = t.firstChild; t; t = t.nextSibling) g(t, e, i);
            else(3 === s || 4 === s) && (t.nodeValue = t.nodeValue.split(e).join(i))
        },
        v = function(t, e) {
            for (var i = e.length; --i > -1;) t.push(e[i])
        },
        y = function(t, e, i, s, o) {
            c.test(t.innerHTML) && (t.innerHTML = t.innerHTML.replace(c, u));
            var l, _, f, p, d, y, T, w, b, x, P, S, k, C, R = r(t),
                O = e.type || e.split || "chars,words,lines",
                A = -1 !== O.indexOf("lines") ? [] : null,
                D = -1 !== O.indexOf("words"),
                M = -1 !== O.indexOf("chars"),
                L = "absolute" === e.position || e.absolute === !0,
                z = L ? "&#173; " : " ",
                I = -999,
                E = a(t),
                N = h(t, "paddingLeft", E),
                F = h(t, "borderBottomWidth", E) + h(t, "borderTopWidth", E),
                B = h(t, "borderLeftWidth", E) + h(t, "borderRightWidth", E),
                X = h(t, "paddingTop", E) + h(t, "paddingBottom", E),
                j = h(t, "paddingLeft", E) + h(t, "paddingRight", E),
                U = h(t, "textAlign", E, !0),
                Y = t.clientHeight,
                q = t.clientWidth,
                V = "</div>",
                G = m(e.wordsClass),
                Q = m(e.charsClass),
                W = -1 !== (e.linesClass || "").indexOf("++"),
                Z = e.linesClass,
                H = -1 !== R.indexOf("<"),
                $ = !0,
                K = [],
                J = [],
                te = [];
            for (W && (Z = Z.split("++").join("")), H && (R = R.split("<").join("{{LT}}")), l = R.length, p = G(), d = 0; l > d; d++)
                if (T = R.charAt(d), ")" === T && R.substr(d, 20) === u) p += ($ ? V : "") + "<BR/>", $ = !1, d !== l - 20 && R.substr(d + 20, 20) !== u && (p += " " + G(), $ = !0), d += 19;
                else if (" " === T && " " !== R.charAt(d - 1) && d !== l - 1 && R.substr(d - 20, 20) !== u) {
                for (p += $ ? V : "", $ = !1;
                    " " === R.charAt(d + 1);) p += z, d++;
                (")" !== R.charAt(d + 1) || R.substr(d + 1, 20) !== u) && (p += z + G(), $ = !0)
            } else p += M && " " !== T ? Q() + T + "</div>" : T;
            for (t.innerHTML = p + ($ ? V : ""), H && g(t, "{{LT}}", "<"), y = t.getElementsByTagName("*"), l = y.length, w = [], d = 0; l > d; d++) w[d] = y[d];
            if (A || L)
                for (d = 0; l > d; d++) b = w[d], f = b.parentNode === t, (f || L || M && !D) && (x = b.offsetTop, A && f && x !== I && "BR" !== b.nodeName && (_ = [], A.push(_), I = x), L && (b._x = b.offsetLeft, b._y = x, b._w = b.offsetWidth, b._h = b.offsetHeight), A && (D !== f && M || (_.push(b), b._x -= N), f && d && (w[d - 1]._wordEnd = !0), "BR" === b.nodeName && b.nextSibling && "BR" === b.nextSibling.nodeName && A.push([])));
            for (d = 0; l > d; d++) b = w[d], f = b.parentNode === t, "BR" !== b.nodeName ? (L && (S = b.style, D || f || (b._x += b.parentNode._x, b._y += b.parentNode._y), S.left = b._x + "px", S.top = b._y + "px", S.position = "absolute", S.display = "block", S.width = b._w + 1 + "px", S.height = b._h + "px"), D ? f && "" !== b.innerHTML ? J.push(b) : M && K.push(b) : f ? (t.removeChild(b), w.splice(d--, 1), l--) : !f && M && (x = !A && !L && b.nextSibling, t.appendChild(b), x || t.appendChild(n.createTextNode(" ")), K.push(b))) : A || L ? (t.removeChild(b), w.splice(d--, 1), l--) : D || t.appendChild(b);
            if (A) {
                for (L && (P = n.createElement("div"), t.appendChild(P), k = P.offsetWidth + "px", x = P.offsetParent === t ? 0 : t.offsetLeft, t.removeChild(P)), S = t.style.cssText, t.style.cssText = "display:none;"; t.firstChild;) t.removeChild(t.firstChild);
                for (C = !L || !D && !M, d = 0; A.length > d; d++) {
                    for (_ = A[d], P = n.createElement("div"), P.style.cssText = "display:block;text-align:" + U + ";position:" + (L ? "absolute;" : "relative;"), Z && (P.className = Z + (W ? d + 1 : "")), te.push(P), l = _.length, y = 0; l > y; y++) "BR" !== _[y].nodeName && (b = _[y], P.appendChild(b), C && (b._wordEnd || D) && P.appendChild(n.createTextNode(" ")), L && (0 === y && (P.style.top = b._y + "px", P.style.left = N + x + "px"), b.style.top = "0px", x && (b.style.left = b._x - x + "px")));
                    0 === l && (P.innerHTML = "&nbsp;"), D || M || (P.innerHTML = r(P).split(String.fromCharCode(160)).join(" ")), L && (P.style.width = k, P.style.height = b._h + "px"), t.appendChild(P)
                }
                t.style.cssText = S
            }
            L && (Y > t.clientHeight && (t.style.height = Y - X + "px", Y > t.clientHeight && (t.style.height = Y + F + "px")), q > t.clientWidth && (t.style.width = q - j + "px", q > t.clientWidth && (t.style.width = q + B + "px"))), v(i, K), v(s, J), v(o, te)
        },
        T = d.prototype;
    T.split = function(t) {
        this.isSplit && this.revert(), this.vars = t || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
        for (var e = this.elements.length; --e > -1;) this._originals[e] = this.elements[e].innerHTML, y(this.elements[e], this.vars, this.chars, this.words, this.lines);
        return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
    }, T.revert = function() {
        if (!this._originals) throw "revert() call wasn't scoped properly.";
        for (var t = this._originals.length; --t > -1;) this.elements[t].innerHTML = this._originals[t];
        return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
    }, d.selector = t.$ || t.jQuery || function(e) {
        var i = t.$ || t.jQuery;
        return i ? (d.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
    }, d.version = "0.3.3"
})(_gsScope),
function(t) {
    "use strict";
    var e = function() {
        return (_gsScope.GreenSockGlobals || _gsScope)[t]
    };
    "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (module.exports = e())
}("SplitText");
try {
    window.GreenSockGlobals = null;
    window._gsQueue = null;
    window._gsDefine = null;
    delete(window.GreenSockGlobals);
    delete(window._gsQueue);
    delete(window._gsDefine);
} catch (e) {}
try {
    window.GreenSockGlobals = oldgs;
    window._gsQueue = oldgs_queue;
} catch (e) {}
if (window.tplogs == true) try {
        console.groupEnd();
    } catch (e) {}
    (function(e, t) {
        e.waitForImages = {
            hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage"]
        };
        e.expr[":"].uncached = function(t) {
            var n = document.createElement("img");
            n.src = t.src;
            return e(t).is('img[src!=""]') && !n.complete
        };
        e.fn.waitForImages = function(t, n, r) {
            if (e.isPlainObject(arguments[0])) {
                n = t.each;
                r = t.waitForAll;
                t = t.finished
            }
            t = t || e.noop;
            n = n || e.noop;
            r = !!r;
            if (!e.isFunction(t) || !e.isFunction(n)) {
                throw new TypeError("An invalid callback was supplied.")
            }
            return this.each(function() {
                var i = e(this),
                    s = [];
                if (r) {
                    var o = e.waitForImages.hasImageProperties || [],
                        u = /url\((['"]?)(.*?)\1\)/g;
                    i.find("*").each(function() {
                        var t = e(this);
                        if (t.is("img:uncached")) {
                            s.push({
                                src: t.attr("src"),
                                element: t[0]
                            })
                        }
                        e.each(o, function(e, n) {
                            var r = t.css(n);
                            if (!r) {
                                return true
                            }
                            var i;
                            while (i = u.exec(r)) {
                                s.push({
                                    src: i[2],
                                    element: t[0]
                                })
                            }
                        })
                    })
                } else {
                    i.find("img:uncached").each(function() {
                        s.push({
                            src: this.src,
                            element: this
                        })
                    })
                }
                var f = s.length,
                    l = 0;
                if (f == 0) {
                    t.call(i[0])
                }
                e.each(s, function(r, s) {
                    var o = new Image;
                    e(o).bind("load error", function(e) {
                        l++;
                        n.call(s.element, l, f, e.type == "load");
                        if (l == f) {
                            t.call(i[0]);
                            return false
                        }
                    });
                    o.src = s.src
                })
            })
        };
    })(jQuery);
! function(e, t) {
    "use strict";
    e.fn.extend({
        revolution: function(a) {
            var n = {
                delay: 9e3,
                responsiveLevels: 4064,
                gridwidth: 960,
                gridheight: 500,
                minHeight: 0,
                autoHeight: "off",
                sliderType: "standard",
                sliderLayout: "auto",
                fullScreenAutoWidth: "off",
                fullScreenAlignForce: "off",
                fullScreenOffsetContainer: "",
                fullScreenOffset: "0",
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLimit: 0,
                hideSliderAtLimit: 0,
                disableProgressBar: "off",
                stopAtSlide: -1,
                stopAfterLoops: -1,
                shadow: 0,
                dottedOverlay: "none",
                startDelay: 0,
                lazyType: "smart",
                spinner: "spinner0",
                shuffle: "off",
                viewPort: {
                    enable: !1,
                    outof: "wait",
                    visible_area: "60%"
                },
                fallbacks: {
                    isJoomla: !1,
                    panZoomDisableOnMobile: "off",
                    simplifyAll: "on",
                    nextSlideOnWindowFocus: "off",
                    disableFocusListener: !0
                },
                parallax: {
                    type: "off",
                    levels: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
                    origo: "enterpoint",
                    speed: 400,
                    bgparallax: "on",
                    opacity: "on",
                    disable_onmobile: "off"
                },
                carousel: {
                    horizontal_align: "center",
                    vertical_align: "center",
                    infinity: "on",
                    space: 0,
                    maxVisibleItems: 3,
                    stretch: "off",
                    fadeout: "on",
                    maxRotation: 0,
                    minScale: 0,
                    vary_fade: "off",
                    vary_rotation: "on",
                    vary_scale: "off",
                    border_radius: "0px",
                    padding_top: 0,
                    padding_bottom: 0
                },
                navigation: {
                    keyboardNavigation: "on",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation: "off",
                    onHoverStop: "on",
                    touch: {
                        touchenabled: "off",
                        swipe_treshold: 75,
                        swipe_min_touches: 1,
                        drag_block_vertical: !1,
                        swipe_direction: "horizontal"
                    },
                    arrows: {
                        style: "",
                        enable: !1,
                        hide_onmobile: !1,
                        hide_onleave: !0,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_under: 0,
                        hide_over: 9999,
                        tmp: "",
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 20,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 20,
                            v_offset: 0
                        }
                    },
                    bullets: {
                        style: "",
                        enable: !1,
                        hide_onmobile: !1,
                        hide_onleave: !0,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_under: 0,
                        hide_over: 9999,
                        direction: "horizontal",
                        h_align: "left",
                        v_align: "center",
                        space: 0,
                        h_offset: 20,
                        v_offset: 0,
                        tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>'
                    },
                    thumbnails: {
                        style: "",
                        enable: !1,
                        width: 100,
                        height: 50,
                        min_width: 100,
                        wrapper_padding: 2,
                        wrapper_color: "#f5f5f5",
                        wrapper_opacity: 1,
                        tmp: '<span class="tp-thumb-image"></span><span class="tp-thumb-title"></span>',
                        visibleAmount: 5,
                        hide_onmobile: !1,
                        hide_onleave: !0,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_under: 0,
                        hide_over: 9999,
                        direction: "horizontal",
                        span: !1,
                        position: "inner",
                        space: 2,
                        h_align: "left",
                        v_align: "center",
                        h_offset: 20,
                        v_offset: 0
                    },
                    tabs: {
                        style: "",
                        enable: !1,
                        width: 100,
                        min_width: 100,
                        height: 50,
                        wrapper_padding: 10,
                        wrapper_color: "#f5f5f5",
                        wrapper_opacity: 1,
                        tmp: '<span class="tp-tab-image"></span>',
                        visibleAmount: 5,
                        hide_onmobile: !1,
                        hide_onleave: !0,
                        hide_delay: 200,
                        hide_delay_mobile: 1200,
                        hide_under: 0,
                        hide_over: 9999,
                        direction: "horizontal",
                        span: !1,
                        space: 0,
                        position: "inner",
                        h_align: "left",
                        v_align: "center",
                        h_offset: 20,
                        v_offset: 0
                    }
                },
                extensions: "extensions/",
                extensions_suffix: ".min.js",
                debugMode: !1
            };
            return a = e.extend(!0, {}, n, a), this.each(function() {
                var n = e(this);
                "hero" == a.sliderType && n.find(">ul>li").each(function(t) {
                    t > 0 && e(this).remove()
                }), a.jsFileLocation = a.jsFileLocation || s("themepunch.revolution.min.js"), a.jsFileLocation = a.jsFileLocation + a.extensions, a.scriptsneeded = o(a, n), a.curWinRange = 0, e(this).on("scriptsloaded", function() {
                    return a.modulesfailing ? (n.html('<div style="margin:auto;line-height:40px;font-size:14px;color:#fff;padding:15px;background:#e74c3c;margin:20px 0px;">!! Error at loading Slider Revolution 5.0 Extrensions.' + a.errorm + "</div>").show(), !1) : (i.migration != t && (a = i.migration(n, a)), punchgs.force3D = !0, "on" !== a.simplifyAll && punchgs.TweenLite.lagSmoothing(1e3, 16), d(n, a), void u(n, a))
                }), r(n, a.scriptsneeded)
            })
        },
        revaddcallback: function(i) {
            return this.each(function() {
                var a = e(this);
                if (a != t && a.length > 0 && e("body").find("#" + a.attr("id")).length > 0) {
                    var n = a.parent().find(".tp-bannertimer"),
                        o = n.data("opt");
                    o.callBackArray === t && (o.callBackArray = new Array), o.callBackArray.push(i)
                }
            })
        },
        revgetparallaxproc: function() {
            var i = e(this);
            if (i != t && i.length > 0 && e("body").find("#" + i.attr("id")).length > 0) {
                var a = i.parent().find(".tp-bannertimer"),
                    n = a.data("opt");
                return n.scrollproc
            }
        },
        revdebugmode: function() {
            return this.each(function() {
                var i = e(this);
                if (i != t && i.length > 0 && e("body").find("#" + i.attr("id")).length > 0) {
                    var a = i.parent().find(".tp-bannertimer"),
                        n = a.data("opt");
                    n.debugMode = !0, v(i, n)
                }
            })
        },
        revscroll: function(i) {
            return this.each(function() {
                var a = e(this);
                a != t && a.length > 0 && e("body").find("#" + a.attr("id")).length > 0 && e("body,html").animate({
                    scrollTop: a.offset().top + opt.li.height() - i + "px"
                }, {
                    duration: 400
                })
            })
        },
        revredraw: function() {
            return this.each(function() {
                var i = e(this);
                if (i != t && i.length > 0 && e("body").find("#" + i.attr("id")).length > 0) {
                    var a = i.parent().find(".tp-bannertimer"),
                        n = a.data("opt");
                    v(i, n)
                }
            })
        },
        revkill: function() {
            var a = this,
                n = e(this);
            if (punchgs.TweenLite.killDelayedCallsTo(showHideNavElements), i.endMoveCaption && punchgs.TweenLite.killDelayedCallsTo(i.endMoveCaption), n != t && n.length > 0 && e("body").find("#" + n.attr("id")).length > 0) {
                n.data("conthover", 1), n.data("conthover-changed", 1), n.trigger("revolution.slide.onpause");
                var o = n.parent().find(".tp-bannertimer"),
                    r = o.data("opt");
                r.tonpause = !0, n.trigger("stoptimer"), punchgs.TweenLite.killTweensOf(n.find("*"), !1), punchgs.TweenLite.killTweensOf(n, !1), n.unbind("hover, mouseover, mouseenter,mouseleave, resize");
                var s = "resize.revslider-" + n.attr("id");
                e(window).off(s), n.find("*").each(function() {
                    var i = e(this);
                    i.unbind("on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer"), i.off("on, hover, mouseenter,mouseleave,mouseover, resize"), i.data("mySplitText", null), i.data("ctl", null), i.data("tween") != t && i.data("tween").kill(), i.data("kenburn") != t && i.data("kenburn").kill(), i.data("timeline_out") != t && i.data("timeline_out").kill(), i.data("timeline") != t && i.data("timeline").kill(), i.remove(), i.empty(), i = null
                }), punchgs.TweenLite.killTweensOf(n.find("*"), !1), punchgs.TweenLite.killTweensOf(n, !1), o.remove();
                try {
                    n.closest(".forcefullwidth_wrapper_tp_banner").remove()
                } catch (l) {}
                try {
                    n.closest(".rev_slider_wrapper").remove()
                } catch (l) {}
                try {
                    n.remove()
                } catch (l) {}
                return n.empty(), n.html(), n = null, r = null, delete a.c, delete a.opt, !0
            }
            return !1
        },
        revpause: function() {
            return this.each(function() {
                var i = e(this);
                if (i != t && i.length > 0 && e("body").find("#" + i.attr("id")).length > 0) {
                    i.data("conthover", 1), i.data("conthover-changed", 1), i.trigger("revolution.slide.onpause");
                    var a = i.parent().find(".tp-bannertimer"),
                        n = a.data("opt");
                    n.tonpause = !0, i.trigger("stoptimer")
                }
            })
        },
        revresume: function() {
            return this.each(function() {
                var i = e(this);
                if (i != t && i.length > 0 && e("body").find("#" + i.attr("id")).length > 0) {
                    i.data("conthover", 0), i.data("conthover-changed", 1), i.trigger("revolution.slide.onresume");
                    var a = i.parent().find(".tp-bannertimer"),
                        n = a.data("opt");
                    n.tonpause = !1, i.trigger("starttimer")
                }
            })
        },
        revnext: function() {
            return this.each(function() {
                var a = e(this);
                if (a != t && a.length > 0 && e("body").find("#" + a.attr("id")).length > 0) {
                    var n = a.parent().find(".tp-bannertimer"),
                        o = n.data("opt");
                    i.callingNewSlide(o, a, 1)
                }
            })
        },
        revprev: function() {
            return this.each(function() {
                var a = e(this);
                if (a != t && a.length > 0 && e("body").find("#" + a.attr("id")).length > 0) {
                    var n = a.parent().find(".tp-bannertimer"),
                        o = n.data("opt");
                    i.callingNewSlide(o, a, -1)
                }
            })
        },
        revmaxslide: function() {
            return e(this).find(".tp-revslider-mainul >li").length
        },
        revcurrentslide: function() {
            var i = e(this);
            if (i != t && i.length > 0 && e("body").find("#" + i.attr("id")).length > 0) {
                var a = i.parent().find(".tp-bannertimer"),
                    n = a.data("opt");
                return parseInt(n.act, 0) + 1
            }
        },
        revlastslide: function() {
            return e(this).find(".tp-revslider-mainul >li").length
        },
        revshowslide: function(a) {
            return this.each(function() {
                var n = e(this);
                if (n != t && n.length > 0 && e("body").find("#" + n.attr("id")).length > 0) {
                    var o = n.parent().find(".tp-bannertimer"),
                        r = o.data("opt");
                    i.callingNewSlide(r, n, "to" + (a - 1))
                }
            })
        },
        revcallslidewithid: function(a) {
            return this.each(function() {
                var n = e(this);
                if (n != t && n.length > 0 && e("body").find("#" + n.attr("id")).length > 0) {
                    var o = n.parent().find(".tp-bannertimer"),
                        r = o.data("opt");
                    i.callingNewSlide(r, n, a)
                }
            })
        }
    });
    var i = e.fn.revolution;
    e.extend(!0, i, {
        simp: function(e, t, i) {
            var a = Math.abs(e) - Math.floor(Math.abs(e / t)) * t;
            return i ? a : 0 > e ? -1 * a : a
        },
        iOSVersion: function() {
            var e = !1;
            return navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) ? navigator.userAgent.match(/OS 4_\d like Mac OS X/i) && (e = !0) : e = !1, e
        },
        isIE: function(t, i) {
            var a = e('<div style="display:none;"/>').appendTo(e("body"));
            a.html("<!--[if " + (i || "") + " IE " + (t || "") + "]><a>&nbsp;</a><![endif]-->");
            var n = a.find("a").length;
            return a.remove(), n
        },
        is_mobile: function() {
            var e = ["android", "webos", "iphone", "ipad", "blackberry", "Android", "webos", , "iPod", "iPhone", "iPad", "Blackberry", "BlackBerry"],
                t = !1;
            for (var i in e) navigator.userAgent.split(e[i]).length > 1 && (t = !0);
            return t
        },
        callBackHandling: function(t, i, a) {
            try {
                t.callBackArray && e.each(t.callBackArray, function(e, t) {
                    t && t.inmodule && t.inmodule === i && t.atposition && t.atposition === a && t.callback && t.callback.call()
                })
            } catch (n) {
                console.log("Call Back Failed")
            }
        },
        get_browser: function() {
            var e, t = navigator.appName,
                i = navigator.userAgent,
                a = i.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
            return a && null != (e = i.match(/version\/([\.\d]+)/i)) && (a[2] = e[1]), a = a ? [a[1], a[2]] : [t, navigator.appVersion, "-?"], a[0]
        },
        get_browser_version: function() {
            var e, t = navigator.appName,
                i = navigator.userAgent,
                a = i.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
            return a && null != (e = i.match(/version\/([\.\d]+)/i)) && (a[2] = e[1]), a = a ? [a[1], a[2]] : [t, navigator.appVersion, "-?"], a[1]
        },
        getHorizontalOffset: function(e, t) {
            var i = c(e, ".outer-left"),
                a = c(e, ".outer-right");
            switch (t) {
                case "left":
                    return i;
                case "right":
                    return a;
                case "both":
                    return i + a
            }
        },
        callingNewSlide: function(t, i, a) {
            var n = i.find(".next-revslide").length > 0 ? i.find(".next-revslide").index() : i.find(".processing-revslide").length > 0 ? i.find(".processing-revslide").index() : i.find(".active-revslide").index(),
                o = 0;
            i.find(".next-revslide").removeClass("next-revslide"), a && e.isNumeric(a) || a.match(/to/g) ? (1 === a || -1 === a ? (o = n + a, o = 0 > o ? t.slideamount - 1 : o >= t.slideamount ? 0 : o) : (a = e.isNumeric(a) ? a : parseInt(a.split("to")[1], 0), o = 0 > a ? 0 : a > t.slideamount - 1 ? t.slideamount - 1 : a), i.find(".tp-revslider-slidesli:eq(" + o + ")").addClass("next-revslide")) : a && i.find(".tp-revslider-slidesli").each(function() {
                var t = e(this);
                t.data("index") === a && t.addClass("next-revslide")
            }), o = i.find(".next-revslide").index(), i.trigger("revolution.nextslide.waiting"), o !== n && -1 != o ? A(i, t) : i.find(".next-revslide").removeClass("next-revslide")
        },
        slotSize: function(i, a) {
            a.slotw = Math.ceil(a.width / a.slots), a.sloth = Math.ceil("fullscreen" == a.sliderLayout ? e(window).height() / a.slots : a.height / a.slots), "on" == a.autoHeight && i !== t && "" !== i && (a.sloth = Math.ceil(i.height() / a.slots))
        },
        setSize: function(i) {
            var a = (i.top_outer || 0) + (i.bottom_outer || 0),
                n = parseInt(i.carousel.padding_top || 0, 0),
                o = parseInt(i.carousel.padding_bottom || 0, 0),
                r = i.gridheight[i.curWinRange];
            if (r = r < i.minHeight ? i.minHeight : r, "fullwidth" == i.sliderLayout && "off" == i.autoHeight && punchgs.TweenLite.set(i.c, {
                    maxHeight: r + "px"
                }), i.c.css({
                    marginTop: n,
                    marginBottom: o
                }), i.width = i.ul.width(), i.height = i.ul.height(), m(i), i.height = Math.round(i.gridheight[i.curWinRange] * (i.width / i.gridwidth[i.curWinRange])), i.height > i.gridheight[i.curWinRange] && "on" != i.autoHeight && (i.height = i.gridheight[i.curWinRange]), "fullscreen" == i.sliderLayout) {
                i.height = i.bw * i.gridheight[i.curWinRange];
                var s = (i.c.parent().width(), e(window).height());
                if (i.fullScreenOffsetContainer != t) {
                    try {
                        var l = i.fullScreenOffsetContainer.split(",");
                        l && e.each(l, function(t, i) {
                            s = e(i).length > 0 ? s - e(i).outerHeight(!0) : s
                        })
                    } catch (d) {}
                    try {
                        i.fullScreenOffset.split("%").length > 1 && i.fullScreenOffset != t && i.fullScreenOffset.length > 0 ? s -= e(window).height() * parseInt(i.fullScreenOffset, 0) / 100 : i.fullScreenOffset != t && i.fullScreenOffset.length > 0 && (s -= parseInt(i.fullScreenOffset, 0))
                    } catch (d) {}
                }
                s = s < i.minHeight ? i.minHeight : s, s -= a, i.c.parent().height(s), i.c.closest(".rev_slider_wrapper").height(s), i.c.css({
                    height: "100%"
                }), i.height = s, i.minHeight != t && i.height < i.minHeight && (i.height = i.minHeight)
            } else i.minHeight != t && i.height < i.minHeight && (i.height = i.minHeight), i.c.height(i.height);
            var c = {
                height: n + o + a + i.height
            };
            i.c.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").css(c), i.c.closest(".rev_slider_wrapper").css(c), m(i)
        },
        enterInViewPort: function(a) {
            a.waitForCountDown && (P(a.c, a), a.waitForCountDown = !1), a.waitForFirstSlide && (A(a.c, a), a.waitForFirstSlide = !1), ("playing" == a.sliderlaststatus || a.sliderlaststatus == t) && a.c.trigger("starttimer"), a.lastplayedvideos != t && a.lastplayedvideos.length > 0 && e.each(a.lastplayedvideos, function(e, t) {
                i.playVideo(t, a)
            })
        },
        leaveViewPort: function(a) {
            a.sliderlaststatus = a.sliderstatus, a.c.trigger("stoptimer"), a.playingvideos != t && a.playingvideos.length > 0 && (a.lastplayedvideos = e.extend(!0, [], a.playingvideos), a.playingvideos && e.each(a.playingvideos, function(e, t) {
                i.stopVideo && i.stopVideo(t, a)
            }))
        }
    });
    var a = i.is_mobile(),
        n = function(i, a) {
            return e("body").data(i) ? !1 : a.filesystem ? (a.errorm === t && (a.errorm = "<br>Local Filesystem Detected !<br>Put this to your header:"), console.warn("Local Filesystem detected !"), a.errorm = a.errorm + '<br>&lt;script type="text/javascript" src="' + a.jsFileLocation + i + a.extensions_suffix + '"&gt;&lt;/script&gt;', console.warn(a.jsFileLocation + i + a.extensions_suffix + " could not be loaded !"), console.warn("Please use a local Server or work online or make sure that you load all needed Libraries manually in your Document."), console.log(" "), a.modulesfailing = !0, !1) : (e.ajax({
                url: a.jsFileLocation + i + a.extensions_suffix,
                dataType: "script",
                cache: !0,
                error: function(e) {
                    console.warn("Slider Revolution 5.0 Error !"), console.error("Failure at Loading:" + i + a.extensions_suffix + " on Path:" + a.jsFileLocation), console.info(e)
                }
            }), void e("body").data(i, !0))
        },
        o = function(a, o) {
            var r = new Object,
                s = a.navigation;
            return r.kenburns = !1, r.parallax = !1, r.carousel = !1, r.navigation = !1, r.videos = !1, r.actions = !1, r.layeranim = !1, r.migration = !1, o.data("version") && o.data("version").match(/5./gi) ? (o.find("img").each(function() {
                "on" == e(this).data("kenburns") && (r.kenburns = !0)
            }), ("carousel" == a.sliderType || "on" == s.keyboardNavigation || "on" == s.mouseScrollNavigation || "on" == s.touch.touchenabled || s.arrows.enable || s.bullets.enable || s.thumbnails.enable || s.tabs.enable) && (r.navigation = !0), o.find(".tp-caption, .tp-static-layer, .rs-background-video-layer").each(function() {
                var i = e(this);
                (i.data("ytid") != t || i.find("iframe").length > 0 && i.find("iframe").attr("src").toLowerCase().indexOf("youtube") > 0) && (r.videos = !0), (i.data("vimeoid") != t || i.find("iframe").length > 0 && i.find("iframe").attr("src").toLowerCase().indexOf("vimeo") > 0) && (r.videos = !0), i.data("actions") !== t && (r.actions = !0), r.layeranim = !0
            }), o.find("li").each(function() {
                e(this).data("link") && e(this).data("link") != t && (r.layeranim = !0, r.actions = !0)
            }), !r.videos && (o.find(".rs-background-video-layer").length > 0 || o.find(".tp-videolayer").length > 0 || o.find("iframe").length > 0 || o.find("video").length > 0) && (r.videos = !0), "carousel" == a.sliderType && (r.carousel = !0), ("off" !== a.parallax.type || a.viewPort.enable || "true" == a.viewPort.enable) && (r.parallax = !0)) : (r.kenburns = !0, r.parallax = !0, r.carousel = !1, r.navigation = !0, r.videos = !0, r.actions = !0, r.layeranim = !0, r.migration = !0), "hero" == a.sliderType && (r.carousel = !1, r.navigation = !1), window.location.href.match(/file:/gi) && (r.filesystem = !0, a.filesystem = !0), r.videos && "undefined" == typeof i.isVideoPlaying && n("revolution.extension.video", a), r.carousel && "undefined" == typeof i.prepareCarousel && n("revolution.extension.carousel", a), r.carousel || "undefined" != typeof i.animateSlide || n("revolution.extension.slideanims", a), r.actions && "undefined" == typeof i.checkActions && n("revolution.extension.actions", a), r.layeranim && "undefined" == typeof i.handleStaticLayers && n("revolution.extension.layeranimation", a), r.kenburns && "undefined" == typeof i.stopKenBurn && n("revolution.extension.kenburn", a), r.navigation && "undefined" == typeof i.createNavigation && n("revolution.extension.navigation", a), r.migration && "undefined" == typeof i.migration && n("revolution.extension.migration", a), r.parallax && "undefined" == typeof i.checkForParallax && n("revolution.extension.parallax", a), r
        },
        r = function(e, t) {
            t.filesystem || "undefined" != typeof punchgs && (!t.kenburns || t.kenburns && "undefined" != typeof i.stopKenBurn) && (!t.navigation || t.navigation && "undefined" != typeof i.createNavigation) && (!t.carousel || t.carousel && "undefined" != typeof i.prepareCarousel) && (!t.videos || t.videos && "undefined" != typeof i.resetVideo) && (!t.actions || t.actions && "undefined" != typeof i.checkActions) && (!t.layeranim || t.layeranim && "undefined" != typeof i.handleStaticLayers) && (!t.migration || t.migration && "undefined" != typeof i.migration) && (!t.parallax || t.parallax && "undefined" != typeof i.checkForParallax) && (t.carousel || !t.carousel && "undefined" != typeof i.animateSlide) ? e.trigger("scriptsloaded") : setTimeout(function() {
                r(e, t)
            }, 50)
        },
        s = function() {
            var t = new RegExp("themepunch.revolution.min.js", "gi"),
                i = "";
            return e("script").each(function() {
                var a = e(this).attr("src");
                a && a.match(t) && (i = a)
            }), i = i.replace("jquery.themepunch.revolution.min.js", ""), i = i.replace("jquery.themepunch.revolution.js", ""), i = i.split("?")[0]
        },
        l = function(t) {
            var i = 9999,
                a = 0,
                n = 0,
                o = 0,
                r = e(window).width();
            t.responsiveLevels && t.responsiveLevels.length && e.each(t.responsiveLevels, function(e, t) {
                t > r && (0 == a || a > t) && (i = t, o = e, a = t), r > t && t > a && (a = t, n = e)
            }), i > a && (o = n), t.curWinRange = o
        },
        d = function(e, t) {
            t.carousel.maxVisibleItems = t.carousel.maxVisibleItems < 1 ? 999 : t.carousel.maxVisibleItems, t.carousel.vertical_align = "top" === t.carousel.vertical_align ? "0%" : "bottom" === t.carousel.vertical_align ? "100%" : "50%"
        },
        c = function(t, i) {
            var a = 0;
            return t.find(i).each(function() {
                var t = e(this);
                !t.hasClass("tp-forcenotvisible") && a < t.outerWidth() && (a = t.outerWidth())
            }), a
        },
        u = function(n, o) {
            if (n == t) return !1;
            if (n.data("aimg") != t && ("enabled" == n.data("aie8") && i.isIE(8) || "enabled" == n.data("amobile") && a) && n.html('<img class="tp-slider-alternative-image" src="' + n.data("aimg") + '">'), n.find(">ul").addClass("tp-revslider-mainul"), o.c = n, o.ul = n.find(".tp-revslider-mainul"), o.cid = n.attr("id"), o.ul.css({
                    visibility: "visible"
                }), o.slideamount = o.ul.find(">li").length, o.slayers = n.find(".tp-static-layers"), o.ul.find(">li").each(function(t) {
                    e(this).data("originalindex", t)
                }), "on" == o.shuffle) {
                var r = new Object,
                    s = o.ul.find(">li:first-child");
                r.fstransition = s.data("fstransition"), r.fsmasterspeed = s.data("fsmasterspeed"), r.fsslotamount = s.data("fsslotamount");
                for (var d = 0; d < o.slideamount; d++) {
                    var c = Math.round(Math.random() * o.slideamount);
                    o.ul.find(">li:eq(" + c + ")").prependTo(o.ul)
                }
                var u = o.ul.find(">li:first-child");
                u.data("fstransition", r.fstransition), u.data("fsmasterspeed", r.fsmasterspeed), u.data("fsslotamount", r.fsslotamount), o.li = o.ul.find(">li")
            }
            if (o.li = o.ul.find(">li"), o.thumbs = new Array, o.slots = 4, o.act = -1, o.firststart = 1, o.loadqueue = new Array, o.syncload = 0, o.conw = n.width(), o.conh = n.height(), o.responsiveLevels.length > 1 ? o.responsiveLevels[0] = 9999 : o.responsiveLevels = 9999, e.each(o.li, function(i, a) {
                    var a = e(a),
                        n = a.find(".rev-slidebg") || a.find("img").first(),
                        r = 0;
                    a.addClass("tp-revslider-slidesli"), a.data("index") === t && a.data("index", "rs-" + Math.round(999999 * Math.random()));
                    var s = new Object;
                    s.params = new Array, s.id = a.data("index"), s.src = a.data("thumb") !== t ? a.data("thumb") : n.data("lazyload") !== t ? n.data("lazyload") : n.attr("src"), a.data("title") !== t && s.params.push({
                        from: RegExp("\\{\\{title\\}\\}", "g"),
                        to: a.data("title")
                    }), a.data("description") !== t && s.params.push({
                        from: RegExp("\\{\\{description\\}\\}", "g"),
                        to: a.data("description")
                    });
                    for (var r = 1; 10 >= r; r++) a.data("param" + r) !== t && s.params.push({
                        from: RegExp("\\{\\{param" + r + "\\}\\}", "g"),
                        to: a.data("param" + r)
                    });
                    if (o.thumbs.push(s), a.data("origindex", a.index()), a.data("link") != t) {
                        var l = a.data("link"),
                            d = a.data("target") || "_self",
                            c = "back" === a.data("slideindex") ? 0 : 60,
                            u = a.data("linktoslide"),
                            p = u;
                        u != t && "next" != u && "prev" != u && o.li.each(function() {
                            var t = e(this);
                            t.data("origindex") + 1 == p && (u = t.data("index"))
                        }), "slide" != l && (u = "no");
                        var h = '<div class="tp-caption sft slidelink" style="cursor:pointer;width:100%;height:100%;z-index:' + c + ';" data-x="center" data-y="center" ',
                            f = "scroll_under" === u ? '[{"event":"click","action":"scrollbelow","offset":"100px","delay":"0"}]' : "prev" === u ? '[{"event":"click","action":"jumptoslide","slide":"prev","delay":"0.2"}]' : "next" === u ? '[{"event":"click","action":"jumptoslide","slide":"next","delay":"0.2"}]' : '[{"event":"click","action":"jumptoslide","slide":"' + u + '","delay":"0.2"}]';
                        h = "no" == u ? h + ' data-start="0">' : h + "data-actions='" + f + '\' data-start="0">', h += '<a style="width:100%;height:100%;display:block"', h = "slide" != l ? h + ' target="' + d + '" href="' + l + '"' : h, h += '><span style="width:100%;height:100%;display:block"></span></a></div>', a.append(h)
                    }
                }), o.rle = o.responsiveLevels.length || 1, o.gridwidth = p(o.gridwidth, o.rle), o.gridheight = p(o.gridheight, o.rle), "on" == o.simplifyAll && (i.isIE(8) || i.iOSVersion()) && (n.find(".tp-caption").each(function() {
                    var t = e(this);
                    t.removeClass("customin customout").addClass("fadein fadeout"), t.data("splitin", ""), t.data("speed", 400)
                }), o.li.each(function() {
                    var t = e(this);
                    t.data("transition", "fade"), t.data("masterspeed", 500), t.data("slotamount", 1);
                    var i = t.find(".rev-slidebg") || t.find(">img").first();
                    i.data("kenburns", "off")
                })), o.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), o.autoHeight = "fullscreen" == o.sliderLayout ? "on" : o.autoHeight, "fullwidth" == o.sliderLayout && "off" == o.autoHeight && n.css({
                    maxHeight: o.gridheight[o.curWinRange] + "px"
                }), "auto" != o.sliderLayout && 0 == n.closest(".forcefullwidth_wrapper_tp_banner").length && ("fullscreen" !== o.sliderLayout || "on" != o.fullScreenAutoWidth)) {
                var m = n.parent(),
                    w = m.css("marginBottom"),
                    b = m.css("marginTop");
                w = w === t ? 0 : w, b = b === t ? 0 : b, m.wrap('<div class="forcefullwidth_wrapper_tp_banner" style="position:relative;width:100%;height:auto;margin-top:' + b + ";margin-bottom:" + w + '"></div>'), n.closest(".forcefullwidth_wrapper_tp_banner").append('<div class="tp-fullwidth-forcer" style="width:100%;height:' + n.height() + 'px"></div>'), n.parent().css({
                    marginTop: "0px",
                    marginBottom: "0px"
                }), n.parent().css({
                    position: "absolute"
                })
            }
            if (o.shadow !== t && o.shadow > 0 && (n.parent().addClass("tp-shadow" + o.shadow), n.parent().append('<div class="tp-shadowcover"></div>'), n.parent().find(".tp-shadowcover").css({
                    backgroundColor: n.parent().css("backgroundColor"),
                    backgroundImage: n.parent().css("backgroundImage")
                })), l(o), !n.hasClass("revslider-initialised")) {
                n.addClass("revslider-initialised"), n.addClass("tp-simpleresponsive"), n.attr("id") == t && n.attr("id", "revslider-" + Math.round(1e3 * Math.random() + 5)), o.firefox13 = !1, o.ie = !e.support.opacity, o.ie9 = 9 == document.documentMode, o.origcd = o.delay; {
                    var x = e.fn.jquery.split("."),
                        _ = parseFloat(x[0]),
                        k = parseFloat(x[1]);
                    parseFloat(x[2] || "0")
                }
                1 == _ && 7 > k && n.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:' + x + " <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>"), _ > 1 && (o.ie = !1);
                var T = new Object;
                T.addedyt = 0, T.addedvim = 0, T.addedvid = 0, n.find(".tp-caption, .rs-background-video-layer").each(function() {
                    var n = e(this),
                        r = n.data("autoplayonlyfirsttime"),
                        s = n.data("autoplay");
                    n.hasClass("tp-static-layer") && i.handleStaticLayers && i.handleStaticLayers(n, o);
                    var l = 0;
                    if (n.find("iframe").each(function() {
                            punchgs.TweenLite.set(e(this), {
                                autoAlpha: 0
                            }), l++
                        }), l > 0 && n.data("iframes", !0), n.hasClass("tp-caption")) {
                        var d = n.hasClass("slidelink") ? "width:100% !important;height:100% !important;" : "";
                        n.wrap('<div class="tp-parallax-wrap" style="' + d + 'position:absolute;visibility:hidden"><div class="tp-loop-wrap" style="' + d + 'position:absolute;"><div class="tp-mask-wrap" style="' + d + 'position:absolute" ></div></div></div>');
                        var c = ["pendulum", "rotate", "slideloop", "pulse", "wave"],
                            u = n.closest(".tp-loop-wrap");
                        e.each(c, function(e, t) {
                            var i = n.find(".rs-" + t),
                                a = i.data() || "";
                            "" != a && (u.data(a), u.addClass("rs-" + t), i.children(0).unwrap(), n.data("loopanimation", "on"))
                        }), punchgs.TweenLite.set(n, {
                            visibility: "hidden"
                        })
                    }
                    var p = n.data("actions");
                    p !== t && i.checkActions(n, o, p), h(n, o), i.checkVideoApis && (T = i.checkVideoApis(n, o, T)), a && ((1 == r || "true" == r) && (n.data("autoplayonlyfirsttime", "false"), r = !1), (1 == s || "true" == s || "on" == s || "1sttime" == s) && (n.data("autoplay", "off"), s = "off")), (1 == r || "true" == r || "1sttime" == s) && n.closest("li.tp-revslider-slidesli").addClass("rs-pause-timer-once"), (1 == s || "true" == s || "on" == s || "no1sttime" == s) && n.closest("li.tp-revslider-slidesli").addClass("rs-pause-timer-always")
                }), n.hover(function() {
                    n.trigger("tp-mouseenter"), o.overcontainer = !0
                }, function() {
                    n.trigger("tp-mouseleft"), o.overcontainer = !1
                }), n.on("mouseover", function() {
                    n.trigger("tp-mouseover"), o.overcontainer = !0
                }), n.find(".tp-caption video").each(function() {
                    var t = e(this);
                    t.removeClass("video-js vjs-default-skin"), t.attr("preload", ""), t.css({
                        display: "none"
                    })
                }), "standard" !== o.sliderType && (o.lazyType = "all"), L(n.find(".tp-static-layers"), o, 0), S(n.find(".tp-static-layers img"), o, function() {
                    n.find(".tp-static-layers img").each(function() {
                        var i = e(this),
                            a = i.data("lazyload") != t ? i.data("lazyload") : i.attr("src"),
                            n = C(o, a);
                        i.attr("src", n.src)
                    })
                }), o.li.each(function(t) {
                    var i = e(this);
                    ("all" == o.lazyType || "smart" == o.lazyType && (0 == t || 1 == t || t == o.slideamount || t == o.slideamount - 1)) && (L(i, o, t), S(i, o, function() {
                        "carousel" == o.sliderType && punchgs.TweenLite.to(i, 1, {
                            autoAlpha: 1,
                            ease: punchgs.Power3.easeInOut
                        })
                    }))
                });
                var z = M("#")[0];
                if (z.length < 9 && z.split("slide").length > 1) {
                    var H = parseInt(z.split("slide")[1], 0);
                    1 > H && (H = 1), H > o.slideamount && (H = o.slideamount), o.startWithSlide = H - 1
                }
                n.append('<div class="tp-loader ' + o.spinner + '"><div class="dot1"></div><div class="dot2"></div><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'), 0 === n.find(".tp-bannertimer").length && n.append('<div class="tp-bannertimer" style="visibility:hidden"></div>'), n.find(".tp-bannertimer").css({
                    width: "0%"
                }), n.find(".tp-bannertimer").data("opt", o), o.ul.css({
                    display: "block"
                }), y(n, o), "off" !== o.parallax.type && i.checkForParallax(n, o), i.setSize(o), "hero" !== o.sliderType && i.createNavigation(n, o), i.resizeThumbsTabs && i.resizeThumbsTabs(o), f(o);
                var O = o.viewPort;
                o.inviewport = !1, O != t && O.enable && (O.visible_area = parseFloat(O.visible_area) / 100, O.visible_area = O.visible_area < .001 ? 100 * O.visible_area : O.visible_area, i.scrollTicker && i.scrollTicker(o, n)), setTimeout(function() {
                    "carousel" == o.sliderType && i.prepareCarousel(o), !O.enable || O.enable && o.inviewport || O.enable && !o.inviewport && "wait" == !O.outof ? A(n, o) : o.waitForFirstSlide = !0, i.manageNavigation && i.manageNavigation(o), o.slideamount > 1 && (!O.enable || O.enable && o.inviewport ? P(n, o) : o.waitForCountDown = !0), setTimeout(function() {
                        n.trigger("revolution.slide.onloaded")
                    }, 100)
                }, o.startDelay), o.startDelay = 0, e("body").data("rs-fullScreenMode", !1), e(window).on("mozfullscreenchange webkitfullscreenchange fullscreenchange", function() {
                    e("body").data("rs-fullScreenMode", !e("body").data("rs-fullScreenMode")), e("body").data("rs-fullScreenMode") && setTimeout(function() {
                        e(window).trigger("resize")
                    }, 200)
                });
                var I = "resize.revslider-" + n.attr("id");
                e(window).on(I, function() {
                    return n == t ? !1 : (0 != e("body").find(n) && f(o), void((n.outerWidth(!0) != o.width || n.is(":hidden") || "fullscreen" == o.sliderLayout && e(window).height() != o.lastwindowheight) && (o.lastwindowheight = e(window).height(), v(n, o))))
                }), g(n, o), f(o), o.disableFocusListener || "true" == o.disableFocusListener || o.disableFocusListener === !0 || j(n, o)
            }
        },
        p = function(t, i) {
            if (!e.isArray(t)) {
                var a = t;
                t = new Array, t.push(a)
            }
            if (t.length < i)
                for (var a = t[t.length - 1], n = 0; n < i - t.length + 2; n++) t.push(a);
            return t
        },
        h = function(a, n) {
            "sliderenter" === a.data("start") && (n.layersonhover === t && (n.c.on("tp-mouseenter", function() {
                n.layersonhover && e.each(n.layersonhover, function(e, a) {
                    a.data("animdirection", "in");
                    var o = a.data("timeline_out"),
                        r = "carousel" === n.sliderType ? 0 : n.width / 2 - n.gridwidth[n.curWinRange] * n.bw / 2,
                        s = 0,
                        l = a.closest(".tp-revslider-slidesli");
                    if (l.hasClass("active-revslide") || l.hasClass("processing-revslide")) {
                        o != t && (o.pause(0), o.kill()), i.animateSingleCaption(a, n, r, s, 0, !1, !0);
                        var d = a.data("timeline");
                        a.data("triggerstate", "on"), d.play(0)
                    }
                })
            }), n.c.on("tp-mouseleft", function() {
                n.layersonhover && e.each(n.layersonhover, function(e, t) {
                    t.data("animdirection", "out"), t.data("triggered", !0), t.data("triggerstate", "off"), i.stopVideo && i.stopVideo(t, n), i.endMoveCaption && i.endMoveCaption(t, null, null, n)
                })
            }), n.layersonhover = new Array), n.layersonhover.push(a))
        },
        f = function(t) {
            var a = i.getHorizontalOffset(t.c, "left");
            if ("auto" == t.sliderLayout || "fullscreen" === t.sliderLayout && "on" == t.fullScreenAutoWidth) "fullscreen" == t.sliderLayout && "on" == t.fullScreenAutoWidth ? punchgs.TweenLite.set(t.ul, {
                left: 0,
                width: t.c.width()
            }) : punchgs.TweenLite.set(t.ul, {
                left: a,
                width: t.c.width() - i.getHorizontalOffset(t.c, "both")
            });
            else {
                var n = Math.ceil(t.c.closest(".forcefullwidth_wrapper_tp_banner").offset().left - a);
                punchgs.TweenLite.set(t.c.parent(), {
                    left: 0 - n + "px",
                    width: e(window).width() - i.getHorizontalOffset(t.c, "both")
                })
            }
            t.slayers && "fullwidth" != t.sliderLayout && "fullscreen" != t.sliderLayout && punchgs.TweenLite.set(t.slayers, {
                left: a
            })
        },
        g = function(a, n, o) {
            var r = a.parent();
            e(window).width() < n.hideSliderAtLimit ? (a.trigger("stoptimer"), "none" != r.css("display") && r.data("olddisplay", r.css("display")), r.css({
                display: "none"
            })) : a.is(":hidden") && o && (r.css(r.data("olddisplay") != t && "undefined" != r.data("olddisplay") && "none" != r.data("olddisplay") ? {
                display: r.data("olddisplay")
            } : {
                display: "block"
            }), a.trigger("restarttimer"), setTimeout(function() {
                v(a, n)
            }, 150)), i.hideUnHideNav && i.hideUnHideNav(n)
        },
        v = function(e, a) {
            if (l(a), !i.resizeThumbsTabs || i.resizeThumbsTabs(a) === !0) {
                if (g(e, a, !0), f(a), "carousel" == a.sliderType && i.prepareCarousel(a, !0), e === t) return !1;
                i.setSize(a), a.conw = a.c.width(), a.conh = a.c.height();
                var n = e.find(".active-revslide .slotholder"),
                    o = e.find(".processing-revslide .slotholder");
                w(e, a, e, 2), "standard" === a.sliderType && (punchgs.TweenLite.set(o.find(".defaultimg"), {
                    opacity: 0
                }), n.find(".defaultimg").css({
                    opacity: 1
                })), "carousel" == a.sliderType && a.lastconw != a.conw && (clearTimeout(a.pcartimer), a.pcartimer = setTimeout(function() {
                    i.prepareCarousel(a, !0)
                }, 100), a.lastconw = a.conw), i.manageNavigation && i.manageNavigation(a), i.animateTheCaptions && i.animateTheCaptions(e.find(".active-revslide"), a, !0), "on" == o.data("kenburns") && i.startKenBurn(o, a, o.data("kbtl").progress()), "on" == n.data("kenburns") && i.startKenBurn(n, a, n.data("kbtl").progress())
            }
        },
        m = function(e) {
            e.bw = e.width / e.gridwidth[e.curWinRange], e.bh = e.height / e.gridheight[e.curWinRange], e.bh > e.bw ? e.bh = e.bw : e.bw = e.bh, (e.bh > 1 || e.bw > 1) && (e.bw = 1, e.bh = 1)
        },
        y = function(n, o) {
            if (n.find(".tp-caption").each(function() {
                    var i = e(this);
                    i.data("transition") !== t && i.addClass(i.data("transition"))
                }), o.ul.css({
                    overflow: "hidden",
                    width: "100%",
                    height: "100%",
                    maxHeight: n.parent().css("maxHeight")
                }), "on" == o.autoHeight && (o.ul.css({
                    overflow: "hidden",
                    width: "100%",
                    height: "100%",
                    maxHeight: "none"
                }), n.css({
                    maxHeight: "none"
                }), n.parent().css({
                    maxHeight: "none"
                })), o.li.each(function(i) {
                    var a = e(this),
                        n = a.data("originalindex");
                    (o.startWithSlide != t && n == o.startWithSlide || o.startWithSlide === t && 0 == i) && a.addClass("next-revslide"), a.css({
                        width: "100%",
                        height: "100%",
                        overflow: "hidden"
                    })
                }), "carousel" === o.sliderType) {
                o.ul.css({
                    overflow: "visible"
                }).wrap('<div class="tp-carousel-wrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden;"></div>');
                var r = '<div style="clear:both;display:block;width:100%;height:1px;position:relative;margin-bottom:-1px"></div>';
                o.c.parent().prepend(r), o.c.parent().append(r), i.prepareCarousel(o)
            }
            n.parent().css({
                overflow: "visible"
            }), o.li.find(">img").each(function() {
                var i = e(this),
                    n = i.closest("li").find(".rs-background-video-layer");
                i.addClass("defaultimg"), "on" == o.panZoomDisableOnMobile && a && (i.data("kenburns", "off"), i.data("bgfit", "cover")), i.wrap('<div class="slotholder" style="width:100%;height:100%;"></div>');
                var r = i.data();
                i.closest(".slotholder").data(r), n.length > 0 && r.bgparallax != t && n.data("bgparallax", r.bgparallax), "none" != o.dottedOverlay && o.dottedOverlay != t && i.closest(".slotholder").append('<div class="tp-dottedoverlay ' + o.dottedOverlay + '"></div>');
                var s = i.attr("src");
                r.src = s, r.bgfit = r.bgfit || "cover", r.bgrepeat = r.bgrepeat || "no-repeat", r.bgposition = r.bgposition || "center center";
                var l = i.closest(".slotholder");
                i.parent().append('<div class="tp-bgimg defaultimg" style="background-color:' + i.css("backgroundColor") + ";background-repeat:" + r.bgrepeat + ";background-image:url(" + s + ");background-size:" + r.bgfit + ";background-position:" + r.bgposition + ';width:100%;height:100%;"></div>');
                var d = document.createComment("Runtime Modification - Img tag is Still Available for SEO Goals in Source - " + i.get(0).outerHTML);
                i.replaceWith(d), i = l.find(".tp-bgimg"), i.data(r), i.attr("src", s), ("standard" === o.sliderType || "undefined" === o.sliderType) && i.css({
                    opacity: 0
                })
            })
        },
        w = function(t, i, a, n) {
            i.removePrepare = i.removePrepare + n, a.find(".slot").each(function() {
                e(this).remove()
            }), i.transition = 0, i.removePrepare = 0
        },
        b = function(e) {
            var i = e;
            return e != t && e.length > 0 && (i = e.split("?")[0]), i
        },
        x = function(e, t) {
            var i = e.split("/"),
                a = t.split("/");
            i.pop();
            for (var n = 0; n < a.length; n++) "." != a[n] && (".." == a[n] ? i.pop() : i.push(a[n]));
            return i.join("/")
        },
        _ = function(t, i, a) {
            i.syncload--, i.loadqueue && e.each(i.loadqueue, function(e, i) {
                var n = i.src.replace(/\.\.\/\.\.\//gi, ""),
                    o = self.location.href,
                    r = document.location.origin,
                    s = o.substring(0, o.length - 1) + "/" + n,
                    l = r + "/" + n,
                    d = x(self.location.href, i.src);
                o = o.substring(0, o.length - 1) + n, r += n, (b(r) === b(decodeURIComponent(t.src)) || b(o) === b(decodeURIComponent(t.src)) || b(d) === b(decodeURIComponent(t.src)) || b(l) === b(decodeURIComponent(t.src)) || b(s) === b(decodeURIComponent(t.src)) || b(i.src) === b(decodeURIComponent(t.src)) || b(i.src).replace(/^.*\/\/[^\/]+/, "") === b(decodeURIComponent(t.src)).replace(/^.*\/\/[^\/]+/, "") || "file://" === window.location.origin && b(t.src).match(new RegExp(n))) && (i.progress = a, i.width = t.width, i.height = t.height)
            }), k(i)
        },
        k = function(t) {
            3 != t.syncload && t.loadqueue && e.each(t.loadqueue, function(e, i) {
                if (i.progress.match(/prepared/g) && t.syncload <= 3) {
                    t.syncload++;
                    var a = new Image;
                    a.onload = function() {
                        _(this, t, "loaded")
                    }, a.onerror = function() {
                        _(this, t, "failed")
                    }, a.src = i.src, i.progress = "inload"
                }
            })
        },
        T = function(t, i, a) {
            var n = !1;
            if (i.loadqueue && e.each(i.loadqueue, function(e, i) {
                    i.src === t && (n = !0)
                }), !n) {
                var o = new Object;
                o.src = t, o.prio = a, o.progress = "prepared", i.loadqueue.push(o)
            }
        },
        L = function(i, a, n) {
            i.find("img,.defaultimg").each(function() {
                var i = e(this),
                    o = i.data("lazyload") !== t && "undefined" !== i.data("lazyload") ? i.data("lazyload") : i.attr("src");
                i.data("start-to-load", e.now()), T(o, a, n)
            }), k(a)
        },
        C = function(t, i) {
            var a = new Object;
            return t.loadqueue && e.each(t.loadqueue, function(e, t) {
                t.src == i && (a = t)
            }), a
        },
        S = function(a, n, o) {
            var r = !1;
            a.find("img,.defaultimg").each(function() {
                var o = e(this),
                    s = o.data("lazyload") != t ? o.data("lazyload") : o.attr("src"),
                    l = C(n, s);
                if (o.data("loaded") === t && l !== t && l.progress && l.progress.match(/loaded/g)) {
                    if (o.attr("src", l.src), o.hasClass("defaultimg")) i.isIE(8) ? defimg.attr("src", l.src) : o.css({
                        backgroundImage: 'url("' + l.src + '")'
                    }), a.data("owidth", l.width), a.data("oheight", l.height), a.find(".slotholder").data("owidth", l.width), a.find(".slotholder").data("oheight", l.height);
                    else {
                        var d = o.data("ww"),
                            c = o.data("hh");
                        o.data("owidth", l.width), o.data("oheight", l.height), d = d == t || "auto" == d || "" == d ? l.width : d, c = c == t || "auto" == c || "" == c ? l.height : c, o.data("ww", d), o.data("hh", c)
                    }
                    o.data("loaded", !0)
                }
                if (l && l.progress && l.progress.match(/inprogress|inload|prepared/g) && (e.now() - o.data("start-to-load") < 5e3 ? r = !0 : console.error(s + "  Could not be loaded !")), 1 == n.youtubeapineeded && (!window.YT || YT.Player == t) && (r = !0, e.now() - n.youtubestarttime > 5e3 && 1 != n.youtubewarning)) {
                    n.youtubewarning = !0;
                    var u = "YouTube Api Could not be loaded !";
                    "https:" === location.protocol && (u += " Please Check and Renew SSL Certificate !"), console.error(u), n.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>' + u + "</strong></div>")
                }
                if (1 == n.vimeoapineeded && !window.Froogaloop && (r = !0, e.now() - n.vimeostarttime > 5e3 && 1 != n.vimeowarning)) {
                    n.vimeowarning = !0;
                    var u = "Vimeo Froogaloop Api Could not be loaded !";
                    "https:" === location.protocol && (u += " Please Check and Renew SSL Certificate !"), console.error(u), n.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>' + u + "</strong></div>")
                }
            }), r ? setTimeout(function() {
                S(a, n, o)
            }, 19) : o()
        },
        A = function(t, a) {
            if (clearTimeout(a.waitWithSwapSlide), t.find(".processing-revslide").length > 0) return a.waitWithSwapSlide = setTimeout(function() {
                A(t, a)
            }, 150), !1;
            var n = t.find(".active-revslide"),
                o = t.find(".next-revslide"),
                r = o.find(".defaultimg");
            return o.index() === n.index() ? (o.removeClass("next-revslide"), !1) : (o.removeClass("next-revslide").addClass("processing-revslide"), "on" == a.stopLoop && o.index() == a.lastslidetoshow - 1 && (t.find(".tp-bannertimer").css({
                visibility: "hidden"
            }), t.trigger("revolution.slide.onstop"), a.noloopanymore = 1), o.index() === a.slideamount - 1 && (a.looptogo = a.looptogo - 1, a.looptogo <= 0 && (a.stopLoop = "on")), a.tonpause = !0, t.trigger("stoptimer"), a.cd = 0, t.find(".tp-loader").css({
                display: "block"
            }), L(o, a, 1), void S(o, a, function() {
                o.find(".rs-background-video-layer").each(function() {
                    var t = e(this);
                    t.hasClass("HasListener") || (t.data("bgvideo", 1), i.manageVideoLayer(t, a)), t.append('<div class="rs-fullvideo-cover"></div>')
                }), z(a, r, t)
            }))
        },
        z = function(e, a, n) {
            var o = n.find(".active-revslide"),
                r = n.find(".processing-revslide"),
                s = o.find(".slotholder"),
                l = r.find(".slotholder");
            e.tonpause = !1, e.cd = 0, n.trigger("nulltimer"), n.find(".tp-loader").css({
                display: "none"
            }), i.setSize(e), i.slotSize(a, e), i.manageNavigation && i.manageNavigation(e);
            var d = {};
            d.nextslide = r, d.currentslide = o, n.trigger("revolution.slide.onbeforeswap", d), e.transition = 1, e.videoplaying = !1, r.data("delay") != t ? (e.cd = 0, e.delay = r.data("delay")) : e.delay = e.origcd;
            var c = o.index(),
                u = r.index();
            e.sdir = c > u ? 1 : 0, "arrow" == e.sc_indicator && (0 == c && u == e.slideamount - 1 && (e.sdir = 1), c == e.slideamount - 1 && 0 == u && (e.sdir = 0)), e.lsdir = e.lsdir === t ? e.sdir : e.lsdir, e.dirc = e.lsdir != e.sdir, e.lsdir = e.sdir, o.index() != r.index() && 1 != e.firststart && i.removeTheCaptions && i.removeTheCaptions(o, e), r.hasClass("rs-pause-timer-once") || r.hasClass("rs-pause-timer-always") ? e.videoplaying = !0 : n.trigger("restarttimer"), r.removeClass("rs-pause-timer-once");
            var p, h;
            if ("carousel" == e.sliderType) h = new punchgs.TimelineLite, i.prepareCarousel(e, h), H(n, e, l, s, r, o, h), e.transition = 0, e.firststart = 0;
            else {
                h = new punchgs.TimelineLite({
                    onComplete: function() {
                        H(n, e, l, s, r, o, h)
                    }
                }), h.add(punchgs.TweenLite.set(l.find(".defaultimg"), {
                    opacity: 0
                })), h.pause(), 1 == e.firststart && (punchgs.TweenLite.set(o, {
                    autoAlpha: 0
                }), e.firststart = 0), punchgs.TweenLite.set(o, {
                    zIndex: 18
                }), punchgs.TweenLite.set(r, {
                    autoAlpha: 0,
                    zIndex: 20
                }), "prepared" == r.data("differentissplayed") && (r.data("differentissplayed", "done"), r.data("transition", r.data("savedtransition")), r.data("slotamount", r.data("savedslotamount")), r.data("masterspeed", r.data("savedmasterspeed"))), r.data("fstransition") != t && "done" != r.data("differentissplayed") && (r.data("savedtransition", r.data("transition")), r.data("savedslotamount", r.data("slotamount")), r.data("savedmasterspeed", r.data("masterspeed")), r.data("transition", r.data("fstransition")), r.data("slotamount", r.data("fsslotamount")), r.data("masterspeed", r.data("fsmasterspeed")), r.data("differentissplayed", "prepared")), r.data("transition") == t && r.data("transition", "random"), p = 0;
                var f = r.data("transition") !== t ? r.data("transition").split(",") : "fade",
                    g = r.data("nexttransid") == t ? -1 : r.data("nexttransid");
                "on" == r.data("randomtransition") ? g = Math.round(Math.random() * f.length) : g += 1, g == f.length && (g = 0), r.data("nexttransid", g);
                var v = f[g];
                e.ie && ("boxfade" == v && (v = "boxslide"), "slotfade-vertical" == v && (v = "slotzoom-vertical"), "slotfade-horizontal" == v && (v = "slotzoom-horizontal")), i.isIE(8) && (v = 11), h = i.animateSlide(p, v, n, e, r, o, l, s, h), "on" == l.data("kenburns") && (i.startKenBurn(l, e), h.add(punchgs.TweenLite.set(l, {
                    autoAlpha: 0
                }))), h.pause()
            }
            "off" != e.parallax.type && e.parallax.firstgo == t && i.scrollHandling && (e.parallax.firstgo = !0, e.lastscrolltop = -999, i.scrollHandling(e), setTimeout(function() {
                e.lastscrolltop = -999, i.scrollHandling(e)
            }, 210), setTimeout(function() {
                e.lastscrolltop = -999, i.scrollHandling(e)
            }, 420)), i.animateTheCaptions ? i.animateTheCaptions(r, e, null, h) : h != t && setTimeout(function() {
                h.resume()
            }, 30), punchgs.TweenLite.to(r, .001, {
                autoAlpha: 1
            })
        },
        H = function(n, o, r, s, l, d, c) {
            "carousel" === o.sliderType || (o.removePrepare = 0, punchgs.TweenLite.to(r.find(".defaultimg"), .001, {
                zIndex: 20,
                autoAlpha: 1,
                onComplete: function() {
                    w(n, o, l, 1)
                }
            }), l.index() != d.index() && punchgs.TweenLite.to(d, .2, {
                zIndex: 18,
                autoAlpha: 0,
                onComplete: function() {
                    w(n, o, d, 1)
                }
            })), n.find(".active-revslide").removeClass("active-revslide"), n.find(".processing-revslide").removeClass("processing-revslide").addClass("active-revslide"), o.act = l.index(), ("scroll" == o.parallax.type || "scroll+mouse" == o.parallax.type || "mouse+scroll" == o.parallax.type) && (o.lastscrolltop = -999, i.scrollHandling(o)), c.clear(), s.data("kbtl") != t && (s.data("kbtl").reverse(), s.data("kbtl").timeScale(25)), "on" == r.data("kenburns") && (r.data("kbtl") != t ? (r.data("kbtl").timeScale(1), r.data("kbtl").play()) : i.startKenBurn(r, o)), l.find(".rs-background-video-layer").each(function() {
                if (a) return !1;
                var t = e(this);
                i.resetVideo(t, o), punchgs.TweenLite.fromTo(t, 1, {
                    autoAlpha: 0
                }, {
                    autoAlpha: 1,
                    ease: punchgs.Power3.easeInOut,
                    delay: .2,
                    onComplete: function() {
                        i.animcompleted && i.animcompleted(t, o)
                    }
                })
            }), d.find(".rs-background-video-layer").each(function() {
                if (a) return !1;
                var t = e(this);
                i.stopVideo && (i.resetVideo(t, o), i.stopVideo(t, o)), punchgs.TweenLite.to(t, 1, {
                    autoAlpha: 0,
                    ease: punchgs.Power3.easeInOut,
                    delay: .2
                })
            });
            var u = {};
            u.slideIndex = l.index() + 1, u.slideLIIndex = l.index(), u.slide = l, u.currentslide = l, u.prevslide = d, n.trigger("revolution.slide.onchange", u), n.trigger("revolution.slide.onafterswap", u)
        },
        O = function(t, i) {
            t.children().each(function() {
                try {
                    e(this).die("click")
                } catch (t) {}
                try {
                    e(this).die("mouseenter")
                } catch (t) {}
                try {
                    e(this).die("mouseleave")
                } catch (t) {}
                try {
                    e(this).unbind("hover")
                } catch (t) {}
            });
            try {
                t.die("click", "mouseenter", "mouseleave")
            } catch (a) {}
            clearInterval(i.cdint), t = null
        },
        P = function(n, o) {
            if (o.cd = 0, o.loop = 0, o.looptogo = o.stopAfterLoops != t && o.stopAfterLoops > -1 ? o.stopAfterLoops : 9999999, o.lastslidetoshow = o.stopAtSlide != t && o.stopAtSlide > -1 ? o.stopAtSlide : 999, o.stopLoop = "off", 0 == o.looptogo && (o.stopLoop = "on"), o.slideamount > 1 && (0 != o.stopAfterLoops || 1 != o.stopAtSlide)) {
                var r = n.find(".tp-bannertimer");
                n.on("stoptimer", function() {
                    var t = e(this).find(".tp-bannertimer");
                    t.data("tween").pause(), "on" == o.disableProgressBar && t.css({
                        visibility: "hidden"
                    }), o.sliderstatus = "paused"
                }), n.on("starttimer", function() {
                    1 != o.conthover && 1 != o.videoplaying && o.width > o.hideSliderAtLimit && 1 != o.tonpause && 1 != o.overnav && (1 === o.noloopanymore || o.viewPort.enable && !o.inviewport || (r.css({
                        visibility: "visible"
                    }), r.data("tween").resume(), o.sliderstatus = "playing")), "on" == o.disableProgressBar && r.css({
                        visibility: "hidden"
                    })
                }), n.on("restarttimer", function() {
                    var t = e(this).find(".tp-bannertimer");
                    return o.mouseoncontainer && "on" == o.navigation.onHoverStop && !a ? !1 : (1 === o.noloopanymore || o.viewPort.enable && !o.inviewport || (t.css({
                        visibility: "visible"
                    }), t.data("tween").kill(), t.data("tween", punchgs.TweenLite.fromTo(t, o.delay / 1e3, {
                        width: "0%"
                    }, {
                        force3D: "auto",
                        width: "100%",
                        ease: punchgs.Linear.easeNone,
                        onComplete: s,
                        delay: 1
                    })), o.sliderstatus = "playing"), void("on" == o.disableProgressBar && t.css({
                        visibility: "hidden"
                    })))
                }), n.on("nulltimer", function() {
                    r.data("tween").pause(0), "on" == o.disableProgressBar && r.css({
                        visibility: "hidden"
                    }), o.sliderstatus = "paused"
                });
                var s = function() {
                    0 == e("body").find(n).length && (O(n, o), clearInterval(o.cdint)), n.trigger("revolution.slide.slideatend"), 1 == n.data("conthover-changed") && (o.conthover = n.data("conthover"), n.data("conthover-changed", 0)), i.callingNewSlide(o, n, 1)
                };
                r.data("tween", punchgs.TweenLite.fromTo(r, o.delay / 1e3, {
                    width: "0%"
                }, {
                    force3D: "auto",
                    width: "100%",
                    ease: punchgs.Linear.easeNone,
                    onComplete: s,
                    delay: 1
                })), r.data("opt", o), n.trigger("starttimer"), n.on("tp-mouseenter", function() {
                    o.mouseoncontainer = !0, "on" != o.navigation.onHoverStop || a || (n.trigger("stoptimer"), n.trigger("revolution.slide.onpause"))
                }), n.on("tp-mouseleft", function() {
                    o.mouseoncontainer = !1, 1 != n.data("conthover") && "on" == o.navigation.onHoverStop && (1 == o.viewPort.enable && o.inviewport || 0 == o.viewPort.enable) && (n.trigger("revolution.slide.onresume"), n.trigger("starttimer"))
                })
            }
        },
        I = (function() {
            var e, t, i = {
                hidden: "visibilitychange",
                webkitHidden: "webkitvisibilitychange",
                mozHidden: "mozvisibilitychange",
                msHidden: "msvisibilitychange"
            };
            for (e in i)
                if (e in document) {
                    t = i[e];
                    break
                }
            return function(i) {
                return i && document.addEventListener(t, i), !document[e]
            }
        }(), function(e) {
            return e == t || e.c == t ? !1 : void(1 != e.windowfocused && (e.windowfocused = !0, punchgs.TweenLite.delayedCall(.3, function() {
                "on" == e.fallbacks.nextSlideOnWindowFocus && e.c.revnext(), e.c.revredraw(), "playing" == e.lastsliderstatus && e.c.revresume()
            })))
        }),
        F = function(e) {
            e.windowfocused = !1, e.lastsliderstatus = e.sliderstatus, e.c.revpause();
            var t = e.c.find(".active-revslide .slotholder"),
                a = e.c.find(".processing-revslide .slotholder");
            "on" == a.data("kenburns") && i.stopKenBurn(a, e), "on" == t.data("kenburns") && i.stopKenBurn(t, e)
        },
        j = function(i, a) {
            var n = document.documentMode === t,
                o = window.chrome;
            n && !o ? e(window).on("focusin", function() {
                I(a)
            }).on("focusout", function() {
                F(a)
            }) : window.addEventListener ? (window.addEventListener("focus", function() {
                I(a)
            }, !1), window.addEventListener("blur", function() {
                F(a)
            }, !1)) : (window.attachEvent("focus", function() {
                I(a)
            }), window.attachEvent("blur", function() {
                F(a)
            }))
        },
        M = function(e) {
            for (var t, i = [], a = window.location.href.slice(window.location.href.indexOf(e) + 1).split("_"), n = 0; n < a.length; n++) a[n] = a[n].replace("%3D", "="), t = a[n].split("="), i.push(t[0]), i[t[0]] = t[1];
            return i
        }
}(jQuery);
var fwForm = {
    initAjaxSubmit: function(opts) {
        var opts = jQuery.extend({
                selector: 'form[data-fw-form-id]',
                ajaxUrl: (typeof ajaxurl != 'undefined') ? ajaxurl : ((typeof fwAjaxUrl != 'undefined') ? fwAjaxUrl : '/wp-admin/admin-ajax.php'),
                loading: function(elements, show) {
                    elements.$form.css('position', 'relative');
                    elements.$form.find('> .fw-form-loading').remove();
                    if (show) {
                        elements.$form.append('<div' + ' class="fw-form-loading"' + ' style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(255, 255, 255, 0.8);"' + '><span class="spinner" style="position: absolute; top: 40%; left: 49%;"></span></div>');
                    }
                },
                onErrors: function(elements, data) {
                    if (isAdmin) {
                        fwForm.backend.showFlashMessages(fwForm.backend.renderFlashMessages({
                            error: data.errors
                        }));
                    } else {
                        jQuery.each(data.errors, function(inputName, message) {
                            var $input = elements.$form.find('[name="' + inputName + '"]').last();
                            message = '<p class="form-error" style="color: #9b2922;">{message}</p>'.replace('{message}', message);
                            if ($input.length) {
                                $input.parent().after(message);
                            } else {
                                elements.$form.prepend(message);
                            }
                        });
                    }
                },
                hideErrors: function(elements) {
                    elements.$form.find('.form-error').remove();
                },
                onAjaxError: function(elements, data) {
                    console.error(data.jqXHR, data.textStatus, data.errorThrown);
                    alert('Ajax error (more details in console)');
                },
                onSuccess: function(elements, ajaxData) {
                    if (isAdmin) {
                        fwForm.backend.showFlashMessages(fwForm.backend.renderFlashMessages(ajaxData.flash_messages));
                    } else {
                        var html = fwForm.frontend.renderFlashMessages(ajaxData.flash_messages);
                        if (!html.length) {
                            html = '<p>Success</p>';
                        }
                        elements.$form.fadeOut(function() {
                            elements.$form.html(html).fadeIn();
                        });
                        elements.$form.on('submit', function(e) {
                            e.preventDefault();
                            e.stopPropagation();
                        });
                    }
                }
            }, opts || {}),
            isAdmin = (typeof adminpage != 'undefined' && jQuery(document.body).hasClass('wp-admin')),
            isBusy = false;
        jQuery(document.body).on('submit', opts.selector, function(e) {
            e.preventDefault();
            if (isBusy) {
                console.warn('Working... Try again later.');
                return;
            }
            var $form = jQuery(this);
            if (!$form.is('form[data-fw-form-id]')) {
                console.error('This is not a FW_Form', 'Selector:'.opts.selector, 'Form:', $form);
                return;
            } {
                var $submitButton = $form.find(':submit:focus');
                if (!$submitButton.length) {
                    $submitButton = $form.find('[clicked]:submit');
                }
                $form.find('[clicked]:submit').removeAttr('clicked');
            }
            var elements = {
                $form: $form,
                $submitButton: $submitButton
            };
            opts.hideErrors(elements);
            opts.loading(elements, true);
            isBusy = true;
            jQuery.ajax({
                type: "POST",
                url: opts.ajaxUrl,
                data: $form.serialize() + ($submitButton.length ? '&' + $submitButton.attr('name') + '=' + $submitButton.attr('value') : ''),
                dataType: 'json'
            }).done(function(r) {
                isBusy = false;
                opts.loading(elements, false);
                if (r.success) {
                    opts.onSuccess(elements, r.data);
                } else {
                    opts.onErrors(elements, r.data);
                }
            }).fail(function(jqXHR, textStatus, errorThrown) {
                isBusy = false;
                opts.loading(elements, false);
                opts.onAjaxError(elements, {
                    jqXHR: jqXHR,
                    textStatus: textStatus,
                    errorThrown: errorThrown
                });
            });
        });
    },
    backend: {
        showFlashMessages: function(messagesHtml) {
            var $pageTitle = jQuery('.wrap h2:first');
            while ($pageTitle.next().is('.fw-flash-messages, .fw-flash-message, .updated, .update-nag, .error')) {
                $pageTitle.next().remove();
            }
            $pageTitle.after('<div class="fw-flash-messages">' + messagesHtml + '</div>');
            jQuery(document.body).animate({
                scrollTop: 0
            }, 300);
        },
        renderFlashMessages: function(flashMessages) {
            var html = [],
                typeHtml = [],
                messageClass = '';
            jQuery.each(flashMessages, function(type, messages) {
                typeHtml = [];
                switch (type) {
                    case 'error':
                        messageClass = 'error';
                        break;
                    case 'warning':
                        messageClass = 'update-nag';
                        break;
                    default:
                        messageClass = 'updated';
                }
                jQuery.each(messages, function(messageId, message) {
                    typeHtml.push('<div class="' + messageClass + ' fw-flash-message"><p>' + message + '</p></div>');
                });
                if (typeHtml.length) {
                    html.push('<div class="fw-flash-type-' + type + '">' + typeHtml.join('</div><div class="fw-flash-type-' + type + '">') + '</div>');
                }
            });
            return html.join('');
        }
    },
    frontend: {
        renderFlashMessages: function(flashMessages) {
            var html = [],
                typeHtml = [],
                messageClass = '';
            jQuery.each(flashMessages, function(type, messages) {
                typeHtml = [];
                jQuery.each(messages, function(messageId, message) {
                    typeHtml.push('<li class="fw-flash-message">' + message + '</li>');
                });
                if (typeHtml.length) {
                    html.push('<ul class="fw-flash-type-' + type + '">' + typeHtml.join('</ul><ul class="fw-flash-type-' + type + '">') + '</ul>');
                }
            });
            return html.join('');
        }
    }
};
if (false) {
    jQuery(function($) {
        fwForm.initAjaxSubmit({
            selector: 'form[data-fw-form-id][data-fw-ext-forms-type="contact-forms"]',
            ajaxUrl: ajaxurl
        });
    });
};
(function($, window, document, undefined) {
    function animo(element, options, callback, other_cb) {
        var defaults = {
            duration: 1,
            animation: null,
            iterate: 1,
            delay: 0,
            timing: "linear",
            keep: false
        };
        this.prefixes = ["", "-moz-", "-o-animation-", "-webkit-"];
        this.element = $(element);
        this.bare = element;
        this.queue = [];
        this.listening = false;
        var cb = (typeof callback == "function" ? callback : other_cb);
        switch (options) {
            case "blur":
                defaults = {
                    amount: 3,
                    duration: 0.5,
                    focusAfter: null
                };
                this.options = $.extend(defaults, callback);
                this._blur(cb);
                break;
            case "focus":
                this._focus();
                break;
            case "rotate":
                defaults = {
                    degrees: 15,
                    duration: 0.5
                };
                this.options = $.extend(defaults, callback);
                this._rotate(cb);
                break;
            case "cleanse":
                this.cleanse();
                break;
            default:
                this.options = $.extend(defaults, options);
                this.init(cb);
                break
        }
    }
    animo.prototype = {
        init: function(callback) {
            var $me = this;
            if (Object.prototype.toString.call($me.options.animation) === "[object Array]") {
                $.merge($me.queue, $me.options.animation)
            } else {
                $me.queue.push($me.options.animation)
            }
            $me.cleanse();
            $me.animate(callback)
        },
        animate: function(callback) {
            this.element.addClass("animated");
            this.element.addClass(this.queue[0]);
            this.element.data("animo", this.queue[0]);
            var ai = this.prefixes.length;
            while (ai--) {
                this.element.css(this.prefixes[ai] + "animation-duration", this.options.duration + "s");
                this.element.css(this.prefixes[ai] + "animation-delay", this.options.delay + "s");
                this.element.css(this.prefixes[ai] + "animation-iteration-count", this.options.iterate);
                this.element.css(this.prefixes[ai] + "animation-timing-function", this.options.timing)
            }
            var $me = this,
                _cb = callback;
            if ($me.queue.length > 1) {
                _cb = null
            }
            this._end("AnimationEnd", function() {
                if ($me.element.hasClass($me.queue[0])) {
                    if (!$me.options.keep) {
                        $me.cleanse()
                    }
                    $me.queue.shift();
                    if ($me.queue.length) {
                        $me.animate(callback)
                    }
                }
            }, _cb)
        },
        cleanse: function() {
            this.element.removeClass("animated");
            this.element.removeClass(this.queue[0]);
            this.element.removeClass(this.element.data("animo"));
            var ai = this.prefixes.length;
            while (ai--) {
                this.element.css(this.prefixes[ai] + "animation-duration", "");
                this.element.css(this.prefixes[ai] + "animation-delay", "");
                this.element.css(this.prefixes[ai] + "animation-iteration-count", "");
                this.element.css(this.prefixes[ai] + "animation-timing-function", "");
                this.element.css(this.prefixes[ai] + "transition", "");
                this.element.css(this.prefixes[ai] + "transform", "");
                this.element.css(this.prefixes[ai] + "filter", "")
            }
        },
        _blur: function(callback) {
            if (this.element.is("img")) {
                var svg_id = "svg_" + (((1 + Math.random()) * 16777216) | 0).toString(16).substring(1);
                var filter_id = "filter_" + (((1 + Math.random()) * 16777216) | 0).toString(16).substring(1);
                $("body").append('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" id="' + svg_id + '" style="height:0;position:absolute;top:-1000px;"><filter id="' + filter_id + '"><feGaussianBlur stdDeviation="' + this.options.amount + '" /></filter></svg>');
                var ai = this.prefixes.length;
                while (ai--) {
                    this.element.css(this.prefixes[ai] + "filter", "blur(" + this.options.amount + "px)");
                    this.element.css(this.prefixes[ai] + "transition", this.options.duration + "s all linear")
                }
                this.element.css("filter", "url(#" + filter_id + ")");
                this.element.data("svgid", svg_id)
            } else {
                var color = this.element.css("color");
                var ai = this.prefixes.length;
                while (ai--) {
                    this.element.css(this.prefixes[ai] + "transition", "all " + this.options.duration + "s linear")
                }
                this.element.css("text-shadow", "0 0 " + this.options.amount + "px " + color);
                this.element.css("color", "transparent")
            }
            this._end("TransitionEnd", null, callback);
            var $me = this;
            if (this.options.focusAfter) {
                var focus_wait = window.setTimeout(function() {
                    $me._focus();
                    focus_wait = window.clearTimeout(focus_wait)
                }, (this.options.focusAfter * 1000))
            }
        },
        _focus: function() {
            var ai = this.prefixes.length;
            if (this.element.is("img")) {
                while (ai--) {
                    this.element.css(this.prefixes[ai] + "filter", "");
                    this.element.css(this.prefixes[ai] + "transition", "")
                }
                var $svg = $("#" + this.element.data("svgid"));
                $svg.remove()
            } else {
                while (ai--) {
                    this.element.css(this.prefixes[ai] + "transition", "")
                }
                this.element.css("text-shadow", "");
                this.element.css("color", "")
            }
        },
        _rotate: function(callback) {
            var ai = this.prefixes.length;
            while (ai--) {
                this.element.css(this.prefixes[ai] + "transition", "all " + this.options.duration + "s linear");
                this.element.css(this.prefixes[ai] + "transform", "rotate(" + this.options.degrees + "deg)")
            }
            this._end("TransitionEnd", null, callback)
        },
        _end: function(type, todo, callback) {
            var $me = this;
            var binding = type.toLowerCase() + " webkit" + type + " o" + type + " MS" + type;
            this.element.bind(binding, function() {
                $me.element.unbind(binding);
                if (typeof todo == "function") {
                    todo()
                }
                if (typeof callback == "function") {
                    callback($me)
                }
            })
        }
    };
    $.fn.animo = function(options, callback, other_cb) {
        return this.each(function() {
            new animo(this, options, callback, other_cb)
        })
    }
})(jQuery, window, document);
(function(b, c) {
    var $ = b.jQuery || b.Cowboy || (b.Cowboy = {}),
        a;
    $.throttle = a = function(e, f, j, i) {
        var h, d = 0;
        if (typeof f !== "boolean") {
            i = j;
            j = f;
            f = c
        }

        function g() {
            var o = this,
                m = +new Date() - d,
                n = arguments;

            function l() {
                d = +new Date();
                j.apply(o, n)
            }

            function k() {
                h = c
            }
            if (i && !h) {
                l()
            }
            h && clearTimeout(h);
            if (i === c && m > e) {
                l()
            } else {
                if (f !== true) {
                    h = setTimeout(i ? k : l, i === c ? e - m : e)
                }
            }
        }
        if ($.guid) {
            g.guid = j.guid = j.guid || $.guid++
        }
        return g
    };
    $.debounce = function(d, e, f) {
        return f === c ? a(d, e, false) : a(d, f, e !== false)
    }
})(this);
(function($) {
    $.fn.edsViewportChecker = function(useroptions) {
        var options = {
            classToRemove: 'eds-scroll-hidden',
            classToAdd: 'eds-scroll-visible',
            offset: 75,
            callbackFunction: function(elem) {}
        };
        $.extend(options, useroptions);
        var $elem = this;
        this.checkElements = function() {
            var windowHeight = $(window).height(),
                viewportTop = $(document).scrollTop(),
                viewportBottom = (viewportTop + windowHeight);
            $elem.each(function() {
                var $obj = $(this);
                var scroll_offset = $obj.attr('eds_scroll_offset');
                if ($obj.hasClass(options.classToAdd)) {
                    return;
                }
                var elemTop = '';
                if (scroll_offset != null && scroll_offset != '') {
                    elemTop = Math.round($obj.offset().top) + Math.round(Number(scroll_offset) * $obj.height() * 0.01), elemBottom = elemTop + ($obj.height());
                } else {
                    elemTop = Math.round($obj.offset().top) + Math.round(options.offset * $obj.height() * 0.01), elemBottom = elemTop + ($obj.height());
                }
                if ((elemTop < viewportBottom) && (elemBottom > viewportTop)) {
                    $obj.addClass(options.classToAdd);
                    $obj.removeClass(options.classToRemove);
                    options.callbackFunction($obj);
                }
            });
        };
        $(window).on("scroll", $.throttle(250, this.checkElements));
        this.checkElements();
    };
})(jQuery);
(function($) {
    $(document).ready(function() {
        var animationStyleClasses = ["animated", "infinite", "bounce", "flash", "pulse", "rubberBand", "shake", "swing", "tada", "wobble", "bounceIn", "bounceInDown", "bounceInLeft", "bounceInRight", "bounceInUp", "bounceOut", "bounceOutDown", "bounceOutLeft", "bounceOutRight", "bounceOutUp", "fadeIn", "fadeInDown", "fadeInDownBig", "fadeInLeft", "fadeInLeftBig", "fadeInRight", "fadeInRightBig", "fadeInUp", "fadeInUpBig", "fadeOut", "fadeOutDown", "fadeOutDownBig", "fadeOutLeft", "fadeOutLeftBig", "fadeOutRight", "fadeOutRightBig", "fadeOutUp", "fadeOutUpBig", "flip", "flipInX", "flipInY", "flipOutX", "flipOutY", "lightSpeedIn", "lightSpeedOut", "rotateIn", "rotateInDownLeft", "rotateInDownRight", "rotateInUpLeft", "rotateInUpRight", "rotateOut", "rotateOutDownLeft", "rotateOutDownRight", "rotateOutUpLeft", "rotateOutUpRight", "hinge", "rollIn", "rollOut", "zoomIn", "zoomInDown", "zoomInLeft", "zoomInRight", "zoomInUp", "zoomOut", "zoomOutDown", "zoomOutLeft", "zoomOutRight", "zoomOutUp", "wiggle", "fade", "appear", "spinner", "twirlIn", "twirlOut", "grow", "shrink", "pulseGrow", "pulseShrink", "push", "pop", "rotate", "growRotate", "float", "sink", "skew", "skewForward", "skewBackward", "wobbleHorizontal", "wobbleVertical", "wobbleToBottomRight", "wobbleToTopRight", "wobbleTop", "wobbleBottom", "wobbleSkew", "buzz", "buzzOut", "forward", "backward"];
        var delayClasses = ["delay1", "delay2", "delay3", "delay4", "delay5", "delay6", "delay7", "delay8", "delay9", "delay10", "delay11", "delay12"];
        var durationClasses = ["duration1", "duration2", "duration3", "duration4", "duration5", "duration6", "duration7", "duration8", "duration9", "duration10", "duration11", "duration12", "duration13", "duration14", "duration15", "duration16", "duration17", "duration18", "duration19", "duration20"];
        var scrollOffset = edsanimate_options.offset;
        $('.eds-animation-paused').removeClass('eds-animation-paused');
        $('.eds-on-scroll').each(function() {
            var $module = $(this);
            var classesToAdd = " eds-scroll-visible ";
            $module.removeClass(function(index, className) {
                var removeClassList = "";
                var classList = className.trim().split(/\s+/);
                $.each(classList, function(index, value) {
                    if (($.inArray(value, animationStyleClasses) !== -1) || ($.inArray(value, delayClasses) !== -1) || ($.inArray(value, durationClasses) !== -1)) removeClassList += " " + value;
                });
                classesToAdd += removeClassList;
                return removeClassList;
            });
            $module.addClass("eds-scroll-hidden");
            $module.edsViewportChecker({
                classToAdd: classesToAdd,
                offset: scrollOffset
            });
        });
        $('.eds-on-click').each(function() {
            var $module = $(this);
            var classesToAdd = " ";
            $module.removeClass(function(index, className) {
                var removeClassList = "";
                var classList = className.trim().split(/\s+/);
                $.each(classList, function(index, value) {
                    if (($.inArray(value, animationStyleClasses) !== -1) || ($.inArray(value, delayClasses) !== -1) || ($.inArray(value, durationClasses) !== -1)) removeClassList += " " + value;
                });
                classesToAdd += removeClassList;
                return removeClassList;
            });
            $module.click(function() {
                $(this).removeClass(classesToAdd).addClass(classesToAdd).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                    $(this).removeClass(classesToAdd);
                });
            });
        });
        $('.eds-on-hover').each(function() {
            var $module = $(this);
            var classesToAdd = " ";
            $module.removeClass(function(index, className) {
                var removeClassList = "";
                var classList = className.trim().split(/\s+/);
                $.each(classList, function(index, value) {
                    if (($.inArray(value, animationStyleClasses) !== -1) || ($.inArray(value, delayClasses) !== -1) || ($.inArray(value, durationClasses) !== -1)) removeClassList += " " + value;
                });
                classesToAdd += removeClassList;
                return removeClassList;
            });
            var hovered = false;
            $module.hover(function() {
                hovered = true;
                $(this).removeClass(classesToAdd).addClass(classesToAdd).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                    $(this).removeClass(classesToAdd);
                });
            }, function() {
                hovered = false;
                $(this).on('webkitAnimationIteration oanimationiteration msAnimationiteration animationiteration', function(e) {
                    if (!hovered) {
                        $(this).removeClass(classesToAdd);
                    }
                });
            });
        });
    });
})(jQuery);
(function($, document, window) {
    var edsWObj = $(window);
    $.fn.initEDSAnimateBlock = function() {
        var obj = this.length > 1 ? this.eq(0) : this;
        this.edsTotalRepeatCount = 1;
        this.edsAnimateInfinite = false;
        this.edsAnimations = [];
        this.edsKeepValue = false;
        this.edsScrollOffset = 0;
        this.edsElemAnimating = false;
        this.checkPosition = function() {
            var windowHeight = edsWObj.height(),
                viewportTop = $(document).scrollTop(),
                viewportBottom = (viewportTop + windowHeight),
                elemTop = '';
            if (obj.edsScrollOffset != null && obj.edsScrollOffset != '') {
                elemTop = Math.round(obj.offset().top) + Math.round(Number(obj.edsScrollOffset) * obj.height() * 0.01), elemBottom = elemTop + (obj.height());
            } else {
                elemTop = Math.round(obj.offset().top) + Math.round(options.offset * obj.height() * 0.01), elemBottom = elemTop + (obj.height());
            }
            if ((elemTop < viewportBottom) && (elemBottom > viewportTop)) {
                obj.edsInit();
            }
        }
        this.edsAnimate = function(counter, iteration) {
            obj.removeClass('edsanimate-sis-hidden');
            obj.animo(obj.edsAnimations[counter].animoSettings, function() {
                counter++
                if (counter < obj.edsAnimations.length) {
                    setTimeout(function() {
                        obj.edsAnimate(counter, iteration)
                    }, Number(obj.edsAnimations[counter].delay) * 1000);
                } else {
                    iteration++;
                    if (true == obj.edsAnimateInfinite || iteration < obj.edsTotalRepeatCount) {
                        if (obj.edsAnimations.length == 1) {
                            obj.animo("cleanse");
                        }
                        setTimeout(function() {
                            obj.edsAnimate(0, iteration)
                        }, Number(obj.edsAnimations[0].delay) * 1000);
                    } else {
                        obj.edsElemAnimating = false;
                    }
                }
            });
        };
        this.edsInit = function() {
            if (obj.edsAnimations.length >= 1) {
                setTimeout(function() {
                    obj.edsAnimate(0, 0)
                }, Number(obj.edsAnimations[0].delay) * 1000);
            }
        }
        if ("yes" == this.data('edsKeep')) {
            this.edsKeepValue = true;
        }
        if ('' != this.data('edsEntryAnimation')) {
            this.edsAnimations.push({
                animoSettings: {
                    animation: this.data('edsEntryAnimation'),
                    duration: this.data('edsEntryDuration'),
                    iterate: 1,
                    timing: this.data('edsEntryTiming'),
                    keep: this.edsKeepValue
                },
                delay: this.data('edsEntryDelay')
            });
        }
        if ('' != this.data('edsExitAnimation')) {
            this.edsAnimations.push({
                animoSettings: {
                    animation: this.data('edsExitAnimation'),
                    duration: this.data('edsExitDuration'),
                    iterate: 1,
                    timing: this.data('edsExitTiming'),
                    keep: this.edsKeepValue
                },
                delay: this.data('edsExitDelay'),
            });
        }
        if ("infinite" == this.data('edsRepeatCount')) {
            this.edsAnimateInfinite = true;
        } else {
            this.edsAnimateInfinite = false;
            this.edsTotalRepeatCount = this.data('edsRepeatCount');
        }
        if ("load" == this.data('edsAnimateOn')) {
            this.edsInit();
        } else if ("scroll" == this.data('edsAnimateOn')) {
            this.edsScrollOffset = this.data('edsScrollOffset');
            edsWObj.on("scroll", $.throttle(250, this.checkPosition));
            this.checkPosition();
        } else if ("hover" == this.data('edsAnimateOn')) {
            this.on("mouseenter", function() {
                if (!obj.edsElemAnimating) {
                    obj.animo("cleanse");
                    obj.edsElemAnimating = true;
                    obj.edsInit();
                }
            });
        } else if ("click" == this.data('edsAnimateOn')) {
            this.on("click", function() {
                if (!obj.edsElemAnimating) {
                    obj.animo("cleanse");
                    obj.edsElemAnimating = true;
                    obj.edsInit();
                }
            });
        }
    };
    $(document).ready(function() {
        if (typeof edsanimate_options !== 'undefined') {
            if ($('.eds-animate').length >= 1) {
                ('1' == edsanimate_options.hide_hz_scrollbar) ? $('body').css('overflow-x', 'hidden'): '';
                ('1' == edsanimate_options.hide_vl_scrollbar) ? $('body').css('overflow-y', 'hidden'): '';
            }
        }
        $('.eds-animation-paused').removeClass('eds-animation-paused');
        $('.eds-animate').each(function() {
            $(this).initEDSAnimateBlock();
        });
    });
})(jQuery, document, window);
(function() {
    "use strict";

    function a() {}

    function b(a, b) {
        for (var c = a.length; c--;)
            if (a[c].listener === b) return c;
        return -1
    }

    function c(a) {
        return function() {
            return this[a].apply(this, arguments)
        }
    }
    var d = a.prototype,
        e = this,
        f = e.EventEmitter;
    d.getListeners = function(a) {
        var b, c, d = this._getEvents();
        if ("object" == typeof a) {
            b = {};
            for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
        } else b = d[a] || (d[a] = []);
        return b
    }, d.flattenListeners = function(a) {
        var b, c = [];
        for (b = 0; b < a.length; b += 1) c.push(a[b].listener);
        return c
    }, d.getListenersAsObject = function(a) {
        var b, c = this.getListeners(a);
        return c instanceof Array && (b = {}, b[a] = c), b || c
    }, d.addListener = function(a, c) {
        var d, e = this.getListenersAsObject(a),
            f = "object" == typeof c;
        for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {
            listener: c,
            once: !1
        });
        return this
    }, d.on = c("addListener"), d.addOnceListener = function(a, b) {
        return this.addListener(a, {
            listener: b,
            once: !0
        })
    }, d.once = c("addOnceListener"), d.defineEvent = function(a) {
        return this.getListeners(a), this
    }, d.defineEvents = function(a) {
        for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]);
        return this
    }, d.removeListener = function(a, c) {
        var d, e, f = this.getListenersAsObject(a);
        for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
        return this
    }, d.off = c("removeListener"), d.addListeners = function(a, b) {
        return this.manipulateListeners(!1, a, b)
    }, d.removeListeners = function(a, b) {
        return this.manipulateListeners(!0, a, b)
    }, d.manipulateListeners = function(a, b, c) {
        var d, e, f = a ? this.removeListener : this.addListener,
            g = a ? this.removeListeners : this.addListeners;
        if ("object" != typeof b || b instanceof RegExp)
            for (d = c.length; d--;) f.call(this, b, c[d]);
        else
            for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
        return this
    }, d.removeEvent = function(a) {
        var b, c = typeof a,
            d = this._getEvents();
        if ("string" === c) delete d[a];
        else if ("object" === c)
            for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
        else delete this._events;
        return this
    }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function(a, b) {
        var c, d, e, f, g = this.getListenersAsObject(a);
        for (e in g)
            if (g.hasOwnProperty(e))
                for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
        return this
    }, d.trigger = c("emitEvent"), d.emit = function(a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(a, b)
    }, d.setOnceReturnValue = function(a) {
        return this._onceReturnValue = a, this
    }, d._getOnceReturnValue = function() {
        return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
    }, d._getEvents = function() {
        return this._events || (this._events = {})
    }, a.noConflict = function() {
        return e.EventEmitter = f, a
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return a
    }) : "object" == typeof module && module.exports ? module.exports = a : this.EventEmitter = a
}).call(this),
    function(a) {
        function b(b) {
            var c = a.event;
            return c.target = c.target || c.srcElement || b, c
        }
        var c = document.documentElement,
            d = function() {};
        c.addEventListener ? d = function(a, b, c) {
            a.addEventListener(b, c, !1)
        } : c.attachEvent && (d = function(a, c, d) {
            a[c + d] = d.handleEvent ? function() {
                var c = b(a);
                d.handleEvent.call(d, c)
            } : function() {
                var c = b(a);
                d.call(a, c)
            }, a.attachEvent("on" + c, a[c + d])
        });
        var e = function() {};
        c.removeEventListener ? e = function(a, b, c) {
            a.removeEventListener(b, c, !1)
        } : c.detachEvent && (e = function(a, b, c) {
            a.detachEvent("on" + b, a[b + c]);
            try {
                delete a[b + c]
            } catch (d) {
                a[b + c] = void 0
            }
        });
        var f = {
            bind: d,
            unbind: e
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", f) : a.eventie = f
    }(this),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(c, d) {
            return b(a, c, d)
        }) : "object" == typeof module && module.exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("eventie")) : a.imagesLoaded = b(a, a.EventEmitter, a.eventie)
    }(window, function(a, b, c) {
        function d(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }

        function e(a) {
            return "[object Array]" == l.call(a)
        }

        function f(a) {
            var b = [];
            if (e(a)) b = a;
            else if ("number" == typeof a.length)
                for (var c = 0; c < a.length; c++) b.push(a[c]);
            else b.push(a);
            return b
        }

        function g(a, b, c) {
            if (!(this instanceof g)) return new g(a, b, c);
            "string" == typeof a && (a = document.querySelectorAll(a)), this.elements = f(a), this.options = d({}, this.options), "function" == typeof b ? c = b : d(this.options, b), c && this.on("always", c), this.getImages(), j && (this.jqDeferred = new j.Deferred);
            var e = this;
            setTimeout(function() {
                e.check()
            })
        }

        function h(a) {
            this.img = a
        }

        function i(a, b) {
            this.url = a, this.element = b, this.img = new Image
        }
        var j = a.jQuery,
            k = a.console,
            l = Object.prototype.toString;
        g.prototype = new b, g.prototype.options = {}, g.prototype.getImages = function() {
            this.images = [];
            for (var a = 0; a < this.elements.length; a++) {
                var b = this.elements[a];
                this.addElementImages(b)
            }
        }, g.prototype.addElementImages = function(a) {
            "IMG" == a.nodeName && this.addImage(a), this.options.background === !0 && this.addElementBackgroundImages(a);
            var b = a.nodeType;
            if (b && m[b]) {
                for (var c = a.querySelectorAll("img"), d = 0; d < c.length; d++) {
                    var e = c[d];
                    this.addImage(e)
                }
                if ("string" == typeof this.options.background) {
                    var f = a.querySelectorAll(this.options.background);
                    for (d = 0; d < f.length; d++) {
                        var g = f[d];
                        this.addElementBackgroundImages(g)
                    }
                }
            }
        };
        var m = {
            1: !0,
            9: !0,
            11: !0
        };
        g.prototype.addElementBackgroundImages = function(a) {
            for (var b = n(a), c = /url\(['"]*([^'"\)]+)['"]*\)/gi, d = c.exec(b.backgroundImage); null !== d;) {
                var e = d && d[1];
                e && this.addBackground(e, a), d = c.exec(b.backgroundImage)
            }
        };
        var n = a.getComputedStyle || function(a) {
            return a.currentStyle
        };
        return g.prototype.addImage = function(a) {
            var b = new h(a);
            this.images.push(b)
        }, g.prototype.addBackground = function(a, b) {
            var c = new i(a, b);
            this.images.push(c)
        }, g.prototype.check = function() {
            function a(a, c, d) {
                setTimeout(function() {
                    b.progress(a, c, d)
                })
            }
            var b = this;
            if (this.progressedCount = 0, this.hasAnyBroken = !1, !this.images.length) return void this.complete();
            for (var c = 0; c < this.images.length; c++) {
                var d = this.images[c];
                d.once("progress", a), d.check()
            }
        }, g.prototype.progress = function(a, b, c) {
            this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !a.isLoaded, this.emit("progress", this, a, b), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, a), this.progressedCount == this.images.length && this.complete(), this.options.debug && k && k.log("progress: " + c, a, b)
        }, g.prototype.complete = function() {
            var a = this.hasAnyBroken ? "fail" : "done";
            if (this.isComplete = !0, this.emit(a, this), this.emit("always", this), this.jqDeferred) {
                var b = this.hasAnyBroken ? "reject" : "resolve";
                this.jqDeferred[b](this)
            }
        }, h.prototype = new b, h.prototype.check = function() {
            var a = this.getIsImageComplete();
            return a ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, c.bind(this.proxyImage, "load", this), c.bind(this.proxyImage, "error", this), c.bind(this.img, "load", this), c.bind(this.img, "error", this), void(this.proxyImage.src = this.img.src))
        }, h.prototype.getIsImageComplete = function() {
            return this.img.complete && void 0 !== this.img.naturalWidth
        }, h.prototype.confirm = function(a, b) {
            this.isLoaded = a, this.emit("progress", this, this.img, b)
        }, h.prototype.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, h.prototype.onload = function() {
            this.confirm(!0, "onload"), this.unbindEvents()
        }, h.prototype.onerror = function() {
            this.confirm(!1, "onerror"), this.unbindEvents()
        }, h.prototype.unbindEvents = function() {
            c.unbind(this.proxyImage, "load", this), c.unbind(this.proxyImage, "error", this), c.unbind(this.img, "load", this), c.unbind(this.img, "error", this)
        }, i.prototype = new h, i.prototype.check = function() {
            c.bind(this.img, "load", this), c.bind(this.img, "error", this), this.img.src = this.url;
            var a = this.getIsImageComplete();
            a && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
        }, i.prototype.unbindEvents = function() {
            c.unbind(this.img, "load", this), c.unbind(this.img, "error", this)
        }, i.prototype.confirm = function(a, b) {
            this.isLoaded = a, this.emit("progress", this, this.element, b)
        }, g.makeJQueryPlugin = function(b) {
            b = b || a.jQuery, b && (j = b, j.fn.imagesLoaded = function(a, b) {
                var c = new g(this, a, b);
                return c.jqDeferred.promise(j(this))
            })
        }, g.makeJQueryPlugin(), g
    });
(function(c) {
    function d(a, b) {
        this.previewElement = a;
        this.spinnerElement = c("<div class='spinner'></div>");
        this.options = b;
        this.gifLoaded = !1
    }
    d.prototype = {
        activate: function() {
            this.wrap();
            this.addSpinner();
            this.addControl();
            this.addEvents();
            this.options.autoLoad && (this.playElement.hide(), this.spinnerElement.show(), this.loadGif());
            this.options.preLoad && ((new Image).src = this.getGifSrc())
        },
        wrap: function() {
            this.wrapper = this.previewElement.wrap("<div class='gapplayer-wrapper'></div>").parent();
            this.wrapper.css("width", this.previewElement.width());
            this.wrapper.css("height", this.previewElement.height());
            this.previewElement.addClass("gapplayer");
            this.previewElement.css("cursor", "pointer")
        },
        getGifSrc: function() {
            return this.previewElement.attr("data-gif") ? this.previewElement.attr("data-gif") : this.previewElement.attr("src").replace(/\.[^/.]+$/, ".gif")
        },
        addControl: function() {
            this.playElement = c("<ins class='play-gif'>" + this.options.label + "</ins>");
            this.playElement.css("left", this.previewElement.width() / 2 + this.playElement.width() / 2);
            this.wrapper.append(this.playElement)
        },
        addEvents: function() {
            var a = this.options.hover ? "mouseenter" : "click",
                b = this;
            b.playElement.on(a, function(a) {
                c(this).hide();
                b.spinnerElement.show();
                b.loadGif();
                a.preventDefault();
                a.stopPropagation()
            });
            b.previewElement.on(a, function(a) {
                b.playElement.is(":visible") && (b.playElement.hide(), b.spinnerElement.show(), b.loadGif());
                a.preventDefault();
                a.stopPropagation()
            });
            b.spinnerElement.on(a, function(a) {
                a.preventDefault();
                a.stopPropagation()
            })
        },
        loadGif: function() {
            this.gifLoaded || this.enableAbort();
            var a = this,
                b = a.options.hover ? "mouseleave" : "click",
                d = this.getGifSrc(),
                e = this.previewElement.width(),
                f = this.previewElement.height();
            a.gifElement = c("<img src='" + d + "' width='" + e + "' height=' " + f + " '/>");
            this.gifElement.load(function() {
                a.gifLoaded = !0;
                a.resetEvents();
                c(this).css({
                    position: "absolute",
                    top: "0",
                    left: "0"
                });
                a.options.effect ? (a.gifElement.hide(), a.spinnerElement.hide(), a.wrapper.append(a.gifElement), a.gifElement.stop(!0).fadeIn(function() {
                    a.previewElement.hide()
                })) : (a.previewElement.hide(), a.wrapper.append(a.gifElement), a.spinnerElement.hide());
                if (!a.options.autoLoad) c(this).on(b, function(b) {
                    a.options.effect ? (a.previewElement.show(), a.playElement.show(), c(this).stop(!0).fadeOut()) : (c(this).remove(), a.previewElement.show(), a.playElement.show());
                    b.preventDefault();
                    b.stopPropagation()
                })
            })
        },
        enableAbort: function() {
            var a = this;
            this.previewElement.click(function(b) {
                a.abortLoading(b)
            });
            this.spinnerElement.click(function(b) {
                a.abortLoading(b)
            })
        },
        abortLoading: function(a) {
            this.spinnerElement.hide();
            this.playElement.show();
            a.preventDefault();
            a.stopPropagation();
            this.gifElement.off("load").on("load", function(a) {
                a.preventDefault();
                a.stopPropagation()
            });
            this.resetEvents()
        },
        resetEvents: function() {
            this.previewElement.off("click");
            this.playElement.off("click");
            this.spinnerElement.off("click");
            this.addEvents()
        },
        addSpinner: function() {
            this.wrapper.append(this.spinnerElement);
            this.spinnerElement.hide()
        }
    };
    c.fn.gapPlayer = function(a) {
        return this.each(function() {
            a = c.extend({}, c.fn.gapPlayer.defaults, a);
            (new d(c(this), a)).activate()
        })
    };
    c.fn.gapPlayer.defaults = {
        label: "gif",
        autoLoad: !1,
        preLoad: !1,
        effect: !1,
        hover: !1
    };
    gapStart()
})(jQuery);

function gapStart() {
    "yes" == gapParams.metadata && jQuery('img[src$="-gap.jpg"]:not([data-gif]):not(.gapplayer),img[src*="-gap.jpg?"]:not([data-gif]):not(.gapplayer)').each(function() {
        var c = jQuery(this).attr("src");
        jQuery(this).attr("data-gif", c.substring(0, c.length - 8) + ".gif")
    });
    var c = jQuery('img[src$="-gap.jpg"]:not(.gapplayer),img[src*="-gap.jpg?"]:not(.gapplayer)');
    c.imagesLoaded(function() {
        c.gapPlayer({
            autoLoad: "yes" == gapParams.autoLoad,
            preLoad: "no" == gapParams.preLoad,
            effect: "yes" == gapParams.effect,
            hover: "yes" == gapParams.hover
        })
    })
};
/*!
 * jQuery UI Core 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
    function b(b, d) {
        var e, f, g, h = b.nodeName.toLowerCase();
        return "area" === h ? (e = b.parentNode, f = e.name, !(!b.href || !f || "map" !== e.nodeName.toLowerCase()) && (g = a("img[usemap='#" + f + "']")[0], !!g && c(g))) : (/^(input|select|textarea|button|object)$/.test(h) ? !b.disabled : "a" === h ? b.href || d : d) && c(b)
    }

    function c(b) {
        return a.expr.filters.visible(b) && !a(b).parents().addBack().filter(function() {
            return "hidden" === a.css(this, "visibility")
        }).length
    }
    a.ui = a.ui || {}, a.extend(a.ui, {
        version: "1.11.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), a.fn.extend({
        scrollParent: function(b) {
            var c = this.css("position"),
                d = "absolute" === c,
                e = b ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                f = this.parents().filter(function() {
                    var b = a(this);
                    return (!d || "static" !== b.css("position")) && e.test(b.css("overflow") + b.css("overflow-y") + b.css("overflow-x"))
                }).eq(0);
            return "fixed" !== c && f.length ? f : a(this[0].ownerDocument || document)
        },
        uniqueId: function() {
            var a = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++a)
                })
            }
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && a(this).removeAttr("id")
            })
        }
    }), a.extend(a.expr[":"], {
        data: a.expr.createPseudo ? a.expr.createPseudo(function(b) {
            return function(c) {
                return !!a.data(c, b)
            }
        }) : function(b, c, d) {
            return !!a.data(b, d[3])
        },
        focusable: function(c) {
            return b(c, !isNaN(a.attr(c, "tabindex")))
        },
        tabbable: function(c) {
            var d = a.attr(c, "tabindex"),
                e = isNaN(d);
            return (e || d >= 0) && b(c, !e)
        }
    }), a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function(b, c) {
        function d(b, c, d, f) {
            return a.each(e, function() {
                c -= parseFloat(a.css(b, "padding" + this)) || 0, d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0), f && (c -= parseFloat(a.css(b, "margin" + this)) || 0)
            }), c
        }
        var e = "Width" === c ? ["Left", "Right"] : ["Top", "Bottom"],
            f = c.toLowerCase(),
            g = {
                innerWidth: a.fn.innerWidth,
                innerHeight: a.fn.innerHeight,
                outerWidth: a.fn.outerWidth,
                outerHeight: a.fn.outerHeight
            };
        a.fn["inner" + c] = function(b) {
            return void 0 === b ? g["inner" + c].call(this) : this.each(function() {
                a(this).css(f, d(this, b) + "px")
            })
        }, a.fn["outer" + c] = function(b, e) {
            return "number" != typeof b ? g["outer" + c].call(this, b) : this.each(function() {
                a(this).css(f, d(this, b, !0, e) + "px")
            })
        }
    }), a.fn.addBack || (a.fn.addBack = function(a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    }), a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = function(b) {
        return function(c) {
            return arguments.length ? b.call(this, a.camelCase(c)) : b.call(this)
        }
    }(a.fn.removeData)), a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), a.fn.extend({
        focus: function(b) {
            return function(c, d) {
                return "number" == typeof c ? this.each(function() {
                    var b = this;
                    setTimeout(function() {
                        a(b).focus(), d && d.call(b)
                    }, c)
                }) : b.apply(this, arguments)
            }
        }(a.fn.focus),
        disableSelection: function() {
            var a = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.bind(a + ".ui-disableSelection", function(a) {
                    a.preventDefault()
                })
            }
        }(),
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        },
        zIndex: function(b) {
            if (void 0 !== b) return this.css("zIndex", b);
            if (this.length)
                for (var c, d, e = a(this[0]); e.length && e[0] !== document;) {
                    if (c = e.css("position"), ("absolute" === c || "relative" === c || "fixed" === c) && (d = parseInt(e.css("zIndex"), 10), !isNaN(d) && 0 !== d)) return d;
                    e = e.parent()
                }
            return 0
        }
    }), a.ui.plugin = {
        add: function(b, c, d) {
            var e, f = a.ui[b].prototype;
            for (e in d) f.plugins[e] = f.plugins[e] || [], f.plugins[e].push([c, d[e]])
        },
        call: function(a, b, c, d) {
            var e, f = a.plugins[b];
            if (f && (d || a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType))
                for (e = 0; e < f.length; e++) a.options[f[e][0]] && f[e][1].apply(a.element, c)
        }
    }
});
/*!
 * jQuery UI Widget 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
    var b = 0,
        c = Array.prototype.slice;
    return a.cleanData = function(b) {
        return function(c) {
            var d, e, f;
            for (f = 0; null != (e = c[f]); f++) try {
                d = a._data(e, "events"), d && d.remove && a(e).triggerHandler("remove")
            } catch (g) {}
            b(c)
        }
    }(a.cleanData), a.widget = function(b, c, d) {
        var e, f, g, h, i = {},
            j = b.split(".")[0];
        return b = b.split(".")[1], e = j + "-" + b, d || (d = c, c = a.Widget), a.expr[":"][e.toLowerCase()] = function(b) {
            return !!a.data(b, e)
        }, a[j] = a[j] || {}, f = a[j][b], g = a[j][b] = function(a, b) {
            return this._createWidget ? void(arguments.length && this._createWidget(a, b)) : new g(a, b)
        }, a.extend(g, f, {
            version: d.version,
            _proto: a.extend({}, d),
            _childConstructors: []
        }), h = new c, h.options = a.widget.extend({}, h.options), a.each(d, function(b, d) {
            return a.isFunction(d) ? void(i[b] = function() {
                var a = function() {
                        return c.prototype[b].apply(this, arguments)
                    },
                    e = function(a) {
                        return c.prototype[b].apply(this, a)
                    };
                return function() {
                    var b, c = this._super,
                        f = this._superApply;
                    return this._super = a, this._superApply = e, b = d.apply(this, arguments), this._super = c, this._superApply = f, b
                }
            }()) : void(i[b] = d)
        }), g.prototype = a.widget.extend(h, {
            widgetEventPrefix: f ? h.widgetEventPrefix || b : b
        }, i, {
            constructor: g,
            namespace: j,
            widgetName: b,
            widgetFullName: e
        }), f ? (a.each(f._childConstructors, function(b, c) {
            var d = c.prototype;
            a.widget(d.namespace + "." + d.widgetName, g, c._proto)
        }), delete f._childConstructors) : c._childConstructors.push(g), a.widget.bridge(b, g), g
    }, a.widget.extend = function(b) {
        for (var d, e, f = c.call(arguments, 1), g = 0, h = f.length; g < h; g++)
            for (d in f[g]) e = f[g][d], f[g].hasOwnProperty(d) && void 0 !== e && (a.isPlainObject(e) ? b[d] = a.isPlainObject(b[d]) ? a.widget.extend({}, b[d], e) : a.widget.extend({}, e) : b[d] = e);
        return b
    }, a.widget.bridge = function(b, d) {
        var e = d.prototype.widgetFullName || b;
        a.fn[b] = function(f) {
            var g = "string" == typeof f,
                h = c.call(arguments, 1),
                i = this;
            return g ? this.each(function() {
                var c, d = a.data(this, e);
                return "instance" === f ? (i = d, !1) : d ? a.isFunction(d[f]) && "_" !== f.charAt(0) ? (c = d[f].apply(d, h), c !== d && void 0 !== c ? (i = c && c.jquery ? i.pushStack(c.get()) : c, !1) : void 0) : a.error("no such method '" + f + "' for " + b + " widget instance") : a.error("cannot call methods on " + b + " prior to initialization; attempted to call method '" + f + "'")
            }) : (h.length && (f = a.widget.extend.apply(null, [f].concat(h))), this.each(function() {
                var b = a.data(this, e);
                b ? (b.option(f || {}), b._init && b._init()) : a.data(this, e, new d(f, this))
            })), i
        }
    }, a.Widget = function() {}, a.Widget._childConstructors = [], a.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(c, d) {
            d = a(d || this.defaultElement || this)[0], this.element = a(d), this.uuid = b++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = a(), this.hoverable = a(), this.focusable = a(), d !== this && (a.data(d, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(a) {
                    a.target === d && this.destroy()
                }
            }), this.document = a(d.style ? d.ownerDocument : d.document || d), this.window = a(this.document[0].defaultView || this.document[0].parentWindow)), this.options = a.widget.extend({}, this.options, this._getCreateOptions(), c), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: a.noop,
        _getCreateEventData: a.noop,
        _create: a.noop,
        _init: a.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: a.noop,
        widget: function() {
            return this.element
        },
        option: function(b, c) {
            var d, e, f, g = b;
            if (0 === arguments.length) return a.widget.extend({}, this.options);
            if ("string" == typeof b)
                if (g = {}, d = b.split("."), b = d.shift(), d.length) {
                    for (e = g[b] = a.widget.extend({}, this.options[b]), f = 0; f < d.length - 1; f++) e[d[f]] = e[d[f]] || {}, e = e[d[f]];
                    if (b = d.pop(), 1 === arguments.length) return void 0 === e[b] ? null : e[b];
                    e[b] = c
                } else {
                    if (1 === arguments.length) return void 0 === this.options[b] ? null : this.options[b];
                    g[b] = c
                }
            return this._setOptions(g), this
        },
        _setOptions: function(a) {
            var b;
            for (b in a) this._setOption(b, a[b]);
            return this
        },
        _setOption: function(a, b) {
            return this.options[a] = b, "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!b), b && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function(b, c, d) {
            var e, f = this;
            "boolean" != typeof b && (d = c, c = b, b = !1), d ? (c = e = a(c), this.bindings = this.bindings.add(c)) : (d = c, c = this.element, e = this.widget()), a.each(d, function(d, g) {
                function h() {
                    if (b || f.options.disabled !== !0 && !a(this).hasClass("ui-state-disabled")) return ("string" == typeof g ? f[g] : g).apply(f, arguments)
                }
                "string" != typeof g && (h.guid = g.guid = g.guid || h.guid || a.guid++);
                var i = d.match(/^([\w:-]*)\s*(.*)$/),
                    j = i[1] + f.eventNamespace,
                    k = i[2];
                k ? e.delegate(k, j, h) : c.bind(j, h)
            })
        },
        _off: function(b, c) {
            c = (c || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, b.unbind(c).undelegate(c), this.bindings = a(this.bindings.not(b).get()), this.focusable = a(this.focusable.not(b).get()), this.hoverable = a(this.hoverable.not(b).get())
        },
        _delay: function(a, b) {
            function c() {
                return ("string" == typeof a ? d[a] : a).apply(d, arguments)
            }
            var d = this;
            return setTimeout(c, b || 0)
        },
        _hoverable: function(b) {
            this.hoverable = this.hoverable.add(b), this._on(b, {
                mouseenter: function(b) {
                    a(b.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(b) {
                    a(b.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(b) {
            this.focusable = this.focusable.add(b), this._on(b, {
                focusin: function(b) {
                    a(b.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(b) {
                    a(b.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(b, c, d) {
            var e, f, g = this.options[b];
            if (d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], f = c.originalEvent)
                for (e in f) e in c || (c[e] = f[e]);
            return this.element.trigger(c, d), !(a.isFunction(g) && g.apply(this.element[0], [c].concat(d)) === !1 || c.isDefaultPrevented())
        }
    }, a.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(b, c) {
        a.Widget.prototype["_" + b] = function(d, e, f) {
            "string" == typeof e && (e = {
                effect: e
            });
            var g, h = e ? e === !0 || "number" == typeof e ? c : e.effect || c : b;
            e = e || {}, "number" == typeof e && (e = {
                duration: e
            }), g = !a.isEmptyObject(e), e.complete = f, e.delay && d.delay(e.delay), g && a.effects && a.effects.effect[h] ? d[b](e) : h !== b && d[h] ? d[h](e.duration, e.easing, f) : d.queue(function(c) {
                a(this)[b](), f && f.call(d[0]), c()
            })
        }
    }), a.widget
});
/*!
 * jQuery UI Tabs 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/tabs/
 */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./core", "./widget"], a) : a(jQuery)
}(function(a) {
    return a.widget("ui.tabs", {
        version: "1.11.4",
        delay: 300,
        options: {
            active: null,
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _isLocal: function() {
            var a = /#.*$/;
            return function(b) {
                var c, d;
                b = b.cloneNode(!1), c = b.href.replace(a, ""), d = location.href.replace(a, "");
                try {
                    c = decodeURIComponent(c)
                } catch (e) {}
                try {
                    d = decodeURIComponent(d)
                } catch (e) {}
                return b.hash.length > 1 && c === d
            }
        }(),
        _create: function() {
            var b = this,
                c = this.options;
            this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", c.collapsible), this._processTabs(), c.active = this._initialActive(), a.isArray(c.disabled) && (c.disabled = a.unique(c.disabled.concat(a.map(this.tabs.filter(".ui-state-disabled"), function(a) {
                return b.tabs.index(a)
            }))).sort()), this.options.active !== !1 && this.anchors.length ? this.active = this._findActive(c.active) : this.active = a(), this._refresh(), this.active.length && this.load(c.active)
        },
        _initialActive: function() {
            var b = this.options.active,
                c = this.options.collapsible,
                d = location.hash.substring(1);
            return null === b && (d && this.tabs.each(function(c, e) {
                if (a(e).attr("aria-controls") === d) return b = c, !1
            }), null === b && (b = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), null !== b && b !== -1 || (b = !!this.tabs.length && 0)), b !== !1 && (b = this.tabs.index(this.tabs.eq(b)), b === -1 && (b = !c && 0)), !c && b === !1 && this.anchors.length && (b = 0), b
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : a()
            }
        },
        _tabKeydown: function(b) {
            var c = a(this.document[0].activeElement).closest("li"),
                d = this.tabs.index(c),
                e = !0;
            if (!this._handlePageNav(b)) {
                switch (b.keyCode) {
                    case a.ui.keyCode.RIGHT:
                    case a.ui.keyCode.DOWN:
                        d++;
                        break;
                    case a.ui.keyCode.UP:
                    case a.ui.keyCode.LEFT:
                        e = !1, d--;
                        break;
                    case a.ui.keyCode.END:
                        d = this.anchors.length - 1;
                        break;
                    case a.ui.keyCode.HOME:
                        d = 0;
                        break;
                    case a.ui.keyCode.SPACE:
                        return b.preventDefault(), clearTimeout(this.activating), void this._activate(d);
                    case a.ui.keyCode.ENTER:
                        return b.preventDefault(), clearTimeout(this.activating), void this._activate(d !== this.options.active && d);
                    default:
                        return
                }
                b.preventDefault(), clearTimeout(this.activating), d = this._focusNextTab(d, e), b.ctrlKey || b.metaKey || (c.attr("aria-selected", "false"), this.tabs.eq(d).attr("aria-selected", "true"), this.activating = this._delay(function() {
                    this.option("active", d)
                }, this.delay))
            }
        },
        _panelKeydown: function(b) {
            this._handlePageNav(b) || b.ctrlKey && b.keyCode === a.ui.keyCode.UP && (b.preventDefault(), this.active.focus())
        },
        _handlePageNav: function(b) {
            return b.altKey && b.keyCode === a.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : b.altKey && b.keyCode === a.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
        },
        _findNextTab: function(b, c) {
            function d() {
                return b > e && (b = 0), b < 0 && (b = e), b
            }
            for (var e = this.tabs.length - 1; a.inArray(d(), this.options.disabled) !== -1;) b = c ? b + 1 : b - 1;
            return b
        },
        _focusNextTab: function(a, b) {
            return a = this._findNextTab(a, b), this.tabs.eq(a).focus(), a
        },
        _setOption: function(a, b) {
            return "active" === a ? void this._activate(b) : "disabled" === a ? void this._setupDisabled(b) : (this._super(a, b), "collapsible" === a && (this.element.toggleClass("ui-tabs-collapsible", b), b || this.options.active !== !1 || this._activate(0)), "event" === a && this._setupEvents(b), void("heightStyle" === a && this._setupHeightStyle(b)))
        },
        _sanitizeSelector: function(a) {
            return a ? a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function() {
            var b = this.options,
                c = this.tablist.children(":has(a[href])");
            b.disabled = a.map(c.filter(".ui-state-disabled"), function(a) {
                return c.index(a)
            }), this._processTabs(), b.active !== !1 && this.anchors.length ? this.active.length && !a.contains(this.tablist[0], this.active[0]) ? this.tabs.length === b.disabled.length ? (b.active = !1, this.active = a()) : this._activate(this._findNextTab(Math.max(0, b.active - 1), !1)) : b.active = this.tabs.index(this.active) : (b.active = !1, this.active = a()), this._refresh()
        },
        _refresh: function() {
            this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-hidden": "true"
            }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }), this._getPanelForTab(this.active).show().attr({
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function() {
            var b = this,
                c = this.tabs,
                d = this.anchors,
                e = this.panels;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, function(b) {
                a(this).is(".ui-state-disabled") && b.preventDefault()
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                a(this).closest("li").is(".ui-state-disabled") && this.blur()
            }), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                role: "tab",
                tabIndex: -1
            }), this.anchors = this.tabs.map(function() {
                return a("a", this)[0]
            }).addClass("ui-tabs-anchor").attr({
                role: "presentation",
                tabIndex: -1
            }), this.panels = a(), this.anchors.each(function(c, d) {
                var e, f, g, h = a(d).uniqueId().attr("id"),
                    i = a(d).closest("li"),
                    j = i.attr("aria-controls");
                b._isLocal(d) ? (e = d.hash, g = e.substring(1), f = b.element.find(b._sanitizeSelector(e))) : (g = i.attr("aria-controls") || a({}).uniqueId()[0].id, e = "#" + g, f = b.element.find(e), f.length || (f = b._createPanel(g), f.insertAfter(b.panels[c - 1] || b.tablist)), f.attr("aria-live", "polite")), f.length && (b.panels = b.panels.add(f)), j && i.data("ui-tabs-aria-controls", j), i.attr({
                    "aria-controls": g,
                    "aria-labelledby": h
                }), f.attr("aria-labelledby", h)
            }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel"), c && (this._off(c.not(this.tabs)), this._off(d.not(this.anchors)), this._off(e.not(this.panels)))
        },
        _getList: function() {
            return this.tablist || this.element.find("ol,ul").eq(0)
        },
        _createPanel: function(b) {
            return a("<div>").attr("id", b).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
        },
        _setupDisabled: function(b) {
            a.isArray(b) && (b.length ? b.length === this.anchors.length && (b = !0) : b = !1);
            for (var c, d = 0; c = this.tabs[d]; d++) b === !0 || a.inArray(d, b) !== -1 ? a(c).addClass("ui-state-disabled").attr("aria-disabled", "true") : a(c).removeClass("ui-state-disabled").removeAttr("aria-disabled");
            this.options.disabled = b
        },
        _setupEvents: function(b) {
            var c = {};
            b && a.each(b.split(" "), function(a, b) {
                c[b] = "_eventHandler"
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                click: function(a) {
                    a.preventDefault()
                }
            }), this._on(this.anchors, c), this._on(this.tabs, {
                keydown: "_tabKeydown"
            }), this._on(this.panels, {
                keydown: "_panelKeydown"
            }), this._focusable(this.tabs), this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(b) {
            var c, d = this.element.parent();
            "fill" === b ? (c = d.height(), c -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                var b = a(this),
                    d = b.css("position");
                "absolute" !== d && "fixed" !== d && (c -= b.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function() {
                c -= a(this).outerHeight(!0)
            }), this.panels.each(function() {
                a(this).height(Math.max(0, c - a(this).innerHeight() + a(this).height()))
            }).css("overflow", "auto")) : "auto" === b && (c = 0, this.panels.each(function() {
                c = Math.max(c, a(this).height("").height())
            }).height(c))
        },
        _eventHandler: function(b) {
            var c = this.options,
                d = this.active,
                e = a(b.currentTarget),
                f = e.closest("li"),
                g = f[0] === d[0],
                h = g && c.collapsible,
                i = h ? a() : this._getPanelForTab(f),
                j = d.length ? this._getPanelForTab(d) : a(),
                k = {
                    oldTab: d,
                    oldPanel: j,
                    newTab: h ? a() : f,
                    newPanel: i
                };
            b.preventDefault(), f.hasClass("ui-state-disabled") || f.hasClass("ui-tabs-loading") || this.running || g && !c.collapsible || this._trigger("beforeActivate", b, k) === !1 || (c.active = !h && this.tabs.index(f), this.active = g ? a() : f, this.xhr && this.xhr.abort(), j.length || i.length || a.error("jQuery UI Tabs: Mismatching fragment identifier."), i.length && this.load(this.tabs.index(f), b), this._toggle(b, k))
        },
        _toggle: function(b, c) {
            function d() {
                f.running = !1, f._trigger("activate", b, c)
            }

            function e() {
                c.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), g.length && f.options.show ? f._show(g, f.options.show, d) : (g.show(), d())
            }
            var f = this,
                g = c.newPanel,
                h = c.oldPanel;
            this.running = !0, h.length && this.options.hide ? this._hide(h, this.options.hide, function() {
                c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), e()
            }) : (c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), h.hide(), e()), h.attr("aria-hidden", "true"), c.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), g.length && h.length ? c.oldTab.attr("tabIndex", -1) : g.length && this.tabs.filter(function() {
                return 0 === a(this).attr("tabIndex")
            }).attr("tabIndex", -1), g.attr("aria-hidden", "false"), c.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _activate: function(b) {
            var c, d = this._findActive(b);
            d[0] !== this.active[0] && (d.length || (d = this.active), c = d.find(".ui-tabs-anchor")[0], this._eventHandler({
                target: c,
                currentTarget: c,
                preventDefault: a.noop
            }))
        },
        _findActive: function(b) {
            return b === !1 ? a() : this.tabs.eq(b)
        },
        _getIndex: function(a) {
            return "string" == typeof a && (a = this.anchors.index(this.anchors.filter("[href$='" + a + "']"))), a
        },
        _destroy: function() {
            this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tablist.unbind(this.eventNamespace), this.tabs.add(this.panels).each(function() {
                a.data(this, "ui-tabs-destroy") ? a(this).remove() : a(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
            }), this.tabs.each(function() {
                var b = a(this),
                    c = b.data("ui-tabs-aria-controls");
                c ? b.attr("aria-controls", c).removeData("ui-tabs-aria-controls") : b.removeAttr("aria-controls")
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function(b) {
            var c = this.options.disabled;
            c !== !1 && (void 0 === b ? c = !1 : (b = this._getIndex(b), c = a.isArray(c) ? a.map(c, function(a) {
                return a !== b ? a : null
            }) : a.map(this.tabs, function(a, c) {
                return c !== b ? c : null
            })), this._setupDisabled(c))
        },
        disable: function(b) {
            var c = this.options.disabled;
            if (c !== !0) {
                if (void 0 === b) c = !0;
                else {
                    if (b = this._getIndex(b), a.inArray(b, c) !== -1) return;
                    c = a.isArray(c) ? a.merge([b], c).sort() : [b]
                }
                this._setupDisabled(c)
            }
        },
        load: function(b, c) {
            b = this._getIndex(b);
            var d = this,
                e = this.tabs.eq(b),
                f = e.find(".ui-tabs-anchor"),
                g = this._getPanelForTab(e),
                h = {
                    tab: e,
                    panel: g
                },
                i = function(a, b) {
                    "abort" === b && d.panels.stop(!1, !0), e.removeClass("ui-tabs-loading"), g.removeAttr("aria-busy"), a === d.xhr && delete d.xhr
                };
            this._isLocal(f[0]) || (this.xhr = a.ajax(this._ajaxSettings(f, c, h)), this.xhr && "canceled" !== this.xhr.statusText && (e.addClass("ui-tabs-loading"), g.attr("aria-busy", "true"), this.xhr.done(function(a, b, e) {
                setTimeout(function() {
                    g.html(a), d._trigger("load", c, h), i(e, b)
                }, 1)
            }).fail(function(a, b) {
                setTimeout(function() {
                    i(a, b)
                }, 1)
            })))
        },
        _ajaxSettings: function(b, c, d) {
            var e = this;
            return {
                url: b.attr("href"),
                beforeSend: function(b, f) {
                    return e._trigger("beforeLoad", c, a.extend({
                        jqXHR: b,
                        ajaxSettings: f
                    }, d))
                }
            }
        },
        _getPanelForTab: function(b) {
            var c = a(b).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + c))
        }
    })
});
/*!
 * Bootstrap v3.2.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) {
    "use strict";

    function b() {
        var a = document.createElement("bootstrap"),
            b = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var c in b)
            if (void 0 !== a.style[c]) return {
                end: b[c]
            };
        return !1
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1,
            d = this;
        a(this).one("bsTransitionEnd", function() {
            c = !0
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function() {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function(b) {
                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var c = a(this),
                e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
        })
    }
    var c = '[data-dismiss="alert"]',
        d = function(b) {
            a(b).on("click", c, this.close)
        };
    d.VERSION = "3.2.0", d.prototype.close = function(b) {
        function c() {
            f.detach().trigger("closed.bs.alert").remove()
        }
        var d = a(this),
            e = d.attr("data-target");
        e || (e = d.attr("href"), e = e && e.replace(/.*(?=#[^\s]*$)/, ""));
        var f = a(e);
        b && b.preventDefault(), f.length || (f = d.hasClass("alert") ? d : d.parent()), f.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", c).emulateTransitionEnd(150) : c())
    };
    var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() {
        return a.fn.alert = e, this
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.button"),
                f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }
    var c = function(b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
    };
    c.VERSION = "3.2.0", c.DEFAULTS = {
        loadingText: "loading..."
    }, c.prototype.setState = function(b) {
        var c = "disabled",
            d = this.$element,
            e = d.is("input") ? "val" : "html",
            f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), d[e](null == f[b] ? this.options[b] : f[b]), setTimeout(a.proxy(function() {
            "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
        }, this), 0)
    }, c.prototype.toggle = function() {
        var a = !0,
            b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active")), a && c.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        a && this.$element.toggleClass("active")
    };
    var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() {
        return a.fn.button = d, this
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
        var d = a(c.target);
        d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), c.preventDefault()
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.carousel"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }
    var c = function(b, c) {
        this.$element = a(b).on("keydown.bs.carousel", a.proxy(this.keydown, this)), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    c.VERSION = "3.2.0", c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    }, c.prototype.keydown = function(a) {
        switch (a.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
        }
        a.preventDefault()
    }, c.prototype.cycle = function(b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, c.prototype.getItemIndex = function(a) {
        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
    }, c.prototype.to = function(b) {
        var c = this,
            d = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return b > this.$items.length - 1 || 0 > b ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            c.to(b)
        }) : d == b ? this.pause().cycle() : this.slide(b > d ? "next" : "prev", a(this.$items[b]))
    }, c.prototype.pause = function(b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, c.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, c.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, c.prototype.slide = function(b, c) {
        var d = this.$element.find(".item.active"),
            e = c || d[b](),
            f = this.interval,
            g = "next" == b ? "left" : "right",
            h = "next" == b ? "first" : "last",
            i = this;
        if (!e.length) {
            if (!this.options.wrap) return;
            e = this.$element.find(".item")[h]()
        }
        if (e.hasClass("active")) return this.sliding = !1;
        var j = e[0],
            k = a.Event("slide.bs.carousel", {
                relatedTarget: j,
                direction: g
            });
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, f && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(e)]);
                l && l.addClass("active")
            }
            var m = a.Event("slid.bs.carousel", {
                relatedTarget: j,
                direction: g
            });
            return a.support.transition && this.$element.hasClass("slide") ? (e.addClass(b), e[0].offsetWidth, d.addClass(g), e.addClass(g), d.one("bsTransitionEnd", function() {
                e.removeClass([b, g].join(" ")).addClass("active"), d.removeClass(["active", g].join(" ")), i.sliding = !1, setTimeout(function() {
                    i.$element.trigger(m)
                }, 0)
            }).emulateTransitionEnd(1e3 * d.css("transition-duration").slice(0, -1))) : (d.removeClass("active"), e.addClass("active"), this.sliding = !1, this.$element.trigger(m)), f && this.cycle(), this
        }
    };
    var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() {
        return a.fn.carousel = d, this
    }, a(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(c) {
        var d, e = a(this),
            f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()),
                h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
        }
    }), a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var c = a(this);
            b.call(c, c.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.collapse"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b);
            !e && f.toggle && "show" == b && (b = !b), e || d.data("bs.collapse", e = new c(this, f)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.transitioning = null, this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle()
    };
    c.VERSION = "3.2.0", c.DEFAULTS = {
        toggle: !0
    }, c.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, c.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var c = a.Event("show.bs.collapse");
            if (this.$element.trigger(c), !c.isDefaultPrevented()) {
                var d = this.$parent && this.$parent.find("> .panel > .in");
                if (d && d.length) {
                    var e = d.data("bs.collapse");
                    if (e && e.transitioning) return;
                    b.call(d, "hide"), e || d.data("bs.collapse", null)
                }
                var f = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[f](0), this.transitioning = 1;
                var g = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[f](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!a.support.transition) return g.call(this);
                var h = a.camelCase(["scroll", f].join("-"));
                this.$element.one("bsTransitionEnd", a.proxy(g, this)).emulateTransitionEnd(350)[f](this.$element[0][h])
            }
        }
    }, c.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                var d = function() {
                    this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(d, this)).emulateTransitionEnd(350) : d.call(this)
            }
        }
    }, c.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var d = a.fn.collapse;
    a.fn.collapse = b, a.fn.collapse.Constructor = c, a.fn.collapse.noConflict = function() {
        return a.fn.collapse = d, this
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(c) {
        var d, e = a(this),
            f = e.attr("data-target") || c.preventDefault() || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""),
            g = a(f),
            h = g.data("bs.collapse"),
            i = h ? "toggle" : e.data(),
            j = e.attr("data-parent"),
            k = j && a(j);
        h && h.transitioning || (k && k.find('[data-toggle="collapse"][data-parent="' + j + '"]').not(e).addClass("collapsed"), e[g.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), b.call(g, i)
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        b && 3 === b.which || (a(e).remove(), a(f).each(function() {
            var d = c(a(this)),
                e = {
                    relatedTarget: this
                };
            d.hasClass("open") && (d.trigger(b = a.Event("hide.bs.dropdown", e)), b.isDefaultPrevented() || d.removeClass("open").trigger("hidden.bs.dropdown", e))
        }))
    }

    function c(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }

    function d(b) {
        return this.each(function() {
            var c = a(this),
                d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
        })
    }
    var e = ".dropdown-backdrop",
        f = '[data-toggle="dropdown"]',
        g = function(b) {
            a(b).on("click.bs.dropdown", this.toggle)
        };
    g.VERSION = "3.2.0", g.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = c(e),
                g = f.hasClass("open");
            if (b(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                e.trigger("focus"), f.toggleClass("open").trigger("shown.bs.dropdown", h)
            }
            return !1
        }
    }, g.prototype.keydown = function(b) {
        if (/(38|40|27)/.test(b.keyCode)) {
            var d = a(this);
            if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = c(d),
                    g = e.hasClass("open");
                if (!g || g && 27 == b.keyCode) return 27 == b.which && e.find(f).trigger("focus"), d.trigger("click");
                var h = " li:not(.divider):visible a",
                    i = e.find('[role="menu"]' + h + ', [role="listbox"]' + h);
                if (i.length) {
                    var j = i.index(i.filter(":focus"));
                    38 == b.keyCode && j > 0 && j--, 40 == b.keyCode && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = h, this
    }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f + ', [role="menu"], [role="listbox"]', g.prototype.keydown)
}(jQuery), + function(a) {
    "use strict";

    function b(b, d) {
        return this.each(function() {
            var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }
    var c = function(b, c) {
        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    c.VERSION = "3.2.0", c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, c.prototype.toggle = function(a) {
        return this.isShown ? this.hide() : this.show(a)
    }, c.prototype.show = function(b) {
        var c = this,
            d = a.Event("show.bs.modal", {
                relatedTarget: b
            });
        this.$element.trigger(d), this.isShown || d.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function() {
            var d = a.support.transition && c.$element.hasClass("fade");
            c.$element.parent().length || c.$element.appendTo(c.$body), c.$element.show().scrollTop(0), d && c.$element[0].offsetWidth, c.$element.addClass("in").attr("aria-hidden", !1), c.enforceFocus();
            var e = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            d ? c.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
                c.$element.trigger("focus").trigger(e)
            }).emulateTransitionEnd(300) : c.$element.trigger("focus").trigger(e)
        }))
    }, c.prototype.hide = function(b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, c.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }, c.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, c.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(), this.backdrop(function() {
            a.$element.trigger("hidden.bs.modal")
        })
    }, c.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, c.prototype.backdrop = function(b) {
        var c = this,
            d = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var e = a.support.transition && d;
            if (this.$backdrop = a('<div class="modal-backdrop ' + d + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                    a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), e && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            e ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(150) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var f = function() {
                c.removeBackdrop(), b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", f).emulateTransitionEnd(150) : f()
        } else b && b()
    }, c.prototype.checkScrollbar = function() {
        document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
    }, c.prototype.setScrollbar = function() {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.scrollbarWidth && this.$body.css("padding-right", a + this.scrollbarWidth)
    }, c.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "")
    }, c.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() {
        return a.fn.modal = d, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
        var d = a(this),
            e = d.attr("href"),
            f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
            g = f.data("bs.modal") ? "toggle" : a.extend({
                remote: !/#/.test(e) && e
            }, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
                d.is(":visible") && d.trigger("focus")
            })
        }), b.call(f, g, this)
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tooltip"),
                f = "object" == typeof b && b;
            (e || "destroy" != b) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", a, b)
    };
    c.VERSION = "3.2.0", c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, c.prototype.init = function(b, c, d) {
        this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(this.options.viewport.selector || this.options.viewport);
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin",
                    i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.getOptions = function(b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b
    }, c.prototype.getDelegateOptions = function() {
        var b = {},
            c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, c.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show()
    }, c.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide()
    }, c.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var c = a.contains(document.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !c) return;
            var d = this,
                e = this.tip(),
                f = this.getUID(this.type);
            this.setContent(), e.attr("id", f), this.$element.attr("aria-describedby", f), this.options.animation && e.addClass("fade");
            var g = "function" == typeof this.options.placement ? this.options.placement.call(this, e[0], this.$element[0]) : this.options.placement,
                h = /\s?auto?\s?/i,
                i = h.test(g);
            i && (g = g.replace(h, "") || "top"), e.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(g).data("bs." + this.type, this), this.options.container ? e.appendTo(this.options.container) : e.insertAfter(this.$element);
            var j = this.getPosition(),
                k = e[0].offsetWidth,
                l = e[0].offsetHeight;
            if (i) {
                var m = g,
                    n = this.$element.parent(),
                    o = this.getPosition(n);
                g = "bottom" == g && j.top + j.height + l - o.scroll > o.height ? "top" : "top" == g && j.top - o.scroll - l < 0 ? "bottom" : "right" == g && j.right + k > o.width ? "left" : "left" == g && j.left - k < o.left ? "right" : g, e.removeClass(m).addClass(g)
            }
            var p = this.getCalculatedOffset(g, j, k, l);
            this.applyPlacement(p, g);
            var q = function() {
                d.$element.trigger("shown.bs." + d.type), d.hoverState = null
            };
            a.support.transition && this.$tip.hasClass("fade") ? e.one("bsTransitionEnd", q).emulateTransitionEnd(150) : q()
        }
    }, c.prototype.applyPlacement = function(b, c) {
        var d = this.tip(),
            e = d[0].offsetWidth,
            f = d[0].offsetHeight,
            g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top = b.top + g, b.left = b.left + h, a.offset.setOffset(d[0], a.extend({
            using: function(a) {
                d.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                })
            }
        }, b), 0), d.addClass("in");
        var i = d[0].offsetWidth,
            j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = k.left ? 2 * k.left - e + i : 2 * k.top - f + j,
            m = k.left ? "left" : "top",
            n = k.left ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(l, d[0][n], m)
    }, c.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "")
    }, c.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, c.prototype.hide = function() {
        function b() {
            "in" != c.hoverState && d.detach(), c.$element.trigger("hidden.bs." + c.type)
        }
        var c = this,
            d = this.tip(),
            e = a.Event("hide.bs." + this.type);
        return this.$element.removeAttr("aria-describedby"), this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : (d.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? d.one("bsTransitionEnd", b).emulateTransitionEnd(150) : b(), this.hoverState = null, this)
    }, c.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, c.prototype.hasContent = function() {
        return this.getTitle()
    }, c.prototype.getPosition = function(b) {
        b = b || this.$element;
        var c = b[0],
            d = "BODY" == c.tagName;
        return a.extend({}, "function" == typeof c.getBoundingClientRect ? c.getBoundingClientRect() : null, {
            scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop(),
            width: d ? a(window).width() : b.outerWidth(),
            height: d ? a(window).height() : b.outerHeight()
        }, d ? {
            top: 0,
            left: 0
        } : b.offset())
    }, c.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
        var e = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return e;
        var f = this.options.viewport && this.options.viewport.padding || 0,
            g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll,
                i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f,
                k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.width && (e.left = g.left + g.width - k)
        }
        return e
    }, c.prototype.getTitle = function() {
        var a, b = this.$element,
            c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, c.prototype.getUID = function(a) {
        do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
        return a
    }, c.prototype.tip = function() {
        return this.$tip = this.$tip || a(this.options.template)
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, c.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, c.prototype.enable = function() {
        this.enabled = !0
    }, c.prototype.disable = function() {
        this.enabled = !1
    }, c.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, c.prototype.toggle = function(b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, c.prototype.destroy = function() {
        clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = d, this
    }
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.popover"),
                f = "object" == typeof b && b;
            (e || "destroy" != b) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.2.0", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }, c.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle(),
            c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").empty()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, c.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, c.prototype.getContent = function() {
        var a = this.$element,
            b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, c.prototype.tip = function() {
        return this.$tip || (this.$tip = a(this.options.template)), this.$tip
    };
    var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() {
        return a.fn.popover = d, this
    }
}(jQuery), + function(a) {
    "use strict";

    function b(c, d) {
        var e = a.proxy(this.process, this);
        this.$body = a("body"), this.$scrollElement = a(a(c).is("body") ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e), this.refresh(), this.process()
    }

    function c(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.scrollspy"),
                f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }
    b.VERSION = "3.2.0", b.DEFAULTS = {
        offset: 10
    }, b.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, b.prototype.refresh = function() {
        var b = "offset",
            c = 0;
        a.isWindow(this.$scrollElement[0]) || (b = "position", c = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
        var d = this;
        this.$body.find(this.selector).map(function() {
            var d = a(this),
                e = d.data("target") || d.attr("href"),
                f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [
                [f[b]().top + c, e]
            ] || null
        }).sort(function(a, b) {
            return a[0] - b[0]
        }).each(function() {
            d.offsets.push(this[0]), d.targets.push(this[1])
        })
    }, b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset,
            c = this.getScrollHeight(),
            d = this.options.offset + c - this.$scrollElement.height(),
            e = this.offsets,
            f = this.targets,
            g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b <= e[0]) return g != (a = f[0]) && this.activate(a);
        for (a = e.length; a--;) g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function(b) {
        this.activeTarget = b, a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
    };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = d, this
    }, a(window).on("load.bs.scrollspy.data-api", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            c.call(b, b.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b) {
        this.element = a(b)
    };
    c.VERSION = "3.2.0", c.prototype.show = function() {
        var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a")[0],
                f = a.Event("show.bs.tab", {
                    relatedTarget: e
                });
            if (b.trigger(f), !f.isDefaultPrevented()) {
                var g = a(d);
                this.activate(b.closest("li"), c), this.activate(g, g.parent(), function() {
                    b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e
                    })
                })
            }
        }
    }, c.prototype.activate = function(b, c, d) {
        function e() {
            f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), b.addClass("active"), g ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d()
        }
        var f = c.find("> .active"),
            g = d && a.support.transition && f.hasClass("fade");
        g ? f.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e(), f.removeClass("in")
    };
    var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() {
        return a.fn.tab = d, this
    }, a(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(c) {
        c.preventDefault(), b.call(a(this), "show")
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.affix"),
                f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
        })
    }
    var c = function(b, d) {
        this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
    };
    c.VERSION = "3.2.0", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
        offset: 0,
        target: window
    }, c.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(),
            b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    }, c.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, c.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var b = a(document).height(),
                d = this.$target.scrollTop(),
                e = this.$element.offset(),
                f = this.options.offset,
                g = f.top,
                h = f.bottom;
            "object" != typeof f && (h = g = f), "function" == typeof g && (g = f.top(this.$element)), "function" == typeof h && (h = f.bottom(this.$element));
            var i = null != this.unpin && d + this.unpin <= e.top ? !1 : null != h && e.top + this.$element.height() >= b - h ? "bottom" : null != g && g >= d ? "top" : !1;
            if (this.affixed !== i) {
                null != this.unpin && this.$element.css("top", "");
                var j = "affix" + (i ? "-" + i : ""),
                    k = a.Event(j + ".bs.affix");
                this.$element.trigger(k), k.isDefaultPrevented() || (this.affixed = i, this.unpin = "bottom" == i ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(j).trigger(a.Event(j.replace("affix", "affixed"))), "bottom" == i && this.$element.offset({
                    top: b - this.$element.height() - h
                }))
            }
        }
    };
    var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() {
        return a.fn.affix = d, this
    }, a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var c = a(this),
                d = c.data();
            d.offset = d.offset || {}, d.offsetBottom && (d.offset.bottom = d.offsetBottom), d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
        })
    })
}(jQuery);;
window.Modernizr = function(a, b, c) {
        function A(a) {
            j.cssText = a
        }

        function B(a, b) {
            return A(m.join(a + ";") + (b || ""))
        }

        function C(a, b) {
            return typeof a === b
        }

        function D(a, b) {
            return !!~("" + a).indexOf(b)
        }

        function E(a, b) {
            for (var d in a) {
                var e = a[d];
                if (!D(e, "-") && j[e] !== c) return b == "pfx" ? e : !0
            }
            return !1
        }

        function F(a, b, d) {
            for (var e in a) {
                var f = b[a[e]];
                if (f !== c) return d === !1 ? a[e] : C(f, "function") ? f.bind(d || b) : f
            }
            return !1
        }

        function G(a, b, c) {
            var d = a.charAt(0).toUpperCase() + a.slice(1),
                e = (a + " " + o.join(d + " ") + d).split(" ");
            return C(b, "string") || C(b, "undefined") ? E(e, b) : (e = (a + " " + p.join(d + " ") + d).split(" "), F(e, b, c))
        }
        var d = "2.8.3",
            e = {},
            f = !0,
            g = b.documentElement,
            h = "modernizr",
            i = b.createElement(h),
            j = i.style,
            k, l = {}.toString,
            m = " -webkit- -moz- -o- -ms- ".split(" "),
            n = "Webkit Moz O ms",
            o = n.split(" "),
            p = n.toLowerCase().split(" "),
            q = {},
            r = {},
            s = {},
            t = [],
            u = t.slice,
            v, w = function(a, c, d, e) {
                var f, i, j, k, l = b.createElement("div"),
                    m = b.body,
                    n = m || b.createElement("body");
                if (parseInt(d, 10))
                    while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
                return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i
            },
            x = function(b) {
                var c = a.matchMedia || a.msMatchMedia;
                if (c) return c(b) && c(b).matches || !1;
                var d;
                return w("@media " + b + " { #" + h + " { position: absolute; } }", function(b) {
                    d = (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle)["position"] == "absolute"
                }), d
            },
            y = {}.hasOwnProperty,
            z;
        !C(y, "undefined") && !C(y.call, "undefined") ? z = function(a, b) {
            return y.call(a, b)
        } : z = function(a, b) {
            return b in a && C(a.constructor.prototype[b], "undefined")
        }, Function.prototype.bind || (Function.prototype.bind = function(b) {
            var c = this;
            if (typeof c != "function") throw new TypeError;
            var d = u.call(arguments, 1),
                e = function() {
                    if (this instanceof e) {
                        var a = function() {};
                        a.prototype = c.prototype;
                        var f = new a,
                            g = c.apply(f, d.concat(u.call(arguments)));
                        return Object(g) === g ? g : f
                    }
                    return c.apply(b, d.concat(u.call(arguments)))
                };
            return e
        }), q.touch = function() {
            var c;
            return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : w(["@media (", m.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
                c = a.offsetTop === 9
            }), c
        }, q.csstransitions = function() {
            return G("transition")
        };
        for (var H in q) z(q, H) && (v = H.toLowerCase(), e[v] = q[H](), t.push((e[v] ? "" : "no-") + v));
        return e.addTest = function(a, b) {
                if (typeof a == "object")
                    for (var d in a) z(a, d) && e.addTest(d, a[d]);
                else {
                    a = a.toLowerCase();
                    if (e[a] !== c) return e;
                    b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
                }
                return e
            }, A(""), i = k = null,
            function(a, b) {
                function l(a, b) {
                    var c = a.createElement("p"),
                        d = a.getElementsByTagName("head")[0] || a.documentElement;
                    return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
                }

                function m() {
                    var a = s.elements;
                    return typeof a == "string" ? a.split(" ") : a
                }

                function n(a) {
                    var b = j[a[h]];
                    return b || (b = {}, i++, a[h] = i, j[i] = b), b
                }

                function o(a, c, d) {
                    c || (c = b);
                    if (k) return c.createElement(a);
                    d || (d = n(c));
                    var g;
                    return d.cache[a] ? g = d.cache[a].cloneNode() : f.test(a) ? g = (d.cache[a] = d.createElem(a)).cloneNode() : g = d.createElem(a), g.canHaveChildren && !e.test(a) && !g.tagUrn ? d.frag.appendChild(g) : g
                }

                function p(a, c) {
                    a || (a = b);
                    if (k) return a.createDocumentFragment();
                    c = c || n(a);
                    var d = c.frag.cloneNode(),
                        e = 0,
                        f = m(),
                        g = f.length;
                    for (; e < g; e++) d.createElement(f[e]);
                    return d
                }

                function q(a, b) {
                    b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
                        return s.shivMethods ? o(c, a, b) : b.createElem(c)
                    }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/[\w\-]+/g, function(a) {
                        return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                    }) + ");return n}")(s, b.frag)
                }

                function r(a) {
                    a || (a = b);
                    var c = n(a);
                    return s.shivCSS && !g && !c.hasCSS && (c.hasCSS = !!l(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || q(a, c), a
                }
                var c = "3.7.0",
                    d = a.html5 || {},
                    e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    g, h = "_html5shiv",
                    i = 0,
                    j = {},
                    k;
                (function() {
                    try {
                        var a = b.createElement("a");
                        a.innerHTML = "<xyz></xyz>", g = "hidden" in a, k = a.childNodes.length == 1 || function() {
                            b.createElement("a");
                            var a = b.createDocumentFragment();
                            return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                        }()
                    } catch (c) {
                        g = !0, k = !0
                    }
                })();
                var s = {
                    elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: c,
                    shivCSS: d.shivCSS !== !1,
                    supportsUnknownElements: k,
                    shivMethods: d.shivMethods !== !1,
                    type: "default",
                    shivDocument: r,
                    createElement: o,
                    createDocumentFragment: p
                };
                a.html5 = s, r(b)
            }(this, b), e._version = d, e._prefixes = m, e._domPrefixes = p, e._cssomPrefixes = o, e.mq = x, e.testProp = function(a) {
                return E([a])
            }, e.testAllProps = G, e.testStyles = w, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + t.join(" ") : ""), e
    }(this, this.document),
    function(a, b, c) {
        function d(a) {
            return "[object Function]" == o.call(a)
        }

        function e(a) {
            return "string" == typeof a
        }

        function f() {}

        function g(a) {
            return !a || "loaded" == a || "complete" == a || "uninitialized" == a
        }

        function h() {
            var a = p.shift();
            q = 1, a ? a.t ? m(function() {
                ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
            }, 0) : (a(), h()) : q = 0
        }

        function i(a, c, d, e, f, i, j) {
            function k(b) {
                if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                    "img" != a && m(function() {
                        t.removeChild(l)
                    }, 50);
                    for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
                }
            }
            var j = j || B.errorTimeout,
                l = b.createElement(a),
                o = 0,
                r = 0,
                u = {
                    t: d,
                    s: c,
                    e: f,
                    a: i,
                    x: j
                };
            1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
                k.call(this, r)
            }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
        }

        function j(a, b, c, d, f) {
            return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
        }

        function k() {
            var a = B;
            return a.loader = {
                load: j,
                i: 0
            }, a
        }
        var l = b.documentElement,
            m = a.setTimeout,
            n = b.getElementsByTagName("script")[0],
            o = {}.toString,
            p = [],
            q = 0,
            r = "MozAppearance" in l.style,
            s = r && !!b.createRange().compareNode,
            t = s ? l : n.parentNode,
            l = a.opera && "[object Opera]" == o.call(a.opera),
            l = !!b.attachEvent && !l,
            u = r ? "object" : l ? "script" : "img",
            v = l ? "script" : u,
            w = Array.isArray || function(a) {
                return "[object Array]" == o.call(a)
            },
            x = [],
            y = {},
            z = {
                timeout: function(a, b) {
                    return b.length && (a.timeout = b[0]), a
                }
            },
            A, B;
        B = function(a) {
            function b(a) {
                var a = a.split("!"),
                    b = x.length,
                    c = a.pop(),
                    d = a.length,
                    c = {
                        url: c,
                        origUrl: c,
                        prefixes: a
                    },
                    e, f, g;
                for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
                for (f = 0; f < b; f++) c = x[f](c);
                return c
            }

            function g(a, e, f, g, h) {
                var i = b(a),
                    j = i.autoCallback;
                i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
                    k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
                })))
            }

            function h(a, b) {
                function c(a, c) {
                    if (a) {
                        if (e(a)) c || (j = function() {
                            var a = [].slice.call(arguments);
                            k.apply(this, a), l()
                        }), g(a, j, b, 0, h);
                        else if (Object(a) === a)
                            for (n in m = function() {
                                    var b = 0,
                                        c;
                                    for (c in a) a.hasOwnProperty(c) && b++;
                                    return b
                                }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                                var a = [].slice.call(arguments);
                                k.apply(this, a), l()
                            } : j[n] = function(a) {
                                return function() {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b), l()
                                }
                            }(k[n])), g(a[n], j, b, n, h))
                    } else !c && l()
                }
                var h = !!a.test,
                    i = a.load || a.both,
                    j = a.callback || f,
                    k = j,
                    l = a.complete || f,
                    m, n;
                c(h ? a.yep : a.nope, !!i), i && c(i)
            }
            var i, j, l = this.yepnope.loader;
            if (e(a)) g(a, 0, l, 0);
            else if (w(a))
                for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
            else Object(a) === a && h(a, l)
        }, B.addPrefix = function(a, b) {
            z[a] = b
        }, B.addFilter = function(a) {
            x.push(a)
        }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
            b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
        }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
            var k = b.createElement("script"),
                l, o, e = e || B.errorTimeout;
            k.src = a;
            for (o in d) k.setAttribute(o, d[o]);
            c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
                !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
            }, m(function() {
                l || (l = 1, c(1))
            }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
        }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
            var e = b.createElement("link"),
                j, c = i ? h : c || f;
            e.href = a, e.rel = "stylesheet", e.type = "text/css";
            for (j in d) e.setAttribute(j, d[j]);
            g || (n.parentNode.insertBefore(e, n), m(c, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    };
(function($) {
    $.fn.appear = function(fn, options) {
        var settings = $.extend({
            data: undefined,
            one: true,
            accX: 0,
            accY: 0
        }, options);
        return this.each(function() {
            var t = $(this);
            t.appeared = false;
            if (!fn) {
                t.trigger('appear', settings.data);
                return;
            }
            var w = $(window);
            var check = function() {
                if (!t.is(':visible')) {
                    t.appeared = false;
                    return;
                }
                var a = w.scrollLeft();
                var b = w.scrollTop();
                var o = t.offset();
                var x = o.left;
                var y = o.top;
                var ax = settings.accX;
                var ay = settings.accY;
                var th = t.height();
                var wh = w.height();
                var tw = t.width();
                var ww = w.width();
                if (y + th + ay >= b && y <= b + wh + ay && x + tw + ax >= a && x <= a + ww + ax) {
                    if (!t.appeared) t.trigger('appear', settings.data);
                } else {
                    t.appeared = false;
                }
            };
            var modifiedFn = function() {
                t.appeared = true;
                if (settings.one) {
                    w.unbind('scroll', check);
                    var i = $.inArray(check, $.fn.appear.checks);
                    if (i >= 0) $.fn.appear.checks.splice(i, 1);
                }
                fn.apply(this, arguments);
            };
            if (settings.one) t.one('appear', settings.data, modifiedFn);
            else t.bind('appear', settings.data, modifiedFn);
            w.scroll(check);
            $.fn.appear.checks.push(check);
            (check)();
        });
    };
    $.extend($.fn.appear, {
        checks: [],
        timeout: null,
        checkAll: function() {
            var length = $.fn.appear.checks.length;
            if (length > 0)
                while (length--)($.fn.appear.checks[length])();
        },
        run: function() {
            if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
            $.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
        }
    });
    $.each(['append', 'prepend', 'after', 'before', 'attr', 'removeAttr', 'addClass', 'removeClass', 'toggleClass', 'remove', 'css', 'show', 'hide'], function(i, n) {
        var old = $.fn[n];
        if (old) {
            $.fn[n] = function() {
                var r = old.apply(this, arguments);
                $.fn.appear.run();
                return r;
            }
        }
    });
})(jQuery);
(function($) {
    $.fn.countTo = function(options) {
        options = options || {};
        return $(this).each(function() {
            var settings = $.extend({}, $.fn.countTo.defaults, {
                from: $(this).data('from'),
                to: $(this).data('to'),
                speed: $(this).data('speed'),
                refreshInterval: $(this).data('refresh-interval'),
                decimals: $(this).data('decimals')
            }, options);
            var loops = Math.ceil(settings.speed / settings.refreshInterval),
                increment = (settings.to - settings.from) / loops;
            var self = this,
                $self = $(this),
                loopCount = 0,
                value = settings.from,
                data = $self.data('countTo') || {};
            $self.data('countTo', data);
            if (data.interval) {
                clearInterval(data.interval);
            }
            data.interval = setInterval(updateTimer, settings.refreshInterval);
            render(value);

            function updateTimer() {
                value += increment;
                loopCount++;
                render(value);
                if (typeof(settings.onUpdate) == 'function') {
                    settings.onUpdate.call(self, value);
                }
                if (loopCount >= loops) {
                    $self.removeData('countTo');
                    clearInterval(data.interval);
                    value = settings.to;
                    if (typeof(settings.onComplete) == 'function') {
                        settings.onComplete.call(self, value);
                    }
                }
            }

            function render(value) {
                var formattedValue = settings.formatter.call(self, value, settings);
                $self.text(formattedValue);
            }
        });
    };
    $.fn.countTo.defaults = {
        from: 0,
        to: 0,
        speed: 1000,
        refreshInterval: 100,
        decimals: 0,
        formatter: formatter,
        onUpdate: null,
        onComplete: null
    };

    function formatter(value, settings) {
        return value.toFixed(settings.decimals);
    }
}(jQuery));
/*!
 * jQuery Validation Plugin v1.13.0
 *
 * http://jqueryvalidation.org/
 *
 * Copyright (c) 2014 Jörn Zaefferer
 * Released under the MIT license
 */
(function(factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory);
    } else {
        factory(jQuery);
    }
}(function($) {
    $.extend($.fn, {
        validate: function(options) {
            if (!this.length) {
                if (options && options.debug && window.console) {
                    console.warn("Nothing selected, can't validate, returning nothing.");
                }
                return;
            }
            var validator = $.data(this[0], "validator");
            if (validator) {
                return validator;
            }
            this.attr("novalidate", "novalidate");
            validator = new $.validator(options, this[0]);
            $.data(this[0], "validator", validator);
            if (validator.settings.onsubmit) {
                this.validateDelegate(":submit", "click", function(event) {
                    if (validator.settings.submitHandler) {
                        validator.submitButton = event.target;
                    }
                    if ($(event.target).hasClass("cancel")) {
                        validator.cancelSubmit = true;
                    }
                    if ($(event.target).attr("formnovalidate") !== undefined) {
                        validator.cancelSubmit = true;
                    }
                });
                this.submit(function(event) {
                    if (validator.settings.debug) {
                        event.preventDefault();
                    }

                    function handle() {
                        var hidden;
                        if (validator.settings.submitHandler) {
                            if (validator.submitButton) {
                                hidden = $("<input type='hidden'/>").attr("name", validator.submitButton.name).val($(validator.submitButton).val()).appendTo(validator.currentForm);
                            }
                            validator.settings.submitHandler.call(validator, validator.currentForm, event);
                            if (validator.submitButton) {
                                hidden.remove();
                            }
                            return false;
                        }
                        return true;
                    }
                    if (validator.cancelSubmit) {
                        validator.cancelSubmit = false;
                        return handle();
                    }
                    if (validator.form()) {
                        if (validator.pendingRequest) {
                            validator.formSubmitted = true;
                            return false;
                        }
                        return handle();
                    } else {
                        validator.focusInvalid();
                        return false;
                    }
                });
            }
            return validator;
        },
        valid: function() {
            var valid, validator;
            if ($(this[0]).is("form")) {
                valid = this.validate().form();
            } else {
                valid = true;
                validator = $(this[0].form).validate();
                this.each(function() {
                    valid = validator.element(this) && valid;
                });
            }
            return valid;
        },
        removeAttrs: function(attributes) {
            var result = {},
                $element = this;
            $.each(attributes.split(/\s/), function(index, value) {
                result[value] = $element.attr(value);
                $element.removeAttr(value);
            });
            return result;
        },
        rules: function(command, argument) {
            var element = this[0],
                settings, staticRules, existingRules, data, param, filtered;
            if (command) {
                settings = $.data(element.form, "validator").settings;
                staticRules = settings.rules;
                existingRules = $.validator.staticRules(element);
                switch (command) {
                    case "add":
                        $.extend(existingRules, $.validator.normalizeRule(argument));
                        delete existingRules.messages;
                        staticRules[element.name] = existingRules;
                        if (argument.messages) {
                            settings.messages[element.name] = $.extend(settings.messages[element.name], argument.messages);
                        }
                        break;
                    case "remove":
                        if (!argument) {
                            delete staticRules[element.name];
                            return existingRules;
                        }
                        filtered = {};
                        $.each(argument.split(/\s/), function(index, method) {
                            filtered[method] = existingRules[method];
                            delete existingRules[method];
                            if (method === "required") {
                                $(element).removeAttr("aria-required");
                            }
                        });
                        return filtered;
                }
            }
            data = $.validator.normalizeRules($.extend({}, $.validator.classRules(element), $.validator.attributeRules(element), $.validator.dataRules(element), $.validator.staticRules(element)), element);
            if (data.required) {
                param = data.required;
                delete data.required;
                data = $.extend({
                    required: param
                }, data);
                $(element).attr("aria-required", "true");
            }
            if (data.remote) {
                param = data.remote;
                delete data.remote;
                data = $.extend(data, {
                    remote: param
                });
            }
            return data;
        }
    });
    $.extend($.expr[":"], {
        blank: function(a) {
            return !$.trim("" + $(a).val());
        },
        filled: function(a) {
            return !!$.trim("" + $(a).val());
        },
        unchecked: function(a) {
            return !$(a).prop("checked");
        }
    });
    $.validator = function(options, form) {
        this.settings = $.extend(true, {}, $.validator.defaults, options);
        this.currentForm = form;
        this.init();
    };
    $.validator.format = function(source, params) {
        if (arguments.length === 1) {
            return function() {
                var args = $.makeArray(arguments);
                args.unshift(source);
                return $.validator.format.apply(this, args);
            };
        }
        if (arguments.length > 2 && params.constructor !== Array) {
            params = $.makeArray(arguments).slice(1);
        }
        if (params.constructor !== Array) {
            params = [params];
        }
        $.each(params, function(i, n) {
            source = source.replace(new RegExp("\\{" + i + "\\}", "g"), function() {
                return n;
            });
        });
        return source;
    };
    $.extend($.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: true,
            errorContainer: $([]),
            errorLabelContainer: $([]),
            onsubmit: true,
            ignore: ":hidden",
            ignoreTitle: false,
            onfocusin: function(element) {
                this.lastActive = element;
                if (this.settings.focusCleanup && !this.blockFocusCleanup) {
                    if (this.settings.unhighlight) {
                        this.settings.unhighlight.call(this, element, this.settings.errorClass, this.settings.validClass);
                    }
                    this.hideThese(this.errorsFor(element));
                }
            },
            onfocusout: function(element) {
                if (!this.checkable(element) && (element.name in this.submitted || !this.optional(element))) {
                    this.element(element);
                }
            },
            onkeyup: function(element, event) {
                if (event.which === 9 && this.elementValue(element) === "") {
                    return;
                } else if (element.name in this.submitted || element === this.lastElement) {
                    this.element(element);
                }
            },
            onclick: function(element) {
                if (element.name in this.submitted) {
                    this.element(element);
                } else if (element.parentNode.name in this.submitted) {
                    this.element(element.parentNode);
                }
            },
            highlight: function(element, errorClass, validClass) {
                if (element.type === "radio") {
                    this.findByName(element.name).addClass(errorClass).removeClass(validClass);
                } else {
                    $(element).addClass(errorClass).removeClass(validClass);
                }
            },
            unhighlight: function(element, errorClass, validClass) {
                if (element.type === "radio") {
                    this.findByName(element.name).removeClass(errorClass).addClass(validClass);
                } else {
                    $(element).removeClass(errorClass).addClass(validClass);
                }
            }
        },
        setDefaults: function(settings) {
            $.extend($.validator.defaults, settings);
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date ( ISO ).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: $.validator.format("Please enter no more than {0} characters."),
            minlength: $.validator.format("Please enter at least {0} characters."),
            rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
            range: $.validator.format("Please enter a value between {0} and {1}."),
            max: $.validator.format("Please enter a value less than or equal to {0}."),
            min: $.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: false,
        prototype: {
            init: function() {
                this.labelContainer = $(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
                this.containers = $(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                var groups = (this.groups = {}),
                    rules;
                $.each(this.settings.groups, function(key, value) {
                    if (typeof value === "string") {
                        value = value.split(/\s/);
                    }
                    $.each(value, function(index, name) {
                        groups[name] = key;
                    });
                });
                rules = this.settings.rules;
                $.each(rules, function(key, value) {
                    rules[key] = $.validator.normalizeRule(value);
                });

                function delegate(event) {
                    var validator = $.data(this[0].form, "validator"),
                        eventType = "on" + event.type.replace(/^validate/, ""),
                        settings = validator.settings;
                    if (settings[eventType] && !this.is(settings.ignore)) {
                        settings[eventType].call(validator, this[0], event);
                    }
                }
                $(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, " + "[type='number'], [type='search'] ,[type='tel'], [type='url'], " + "[type='email'], [type='datetime'], [type='date'], [type='month'], " + "[type='week'], [type='time'], [type='datetime-local'], " + "[type='range'], [type='color'], [type='radio'], [type='checkbox']", "focusin focusout keyup", delegate).validateDelegate("select, option, [type='radio'], [type='checkbox']", "click", delegate);
                if (this.settings.invalidHandler) {
                    $(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler);
                }
                $(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true");
            },
            form: function() {
                this.checkForm();
                $.extend(this.submitted, this.errorMap);
                this.invalid = $.extend({}, this.errorMap);
                if (!this.valid()) {
                    $(this.currentForm).triggerHandler("invalid-form", [this]);
                }
                this.showErrors();
                return this.valid();
            },
            checkForm: function() {
                this.prepareForm();
                for (var i = 0, elements = (this.currentElements = this.elements()); elements[i]; i++) {
                    this.check(elements[i]);
                }
                return this.valid();
            },
            element: function(element) {
                var cleanElement = this.clean(element),
                    checkElement = this.validationTargetFor(cleanElement),
                    result = true;
                this.lastElement = checkElement;
                if (checkElement === undefined) {
                    delete this.invalid[cleanElement.name];
                } else {
                    this.prepareElement(checkElement);
                    this.currentElements = $(checkElement);
                    result = this.check(checkElement) !== false;
                    if (result) {
                        delete this.invalid[checkElement.name];
                    } else {
                        this.invalid[checkElement.name] = true;
                    }
                }
                $(element).attr("aria-invalid", !result);
                if (!this.numberOfInvalids()) {
                    this.toHide = this.toHide.add(this.containers);
                }
                this.showErrors();
                return result;
            },
            showErrors: function(errors) {
                if (errors) {
                    $.extend(this.errorMap, errors);
                    this.errorList = [];
                    for (var name in errors) {
                        this.errorList.push({
                            message: errors[name],
                            element: this.findByName(name)[0]
                        });
                    }
                    this.successList = $.grep(this.successList, function(element) {
                        return !(element.name in errors);
                    });
                }
                if (this.settings.showErrors) {
                    this.settings.showErrors.call(this, this.errorMap, this.errorList);
                } else {
                    this.defaultShowErrors();
                }
            },
            resetForm: function() {
                if ($.fn.resetForm) {
                    $(this.currentForm).resetForm();
                }
                this.submitted = {};
                this.lastElement = null;
                this.prepareForm();
                this.hideErrors();
                this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid");
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid);
            },
            objectLength: function(obj) {
                var count = 0,
                    i;
                for (i in obj) {
                    count++;
                }
                return count;
            },
            hideErrors: function() {
                this.hideThese(this.toHide);
            },
            hideThese: function(errors) {
                errors.not(this.containers).text("");
                this.addWrapper(errors).hide();
            },
            valid: function() {
                return this.size() === 0;
            },
            size: function() {
                return this.errorList.length;
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) {
                    try {
                        $(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin");
                    } catch (e) {}
                }
            },
            findLastActive: function() {
                var lastActive = this.lastActive;
                return lastActive && $.grep(this.errorList, function(n) {
                    return n.element.name === lastActive.name;
                }).length === 1 && lastActive;
            },
            elements: function() {
                var validator = this,
                    rulesCache = {};
                return $(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                    if (!this.name && validator.settings.debug && window.console) {
                        console.error("%o has no name assigned", this);
                    }
                    if (this.name in rulesCache || !validator.objectLength($(this).rules())) {
                        return false;
                    }
                    rulesCache[this.name] = true;
                    return true;
                });
            },
            clean: function(selector) {
                return $(selector)[0];
            },
            errors: function() {
                var errorClass = this.settings.errorClass.split(" ").join(".");
                return $(this.settings.errorElement + "." + errorClass, this.errorContext);
            },
            reset: function() {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = $([]);
                this.toHide = $([]);
                this.currentElements = $([]);
            },
            prepareForm: function() {
                this.reset();
                this.toHide = this.errors().add(this.containers);
            },
            prepareElement: function(element) {
                this.reset();
                this.toHide = this.errorsFor(element);
            },
            elementValue: function(element) {
                var val, $element = $(element),
                    type = element.type;
                if (type === "radio" || type === "checkbox") {
                    return $("input[name='" + element.name + "']:checked").val();
                } else if (type === "number" && typeof element.validity !== "undefined") {
                    return element.validity.badInput ? false : $element.val();
                }
                val = $element.val();
                if (typeof val === "string") {
                    return val.replace(/\r/g, "");
                }
                return val;
            },
            check: function(element) {
                element = this.validationTargetFor(this.clean(element));
                var rules = $(element).rules(),
                    rulesCount = $.map(rules, function(n, i) {
                        return i;
                    }).length,
                    dependencyMismatch = false,
                    val = this.elementValue(element),
                    result, method, rule;
                for (method in rules) {
                    rule = {
                        method: method,
                        parameters: rules[method]
                    };
                    try {
                        result = $.validator.methods[method].call(this, val, element, rule.parameters);
                        if (result === "dependency-mismatch" && rulesCount === 1) {
                            dependencyMismatch = true;
                            continue;
                        }
                        dependencyMismatch = false;
                        if (result === "pending") {
                            this.toHide = this.toHide.not(this.errorsFor(element));
                            return;
                        }
                        if (!result) {
                            this.formatAndAdd(element, rule);
                            return false;
                        }
                    } catch (e) {
                        if (this.settings.debug && window.console) {
                            console.log("Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e);
                        }
                        throw e;
                    }
                }
                if (dependencyMismatch) {
                    return;
                }
                if (this.objectLength(rules)) {
                    this.successList.push(element);
                }
                return true;
            },
            customDataMessage: function(element, method) {
                return $(element).data("msg" + method.charAt(0).toUpperCase() + method.substring(1).toLowerCase()) || $(element).data("msg");
            },
            customMessage: function(name, method) {
                var m = this.settings.messages[name];
                return m && (m.constructor === String ? m : m[method]);
            },
            findDefined: function() {
                for (var i = 0; i < arguments.length; i++) {
                    if (arguments[i] !== undefined) {
                        return arguments[i];
                    }
                }
                return undefined;
            },
            defaultMessage: function(element, method) {
                return this.findDefined(this.customMessage(element.name, method), this.customDataMessage(element, method), !this.settings.ignoreTitle && element.title || undefined, $.validator.messages[method], "<strong>Warning: No message defined for " + element.name + "</strong>");
            },
            formatAndAdd: function(element, rule) {
                var message = this.defaultMessage(element, rule.method),
                    theregex = /\$?\{(\d+)\}/g;
                if (typeof message === "function") {
                    message = message.call(this, rule.parameters, element);
                } else if (theregex.test(message)) {
                    message = $.validator.format(message.replace(theregex, "{$1}"), rule.parameters);
                }
                this.errorList.push({
                    message: message,
                    element: element,
                    method: rule.method
                });
                this.errorMap[element.name] = message;
                this.submitted[element.name] = message;
            },
            addWrapper: function(toToggle) {
                if (this.settings.wrapper) {
                    toToggle = toToggle.add(toToggle.parent(this.settings.wrapper));
                }
                return toToggle;
            },
            defaultShowErrors: function() {
                var i, elements, error;
                for (i = 0; this.errorList[i]; i++) {
                    error = this.errorList[i];
                    if (this.settings.highlight) {
                        this.settings.highlight.call(this, error.element, this.settings.errorClass, this.settings.validClass);
                    }
                    this.showLabel(error.element, error.message);
                }
                if (this.errorList.length) {
                    this.toShow = this.toShow.add(this.containers);
                }
                if (this.settings.success) {
                    for (i = 0; this.successList[i]; i++) {
                        this.showLabel(this.successList[i]);
                    }
                }
                if (this.settings.unhighlight) {
                    for (i = 0, elements = this.validElements(); elements[i]; i++) {
                        this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, this.settings.validClass);
                    }
                }
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show();
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements());
            },
            invalidElements: function() {
                return $(this.errorList).map(function() {
                    return this.element;
                });
            },
            showLabel: function(element, message) {
                var place, group, errorID, error = this.errorsFor(element),
                    elementID = this.idOrName(element),
                    describedBy = $(element).attr("aria-describedby");
                if (error.length) {
                    error.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
                    error.html(message);
                } else {
                    error = $("<" + this.settings.errorElement + ">").attr("id", elementID + "-error").addClass(this.settings.errorClass).html(message || "");
                    place = error;
                    if (this.settings.wrapper) {
                        place = error.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
                    }
                    if (this.labelContainer.length) {
                        this.labelContainer.append(place);
                    } else if (this.settings.errorPlacement) {
                        this.settings.errorPlacement(place, $(element));
                    } else {
                        place.insertAfter(element);
                    }
                    if (error.is("label")) {
                        error.attr("for", elementID);
                    } else if (error.parents("label[for='" + elementID + "']").length === 0) {
                        errorID = error.attr("id");
                        if (!describedBy) {
                            describedBy = errorID;
                        } else if (!describedBy.match(new RegExp("\b" + errorID + "\b"))) {
                            describedBy += " " + errorID;
                        }
                        $(element).attr("aria-describedby", describedBy);
                        group = this.groups[element.name];
                        if (group) {
                            $.each(this.groups, function(name, testgroup) {
                                if (testgroup === group) {
                                    $("[name='" + name + "']", this.currentForm).attr("aria-describedby", error.attr("id"));
                                }
                            });
                        }
                    }
                }
                if (!message && this.settings.success) {
                    error.text("");
                    if (typeof this.settings.success === "string") {
                        error.addClass(this.settings.success);
                    } else {
                        this.settings.success(error, element);
                    }
                }
                this.toShow = this.toShow.add(error);
            },
            errorsFor: function(element) {
                var name = this.idOrName(element),
                    describer = $(element).attr("aria-describedby"),
                    selector = "label[for='" + name + "'], label[for='" + name + "'] *";
                if (describer) {
                    selector = selector + ", #" + describer.replace(/\s+/g, ", #");
                }
                return this.errors().filter(selector);
            },
            idOrName: function(element) {
                return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name);
            },
            validationTargetFor: function(element) {
                if (this.checkable(element)) {
                    element = this.findByName(element.name).not(this.settings.ignore)[0];
                }
                return element;
            },
            checkable: function(element) {
                return (/radio|checkbox/i).test(element.type);
            },
            findByName: function(name) {
                return $(this.currentForm).find("[name='" + name + "']");
            },
            getLength: function(value, element) {
                switch (element.nodeName.toLowerCase()) {
                    case "select":
                        return $("option:selected", element).length;
                    case "input":
                        if (this.checkable(element)) {
                            return this.findByName(element.name).filter(":checked").length;
                        }
                }
                return value.length;
            },
            depend: function(param, element) {
                return this.dependTypes[typeof param] ? this.dependTypes[typeof param](param, element) : true;
            },
            dependTypes: {
                "boolean": function(param) {
                    return param;
                },
                "string": function(param, element) {
                    return !!$(param, element.form).length;
                },
                "function": function(param, element) {
                    return param(element);
                }
            },
            optional: function(element) {
                var val = this.elementValue(element);
                return !$.validator.methods.required.call(this, val, element) && "dependency-mismatch";
            },
            startRequest: function(element) {
                if (!this.pending[element.name]) {
                    this.pendingRequest++;
                    this.pending[element.name] = true;
                }
            },
            stopRequest: function(element, valid) {
                this.pendingRequest--;
                if (this.pendingRequest < 0) {
                    this.pendingRequest = 0;
                }
                delete this.pending[element.name];
                if (valid && this.pendingRequest === 0 && this.formSubmitted && this.form()) {
                    $(this.currentForm).submit();
                    this.formSubmitted = false;
                } else if (!valid && this.pendingRequest === 0 && this.formSubmitted) {
                    $(this.currentForm).triggerHandler("invalid-form", [this]);
                    this.formSubmitted = false;
                }
            },
            previousValue: function(element) {
                return $.data(element, "previousValue") || $.data(element, "previousValue", {
                    old: null,
                    valid: true,
                    message: this.defaultMessage(element, "remote")
                });
            }
        },
        classRuleSettings: {
            required: {
                required: true
            },
            email: {
                email: true
            },
            url: {
                url: true
            },
            date: {
                date: true
            },
            dateISO: {
                dateISO: true
            },
            number: {
                number: true
            },
            digits: {
                digits: true
            },
            creditcard: {
                creditcard: true
            }
        },
        addClassRules: function(className, rules) {
            if (className.constructor === String) {
                this.classRuleSettings[className] = rules;
            } else {
                $.extend(this.classRuleSettings, className);
            }
        },
        classRules: function(element) {
            var rules = {},
                classes = $(element).attr("class");
            if (classes) {
                $.each(classes.split(" "), function() {
                    if (this in $.validator.classRuleSettings) {
                        $.extend(rules, $.validator.classRuleSettings[this]);
                    }
                });
            }
            return rules;
        },
        attributeRules: function(element) {
            var rules = {},
                $element = $(element),
                type = element.getAttribute("type"),
                method, value;
            for (method in $.validator.methods) {
                if (method === "required") {
                    value = element.getAttribute(method);
                    if (value === "") {
                        value = true;
                    }
                    value = !!value;
                } else {
                    value = $element.attr(method);
                }
                if (/min|max/.test(method) && (type === null || /number|range|text/.test(type))) {
                    value = Number(value);
                }
                if (value || value === 0) {
                    rules[method] = value;
                } else if (type === method && type !== "range") {
                    rules[method] = true;
                }
            }
            if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
                delete rules.maxlength;
            }
            return rules;
        },
        dataRules: function(element) {
            var method, value, rules = {},
                $element = $(element);
            for (method in $.validator.methods) {
                value = $element.data("rule" + method.charAt(0).toUpperCase() + method.substring(1).toLowerCase());
                if (value !== undefined) {
                    rules[method] = value;
                }
            }
            return rules;
        },
        staticRules: function(element) {
            var rules = {},
                validator = $.data(element.form, "validator");
            if (validator.settings.rules) {
                rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
            }
            return rules;
        },
        normalizeRules: function(rules, element) {
            $.each(rules, function(prop, val) {
                if (val === false) {
                    delete rules[prop];
                    return;
                }
                if (val.param || val.depends) {
                    var keepRule = true;
                    switch (typeof val.depends) {
                        case "string":
                            keepRule = !!$(val.depends, element.form).length;
                            break;
                        case "function":
                            keepRule = val.depends.call(element, element);
                            break;
                    }
                    if (keepRule) {
                        rules[prop] = val.param !== undefined ? val.param : true;
                    } else {
                        delete rules[prop];
                    }
                }
            });
            $.each(rules, function(rule, parameter) {
                rules[rule] = $.isFunction(parameter) ? parameter(element) : parameter;
            });
            $.each(["minlength", "maxlength"], function() {
                if (rules[this]) {
                    rules[this] = Number(rules[this]);
                }
            });
            $.each(["rangelength", "range"], function() {
                var parts;
                if (rules[this]) {
                    if ($.isArray(rules[this])) {
                        rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
                    } else if (typeof rules[this] === "string") {
                        parts = rules[this].replace(/[\[\]]/g, "").split(/[\s,]+/);
                        rules[this] = [Number(parts[0]), Number(parts[1])];
                    }
                }
            });
            if ($.validator.autoCreateRanges) {
                if (rules.min && rules.max) {
                    rules.range = [rules.min, rules.max];
                    delete rules.min;
                    delete rules.max;
                }
                if (rules.minlength && rules.maxlength) {
                    rules.rangelength = [rules.minlength, rules.maxlength];
                    delete rules.minlength;
                    delete rules.maxlength;
                }
            }
            return rules;
        },
        normalizeRule: function(data) {
            if (typeof data === "string") {
                var transformed = {};
                $.each(data.split(/\s/), function() {
                    transformed[this] = true;
                });
                data = transformed;
            }
            return data;
        },
        addMethod: function(name, method, message) {
            $.validator.methods[name] = method;
            $.validator.messages[name] = message !== undefined ? message : $.validator.messages[name];
            if (method.length < 3) {
                $.validator.addClassRules(name, $.validator.normalizeRule(name));
            }
        },
        methods: {
            required: function(value, element, param) {
                if (!this.depend(param, element)) {
                    return "dependency-mismatch";
                }
                if (element.nodeName.toLowerCase() === "select") {
                    var val = $(element).val();
                    return val && val.length > 0;
                }
                if (this.checkable(element)) {
                    return this.getLength(value, element) > 0;
                }
                return $.trim(value).length > 0;
            },
            email: function(value, element) {
                return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
            },
            url: function(value, element) {
                return this.optional(element) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
            },
            date: function(value, element) {
                return this.optional(element) || !/Invalid|NaN/.test(new Date(value).toString());
            },
            dateISO: function(value, element) {
                return this.optional(element) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
            },
            number: function(value, element) {
                return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
            },
            digits: function(value, element) {
                return this.optional(element) || /^\d+$/.test(value);
            },
            creditcard: function(value, element) {
                if (this.optional(element)) {
                    return "dependency-mismatch";
                }
                if (/[^0-9 \-]+/.test(value)) {
                    return false;
                }
                var nCheck = 0,
                    nDigit = 0,
                    bEven = false,
                    n, cDigit;
                value = value.replace(/\D/g, "");
                if (value.length < 13 || value.length > 19) {
                    return false;
                }
                for (n = value.length - 1; n >= 0; n--) {
                    cDigit = value.charAt(n);
                    nDigit = parseInt(cDigit, 10);
                    if (bEven) {
                        if ((nDigit *= 2) > 9) {
                            nDigit -= 9;
                        }
                    }
                    nCheck += nDigit;
                    bEven = !bEven;
                }
                return (nCheck % 10) === 0;
            },
            minlength: function(value, element, param) {
                var length = $.isArray(value) ? value.length : this.getLength($.trim(value), element);
                return this.optional(element) || length >= param;
            },
            maxlength: function(value, element, param) {
                var length = $.isArray(value) ? value.length : this.getLength($.trim(value), element);
                return this.optional(element) || length <= param;
            },
            rangelength: function(value, element, param) {
                var length = $.isArray(value) ? value.length : this.getLength($.trim(value), element);
                return this.optional(element) || (length >= param[0] && length <= param[1]);
            },
            min: function(value, element, param) {
                return this.optional(element) || value >= param;
            },
            max: function(value, element, param) {
                return this.optional(element) || value <= param;
            },
            range: function(value, element, param) {
                return this.optional(element) || (value >= param[0] && value <= param[1]);
            },
            equalTo: function(value, element, param) {
                var target = $(param);
                if (this.settings.onfocusout) {
                    target.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                        $(element).valid();
                    });
                }
                return value === target.val();
            },
            remote: function(value, element, param) {
                if (this.optional(element)) {
                    return "dependency-mismatch";
                }
                var previous = this.previousValue(element),
                    validator, data;
                if (!this.settings.messages[element.name]) {
                    this.settings.messages[element.name] = {};
                }
                previous.originalMessage = this.settings.messages[element.name].remote;
                this.settings.messages[element.name].remote = previous.message;
                param = typeof param === "string" && {
                    url: param
                } || param;
                if (previous.old === value) {
                    return previous.valid;
                }
                previous.old = value;
                validator = this;
                this.startRequest(element);
                data = {};
                data[element.name] = value;
                $.ajax($.extend(true, {
                    url: param,
                    mode: "abort",
                    port: "validate" + element.name,
                    dataType: "json",
                    data: data,
                    context: validator.currentForm,
                    success: function(response) {
                        var valid = response === true || response === "true",
                            errors, message, submitted;
                        validator.settings.messages[element.name].remote = previous.originalMessage;
                        if (valid) {
                            submitted = validator.formSubmitted;
                            validator.prepareElement(element);
                            validator.formSubmitted = submitted;
                            validator.successList.push(element);
                            delete validator.invalid[element.name];
                            validator.showErrors();
                        } else {
                            errors = {};
                            message = response || validator.defaultMessage(element, "remote");
                            errors[element.name] = previous.message = $.isFunction(message) ? message(value) : message;
                            validator.invalid[element.name] = true;
                            validator.showErrors(errors);
                        }
                        previous.valid = valid;
                        validator.stopRequest(element, valid);
                    }
                }, param));
                return "pending";
            }
        }
    });
    $.format = function deprecated() {
        throw "$.format has been deprecated. Please use $.validator.format instead.";
    };
    var pendingRequests = {},
        ajax;
    if ($.ajaxPrefilter) {
        $.ajaxPrefilter(function(settings, _, xhr) {
            var port = settings.port;
            if (settings.mode === "abort") {
                if (pendingRequests[port]) {
                    pendingRequests[port].abort();
                }
                pendingRequests[port] = xhr;
            }
        });
    } else {
        ajax = $.ajax;
        $.ajax = function(settings) {
            var mode = ("mode" in settings ? settings : $.ajaxSettings).mode,
                port = ("port" in settings ? settings : $.ajaxSettings).port;
            if (mode === "abort") {
                if (pendingRequests[port]) {
                    pendingRequests[port].abort();
                }
                pendingRequests[port] = ajax.apply(this, arguments);
                return pendingRequests[port];
            }
            return ajax.apply(this, arguments);
        };
    }
    $.extend($.fn, {
        validateDelegate: function(delegate, type, handler) {
            return this.bind(type, function(event) {
                var target = $(event.target);
                if (target.is(delegate)) {
                    return handler.apply(target, arguments);
                }
            });
        }
    });
}));
(function($) {
    $.fn.flowtype = function(options) {
        var settings = $.extend({
                maximum: 9999,
                minimum: 1,
                maxFont: 9999,
                minFont: 1,
                fontRatio: 35
            }, options),
            changes = function(el) {
                var $el = $(el),
                    elw = $el.width(),
                    width = elw > settings.maximum ? settings.maximum : elw < settings.minimum ? settings.minimum : elw,
                    fontBase = width / settings.fontRatio,
                    fontSize = fontBase > settings.maxFont ? settings.maxFont : fontBase < settings.minFont ? settings.minFont : fontBase;
                $el.css('font-size', fontSize + 'px');
            };
        return this.each(function() {
            var that = this;
            $(window).resize(function() {
                changes(that);
            });
            changes(this);
        });
    };
}(jQuery));
/*! Magnific Popup - v0.9.9 - 2013-12-27
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2013 Dmitry Semenov; */
(function(e) {
    var t, n, i, o, r, a, s, l = "Close",
        c = "BeforeClose",
        d = "AfterClose",
        u = "BeforeAppend",
        p = "MarkupParse",
        f = "Open",
        m = "Change",
        g = "mfp",
        h = "." + g,
        v = "mfp-ready",
        C = "mfp-removing",
        y = "mfp-prevent-close",
        w = function() {},
        b = !!window.jQuery,
        I = e(window),
        x = function(e, n) {
            t.ev.on(g + e + h, n)
        },
        k = function(t, n, i, o) {
            var r = document.createElement("div");
            return r.className = "mfp-" + t, i && (r.innerHTML = i), o ? n && n.appendChild(r) : (r = e(r), n && r.appendTo(n)), r
        },
        T = function(n, i) {
            t.ev.triggerHandler(g + n, i), t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]))
        },
        E = function(n) {
            return n === s && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), s = n), t.currTemplate.closeBtn
        },
        _ = function() {
            e.magnificPopup.instance || (t = new w, t.init(), e.magnificPopup.instance = t)
        },
        S = function() {
            var e = document.createElement("p").style,
                t = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== e.transition) return !0;
            for (; t.length;)
                if (t.pop() + "Transition" in e) return !0;
            return !1
        };
    w.prototype = {
        constructor: w,
        init: function() {
            var n = navigator.appVersion;
            t.isIE7 = -1 !== n.indexOf("MSIE 7."), t.isIE8 = -1 !== n.indexOf("MSIE 8."), t.isLowIE = t.isIE7 || t.isIE8, t.isAndroid = /android/gi.test(n), t.isIOS = /iphone|ipad|ipod/gi.test(n), t.supportsTransition = S(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), o = e(document), t.popupsCache = {}
        },
        open: function(n) {
            i || (i = e(document.body));
            var r;
            if (n.isObj === !1) {
                t.items = n.items.toArray(), t.index = 0;
                var s, l = n.items;
                for (r = 0; l.length > r; r++)
                    if (s = l[r], s.parsed && (s = s.el[0]), s === n.el[0]) {
                        t.index = r;
                        break
                    }
            } else t.items = e.isArray(n.items) ? n.items : [n.items], t.index = n.index || 0;
            if (t.isOpen) return t.updateItemHTML(), void 0;
            t.types = [], a = "", t.ev = n.mainEl && n.mainEl.length ? n.mainEl.eq(0) : o, n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = k("bg").on("click" + h, function() {
                t.close()
            }), t.wrap = k("wrap").attr("tabindex", -1).on("click" + h, function(e) {
                t._checkIfClose(e.target) && t.close()
            }), t.container = k("container", t.wrap)), t.contentContainer = k("content"), t.st.preloader && (t.preloader = k("preloader", t.container, t.st.tLoading));
            var c = e.magnificPopup.modules;
            for (r = 0; c.length > r; r++) {
                var d = c[r];
                d = d.charAt(0).toUpperCase() + d.slice(1), t["init" + d].call(t)
            }
            T("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (x(p, function(e, t, n, i) {
                n.close_replaceWith = E(i.type)
            }), a += " mfp-close-btn-in") : t.wrap.append(E())), t.st.alignTop && (a += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({
                overflow: t.st.overflowY,
                overflowX: "hidden",
                overflowY: t.st.overflowY
            }) : t.wrap.css({
                top: I.scrollTop(),
                position: "absolute"
            }), (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                height: o.height(),
                position: "absolute"
            }), t.st.enableEscapeKey && o.on("keyup" + h, function(e) {
                27 === e.keyCode && t.close()
            }), I.on("resize" + h, function() {
                t.updateSize()
            }), t.st.closeOnContentClick || (a += " mfp-auto-cursor"), a && t.wrap.addClass(a);
            var u = t.wH = I.height(),
                m = {};
            if (t.fixedContentPos && t._hasScrollBar(u)) {
                var g = t._getScrollbarSize();
                g && (m.marginRight = g)
            }
            t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : m.overflow = "hidden");
            var C = t.st.mainClass;
            return t.isIE7 && (C += " mfp-ie7"), C && t._addClassToMFP(C), t.updateItemHTML(), T("BuildControls"), e("html").css(m), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || i), t._lastFocusedEl = document.activeElement, setTimeout(function() {
                t.content ? (t._addClassToMFP(v), t._setFocus()) : t.bgOverlay.addClass(v), o.on("focusin" + h, t._onFocusIn)
            }, 16), t.isOpen = !0, t.updateSize(u), T(f), n
        },
        close: function() {
            t.isOpen && (T(c), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(C), setTimeout(function() {
                t._close()
            }, t.st.removalDelay)) : t._close())
        },
        _close: function() {
            T(l);
            var n = C + " " + v + " ";
            if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + " "), t._removeClassFromMFP(n), t.fixedContentPos) {
                var i = {
                    marginRight: ""
                };
                t.isIE7 ? e("body, html").css("overflow", "") : i.overflow = "", e("html").css(i)
            }
            o.off("keyup" + h + " focusin" + h), t.ev.off(h), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, T(d)
        },
        updateSize: function(e) {
            if (t.isIOS) {
                var n = document.documentElement.clientWidth / window.innerWidth,
                    i = window.innerHeight * n;
                t.wrap.css("height", i), t.wH = i
            } else t.wH = e || I.height();
            t.fixedContentPos || t.wrap.css("height", t.wH), T("Resize")
        },
        updateItemHTML: function() {
            var n = t.items[t.index];
            t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index));
            var i = n.type;
            if (T("BeforeChange", [t.currItem ? t.currItem.type : "", i]), t.currItem = n, !t.currTemplate[i]) {
                var o = t.st[i] ? t.st[i].markup : !1;
                T("FirstMarkupParse", o), t.currTemplate[i] = o ? e(o) : !0
            }
            r && r !== n.type && t.container.removeClass("mfp-" + r + "-holder");
            var a = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, t.currTemplate[i]);
            t.appendContent(a, i), n.preloaded = !0, T(m, n), r = n.type, t.container.prepend(t.contentContainer), T("AfterChange")
        },
        appendContent: function(e, n) {
            t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[n] === !0 ? t.content.find(".mfp-close").length || t.content.append(E()) : t.content = e : t.content = "", T(u), t.container.addClass("mfp-" + n + "-holder"), t.contentContainer.append(t.content)
        },
        parseEl: function(n) {
            var i, o = t.items[n];
            if (o.tagName ? o = {
                    el: e(o)
                } : (i = o.type, o = {
                    data: o,
                    src: o.src
                }), o.el) {
                for (var r = t.types, a = 0; r.length > a; a++)
                    if (o.el.hasClass("mfp-" + r[a])) {
                        i = r[a];
                        break
                    }
                o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"))
            }
            return o.type = i || t.st.type || "inline", o.index = n, o.parsed = !0, t.items[n] = o, T("ElementParse", o), t.items[n]
        },
        addGroup: function(e, n) {
            var i = function(i) {
                i.mfpEl = this, t._openClick(i, e, n)
            };
            n || (n = {});
            var o = "click.magnificPopup";
            n.mainEl = e, n.items ? (n.isObj = !0, e.off(o).on(o, i)) : (n.isObj = !1, n.delegate ? e.off(o).on(o, n.delegate, i) : (n.items = e, e.off(o).on(o, i)))
        },
        _openClick: function(n, i, o) {
            var r = void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick;
            if (r || 2 !== n.which && !n.ctrlKey && !n.metaKey) {
                var a = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn;
                if (a)
                    if (e.isFunction(a)) {
                        if (!a.call(t)) return !0
                    } else if (a > I.width()) return !0;
                n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), o.el = e(n.mfpEl), o.delegate && (o.items = i.find(o.delegate)), t.open(o)
            }
        },
        updateStatus: function(e, i) {
            if (t.preloader) {
                n !== e && t.container.removeClass("mfp-s-" + n), i || "loading" !== e || (i = t.st.tLoading);
                var o = {
                    status: e,
                    text: i
                };
                T("UpdateStatus", o), e = o.status, i = o.text, t.preloader.html(i), t.preloader.find("a").on("click", function(e) {
                    e.stopImmediatePropagation()
                }), t.container.addClass("mfp-s-" + e), n = e
            }
        },
        _checkIfClose: function(n) {
            if (!e(n).hasClass(y)) {
                var i = t.st.closeOnContentClick,
                    o = t.st.closeOnBgClick;
                if (i && o) return !0;
                if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0]) return !0;
                if (n === t.content[0] || e.contains(t.content[0], n)) {
                    if (i) return !0
                } else if (o && e.contains(document, n)) return !0;
                return !1
            }
        },
        _addClassToMFP: function(e) {
            t.bgOverlay.addClass(e), t.wrap.addClass(e)
        },
        _removeClassFromMFP: function(e) {
            this.bgOverlay.removeClass(e), t.wrap.removeClass(e)
        },
        _hasScrollBar: function(e) {
            return (t.isIE7 ? o.height() : document.body.scrollHeight) > (e || I.height())
        },
        _setFocus: function() {
            (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
        },
        _onFocusIn: function(n) {
            return n.target === t.wrap[0] || e.contains(t.wrap[0], n.target) ? void 0 : (t._setFocus(), !1)
        },
        _parseMarkup: function(t, n, i) {
            var o;
            i.data && (n = e.extend(i.data, n)), T(p, [t, n, i]), e.each(n, function(e, n) {
                if (void 0 === n || n === !1) return !0;
                if (o = e.split("_"), o.length > 1) {
                    var i = t.find(h + "-" + o[0]);
                    if (i.length > 0) {
                        var r = o[1];
                        "replaceWith" === r ? i[0] !== n[0] && i.replaceWith(n) : "img" === r ? i.is("img") ? i.attr("src", n) : i.replaceWith('<img src="' + n + '" class="' + i.attr("class") + '" />') : i.attr(o[1], n)
                    }
                } else t.find(h + "-" + e).html(n)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === t.scrollbarSize) {
                var e = document.createElement("div");
                e.id = "mfp-sbm", e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
            }
            return t.scrollbarSize
        }
    }, e.magnificPopup = {
        instance: null,
        proto: w.prototype,
        modules: [],
        open: function(t, n) {
            return _(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = n || 0, this.instance.open(t)
        },
        close: function() {
            return e.magnificPopup.instance && e.magnificPopup.instance.close()
        },
        registerModule: function(t, n) {
            n.options && (e.magnificPopup.defaults[t] = n.options), e.extend(this.proto, n.proto), this.modules.push(t)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading..."
        }
    }, e.fn.magnificPopup = function(n) {
        _();
        var i = e(this);
        if ("string" == typeof n)
            if ("open" === n) {
                var o, r = b ? i.data("magnificPopup") : i[0].magnificPopup,
                    a = parseInt(arguments[1], 10) || 0;
                r.items ? o = r.items[a] : (o = i, r.delegate && (o = o.find(r.delegate)), o = o.eq(a)), t._openClick({
                    mfpEl: o
                }, i, r)
            } else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
        else n = e.extend(!0, {}, n), b ? i.data("magnificPopup", n) : i[0].magnificPopup = n, t.addGroup(i, n);
        return i
    };
    var P, O, z, M = "inline",
        B = function() {
            z && (O.after(z.addClass(P)).detach(), z = null)
        };
    e.magnificPopup.registerModule(M, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                t.types.push(M), x(l + "." + M, function() {
                    B()
                })
            },
            getInline: function(n, i) {
                if (B(), n.src) {
                    var o = t.st.inline,
                        r = e(n.src);
                    if (r.length) {
                        var a = r[0].parentNode;
                        a && a.tagName && (O || (P = o.hiddenClass, O = k(P), P = "mfp-" + P), z = r.after(O).detach().removeClass(P)), t.updateStatus("ready")
                    } else t.updateStatus("error", o.tNotFound), r = e("<div>");
                    return n.inlineElement = r, r
                }
                return t.updateStatus("ready"), t._parseMarkup(i, {}, n), i
            }
        }
    });
    var F, H = "ajax",
        L = function() {
            F && i.removeClass(F)
        },
        A = function() {
            L(), t.req && t.req.abort()
        };
    e.magnificPopup.registerModule(H, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                t.types.push(H), F = t.st.ajax.cursor, x(l + "." + H, A), x("BeforeChange." + H, A)
            },
            getAjax: function(n) {
                F && i.addClass(F), t.updateStatus("loading");
                var o = e.extend({
                    url: n.src,
                    success: function(i, o, r) {
                        var a = {
                            data: i,
                            xhr: r
                        };
                        T("ParseAjax", a), t.appendContent(e(a.data), H), n.finished = !0, L(), t._setFocus(), setTimeout(function() {
                            t.wrap.addClass(v)
                        }, 16), t.updateStatus("ready"), T("AjaxContentAdded")
                    },
                    error: function() {
                        L(), n.finished = n.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src))
                    }
                }, t.st.ajax.settings);
                return t.req = e.ajax(o), ""
            }
        }
    });
    var j, N = function(n) {
        if (n.data && void 0 !== n.data.title) return n.data.title;
        var i = t.st.image.titleSrc;
        if (i) {
            if (e.isFunction(i)) return i.call(t, n);
            if (n.el) return n.el.attr(i) || ""
        }
        return ""
    };
    e.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var e = t.st.image,
                    n = ".image";
                t.types.push("image"), x(f + n, function() {
                    "image" === t.currItem.type && e.cursor && i.addClass(e.cursor)
                }), x(l + n, function() {
                    e.cursor && i.removeClass(e.cursor), I.off("resize" + h)
                }), x("Resize" + n, t.resizeImage), t.isLowIE && x("AfterChange", t.resizeImage)
            },
            resizeImage: function() {
                var e = t.currItem;
                if (e && e.img && t.st.image.verticalFit) {
                    var n = 0;
                    t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - n)
                }
            },
            _onImageHasSize: function(e) {
                e.img && (e.hasSize = !0, j && clearInterval(j), e.isCheckingImgSize = !1, T("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1))
            },
            findImageSize: function(e) {
                var n = 0,
                    i = e.img[0],
                    o = function(r) {
                        j && clearInterval(j), j = setInterval(function() {
                            return i.naturalWidth > 0 ? (t._onImageHasSize(e), void 0) : (n > 200 && clearInterval(j), n++, 3 === n ? o(10) : 40 === n ? o(50) : 100 === n && o(500), void 0)
                        }, r)
                    };
                o(1)
            },
            getImage: function(n, i) {
                var o = 0,
                    r = function() {
                        n && (n.img[0].complete ? (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, T("ImageLoadComplete")) : (o++, 200 > o ? setTimeout(r, 100) : a()))
                    },
                    a = function() {
                        n && (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("error", s.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0)
                    },
                    s = t.st.image,
                    l = i.find(".mfp-img");
                if (l.length) {
                    var c = document.createElement("img");
                    c.className = "mfp-img", n.img = e(c).on("load.mfploader", r).on("error.mfploader", a), c.src = n.src, l.is("img") && (n.img = n.img.clone()), c = n.img[0], c.naturalWidth > 0 ? n.hasSize = !0 : c.width || (n.hasSize = !1)
                }
                return t._parseMarkup(i, {
                    title: N(n),
                    img_replaceWith: n.img
                }, n), t.resizeImage(), n.hasSize ? (j && clearInterval(j), n.loadError ? (i.addClass("mfp-loading"), t.updateStatus("error", s.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"), t.updateStatus("ready")), i) : (t.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass("mfp-loading"), t.findImageSize(n)), i)
            }
        }
    });
    var W, R = function() {
        return void 0 === W && (W = void 0 !== document.createElement("p").style.MozTransform), W
    };
    e.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(e) {
                return e.is("img") ? e : e.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var e, n = t.st.zoom,
                    i = ".zoom";
                if (n.enabled && t.supportsTransition) {
                    var o, r, a = n.duration,
                        s = function(e) {
                            var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                i = "all " + n.duration / 1e3 + "s " + n.easing,
                                o = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                r = "transition";
                            return o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = i, t.css(o), t
                        },
                        d = function() {
                            t.content.css("visibility", "visible")
                        };
                    x("BuildControls" + i, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(o), t.content.css("visibility", "hidden"), e = t._getItemToZoom(), !e) return d(), void 0;
                            r = s(e), r.css(t._getOffset()), t.wrap.append(r), o = setTimeout(function() {
                                r.css(t._getOffset(!0)), o = setTimeout(function() {
                                    d(), setTimeout(function() {
                                        r.remove(), e = r = null, T("ZoomAnimationEnded")
                                    }, 16)
                                }, a)
                            }, 16)
                        }
                    }), x(c + i, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(o), t.st.removalDelay = a, !e) {
                                if (e = t._getItemToZoom(), !e) return;
                                r = s(e)
                            }
                            r.css(t._getOffset(!0)), t.wrap.append(r), t.content.css("visibility", "hidden"), setTimeout(function() {
                                r.css(t._getOffset())
                            }, 16)
                        }
                    }), x(l + i, function() {
                        t._allowZoom() && (d(), r && r.remove(), e = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === t.currItem.type
            },
            _getItemToZoom: function() {
                return t.currItem.hasSize ? t.currItem.img : !1
            },
            _getOffset: function(n) {
                var i;
                i = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
                var o = i.offset(),
                    r = parseInt(i.css("padding-top"), 10),
                    a = parseInt(i.css("padding-bottom"), 10);
                o.top -= e(window).scrollTop() - r;
                var s = {
                    width: i.width(),
                    height: (b ? i.innerHeight() : i[0].offsetHeight) - a - r
                };
                return R() ? s["-moz-transform"] = s.transform = "translate(" + o.left + "px," + o.top + "px)" : (s.left = o.left, s.top = o.top), s
            }
        }
    });
    var Z = "iframe",
        q = "//about:blank",
        D = function(e) {
            if (t.currTemplate[Z]) {
                var n = t.currTemplate[Z].find("iframe");
                n.length && (e || (n[0].src = q), t.isIE8 && n.css("display", e ? "block" : "none"))
            }
        };
    e.magnificPopup.registerModule(Z, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                t.types.push(Z), x("BeforeChange", function(e, t, n) {
                    t !== n && (t === Z ? D() : n === Z && D(!0))
                }), x(l + "." + Z, function() {
                    D()
                })
            },
            getIframe: function(n, i) {
                var o = n.src,
                    r = t.st.iframe;
                e.each(r.patterns, function() {
                    return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1) : void 0
                });
                var a = {};
                return r.srcAction && (a[r.srcAction] = o), t._parseMarkup(i, a, n), t.updateStatus("ready"), i
            }
        }
    });
    var K = function(e) {
            var n = t.items.length;
            return e > n - 1 ? e - n : 0 > e ? n + e : e
        },
        Y = function(e, t, n) {
            return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n)
        };
    e.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var n = t.st.gallery,
                    i = ".mfp-gallery",
                    r = Boolean(e.fn.mfpFastClick);
                return t.direction = !0, n && n.enabled ? (a += " mfp-gallery", x(f + i, function() {
                    n.navigateByImgClick && t.wrap.on("click" + i, ".mfp-img", function() {
                        return t.items.length > 1 ? (t.next(), !1) : void 0
                    }), o.on("keydown" + i, function(e) {
                        37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
                    })
                }), x("UpdateStatus" + i, function(e, n) {
                    n.text && (n.text = Y(n.text, t.currItem.index, t.items.length))
                }), x(p + i, function(e, i, o, r) {
                    var a = t.items.length;
                    o.counter = a > 1 ? Y(n.tCounter, r.index, a) : ""
                }), x("BuildControls" + i, function() {
                    if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
                        var i = n.arrowMarkup,
                            o = t.arrowLeft = e(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(y),
                            a = t.arrowRight = e(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(y),
                            s = r ? "mfpFastClick" : "click";
                        o[s](function() {
                            t.prev()
                        }), a[s](function() {
                            t.next()
                        }), t.isIE7 && (k("b", o[0], !1, !0), k("a", o[0], !1, !0), k("b", a[0], !1, !0), k("a", a[0], !1, !0)), t.container.append(o.add(a))
                    }
                }), x(m + i, function() {
                    t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function() {
                        t.preloadNearbyImages(), t._preloadTimeout = null
                    }, 16)
                }), x(l + i, function() {
                    o.off(i), t.wrap.off("click" + i), t.arrowLeft && r && t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(), t.arrowRight = t.arrowLeft = null
                }), void 0) : !1
            },
            next: function() {
                t.direction = !0, t.index = K(t.index + 1), t.updateItemHTML()
            },
            prev: function() {
                t.direction = !1, t.index = K(t.index - 1), t.updateItemHTML()
            },
            goTo: function(e) {
                t.direction = e >= t.index, t.index = e, t.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var e, n = t.st.gallery.preload,
                    i = Math.min(n[0], t.items.length),
                    o = Math.min(n[1], t.items.length);
                for (e = 1;
                    (t.direction ? o : i) >= e; e++) t._preloadItem(t.index + e);
                for (e = 1;
                    (t.direction ? i : o) >= e; e++) t._preloadItem(t.index - e)
            },
            _preloadItem: function(n) {
                if (n = K(n), !t.items[n].preloaded) {
                    var i = t.items[n];
                    i.parsed || (i = t.parseEl(n)), T("LazyLoad", i), "image" === i.type && (i.img = e('<img class="mfp-img" />').on("load.mfploader", function() {
                        i.hasSize = !0
                    }).on("error.mfploader", function() {
                        i.hasSize = !0, i.loadError = !0, T("LazyLoadError", i)
                    }).attr("src", i.src)), i.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    e.magnificPopup.registerModule(U, {
            options: {
                replaceSrc: function(e) {
                    return e.src.replace(/\.\w+$/, function(e) {
                        return "@2x" + e
                    })
                },
                ratio: 1
            },
            proto: {
                initRetina: function() {
                    if (window.devicePixelRatio > 1) {
                        var e = t.st.retina,
                            n = e.ratio;
                        n = isNaN(n) ? n() : n, n > 1 && (x("ImageHasSize." + U, function(e, t) {
                            t.img.css({
                                "max-width": t.img[0].naturalWidth / n,
                                width: "100%"
                            })
                        }), x("ElementParse." + U, function(t, i) {
                            i.src = e.replaceSrc(i, n)
                        }))
                    }
                }
            }
        }),
        function() {
            var t = 1e3,
                n = "ontouchstart" in window,
                i = function() {
                    I.off("touchmove" + r + " touchend" + r)
                },
                o = "mfpFastClick",
                r = "." + o;
            e.fn.mfpFastClick = function(o) {
                return e(this).each(function() {
                    var a, s = e(this);
                    if (n) {
                        var l, c, d, u, p, f;
                        s.on("touchstart" + r, function(e) {
                            u = !1, f = 1, p = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0], c = p.clientX, d = p.clientY, I.on("touchmove" + r, function(e) {
                                p = e.originalEvent ? e.originalEvent.touches : e.touches, f = p.length, p = p[0], (Math.abs(p.clientX - c) > 10 || Math.abs(p.clientY - d) > 10) && (u = !0, i())
                            }).on("touchend" + r, function(e) {
                                i(), u || f > 1 || (a = !0, e.preventDefault(), clearTimeout(l), l = setTimeout(function() {
                                    a = !1
                                }, t), o())
                            })
                        })
                    }
                    s.on("click" + r, function() {
                        a || o()
                    })
                })
            }, e.fn.destroyMfpFastClick = function() {
                e(this).off("touchstart" + r + " click" + r), n && I.off("touchmove" + r + " touchend" + r)
            }
        }(), _()
})(window.jQuery || window.Zepto);
/*!
 * Retina.js v1.3.0
 *
 * Copyright 2014 Imulus, LLC
 * Released under the MIT license
 *
 * Retina.js is an open source script that makes it easy to serve
 * high-resolution images to devices with retina displays.
 */
! function() {
    function a() {}

    function b(a) {
        return f.retinaImageSuffix + a
    }

    function c(a, c) {
        if (this.path = a || "", "undefined" != typeof c && null !== c) this.at_2x_path = c, this.perform_check = !1;
        else {
            if (void 0 !== document.createElement) {
                var d = document.createElement("a");
                d.href = this.path, d.pathname = d.pathname.replace(g, b), this.at_2x_path = d.href
            } else {
                var e = this.path.split("?");
                e[0] = e[0].replace(g, b), this.at_2x_path = e.join("?")
            }
            this.perform_check = !0
        }
    }

    function d(a) {
        this.el = a, this.path = new c(this.el.getAttribute("src"), this.el.getAttribute("data-at2x"));
        var b = this;
        this.path.check_2x_variant(function(a) {
            a && b.swap()
        })
    }
    var e = "undefined" == typeof exports ? window : exports,
        f = {
            retinaImageSuffix: "@2x",
            check_mime_type: !0,
            force_original_dimensions: !0
        };
    e.Retina = a, a.configure = function(a) {
        null === a && (a = {});
        for (var b in a) a.hasOwnProperty(b) && (f[b] = a[b])
    }, a.init = function(a) {
        null === a && (a = e);
        var b = a.onload || function() {};
        a.onload = function() {
            var a, c, e = document.getElementsByTagName("img"),
                f = [];
            for (a = 0; a < e.length; a += 1) c = e[a], c.getAttributeNode("data-no-retina") || f.push(new d(c));
            b()
        }
    }, a.isRetina = function() {
        var a = "(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";
        return e.devicePixelRatio > 1 ? !0 : e.matchMedia && e.matchMedia(a).matches ? !0 : !1
    };
    var g = /\.\w+$/;
    e.RetinaImagePath = c, c.confirmed_paths = [], c.prototype.is_external = function() {
        return !(!this.path.match(/^https?\:/i) || this.path.match("//" + document.domain))
    }, c.prototype.check_2x_variant = function(a) {
        var b, d = this;
        return this.is_external() ? a(!1) : this.perform_check || "undefined" == typeof this.at_2x_path || null === this.at_2x_path ? this.at_2x_path in c.confirmed_paths ? a(!0) : (b = new XMLHttpRequest, b.open("HEAD", this.at_2x_path), b.onreadystatechange = function() {
            if (4 !== b.readyState) return a(!1);
            if (b.status >= 200 && b.status <= 399) {
                if (f.check_mime_type) {
                    var e = b.getResponseHeader("Content-Type");
                    if (null === e || !e.match(/^image/i)) return a(!1)
                }
                return c.confirmed_paths.push(d.at_2x_path), a(!0)
            }
            return a(!1)
        }, b.send(), void 0) : a(!0)
    }, e.RetinaImage = d, d.prototype.swap = function(a) {
        function b() {
            c.el.complete ? (f.force_original_dimensions && (c.el.setAttribute("width", c.el.offsetWidth), c.el.setAttribute("height", c.el.offsetHeight)), c.el.setAttribute("src", a)) : setTimeout(b, 5)
        }
        "undefined" == typeof a && (a = this.path.at_2x_path);
        var c = this;
        b()
    }, a.isRetina() && a.init(e)
}();
(function($) {
    $.fn.hoverIntent = function(handlerIn, handlerOut, selector) {
        var cfg = {
            interval: 100,
            sensitivity: 7,
            timeout: 0
        };
        if (typeof handlerIn === "object") {
            cfg = $.extend(cfg, handlerIn);
        } else if ($.isFunction(handlerOut)) {
            cfg = $.extend(cfg, {
                over: handlerIn,
                out: handlerOut,
                selector: selector
            });
        } else {
            cfg = $.extend(cfg, {
                over: handlerIn,
                out: handlerIn,
                selector: handlerOut
            });
        }
        var cX, cY, pX, pY;
        var track = function(ev) {
            cX = ev.pageX;
            cY = ev.pageY;
        };
        var compare = function(ev, ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            if ((Math.abs(pX - cX) + Math.abs(pY - cY)) < cfg.sensitivity) {
                $(ob).off("mousemove.hoverIntent", track);
                ob.hoverIntent_s = 1;
                return cfg.over.apply(ob, [ev]);
            } else {
                pX = cX;
                pY = cY;
                ob.hoverIntent_t = setTimeout(function() {
                    compare(ev, ob);
                }, cfg.interval);
            }
        };
        var delay = function(ev, ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            ob.hoverIntent_s = 0;
            return cfg.out.apply(ob, [ev]);
        };
        var handleHover = function(e) {
            var ev = jQuery.extend({}, e);
            var ob = this;
            if (ob.hoverIntent_t) {
                ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            }
            if (e.type == "mouseenter") {
                pX = ev.pageX;
                pY = ev.pageY;
                $(ob).on("mousemove.hoverIntent", track);
                if (ob.hoverIntent_s != 1) {
                    ob.hoverIntent_t = setTimeout(function() {
                        compare(ev, ob);
                    }, cfg.interval);
                }
            } else {
                $(ob).off("mousemove.hoverIntent", track);
                if (ob.hoverIntent_s == 1) {
                    ob.hoverIntent_t = setTimeout(function() {
                        delay(ev, ob);
                    }, cfg.timeout);
                }
            }
        };
        return this.on({
            'mouseenter.hoverIntent': handleHover,
            'mouseleave.hoverIntent': handleHover
        }, cfg.selector);
    };
})(jQuery);
/*
 * jQuery Superfish Menu Plugin - v1.7.5
 * Copyright (c) 2014 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *	http://www.opensource.org/licenses/mit-license.php
 *	http://www.gnu.org/licenses/gpl.html
 */
;
(function(e, s) {
    "use strict";
    var n = function() {
        var n = {
                bcClass: "sf-breadcrumb",
                menuClass: "sf-js-enabled",
                anchorClass: "sf-with-ul",
                menuArrowClass: "sf-arrows"
            },
            o = function() {
                var n = /iPhone|iPad|iPod/i.test(navigator.userAgent);
                return n && e(s).load(function() {
                    e("body").children().on("click", e.noop)
                }), n
            }(),
            t = function() {
                var e = document.documentElement.style;
                return "behavior" in e && "fill" in e && /iemobile/i.test(navigator.userAgent)
            }(),
            i = function() {
                return !!s.PointerEvent
            }(),
            r = function(e, s) {
                var o = n.menuClass;
                s.cssArrows && (o += " " + n.menuArrowClass), e.toggleClass(o)
            },
            a = function(s, o) {
                return s.find("li." + o.pathClass).slice(0, o.pathLevels).addClass(o.hoverClass + " " + n.bcClass).filter(function() {
                    return e(this).children(o.popUpSelector).hide().show().length
                }).removeClass(o.pathClass)
            },
            l = function(e) {
                e.children("a").toggleClass(n.anchorClass)
            },
            h = function(e) {
                var s = e.css("ms-touch-action"),
                    n = e.css("touch-action");
                n = n || s, n = "pan-y" === n ? "auto" : "pan-y", e.css({
                    "ms-touch-action": n,
                    "touch-action": n
                })
            },
            u = function(s, n) {
                var r = "li:has(" + n.popUpSelector + ")";
                e.fn.hoverIntent && !n.disableHI ? s.hoverIntent(c, f, r) : s.on("mouseenter.superfish", r, c).on("mouseleave.superfish", r, f);
                var a = "MSPointerDown.superfish";
                i && (a = "pointerdown.superfish"), o || (a += " touchend.superfish"), t && (a += " mousedown.superfish"), s.on("focusin.superfish", "li", c).on("focusout.superfish", "li", f).on(a, "a", n, p)
            },
            p = function(s) {
                var n = e(this),
                    o = n.siblings(s.data.popUpSelector);
                o.length > 0 && o.is(":hidden") && (n.one("click.superfish", !1), "MSPointerDown" === s.type || "pointerdown" === s.type ? n.trigger("focus") : e.proxy(c, n.parent("li"))())
            },
            c = function() {
                var s = e(this),
                    n = m(s);
                clearTimeout(n.sfTimer), s.siblings().superfish("hide").end().superfish("show")
            },
            f = function() {
                var s = e(this),
                    n = m(s);
                o ? e.proxy(d, s, n)() : (clearTimeout(n.sfTimer), n.sfTimer = setTimeout(e.proxy(d, s, n), n.delay))
            },
            d = function(s) {
                s.retainPath = e.inArray(this[0], s.$path) > -1, this.superfish("hide"), this.parents("." + s.hoverClass).length || (s.onIdle.call(v(this)), s.$path.length && e.proxy(c, s.$path)())
            },
            v = function(e) {
                return e.closest("." + n.menuClass)
            },
            m = function(e) {
                return v(e).data("sf-options")
            };
        return {
            hide: function(s) {
                if (this.length) {
                    var n = this,
                        o = m(n);
                    if (!o) return this;
                    var t = o.retainPath === !0 ? o.$path : "",
                        i = n.find("li." + o.hoverClass).add(this).not(t).removeClass(o.hoverClass).children(o.popUpSelector),
                        r = o.speedOut;
                    s && (i.show(), r = 0), o.retainPath = !1, o.onBeforeHide.call(i), i.stop(!0, !0).animate(o.animationOut, r, function() {
                        var s = e(this);
                        o.onHide.call(s)
                    })
                }
                return this
            },
            show: function() {
                var e = m(this);
                if (!e) return this;
                var s = this.addClass(e.hoverClass),
                    n = s.children(e.popUpSelector);
                return e.onBeforeShow.call(n), n.stop(!0, !0).animate(e.animation, e.speed, function() {
                    e.onShow.call(n)
                }), this
            },
            destroy: function() {
                return this.each(function() {
                    var s, o = e(this),
                        t = o.data("sf-options");
                    return t ? (s = o.find(t.popUpSelector).parent("li"), clearTimeout(t.sfTimer), r(o, t), l(s), h(o), o.off(".superfish").off(".hoverIntent"), s.children(t.popUpSelector).attr("style", function(e, s) {
                        return s.replace(/display[^;]+;?/g, "")
                    }), t.$path.removeClass(t.hoverClass + " " + n.bcClass).addClass(t.pathClass), o.find("." + t.hoverClass).removeClass(t.hoverClass), t.onDestroy.call(o), o.removeData("sf-options"), void 0) : !1
                })
            },
            init: function(s) {
                return this.each(function() {
                    var o = e(this);
                    if (o.data("sf-options")) return !1;
                    var t = e.extend({}, e.fn.superfish.defaults, s),
                        i = o.find(t.popUpSelector).parent("li");
                    t.$path = a(o, t), o.data("sf-options", t), r(o, t), l(i), h(o), u(o, t), i.not("." + n.bcClass).superfish("hide", !0), t.onInit.call(this)
                })
            }
        }
    }();
    e.fn.superfish = function(s) {
        return n[s] ? n[s].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof s && s ? e.error("Method " + s + " does not exist on jQuery.fn.superfish") : n.init.apply(this, arguments)
    }, e.fn.superfish.defaults = {
        popUpSelector: "ul,.sf-mega",
        hoverClass: "sfHover",
        pathClass: "overrideThisToUse",
        pathLevels: 1,
        delay: 800,
        animation: {
            opacity: "show"
        },
        animationOut: {
            opacity: "hide"
        },
        speed: "normal",
        speedOut: "fast",
        cssArrows: !0,
        disableHI: !1,
        onInit: e.noop,
        onBeforeShow: e.noop,
        onShow: e.noop,
        onBeforeHide: e.noop,
        onHide: e.noop,
        onIdle: e.noop,
        onDestroy: e.noop
    }
})(jQuery, window);
(function($) {
    var $window = $(window);
    var windowHeight = $window.height();
    $window.resize(function() {
        windowHeight = $window.height();
    });
    $.fn.parallax = function(xpos, speedFactor, outerHeight) {
        var $this = $(this);
        var getHeight;
        var firstTop;
        var paddingTop = 0;
        $this.each(function() {
            firstTop = $this.offset().top;
        });
        if (outerHeight) {
            getHeight = function(jqo) {
                return jqo.outerHeight(true);
            };
        } else {
            getHeight = function(jqo) {
                return jqo.height();
            };
        }
        if (arguments.length < 1 || xpos === null) xpos = "50%";
        if (arguments.length < 2 || speedFactor === null) speedFactor = 0.1;
        if (arguments.length < 3 || outerHeight === null) outerHeight = true;

        function update() {
            var pos = $window.scrollTop();
            $this.each(function() {
                var $element = $(this);
                var top = $element.offset().top;
                var height = getHeight($element);
                if (top + height < pos || top > pos + windowHeight) {
                    return;
                }
                $this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px");
            });
        }
        $window.bind('scroll', update).resize(update);
        update();
    };
})(jQuery);
(function($) {
    $.vglacier_utilities = $.vglacier_utilities || {};
    $(document).ready(function() {
        $(window).load(function() {
            $("body").removeClass("preload");
        });
        var delay = 0,
            setTimeoutConst;
        if ($(window).width() >= 768) {
            $('.main-navigation .navbar-main-menu').superfish({
                popUpSelector: 'ul',
                delay: 500,
                speed: 'fast'
            });
        }
        $(window).scroll(function() {
            if ($(this).scrollTop() != 0) {
                $(".scrollToTop").fadeIn();
            } else {
                $(".scrollToTop").fadeOut();
            }
        });
        $(".scrollToTop").click(function() {
            $("body,html").animate({
                scrollTop: 0
            }, 800);
        });
        if (($("[data-animation-effect]").length > 0)) {
            $("[data-animation-effect]").each(function() {
                var $this = $(this),
                    animationEffect = $this.attr("data-animation-effect");
                if (Modernizr.mq('only all and (min-width: 768px)') && Modernizr.csstransitions) {
                    $this.appear(function() {
                        var delay = ($this.attr("data-effect-delay") ? $this.attr("data-effect-delay") : 1);
                        if (delay > 1) $this.css("effect-delay", delay + "ms");
                        setTimeout(function() {
                            $this.addClass('animated object-visible ' + animationEffect);
                        }, delay);
                    }, {
                        accX: 0,
                        accY: -130
                    });
                } else {
                    $this.addClass('object-visible');
                }
            });
        };
        $(window).load(function() {
            $(".fullwidth .caption h1").flowtype({
                fontRatio: 13,
                minFont: 28,
                maxFont: 36
            });
            $(".fullwidth .caption p").flowtype({
                fontRatio: 34,
                minFont: 16,
                maxFont: 22,
                minimum: 490
            });
        });
        var navigationHeight = $(".main-navigation.fixed").outerHeight(),
            sliderTopHeight = $(".slider-top").outerHeight(),
            headerTopHeight = $(".header-top").outerHeight(),
            headerHeight = $("header.header").outerHeight(),
            homeSection = $(".slider-top");
        $(window).scroll(function() {
            if (($(".main-navigation.fixed").length > 0)) {
                if (($(this).scrollTop() > navigationHeight + headerHeight + headerTopHeight + sliderTopHeight) && ($(window).width() > 767)) {
                    $("body").addClass("fixed-header-on");
                    $(".main-navigation.fixed").addClass('animated object-visible fade-in-down');
                    if (!$(".main-navigation").hasClass('transparent')) {
                        $("section.main").css("marginTop", (navigationHeight) + "px");
                    }
                } else {
                    $("body").removeClass("fixed-header-on");
                    $("section.main").css("marginTop", (0) + "px");
                    $(".banner").css("marginTop", (0) + "px");
                    $(".main-navigation.fixed").removeClass('animated object-visible fade-in-down');
                }
            };
            effectsHomeSection(homeSection, this);
        });

        function effectsHomeSection(homeSection, scrollTopp) {
            if (homeSection.length > 0) {
                var homeSHeight = homeSection.height();
                var topScroll = $(document).scrollTop();
                if ((homeSection.hasClass('effect-parallax')) && ($(scrollTopp).scrollTop() <= homeSHeight)) {
                    homeSection.css('top', (topScroll * 0.55));
                }
                if (homeSection.hasClass('effect-fade') && ($(scrollTopp).scrollTop() <= homeSHeight)) {
                    homeSection.css('opacity', (1 - topScroll / homeSection.height() * 1));
                }
            }
        };
        if ($(".slider-top").length > 0) {
            $(".slider-top").css("height", sliderTopHeight);
        }
        if ($("#map-canvas").length > 0) {
            var map, myLatlng, myZoom, marker;
            myLatlng = new google.maps.LatLng(41.38791700, 2.16991870);
            myZoom = 12;

            function initialize() {
                var mapOptions = {
                    zoom: myZoom,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    center: myLatlng,
                    scrollwheel: false
                };
                map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
                marker = new google.maps.Marker({
                    map: map,
                    draggable: true,
                    position: myLatlng
                });
                google.maps.event.addDomListener(window, "resize", function() {
                    map.setCenter(myLatlng);
                });
            }
            google.maps.event.addDomListener(window, "load", initialize);
        }
        if ($("#footer-form").length > 0) {
            $("#footer-form").validate({
                submitHandler: function(form) {
                    var submitButton = $(this.submitButton);
                    submitButton.button("loading");
                    $.ajax({
                        type: "POST",
                        url: "php/contact-form.php",
                        data: {
                            "name": $("#footer-form #name2").val(),
                            "email": $("#footer-form #email2").val(),
                            "subject": "none",
                            "message": $("#footer-form #message2").val()
                        },
                        dataType: "json",
                        success: function(data) {
                            if (data.response == "success") {
                                $("#footer-contactSuccess").removeClass("hidden");
                                $("#footer-contactError").addClass("hidden");
                                $("#footer-form .form-control").val("").blur().parent().removeClass("has-success").removeClass("has-error").find("label.error").remove();
                            } else {
                                $("#footer-contactError").removeClass("hidden");
                                $("#footer-contactSuccess").addClass("hidden");
                            }
                        },
                        complete: function() {
                            submitButton.button("reset");
                        }
                    });
                },
                errorPlacement: function(error, element) {
                    error.insertBefore(element);
                },
                onkeyup: false,
                onclick: false,
                rules: {
                    name2: {
                        required: true,
                        minlength: 2
                    },
                    email2: {
                        required: true,
                        email: true
                    },
                    message2: {
                        required: true
                    }
                },
                messages: {
                    name2: {
                        required: "Please specify your name",
                        minlength: "Your name must be longer than 2 characters"
                    },
                    email2: {
                        required: "We need your email address to contact you",
                        email: "Please enter a valid email address e.g. name@domain.com"
                    },
                    message2: {
                        required: "Please enter a message"
                    }
                },
                errorElement: "span",
                highlight: function(element) {
                    $(element).parent().removeClass("has-success").addClass("has-error");
                    $(element).siblings("label").addClass("hide");
                },
                success: function(element) {
                    $(element).parent().removeClass("has-error").addClass("has-success");
                    $(element).siblings("label").removeClass("hide");
                }
            });
        }
        if ($("#comment-form").length > 0) {
            $("#comment-form").validate({
                errorPlacement: function(error, element) {
                    error.insertBefore(element);
                },
                onkeyup: false,
                onclick: false,
                rules: {
                    author: {
                        required: true,
                        minlength: 2
                    },
                    email: {
                        required: true
                    },
                    comment: {
                        required: true
                    }
                },
                messages: {
                    author: {
                        required: "Please specify your name",
                        minlength: "Your name must be longer than 2 characters"
                    },
                    email: {
                        required: "Please enter a subject"
                    },
                    comment: {
                        required: "Please enter a message"
                    }
                },
                errorElement: "span",
                highlight: function(element) {
                    $(element).parent().removeClass("has-success").addClass("has-error");
                    $(element).siblings("label").addClass("hide");
                },
                success: function(element) {
                    $(element).parent().removeClass("has-error").addClass("has-success");
                    $(element).siblings("label").removeClass("hide");
                }
            });
        }
        $('input#submit').addClass('btn btn-default');
        if ($(".pricing-tables").length > 0) {
            $(".plan .pt-popover").popover({
                trigger: 'hover'
            });
        };
        if ($("#affix").length > 0) {
            $(window).load(function() {
                var affixBottom = $("footer").outerHeight(true) + $(".subfooter").outerHeight(true) + $(".blogpost footer").outerHeight(true),
                    affixTop = $("#affix").offset().top;
                if ($(".comments").length > 0) {
                    affixBottom = affixBottom + $(".comments").outerHeight(true);
                }
                if ($(".comments-form").length > 0) {
                    affixBottom = affixBottom + $(".comments-form").outerHeight(true);
                }
                if ($(".footer-top").length > 0) {
                    affixBottom = affixBottom + $(".footer-top").outerHeight(true);
                }
                if ($(".related-posts").length > 0) {
                    affixBottom = affixBottom + $(".related-posts").outerHeight(true);
                }
                if ($(".separator").length > 0) {
                    affixBottom = affixBottom + $(".separator").outerHeight(true);
                }
                if ($(".header.fixed").length > 0) {
                    $("#affix").affix({
                        offset: {
                            top: affixTop - 150,
                            bottom: affixBottom + 100
                        }
                    });
                } else {
                    $("#affix").affix({
                        offset: {
                            top: affixTop - 65,
                            bottom: affixBottom + 100
                        }
                    });
                }
            });
        }
        if ($(".owl-carousel.content-slider-with-controls-bottom").length > 0) {
            $(".owl-carousel.content-slider-with-controls-bottom").owlCarousel({
                singleItem: true,
                autoPlay: true,
                navigation: false,
                navigationText: false,
                pagination: true
            });
        }
        $(".woocommerce").find('input[type=text]').addClass('form-control');
        $(".woocommerce").find('input[type=search]').addClass('form-control');
        $(".woocommerce").find('input[type=password]').addClass('form-control');
        $(".woocommerce").find('.shipping-calculator p').removeClass('form-row');
        $(".woocommerce").find('select').addClass('form-control');
        $(".woocommerce").find('input[type=submit]').removeClass('button');
        $(".woocommerce").find('input[type=submit]').addClass('btn btn-default');
        $(".woocommerce").find('button').removeClass('button');
        $(".woocommerce").find('button:not(.navbar-toggle)').addClass('btn btn-default');
        $(".woocommerce").find('input[type=email]').addClass('form-control');
        $(".checkout-button ").removeClass('btn-default button');
        $(".checkout-button ").addClass('btn btn-danger');
        $('#calc_shipping_country').on('change', function() {
            var $this = $(this);
            $this.parents('.shipping-calculator').find('input[type=text]').addClass('form-control');
            $this.parents('.shipping-calculator').find('select').addClass('form-control');
        });
        $(document).on('click', '.add_to_cart_button.product_type_simple', function() {
            var $this = $(this);
            result_box = $this.parents('.listing-item-body').find('.spinner-ajax');
            if (result_box.length > 0) {
                result_box.find('i').show();
            } else {
                result_box = false;
            }
        });
        var result_box = false;
        $(document).ajaxComplete(function(event, jqXHR, ajaxOptions) {
            if (jqXHR.responseText.indexOf('div.widget_shopping_cart_content') !== -1) {
                $.ajax({
                    success: function(response) {
                        if (result_box !== false) {
                            result_box.find('i').hide();
                        }
                    }
                });
            }
        });
        $('[data-toggle="tooltip"]').tooltip();
        resizeColumnsht();
        $(window).smartresize(function() {
            resizeColumnsht();
        });

        function resizeColumnsht() {
            $('.container-fluid.auto-height .row').each(function() {
                var element = $(this),
                    childElements = element.children("[class^=col-]"),
                    tallest = 0;
                element.imagesLoaded(function() {
                    childElements.each(function() {
                        var childElement = $(this);
                        if (childElement.outerHeight() > tallest) {
                            tallest = childElement.outerHeight();
                        }
                    });
                    childElements.css('min-height', tallest + 'px');
                });
            });
        }
        $(document).on('click', '.product-sorting a', function(e) {
            e.preventDefault();
            var $this = $(this);
            var url = $this.attr('href');
            if (url != '#' && url !== '') {
                ajax_search(url);
            }
        });
        $(document).on('click', '.pagination a', function(e) {
            e.preventDefault();
            var $this = $(this);
            var url = $this.attr('href');
            if (url != '#' && url !== '') {
                ajax_search(url);
            }
        });

        function ajax_search(url) {
            if ($('.product_archive').length !== 0) {
                $('.vglacier-shop').css('opacity', '0.5');
                $('.vglacier-shop').css('pointer-events', 'none');
                var $shop_page = $('.vglacier-shop');
                var loader = $(".spinner");
                $.ajax({
                    url: url,
                    method: "GET",
                    beforeSend: function() {
                        loader.show();
                    },
                    success: function(response) {
                        var temp = response.split('<!-- VGLACIER CONTENT - START -->');
                        var temp1 = temp[1].split('<!-- VGLACIER CONTENT - END -->');
                        $shop_page.html(temp1[0]);
                    },
                    complete: function() {
                        $('.vglacier-shop').css('opacity', '1');
                        $('.vglacier-shop').css('pointer-events', 'auto');
                        loader.hide();
                    }
                });
            } else {
                window.location.href = url;
            }
        }
        $('.blogpost-content img').each(function() {
            var $this = $(this);
            $this.parent('a').addClass('mask-wrapper popup-img');
        });
        if ($(".popup-img").length > 0) {
            $(".popup-img").magnificPopup({
                type: "image",
                gallery: {
                    enabled: true
                }
            });
        };
        if ($(".pl .parallax").length > 0) {
            $.stellar({
                horizontalScrolling: false,
                responsive: true
            });
        }
    });
    $.vglacier_utilities.preload_images = 0;
    $.vglacier_utilities.preload = function(options_passed) {
        var win = $(window),
            defaults = {
                container: 'body',
                maxLoops: 10,
                trigger_single: true,
                single_callback: function() {},
                global_callback: function() {}
            },
            options = $.extend({}, defaults, options_passed),
            methods = {
                checkImage: function(container) {
                    container.images.each(function() {
                        if (this.complete === true) {
                            container.images = container.images.not(this);
                            $.vglacier_utilities.preload_images -= 1;
                        }
                    });
                    if (container.images.length && options.maxLoops >= 0) {
                        options.maxLoops -= 1;
                        setTimeout(function() {
                            methods.checkImage(container);
                        }, 500);
                    } else {
                        $.vglacier_utilities.preload_images = $.vglacier_utilities.preload_images - container.images.length;
                        methods.trigger_loaded(container);
                    }
                },
                trigger_loaded: function(container) {
                    if (options.trigger_single !== false) {
                        win.trigger('avia_images_loaded_single', [container]);
                        options.single_callback.call(container);
                    }
                    if ($.vglacier_utilities.preload_images === 0) {
                        win.trigger('avia_images_loaded');
                        options.global_callback.call();
                    }
                }
            };
        if (typeof options.container === 'string') {
            options.container = $(options.container);
        }
        options.container.each(function() {
            var container = $(this);
            container.images = container.find('img');
            container.allImages = container.images;
            $.vglacier_utilities.preload_images += container.images.length;
            setTimeout(function() {
                methods.checkImage(container);
            }, 10);
        });
    };
    if ($('form.fw_form_fw_form').length > 0) {
        fwForm.initAjaxSubmit({
            selector: 'form.fw_form_fw_form'
        });
    }
})(this.jQuery);
(function($, sr) {
    var debounce = function(func, threshold, execAsap) {
        var timeout;
        return function debounced() {
            var obj = this,
                args = arguments;

            function delayed() {
                if (!execAsap) func.apply(obj, args);
                timeout = null;
            };
            if (timeout) clearTimeout(timeout);
            else if (execAsap) func.apply(obj, args);
            timeout = setTimeout(delayed, threshold || 100);
        };
    }
    jQuery.fn[sr] = function(fn) {
        return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr);
    };
})(jQuery, 'smartresize');

function hidePreHeader() {
    jQuery(".preheader .trigger").html("<a href=\"javascript:showPreHeader()\" class=\"triangle closed\"><i class=\"fa fa-envelope\"></i></a>");
    jQuery(".preheader-content").slideUp("fast");
}

function showPreHeader() {
    jQuery(".preheader .trigger").html("<a href=\"javascript:hidePreHeader()\" class=\"triangle opened\"><i class=\"fa fa-minus\"></i></a>");
    jQuery(".preheader-content").slideDown("fast");
};
jQuery(document).ready(function($) {
    $(".fw-tabs-container").tabs();
});
! function(a, b) {
    "use strict";

    function c() {
        if (!e) {
            e = !0;
            var a, c, d, f, g = -1 !== navigator.appVersion.indexOf("MSIE 10"),
                h = !!navigator.userAgent.match(/Trident.*rv:11\./),
                i = b.querySelectorAll("iframe.wp-embedded-content");
            for (c = 0; c < i.length; c++) {
                if (d = i[c], !d.getAttribute("data-secret")) f = Math.random().toString(36).substr(2, 10), d.src += "#?secret=" + f, d.setAttribute("data-secret", f);
                if (g || h) a = d.cloneNode(!0), a.removeAttribute("security"), d.parentNode.replaceChild(a, d)
            }
        }
    }
    var d = !1,
        e = !1;
    if (b.querySelector)
        if (a.addEventListener) d = !0;
    if (a.wp = a.wp || {}, !a.wp.receiveEmbedMessage)
        if (a.wp.receiveEmbedMessage = function(c) {
                var d = c.data;
                if (d.secret || d.message || d.value)
                    if (!/[^a-zA-Z0-9]/.test(d.secret)) {
                        var e, f, g, h, i, j = b.querySelectorAll('iframe[data-secret="' + d.secret + '"]'),
                            k = b.querySelectorAll('blockquote[data-secret="' + d.secret + '"]');
                        for (e = 0; e < k.length; e++) k[e].style.display = "none";
                        for (e = 0; e < j.length; e++)
                            if (f = j[e], c.source === f.contentWindow) {
                                if (f.removeAttribute("style"), "height" === d.message) {
                                    if (g = parseInt(d.value, 10), g > 1e3) g = 1e3;
                                    else if (~~g < 200) g = 200;
                                    f.height = g
                                }
                                if ("link" === d.message)
                                    if (h = b.createElement("a"), i = b.createElement("a"), h.href = f.getAttribute("src"), i.href = d.value, i.host === h.host)
                                        if (b.activeElement === f) a.top.location.href = d.value
                            } else;
                    }
            }, d) a.addEventListener("message", a.wp.receiveEmbedMessage, !1), b.addEventListener("DOMContentLoaded", c, !1), a.addEventListener("load", c, !1)
}(window, document);
"function" != typeof Object.create && (Object.create = function(t) {
        function e() {}
        return e.prototype = t, new e
    }),
    function(t, e, o) {
        var i = {
            init: function(e, o) {
                var i = this;
                i.$elem = t(o), i.options = t.extend({}, t.fn.owlCarousel.options, i.$elem.data(), e), i.userOptions = e, i.loadContent()
            },
            loadContent: function() {
                function e(t) {
                    var e, o = "";
                    if ("function" == typeof i.options.jsonSuccess) i.options.jsonSuccess.apply(this, [t]);
                    else {
                        for (e in t.owl) t.owl.hasOwnProperty(e) && (o += t.owl[e].item);
                        i.$elem.html(o)
                    }
                    i.logIn()
                }
                var o, i = this;
                "function" == typeof i.options.beforeInit && i.options.beforeInit.apply(this, [i.$elem]), "string" == typeof i.options.jsonPath ? (o = i.options.jsonPath, t.getJSON(o, e)) : i.logIn()
            },
            logIn: function() {
                var t = this;
                t.$elem.data({
                    "owl-originalStyles": t.$elem.attr("style"),
                    "owl-originalClasses": t.$elem.attr("class")
                }), t.$elem.css({
                    opacity: 0
                }), t.orignalItems = t.options.items, t.checkBrowser(), t.wrapperWidth = 0, t.checkVisible = null, t.setVars()
            },
            setVars: function() {
                var t = this;
                return 0 === t.$elem.children().length ? !1 : (t.baseClass(), t.eventTypes(), t.$userItems = t.$elem.children(), t.itemsAmount = t.$userItems.length, t.wrapItems(), t.$owlItems = t.$elem.find(".owl-item"), t.$owlWrapper = t.$elem.find(".owl-wrapper"), t.playDirection = "next", t.prevItem = 0, t.prevArr = [0], t.currentItem = 0, t.customEvents(), void t.onStartup())
            },
            onStartup: function() {
                var t = this;
                t.updateItems(), t.calculateAll(), t.buildControls(), t.updateControls(), t.response(), t.moveEvents(), t.stopOnHover(), t.owlStatus(), t.options.transitionStyle !== !1 && t.transitionTypes(t.options.transitionStyle), t.options.autoPlay === !0 && (t.options.autoPlay = 5e3), t.play(), t.$elem.find(".owl-wrapper").css("display", "block"), t.$elem.is(":visible") ? t.$elem.css("opacity", 1) : t.watchVisibility(), t.onstartup = !1, t.eachMoveUpdate(), "function" == typeof t.options.afterInit && t.options.afterInit.apply(this, [t.$elem])
            },
            eachMoveUpdate: function() {
                var t = this;
                t.options.lazyLoad === !0 && t.lazyLoad(), t.options.autoHeight === !0 && t.autoHeight(), t.onVisibleItems(), "function" == typeof t.options.afterAction && t.options.afterAction.apply(this, [t.$elem])
            },
            updateVars: function() {
                var t = this;
                "function" == typeof t.options.beforeUpdate && t.options.beforeUpdate.apply(this, [t.$elem]), t.watchVisibility(), t.updateItems(), t.calculateAll(), t.updatePosition(), t.updateControls(), t.eachMoveUpdate(), "function" == typeof t.options.afterUpdate && t.options.afterUpdate.apply(this, [t.$elem])
            },
            reload: function() {
                var t = this;
                e.setTimeout(function() {
                    t.updateVars()
                }, 0)
            },
            watchVisibility: function() {
                var t = this;
                return t.$elem.is(":visible") !== !1 ? !1 : (t.$elem.css({
                    opacity: 0
                }), e.clearInterval(t.autoPlayInterval), e.clearInterval(t.checkVisible), void(t.checkVisible = e.setInterval(function() {
                    t.$elem.is(":visible") && (t.reload(), t.$elem.animate({
                        opacity: 1
                    }, 200), e.clearInterval(t.checkVisible))
                }, 500)))
            },
            wrapItems: function() {
                var t = this;
                t.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'), t.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'), t.wrapperOuter = t.$elem.find(".owl-wrapper-outer"), t.$elem.css("display", "block")
            },
            baseClass: function() {
                var t = this,
                    e = t.$elem.hasClass(t.options.baseClass),
                    o = t.$elem.hasClass(t.options.theme);
                e || t.$elem.addClass(t.options.baseClass), o || t.$elem.addClass(t.options.theme)
            },
            updateItems: function() {
                var e, o, i = this;
                if (i.options.responsive === !1) return !1;
                if (i.options.singleItem === !0) return i.options.items = i.orignalItems = 1, i.options.itemsCustom = !1, i.options.itemsDesktop = !1, i.options.itemsDesktopSmall = !1, i.options.itemsTablet = !1, i.options.itemsTabletSmall = !1, i.options.itemsMobile = !1, !1;
                if (e = t(i.options.responsiveBaseWidth).width(), e > (i.options.itemsDesktop[0] || i.orignalItems) && (i.options.items = i.orignalItems), i.options.itemsCustom !== !1)
                    for (i.options.itemsCustom.sort(function(t, e) {
                            return t[0] - e[0]
                        }), o = 0; o < i.options.itemsCustom.length; o += 1) i.options.itemsCustom[o][0] <= e && (i.options.items = i.options.itemsCustom[o][1]);
                else e <= i.options.itemsDesktop[0] && i.options.itemsDesktop !== !1 && (i.options.items = i.options.itemsDesktop[1]), e <= i.options.itemsDesktopSmall[0] && i.options.itemsDesktopSmall !== !1 && (i.options.items = i.options.itemsDesktopSmall[1]), e <= i.options.itemsTablet[0] && i.options.itemsTablet !== !1 && (i.options.items = i.options.itemsTablet[1]), e <= i.options.itemsTabletSmall[0] && i.options.itemsTabletSmall !== !1 && (i.options.items = i.options.itemsTabletSmall[1]), e <= i.options.itemsMobile[0] && i.options.itemsMobile !== !1 && (i.options.items = i.options.itemsMobile[1]);
                i.options.items > i.itemsAmount && i.options.itemsScaleUp === !0 && (i.options.items = i.itemsAmount)
            },
            response: function() {
                var o, i, n = this;
                return n.options.responsive !== !0 ? !1 : (i = t(e).width(), n.resizer = function() {
                    t(e).width() !== i && (n.options.autoPlay !== !1 && e.clearInterval(n.autoPlayInterval), e.clearTimeout(o), o = e.setTimeout(function() {
                        i = t(e).width(), n.updateVars()
                    }, n.options.responsiveRefreshRate))
                }, void t(e).resize(n.resizer))
            },
            updatePosition: function() {
                var t = this;
                t.jumpTo(t.currentItem), t.options.autoPlay !== !1 && t.checkAp()
            },
            appendItemsSizes: function() {
                var e = this,
                    o = 0,
                    i = e.itemsAmount - e.options.items;
                e.$owlItems.each(function(n) {
                    var s = t(this);
                    s.css({
                        width: e.itemWidth
                    }).data("owl-item", Number(n)), (n % e.options.items === 0 || n === i) && (n > i || (o += 1)), s.data("owl-roundPages", o)
                })
            },
            appendWrapperSizes: function() {
                var t = this,
                    e = t.$owlItems.length * t.itemWidth;
                t.$owlWrapper.css({
                    width: 2 * e,
                    left: 0
                }), t.appendItemsSizes()
            },
            calculateAll: function() {
                var t = this;
                t.calculateWidth(), t.appendWrapperSizes(), t.loops(), t.max()
            },
            calculateWidth: function() {
                var t = this;
                t.itemWidth = Math.round(t.$elem.width() / t.options.items)
            },
            max: function() {
                var t = this,
                    e = -1 * (t.itemsAmount * t.itemWidth - t.options.items * t.itemWidth);
                return t.options.items > t.itemsAmount ? (t.maximumItem = 0, e = 0, t.maximumPixels = 0) : (t.maximumItem = t.itemsAmount - t.options.items, t.maximumPixels = e), e
            },
            min: function() {
                return 0
            },
            loops: function() {
                var e, o, i, n = this,
                    s = 0,
                    a = 0;
                for (n.positionsInArray = [0], n.pagesInArray = [], e = 0; e < n.itemsAmount; e += 1) a += n.itemWidth, n.positionsInArray.push(-a), n.options.scrollPerPage === !0 && (o = t(n.$owlItems[e]), i = o.data("owl-roundPages"), i !== s && (n.pagesInArray[s] = n.positionsInArray[e], s = i))
            },
            buildControls: function() {
                var e = this;
                (e.options.navigation === !0 || e.options.pagination === !0) && (e.owlControls = t('<div class="owl-controls"/>').toggleClass("clickable", !e.browser.isTouch).appendTo(e.$elem)), e.options.pagination === !0 && e.buildPagination(), e.options.navigation === !0 && e.buildButtons()
            },
            buildButtons: function() {
                var e = this,
                    o = t('<div class="owl-buttons"/>');
                e.owlControls.append(o), e.buttonPrev = t("<div/>", {
                    "class": "owl-prev",
                    html: e.options.navigationText[0] || ""
                }), e.buttonNext = t("<div/>", {
                    "class": "owl-next",
                    html: e.options.navigationText[1] || ""
                }), o.append(e.buttonPrev).append(e.buttonNext), o.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function(t) {
                    t.preventDefault()
                }), o.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function(o) {
                    o.preventDefault(), t(this).hasClass("owl-next") ? e.next() : e.prev()
                })
            },
            buildPagination: function() {
                var e = this;
                e.paginationWrapper = t('<div class="owl-pagination"/>'), e.owlControls.append(e.paginationWrapper), e.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(o) {
                    o.preventDefault(), Number(t(this).data("owl-page")) !== e.currentItem && e.goTo(Number(t(this).data("owl-page")), !0)
                })
            },
            updatePagination: function() {
                var e, o, i, n, s, a, r = this;
                if (r.options.pagination === !1) return !1;
                for (r.paginationWrapper.html(""), e = 0, o = r.itemsAmount - r.itemsAmount % r.options.items, n = 0; n < r.itemsAmount; n += 1) n % r.options.items === 0 && (e += 1, o === n && (i = r.itemsAmount - r.options.items), s = t("<div/>", {
                    "class": "owl-page"
                }), a = t("<span></span>", {
                    text: r.options.paginationNumbers === !0 ? e : "",
                    "class": r.options.paginationNumbers === !0 ? "owl-numbers" : ""
                }), s.append(a), s.data("owl-page", o === n ? i : n), s.data("owl-roundPages", e), r.paginationWrapper.append(s));
                r.checkPagination()
            },
            checkPagination: function() {
                var e = this;
                return e.options.pagination === !1 ? !1 : void e.paginationWrapper.find(".owl-page").each(function() {
                    t(this).data("owl-roundPages") === t(e.$owlItems[e.currentItem]).data("owl-roundPages") && (e.paginationWrapper.find(".owl-page").removeClass("active"), t(this).addClass("active"))
                })
            },
            checkNavigation: function() {
                var t = this;
                return t.options.navigation === !1 ? !1 : void(t.options.rewindNav === !1 && (0 === t.currentItem && 0 === t.maximumItem ? (t.buttonPrev.addClass("disabled"), t.buttonNext.addClass("disabled")) : 0 === t.currentItem && 0 !== t.maximumItem ? (t.buttonPrev.addClass("disabled"), t.buttonNext.removeClass("disabled")) : t.currentItem === t.maximumItem ? (t.buttonPrev.removeClass("disabled"), t.buttonNext.addClass("disabled")) : 0 !== t.currentItem && t.currentItem !== t.maximumItem && (t.buttonPrev.removeClass("disabled"), t.buttonNext.removeClass("disabled"))))
            },
            updateControls: function() {
                var t = this;
                t.updatePagination(), t.checkNavigation(), t.owlControls && (t.options.items >= t.itemsAmount ? t.owlControls.hide() : t.owlControls.show())
            },
            destroyControls: function() {
                var t = this;
                t.owlControls && t.owlControls.remove()
            },
            next: function(t) {
                var e = this;
                if (e.isTransition) return !1;
                if (e.currentItem += e.options.scrollPerPage === !0 ? e.options.items : 1, e.currentItem > e.maximumItem + (e.options.scrollPerPage === !0 ? e.options.items - 1 : 0)) {
                    if (e.options.rewindNav !== !0) return e.currentItem = e.maximumItem, !1;
                    e.currentItem = 0, t = "rewind"
                }
                e.goTo(e.currentItem, t)
            },
            prev: function(t) {
                var e = this;
                if (e.isTransition) return !1;
                if (e.options.scrollPerPage === !0 && e.currentItem > 0 && e.currentItem < e.options.items ? e.currentItem = 0 : e.currentItem -= e.options.scrollPerPage === !0 ? e.options.items : 1, e.currentItem < 0) {
                    if (e.options.rewindNav !== !0) return e.currentItem = 0, !1;
                    e.currentItem = e.maximumItem, t = "rewind"
                }
                e.goTo(e.currentItem, t)
            },
            goTo: function(t, o, i) {
                var n, s = this;
                return s.isTransition ? !1 : ("function" == typeof s.options.beforeMove && s.options.beforeMove.apply(this, [s.$elem]), t >= s.maximumItem ? t = s.maximumItem : 0 >= t && (t = 0), s.currentItem = s.owl.currentItem = t, s.options.transitionStyle !== !1 && "drag" !== i && 1 === s.options.items && s.browser.support3d === !0 ? (s.swapSpeed(0), s.browser.support3d === !0 ? s.transition3d(s.positionsInArray[t]) : s.css2slide(s.positionsInArray[t], 1), s.afterGo(), s.singleItemTransition(), !1) : (n = s.positionsInArray[t], s.browser.support3d === !0 ? (s.isCss3Finish = !1, o === !0 ? (s.swapSpeed("paginationSpeed"), e.setTimeout(function() {
                    s.isCss3Finish = !0
                }, s.options.paginationSpeed)) : "rewind" === o ? (s.swapSpeed(s.options.rewindSpeed), e.setTimeout(function() {
                    s.isCss3Finish = !0
                }, s.options.rewindSpeed)) : (s.swapSpeed("slideSpeed"), e.setTimeout(function() {
                    s.isCss3Finish = !0
                }, s.options.slideSpeed)), s.transition3d(n)) : o === !0 ? s.css2slide(n, s.options.paginationSpeed) : "rewind" === o ? s.css2slide(n, s.options.rewindSpeed) : s.css2slide(n, s.options.slideSpeed), void s.afterGo()))
            },
            jumpTo: function(t) {
                var e = this;
                "function" == typeof e.options.beforeMove && e.options.beforeMove.apply(this, [e.$elem]), t >= e.maximumItem || -1 === t ? t = e.maximumItem : 0 >= t && (t = 0), e.swapSpeed(0), e.browser.support3d === !0 ? e.transition3d(e.positionsInArray[t]) : e.css2slide(e.positionsInArray[t], 1), e.currentItem = e.owl.currentItem = t, e.afterGo()
            },
            afterGo: function() {
                var t = this;
                t.prevArr.push(t.currentItem), t.prevItem = t.owl.prevItem = t.prevArr[t.prevArr.length - 2], t.prevArr.shift(0), t.prevItem !== t.currentItem && (t.checkPagination(), t.checkNavigation(), t.eachMoveUpdate(), t.options.autoPlay !== !1 && t.checkAp()), "function" == typeof t.options.afterMove && t.prevItem !== t.currentItem && t.options.afterMove.apply(this, [t.$elem])
            },
            stop: function() {
                var t = this;
                t.apStatus = "stop", e.clearInterval(t.autoPlayInterval)
            },
            checkAp: function() {
                var t = this;
                "stop" !== t.apStatus && t.play()
            },
            play: function() {
                var t = this;
                return t.apStatus = "play", t.options.autoPlay === !1 ? !1 : (e.clearInterval(t.autoPlayInterval), void(t.autoPlayInterval = e.setInterval(function() {
                    t.next(!0)
                }, t.options.autoPlay)))
            },
            swapSpeed: function(t) {
                var e = this;
                "slideSpeed" === t ? e.$owlWrapper.css(e.addCssSpeed(e.options.slideSpeed)) : "paginationSpeed" === t ? e.$owlWrapper.css(e.addCssSpeed(e.options.paginationSpeed)) : "string" != typeof t && e.$owlWrapper.css(e.addCssSpeed(t))
            },
            addCssSpeed: function(t) {
                return {
                    "-webkit-transition": "all " + t + "ms ease",
                    "-moz-transition": "all " + t + "ms ease",
                    "-o-transition": "all " + t + "ms ease",
                    transition: "all " + t + "ms ease"
                }
            },
            removeTransition: function() {
                return {
                    "-webkit-transition": "",
                    "-moz-transition": "",
                    "-o-transition": "",
                    transition: ""
                }
            },
            doTranslate: function(t) {
                return {
                    "-webkit-transform": "translate3d(" + t + "px, 0px, 0px)",
                    "-moz-transform": "translate3d(" + t + "px, 0px, 0px)",
                    "-o-transform": "translate3d(" + t + "px, 0px, 0px)",
                    "-ms-transform": "translate3d(" + t + "px, 0px, 0px)",
                    transform: "translate3d(" + t + "px, 0px,0px)"
                }
            },
            transition3d: function(t) {
                var e = this;
                e.$owlWrapper.css(e.doTranslate(t))
            },
            css2move: function(t) {
                var e = this;
                e.$owlWrapper.css({
                    left: t
                })
            },
            css2slide: function(t, e) {
                var o = this;
                o.isCssFinish = !1, o.$owlWrapper.stop(!0, !0).animate({
                    left: t
                }, {
                    duration: e || o.options.slideSpeed,
                    complete: function() {
                        o.isCssFinish = !0
                    }
                })
            },
            checkBrowser: function() {
                var t, i, n, s, a = this,
                    r = "translate3d(0px, 0px, 0px)",
                    l = o.createElement("div");
                l.style.cssText = "  -moz-transform:" + r + "; -ms-transform:" + r + "; -o-transform:" + r + "; -webkit-transform:" + r + "; transform:" + r, t = /translate3d\(0px, 0px, 0px\)/g, i = l.style.cssText.match(t), n = null !== i && i.length >= 1, s = "ontouchstart" in e || e.navigator.msMaxTouchPoints, a.browser = {
                    support3d: n,
                    isTouch: s
                }
            },
            moveEvents: function() {
                var t = this;
                (t.options.mouseDrag !== !1 || t.options.touchDrag !== !1) && (t.gestures(), t.disabledEvents())
            },
            eventTypes: function() {
                var t = this,
                    e = ["s", "e", "x"];
                t.ev_types = {}, t.options.mouseDrag === !0 && t.options.touchDrag === !0 ? e = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : t.options.mouseDrag === !1 && t.options.touchDrag === !0 ? e = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : t.options.mouseDrag === !0 && t.options.touchDrag === !1 && (e = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]), t.ev_types.start = e[0], t.ev_types.move = e[1], t.ev_types.end = e[2]
            },
            disabledEvents: function() {
                var e = this;
                e.$elem.on("dragstart.owl", function(t) {
                    t.preventDefault()
                }), e.$elem.on("mousedown.disableTextSelect", function(e) {
                    return t(e.target).is("input, textarea, select, option")
                })
            },
            gestures: function() {
                function i(t) {
                    if (void 0 !== t.touches) return {
                        x: t.touches[0].pageX,
                        y: t.touches[0].pageY
                    };
                    if (void 0 === t.touches) {
                        if (void 0 !== t.pageX) return {
                            x: t.pageX,
                            y: t.pageY
                        };
                        if (void 0 === t.pageX) return {
                            x: t.clientX,
                            y: t.clientY
                        }
                    }
                }

                function n(e) {
                    "on" === e ? (t(o).on(l.ev_types.move, a), t(o).on(l.ev_types.end, r)) : "off" === e && (t(o).off(l.ev_types.move), t(o).off(l.ev_types.end))
                }

                function s(o) {
                    var s, a = o.originalEvent || o || e.event;
                    if (3 === a.which) return !1;
                    if (!(l.itemsAmount <= l.options.items)) {
                        if (l.isCssFinish === !1 && !l.options.dragBeforeAnimFinish) return !1;
                        if (l.isCss3Finish === !1 && !l.options.dragBeforeAnimFinish) return !1;
                        l.options.autoPlay !== !1 && e.clearInterval(l.autoPlayInterval), l.browser.isTouch === !0 || l.$owlWrapper.hasClass("grabbing") || l.$owlWrapper.addClass("grabbing"), l.newPosX = 0, l.newRelativeX = 0, t(this).css(l.removeTransition()), s = t(this).position(), p.relativePos = s.left, p.offsetX = i(a).x - s.left, p.offsetY = i(a).y - s.top, n("on"), p.sliding = !1, p.targetElement = a.target || a.srcElement
                    }
                }

                function a(n) {
                    var s, a, r = n.originalEvent || n || e.event;
                    l.newPosX = i(r).x - p.offsetX, l.newPosY = i(r).y - p.offsetY, l.newRelativeX = l.newPosX - p.relativePos, "function" == typeof l.options.startDragging && p.dragging !== !0 && 0 !== l.newRelativeX && (p.dragging = !0, l.options.startDragging.apply(l, [l.$elem])), (l.newRelativeX > 8 || l.newRelativeX < -8) && l.browser.isTouch === !0 && (void 0 !== r.preventDefault ? r.preventDefault() : r.returnValue = !1, p.sliding = !0), (l.newPosY > 10 || l.newPosY < -10) && p.sliding === !1 && t(o).off("touchmove.owl"), s = function() {
                        return l.newRelativeX / 5
                    }, a = function() {
                        return l.maximumPixels + l.newRelativeX / 5
                    }, l.newPosX = Math.max(Math.min(l.newPosX, s()), a()), l.browser.support3d === !0 ? l.transition3d(l.newPosX) : l.css2move(l.newPosX)
                }

                function r(o) {
                    var i, s, a, r = o.originalEvent || o || e.event;
                    r.target = r.target || r.srcElement, p.dragging = !1, l.browser.isTouch !== !0 && l.$owlWrapper.removeClass("grabbing"), l.dragDirection = l.owl.dragDirection = l.newRelativeX < 0 ? "left" : "right", 0 !== l.newRelativeX && (i = l.getNewPosition(), l.goTo(i, !1, "drag"), p.targetElement === r.target && l.browser.isTouch !== !0 && (t(r.target).on("click.disable", function(e) {
                        e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault(), t(e.target).off("click.disable")
                    }), s = t._data(r.target, "events").click, a = s.pop(), s.splice(0, 0, a))), n("off")
                }
                var l = this,
                    p = {
                        offsetX: 0,
                        offsetY: 0,
                        baseElWidth: 0,
                        relativePos: 0,
                        position: null,
                        minSwipe: null,
                        maxSwipe: null,
                        sliding: null,
                        dargging: null,
                        targetElement: null
                    };
                l.isCssFinish = !0, l.$elem.on(l.ev_types.start, ".owl-wrapper", s)
            },
            getNewPosition: function() {
                var t = this,
                    e = t.closestItem();
                return e > t.maximumItem ? (t.currentItem = t.maximumItem, e = t.maximumItem) : t.newPosX >= 0 && (e = 0, t.currentItem = 0), e
            },
            closestItem: function() {
                var e = this,
                    o = e.options.scrollPerPage === !0 ? e.pagesInArray : e.positionsInArray,
                    i = e.newPosX,
                    n = null;
                return t.each(o, function(s, a) {
                    i - e.itemWidth / 20 > o[s + 1] && i - e.itemWidth / 20 < a && "left" === e.moveDirection() ? (n = a, e.currentItem = e.options.scrollPerPage === !0 ? t.inArray(n, e.positionsInArray) : s) : i + e.itemWidth / 20 < a && i + e.itemWidth / 20 > (o[s + 1] || o[s] - e.itemWidth) && "right" === e.moveDirection() && (e.options.scrollPerPage === !0 ? (n = o[s + 1] || o[o.length - 1], e.currentItem = t.inArray(n, e.positionsInArray)) : (n = o[s + 1], e.currentItem = s + 1))
                }), e.currentItem
            },
            moveDirection: function() {
                var t, e = this;
                return e.newRelativeX < 0 ? (t = "right", e.playDirection = "next") : (t = "left", e.playDirection = "prev"), t
            },
            customEvents: function() {
                var t = this;
                t.$elem.on("owl.next", function() {
                    t.next()
                }), t.$elem.on("owl.prev", function() {
                    t.prev()
                }), t.$elem.on("owl.play", function(e, o) {
                    t.options.autoPlay = o, t.play(), t.hoverStatus = "play"
                }), t.$elem.on("owl.stop", function() {
                    t.stop(), t.hoverStatus = "stop"
                }), t.$elem.on("owl.goTo", function(e, o) {
                    t.goTo(o)
                }), t.$elem.on("owl.jumpTo", function(e, o) {
                    t.jumpTo(o)
                })
            },
            stopOnHover: function() {
                var t = this;
                t.options.stopOnHover === !0 && t.browser.isTouch !== !0 && t.options.autoPlay !== !1 && (t.$elem.on("mouseover", function() {
                    t.stop()
                }), t.$elem.on("mouseout", function() {
                    "stop" !== t.hoverStatus && t.play()
                }))
            },
            lazyLoad: function() {
                var e, o, i, n, s, a = this;
                if (a.options.lazyLoad === !1) return !1;
                for (e = 0; e < a.itemsAmount; e += 1) o = t(a.$owlItems[e]), "loaded" !== o.data("owl-loaded") && (i = o.data("owl-item"), n = o.find(".lazyOwl"), "string" == typeof n.data("src") ? (void 0 === o.data("owl-loaded") && (n.hide(), o.addClass("loading").data("owl-loaded", "checked")), s = a.options.lazyFollow === !0 ? i >= a.currentItem : !0, s && i < a.currentItem + a.options.items && n.length && n.each(function() {
                    a.lazyPreload(o, t(this))
                })) : o.data("owl-loaded", "loaded"))
            },
            lazyPreload: function(t, o) {
                function i() {
                    t.data("owl-loaded", "loaded").removeClass("loading"), o.removeAttr("data-src"), "fade" === a.options.lazyEffect ? o.fadeIn(400) : o.show(), "function" == typeof a.options.afterLazyLoad && a.options.afterLazyLoad.apply(this, [a.$elem])
                }

                function n() {
                    r += 1, a.completeImg(o.get(0)) || s === !0 ? i() : 100 >= r ? e.setTimeout(n, 100) : i()
                }
                var s, a = this,
                    r = 0;
                "DIV" === o.prop("tagName") ? (o.css("background-image", "url(" + o.data("src") + ")"), s = !0) : o[0].src = o.data("src"), n()
            },
            autoHeight: function() {
                function o() {
                    var o = t(s.$owlItems[s.currentItem]).height();
                    s.wrapperOuter.css("height", o + "px"), s.wrapperOuter.hasClass("autoHeight") || e.setTimeout(function() {
                        s.wrapperOuter.addClass("autoHeight")
                    }, 0)
                }

                function i() {
                    n += 1, s.completeImg(a.get(0)) ? o() : 100 >= n ? e.setTimeout(i, 100) : s.wrapperOuter.css("height", "")
                }
                var n, s = this,
                    a = t(s.$owlItems[s.currentItem]).find("img");
                void 0 !== a.get(0) ? (n = 0, i()) : o()
            },
            completeImg: function(t) {
                var e;
                return t.complete ? (e = typeof t.naturalWidth, "undefined" !== e && 0 === t.naturalWidth ? !1 : !0) : !1
            },
            onVisibleItems: function() {
                var e, o = this;
                for (o.options.addClassActive === !0 && o.$owlItems.removeClass("active"), o.visibleItems = [], e = o.currentItem; e < o.currentItem + o.options.items; e += 1) o.visibleItems.push(e), o.options.addClassActive === !0 && t(o.$owlItems[e]).addClass("active");
                o.owl.visibleItems = o.visibleItems
            },
            transitionTypes: function(t) {
                var e = this;
                e.outClass = "owl-" + t + "-out", e.inClass = "owl-" + t + "-in"
            },
            singleItemTransition: function() {
                function t(t) {
                    return {
                        position: "relative",
                        left: t + "px"
                    }
                }
                var e = this,
                    o = e.outClass,
                    i = e.inClass,
                    n = e.$owlItems.eq(e.currentItem),
                    s = e.$owlItems.eq(e.prevItem),
                    a = Math.abs(e.positionsInArray[e.currentItem]) + e.positionsInArray[e.prevItem],
                    r = Math.abs(e.positionsInArray[e.currentItem]) + e.itemWidth / 2,
                    l = "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";
                e.isTransition = !0, e.$owlWrapper.addClass("owl-origin").css({
                    "-webkit-transform-origin": r + "px",
                    "-moz-perspective-origin": r + "px",
                    "perspective-origin": r + "px"
                }), s.css(t(a, 10)).addClass(o).on(l, function() {
                    e.endPrev = !0, s.off(l), e.clearTransStyle(s, o)
                }), n.addClass(i).on(l, function() {
                    e.endCurrent = !0, n.off(l), e.clearTransStyle(n, i)
                })
            },
            clearTransStyle: function(t, e) {
                var o = this;
                t.css({
                    position: "",
                    left: ""
                }).removeClass(e), o.endPrev && o.endCurrent && (o.$owlWrapper.removeClass("owl-origin"), o.endPrev = !1, o.endCurrent = !1, o.isTransition = !1)
            },
            owlStatus: function() {
                var t = this;
                t.owl = {
                    userOptions: t.userOptions,
                    baseElement: t.$elem,
                    userItems: t.$userItems,
                    owlItems: t.$owlItems,
                    currentItem: t.currentItem,
                    prevItem: t.prevItem,
                    visibleItems: t.visibleItems,
                    isTouch: t.browser.isTouch,
                    browser: t.browser,
                    dragDirection: t.dragDirection
                }
            },
            clearEvents: function() {
                var i = this;
                i.$elem.off(".owl owl mousedown.disableTextSelect"), t(o).off(".owl owl"), t(e).off("resize", i.resizer)
            },
            unWrap: function() {
                var t = this;
                0 !== t.$elem.children().length && (t.$owlWrapper.unwrap(), t.$userItems.unwrap().unwrap(), t.owlControls && t.owlControls.remove()), t.clearEvents(), t.$elem.attr({
                    style: t.$elem.data("owl-originalStyles") || "",
                    "class": t.$elem.data("owl-originalClasses")
                })
            },
            destroy: function() {
                var t = this;
                t.stop(), e.clearInterval(t.checkVisible), t.unWrap(), t.$elem.removeData()
            },
            reinit: function(e) {
                var o = this,
                    i = t.extend({}, o.userOptions, e);
                o.unWrap(), o.init(i, o.$elem)
            },
            addItem: function(t, e) {
                var o, i = this;
                return t ? 0 === i.$elem.children().length ? (i.$elem.append(t), i.setVars(), !1) : (i.unWrap(), o = void 0 === e || -1 === e ? -1 : e, o >= i.$userItems.length || -1 === o ? i.$userItems.eq(-1).after(t) : i.$userItems.eq(o).before(t), void i.setVars()) : !1
            },
            removeItem: function(t) {
                var e, o = this;
                return 0 === o.$elem.children().length ? !1 : (e = void 0 === t || -1 === t ? -1 : t, o.unWrap(), o.$userItems.eq(e).remove(), void o.setVars())
            }
        };
        t.fn.owlCarousel = function(e) {
            return this.each(function() {
                if (t(this).data("owl-init") === !0) return !1;
                t(this).data("owl-init", !0);
                var o = Object.create(i);
                o.init(e, this), t.data(this, "owlCarousel", o)
            })
        }, t.fn.owlCarousel.options = {
            items: 5,
            itemsCustom: !1,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [979, 3],
            itemsTablet: [768, 2],
            itemsTabletSmall: !1,
            itemsMobile: [479, 1],
            singleItem: !1,
            itemsScaleUp: !1,
            slideSpeed: 200,
            paginationSpeed: 800,
            rewindSpeed: 1e3,
            autoPlay: !1,
            stopOnHover: !1,
            navigation: !1,
            navigationText: ["prev", "next"],
            rewindNav: !0,
            scrollPerPage: !1,
            pagination: !0,
            paginationNumbers: !1,
            responsive: !0,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: e,
            baseClass: "owl-carousel",
            theme: "owl-theme",
            lazyLoad: !1,
            lazyFollow: !0,
            lazyEffect: "fade",
            autoHeight: !1,
            jsonPath: !1,
            jsonSuccess: !1,
            dragBeforeAnimFinish: !0,
            mouseDrag: !0,
            touchDrag: !0,
            addClassActive: !1,
            transitionStyle: !1,
            beforeUpdate: !1,
            afterUpdate: !1,
            beforeInit: !1,
            afterInit: !1,
            beforeMove: !1,
            afterMove: !1,
            afterAction: !1,
            startDragging: !1,
            afterLazyLoad: !1
        }
    }(jQuery, window, document);;
(function($) {
    $.flexslider = function(el, options) {
        var slider = $(el);
        slider.vars = $.extend({}, $.flexslider.defaults, options);
        var namespace = slider.vars.namespace,
            msGesture = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
            touch = (("ontouchstart" in window) || msGesture || window.DocumentTouch && document instanceof DocumentTouch) && slider.vars.touch,
            eventType = "click touchend MSPointerUp",
            watchedEvent = "",
            watchedEventClearTimer, vertical = slider.vars.direction === "vertical",
            reverse = slider.vars.reverse,
            carousel = (slider.vars.itemWidth > 0),
            fade = slider.vars.animation === "fade",
            asNav = slider.vars.asNavFor !== "",
            methods = {},
            focused = true;
        $.data(el, "flexslider", slider);
        methods = {
            init: function() {
                slider.animating = false;
                slider.currentSlide = parseInt((slider.vars.startAt ? slider.vars.startAt : 0));
                if (isNaN(slider.currentSlide)) slider.currentSlide = 0;
                slider.animatingTo = slider.currentSlide;
                slider.atEnd = (slider.currentSlide === 0 || slider.currentSlide === slider.last);
                slider.containerSelector = slider.vars.selector.substr(0, slider.vars.selector.search(' '));
                slider.slides = $(slider.vars.selector, slider);
                slider.container = $(slider.containerSelector, slider);
                slider.count = slider.slides.length;
                slider.syncExists = $(slider.vars.sync).length > 0;
                if (slider.vars.animation === "slide") slider.vars.animation = "swing";
                slider.prop = (vertical) ? "top" : "marginLeft";
                slider.args = {};
                slider.manualPause = false;
                slider.stopped = false;
                slider.started = false;
                slider.startTimeout = null;
                slider.transitions = !slider.vars.video && !fade && slider.vars.useCSS && (function() {
                    var obj = document.createElement('div'),
                        props = ['perspectiveProperty', 'WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
                    for (var i in props) {
                        if (obj.style[props[i]] !== undefined) {
                            slider.pfx = props[i].replace('Perspective', '').toLowerCase();
                            slider.prop = "-" + slider.pfx + "-transform";
                            return true;
                        }
                    }
                    return false;
                }());
                if (slider.vars.controlsContainer !== "") slider.controlsContainer = $(slider.vars.controlsContainer).length > 0 && $(slider.vars.controlsContainer);
                if (slider.vars.manualControls !== "") slider.manualControls = $(slider.vars.manualControls).length > 0 && $(slider.vars.manualControls);
                if (slider.vars.randomize) {
                    slider.slides.sort(function() {
                        return (Math.round(Math.random()) - 0.5);
                    });
                    slider.container.empty().append(slider.slides);
                }
                slider.doMath();
                slider.setup("init");
                if (slider.vars.controlNav) methods.controlNav.setup();
                if (slider.vars.directionNav) methods.directionNav.setup();
                if (slider.vars.keyboard && ($(slider.containerSelector).length === 1 || slider.vars.multipleKeyboard)) {
                    $(document).bind('keyup', function(event) {
                        var keycode = event.keyCode;
                        if (!slider.animating && (keycode === 39 || keycode === 37)) {
                            var target = (keycode === 39) ? slider.getTarget('next') : (keycode === 37) ? slider.getTarget('prev') : false;
                            slider.flexAnimate(target, slider.vars.pauseOnAction);
                        }
                    });
                }
                if (slider.vars.mousewheel) {
                    slider.bind('mousewheel', function(event, delta, deltaX, deltaY) {
                        event.preventDefault();
                        var target = (delta < 0) ? slider.getTarget('next') : slider.getTarget('prev');
                        slider.flexAnimate(target, slider.vars.pauseOnAction);
                    });
                }
                if (slider.vars.pausePlay) methods.pausePlay.setup();
                if (slider.vars.slideshow && slider.vars.pauseInvisible) methods.pauseInvisible.init();
                if (slider.vars.slideshow) {
                    if (slider.vars.pauseOnHover) {
                        slider.hover(function() {
                            if (!slider.manualPlay && !slider.manualPause) slider.pause();
                        }, function() {
                            if (!slider.manualPause && !slider.manualPlay && !slider.stopped) slider.play();
                        });
                    }
                    if (!slider.vars.pauseInvisible || !methods.pauseInvisible.isHidden()) {
                        (slider.vars.initDelay > 0) ? slider.startTimeout = setTimeout(slider.play, slider.vars.initDelay): slider.play();
                    }
                }
                if (asNav) methods.asNav.setup();
                if (touch && slider.vars.touch) methods.touch();
                if (!fade || (fade && slider.vars.smoothHeight)) $(window).bind("resize orientationchange focus", methods.resize);
                slider.find("img").attr("draggable", "false");
                setTimeout(function() {
                    slider.vars.start(slider);
                }, 200);
            },
            asNav: {
                setup: function() {
                    slider.asNav = true;
                    slider.animatingTo = Math.floor(slider.currentSlide / slider.move);
                    slider.currentItem = slider.currentSlide;
                    slider.slides.removeClass(namespace + "active-slide").eq(slider.currentItem).addClass(namespace + "active-slide");
                    if (!msGesture) {
                        slider.slides.click(function(e) {
                            e.preventDefault();
                            var $slide = $(this),
                                target = $slide.index();
                            var posFromLeft = $slide.offset().left - $(slider).scrollLeft();
                            if (posFromLeft <= 0 && $slide.hasClass(namespace + 'active-slide')) {
                                slider.flexAnimate(slider.getTarget("prev"), true);
                            } else if (!$(slider.vars.asNavFor).data('flexslider').animating && !$slide.hasClass(namespace + "active-slide")) {
                                slider.direction = (slider.currentItem < target) ? "next" : "prev";
                                slider.flexAnimate(target, slider.vars.pauseOnAction, false, true, true);
                            }
                        });
                    } else {
                        el._slider = slider;
                        slider.slides.each(function() {
                            var that = this;
                            that._gesture = new MSGesture();
                            that._gesture.target = that;
                            that.addEventListener("MSPointerDown", function(e) {
                                e.preventDefault();
                                if (e.currentTarget._gesture) e.currentTarget._gesture.addPointer(e.pointerId);
                            }, false);
                            that.addEventListener("MSGestureTap", function(e) {
                                e.preventDefault();
                                var $slide = $(this),
                                    target = $slide.index();
                                if (!$(slider.vars.asNavFor).data('flexslider').animating && !$slide.hasClass('active')) {
                                    slider.direction = (slider.currentItem < target) ? "next" : "prev";
                                    slider.flexAnimate(target, slider.vars.pauseOnAction, false, true, true);
                                }
                            });
                        });
                    }
                }
            },
            controlNav: {
                setup: function() {
                    if (!slider.manualControls) {
                        methods.controlNav.setupPaging();
                    } else {
                        methods.controlNav.setupManual();
                    }
                },
                setupPaging: function() {
                    var type = (slider.vars.controlNav === "thumbnails") ? 'control-thumbs' : 'control-paging',
                        j = 1,
                        item, slide;
                    slider.controlNavScaffold = $('<ol class="' + namespace + 'control-nav ' + namespace + type + '"></ol>');
                    if (slider.pagingCount > 1) {
                        for (var i = 0; i < slider.pagingCount; i++) {
                            slide = slider.slides.eq(i);
                            item = (slider.vars.controlNav === "thumbnails") ? '<img src="' + slide.attr('data-thumb') + '"/>' : '<a>' + j + '</a>';
                            if ('thumbnails' === slider.vars.controlNav && true === slider.vars.thumbCaptions) {
                                var captn = slide.attr('data-thumbcaption');
                                if ('' != captn && undefined != captn) item += '<span class="' + namespace + 'caption">' + captn + '</span>';
                            }
                            slider.controlNavScaffold.append('<li>' + item + '</li>');
                            j++;
                        }
                    }
                    (slider.controlsContainer) ? $(slider.controlsContainer).append(slider.controlNavScaffold): slider.append(slider.controlNavScaffold);
                    methods.controlNav.set();
                    methods.controlNav.active();
                    slider.controlNavScaffold.delegate('a, img', eventType, function(event) {
                        event.preventDefault();
                        if (watchedEvent === "" || watchedEvent === event.type) {
                            var $this = $(this),
                                target = slider.controlNav.index($this);
                            if (!$this.hasClass(namespace + 'active')) {
                                slider.direction = (target > slider.currentSlide) ? "next" : "prev";
                                slider.flexAnimate(target, slider.vars.pauseOnAction);
                            }
                        }
                        if (watchedEvent === "") {
                            watchedEvent = event.type;
                        }
                        methods.setToClearWatchedEvent();
                    });
                },
                setupManual: function() {
                    slider.controlNav = slider.manualControls;
                    methods.controlNav.active();
                    slider.controlNav.bind(eventType, function(event) {
                        event.preventDefault();
                        if (watchedEvent === "" || watchedEvent === event.type) {
                            var $this = $(this),
                                target = slider.controlNav.index($this);
                            if (!$this.hasClass(namespace + 'active')) {
                                (target > slider.currentSlide) ? slider.direction = "next": slider.direction = "prev";
                                slider.flexAnimate(target, slider.vars.pauseOnAction);
                            }
                        }
                        if (watchedEvent === "") {
                            watchedEvent = event.type;
                        }
                        methods.setToClearWatchedEvent();
                    });
                },
                set: function() {
                    var selector = (slider.vars.controlNav === "thumbnails") ? 'img' : 'a';
                    slider.controlNav = $('.' + namespace + 'control-nav li ' + selector, (slider.controlsContainer) ? slider.controlsContainer : slider);
                },
                active: function() {
                    slider.controlNav.removeClass(namespace + "active").eq(slider.animatingTo).addClass(namespace + "active");
                },
                update: function(action, pos) {
                    if (slider.pagingCount > 1 && action === "add") {
                        slider.controlNavScaffold.append($('<li><a>' + slider.count + '</a></li>'));
                    } else if (slider.pagingCount === 1) {
                        slider.controlNavScaffold.find('li').remove();
                    } else {
                        slider.controlNav.eq(pos).closest('li').remove();
                    }
                    methods.controlNav.set();
                    (slider.pagingCount > 1 && slider.pagingCount !== slider.controlNav.length) ? slider.update(pos, action): methods.controlNav.active();
                }
            },
            directionNav: {
                setup: function() {
                    var directionNavScaffold = $('<ul class="' + namespace + 'direction-nav"><li><a class="' + namespace + 'prev" href="#">' + slider.vars.prevText + '</a></li><li><a class="' + namespace + 'next" href="#">' + slider.vars.nextText + '</a></li></ul>');
                    if (slider.controlsContainer) {
                        $(slider.controlsContainer).append(directionNavScaffold);
                        slider.directionNav = $('.' + namespace + 'direction-nav li a', slider.controlsContainer);
                    } else {
                        slider.append(directionNavScaffold);
                        slider.directionNav = $('.' + namespace + 'direction-nav li a', slider);
                    }
                    methods.directionNav.update();
                    slider.directionNav.bind(eventType, function(event) {
                        event.preventDefault();
                        var target;
                        if (watchedEvent === "" || watchedEvent === event.type) {
                            target = ($(this).hasClass(namespace + 'next')) ? slider.getTarget('next') : slider.getTarget('prev');
                            slider.flexAnimate(target, slider.vars.pauseOnAction);
                        }
                        if (watchedEvent === "") {
                            watchedEvent = event.type;
                        }
                        methods.setToClearWatchedEvent();
                    });
                },
                update: function() {
                    var disabledClass = namespace + 'disabled';
                    if (slider.pagingCount === 1) {
                        slider.directionNav.addClass(disabledClass).attr('tabindex', '-1');
                    } else if (!slider.vars.animationLoop) {
                        if (slider.animatingTo === 0) {
                            slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "prev").addClass(disabledClass).attr('tabindex', '-1');
                        } else if (slider.animatingTo === slider.last) {
                            slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "next").addClass(disabledClass).attr('tabindex', '-1');
                        } else {
                            slider.directionNav.removeClass(disabledClass).removeAttr('tabindex');
                        }
                    } else {
                        slider.directionNav.removeClass(disabledClass).removeAttr('tabindex');
                    }
                }
            },
            pausePlay: {
                setup: function() {
                    var pausePlayScaffold = $('<div class="' + namespace + 'pauseplay"><a></a></div>');
                    if (slider.controlsContainer) {
                        slider.controlsContainer.append(pausePlayScaffold);
                        slider.pausePlay = $('.' + namespace + 'pauseplay a', slider.controlsContainer);
                    } else {
                        slider.append(pausePlayScaffold);
                        slider.pausePlay = $('.' + namespace + 'pauseplay a', slider);
                    }
                    methods.pausePlay.update((slider.vars.slideshow) ? namespace + 'pause' : namespace + 'play');
                    slider.pausePlay.bind(eventType, function(event) {
                        event.preventDefault();
                        if (watchedEvent === "" || watchedEvent === event.type) {
                            if ($(this).hasClass(namespace + 'pause')) {
                                slider.manualPause = true;
                                slider.manualPlay = false;
                                slider.pause();
                            } else {
                                slider.manualPause = false;
                                slider.manualPlay = true;
                                slider.play();
                            }
                        }
                        if (watchedEvent === "") {
                            watchedEvent = event.type;
                        }
                        methods.setToClearWatchedEvent();
                    });
                },
                update: function(state) {
                    (state === "play") ? slider.pausePlay.removeClass(namespace + 'pause').addClass(namespace + 'play').html(slider.vars.playText): slider.pausePlay.removeClass(namespace + 'play').addClass(namespace + 'pause').html(slider.vars.pauseText);
                }
            },
            touch: function() {
                var startX, startY, offset, cwidth, dx, startT, scrolling = false,
                    localX = 0,
                    localY = 0,
                    accDx = 0;
                if (!msGesture) {
                    el.addEventListener('touchstart', onTouchStart, false);

                    function onTouchStart(e) {
                        if (slider.animating) {
                            e.preventDefault();
                        } else if ((window.navigator.msPointerEnabled) || e.touches.length === 1) {
                            slider.pause();
                            cwidth = (vertical) ? slider.h : slider.w;
                            startT = Number(new Date());
                            localX = e.touches[0].pageX;
                            localY = e.touches[0].pageY;
                            offset = (carousel && reverse && slider.animatingTo === slider.last) ? 0 : (carousel && reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) : (carousel && slider.currentSlide === slider.last) ? slider.limit : (carousel) ? ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.currentSlide : (reverse) ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
                            startX = (vertical) ? localY : localX;
                            startY = (vertical) ? localX : localY;
                            el.addEventListener('touchmove', onTouchMove, false);
                            el.addEventListener('touchend', onTouchEnd, false);
                        }
                    }

                    function onTouchMove(e) {
                        localX = e.touches[0].pageX;
                        localY = e.touches[0].pageY;
                        dx = (vertical) ? startX - localY : startX - localX;
                        scrolling = (vertical) ? (Math.abs(dx) < Math.abs(localX - startY)) : (Math.abs(dx) < Math.abs(localY - startY));
                        var fxms = 500;
                        if (!scrolling || Number(new Date()) - startT > fxms) {
                            e.preventDefault();
                            if (!fade && slider.transitions) {
                                if (!slider.vars.animationLoop) {
                                    dx = dx / ((slider.currentSlide === 0 && dx < 0 || slider.currentSlide === slider.last && dx > 0) ? (Math.abs(dx) / cwidth + 2) : 1);
                                }
                                slider.setProps(offset + dx, "setTouch");
                            }
                        }
                    }

                    function onTouchEnd(e) {
                        el.removeEventListener('touchmove', onTouchMove, false);
                        if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
                            var updateDx = (reverse) ? -dx : dx,
                                target = (updateDx > 0) ? slider.getTarget('next') : slider.getTarget('prev');
                            if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth / 2)) {
                                slider.flexAnimate(target, slider.vars.pauseOnAction);
                            } else {
                                if (!fade) slider.flexAnimate(slider.currentSlide, slider.vars.pauseOnAction, true);
                            }
                        }
                        el.removeEventListener('touchend', onTouchEnd, false);
                        startX = null;
                        startY = null;
                        dx = null;
                        offset = null;
                    }
                } else {
                    el.style.msTouchAction = "none";
                    el._gesture = new MSGesture();
                    el._gesture.target = el;
                    el.addEventListener("MSPointerDown", onMSPointerDown, false);
                    el._slider = slider;
                    el.addEventListener("MSGestureChange", onMSGestureChange, false);
                    el.addEventListener("MSGestureEnd", onMSGestureEnd, false);

                    function onMSPointerDown(e) {
                        e.stopPropagation();
                        if (slider.animating) {
                            e.preventDefault();
                        } else {
                            slider.pause();
                            el._gesture.addPointer(e.pointerId);
                            accDx = 0;
                            cwidth = (vertical) ? slider.h : slider.w;
                            startT = Number(new Date());
                            offset = (carousel && reverse && slider.animatingTo === slider.last) ? 0 : (carousel && reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) : (carousel && slider.currentSlide === slider.last) ? slider.limit : (carousel) ? ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.currentSlide : (reverse) ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
                        }
                    }

                    function onMSGestureChange(e) {
                        e.stopPropagation();
                        var slider = e.target._slider;
                        if (!slider) {
                            return;
                        }
                        var transX = -e.translationX,
                            transY = -e.translationY;
                        accDx = accDx + ((vertical) ? transY : transX);
                        dx = accDx;
                        scrolling = (vertical) ? (Math.abs(accDx) < Math.abs(-transX)) : (Math.abs(accDx) < Math.abs(-transY));
                        if (e.detail === e.MSGESTURE_FLAG_INERTIA) {
                            setImmediate(function() {
                                el._gesture.stop();
                            });
                            return;
                        }
                        if (!scrolling || Number(new Date()) - startT > 500) {
                            e.preventDefault();
                            if (!fade && slider.transitions) {
                                if (!slider.vars.animationLoop) {
                                    dx = accDx / ((slider.currentSlide === 0 && accDx < 0 || slider.currentSlide === slider.last && accDx > 0) ? (Math.abs(accDx) / cwidth + 2) : 1);
                                }
                                slider.setProps(offset + dx, "setTouch");
                            }
                        }
                    }

                    function onMSGestureEnd(e) {
                        e.stopPropagation();
                        var slider = e.target._slider;
                        if (!slider) {
                            return;
                        }
                        if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
                            var updateDx = (reverse) ? -dx : dx,
                                target = (updateDx > 0) ? slider.getTarget('next') : slider.getTarget('prev');
                            if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth / 2)) {
                                slider.flexAnimate(target, slider.vars.pauseOnAction);
                            } else {
                                if (!fade) slider.flexAnimate(slider.currentSlide, slider.vars.pauseOnAction, true);
                            }
                        }
                        startX = null;
                        startY = null;
                        dx = null;
                        offset = null;
                        accDx = 0;
                    }
                }
            },
            resize: function() {
                if (!slider.animating && slider.is(':visible')) {
                    if (!carousel) slider.doMath();
                    if (fade) {
                        methods.smoothHeight();
                    } else if (carousel) {
                        slider.slides.width(slider.computedW);
                        slider.update(slider.pagingCount);
                        slider.setProps();
                    } else if (vertical) {
                        slider.viewport.height(slider.h);
                        slider.setProps(slider.h, "setTotal");
                    } else {
                        if (slider.vars.smoothHeight) methods.smoothHeight();
                        slider.newSlides.width(slider.computedW);
                        slider.setProps(slider.computedW, "setTotal");
                    }
                }
            },
            smoothHeight: function(dur) {
                if (!vertical || fade) {
                    var $obj = (fade) ? slider : slider.viewport;
                    (dur) ? $obj.animate({
                        "height": slider.slides.eq(slider.animatingTo).height()
                    }, dur): $obj.height(slider.slides.eq(slider.animatingTo).height());
                }
            },
            sync: function(action) {
                var $obj = $(slider.vars.sync).data("flexslider"),
                    target = slider.animatingTo;
                switch (action) {
                    case "animate":
                        $obj.flexAnimate(target, slider.vars.pauseOnAction, false, true);
                        break;
                    case "play":
                        if (!$obj.playing && !$obj.asNav) {
                            $obj.play();
                        }
                        break;
                    case "pause":
                        $obj.pause();
                        break;
                }
            },
            pauseInvisible: {
                visProp: null,
                init: function() {
                    var prefixes = ['webkit', 'moz', 'ms', 'o'];
                    if ('hidden' in document) return 'hidden';
                    for (var i = 0; i < prefixes.length; i++) {
                        if ((prefixes[i] + 'Hidden') in document) methods.pauseInvisible.visProp = prefixes[i] + 'Hidden';
                    }
                    if (methods.pauseInvisible.visProp) {
                        var evtname = methods.pauseInvisible.visProp.replace(/[H|h]idden/, '') + 'visibilitychange';
                        document.addEventListener(evtname, function() {
                            if (methods.pauseInvisible.isHidden()) {
                                if (slider.startTimeout) clearTimeout(slider.startTimeout);
                                else slider.pause();
                            } else {
                                if (slider.started) slider.play();
                                else(slider.vars.initDelay > 0) ? setTimeout(slider.play, slider.vars.initDelay) : slider.play();
                            }
                        });
                    }
                },
                isHidden: function() {
                    return document[methods.pauseInvisible.visProp] || false;
                }
            },
            setToClearWatchedEvent: function() {
                clearTimeout(watchedEventClearTimer);
                watchedEventClearTimer = setTimeout(function() {
                    watchedEvent = "";
                }, 3000);
            }
        }
        slider.flexAnimate = function(target, pause, override, withSync, fromNav) {
            if (!slider.vars.animationLoop && target !== slider.currentSlide) {
                slider.direction = (target > slider.currentSlide) ? "next" : "prev";
            }
            if (asNav && slider.pagingCount === 1) slider.direction = (slider.currentItem < target) ? "next" : "prev";
            if (!slider.animating && (slider.canAdvance(target, fromNav) || override) && slider.is(":visible")) {
                if (asNav && withSync) {
                    var master = $(slider.vars.asNavFor).data('flexslider');
                    slider.atEnd = target === 0 || target === slider.count - 1;
                    master.flexAnimate(target, true, false, true, fromNav);
                    slider.direction = (slider.currentItem < target) ? "next" : "prev";
                    master.direction = slider.direction;
                    if (Math.ceil((target + 1) / slider.visible) - 1 !== slider.currentSlide && target !== 0) {
                        slider.currentItem = target;
                        slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
                        target = Math.floor(target / slider.visible);
                    } else {
                        slider.currentItem = target;
                        slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
                        return false;
                    }
                }
                slider.animating = true;
                slider.animatingTo = target;
                if (pause) slider.pause();
                slider.vars.before(slider);
                if (slider.syncExists && !fromNav) methods.sync("animate");
                if (slider.vars.controlNav) methods.controlNav.active();
                if (!carousel) slider.slides.removeClass(namespace + 'active-slide').eq(target).addClass(namespace + 'active-slide');
                slider.atEnd = target === 0 || target === slider.last;
                if (slider.vars.directionNav) methods.directionNav.update();
                if (target === slider.last) {
                    slider.vars.end(slider);
                    if (!slider.vars.animationLoop) slider.pause();
                }
                if (!fade) {
                    var dimension = (vertical) ? slider.slides.filter(':first').height() : slider.computedW,
                        margin, slideString, calcNext;
                    if (carousel) {
                        margin = slider.vars.itemMargin;
                        calcNext = ((slider.itemW + margin) * slider.move) * slider.animatingTo;
                        slideString = (calcNext > slider.limit && slider.visible !== 1) ? slider.limit : calcNext;
                    } else if (slider.currentSlide === 0 && target === slider.count - 1 && slider.vars.animationLoop && slider.direction !== "next") {
                        slideString = (reverse) ? (slider.count + slider.cloneOffset) * dimension : 0;
                    } else if (slider.currentSlide === slider.last && target === 0 && slider.vars.animationLoop && slider.direction !== "prev") {
                        slideString = (reverse) ? 0 : (slider.count + 1) * dimension;
                    } else {
                        slideString = (reverse) ? ((slider.count - 1) - target + slider.cloneOffset) * dimension : (target + slider.cloneOffset) * dimension;
                    }
                    slider.setProps(slideString, "", slider.vars.animationSpeed);
                    if (slider.transitions) {
                        if (!slider.vars.animationLoop || !slider.atEnd) {
                            slider.animating = false;
                            slider.currentSlide = slider.animatingTo;
                        }
                        slider.container.unbind("webkitTransitionEnd transitionend");
                        slider.container.bind("webkitTransitionEnd transitionend", function() {
                            slider.wrapup(dimension);
                        });
                    } else {
                        slider.container.animate(slider.args, slider.vars.animationSpeed, slider.vars.easing, function() {
                            slider.wrapup(dimension);
                        });
                    }
                } else {
                    if (!touch) {
                        slider.slides.eq(slider.currentSlide).css({
                            "zIndex": 1
                        }).animate({
                            "opacity": 0
                        }, slider.vars.animationSpeed, slider.vars.easing);
                        slider.slides.eq(target).css({
                            "zIndex": 2
                        }).animate({
                            "opacity": 1
                        }, slider.vars.animationSpeed, slider.vars.easing, slider.wrapup);
                    } else {
                        slider.slides.eq(slider.currentSlide).css({
                            "opacity": 0,
                            "zIndex": 1
                        });
                        slider.slides.eq(target).css({
                            "opacity": 1,
                            "zIndex": 2
                        });
                        slider.wrapup(dimension);
                    }
                }
                if (slider.vars.smoothHeight) methods.smoothHeight(slider.vars.animationSpeed);
            }
        }
        slider.wrapup = function(dimension) {
            if (!fade && !carousel) {
                if (slider.currentSlide === 0 && slider.animatingTo === slider.last && slider.vars.animationLoop) {
                    slider.setProps(dimension, "jumpEnd");
                } else if (slider.currentSlide === slider.last && slider.animatingTo === 0 && slider.vars.animationLoop) {
                    slider.setProps(dimension, "jumpStart");
                }
            }
            slider.animating = false;
            slider.currentSlide = slider.animatingTo;
            slider.vars.after(slider);
        }
        slider.animateSlides = function() {
            if (!slider.animating && focused) slider.flexAnimate(slider.getTarget("next"));
        }
        slider.pause = function() {
            clearInterval(slider.animatedSlides);
            slider.animatedSlides = null;
            slider.playing = false;
            if (slider.vars.pausePlay) methods.pausePlay.update("play");
            if (slider.syncExists) methods.sync("pause");
        }
        slider.play = function() {
            if (slider.playing) clearInterval(slider.animatedSlides);
            slider.animatedSlides = slider.animatedSlides || setInterval(slider.animateSlides, slider.vars.slideshowSpeed);
            slider.started = slider.playing = true;
            if (slider.vars.pausePlay) methods.pausePlay.update("pause");
            if (slider.syncExists) methods.sync("play");
        }
        slider.stop = function() {
            slider.pause();
            slider.stopped = true;
        }
        slider.canAdvance = function(target, fromNav) {
            var last = (asNav) ? slider.pagingCount - 1 : slider.last;
            return (fromNav) ? true : (asNav && slider.currentItem === slider.count - 1 && target === 0 && slider.direction === "prev") ? true : (asNav && slider.currentItem === 0 && target === slider.pagingCount - 1 && slider.direction !== "next") ? false : (target === slider.currentSlide && !asNav) ? false : (slider.vars.animationLoop) ? true : (slider.atEnd && slider.currentSlide === 0 && target === last && slider.direction !== "next") ? false : (slider.atEnd && slider.currentSlide === last && target === 0 && slider.direction === "next") ? false : true;
        }
        slider.getTarget = function(dir) {
            slider.direction = dir;
            if (dir === "next") {
                return (slider.currentSlide === slider.last) ? 0 : slider.currentSlide + 1;
            } else {
                return (slider.currentSlide === 0) ? slider.last : slider.currentSlide - 1;
            }
        }
        slider.setProps = function(pos, special, dur) {
            var target = (function() {
                var posCheck = (pos) ? pos : ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo,
                    posCalc = (function() {
                        if (carousel) {
                            return (special === "setTouch") ? pos : (reverse && slider.animatingTo === slider.last) ? 0 : (reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) : (slider.animatingTo === slider.last) ? slider.limit : posCheck;
                        } else {
                            switch (special) {
                                case "setTotal":
                                    return (reverse) ? ((slider.count - 1) - slider.currentSlide + slider.cloneOffset) * pos : (slider.currentSlide + slider.cloneOffset) * pos;
                                case "setTouch":
                                    return (reverse) ? pos : pos;
                                case "jumpEnd":
                                    return (reverse) ? pos : slider.count * pos;
                                case "jumpStart":
                                    return (reverse) ? slider.count * pos : pos;
                                default:
                                    return pos;
                            }
                        }
                    }());
                return (posCalc * -1) + "px";
            }());
            if (slider.transitions) {
                target = (vertical) ? "translate3d(0," + target + ",0)" : "translate3d(" + target + ",0,0)";
                dur = (dur !== undefined) ? (dur / 1000) + "s" : "0s";
                slider.container.css("-" + slider.pfx + "-transition-duration", dur);
            }
            slider.args[slider.prop] = target;
            if (slider.transitions || dur === undefined) slider.container.css(slider.args);
        }
        slider.setup = function(type) {
            if (!fade) {
                var sliderOffset, arr;
                if (type === "init") {
                    slider.viewport = $('<div class="' + namespace + 'viewport"></div>').css({
                        "overflow": "hidden",
                        "position": "relative"
                    }).appendTo(slider).append(slider.container);
                    slider.cloneCount = 0;
                    slider.cloneOffset = 0;
                    if (reverse) {
                        arr = $.makeArray(slider.slides).reverse();
                        slider.slides = $(arr);
                        slider.container.empty().append(slider.slides);
                    }
                }
                if (slider.vars.animationLoop && !carousel) {
                    slider.cloneCount = 2;
                    slider.cloneOffset = 1;
                    if (type !== "init") slider.container.find('.clone').remove();
                    slider.container.append(slider.slides.first().clone().addClass('clone').attr('aria-hidden', 'true')).prepend(slider.slides.last().clone().addClass('clone').attr('aria-hidden', 'true'));
                }
                slider.newSlides = $(slider.vars.selector, slider);
                sliderOffset = (reverse) ? slider.count - 1 - slider.currentSlide + slider.cloneOffset : slider.currentSlide + slider.cloneOffset;
                if (vertical && !carousel) {
                    slider.container.height((slider.count + slider.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
                    setTimeout(function() {
                        slider.newSlides.css({
                            "display": "block"
                        });
                        slider.doMath();
                        slider.viewport.height(slider.h);
                        slider.setProps(sliderOffset * slider.h, "init");
                    }, (type === "init") ? 100 : 0);
                } else {
                    slider.container.width((slider.count + slider.cloneCount) * 200 + "%");
                    slider.setProps(sliderOffset * slider.computedW, "init");
                    setTimeout(function() {
                        slider.doMath();
                        slider.newSlides.css({
                            "width": slider.computedW,
                            "float": "left",
                            "display": "block"
                        });
                        if (slider.vars.smoothHeight) methods.smoothHeight();
                    }, (type === "init") ? 100 : 0);
                }
            } else {
                slider.slides.css({
                    "width": "100%",
                    "float": "left",
                    "marginRight": "-100%",
                    "position": "relative"
                });
                if (type === "init") {
                    if (!touch) {
                        slider.slides.css({
                            "opacity": 0,
                            "display": "block",
                            "zIndex": 1
                        }).eq(slider.currentSlide).css({
                            "zIndex": 2
                        }).animate({
                            "opacity": 1
                        }, slider.vars.animationSpeed, slider.vars.easing);
                    } else {
                        slider.slides.css({
                            "opacity": 0,
                            "display": "block",
                            "webkitTransition": "opacity " + slider.vars.animationSpeed / 1000 + "s ease",
                            "zIndex": 1
                        }).eq(slider.currentSlide).css({
                            "opacity": 1,
                            "zIndex": 2
                        });
                    }
                }
                if (slider.vars.smoothHeight) methods.smoothHeight();
            }
            if (!carousel) slider.slides.removeClass(namespace + "active-slide").eq(slider.currentSlide).addClass(namespace + "active-slide");
        }
        slider.doMath = function() {
            var slide = slider.slides.first(),
                slideMargin = slider.vars.itemMargin,
                minItems = slider.vars.minItems,
                maxItems = slider.vars.maxItems;
            slider.w = (slider.viewport === undefined) ? slider.width() : slider.viewport.width();
            slider.h = slide.height();
            slider.boxPadding = slide.outerWidth() - slide.width();
            if (carousel) {
                slider.itemT = slider.vars.itemWidth + slideMargin;
                slider.minW = (minItems) ? minItems * slider.itemT : slider.w;
                slider.maxW = (maxItems) ? (maxItems * slider.itemT) - slideMargin : slider.w;
                slider.itemW = (slider.minW > slider.w) ? (slider.w - (slideMargin * (minItems - 1))) / minItems : (slider.maxW < slider.w) ? (slider.w - (slideMargin * (maxItems - 1))) / maxItems : (slider.vars.itemWidth > slider.w) ? slider.w : slider.vars.itemWidth;
                slider.visible = Math.floor(slider.w / (slider.itemW));
                slider.move = (slider.vars.move > 0 && slider.vars.move < slider.visible) ? slider.vars.move : slider.visible;
                slider.pagingCount = Math.ceil(((slider.count - slider.visible) / slider.move) + 1);
                slider.last = slider.pagingCount - 1;
                slider.limit = (slider.pagingCount === 1) ? 0 : (slider.vars.itemWidth > slider.w) ? (slider.itemW * (slider.count - 1)) + (slideMargin * (slider.count - 1)) : ((slider.itemW + slideMargin) * slider.count) - slider.w - slideMargin;
            } else {
                slider.itemW = slider.w;
                slider.pagingCount = slider.count;
                slider.last = slider.count - 1;
            }
            slider.computedW = slider.itemW - slider.boxPadding;
        }
        slider.update = function(pos, action) {
            slider.doMath();
            if (!carousel) {
                if (pos < slider.currentSlide) {
                    slider.currentSlide += 1;
                } else if (pos <= slider.currentSlide && pos !== 0) {
                    slider.currentSlide -= 1;
                }
                slider.animatingTo = slider.currentSlide;
            }
            if (slider.vars.controlNav && !slider.manualControls) {
                if ((action === "add" && !carousel) || slider.pagingCount > slider.controlNav.length) {
                    methods.controlNav.update("add");
                } else if ((action === "remove" && !carousel) || slider.pagingCount < slider.controlNav.length) {
                    if (carousel && slider.currentSlide > slider.last) {
                        slider.currentSlide -= 1;
                        slider.animatingTo -= 1;
                    }
                    methods.controlNav.update("remove", slider.last);
                }
            }
            if (slider.vars.directionNav) methods.directionNav.update();
        }
        slider.addSlide = function(obj, pos) {
            var $obj = $(obj);
            slider.count += 1;
            slider.last = slider.count - 1;
            if (vertical && reverse) {
                (pos !== undefined) ? slider.slides.eq(slider.count - pos).after($obj): slider.container.prepend($obj);
            } else {
                (pos !== undefined) ? slider.slides.eq(pos).before($obj): slider.container.append($obj);
            }
            slider.update(pos, "add");
            slider.slides = $(slider.vars.selector + ':not(.clone)', slider);
            slider.setup();
            slider.vars.added(slider);
        }
        slider.removeSlide = function(obj) {
            var pos = (isNaN(obj)) ? slider.slides.index($(obj)) : obj;
            slider.count -= 1;
            slider.last = slider.count - 1;
            if (isNaN(obj)) {
                $(obj, slider.slides).remove();
            } else {
                (vertical && reverse) ? slider.slides.eq(slider.last).remove(): slider.slides.eq(obj).remove();
            }
            slider.doMath();
            slider.update(pos, "remove");
            slider.slides = $(slider.vars.selector + ':not(.clone)', slider);
            slider.setup();
            slider.vars.removed(slider);
        }
        methods.init();
    }
    $(window).blur(function(e) {
        focused = false;
    }).focus(function(e) {
        focused = true;
    });
    $.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: false,
        animationLoop: true,
        smoothHeight: false,
        startAt: 0,
        slideshow: true,
        slideshowSpeed: 7000,
        animationSpeed: 600,
        initDelay: 0,
        randomize: false,
        thumbCaptions: false,
        pauseOnAction: true,
        pauseOnHover: false,
        pauseInvisible: true,
        useCSS: true,
        touch: true,
        video: false,
        controlNav: true,
        directionNav: true,
        prevText: "Previous",
        nextText: "Next",
        keyboard: true,
        multipleKeyboard: false,
        mousewheel: false,
        pausePlay: false,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 1,
        maxItems: 0,
        move: 0,
        allowOneSlide: true,
        start: function() {},
        before: function() {},
        after: function() {},
        end: function() {},
        added: function() {},
        removed: function() {}
    }
    $.fn.flexslider = function(options) {
        if (options === undefined) options = {};
        if (typeof options === "object") {
            return this.each(function() {
                var $this = $(this),
                    selector = (options.selector) ? options.selector : ".slides > li",
                    $slides = $this.find(selector);
                if (($slides.length === 1 && options.allowOneSlide === true) || $slides.length === 0) {
                    $slides.fadeIn(400);
                    if (options.start) options.start($this);
                } else if ($this.data('flexslider') === undefined) {
                    new $.flexslider(this, options);
                }
            });
        } else {
            var $slider = $(this).data('flexslider');
            switch (options) {
                case "play":
                    $slider.play();
                    break;
                case "pause":
                    $slider.pause();
                    break;
                case "stop":
                    $slider.stop();
                    break;
                case "next":
                    $slider.flexAnimate($slider.getTarget("next"), true);
                    break;
                case "prev":
                case "previous":
                    $slider.flexAnimate($slider.getTarget("prev"), true);
                    break;
                default:
                    if (typeof options === "number") $slider.flexAnimate(options, true);
            }
        }
    }
})(jQuery);
/*! Stellar.js v0.6.2 | Copyright 2013, Mark Dalgleish | http://markdalgleish.com/projects/stellar.js | http://markdalgleish.mit-license.org */
(function(e, t, n, r) {
    function d(t, n) {
        this.element = t, this.options = e.extend({}, s, n), this._defaults = s, this._name = i, this.init()
    }
    var i = "stellar",
        s = {
            scrollProperty: "scroll",
            positionProperty: "position",
            horizontalScrolling: !0,
            verticalScrolling: !0,
            horizontalOffset: 0,
            verticalOffset: 0,
            responsive: !1,
            parallaxBackgrounds: !0,
            parallaxElements: !0,
            hideDistantElements: !0,
            hideElement: function(e) {
                e.hide()
            },
            showElement: function(e) {
                e.show()
            }
        },
        o = {
            scroll: {
                getLeft: function(e) {
                    return e.scrollLeft()
                },
                setLeft: function(e, t) {
                    e.scrollLeft(t)
                },
                getTop: function(e) {
                    return e.scrollTop()
                },
                setTop: function(e, t) {
                    e.scrollTop(t)
                }
            },
            position: {
                getLeft: function(e) {
                    return parseInt(e.css("left"), 10) * -1
                },
                getTop: function(e) {
                    return parseInt(e.css("top"), 10) * -1
                }
            },
            margin: {
                getLeft: function(e) {
                    return parseInt(e.css("margin-left"), 10) * -1
                },
                getTop: function(e) {
                    return parseInt(e.css("margin-top"), 10) * -1
                }
            },
            transform: {
                getLeft: function(e) {
                    var t = getComputedStyle(e[0])[f];
                    return t !== "none" ? parseInt(t.match(/(-?[0-9]+)/g)[4], 10) * -1 : 0
                },
                getTop: function(e) {
                    var t = getComputedStyle(e[0])[f];
                    return t !== "none" ? parseInt(t.match(/(-?[0-9]+)/g)[5], 10) * -1 : 0
                }
            }
        },
        u = {
            position: {
                setLeft: function(e, t) {
                    e.css("left", t)
                },
                setTop: function(e, t) {
                    e.css("top", t)
                }
            },
            transform: {
                setPosition: function(e, t, n, r, i) {
                    e[0].style[f] = "translate3d(" + (t - n) + "px, " + (r - i) + "px, 0)"
                }
            }
        },
        a = function() {
            var t = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
                n = e("script")[0].style,
                r = "",
                i;
            for (i in n)
                if (t.test(i)) {
                    r = i.match(t)[0];
                    break
                }
            return "WebkitOpacity" in n && (r = "Webkit"), "KhtmlOpacity" in n && (r = "Khtml"),
                function(e) {
                    return r + (r.length > 0 ? e.charAt(0).toUpperCase() + e.slice(1) : e)
                }
        }(),
        f = a("transform"),
        l = e("<div />", {
            style: "background:#fff"
        }).css("background-position-x") !== r,
        c = l ? function(e, t, n) {
            e.css({
                "background-position-x": t,
                "background-position-y": n
            })
        } : function(e, t, n) {
            e.css("background-position", t + " " + n)
        },
        h = l ? function(e) {
            return [e.css("background-position-x"), e.css("background-position-y")]
        } : function(e) {
            return e.css("background-position").split(" ")
        },
        p = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
            setTimeout(e, 1e3 / 60)
        };
    d.prototype = {
        init: function() {
            this.options.name = i + "_" + Math.floor(Math.random() * 1e9), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({
                firstLoad: !0
            }), this.options.scrollProperty === "scroll" ? this._handleScrollEvent() : this._startAnimationLoop()
        },
        _defineElements: function() {
            this.element === n.body && (this.element = t), this.$scrollElement = e(this.element), this.$element = this.element === t ? e("body") : this.$scrollElement, this.$viewportElement = this.options.viewportElement !== r ? e(this.options.viewportElement) : this.$scrollElement[0] === t || this.options.scrollProperty === "scroll" ? this.$scrollElement : this.$scrollElement.parent()
        },
        _defineGetters: function() {
            var e = this,
                t = o[e.options.scrollProperty];
            this._getScrollLeft = function() {
                return t.getLeft(e.$scrollElement)
            }, this._getScrollTop = function() {
                return t.getTop(e.$scrollElement)
            }
        },
        _defineSetters: function() {
            var t = this,
                n = o[t.options.scrollProperty],
                r = u[t.options.positionProperty],
                i = n.setLeft,
                s = n.setTop;
            this._setScrollLeft = typeof i == "function" ? function(e) {
                i(t.$scrollElement, e)
            } : e.noop, this._setScrollTop = typeof s == "function" ? function(e) {
                s(t.$scrollElement, e)
            } : e.noop, this._setPosition = r.setPosition || function(e, n, i, s, o) {
                t.options.horizontalScrolling && r.setLeft(e, n, i), t.options.verticalScrolling && r.setTop(e, s, o)
            }
        },
        _handleWindowLoadAndResize: function() {
            var n = this,
                r = e(t);
            n.options.responsive && r.bind("load." + this.name, function() {
                n.refresh()
            }), r.bind("resize." + this.name, function() {
                n._detectViewport(), n.options.responsive && n.refresh()
            })
        },
        refresh: function(n) {
            var r = this,
                i = r._getScrollLeft(),
                s = r._getScrollTop();
            (!n || !n.firstLoad) && this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), n && n.firstLoad && /WebKit/.test(navigator.userAgent) && e(t).load(function() {
                var e = r._getScrollLeft(),
                    t = r._getScrollTop();
                r._setScrollLeft(e + 1), r._setScrollTop(t + 1), r._setScrollLeft(e), r._setScrollTop(t)
            }), this._setScrollLeft(i), this._setScrollTop(s)
        },
        _detectViewport: function() {
            var e = this.$viewportElement.offset(),
                t = e !== null && e !== r;
            this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = t ? e.top : 0, this.viewportOffsetLeft = t ? e.left : 0
        },
        _findParticles: function() {
            var t = this,
                n = this._getScrollLeft(),
                i = this._getScrollTop();
            if (this.particles !== r)
                for (var s = this.particles.length - 1; s >= 0; s--) this.particles[s].$element.data("stellar-elementIsActive", r);
            this.particles = [];
            if (!this.options.parallaxElements) return;
            this.$element.find("[data-stellar-ratio]").each(function(n) {
                var i = e(this),
                    s, o, u, a, f, l, c, h, p, d = 0,
                    v = 0,
                    m = 0,
                    g = 0;
                if (!i.data("stellar-elementIsActive")) i.data("stellar-elementIsActive", this);
                else if (i.data("stellar-elementIsActive") !== this) return;
                t.options.showElement(i), i.data("stellar-startingLeft") ? (i.css("left", i.data("stellar-startingLeft")), i.css("top", i.data("stellar-startingTop"))) : (i.data("stellar-startingLeft", i.css("left")), i.data("stellar-startingTop", i.css("top"))), u = i.position().left, a = i.position().top, f = i.css("margin-left") === "auto" ? 0 : parseInt(i.css("margin-left"), 10), l = i.css("margin-top") === "auto" ? 0 : parseInt(i.css("margin-top"), 10), h = i.offset().left - f, p = i.offset().top - l, i.parents().each(function() {
                    var t = e(this);
                    if (t.data("stellar-offset-parent") === !0) return d = m, v = g, c = t, !1;
                    m += t.position().left, g += t.position().top
                }), s = i.data("stellar-horizontal-offset") !== r ? i.data("stellar-horizontal-offset") : c !== r && c.data("stellar-horizontal-offset") !== r ? c.data("stellar-horizontal-offset") : t.horizontalOffset, o = i.data("stellar-vertical-offset") !== r ? i.data("stellar-vertical-offset") : c !== r && c.data("stellar-vertical-offset") !== r ? c.data("stellar-vertical-offset") : t.verticalOffset, t.particles.push({
                    $element: i,
                    $offsetParent: c,
                    isFixed: i.css("position") === "fixed",
                    horizontalOffset: s,
                    verticalOffset: o,
                    startingPositionLeft: u,
                    startingPositionTop: a,
                    startingOffsetLeft: h,
                    startingOffsetTop: p,
                    parentOffsetLeft: d,
                    parentOffsetTop: v,
                    stellarRatio: i.data("stellar-ratio") !== r ? i.data("stellar-ratio") : 1,
                    width: i.outerWidth(!0),
                    height: i.outerHeight(!0),
                    isHidden: !1
                })
            })
        },
        _findBackgrounds: function() {
            var t = this,
                n = this._getScrollLeft(),
                i = this._getScrollTop(),
                s;
            this.backgrounds = [];
            if (!this.options.parallaxBackgrounds) return;
            s = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (s = s.add(this.$element)), s.each(function() {
                var s = e(this),
                    o = h(s),
                    u, a, f, l, p, d, v, m, g, y = 0,
                    b = 0,
                    w = 0,
                    E = 0;
                if (!s.data("stellar-backgroundIsActive")) s.data("stellar-backgroundIsActive", this);
                else if (s.data("stellar-backgroundIsActive") !== this) return;
                s.data("stellar-backgroundStartingLeft") ? c(s, s.data("stellar-backgroundStartingLeft"), s.data("stellar-backgroundStartingTop")) : (s.data("stellar-backgroundStartingLeft", o[0]), s.data("stellar-backgroundStartingTop", o[1])), p = s.css("margin-left") === "auto" ? 0 : parseInt(s.css("margin-left"), 10), d = s.css("margin-top") === "auto" ? 0 : parseInt(s.css("margin-top"), 10), v = s.offset().left - p - n, m = s.offset().top - d - i, s.parents().each(function() {
                    var t = e(this);
                    if (t.data("stellar-offset-parent") === !0) return y = w, b = E, g = t, !1;
                    w += t.position().left, E += t.position().top
                }), u = s.data("stellar-horizontal-offset") !== r ? s.data("stellar-horizontal-offset") : g !== r && g.data("stellar-horizontal-offset") !== r ? g.data("stellar-horizontal-offset") : t.horizontalOffset, a = s.data("stellar-vertical-offset") !== r ? s.data("stellar-vertical-offset") : g !== r && g.data("stellar-vertical-offset") !== r ? g.data("stellar-vertical-offset") : t.verticalOffset, t.backgrounds.push({
                    $element: s,
                    $offsetParent: g,
                    isFixed: s.css("background-attachment") === "fixed",
                    horizontalOffset: u,
                    verticalOffset: a,
                    startingValueLeft: o[0],
                    startingValueTop: o[1],
                    startingBackgroundPositionLeft: isNaN(parseInt(o[0], 10)) ? 0 : parseInt(o[0], 10),
                    startingBackgroundPositionTop: isNaN(parseInt(o[1], 10)) ? 0 : parseInt(o[1], 10),
                    startingPositionLeft: s.position().left,
                    startingPositionTop: s.position().top,
                    startingOffsetLeft: v,
                    startingOffsetTop: m,
                    parentOffsetLeft: y,
                    parentOffsetTop: b,
                    stellarRatio: s.data("stellar-background-ratio") === r ? 1 : s.data("stellar-background-ratio")
                })
            })
        },
        _reset: function() {
            var e, t, n, r, i;
            for (i = this.particles.length - 1; i >= 0; i--) e = this.particles[i], t = e.$element.data("stellar-startingLeft"), n = e.$element.data("stellar-startingTop"), this._setPosition(e.$element, t, t, n, n), this.options.showElement(e.$element), e.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
            for (i = this.backgrounds.length - 1; i >= 0; i--) r = this.backgrounds[i], r.$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), c(r.$element, r.startingValueLeft, r.startingValueTop)
        },
        destroy: function() {
            this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), this._animationLoop = e.noop, e(t).unbind("load." + this.name).unbind("resize." + this.name)
        },
        _setOffsets: function() {
            var n = this,
                r = e(t);
            r.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), typeof this.options.horizontalOffset == "function" ? (this.horizontalOffset = this.options.horizontalOffset(), r.bind("resize.horizontal-" + this.name, function() {
                n.horizontalOffset = n.options.horizontalOffset()
            })) : this.horizontalOffset = this.options.horizontalOffset, typeof this.options.verticalOffset == "function" ? (this.verticalOffset = this.options.verticalOffset(), r.bind("resize.vertical-" + this.name, function() {
                n.verticalOffset = n.options.verticalOffset()
            })) : this.verticalOffset = this.options.verticalOffset
        },
        _repositionElements: function() {
            var e = this._getScrollLeft(),
                t = this._getScrollTop(),
                n, r, i, s, o, u, a, f = !0,
                l = !0,
                h, p, d, v, m;
            if (this.currentScrollLeft === e && this.currentScrollTop === t && this.currentWidth === this.viewportWidth && this.currentHeight === this.viewportHeight) return;
            this.currentScrollLeft = e, this.currentScrollTop = t, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight;
            for (m = this.particles.length - 1; m >= 0; m--) i = this.particles[m], s = i.isFixed ? 1 : 0, this.options.horizontalScrolling ? (h = (e + i.horizontalOffset + this.viewportOffsetLeft + i.startingPositionLeft - i.startingOffsetLeft + i.parentOffsetLeft) * -(i.stellarRatio + s - 1) + i.startingPositionLeft, d = h - i.startingPositionLeft + i.startingOffsetLeft) : (h = i.startingPositionLeft, d = i.startingOffsetLeft), this.options.verticalScrolling ? (p = (t + i.verticalOffset + this.viewportOffsetTop + i.startingPositionTop - i.startingOffsetTop + i.parentOffsetTop) * -(i.stellarRatio + s - 1) + i.startingPositionTop, v = p - i.startingPositionTop + i.startingOffsetTop) : (p = i.startingPositionTop, v = i.startingOffsetTop), this.options.hideDistantElements && (l = !this.options.horizontalScrolling || d + i.width > (i.isFixed ? 0 : e) && d < (i.isFixed ? 0 : e) + this.viewportWidth + this.viewportOffsetLeft, f = !this.options.verticalScrolling || v + i.height > (i.isFixed ? 0 : t) && v < (i.isFixed ? 0 : t) + this.viewportHeight + this.viewportOffsetTop), l && f ? (i.isHidden && (this.options.showElement(i.$element), i.isHidden = !1), this._setPosition(i.$element, h, i.startingPositionLeft, p, i.startingPositionTop)) : i.isHidden || (this.options.hideElement(i.$element), i.isHidden = !0);
            for (m = this.backgrounds.length - 1; m >= 0; m--) o = this.backgrounds[m], s = o.isFixed ? 0 : 1, u = this.options.horizontalScrolling ? (e + o.horizontalOffset - this.viewportOffsetLeft - o.startingOffsetLeft + o.parentOffsetLeft - o.startingBackgroundPositionLeft) * (s - o.stellarRatio) + "px" : o.startingValueLeft, a = this.options.verticalScrolling ? (t + o.verticalOffset - this.viewportOffsetTop - o.startingOffsetTop + o.parentOffsetTop - o.startingBackgroundPositionTop) * (s - o.stellarRatio) + "px" : o.startingValueTop, c(o.$element, u, a)
        },
        _handleScrollEvent: function() {
            var e = this,
                t = !1,
                n = function() {
                    e._repositionElements(), t = !1
                },
                r = function() {
                    t || (p(n), t = !0)
                };
            this.$scrollElement.bind("scroll." + this.name, r), r()
        },
        _startAnimationLoop: function() {
            var e = this;
            this._animationLoop = function() {
                p(e._animationLoop), e._repositionElements()
            }, this._animationLoop()
        }
    }, e.fn[i] = function(t) {
        var n = arguments;
        if (t === r || typeof t == "object") return this.each(function() {
            e.data(this, "plugin_" + i) || e.data(this, "plugin_" + i, new d(this, t))
        });
        if (typeof t == "string" && t[0] !== "_" && t !== "init") return this.each(function() {
            var r = e.data(this, "plugin_" + i);
            r instanceof d && typeof r[t] == "function" && r[t].apply(r, Array.prototype.slice.call(n, 1)), t === "destroy" && e.data(this, "plugin_" + i, null)
        })
    }, e[i] = function(n) {
        var r = e(t);
        return r.stellar.apply(r, Array.prototype.slice.call(arguments, 0))
    }, e[i].scrollProperty = o, e[i].positionProperty = u, t.Stellar = d
})(jQuery, this, document);