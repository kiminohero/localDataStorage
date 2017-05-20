/*///////////////////////////////////////////////////////////////////////////////////////////////////
localDataStorage 1.1.0
/////////////////////////////////////////////////////////////////////////////////////////////////////
This version is
Copyright (c) 2017, William P. "Mac" McMeans
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of localDataStorage nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

This version of localDataStorage incorporates SMAZ (a simple string compression library written in C)
by Salvatore Sanfilippo (https://github.com/antirez/smaz), under a BSD license. The derivative work
included in this project (a javascript port of C code) was written by personalcomputer
(https://github.com/personalcomputer/smaz.js), under the same BSD license. 
/////////////////////////////////////////////////////////////////////////////////////////////////////
SMAZ
/////////////////////////////////////////////////////////////////////////////////////////////////////
Copyright (c) 2006-2009, Salvatore Sanfilippo
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
    * Neither the name of Smaz nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

This version of localDataStorage incorporates alvoPRNG (a pseudo random number generator) by
Ribeiro Alvo (http://www.number.com.pt/index.html), under a BSD license. 
/////////////////////////////////////////////////////////////////////////////////////////////////////
alvoPRNG 1.0
/////////////////////////////////////////////////////////////////////////////////////////////////////
Copyright (c) 2017, Ribeiro Alvo
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of alvoPRNG nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
/////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////*/
var localDataStorage = function(e) {
    return function(e) {
        "use strict";
        var r = function() {
            return String.fromCodePoint(128);
        }, n = function() {
            return String.fromCodePoint(129);
        }, t = function() {
            return String.fromCodePoint(141);
        }, o = function() {
            return String.fromCodePoint(142);
        }, i = function() {
            return String.fromCodePoint(143);
        }, a = function() {
            return String.fromCodePoint(144);
        }, f = 123456789, u = function() {
            return new Date().getTime() + ":" + (1e8 * Math.random() | 0);
        }(), s = e || u, c = function(e) {
            return function(e) {
                function r(r) {
                    var a = r;
                    if (r < 10) throw new Error("Specified seed must be greater than 9");
                    a += "", n = a.length, t = "";
                    for (var f = 0; f < n; f++) t += a[n - f - 1];
                    "string" == typeof e && (n = 2 * (n + 1)), o = +("0." + t), i = +("0." + n);
                    for (var u = 0; u < 20; u++) i += o, o = (i * o + i) % 1;
                }
                var n, t, o, i, a, f = function() {
                    return new Date().getTime();
                }();
                a = e || f, r(a);
                var u = function() {
                    return i += o, o = (i * o + i) % 1;
                }, s = function() {
                    return u();
                };
                return s.seed = function(e) {
                    r(e);
                }, s;
            }(e);
        }, d = function(e) {
            var f, u = "";
            if (void 0 === e) throw new Error("No value to convert from");
            if (-1 === e.indexOf(n()) && -1 === e.indexOf(t()) && -1 === e.indexOf(o()) && -1 === e.indexOf(i()) && -1 === e.indexOf(a())) if ("{" === e[0] || "[" === e[0]) try {
                u = JSON.parse(e);
            } catch (r) {
                u = e;
            } else u = e == +e ? +e : e; else "" === u && (f = n(), -1 !== e.indexOf(f) && (e = e.substr(0, e.indexOf(f)), 
            -1 !== e.indexOf(r()) && (e = e.substr(1, e.length), e = F(e)), u = e)), "" === u && (f = t(), 
            -1 !== e.indexOf(f) && (e = e.substr(0, e.indexOf(f)), u = new Date(JSON.parse(e)))), 
            "" === u && (f = o(), -1 !== e.indexOf(f) && (e = e.substr(0, e.indexOf(f)), u = parseFloat(e))), 
            "" === u && (f = i(), -1 !== e.indexOf(f) && (e = e.substr(0, e.indexOf(f)), u = "1" === e)), 
            "" === u && (f = a(), -1 !== e.indexOf(f) && (e = e.substr(0, e.indexOf(f)), u = JSON.parse(e)));
            return u;
        }, l = function(e) {
            var f = "", u = "";
            if (void 0 === e) throw new Error("No value to convert to");
            return "string" == typeof e ? (u = "string", f = n(), K(e) && (u = "compressed string", 
            e = h(e), e = r() + e)) : "object" == typeof e && (e instanceof Date || e == new Date(e)) ? (u = "date", 
            f = t(), e = JSON.stringify(e)) : "number" == typeof e ? (u = "integer", -1 !== (e + "").indexOf(".") && (u = "float"), 
            f = o(), e += "") : "boolean" == typeof e ? (u = "boolean", f = i(), e = Number(e), 
            e += "") : "object" == typeof e && (u = "object", e instanceof Array && (u = "array"), 
            f = a(), e = JSON.stringify(e)), "" !== f && (e += f), [ e, u ];
        }, h = function(e) {
            return P.compress(e);
        }, g = function(e) {
            for (var r = [ "bytes", "KB", "MB" ], n = 0; e > 1024; ) n++, e /= 1024;
            return e.toFixed(2) + " " + r[n];
        }, v = function(e, r) {
            var n, t = e.length, o = function() {
                var e = new Uint32Array(2);
                return window.crypto.getRandomValues(e), +("0." + e[0] + e[1]);
            };
            for (r = r || o; --t; ) n = Math.floor(r() * (t + 1)), e[n] = [ e[t], e[t] = e[n] ][0];
        }, y = function(e, r) {
            for (var n, t = new Array(e.length), o = new Array(e.length), i = e.length, a = 0; a < i; a++) o[a] = a;
            for (var a = i - 1; a > 0; a--) n = Math.floor(r() * (a + 1)), o[a] = [ o[n], o[n] = o[a] ][0];
            for (var a = 0; a < i; a++) t[o[a]] = e[a];
            return t;
        }, m = function(e) {
            var r = .059886774281039834 * e;
            return r += 21845.33332824707, e = 0 | r, r -= e, r *= e, e = 0 | r, r -= e, (e ^= 4294967296 * r) >>> 0;
        }, w = function(e) {
            if (void 0 === e) throw new Error("Key is undefined");
            var r = localStorage.getItem(e);
            return r ? d(r) : void 0;
        }, b = function(e) {
            e = "" + e;
            for (var r = e.length, n = r - 1; n >= 0; n--) {
                var t = e.charCodeAt(n);
                t > 127 && 2047 >= t ? r++ : t > 2047 && 65535 >= t && (r += 2), t >= 56320 && 57343 >= t && n--;
            }
            return r;
        }, p = function(e) {
            return e = "" + e, z(e).length;
        }, S = function() {
            var e = T(), r = {}, n = "";
            if (e.length) for (var t = 0, o = e.length; t < o; t++) {
                for (var i = new Array(), a = 0, f = localStorage.length; a < f; a++) n = localStorage.key(a), 
                JSON.stringify(w(n)) === JSON.stringify(e[t]) && (n = B(n), i.push(n));
                r[t] = {
                    value: e[t],
                    keys: i
                };
            }
            return {
                dupecount: e.length,
                dupes: r
            };
        }, O = function() {
            return s + ".";
        }, x = function(e) {
            if (void 0 !== e) {
                var r = JSON.stringify(e), n = 0, t = "", o = "", i = function(e) {
                    var r, n = 0;
                    if (0 === e.length) return n;
                    for (var t = 0, o = e.length; t < o; t++) r = e.charCodeAt(t), n = (n << 5) - n + r, 
                    n |= 0;
                    return n;
                };
                t = e instanceof Array ? "ARRAY1" : "boolean" == typeof e ? "BOOLEAN2" : e instanceof Date ? "DATE4" : "number" == typeof e ? -1 !== (e + "").indexOf(".") ? "FLOAT8" : "INTEGER16" : "string" == typeof e ? "STRING32" : "OBJECT64", 
                o = r + r.length + t + i(r) + i(function(e) {
                    return Array.from(e).reverse().join("");
                }(r));
                for (var a = 0; a < o.length; a++) n += o.charCodeAt(a);
                return [ n, o ];
            }
        }, k = function(e) {
            return O() + e;
        }, E = function(e) {
            for (var r = new Array(), n = new Array(), t = 0, o = e.length; t < o; t++) n = e[t], 
            e.lastIndexOf(n) !== t && -1 === r.indexOf(n) && r.push(n);
            for (var t = 0, o = r.length; t < o; t++) r[t] = d(r[t]);
            return r;
        }, A = function(e) {
            if (void 0 === e) throw new Error("No key specified");
            var u = "", s = "";
            if ("undefined" == typeof _valueToCheck) {
                if (!N(e)) return;
                if ("" === (s = localStorage.getItem(e))) return "undefined";
            } else s = _valueToCheck;
            return -1 === s.indexOf(n()) && -1 === s.indexOf(t()) && -1 === s.indexOf(o()) && -1 === s.indexOf(i()) && -1 === s.indexOf(a()) ? "[" === s[0] ? u = "presumed array" : "{" === s[0] ? u = "presumed object" : s == +s ? u = "presumed number" : (s = L(s, f, e), 
            s = Q(s, f, e), -1 !== s.indexOf(n()) ? u = "scrambled string" : -1 !== s.indexOf(t()) ? u = "scrambled date" : -1 !== s.indexOf(o()) ? (u = "scrambled number", 
            u = -1 !== s.indexOf(".") ? "scrambled float" : "scrambled integer") : -1 !== s.indexOf(i()) ? u = "scrambled boolean" : -1 !== s.indexOf(a()) ? (u = "scrambled object", 
            "[" === s[0] && (u = "scrambled array")) : u = "presumed string") : ("" === u && -1 !== s.indexOf(n()) && (u = "string", 
            -1 !== s.indexOf(r()) && (u = "compressed string")), "" === u && -1 !== s.indexOf(t()) && (u = "date"), 
            "" === u && -1 !== s.indexOf(o()) && (u = "number", u = -1 !== s.indexOf(".") ? "float" : "integer"), 
            "" === u && -1 !== s.indexOf(i()) && (u = "boolean"), "" === u && -1 !== s.indexOf(a()) && (u = "object", 
            "[" === s[0] && (u = "array"))), u;
        }, N = function(e) {
            return null !== localStorage.getItem(e);
        }, C = function(e) {
            for (var r = JSON.stringify(e), n = "", t = "", o = 0, i = localStorage.length; o < i; o++) if (t = localStorage.key(o), 
            -1 !== t.indexOf(O()) && (n = JSON.stringify(w(t)), r === n)) return !0;
            return !1;
        }, K = function(e) {
            var r = !1, n = !1;
            return r = e === P.decompress(P.compress(e)), n = b(P.compress(e)) + 3 < b(e), !(!r || !n);
        }, J = function(e) {
            var r = "", n = 0;
            if (void 0 === e) {
                for (var t = 0, o = localStorage.length; t < o; ++t) r += localStorage.key(t);
                n = b(r);
            } else N(e) && (n = b(e));
            return n *= 2;
        }, M = function() {
            var e = 4022871197;
            return function(r) {
                r = r.toString();
                for (var n = 0, t = r.length; n < t; n++) {
                    e += r.charCodeAt(n);
                    var o = .02519603282416938 * e;
                    e = o >>> 0, o -= e, o *= e, e = o >>> 0, o -= e, e += 4294967296 * o;
                }
                return 2.3283064365386963e-10 * (e >>> 0);
            };
        }, I = function(e) {
            return Array.from(e).reverse().join("");
        }, D = function(e, r, n, t, o, i, a, f) {
            var u = new CustomEvent("localDataStorage", {
                detail: {
                    message: e,
                    method: r,
                    key: n,
                    oldval: t,
                    newval: o,
                    oldtype: i,
                    newtype: a,
                    prefix: f,
                    timestamp: +new Date()
                },
                bubbles: !1,
                cancelable: !0
            });
            document.dispatchEvent(u);
        }, _ = function(e, r) {
            if (void 0 === e) throw new Error("Key is undefined");
            if (void 0 === r) throw new Error("Key's value is undefined");
            try {
                localStorage.setItem(e, r);
            } catch (e) {
                throw !e || "QUOTA_EXCEEDED_ERR" !== e.name && "NS_ERROR_DOM_QUOTA_REACHED" !== e.name && "QuotaExceededError" !== e.name ? new Error("An error occurred writing to localStorage") : new Error("Quota exceeded for localStorage");
            }
        }, j = function(e) {
            f = e;
        }, T = function() {
            for (var e, r, n = new Array(), t = 0, o = 0, i = localStorage.length; o < i; o++) r = localStorage.key(o), 
            -1 !== r.indexOf(O()) && (n[t++] = localStorage.getItem(r));
            return e = E(n), 0 === e.length ? [] : e;
        }, R = function(e, r, n) {
            for (var t = x(r)[0] + x(n)[0], o = m(t) + "", i = I(o), a = Number(i), f = c(a), u = Number((a + "").charAt(2)) + Number((a + "").charAt(1)) + Number((a + "").charAt(0)), s = p(x(n)[1]) + p(x(r)[1]) + u, d = 0; d < s; d++) f();
            return e += String.fromCharCode(Math.floor(966 * Math.random()) + 35) + String.fromCharCode(Math.floor(966 * Math.random()) + 35) + String.fromCharCode(Math.floor(966 * Math.random()) + 35) + String.fromCharCode(Math.floor(966 * Math.random()) + 35), 
            e = I(e), e = e.split(""), v(e, f), e = e.join("");
        }, P = function() {
            function e() {}
            return e.codebook = {
                " ": 0,
                the: 1,
                e: 2,
                t: 3,
                a: 4,
                of: 5,
                o: 6,
                and: 7,
                i: 8,
                n: 9,
                s: 10,
                "e ": 11,
                r: 12,
                " th": 13,
                " t": 14,
                in: 15,
                he: 16,
                th: 17,
                h: 18,
                "he ": 19,
                to: 20,
                "\r\n": 21,
                l: 22,
                "s ": 23,
                d: 24,
                " a": 25,
                an: 26,
                er: 27,
                c: 28,
                " o": 29,
                "d ": 30,
                on: 31,
                " of": 32,
                re: 33,
                "of ": 34,
                "t ": 35,
                ", ": 36,
                is: 37,
                u: 38,
                at: 39,
                "   ": 40,
                "n ": 41,
                or: 42,
                which: 43,
                f: 44,
                m: 45,
                as: 46,
                it: 47,
                that: 48,
                "\n": 49,
                was: 50,
                en: 51,
                "  ": 52,
                " w": 53,
                es: 54,
                " an": 55,
                " i": 56,
                "\r": 57,
                "f ": 58,
                g: 59,
                p: 60,
                nd: 61,
                " s": 62,
                "nd ": 63,
                "ed ": 64,
                w: 65,
                ed: 66,
                "http://": 67,
                for: 68,
                te: 69,
                ing: 70,
                "y ": 71,
                The: 72,
                " c": 73,
                ti: 74,
                "r ": 75,
                his: 76,
                st: 77,
                " in": 78,
                ar: 79,
                nt: 80,
                ",": 81,
                " to": 82,
                y: 83,
                ng: 84,
                " h": 85,
                with: 86,
                le: 87,
                al: 88,
                "to ": 89,
                b: 90,
                ou: 91,
                be: 92,
                were: 93,
                " b": 94,
                se: 95,
                "o ": 96,
                ent: 97,
                ha: 98,
                "ng ": 99,
                their: 100,
                '"': 101,
                hi: 102,
                from: 103,
                " f": 104,
                "in ": 105,
                de: 106,
                ion: 107,
                me: 108,
                v: 109,
                ".": 110,
                ve: 111,
                all: 112,
                "re ": 113,
                ri: 114,
                ro: 115,
                "is ": 116,
                co: 117,
                "f t": 118,
                are: 119,
                ea: 120,
                ". ": 121,
                her: 122,
                " m": 123,
                "er ": 124,
                " p": 125,
                "es ": 126,
                by: 127,
                they: 128,
                di: 129,
                ra: 130,
                ic: 131,
                not: 132,
                "s,": 133,
                "d t": 134,
                "at ": 135,
                ce: 136,
                la: 137,
                "h ": 138,
                ne: 139,
                "as ": 140,
                tio: 141,
                "on ": 142,
                "n t": 143,
                io: 144,
                we: 145,
                " a ": 146,
                om: 147,
                ", a": 148,
                "s o": 149,
                ur: 150,
                li: 151,
                ll: 152,
                ch: 153,
                had: 154,
                this: 155,
                "e t": 156,
                "g ": 157,
                "e\r\n": 158,
                " wh": 159,
                ere: 160,
                " co": 161,
                "e o": 162,
                "a ": 163,
                us: 164,
                " d": 165,
                ss: 166,
                "\n\r\n": 167,
                "\r\n\r": 168,
                '="': 169,
                " be": 170,
                " e": 171,
                "s a": 172,
                ma: 173,
                one: 174,
                "t t": 175,
                "or ": 176,
                but: 177,
                el: 178,
                so: 179,
                "l ": 180,
                "e s": 181,
                "s,": 182,
                no: 183,
                ter: 184,
                " wa": 185,
                iv: 186,
                ho: 187,
                "e a": 188,
                " r": 189,
                hat: 190,
                "s t": 191,
                ns: 192,
                "ch ": 193,
                wh: 194,
                tr: 195,
                ut: 196,
                "/": 197,
                have: 198,
                "ly ": 199,
                ta: 200,
                " ha": 201,
                " on": 202,
                tha: 203,
                "-": 204,
                " l": 205,
                ati: 206,
                "en ": 207,
                pe: 208,
                " re": 209,
                there: 210,
                ass: 211,
                si: 212,
                " fo": 213,
                wa: 214,
                ec: 215,
                our: 216,
                who: 217,
                its: 218,
                z: 219,
                fo: 220,
                rs: 221,
                ">": 222,
                ot: 223,
                un: 224,
                "<": 225,
                im: 226,
                "th ": 227,
                nc: 228,
                ate: 229,
                "><": 230,
                ver: 231,
                ad: 232,
                " we": 233,
                ly: 234,
                ee: 235,
                " n": 236,
                id: 237,
                " cl": 238,
                ac: 239,
                il: 240,
                "</": 241,
                rt: 242,
                " wi": 243,
                div: 244,
                "e, ": 245,
                " it": 246,
                whi: 247,
                " ma": 248,
                ge: 249,
                x: 250,
                "e c": 251,
                men: 252,
                ".com": 253
            }, e.reverse_codebook = [ " ", "the", "e", "t", "a", "of", "o", "and", "i", "n", "s", "e ", "r", " th", " t", "in", "he", "th", "h", "he ", "to", "\r\n", "l", "s ", "d", " a", "an", "er", "c", " o", "d ", "on", " of", "re", "of ", "t ", ", ", "is", "u", "at", "   ", "n ", "or", "which", "f", "m", "as", "it", "that", "\n", "was", "en", "  ", " w", "es", " an", " i", "\r", "f ", "g", "p", "nd", " s", "nd ", "ed ", "w", "ed", "http://", "for", "te", "ing", "y ", "The", " c", "ti", "r ", "his", "st", " in", "ar", "nt", ",", " to", "y", "ng", " h", "with", "le", "al", "to ", "b", "ou", "be", "were", " b", "se", "o ", "ent", "ha", "ng ", "their", '"', "hi", "from", " f", "in ", "de", "ion", "me", "v", ".", "ve", "all", "re ", "ri", "ro", "is ", "co", "f t", "are", "ea", ". ", "her", " m", "er ", " p", "es ", "by", "they", "di", "ra", "ic", "not", "s, ", "d t", "at ", "ce", "la", "h ", "ne", "as ", "tio", "on ", "n t", "io", "we", " a ", "om", ", a", "s o", "ur", "li", "ll", "ch", "had", "this", "e t", "g ", "e\r\n", " wh", "ere", " co", "e o", "a ", "us", " d", "ss", "\n\r\n", "\r\n\r", '="', " be", " e", "s a", "ma", "one", "t t", "or ", "but", "el", "so", "l ", "e s", "s,", "no", "ter", " wa", "iv", "ho", "e a", " r", "hat", "s t", "ns", "ch ", "wh", "tr", "ut", "/", "have", "ly ", "ta", " ha", " on", "tha", "-", " l", "ati", "en ", "pe", " re", "there", "ass", "si", " fo", "wa", "ec", "our", "who", "its", "z", "fo", "rs", ">", "ot", "un", "<", "im", "th ", "nc", "ate", "><", "ver", "ad", " we", "ly", "ee", " n", "id", " cl", "ac", "il", "</", "rt", " wi", "div", "e, ", " it", "whi", " ma", "ge", "x", "e c", "men", ".com" ], 
            e.flush_verbatim = function(e) {
                var r, n, t, o;
                for (n = [], e.length > 1 ? (n.push(String.fromCharCode(255)), n.push(String.fromCharCode(e.length - 1))) : n.push(String.fromCharCode(254)), 
                t = 0, o = e.length; t < o; t++) r = e[t], n.push(r);
                return n;
            }, e.compress = function(r) {
                var n, t, o, i, a, f, u;
                for (f = "", a = [], o = 0; o < r.length; ) {
                    for (t = !1, i = 7, r.length - o < 7 && (i = r.length - o), i = u = i; i <= 0 ? u < 0 : u > 0; i = i <= 0 ? ++u : --u) if (null != (n = e.codebook[r.substr(o, i)])) {
                        f && (a = a.concat(e.flush_verbatim(f)), f = ""), a.push(String.fromCharCode(n)), 
                        o += i, t = !0;
                        break;
                    }
                    t || (f += r[o], o++, 256 === f.length && (a = a.concat(e.flush_verbatim(f)), f = ""));
                }
                return f && (a = a.concat(e.flush_verbatim(f))), a.join("");
            }, e.decompress = function(r) {
                var n, t, o, i, a, f;
                for (i = "", t = function() {
                    var e, t, o;
                    for (o = [], n = e = 0, t = r.length; 0 <= t ? e < t : e > t; n = 0 <= t ? ++e : --e) o.push(r.charCodeAt(n));
                    return o;
                }(), n = 0; n < t.length; ) if (254 === t[n]) {
                    if (n + 1 > t.length) throw "Malformed SMAZ";
                    i += r[n + 1], n += 2;
                } else if (255 === t[n]) {
                    if (n + t[n + 1] + 2 >= t.length) throw "Malformed SMAZ";
                    for (o = a = 0, f = t[n + 1] + 1; 0 <= f ? a < f : a > f; o = 0 <= f ? ++a : --a) i += r[n + 2 + o];
                    n += 3 + t[n + 1];
                } else i += e.reverse_codebook[t[n]], n++;
                return i;
            }, e;
        }(), B = function(e) {
            return e.slice(O().length, e.length);
        }, z = function(e) {
            for (var r, n, t = [], o = 0, i = e.length; i > o; ) r = e.charCodeAt(o++), r >= 55296 && 56319 >= r && i > o ? (n = e.charCodeAt(o++), 
            56320 == (64512 & n) ? t.push(((1023 & r) << 10) + (1023 & n) + 65536) : (t.push(r), 
            o--)) : t.push(r);
            return t;
        }, F = function(e) {
            return P.decompress(e);
        }, Q = function(e, r, n) {
            for (var t = x(r)[0] + x(n)[0], o = m(t) + "", i = I(o), a = Number(i), f = c(a), u = Number((a + "").charAt(2)) + Number((a + "").charAt(1)) + Number((a + "").charAt(0)), s = p(x(n)[1]) + p(x(r)[1]) + u, d = 0; d < s; d++) f();
            return e = e.split(""), e = y(e, f), e = e.join(""), e = I(e);
        }, U = function(e) {
            var r = "", n = 0;
            if (void 0 === e) {
                for (var t = 0, o = localStorage.length; t < o; ++t) r += w(localStorage.key(t));
                n = b(r);
            } else N(e) && (n = "boolean" === A(e) ? 1 : b(w(e)));
            return n *= 2;
        }, G = function(e) {
            var r = "", n = 0;
            if (void 0 === e) {
                for (var t = 0, o = localStorage.length; t < o; ++t) r += localStorage.getItem(localStorage.key(t));
                n = b(r);
            } else N(e) && (n = b(localStorage.getItem(e)));
            return n *= 2;
        }, L = function(e, r, n) {
            var t = "", o = x(r)[0], i = m(o) + "", a = I(i), f = Number(a) + x(n)[0] + x(r)[0], u = f + "", s = c(u), d = o + Number((f + "").charAt(0)) + Number((f + "").charAt(1)) + Number((f + "").charAt(2)) + Number(i.charAt(0)), l = p(x(n)[1]) + p(x(r)[1]) + d, h = M(), g = x(r)[1], v = 0, y = 0, w = 0, b = 0;
            e += "";
            for (var S = 0; S < l; S++) s();
            for (var S = 0, O = e.length; S < O; S++) v = Math.floor(257 * s()) + 0, w = v, 
            b = o, y = Math.floor(h(g) * (b - w + 1)) + w, s() < .537 ? t += String.fromCharCode(v ^ e.charCodeAt(S)) : t += String.fromCharCode(y ^ e.charCodeAt(S));
            return t;
        }, Z = function() {
            return "localDataStorage 1.1.0 using " + s;
        };
        Z.bytes = function(e) {
            return g(void 0 !== e ? U(k(e)) + J(k(e)) : U() + J());
        }, Z.bytesall = function(e) {
            return g(void 0 !== e ? G(k(e)) + J(k(e)) : G() + J());
        }, Z.chopget = function(e) {
            var r, n = "";
            return N(k(e)) ? (n = w(k(e)), r = this.showtype(e), localStorage.removeItem(k(e)), 
            D("excise key", "chopget", e, n, void 0, r, void 0, O()), n) : void 0;
        }, Z.clear = function() {
            for (var e, r = 0, n = localStorage.length; n--; ) e = localStorage.key(n), -1 !== e.indexOf(O()) && (localStorage.removeItem(e), 
            r++);
            return r + (1 === r ? " key removed" : " keys removed");
        }, Z.countdupes = function() {
            return T().length;
        }, Z.crunch = function(e) {
            return h(e);
        }, Z.decrunch = function(e) {
            return _decrunch(e);
        }, Z.forcehasval = function(e) {
            for (var r = !1, n = 0, t = localStorage.length; n < t; n++) e == localStorage.getItem(localStorage.key(n)) && (r = !0);
            return r;
        }, Z.forceget = function(e) {
            if (void 0 === e) throw new Error("Key is undefined");
            return localStorage.getItem(k(e));
        }, Z.forceset = function(e, r) {
            if (void 0 === e) throw new Error("Key is undefined");
            if (void 0 === r) throw new Error("Key's value is undefined");
            var n = w(k(e)), t = this.showtype(e), o = r, i = l(r)[1];
            _(k(e), r), JSON.stringify(n) === JSON.stringify(o) && t === i || (void 0 === n ? D("create new key", "forceset", e, n, o, t, i, O()) : D("key value change", "forceset", e, n, o, t, i, O()));
        }, Z.get = function(e) {
            return w(k(e));
        }, Z.getscramblekey = function() {
            return f;
        }, Z.haskey = function(e) {
            return N(k(e));
        }, Z.hasval = function(e) {
            return C(e);
        }, Z.isArray = function(e) {
            if (void 0 === e) throw new Error("Key is undefined");
            return "array" === A(k(e));
        }, Z.isBoolean = function(e) {
            if (void 0 === e) throw new Error("Key is undefined");
            return "boolean" === A(k(e));
        }, Z.isDate = function(e) {
            if (void 0 === e) throw new Error("Key is undefined");
            return "date" === A(k(e));
        }, Z.isFloat = function(e) {
            if (void 0 === e) throw new Error("Key is undefined");
            return "float" === A(k(e));
        }, Z.isInteger = function(e) {
            if (void 0 === e) throw new Error("Key is undefined");
            return "integer" === A(k(e));
        }, Z.isNumber = function(e) {
            if (void 0 === e) throw new Error("Key is undefined");
            return "float" === A(k(e)) || "integer" === A(k(e));
        }, Z.isObject = function(e) {
            if (void 0 === e) throw new Error("Key is undefined");
            return "object" === A(k(e));
        }, Z.isString = function(e) {
            if (void 0 === e) throw new Error("Key is undefined");
            return "string" === A(k(e));
        }, Z.keybytes = function(e) {
            return g(void 0 === e ? J() : J(k(e)));
        }, Z.keys = function() {
            for (var e = "", r = 0, n = localStorage.length; n--; ) e = localStorage.key(n), 
            -1 !== e.indexOf(O()) && r++;
            return r;
        }, Z.listdupes = function() {
            return S();
        }, Z.remove = function(e) {
            if (void 0 === e) throw new Error("Key is undefined");
            var r = w(k(e)), n = this.showtype(e);
            localStorage.removeItem(k(e)), D("remove key", "remove", e, r, void 0, n, void 0, O());
        }, Z.rename = function(e, r) {
            var n = this.forceget(e);
            this.remove(e), this.forceset(r, n);
        }, Z.safeget = function(e, r) {
            var n;
            return N(k(e)) ? (n = localStorage.getItem(k(e)), void 0 === r ? (n = L(n, f, e), 
            n = Q(n, f, e)) : (n = L(n, r, e), n = Q(n, r, e)), n = d(n)) : void 0;
        }, Z.safeset = function(e, r, n) {
            if (void 0 === e) throw new Error("Key is undefined");
            if (void 0 === r) throw new Error("Key's value is undefined");
            var t = "", o = null === this.forceget(e) ? void 0 : this.forceget(e), i = this.showtype(e), a = "";
            r = l(r)[0], void 0 === n ? (r = R(r, f, e), r = L(r, f, e), t = " using global scramble key") : (r = R(r, n, e), 
            r = L(r, n, e), t = " using user scramble key"), _(k(e), r), a = this.forceget(e), 
            o !== a && (void 0 === o ? D("create new key" + t, "safeset", e, o, a, i, "scrambled key", O()) : D("key value change" + t, "safeset", e, o, a, i, "scrambled key", O()));
        }, Z.set = function(e, r) {
            if (void 0 === e) throw new Error("Key is undefined");
            if (void 0 === r) throw new Error("Key's value is undefined");
            var n = w(k(e)), t = this.showtype(e), o = r, i = l(r)[1];
            r = l(r)[0], _(k(e), r), JSON.stringify(n) === JSON.stringify(o) && t === i || (void 0 === n ? D("create new key", "set", e, n, o, t, i, O()) : D("key value change", "set", e, n, o, t, i, O()));
        }, Z.setscramblekey = function(e) {
            if (void 0 === e) throw new Error("No scramble key specified");
            j(e);
        }, Z.showdupes = function() {
            return T();
        }, Z.showkey = function(e) {
            if (void 0 === e) throw new Error("No key value supplied");
            for (var r = "", n = new Array(), t = "", o = 0, i = 0, a = localStorage.length; i < a; i++) t = localStorage.key(i), 
            -1 !== t.indexOf(O()) && (n[o++] = t);
            n.sort();
            for (var i = 0, a = n.length; i < a; i++) if (t = n[i], r = w(t), JSON.stringify(r) === JSON.stringify(e)) return B(t);
        }, Z.showkeys = function(e) {
            if (void 0 === e) throw new Error("No key value supplied");
            for (var r = S(), n = r.dupecount, t = JSON.stringify(e), o = "", i = 0; i < n; i++) if (o = r.dupes[i].value, 
            o = JSON.stringify(o), t === o) return r.dupes[i].keys;
        }, Z.showprefix = function() {
            return s + ".";
        }, Z.showtype = function(e) {
            if (void 0 === e) throw new Error("Key is undefined");
            return A(k(e));
        }, Z.size = function(e) {
            if (N(k(e))) return p(w(k(e)));
        }, Z.softset = function(e, r) {
            if (void 0 === e) throw new Error("Key is undefined");
            if (void 0 === r) throw new Error("Key's value is undefined");
            N(k(e)) || _(k(e), r);
        }, Z.valbytes = function(e) {
            return g(void 0 === e ? U() : U(k(e)));
        }, Z.valbytesall = function(e) {
            return g(void 0 === e ? G() : G(k(e)));
        }, Z.version = "1.1.0";
        var H = g(b(s + ".")), V = g(2 * b(s + "."));
        return function() {
            var r, n = !1;
            if (void 0 === e) console.info("No prefix specified. Creating a %cnasty-looking %crandom prefix --\x3e %c" + s + ".", "font-style: italic;", "font-style: normal;", "font-weight: bold;"); else if ("" === e) console.info("Empty prefix given, but a usable prefix is %cstrongly recommended%c to organize keys!", "text-decoration: underline;", "text-decoration: none;"); else {
                for (var t = 0, o = localStorage.length; t < o; t++) if (r = localStorage.key(t), 
                -1 !== r.indexOf(s + ".")) {
                    n = !0;
                    break;
                }
                n ? console.warn("%cAttention! %cKeys with this prefix already exist in localStorage for this domain!", "color: red; font-weight: bold;", "color: red;") : console.log("Instantiated. Prefix adds " + H + " to every key name (stored using " + V + ").");
            }
        }(), Z;
    }(e);
};