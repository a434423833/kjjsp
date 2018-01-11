jQuery(function ($) {
    (function () {
        $(window).load(function () {
            $("#pre-status").fadeOut();
            $("#st-preloader").delay(350).fadeOut("slow")
        })
    }());
    (function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $(".scroll-up").fadeIn()
            } else {
                $(".scroll-up").fadeOut()
            }
        });
        $(".scroll-up a").click(function () {
            $("html, body").animate({scrollTop: 0}, 800);
            return false
        })
    }());
    (function () {
        $("#header .menu").slicknav({prependTo: ".menu-mobile", label: ""})
    }());
    (function () {
        $(".wpb_wrapper").fitVids();
        $(".entry-content").fitVids();
        $(".entry-video").fitVids()
    }())
});
/* Prism.js */
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
    Prism = function () {
        var e = /\blang(?:uage)?-(\w+)\b/i, t = 0, n = _self.Prism = {
            util: {
                encode: function (e) {
                    return e instanceof a ? new a(e.type, n.util.encode(e.content), e.alias) : "Array" === n.util.type(e) ? e.map(n.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                }, type: function (e) {
                    return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]
                }, objId: function (e) {
                    return e.__id || Object.defineProperty(e, "__id", {value: ++t}), e.__id
                }, clone: function (e) {
                    var t = n.util.type(e);
                    switch (t) {
                        case"Object":
                            var a = {};
                            for (var r in e)e.hasOwnProperty(r) && (a[r] = n.util.clone(e[r]));
                            return a;
                        case"Array":
                            return e.map && e.map(function (e) {
                                    return n.util.clone(e)
                                })
                    }
                    return e
                }
            }, languages: {
                extend: function (e, t) {
                    var a = n.util.clone(n.languages[e]);
                    for (var r in t)a[r] = t[r];
                    return a
                }, insertBefore: function (e, t, a, r) {
                    r = r || n.languages;
                    var i = r[e];
                    if (2 == arguments.length) {
                        a = arguments[1];
                        for (var l in a)a.hasOwnProperty(l) && (i[l] = a[l]);
                        return i
                    }
                    var o = {};
                    for (var s in i)if (i.hasOwnProperty(s)) {
                        if (s == t)for (var l in a)a.hasOwnProperty(l) && (o[l] = a[l]);
                        o[s] = i[s]
                    }
                    return n.languages.DFS(n.languages, function (t, n) {
                        n === r[e] && t != e && (this[t] = o)
                    }), r[e] = o
                }, DFS: function (e, t, a, r) {
                    r = r || {};
                    for (var i in e)e.hasOwnProperty(i) && (t.call(e, i, e[i], a || i), "Object" !== n.util.type(e[i]) || r[n.util.objId(e[i])] ? "Array" !== n.util.type(e[i]) || r[n.util.objId(e[i])] || (r[n.util.objId(e[i])] = !0, n.languages.DFS(e[i], t, i, r)) : (r[n.util.objId(e[i])] = !0, n.languages.DFS(e[i], t, null, r)))
                }
            }, plugins: {}, highlightAll: function (e, t) {
                var a = {
                    callback: t,
                    selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                };
                n.hooks.run("before-highlightall", a);
                for (var r, i = a.elements || document.querySelectorAll(a.selector), l = 0; r = i[l++];)n.highlightElement(r, e === !0, a.callback)
            }, highlightElement: function (t, a, r) {
                for (var i, l, o = t; o && !e.test(o.className);)o = o.parentNode;
                o && (i = (o.className.match(e) || [, ""])[1].toLowerCase(), l = n.languages[i]), t.className = t.className.replace(e, "").replace(/\s+/g, " ") + " language-" + i, o = t.parentNode, /pre/i.test(o.nodeName) && (o.className = o.className.replace(e, "").replace(/\s+/g, " ") + " language-" + i);
                var s = t.textContent, u = {element: t, language: i, grammar: l, code: s};
                if (n.hooks.run("before-sanity-check", u), !u.code || !u.grammar)return u.code && (u.element.textContent = u.code), n.hooks.run("complete", u), void 0;
                if (n.hooks.run("before-highlight", u), a && _self.Worker) {
                    var g = new Worker(n.filename);
                    g.onmessage = function (e) {
                        u.highlightedCode = e.data, n.hooks.run("before-insert", u), u.element.innerHTML = u.highlightedCode, r && r.call(u.element), n.hooks.run("after-highlight", u), n.hooks.run("complete", u)
                    }, g.postMessage(JSON.stringify({language: u.language, code: u.code, immediateClose: !0}))
                } else u.highlightedCode = n.highlight(u.code, u.grammar, u.language), n.hooks.run("before-insert", u), u.element.innerHTML = u.highlightedCode, r && r.call(t), n.hooks.run("after-highlight", u), n.hooks.run("complete", u)
            }, highlight: function (e, t, r) {
                var i = n.tokenize(e, t);
                return a.stringify(n.util.encode(i), r)
            }, tokenize: function (e, t) {
                var a = n.Token, r = [e], i = t.rest;
                if (i) {
                    for (var l in i)t[l] = i[l];
                    delete t.rest
                }
                e:for (var l in t)if (t.hasOwnProperty(l) && t[l]) {
                    var o = t[l];
                    o = "Array" === n.util.type(o) ? o : [o];
                    for (var s = 0; s < o.length; ++s) {
                        var u = o[s], g = u.inside, c = !!u.lookbehind, h = !!u.greedy, f = 0, d = u.alias;
                        if (h && !u.pattern.global) {
                            var p = u.pattern.toString().match(/[imuy]*$/)[0];
                            u.pattern = RegExp(u.pattern.source, p + "g")
                        }
                        u = u.pattern || u;
                        for (var m = 0, y = 0; m < r.length; y += r[m].length, ++m) {
                            var v = r[m];
                            if (r.length > e.length)break e;
                            if (!(v instanceof a)) {
                                u.lastIndex = 0;
                                var b = u.exec(v), k = 1;
                                if (!b && h && m != r.length - 1) {
                                    if (u.lastIndex = y, b = u.exec(e), !b)break;
                                    for (var w = b.index + (c ? b[1].length : 0), _ = b.index + b[0].length, A = m, P = y, j = r.length; j > A && _ > P; ++A)P += r[A].length, w >= P && (++m, y = P);
                                    if (r[m] instanceof a || r[A - 1].greedy)continue;
                                    k = A - m, v = e.slice(y, P), b.index -= y
                                }
                                if (b) {
                                    c && (f = b[1].length);
                                    var w = b.index + f, b = b[0].slice(f), _ = w + b.length, x = v.slice(0, w),
                                        O = v.slice(_), S = [m, k];
                                    x && S.push(x);
                                    var N = new a(l, g ? n.tokenize(b, g) : b, d, b, h);
                                    S.push(N), O && S.push(O), Array.prototype.splice.apply(r, S)
                                }
                            }
                        }
                    }
                }
                return r
            }, hooks: {
                all: {}, add: function (e, t) {
                    var a = n.hooks.all;
                    a[e] = a[e] || [], a[e].push(t)
                }, run: function (e, t) {
                    var a = n.hooks.all[e];
                    if (a && a.length)for (var r, i = 0; r = a[i++];)r(t)
                }
            }
        }, a = n.Token = function (e, t, n, a, r) {
            this.type = e, this.content = t, this.alias = n, this.length = 0 | (a || "").length, this.greedy = !!r
        };
        if (a.stringify = function (e, t, r) {
                if ("string" == typeof e)return e;
                if ("Array" === n.util.type(e))return e.map(function (n) {
                    return a.stringify(n, t, e)
                }).join("");
                var i = {
                    type: e.type,
                    content: a.stringify(e.content, t, r),
                    tag: "span",
                    classes: ["token", e.type],
                    attributes: {},
                    language: t,
                    parent: r
                };
                if ("comment" == i.type && (i.attributes.spellcheck = "true"), e.alias) {
                    var l = "Array" === n.util.type(e.alias) ? e.alias : [e.alias];
                    Array.prototype.push.apply(i.classes, l)
                }
                n.hooks.run("wrap", i);
                var o = Object.keys(i.attributes).map(function (e) {
                    return e + '="' + (i.attributes[e] || "").replace(/"/g, "&quot;") + '"'
                }).join(" ");
                return "<" + i.tag + ' class="' + i.classes.join(" ") + '"' + (o ? " " + o : "") + ">" + i.content + "</" + i.tag + ">"
            }, !_self.document)return _self.addEventListener ? (_self.addEventListener("message", function (e) {
            var t = JSON.parse(e.data), a = t.language, r = t.code, i = t.immediateClose;
            _self.postMessage(n.highlight(r, n.languages[a], a)), i && _self.close()
        }, !1), _self.Prism) : _self.Prism;
        var r = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
        return r && (n.filename = r.src, document.addEventListener && !r.hasAttribute("data-manual") && ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(n.highlightAll) : window.setTimeout(n.highlightAll, 16) : document.addEventListener("DOMContentLoaded", n.highlightAll))), _self.Prism
    }();
"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism);
Prism.languages.markup = {
    comment: /<!--[\w\W]*?-->/,
    prolog: /<\?[\w\W]+?\?>/,
    doctype: /<!DOCTYPE[\w\W]+?>/i,
    cdata: /<!\[CDATA\[[\w\W]*?]]>/i,
    tag: {
        pattern: /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
        inside: {
            tag: {pattern: /^<\/?[^\s>\/]+/i, inside: {punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/}},
            "attr-value": {pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i, inside: {punctuation: /[=>"']/}},
            punctuation: /\/?>/,
            "attr-name": {pattern: /[^\s>\/]+/, inside: {namespace: /^[^\s>\/:]+:/}}
        }
    },
    entity: /&#?[\da-z]{1,8};/i
}, Prism.hooks.add("wrap", function (a) {
    "entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&"))
}), Prism.languages.xml = Prism.languages.markup, Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup;
Prism.languages.css = {
    comment: /\/\*[\w\W]*?\*\//,
    atrule: {pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i, inside: {rule: /@[\w-]+/}},
    url: /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
    selector: /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
    string: {pattern: /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/, greedy: !0},
    property: /(\b|\B)[\w-]+(?=\s*:)/i,
    important: /\B!important\b/i,
    "function": /[-a-z0-9]+(?=\()/i,
    punctuation: /[(){};:]/
}, Prism.languages.css.atrule.inside.rest = Prism.util.clone(Prism.languages.css), Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", {
    style: {
        pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,
        lookbehind: !0,
        inside: Prism.languages.css,
        alias: "language-css"
    }
}), Prism.languages.insertBefore("inside", "attr-value", {
    "style-attr": {
        pattern: /\s*style=("|').*?\1/i,
        inside: {
            "attr-name": {pattern: /^\s*style/i, inside: Prism.languages.markup.tag.inside},
            punctuation: /^\s*=\s*['"]|['"]\s*$/,
            "attr-value": {pattern: /.+/i, inside: Prism.languages.css}
        },
        alias: "language-css"
    }
}, Prism.languages.markup.tag));
Prism.languages.clike = {
    comment: [{pattern: /(^|[^\\])\/\*[\w\W]*?\*\//, lookbehind: !0}, {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0
    }],
    string: {pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0},
    "class-name": {
        pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
        lookbehind: !0,
        inside: {punctuation: /(\.|\\)/}
    },
    keyword: /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    "boolean": /\b(true|false)\b/,
    "function": /[a-z0-9_]+(?=\()/i,
    number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
    operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
    punctuation: /[{}[\];(),.:]/
};
Prism.languages.javascript = Prism.languages.extend("clike", {
    keyword: /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
    number: /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
    "function": /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,
    operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*\*?|\/|~|\^|%|\.{3}/
}), Prism.languages.insertBefore("javascript", "keyword", {
    regex: {
        pattern: /(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
        lookbehind: !0,
        greedy: !0
    }
}), Prism.languages.insertBefore("javascript", "string", {
    "template-string": {
        pattern: /`(?:\\\\|\\?[^\\])*?`/,
        greedy: !0,
        inside: {
            interpolation: {
                pattern: /\$\{[^}]+\}/,
                inside: {
                    "interpolation-punctuation": {pattern: /^\$\{|\}$/, alias: "punctuation"},
                    rest: Prism.languages.javascript
                }
            }, string: /[\s\S]+/
        }
    }
}), Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", {
    script: {
        pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
        lookbehind: !0,
        inside: Prism.languages.javascript,
        alias: "language-javascript"
    }
}), Prism.languages.js = Prism.languages.javascript;
!function (e) {
    var t = {
        variable: [{
            pattern: /\$?\(\([\w\W]+?\)\)/,
            inside: {
                variable: [{pattern: /(^\$\(\([\w\W]+)\)\)/, lookbehind: !0}, /^\$\(\(/],
                number: /\b-?(?:0x[\dA-Fa-f]+|\d*\.?\d+(?:[Ee]-?\d+)?)\b/,
                operator: /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
                punctuation: /\(\(?|\)\)?|,|;/
            }
        }, {
            pattern: /\$\([^)]+\)|`[^`]+`/,
            inside: {variable: /^\$\(|^`|\)$|`$/}
        }, /\$(?:[a-z0-9_#\?\*!@]+|\{[^}]+\})/i]
    };
    e.languages.bash = {
        shebang: {pattern: /^#!\s*\/bin\/bash|^#!\s*\/bin\/sh/, alias: "important"},
        comment: {pattern: /(^|[^"{\\])#.*/, lookbehind: !0},
        string: [{
            pattern: /((?:^|[^<])<<\s*)(?:"|')?(\w+?)(?:"|')?\s*\r?\n(?:[\s\S])*?\r?\n\2/g,
            lookbehind: !0,
            greedy: !0,
            inside: t
        }, {pattern: /(["'])(?:\\\\|\\?[^\\])*?\1/g, greedy: !0, inside: t}],
        variable: t.variable,
        "function": {
            pattern: /(^|\s|;|\||&)(?:alias|apropos|apt-get|aptitude|aspell|awk|basename|bash|bc|bg|builtin|bzip2|cal|cat|cd|cfdisk|chgrp|chmod|chown|chroot|chkconfig|cksum|clear|cmp|comm|command|cp|cron|crontab|csplit|cut|date|dc|dd|ddrescue|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|enable|env|ethtool|eval|exec|expand|expect|export|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|getopts|git|grep|groupadd|groupdel|groupmod|groups|gzip|hash|head|help|hg|history|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|jobs|join|kill|killall|less|link|ln|locate|logname|logout|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|make|man|mkdir|mkfifo|mkisofs|mknod|more|most|mount|mtools|mtr|mv|mmv|nano|netstat|nice|nl|nohup|notify-send|npm|nslookup|open|op|passwd|paste|pathchk|ping|pkill|popd|pr|printcap|printenv|printf|ps|pushd|pv|pwd|quota|quotacheck|quotactl|ram|rar|rcp|read|readarray|readonly|reboot|rename|renice|remsync|rev|rm|rmdir|rsync|screen|scp|sdiff|sed|seq|service|sftp|shift|shopt|shutdown|sleep|slocate|sort|source|split|ssh|stat|strace|su|sudo|sum|suspend|sync|tail|tar|tee|test|time|timeout|times|touch|top|traceroute|trap|tr|tsort|tty|type|ulimit|umask|umount|unalias|uname|unexpand|uniq|units|unrar|unshar|uptime|useradd|userdel|usermod|users|uuencode|uudecode|v|vdir|vi|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yes|zip)(?=$|\s|;|\||&)/,
            lookbehind: !0
        },
        keyword: {
            pattern: /(^|\s|;|\||&)(?:let|:|\.|if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)(?=$|\s|;|\||&)/,
            lookbehind: !0
        },
        "boolean": {pattern: /(^|\s|;|\||&)(?:true|false)(?=$|\s|;|\||&)/, lookbehind: !0},
        operator: /&&?|\|\|?|==?|!=?|<<<?|>>|<=?|>=?|=~/,
        punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];]/
    };
    var a = t.variable[1].inside;
    a["function"] = e.languages.bash["function"], a.keyword = e.languages.bash.keyword, a.boolean = e.languages.bash.boolean, a.operator = e.languages.bash.operator, a.punctuation = e.languages.bash.punctuation
}(Prism);
Prism.languages.c = Prism.languages.extend("clike", {
    keyword: /\b(asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
    operator: /\-[>-]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|?\||[~^%?*\/]/,
    number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)[ful]*\b/i
}), Prism.languages.insertBefore("c", "string", {
    macro: {
        pattern: /(^\s*)#\s*[a-z]+([^\r\n\\]|\\.|\\(?:\r\n?|\n))*/im,
        lookbehind: !0,
        alias: "property",
        inside: {
            string: {pattern: /(#\s*include\s*)(<.+?>|("|')(\\?.)+?\3)/, lookbehind: !0},
            directive: {
                pattern: /(#\s*)\b(define|elif|else|endif|error|ifdef|ifndef|if|import|include|line|pragma|undef|using)\b/,
                lookbehind: !0,
                alias: "keyword"
            }
        }
    }, constant: /\b(__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|stdin|stdout|stderr)\b/
}), delete Prism.languages.c["class-name"], delete Prism.languages.c["boolean"];
Prism.languages.csharp = Prism.languages.extend("clike", {
    keyword: /\b(abstract|as|async|await|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|do|double|else|enum|event|explicit|extern|false|finally|fixed|float|for|foreach|goto|if|implicit|in|int|interface|internal|is|lock|long|namespace|new|null|object|operator|out|override|params|private|protected|public|readonly|ref|return|sbyte|sealed|short|sizeof|stackalloc|static|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unsafe|ushort|using|virtual|void|volatile|while|add|alias|ascending|async|await|descending|dynamic|from|get|global|group|into|join|let|orderby|partial|remove|select|set|value|var|where|yield)\b/,
    string: [/@("|')(\1\1|\\\1|\\?(?!\1)[\s\S])*\1/, /("|')(\\?.)*?\1/],
    number: /\b-?(0x[\da-f]+|\d*\.?\d+f?)\b/i
}), Prism.languages.insertBefore("csharp", "keyword", {
    "generic-method": {
        pattern: /[a-z0-9_]+\s*<[^>\r\n]+?>\s*(?=\()/i,
        alias: "function",
        inside: {keyword: Prism.languages.csharp.keyword, punctuation: /[<>(),.:]/}
    },
    preprocessor: {
        pattern: /(^\s*)#.*/m,
        lookbehind: !0,
        alias: "property",
        inside: {
            directive: {
                pattern: /(\s*#)\b(define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\b/,
                lookbehind: !0,
                alias: "keyword"
            }
        }
    }
});
Prism.languages.cpp = Prism.languages.extend("c", {
    keyword: /\b(alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|class|compl|const|constexpr|const_cast|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
    "boolean": /\b(true|false)\b/,
    operator: /[-+]{1,2}|!=?|<{1,2}=?|>{1,2}=?|\->|:{1,2}|={1,2}|\^|~|%|&{1,2}|\|?\||\?|\*|\/|\b(and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/
}), Prism.languages.insertBefore("cpp", "keyword", {"class-name": {pattern: /(class\s+)[a-z0-9_]+/i, lookbehind: !0}});
Prism.languages.git = {
    comment: /^#.*/m,
    deleted: /^[-–].*/m,
    inserted: /^\+.*/m,
    string: /("|')(\\?.)*?\1/m,
    command: {pattern: /^.*\$ git .*$/m, inside: {parameter: /\s(--|-)\w+/m}},
    coord: /^@@.*@@$/m,
    commit_sha1: /^commit \w{40}$/m
};
Prism.languages.java = Prism.languages.extend("clike", {
    keyword: /\b(abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while)\b/,
    number: /\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp\-]+\b|\b\d*\.?\d+(?:e[+-]?\d+)?[df]?\b/i,
    operator: {
        pattern: /(^|[^.])(?:\+[+=]?|-[-=]?|!=?|<<?=?|>>?>?=?|==?|&[&=]?|\|[|=]?|\*=?|\/=?|%=?|\^=?|[?:~])/m,
        lookbehind: !0
    }
}), Prism.languages.insertBefore("java", "function", {
    annotation: {
        alias: "punctuation",
        pattern: /(^|[^.])@\w+/,
        lookbehind: !0
    }
});
Prism.languages.json = {
    property: /"(?:\\.|[^|"])*"(?=\s*:)/gi,
    string: /"(?!:)(?:\\.|[^|"])*"(?!:)/g,
    number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?)\b/g,
    punctuation: /[{}[\]);,]/g,
    operator: /:/g,
    "boolean": /\b(true|false)\b/gi,
    "null": /\bnull\b/gi
}, Prism.languages.jsonp = Prism.languages.json;
Prism.languages.markdown = Prism.languages.extend("markup", {}), Prism.languages.insertBefore("markdown", "prolog", {
    blockquote: {
        pattern: /^>(?:[\t ]*>)*/m,
        alias: "punctuation"
    },
    code: [{pattern: /^(?: {4}|\t).+/m, alias: "keyword"}, {pattern: /``.+?``|`[^`\n]+`/, alias: "keyword"}],
    title: [{
        pattern: /\w+.*(?:\r?\n|\r)(?:==+|--+)/,
        alias: "important",
        inside: {punctuation: /==+$|--+$/}
    }, {pattern: /(^\s*)#+.+/m, lookbehind: !0, alias: "important", inside: {punctuation: /^#+|#+$/}}],
    hr: {pattern: /(^\s*)([*-])([\t ]*\2){2,}(?=\s*$)/m, lookbehind: !0, alias: "punctuation"},
    list: {pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m, lookbehind: !0, alias: "punctuation"},
    "url-reference": {
        pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
        inside: {
            variable: {pattern: /^(!?\[)[^\]]+/, lookbehind: !0},
            string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
            punctuation: /^[\[\]!:]|[<>]/
        },
        alias: "url"
    },
    bold: {
        pattern: /(^|[^\\])(\*\*|__)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
        lookbehind: !0,
        inside: {punctuation: /^\*\*|^__|\*\*$|__$/}
    },
    italic: {
        pattern: /(^|[^\\])([*_])(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
        lookbehind: !0,
        inside: {punctuation: /^[*_]|[*_]$/}
    },
    url: {
        pattern: /!?\[[^\]]+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[[^\]\n]*\])/,
        inside: {
            variable: {pattern: /(!?\[)[^\]]+(?=\]$)/, lookbehind: !0},
            string: {pattern: /"(?:\\.|[^"\\])*"(?=\)$)/}
        }
    }
}), Prism.languages.markdown.bold.inside.url = Prism.util.clone(Prism.languages.markdown.url), Prism.languages.markdown.italic.inside.url = Prism.util.clone(Prism.languages.markdown.url), Prism.languages.markdown.bold.inside.italic = Prism.util.clone(Prism.languages.markdown.italic), Prism.languages.markdown.italic.inside.bold = Prism.util.clone(Prism.languages.markdown.bold);
Prism.languages.nginx = Prism.languages.extend("clike", {
    comment: {pattern: /(^|[^"{\\])#.*/, lookbehind: !0},
    keyword: /\b(?:CONTENT_|DOCUMENT_|GATEWAY_|HTTP_|HTTPS|if_not_empty|PATH_|QUERY_|REDIRECT_|REMOTE_|REQUEST_|SCGI|SCRIPT_|SERVER_|http|server|events|location|include|accept_mutex|accept_mutex_delay|access_log|add_after_body|add_before_body|add_header|addition_types|aio|alias|allow|ancient_browser|ancient_browser_value|auth|auth_basic|auth_basic_user_file|auth_http|auth_http_header|auth_http_timeout|autoindex|autoindex_exact_size|autoindex_localtime|break|charset|charset_map|charset_types|chunked_transfer_encoding|client_body_buffer_size|client_body_in_file_only|client_body_in_single_buffer|client_body_temp_path|client_body_timeout|client_header_buffer_size|client_header_timeout|client_max_body_size|connection_pool_size|create_full_put_path|daemon|dav_access|dav_methods|debug_connection|debug_points|default_type|deny|devpoll_changes|devpoll_events|directio|directio_alignment|disable_symlinks|empty_gif|env|epoll_events|error_log|error_page|expires|fastcgi_buffer_size|fastcgi_buffers|fastcgi_busy_buffers_size|fastcgi_cache|fastcgi_cache_bypass|fastcgi_cache_key|fastcgi_cache_lock|fastcgi_cache_lock_timeout|fastcgi_cache_methods|fastcgi_cache_min_uses|fastcgi_cache_path|fastcgi_cache_purge|fastcgi_cache_use_stale|fastcgi_cache_valid|fastcgi_connect_timeout|fastcgi_hide_header|fastcgi_ignore_client_abort|fastcgi_ignore_headers|fastcgi_index|fastcgi_intercept_errors|fastcgi_keep_conn|fastcgi_max_temp_file_size|fastcgi_next_upstream|fastcgi_no_cache|fastcgi_param|fastcgi_pass|fastcgi_pass_header|fastcgi_read_timeout|fastcgi_redirect_errors|fastcgi_send_timeout|fastcgi_split_path_info|fastcgi_store|fastcgi_store_access|fastcgi_temp_file_write_size|fastcgi_temp_path|flv|geo|geoip_city|geoip_country|google_perftools_profiles|gzip|gzip_buffers|gzip_comp_level|gzip_disable|gzip_http_version|gzip_min_length|gzip_proxied|gzip_static|gzip_types|gzip_vary|if|if_modified_since|ignore_invalid_headers|image_filter|image_filter_buffer|image_filter_jpeg_quality|image_filter_sharpen|image_filter_transparency|imap_capabilities|imap_client_buffer|include|index|internal|ip_hash|keepalive|keepalive_disable|keepalive_requests|keepalive_timeout|kqueue_changes|kqueue_events|large_client_header_buffers|limit_conn|limit_conn_log_level|limit_conn_zone|limit_except|limit_rate|limit_rate_after|limit_req|limit_req_log_level|limit_req_zone|limit_zone|lingering_close|lingering_time|lingering_timeout|listen|location|lock_file|log_format|log_format_combined|log_not_found|log_subrequest|map|map_hash_bucket_size|map_hash_max_size|master_process|max_ranges|memcached_buffer_size|memcached_connect_timeout|memcached_next_upstream|memcached_pass|memcached_read_timeout|memcached_send_timeout|merge_slashes|min_delete_depth|modern_browser|modern_browser_value|mp4|mp4_buffer_size|mp4_max_buffer_size|msie_padding|msie_refresh|multi_accept|open_file_cache|open_file_cache_errors|open_file_cache_min_uses|open_file_cache_valid|open_log_file_cache|optimize_server_names|override_charset|pcre_jit|perl|perl_modules|perl_require|perl_set|pid|pop3_auth|pop3_capabilities|port_in_redirect|post_action|postpone_output|protocol|proxy|proxy_buffer|proxy_buffer_size|proxy_buffering|proxy_buffers|proxy_busy_buffers_size|proxy_cache|proxy_cache_bypass|proxy_cache_key|proxy_cache_lock|proxy_cache_lock_timeout|proxy_cache_methods|proxy_cache_min_uses|proxy_cache_path|proxy_cache_use_stale|proxy_cache_valid|proxy_connect_timeout|proxy_cookie_domain|proxy_cookie_path|proxy_headers_hash_bucket_size|proxy_headers_hash_max_size|proxy_hide_header|proxy_http_version|proxy_ignore_client_abort|proxy_ignore_headers|proxy_intercept_errors|proxy_max_temp_file_size|proxy_method|proxy_next_upstream|proxy_no_cache|proxy_pass|proxy_pass_error_message|proxy_pass_header|proxy_pass_request_body|proxy_pass_request_headers|proxy_read_timeout|proxy_redirect|proxy_redirect_errors|proxy_send_lowat|proxy_send_timeout|proxy_set_body|proxy_set_header|proxy_ssl_session_reuse|proxy_store|proxy_store_access|proxy_temp_file_write_size|proxy_temp_path|proxy_timeout|proxy_upstream_fail_timeout|proxy_upstream_max_fails|random_index|read_ahead|real_ip_header|recursive_error_pages|request_pool_size|reset_timedout_connection|resolver|resolver_timeout|return|rewrite|root|rtsig_overflow_events|rtsig_overflow_test|rtsig_overflow_threshold|rtsig_signo|satisfy|satisfy_any|secure_link_secret|send_lowat|send_timeout|sendfile|sendfile_max_chunk|server|server_name|server_name_in_redirect|server_names_hash_bucket_size|server_names_hash_max_size|server_tokens|set|set_real_ip_from|smtp_auth|smtp_capabilities|so_keepalive|source_charset|split_clients|ssi|ssi_silent_errors|ssi_types|ssi_value_length|ssl|ssl_certificate|ssl_certificate_key|ssl_ciphers|ssl_client_certificate|ssl_crl|ssl_dhparam|ssl_engine|ssl_prefer_server_ciphers|ssl_protocols|ssl_session_cache|ssl_session_timeout|ssl_verify_client|ssl_verify_depth|starttls|stub_status|sub_filter|sub_filter_once|sub_filter_types|tcp_nodelay|tcp_nopush|timeout|timer_resolution|try_files|types|types_hash_bucket_size|types_hash_max_size|underscores_in_headers|uninitialized_variable_warn|upstream|use|user|userid|userid_domain|userid_expires|userid_name|userid_p3p|userid_path|userid_service|valid_referers|variables_hash_bucket_size|variables_hash_max_size|worker_connections|worker_cpu_affinity|worker_priority|worker_processes|worker_rlimit_core|worker_rlimit_nofile|worker_rlimit_sigpending|working_directory|xclient|xml_entities|xslt_entities|xslt_stylesheet|xslt_types)\b/i
}), Prism.languages.insertBefore("nginx", "keyword", {variable: /\$[a-z_]+/i});
Prism.languages.php = Prism.languages.extend("clike", {
    keyword: /\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,
    constant: /\b[A-Z0-9_]{2,}\b/,
    comment: {pattern: /(^|[^\\])(?:\/\*[\w\W]*?\*\/|\/\/.*)/, lookbehind: !0, greedy: !0}
}), Prism.languages.insertBefore("php", "class-name", {
    "shell-comment": {
        pattern: /(^|[^\\])#.*/,
        lookbehind: !0,
        alias: "comment"
    }
}), Prism.languages.insertBefore("php", "keyword", {
    delimiter: /\?>|<\?(?:php)?/i,
    variable: /\$\w+\b/i,
    "package": {pattern: /(\\|namespace\s+|use\s+)[\w\\]+/, lookbehind: !0, inside: {punctuation: /\\/}}
}), Prism.languages.insertBefore("php", "operator", {
    property: {
        pattern: /(->)[\w]+/,
        lookbehind: !0
    }
}), Prism.languages.markup && (Prism.hooks.add("before-highlight", function (e) {
    "php" === e.language && (e.tokenStack = [], e.backupCode = e.code, e.code = e.code.replace(/(?:<\?php|<\?)[\w\W]*?(?:\?>)/gi, function (a) {
        return e.tokenStack.push(a), "{{{PHP" + e.tokenStack.length + "}}}"
    }))
}), Prism.hooks.add("before-insert", function (e) {
    "php" === e.language && (e.code = e.backupCode, delete e.backupCode)
}), Prism.hooks.add("after-highlight", function (e) {
    if ("php" === e.language) {
        for (var a, n = 0; a = e.tokenStack[n]; n++)e.highlightedCode = e.highlightedCode.replace("{{{PHP" + (n + 1) + "}}}", Prism.highlight(a, e.grammar, "php").replace(/\$/g, "$$$$"));
        e.element.innerHTML = e.highlightedCode
    }
}), Prism.hooks.add("wrap", function (e) {
    "php" === e.language && "markup" === e.type && (e.content = e.content.replace(/(\{\{\{PHP[0-9]+\}\}\})/g, '<span class="token php">$1</span>'))
}), Prism.languages.insertBefore("php", "comment", {
    markup: {pattern: /<[^?]\/?(.*?)>/, inside: Prism.languages.markup},
    php: /\{\{\{PHP[0-9]+\}\}\}/
}));
Prism.languages.python = {
    "triple-quoted-string": {pattern: /"""[\s\S]+?"""|'''[\s\S]+?'''/, alias: "string"},
    comment: {pattern: /(^|[^\\])#.*/, lookbehind: !0},
    string: {pattern: /("|')(?:\\\\|\\?[^\\\r\n])*?\1/, greedy: !0},
    "function": {pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_][a-zA-Z0-9_]*(?=\()/g, lookbehind: !0},
    "class-name": {pattern: /(\bclass\s+)[a-z0-9_]+/i, lookbehind: !0},
    keyword: /\b(?:as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|with|yield)\b/,
    "boolean": /\b(?:True|False)\b/,
    number: /\b-?(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,
    operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not)\b/,
    punctuation: /[{}[\];(),.:]/
};
Prism.languages.sql = {
    comment: {pattern: /(^|[^\\])(?:\/\*[\w\W]*?\*\/|(?:--|\/\/|#).*)/, lookbehind: !0},
    string: {pattern: /(^|[^@\\])("|')(?:\\?[\s\S])*?\2/, lookbehind: !0},
    variable: /@[\w.$]+|@("|'|`)(?:\\?[\s\S])+?\1/,
    "function": /\b(?:COUNT|SUM|AVG|MIN|MAX|FIRST|LAST|UCASE|LCASE|MID|LEN|ROUND|NOW|FORMAT)(?=\s*\()/i,
    keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR VARYING|CHARACTER (?:SET|VARYING)|CHARSET|CHECK|CHECKPOINT|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMN|COLUMNS|COMMENT|COMMIT|COMMITTED|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS|CONTAINSTABLE|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|DATA(?:BASES?)?|DATE(?:TIME)?|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITER(?:S)?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE(?: PRECISION)?|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE KEY|ELSE|ENABLE|ENCLOSED BY|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPE(?:D BY)?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTO|INVOKER|ISOLATION LEVEL|JOIN|KEYS?|KILL|LANGUAGE SQL|LAST|LEFT|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MODIFIES SQL DATA|MODIFY|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL(?: CHAR VARYING| CHARACTER(?: VARYING)?| VARCHAR)?|NATURAL|NCHAR(?: VARCHAR)?|NEXT|NO(?: SQL|CHECK|CYCLE)?|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READ(?:S SQL DATA|TEXT)?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEATABLE|REPLICATION|REQUIRE|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE MODE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|START(?:ING BY)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED BY|TEXT(?:SIZE)?|THEN|TIMESTAMP|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNPIVOT|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?)\b/i,
    "boolean": /\b(?:TRUE|FALSE|NULL)\b/i,
    number: /\b-?(?:0x)?\d*\.?[\da-f]+\b/,
    operator: /[-+*\/=%^~]|&&?|\|?\||!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
    punctuation: /[;[\]()`,.]/
};
!function () {
    if ("undefined" != typeof self && self.Prism && self.document) {
        var t = [], e = {}, n = function () {
        };
        Prism.plugins.toolbar = {};
        var a = Prism.plugins.toolbar.registerButton = function (n, a) {
            var o;
            o = "function" == typeof a ? a : function (t) {
                var e;
                return "function" == typeof a.onClick ? (e = document.createElement("button"), e.type = "button", e.addEventListener("click", function () {
                    a.onClick.call(this, t)
                })) : "string" == typeof a.url ? (e = document.createElement("a"), e.href = a.url) : e = document.createElement("span"), e.textContent = a.text, e
            }, t.push(e[n] = o)
        }, o = Prism.plugins.toolbar.hook = function (a) {
            var o = a.element.parentNode;
            if (o && /pre/i.test(o.nodeName) && !o.classList.contains("code-toolbar")) {
                o.classList.add("code-toolbar");
                var r = document.createElement("div");
                r.classList.add("toolbar"), document.body.hasAttribute("data-toolbar-order") && (t = document.body.getAttribute("data-toolbar-order").split(",").map(function (t) {
                    return e[t] || n
                })), t.forEach(function (t) {
                    var e = t(a);
                    if (e) {
                        var n = document.createElement("div");
                        n.classList.add("toolbar-item"), n.appendChild(e), r.appendChild(n)
                    }
                }), o.appendChild(r)
            }
        };
        a("label", function (t) {
            var e = t.element.parentNode;
            if (e && /pre/i.test(e.nodeName) && e.hasAttribute("data-label")) {
                var n, a, o = e.getAttribute("data-label");
                try {
                    a = document.querySelector("template#" + o)
                } catch (r) {
                }
                return a ? n = a.content : (e.hasAttribute("data-url") ? (n = document.createElement("a"), n.href = e.getAttribute("data-url")) : n = document.createElement("span"), n.textContent = o), n
            }
        }), Prism.hooks.add("complete", o)
    }
}();
!function () {
    if ("undefined" != typeof self && self.Prism && self.document) {
        if (!Prism.plugins.toolbar)return console.warn("Show Languages plugin loaded before Toolbar plugin."), void 0;
        var e = {
            html: "HTML",
            xml: "XML",
            svg: "SVG",
            mathml: "MathML",
            css: "CSS",
            clike: "C-like",
            javascript: "JavaScript",
            abap: "ABAP",
            actionscript: "ActionScript",
            apacheconf: "Apache Configuration",
            apl: "APL",
            applescript: "AppleScript",
            asciidoc: "AsciiDoc",
            aspnet: "ASP.NET (C#)",
            autoit: "AutoIt",
            autohotkey: "AutoHotkey",
            basic: "BASIC",
            csharp: "C#",
            cpp: "C++",
            coffeescript: "CoffeeScript",
            "css-extras": "CSS Extras",
            fsharp: "F#",
            glsl: "GLSL",
            graphql: "GraphQL",
            http: "HTTP",
            inform7: "Inform 7",
            json: "JSON",
            latex: "LaTeX",
            livescript: "LiveScript",
            lolcode: "LOLCODE",
            matlab: "MATLAB",
            mel: "MEL",
            nasm: "NASM",
            nginx: "nginx",
            nsis: "NSIS",
            objectivec: "Objective-C",
            ocaml: "OCaml",
            parigp: "PARI/GP",
            php: "PHP",
            "php-extras": "PHP Extras",
            powershell: "PowerShell",
            properties: ".properties",
            protobuf: "Protocol Buffers",
            jsx: "React JSX",
            rest: "reST (reStructuredText)",
            sas: "SAS",
            sass: "Sass (Sass)",
            scss: "Sass (Scss)",
            sql: "SQL",
            typescript: "TypeScript",
            vhdl: "VHDL",
            vim: "vim",
            wiki: "Wiki markup",
            xojo: "Xojo (REALbasic)",
            yaml: "YAML"
        };
        Prism.plugins.toolbar.registerButton("show-language", function (t) {
            var a = t.element.parentNode;
            if (a && /pre/i.test(a.nodeName)) {
                var s = a.getAttribute("data-language") || e[t.language] || t.language.substring(0, 1).toUpperCase() + t.language.substring(1),
                    r = document.createElement("span");
                return r.textContent = s, r
            }
        })
    }
}();
/*APlayer.min.js*/
!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("APlayer", [], t) : "object" == typeof exports ? exports.APlayer = t() : e.APlayer = t()
}(this, function () {
    return function (e) {
        function t(l) {
            if (a[l]) {
                return a[l].exports
            }
            var r = a[l] = {exports: {}, id: l, loaded: !1};
            return e[l].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
        }

        var a = {};
        return t.m = e, t.c = a, t.p = "", t(0)
    }([function (e, t, a) {
        function l(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        var r = function () {
            function e(e, t) {
                for (var a = 0; a < t.length; a++) {
                    var l = t[a];
                    l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(e, l.key, l)
                }
            }

            return function (t, a, l) {
                return a && e(t.prototype, a), l && e(t, l), t
            }
        }();
        a(1);
        var i = [], n = function () {
            function e(t) {
                function a(e) {
                    for (var t = e.offsetLeft, a = e.offsetParent, l = void 0; null !== a;) {
                        t += a.offsetLeft, a = a.offsetParent
                    }
                    return l = document.body.scrollLeft + document.documentElement.scrollLeft, t - l
                }

                function r(e) {
                    for (var t = e.offsetTop, a = e.offsetParent, l = void 0; null !== a;) {
                        t += a.offsetTop, a = a.offsetParent
                    }
                    return l = document.body.scrollTop + document.documentElement.scrollTop, t - l
                }

                var n = this;
                l(this, e);
                var o = {
                    play: ["0 0 16 31", "M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"],
                    pause: ["0 0 17 32", "M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"],
                    "volume-up": ["0 0 28 32", "M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056zM29.728 16q0 4.096-2.272 7.552t-6.048 5.056q-0.224 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.64 0.704-1.056 0.128-0.064 0.384-0.192t0.416-0.192q0.8-0.448 1.44-0.896 2.208-1.632 3.456-4.064t1.216-5.152-1.216-5.152-3.456-4.064q-0.64-0.448-1.44-0.896-0.128-0.096-0.416-0.192t-0.384-0.192q-0.704-0.416-0.704-1.056 0-0.448 0.32-0.8t0.832-0.352q0.224 0 0.448 0.096 3.776 1.632 6.048 5.056t2.272 7.552z"],
                    "volume-down": ["0 0 28 32", "M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"],
                    "volume-off": ["0 0 28 32", "M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"],
                    circulation: ["0 0 29 32", "M25.6 9.92q1.344 0 2.272 0.928t0.928 2.272v9.28q0 1.28-0.928 2.24t-2.272 0.96h-22.4q-1.28 0-2.24-0.96t-0.96-2.24v-9.28q0-1.344 0.96-2.272t2.24-0.928h8v-3.52l6.4 5.76-6.4 5.76v-3.52h-6.72v6.72h19.84v-6.72h-4.8v-4.48h6.080z"],
                    random: ["0 0 33 31", "M29.867 9.356l-5.003 5.003c-0.094 0.094-0.235 0.141-0.36 0.141-0.266 0-0.5-0.219-0.5-0.5v-3.002h-4.002c-2.079 0-3.064 1.423-3.94 3.111-0.453 0.875-0.844 1.782-1.219 2.673-1.735 4.033-3.768 8.223-8.849 8.223h-3.502c-0.281 0-0.5-0.219-0.5-0.5v-3.002c0-0.281 0.219-0.5 0.5-0.5h3.502c2.079 0 3.064-1.423 3.94-3.111 0.453-0.875 0.844-1.782 1.219-2.673 1.735-4.033 3.768-8.223 8.849-8.223h4.002v-3.002c0-0.281 0.219-0.5 0.5-0.5 0.141 0 0.266 0.063 0.375 0.156l4.987 4.987c0.094 0.094 0.141 0.235 0.141 0.36s-0.047 0.266-0.141 0.36zM10.262 14.781c-0.907-1.892-1.907-3.783-4.268-3.783h-3.502c-0.281 0-0.5-0.219-0.5-0.5v-3.002c0-0.281 0.219-0.5 0.5-0.5h3.502c2.783 0 4.831 1.298 6.41 3.518-0.876 1.344-1.517 2.798-2.142 4.268zM29.867 23.363l-5.003 5.003c-0.094 0.094-0.235 0.141-0.36 0.141-0.266 0-0.5-0.235-0.5-0.5v-3.002c-4.643 0-7.504 0.547-10.396-3.518 0.86-1.344 1.501-2.798 2.126-4.268 0.907 1.892 1.907 3.783 4.268 3.783h4.002v-3.002c0-0.281 0.219-0.5 0.5-0.5 0.141 0 0.266 0.063 0.375 0.156l4.987 4.987c0.094 0.094 0.141 0.235 0.141 0.36s-0.047 0.266-0.141 0.36z"],
                    order: ["0 0 32 32", "M0.622 18.334h19.54v7.55l11.052-9.412-11.052-9.413v7.549h-19.54v3.725z"],
                    single: ["0 0 38 32", "M2.072 21.577c0.71-0.197 1.125-0.932 0.928-1.641-0.221-0.796-0.333-1.622-0.333-2.457 0-5.049 4.108-9.158 9.158-9.158h5.428c0.056-0.922 0.221-1.816 0.482-2.667h-5.911c-3.158 0-6.128 1.23-8.361 3.463s-3.463 5.203-3.463 8.361c0 1.076 0.145 2.143 0.431 3.171 0.164 0.59 0.7 0.976 1.284 0.976 0.117 0 0.238-0.016 0.357-0.049zM21.394 25.613h-12.409v-2.362c0-0.758-0.528-1.052-1.172-0.652l-5.685 3.522c-0.644 0.4-0.651 1.063-0.014 1.474l5.712 3.69c0.637 0.411 1.158 0.127 1.158-0.63v-2.374h12.409c3.158 0 6.128-1.23 8.361-3.463 1.424-1.424 2.44-3.148 2.99-5.029-0.985 0.368-2.033 0.606-3.125 0.691-1.492 3.038-4.619 5.135-8.226 5.135zM28.718 0c-4.985 0-9.026 4.041-9.026 9.026s4.041 9.026 9.026 9.026 9.026-4.041 9.026-9.026-4.041-9.026-9.026-9.026zM30.392 13.827h-1.728v-6.822c-0.635 0.576-1.433 1.004-2.407 1.285v-1.713c0.473-0.118 0.975-0.325 1.506-0.62 0.532-0.325 0.975-0.665 1.329-1.034h1.3v8.904z"],
                    menu: ["0 0 22 32", "M20.8 14.4q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2zM1.6 11.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2zM20.8 20.8q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2z"]
                };
                this.getSVG = function (e) {
                    return '\n                <svg xmlns:xlink="http://www.w3.org/1999/xlink" height="100%" version="1.1" viewBox="' + o[e][0] + '" width="100%">\n                    <use xlink:href="#aplayer-' + e + '"></use>\n                    <path class="aplayer-fill" d="' + o[e][1] + '" id="aplayer-' + e + '"></path>\n                </svg>\n            '
                }, this.isMobile = /mobile/i.test(window.navigator.userAgent), this.isMobile && (t.autoplay = !1);
                var s = {
                    element: document.getElementsByClassName("aplayer")[0],
                    narrow: !1,
                    autoplay: !1,
                    mutex: !0,
                    showlrc: 0,
                    theme: "#b7daff",
                    mode: "circulation"
                };
                for (var p in s) {
                    s.hasOwnProperty(p) && !t.hasOwnProperty(p) && (t[p] = s[p])
                }
                if (this.playIndex = "[object Array]" === Object.prototype.toString.call(t.music) ? 0 : -1, this.option = t, this.audios = [], this.mode = t.mode, this.secondToTime = function (e) {
                        var t = function (e) {
                                return e < 10 ? "0" + e : "" + e
                            }, a = parseInt(e / 60), l = parseInt(e - 60 * a), r = parseInt(a / 60),
                            i = parseInt(e / 60 - 60 * parseInt(e / 60 / 60));
                        return e >= 3600 ? t(r) + ":" + t(i) + ":" + t(l) : t(a) + ":" + t(l)
                    }, this.element = this.option.element, 2 === this.option.showlrc || this.option.showlrc === !0) {
                    this.savelrc = [];
                    for (var c = 0; c < this.element.getElementsByClassName("aplayer-lrc-content").length; c++) {
                        this.savelrc.push(this.element.getElementsByClassName("aplayer-lrc-content")[c].innerHTML)
                    }
                }
                this.lrcs = [], this.updateBar = function (e, t, a) {
                    t = t > 0 ? t : 0, t = t < 1 ? t : 1, m[e + "Bar"].style[a] = 100 * t + "%"
                }, this.updateLrc = function () {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? n.audio.currentTime : arguments[0];
                    if (n.lrcIndex > n.lrc.length - 1 || e < n.lrc[n.lrcIndex][0] || !n.lrc[n.lrcIndex + 1] || e >= n.lrc[n.lrcIndex + 1][0]) {
                        for (var t = 0; t < n.lrc.length; t++) {
                            e >= n.lrc[t][0] && (!n.lrc[t + 1] || e < n.lrc[t + 1][0]) && (n.lrcIndex = t, n.lrcContents.style.transform = "translateY(" + 16 * -n.lrcIndex + "px)", n.lrcContents.style.webkitTransform = "translateY(" + 16 * -n.lrcIndex + "px)", n.lrcContents.getElementsByClassName("aplayer-lrc-current")[0].classList.remove("aplayer-lrc-current"), n.lrcContents.getElementsByTagName("p")[t].classList.add("aplayer-lrc-current"))
                        }
                    }
                };
                var d = ["play", "pause", "canplay", "playing", "ended", "error"];
                this.event = {};
                for (var u = 0; u < d.length; u++) {
                    this.event[d[u]] = []
                }
                this.trigger = function (e) {
                    for (var t = 0; t < n.event[e].length; t++) {
                        n.event[e][t]()
                    }
                }, this.multiple = this.playIndex > -1, this.music = this.multiple ? this.option.music[this.playIndex] : this.option.music, this.option.showlrc && this.element.classList.add("aplayer-withlrc"), this.option.music.length > 1 && this.element.classList.add("aplayer-list"), this.multiple || "circulation" === this.mode || "order" === this.mode || (this.mode = "circulation"), this.getRandomOrder();
                var y = '\n            <div class="aplayer-pic" ' + (this.music.pic ? "style=\"background-image: url('" + this.music.pic + "');\"" : "") + '>\n                <div class="aplayer-button aplayer-play">\n                    <button class="aplayer-icon aplayer-icon-play">' + this.getSVG("play") + ('     </button>\n                </div>\n            </div>\n            <div class="aplayer-info">\n                <div class="aplayer-music">\n                    <span class="aplayer-title"></span>\n                    <span class="aplayer-author"></span>\n                </div>\n                <div class="aplayer-lrc">\n                    <div class="aplayer-lrc-contents" style="transform: translateY(0); -webkit-transform: translateY(0);"></div>\n                </div>\n                <div class="aplayer-controller">\n                    <div class="aplayer-bar-wrap">\n                        <div class="aplayer-bar">\n                            <div class="aplayer-loaded" style="width: 0"></div>\n                            <div class="aplayer-played" style="width: 0; background: ' + this.option.theme + ';">\n                                <span class="aplayer-thumb" style="border: 1px solid ' + this.option.theme + ';"></span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="aplayer-time">\n                        <span class="aplayer-time-inner">\n                            - <span class="aplayer-ptime">00:00</span> / <span class="aplayer-dtime">00:00</span>\n                        </span>\n                        <div class="aplayer-volume-wrap">\n                            <button class="aplayer-icon aplayer-icon-volume-down" ' + (this.isMobile ? 'style="display: none;"' : "") + ">") + this.getSVG("volume-down") + ('             </button>\n                            <div class="aplayer-volume-bar-wrap">\n                                <div class="aplayer-volume-bar">\n                                    <div class="aplayer-volume" style="height: 80%; background: ' + this.option.theme + ';"></div>\n                                </div>\n                            </div>\n                        </div>\n                        <button class="aplayer-icon aplayer-icon-mode">') + this.getSVG(this.mode) + ("         </button>\n                        " + (this.multiple ? '<button class="aplayer-icon aplayer-icon-menu">' + this.getSVG("menu") + "         </button>" : "") + "\n                    </div>\n                </div>\n            </div>");
                if (this.multiple) {
                    y += '\n            <div class="aplayer-list" ' + (this.option.listmaxheight ? 'style="max-height: ' + this.option.listmaxheight : "") + '">\n                <ol>';
                    for (var h = 0; h < this.option.music.length; h++) {
                        y += '\n                    <li>\n                        <span class="aplayer-list-cur" style="background: ' + this.option.theme + ';"></span>\n                        <span class="aplayer-list-index">' + (h + 1) + '</span>\n                        <span class="aplayer-list-title">' + this.option.music[h].title + '</span>\n                        <span class="aplayer-list-author">' + this.option.music[h].author + "</span>\n                    </li>"
                    }
                    y += "\n                </ol>\n            </div>"
                }
                this.element.innerHTML = y, this.element.offsetWidth < 300 && (this.element.getElementsByClassName("aplayer-icon-mode")[0].style.display = "none"), this.ptime = this.element.getElementsByClassName("aplayer-ptime")[0], this.element.getElementsByClassName("aplayer-info")[0].offsetWidth < 200 && this.element.getElementsByClassName("aplayer-time")[0].classList.add("aplayer-time-narrow");
                var m = {};
                m.barWrap = this.element.getElementsByClassName("aplayer-bar-wrap")[0], this.option.narrow && this.element.classList.add("aplayer-narrow"), this.button = this.element.getElementsByClassName("aplayer-button")[0], this.button.addEventListener("click", function (e) {
                    n.toggle()
                }), this.multiple && !function () {
                    for (var e = n.element.getElementsByClassName("aplayer-list")[0].getElementsByTagName("li"), t = function (t) {
                        e[t].addEventListener("click", function () {
                            var a = parseInt(e[t].getElementsByClassName("aplayer-list-index")[0].innerHTML) - 1;
                            a !== n.playIndex ? (n.setMusic(a), n.play()) : n.toggle()
                        })
                    }, a = 0; a < n.option.music.length; a++) {
                        t(a)
                    }
                }(), m.playedBar = this.element.getElementsByClassName("aplayer-played")[0], m.loadedBar = this.element.getElementsByClassName("aplayer-loaded")[0];
                var f = this.element.getElementsByClassName("aplayer-thumb")[0], v = void 0;
                m.barWrap.addEventListener("click", function (e) {
                    var t = e || window.event;
                    v = m.barWrap.clientWidth;
                    var l = (t.clientX - a(m.barWrap)) / v;
                    n.updateBar("played", l, "width"), n.element.getElementsByClassName("aplayer-ptime")[0].innerHTML = n.secondToTime(l * n.audio.duration), n.audio.currentTime = parseFloat(m.playedBar.style.width) / 100 * n.audio.duration
                }), f.addEventListener("mouseover", function () {
                    f.style.background = n.option.theme
                }), f.addEventListener("mouseout", function () {
                    f.style.background = "#fff"
                });
                var g = function (e) {
                    var t = e || window.event, l = (t.clientX - a(m.barWrap)) / v;
                    l = l > 0 ? l : 0, l = l < 1 ? l : 1, n.updateBar("played", l, "width"), n.option.showlrc && n.updateLrc(parseFloat(m.playedBar.style.width) / 100 * n.audio.duration), n.element.getElementsByClassName("aplayer-ptime")[0].innerHTML = n.secondToTime(l * n.audio.duration)
                }, b = function E() {
                    document.removeEventListener("mouseup", E), document.removeEventListener("mousemove", g), n.audio.currentTime = parseFloat(m.playedBar.style.width) / 100 * n.audio.duration, n.playedTime = setInterval(function () {
                        n.updateBar("played", n.audio.currentTime / n.audio.duration, "width"), n.option.showlrc && n.updateLrc(), n.element.getElementsByClassName("aplayer-ptime")[0].innerHTML = n.secondToTime(n.audio.currentTime), n.trigger("playing")
                    }, 100)
                };
                f.addEventListener("mousedown", function () {
                    v = m.barWrap.clientWidth, clearInterval(n.playedTime), document.addEventListener("mousemove", g), document.addEventListener("mouseup", b)
                }), m.volumeBar = this.element.getElementsByClassName("aplayer-volume")[0];
                var x = this.element.getElementsByClassName("aplayer-volume-bar")[0];
                this.volumeicon = this.element.getElementsByClassName("aplayer-time")[0].getElementsByTagName("button")[0];
                var w = 35;
                this.element.getElementsByClassName("aplayer-volume-bar-wrap")[0].addEventListener("click", function (e) {
                    var t = e || window.event, a = (w - t.clientY + r(x)) / w;
                    a = a > 0 ? a : 0, a = a < 1 ? a : 1, n.volume(a)
                }), this.volumeicon.addEventListener("click", function () {
                    n.audio.muted ? (n.audio.muted = !1, n.volumeicon.className = 1 === n.audio.volume ? "aplayer-icon aplayer-icon-volume-up" : "aplayer-icon aplayer-icon-volume-down", 1 === n.audio.volume ? (n.volumeicon.className = "aplayer-icon aplayer-icon-volume-up", n.volumeicon.innerHTML = n.getSVG("volume-up")) : (n.volumeicon.className = "aplayer-icon aplayer-icon-volume-down", n.volumeicon.innerHTML = n.getSVG("volume-down")), n.updateBar("volume", n.audio.volume, "height")) : (n.audio.muted = !0, n.volumeicon.className = "aplayer-icon aplayer-icon-volume-off", n.volumeicon.innerHTML = n.getSVG("volume-off"), n.updateBar("volume", 0, "height"))
                });
                var A = this.element.getElementsByClassName("aplayer-icon-mode")[0];
                A.addEventListener("click", function () {
                    n.multiple ? "random" === n.mode ? n.mode = "single" : "single" === n.mode ? n.mode = "order" : "order" === n.mode ? n.mode = "circulation" : "circulation" === n.mode && (n.mode = "random") : "circulation" === n.mode ? n.mode = "order" : n.mode = "circulation", A.innerHTML = n.getSVG(n.mode), n.audio.loop = !(n.multiple || "order" === n.mode)
                }), this.multiple && !function () {
                    var e = n.element.getElementsByClassName("aplayer-list")[0];
                    e.style.height = e.offsetHeight + "px", n.element.getElementsByClassName("aplayer-icon-menu")[0].addEventListener("click", function () {
                        e.classList.contains("aplayer-list-hide") ? e.classList.remove("aplayer-list-hide") : e.classList.add("aplayer-list-hide")
                    })
                }(), "random" === this.mode ? this.setMusic(this.randomOrder[0]) : this.setMusic(0), i.push(this)
            }

            return r(e, [{
                key: "setMusic", value: function (e) {
                    var t = this;
                    this.multiple && "undefined" != typeof e && (this.playIndex = e);
                    var a = this.playIndex;
                    this.music = this.multiple ? this.option.music[a] : this.option.music, this.music.pic && (this.element.getElementsByClassName("aplayer-pic")[0].style.backgroundImage = "url('" + this.music.pic + "')"), this.element.getElementsByClassName("aplayer-title")[0].innerHTML = this.music.title, this.element.getElementsByClassName("aplayer-author")[0].innerHTML = " - " + this.music.author, this.multiple && (this.element.getElementsByClassName("aplayer-list-light")[0] && this.element.getElementsByClassName("aplayer-list-light")[0].classList.remove("aplayer-list-light"), this.element.getElementsByClassName("aplayer-list")[0].getElementsByTagName("li")[a].classList.add("aplayer-list-light")), this.audio && (this.pause(), this.audio.currentTime = 0), this.multiple && (this.element.getElementsByClassName("aplayer-list")[0].scrollTop = 33 * a), this.multiple && !this.audios[a] || this.playIndex === -1 ? (this.audio = document.createElement("audio"), this.audio.src = this.music.url, this.audio.preload = this.option.preload ? this.option.preload : "auto", this.audio.addEventListener("durationchange", function () {
                        1 !== t.audio.duration && (t.element.getElementsByClassName("aplayer-dtime")[0].innerHTML = t.secondToTime(t.audio.duration))
                    }), this.audio.addEventListener("progress", function () {
                        var e = t.audio.buffered.length ? t.audio.buffered.end(t.audio.buffered.length - 1) / t.audio.duration : 0;
                        t.updateBar("loaded", e, "width")
                    }), this.audio.addEventListener("error", function () {
                        t.element.getElementsByClassName("aplayer-author")[0].innerHTML = " - Error happens ╥﹏╥", t.trigger("pause")
                    }), this.audio.addEventListener("canplay", function () {
                        t.trigger("canplay")
                    }), this.ended = !1, this.multiple ? this.audio.addEventListener("ended", function () {
                        return t.isMobile ? (t.ended = !0, void t.pause()) : void (0 !== t.audio.currentTime && ("random" === t.mode ? t.setMusic(t.nextRandomNum()) : "single" === t.mode ? t.setMusic(t.playIndex) : "order" === t.mode ? t.playIndex < t.option.music.length - 1 ? t.setMusic(++t.playIndex) : (t.ended = !0, t.pause(), t.trigger("ended")) : "circulation" === t.mode && (t.playIndex < t.option.music.length - 1 ? t.setMusic(++t.playIndex) : t.setMusic(0))))
                    }) : this.audio.addEventListener("ended", function () {
                        "order" === t.mode && (t.ended = !0, t.pause(), t.trigger("ended"))
                    }), this.audio.volume = parseInt(this.element.getElementsByClassName("aplayer-volume")[0].style.height) / 100, this.audio.loop = !(this.multiple || "order" === this.mode), this.multiple && (this.audios[a] = this.audio)) : (this.audio = this.audios[a], this.audio.volume = parseInt(this.element.getElementsByClassName("aplayer-volume")[0].style.height) / 100, this.audio.currentTime = 0);
                    var l = function (e) {
                        for (var t = e.split("\n"), a = [], l = t.length, r = 0; r < l; r++) {
                            var i = t[r].match(/\[(\d{2}):(\d{2})\.(\d{2,3})]/g),
                                n = t[r].replace(/\[(\d{2}):(\d{2})\.(\d{2,3})]/g, "").replace(/^\s+|\s+$/g, "");
                            if (null != i) {
                                for (var o = i.length, s = 0; s < o; s++) {
                                    var p = /\[(\d{2}):(\d{2})\.(\d{2,3})]/.exec(i[s]),
                                        c = 60 * p[1] + parseInt(p[2]) + parseInt(p[3]) / (2 === (p[3] + "").length ? 100 : 1000);
                                    a.push([c, n])
                                }
                            }
                        }
                        return a.sort(function (e, t) {
                            return e[0] - t[0]
                        }), a
                    };
                    this.option.showlrc && !function () {
                        var e = t.multiple ? a : 0;
                        t.lrcs[e] || !function () {
                            var a = "";
                            1 === t.option.showlrc ? a = t.multiple ? t.option.music[e].lrc : t.option.music.lrc : 2 === t.option.showlrc || t.option.showlrc === !0 ? a = t.savelrc[e] : 3 === t.option.showlrc && !function () {
                                    var r = new XMLHttpRequest;
                                    r.onreadystatechange = function () {
                                        if (4 === r.readyState) {
                                            if (r.status >= 200 && r.status < 300 || 304 === r.status) {
                                                a = r.responseText, t.lrcs[e] = l(a), t.lrc = t.lrcs[e];
                                                var i = "";
                                                t.lrcContents = t.element.getElementsByClassName("aplayer-lrc-contents")[0];
                                                for (var n = 0; n < t.lrc.length; n++) {
                                                    i += "<p>" + t.lrc[n][1] + "</p>"
                                                }
                                                t.lrcContents.innerHTML = i, t.lrcIndex || (t.lrcIndex = 0), t.lrcContents.getElementsByTagName("p")[0].classList.add("aplayer-lrc-current"), t.lrcContents.style.transform = "translateY(0px)", t.lrcContents.style.webkitTransform = "translateY(0px)"
                                            } else {
                                                console.log("Request was unsuccessful: " + r.status)
                                            }
                                        }
                                    };
                                    var i = void 0;
                                    i = t.multiple ? t.option.music[e].lrc : t.option.music.lrc, r.open("get", i, !0), r.send(null)
                                }(), a ? t.lrcs[e] = l(a) : t.lrcs[e] = [["00:00", "Loading"]]
                        }(), t.lrc = t.lrcs[e];
                        var r = "";
                        t.lrcContents = t.element.getElementsByClassName("aplayer-lrc-contents")[0];
                        for (var i = 0; i < t.lrc.length; i++) {
                            r += "<p>" + t.lrc[i][1] + "</p>"
                        }
                        t.lrcContents.innerHTML = r, t.lrcIndex || (t.lrcIndex = 0), t.lrcContents.getElementsByTagName("p")[0].classList.add("aplayer-lrc-current"), t.lrcContents.style.transform = "translateY(0px)", t.lrcContents.style.webkitTransform = "translateY(0px)"
                    }(), 1 !== this.audio.duration && (this.element.getElementsByClassName("aplayer-dtime")[0].innerHTML = this.audio.duration ? this.secondToTime(this.audio.duration) : "00:00"), this.option.autoplay && !this.isMobile && this.play(), this.option.autoplay = !0, this.isMobile && this.pause()
                }
            }, {
                key: "play", value: function (e) {
                    var t = this;
                    if ("[object Number]" === Object.prototype.toString.call(e) && (this.audio.currentTime = e), this.button.classList.contains("aplayer-play")) {
                        if (this.button.classList.remove("aplayer-play"), this.button.classList.add("aplayer-pause"), this.button.innerHTML = "", setTimeout(function () {
                                t.button.innerHTML = '\n                            <button class="aplayer-icon aplayer-icon-pause">' + t.getSVG("pause") + "     </button>"
                            }, 100), this.option.mutex) {
                            for (var a = 0; a < i.length; a++) {
                                this != i[a] && i[a].pause()
                            }
                        }
                        this.audio.play(), this.playedTime && clearInterval(this.playedTime), this.playedTime = setInterval(function () {
                            t.updateBar("played", t.audio.currentTime / t.audio.duration, "width"), t.option.showlrc && t.updateLrc(), t.ptime.innerHTML = t.secondToTime(t.audio.currentTime), t.trigger("playing")
                        }, 100), this.trigger("play")
                    }
                }
            }, {
                key: "pause", value: function () {
                    var e = this;
                    (this.button.classList.contains("aplayer-pause") || this.ended) && (this.ended = !1, this.button.classList.remove("aplayer-pause"), this.button.classList.add("aplayer-play"), this.button.innerHTML = "", setTimeout(function () {
                        e.button.innerHTML = '\n                            <button class="aplayer-icon aplayer-icon-play">' + e.getSVG("play") + "     </button>"
                    }, 100), this.audio.pause(), clearInterval(this.playedTime), this.trigger("pause"))
                }
            }, {
                key: "volume", value: function (e) {
                    this.updateBar("volume", e, "height"), this.audio.volume = e, this.audio.muted && (this.audio.muted = !1), 1 === e ? (this.volumeicon.className = "aplayer-icon aplayer-icon-volume-up", this.volumeicon.innerHTML = this.getSVG("volume-up")) : (this.volumeicon.className = "aplayer-icon aplayer-icon-volume-down", this.volumeicon.innerHTML = this.getSVG("volume-down"))
                }
            }, {
                key: "on", value: function (e, t) {
                    "function" == typeof t && this.event[e].push(t)
                }
            }, {
                key: "toggle", value: function () {
                    this.button.classList.contains("aplayer-play") ? this.play() : this.button.classList.contains("aplayer-pause") && this.pause()
                }
            }, {
                key: "getRandomOrder", value: function () {
                    function e(e, t) {
                        return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
                    }

                    function t(t) {
                        for (var a, l = t.length, r = new Array(l), i = 0; i < l; i++) {
                            a = e(0, i), a !== i && (r[i] = r[a]), r[a] = t[i]
                        }
                        return r
                    }

                    if (this.multiple) {
                        if (!this.normalOrder) {
                            this.normalOrder = [];
                            for (var a = 0; a < this.option.music.length; a++) {
                                this.normalOrder[a] = a
                            }
                        }
                        this.randomOrder = t(this.normalOrder)
                    }
                }
            }, {
                key: "nextRandomNum", value: function () {
                    if (this.multiple) {
                        var e = this.randomOrder.indexOf(this.playIndex);
                        return e === this.randomOrder.length - 1 ? this.randomOrder[0] : this.randomOrder[e + 1]
                    }
                    return 0
                }
            }]), e
        }();
        e.exports = n
    }, function (e, t, a) {
        var l = a(2);
        "string" == typeof l && (l = [[e.id, l, ""]]);
        a(5)(l, {});
        l.locals && (e.exports = l.locals)
    }, function (e, t, a) {
        t = e.exports = a(3)(), t.push([e.id, ".aplayer-narrow{width:66px}.aplayer-narrow .aplayer-info{display:none}.aplayer-withlrc.aplayer-narrow{width:90px}.aplayer-withlrc.aplayer .aplayer-pic{height:90px;width:90px}.aplayer-withlrc.aplayer .aplayer-info{margin-left:90px;height:90px}.aplayer-withlrc.aplayer .aplayer-lrc{display:block}.aplayer-withlrc.aplayer .aplayer-info{padding:10px 7px 0}.aplayer-list.aplayer .aplayer-info{border-bottom:1px solid #e9e9e9}.aplayer{font-family:Arial,Helvetica,sans-serif;margin:5px;-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);-webkit-border-radius:2px;border-radius:2px;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;line-height:normal}.aplayer *{-webkit-box-sizing:content-box;box-sizing:content-box}.aplayer .aplayer-icon{width:15px;height:15px;border:none;background-color:transparent;outline:none;cursor:pointer;opacity:.8;vertical-align:middle;padding:0;font-size:12px;margin:0;display:inline}.aplayer .aplayer-icon .aplayer-fill{-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.aplayer .aplayer-lrc-content{display:none}.aplayer .aplayer-pic{position:relative;float:left;height:66px;width:66px;background-image:url(" + a(4) + ");background-size:100%;-webkit-transition:all .3s ease;transition:all .3s ease}.aplayer .aplayer-pic .aplayer-button{position:absolute;-webkit-border-radius:50%;border-radius:50%;opacity:.8;cursor:pointer;text-shadow:0 1px 1px rgba(0,0,0,.2);-webkit-box-shadow:0 1px 1px rgba(0,0,0,.2);box-shadow:0 1px 1px rgba(0,0,0,.2);background:rgba(0,0,0,.2);-webkit-transition:all .1s ease;transition:all .1s ease}.aplayer .aplayer-pic .aplayer-button:hover{opacity:1}.aplayer .aplayer-pic .aplayer-button .aplayer-fill{fill:#fff}.aplayer .aplayer-pic .aplayer-hide{display:none}.aplayer .aplayer-pic .aplayer-play{width:26px;height:26px;border:2px solid #fff;bottom:50%;right:50%;margin:0 -15px -15px 0}.aplayer .aplayer-pic .aplayer-play .aplayer-icon-play{position:absolute;top:3px;left:4px;height:20px;width:20px}.aplayer .aplayer-pic .aplayer-pause{width:16px;height:16px;border:2px solid #fff;bottom:4px;right:4px}.aplayer .aplayer-pic .aplayer-pause .aplayer-icon-pause{position:absolute;top:-2px;left:2px;height:12px;width:12px}.aplayer .aplayer-info{margin-left:66px;padding:14px 7px 0 10px;height:66px;-webkit-box-sizing:border-box;box-sizing:border-box}.aplayer .aplayer-info .aplayer-music{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin:0 0 13px 5px;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;cursor:default;padding-bottom:2px}.aplayer .aplayer-info .aplayer-music .aplayer-title{font-size:14px}.aplayer .aplayer-info .aplayer-music .aplayer-author{font-size:12px;color:#666}.aplayer .aplayer-info .aplayer-controller{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.aplayer .aplayer-info .aplayer-controller .aplayer-bar-wrap{margin:0 0 0 5px;padding:4px 0;cursor:pointer!important;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.aplayer .aplayer-info .aplayer-controller .aplayer-bar-wrap .aplayer-bar{position:relative;height:2px;width:100%;background:#cdcdcd}.aplayer .aplayer-info .aplayer-controller .aplayer-bar-wrap .aplayer-bar .aplayer-loaded{position:absolute;left:0;top:0;bottom:0;background:#aaa;height:2px;-webkit-transition:all .5s ease;transition:all .5s ease}.aplayer .aplayer-info .aplayer-controller .aplayer-bar-wrap .aplayer-bar .aplayer-played{position:absolute;left:0;top:0;bottom:0;height:2px}.aplayer .aplayer-info .aplayer-controller .aplayer-bar-wrap .aplayer-bar .aplayer-played .aplayer-thumb{position:absolute;top:0;right:5px;margin-top:-4px;margin-right:-10px;height:8px;width:8px;-webkit-border-radius:50%;border-radius:50%;background:#fff;cursor:pointer!important}.aplayer .aplayer-info .aplayer-controller .aplayer-time{position:relative;right:0;bottom:3px;height:17px;color:#999;font-size:11px;padding-left:7px}.aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-time-inner{vertical-align:middle}.aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon{cursor:pointer;-webkit-transition:all .2s ease;transition:all .2s ease}.aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon .aplayer-fill{fill:#666}.aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon.aplayer-icon-mode{margin-right:4px}.aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon:hover .aplayer-fill{fill:#000}.aplayer .aplayer-info .aplayer-controller .aplayer-time.aplayer-time-narrow .aplayer-icon-menu,.aplayer .aplayer-info .aplayer-controller .aplayer-time.aplayer-time-narrow .aplayer-icon-mode{display:none}.aplayer .aplayer-info .aplayer-controller .aplayer-volume-wrap{position:relative;display:inline-block;margin-left:3px;cursor:pointer!important}.aplayer .aplayer-info .aplayer-controller .aplayer-volume-wrap:hover .aplayer-volume-bar-wrap{display:block}.aplayer .aplayer-info .aplayer-controller .aplayer-volume-wrap .aplayer-volume-bar-wrap{display:none;position:absolute;bottom:15px;right:-3px;width:25px;height:40px;z-index:99}.aplayer .aplayer-info .aplayer-controller .aplayer-volume-wrap .aplayer-volume-bar-wrap .aplayer-volume-bar{position:absolute;bottom:0;right:10px;width:5px;height:35px;background:#aaa}.aplayer .aplayer-info .aplayer-controller .aplayer-volume-wrap .aplayer-volume-bar-wrap .aplayer-volume-bar .aplayer-volume{position:absolute;bottom:0;right:0;width:5px;-webkit-transition:all .1s ease;transition:all .1s ease}.aplayer .aplayer-lrc{display:none;position:relative;height:30px;text-align:center;overflow:hidden;margin:-10px 0 7px}.aplayer .aplayer-lrc:before{top:0;height:10%;background:-webkit-linear-gradient(top,rgba(255,255,255,.3),hsla(0,0%,100%,0));background:-webkit-gradient(linear,left top,left bottom,from(rgba(255,255,255,.3)),to(hsla(0,0%,100%,0)));background:linear-gradient(180deg,rgba(255,255,255,.3) 0,hsla(0,0%,100%,0));filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff',endColorstr='#00ffffff',GradientType=0)}.aplayer .aplayer-lrc:after,.aplayer .aplayer-lrc:before{position:absolute;z-index:1;display:block;overflow:hidden;width:100%;content:' '}.aplayer .aplayer-lrc:after{bottom:0;height:33%;background:-webkit-linear-gradient(top,hsla(0,0%,100%,0),hsla(0,0%,100%,.4));background:-webkit-gradient(linear,left top,left bottom,from(hsla(0,0%,100%,0)),to(hsla(0,0%,100%,.4)));background:linear-gradient(180deg,hsla(0,0%,100%,0) 0,hsla(0,0%,100%,.4));filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ffffff',endColorstr='#ccffffff',GradientType=0)}.aplayer .aplayer-lrc p{font-size:12px;color:#666;line-height:16px!important;height:16px!important;padding:0!important;margin:0!important;-webkit-transition:all .5s ease-out;transition:all .5s ease-out;opacity:.4;overflow:hidden}.aplayer .aplayer-lrc p.aplayer-lrc-current{opacity:1}.aplayer .aplayer-lrc .aplayer-lrc-contents{width:100%;-webkit-transition:all .5s ease-out;transition:all .5s ease-out;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;cursor:default}.aplayer .aplayer-list{overflow:auto;-webkit-transition:all .5s ease;transition:all .5s ease;will-change:height}.aplayer .aplayer-list.aplayer-list-hide{height:0!important}.aplayer .aplayer-list::-webkit-scrollbar{width:5px}.aplayer .aplayer-list::-webkit-scrollbar-track{background-color:#f9f9f9}.aplayer .aplayer-list::-webkit-scrollbar-thumb{-webkit-border-radius:3px;border-radius:3px;background-color:#eee}.aplayer .aplayer-list::-webkit-scrollbar-thumb:hover{background-color:#ccc}.aplayer .aplayer-list ol{list-style-type:none;margin:0;padding:0}.aplayer .aplayer-list ol li{position:relative;height:32px;line-height:32px;padding:0 15px;font-size:12px;border-top:1px solid #e9e9e9;cursor:pointer;-webkit-transition:all .2s ease;transition:all .2s ease;overflow:hidden}.aplayer .aplayer-list ol li:first-child{border-top:none}.aplayer .aplayer-list ol li:hover{background:rgba(239, 239, 239,.8);}.aplayer .aplayer-list ol li.aplayer-list-light{background:rgba(233, 233, 233,.7);}.aplayer .aplayer-list ol li.aplayer-list-light .aplayer-list-cur{display:inline-block}.aplayer .aplayer-list ol li .aplayer-list-cur{display:none;width:3px;height:22px;position:absolute;left:0;top:5px;cursor:pointer}.aplayer .aplayer-list ol li .aplayer-list-index{color:#666;margin-right:12px;cursor:pointer}.aplayer .aplayer-list ol li .aplayer-list-author{color:#666;float:right;cursor:pointer}@-webkit-keyframes aplayer-roll{0%{left:0}to{left:-100%}}@keyframes aplayer-roll{0%{left:0}to{left:-100%}}", ""])
    }, function (e, t) {
        e.exports = function () {
            var e = [];
            return e.toString = function () {
                for (var e = [], t = 0; t < this.length; t++) {
                    var a = this[t];
                    a[2] ? e.push("@media " + a[2] + "{" + a[1] + "}") : e.push(a[1])
                }
                return e.join("")
            }, e.i = function (t, a) {
                "string" == typeof t && (t = [[null, t, ""]]);
                for (var l = {}, r = 0; r < this.length; r++) {
                    var i = this[r][0];
                    "number" == typeof i && (l[i] = !0)
                }
                for (r = 0; r < t.length; r++) {
                    var n = t[r];
                    "number" == typeof n[0] && l[n[0]] || (a && !n[2] ? n[2] = a : a && (n[2] = "(" + n[2] + ") and (" + a + ")"), e.push(n))
                }
            }, e
        }
    }, function (e, t) {
        e.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAeAAD/4QMfaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzA2NyA3OS4xNTc3NDcsIDIwMTUvMDMvMzAtMjM6NDA6NDIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjE2NjQ3NUZBM0Y4RDExRTY4NzJCRDdCNkZCQTQ0MjNBIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE2NjQ3NUY5M0Y4RDExRTY4NzJCRDdCNkZCQTQ0MjNBIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IE1hY2ludG9zaCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSI5OENEMEFFRjM0NTI1NjE0NEREQkU4RjkxRjAwNjM3NiIgc3RSZWY6ZG9jdW1lbnRJRD0iOThDRDBBRUYzNDUyNTYxNDREREJFOEY5MUYwMDYzNzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAQCwsLDAsQDAwQFw8NDxcbFBAQFBsfFxcXFxcfHhcaGhoaFx4eIyUnJSMeLy8zMy8vQEBAQEBAQEBAQEBAQEBAAREPDxETERUSEhUUERQRFBoUFhYUGiYaGhwaGiYwIx4eHh4jMCsuJycnLis1NTAwNTVAQD9AQEBAQEBAQEBAQED/wAARCABkAGQDASIAAhEBAxEB/8QAgwAAAgIDAQAAAAAAAAAAAAAAAAYBBQIDBAcBAQEBAAAAAAAAAAAAAAAAAAABAhAAAQIEBAEJBgMHBQAAAAAAAQIDABEEBSExEgZBUWFxgaGxIhMUkTJCUmIVI0MWwdHh8XKSsvCCojNzEQEBAQEBAQEBAAAAAAAAAAAAAREhMVFBYf/aAAwDAQACEQMRAD8AaJ8vCJEYTjIZxtlIicc40VFZS0idVS6lpP1HE9Aind3dSrWWbdTPVruXgSQn98Awd0SBC+mp3fVYtUjFGk5F5U1S6Me6Mvtu6ncXbo01zNtzl2CJovwZxML/ANl3DwvZn/5fxiPt+72sWbkw/Lg4jTP/AImGhhiYWlXXdlD4q23IqWh7zlOZ/wCGrujpt+7bTWKDTijSvEy0O4CfJqy9sNMXmWMTECRExjzxMUEEEEBxLcbbQXHVBCEialKMgBFBU7jqax/0dmbU64fzJYy+aZwSOcxT7kvdPXVJpU6jTU5IC0HBauKucDhF7tS3ejolVJK51UlJQrCSRkeuJqppdspcV593dNU8cS0kkNjpPvKi8ZaZp2w3TtpabGSUAJHZEgzjXUVdPStebUOBpE5AnieQDieiKjeYyELVVva3ML0IZddI44IHaZxtod52upcDbqV0ylGSVLkUTP1JyibDDBOJxzjTUF8UzqqdIVUBtRZByK9J09seb1lzuKawuIqngRLSorUDMZ6k8DPMSwhaSPTwSDFbd7Bb7s2rzkBupl4KlIksH6vmHTE2GucuNqp6p3/tIKXCOKknST1xYgZDlihPsNxrLTXItFevXTuLU02omZadQZFP9Jw9ohxjz2tfF03GhFKdQXV6kqHINCJ/2tTj0KYJiQow6oIJY5QRR5hYLM5cK9KHkFNO1JbxIImOCeuPREyAAAkAJARyW63s26n8hlSnATqUtZmonnlKOucokhQtxDTa3XTpbbSVrVyJSNRhFq6usvNyap0K0v1JA5mG1YhtPJJOKzxOENG5HS3Yq1ScyhKSOZS0pPZCts8+ZfQtWK/LcUOk/wA4X3FhwoLJbKBgMtMIWZeN1xKVqWecqB9kJm7aKlo7wpulQGm3G0OKbT7qVKmDIcAZTh/LiW0KW4oJQgFS1HAAJEyTHnb6ndxX5XlAgVCwlH0MoEpnoSJwpD5ZFrXZ6JThOtTKJk9GHZCxvZmn9YHkJSh1KGw6QAC4p0uEauUhKIcmW0NNIaQJIbSEp5kpEhHntyqV3q7hlkzFQ/4T9ODSPYhM+uFI7rbZ9zU1EzXWuoGl5Ic9Pq0nH6XPAZ9MY1+6r2hh+3VjKGKojQtwApWlKhjhMjEcYZrzcW7JavMaA1pAZpUn5pSB6EgThT2xaTeLi5U1ZLjLJ8x4qzccUZhJ7zE/g6dlrtNO+t+pfSisUNDKF+EJScyFHCZh5BEpgzB4xR3TaVqr0lTKBR1BEw42JIJ+tvL2ShaZuN62xWejqZuMiRLKjqQtB+JpXD/U4vh69BxnKCK/73Qfa/uus+m0z+rVl5cvmnhBFRsHLyxIkrolGIMhKJSchAcl4pzVWmsYAmtbSijnUjxp7UwibdrEUd4pnlnS2olCycgFjTjHo4VHm9/paeku1QxTKCmtWrSPyyrFTf8AtiX6sW+5dwmtV9st5K2SoJdWnEuqnghP0z9sXe2rCLXTl18A1rwGvj5afkH7YoNov2aneW7WLCK2cmVOYISn6Tlq6Yaau+2mkaLjlU2ogYNtkLWo8JBMJ9GndFzFBanEpMqipmy1ygKHjV1J74odkW4u1blwWPw6ceW0eVxYx9ie+K+oeuG57sA0iXwtozSy1P3lHvh+t1AzbqNqkY9xsYq4qUcVKPSYe0/C9vxp9VPRvAEstqWlZGSVLCdM+mRjn2Xd6KkS9R1K0sqcUFtuKwSrCRSTDg42262pp1CXGljStChqSoHlBigqdk2h5RUyt2mn8CSFo6tePbDO6Ll67W1hOtyrZSn+sHsGMJW6r3S3Z9hukQS3T6gHSJFZXLBIzlhFs3sO3pV+JVPLHIEoR2+KLm32C024hdMwPNGTrh1r6irLqh2pwvfp+4fpPydJ9T5vqfT/ABaJadMvmljKCHLjxnBDDXDPGXGJmTkcogETMshjyxlPhFGqqfVT0b9QMSy2twDnSkkdsJtoomK7cC2KoB1plKtSVfmKT4ST0qUVQ7KbQ62th3xNuJUhY46VDSewwhvqrdvXsPrTqUMZ/C82fCVJP1dhiVYvKjY9vcVqpqhxgH8tQDgHQZpMRT7EokkF+qccHyISlufX4oubddKG5shymWCvNbRwWk84jtBMgeSGRNaKOgo7eyWaNoNIPvEYqUfqUcTHVOMRIxOKscooyBxg5eSIM5T48IkY/vgJOPVBOXOIBM80aKqspaNvzap1LaRlM4noGZgOjVBC5+sqX1ejyj6aUp6vxf6tGUuac4ImwxbAkKlEzBywjHGUgermiRPLhFGYJ48Y01tDSXBg09Y2HG5+E5KSZZoUMo2AgZRkDiBLDiIBQq9n3ClcL9pf80JxSkny3k9fuqjBvcu4bYfLuDBWBh+MgoV/eMDDoMyZ4RIM0kETT8pxETPi6WmN9UKhJ+ncQTnpIUP2R1p3jZCMVOJ5igxYu2q1vmbtGwvn0JB7JRznbthOJoW8eQqHcqHU40K3nZAMFOKllJB/bHI9vuiTMU9M44o/MQkdk4tUbdsaDMUTXXNXeY6maChp5eTTNI5ClCQe6HThWN+3Rc/Bb6UtIV8SUH/NeEZ02zrhWOefdqognNKT5izzajgIbpz7gIkfzhhqs/TFk9J6b0w05+ZM+ZPl1wRay9kEUV4y+qXZGachyc8EEBKeMAnLCf8ACCCAzE5d8ZHMS64IIA7oy+HDqgggIEpYdUZJnpE84IICeScSJYwQQE8IIIID/9k="
    }, function (e, t, a) {
        function l(e, t) {
            for (var a = 0; a < e.length; a++) {
                var l = e[a], r = y[l.id];
                if (r) {
                    r.refs++;
                    for (var i = 0; i < r.parts.length; i++) {
                        r.parts[i](l.parts[i])
                    }
                    for (; i < l.parts.length; i++) {
                        r.parts.push(p(l.parts[i], t))
                    }
                } else {
                    for (var n = [], i = 0; i < l.parts.length; i++) {
                        n.push(p(l.parts[i], t))
                    }
                    y[l.id] = {id: l.id, refs: 1, parts: n}
                }
            }
        }

        function r(e) {
            for (var t = [], a = {}, l = 0; l < e.length; l++) {
                var r = e[l], i = r[0], n = r[1], o = r[2], s = r[3], p = {css: n, media: o, sourceMap: s};
                a[i] ? a[i].parts.push(p) : t.push(a[i] = {id: i, parts: [p]})
            }
            return t
        }

        function i(e, t) {
            var a = f(), l = b[b.length - 1];
            if ("top" === e.insertAt) {
                l ? l.nextSibling ? a.insertBefore(t, l.nextSibling) : a.appendChild(t) : a.insertBefore(t, a.firstChild), b.push(t)
            } else {
                if ("bottom" !== e.insertAt) {
                    throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.")
                }
                a.appendChild(t)
            }
        }

        function n(e) {
            e.parentNode.removeChild(e);
            var t = b.indexOf(e);
            t >= 0 && b.splice(t, 1)
        }

        function o(e) {
            var t = document.createElement("style");
            return t.type = "text/css", i(e, t), t
        }

        function s(e) {
            var t = document.createElement("link");
            return t.rel = "stylesheet", i(e, t), t
        }

        function p(e, t) {
            var a, l, r;
            if (t.singleton) {
                var i = g++;
                a = v || (v = o(t)), l = c.bind(null, a, i, !1), r = c.bind(null, a, i, !0)
            } else {
                e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (a = s(t), l = u.bind(null, a), r = function () {
                    n(a), a.href && URL.revokeObjectURL(a.href)
                }) : (a = o(t), l = d.bind(null, a), r = function () {
                    n(a)
                })
            }
            return l(e), function (t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) {
                        return
                    }
                    l(e = t)
                } else {
                    r()
                }
            }
        }

        function c(e, t, a, l) {
            var r = a ? "" : l.css;
            if (e.styleSheet) {
                e.styleSheet.cssText = x(t, r)
            } else {
                var i = document.createTextNode(r), n = e.childNodes;
                n[t] && e.removeChild(n[t]), n.length ? e.insertBefore(i, n[t]) : e.appendChild(i)
            }
        }

        function d(e, t) {
            var a = t.css, l = t.media;
            if (l && e.setAttribute("media", l), e.styleSheet) {
                e.styleSheet.cssText = a
            } else {
                for (; e.firstChild;) {
                    e.removeChild(e.firstChild)
                }
                e.appendChild(document.createTextNode(a))
            }
        }

        function u(e, t) {
            var a = t.css, l = t.sourceMap;
            l && (a += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(l)))) + " */");
            var r = new Blob([a], {type: "text/css"}), i = e.href;
            e.href = URL.createObjectURL(r), i && URL.revokeObjectURL(i)
        }

        var y = {}, h = function (e) {
            var t;
            return function () {
                return "undefined" == typeof t && (t = e.apply(this, arguments)), t
            }
        }, m = h(function () {
            return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
        }), f = h(function () {
            return document.head || document.getElementsByTagName("head")[0]
        }), v = null, g = 0, b = [];
        e.exports = function (e, t) {
            t = t || {}, "undefined" == typeof t.singleton && (t.singleton = m()), "undefined" == typeof t.insertAt && (t.insertAt = "bottom");
            var a = r(e);
            return l(a, t), function (e) {
                for (var i = [], n = 0; n < a.length; n++) {
                    var o = a[n], s = y[o.id];
                    s.refs--, i.push(s)
                }
                if (e) {
                    var p = r(e);
                    l(p, t)
                }
                for (var n = 0; n < i.length; n++) {
                    var s = i[n];
                    if (0 === s.refs) {
                        for (var c = 0; c < s.parts.length; c++) {
                            s.parts[c]()
                        }
                        delete y[s.id]
                    }
                }
            }
        };
        var x = function () {
            var e = [];
            return function (t, a) {
                return e[t] = a, e.filter(Boolean).join("\n")
            }
        }()
    }])
});//# sourceMappingURL=APlayer.min.js.map
//# sourceMappingURL=APlayer.min.js.map
/*OwO.js*/
"use strict";
function _classCallCheck(b, a) {
    if (!(b instanceof a)) {
        throw new TypeError("Cannot call a class as a function")
    }
}
var _createClass = function () {
    function a(f, c) {
        for (var b = 0; b < c.length; b++) {
            var d = c[b];
            d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(f, d.key, d)
        }
    }

    return function (c, b, d) {
        return b && a(c.prototype, b), d && a(c, d), c
    }
}();
!function () {
    var a = function () {
        function b(e) {
            var c = this;
            _classCallCheck(this, b);
            var f = {
                logo: "OwO表情",
                container: document.getElementsByClassName("OwO")[0],
                target: document.getElementsByTagName("textarea")[0],
                position: "down",
                width: "100%",
                maxHeight: "250px",
                api: "https://www.dreamwings.cn/wp-content/themes/kotha/assets/json/OwO.json"
            };
            for (var g in f) {
                f.hasOwnProperty(g) && !e.hasOwnProperty(g) && (e[g] = f[g])
            }
            this.container = e.container, this.target = e.target, "up" === e.position && this.container.classList.add("OwO-up");
            var d = new XMLHttpRequest;
            d.onreadystatechange = function () {
                4 === d.readyState && (d.status >= 200 && d.status < 300 || 304 === d.status ? (c.odata = JSON.parse(d.responseText), c.init(e)) : console.log("OwO data request was unsuccessful: " + d.status))
            }, d.open("get", e.api, !0), d.send(null)
        }

        return _createClass(b, [{
            key: "init", value: function (j) {
                var p = this;
                this.area = j.target, this.packages = Object.keys(this.odata);
                for (var m = '\n<div class="OwO-logo"><span>' + j.logo + '</span></div>\n<div class="OwO-body" style="width: ' + j.width + '">', q = 0; q < this.packages.length; q++) {
                    m += '\n<ul class="OwO-items OwO-items-' + this.odata[this.packages[q]].type + '" style="max-height: ' + (parseInt(j.maxHeight) - 53 + "px") + ';">';
                    if (this.odata[this.packages[q]].type == "image") {
                        for (var f = this.odata[this.packages[q]].container, h = 0; h < f.length; h++) {
                            m += '\n<li class="OwO-item" title="' + f[h].text + '" data="' + f[h].text + '">' + f[h].icon + "</li>"
                        }
                    } else {
                        for (var f = this.odata[this.packages[q]].container, h = 0; h < f.length; h++) {
                            m += '\n<li class="OwO-item" title="' + f[h].text + '" data="' + f[h].icon + '">' + f[h].icon + "</li>"
                        }
                    }
                    m += "\n</ul>"
                }
                m += '\n<div class="OwO-bar">\n<ul class="OwO-packages">';
                for (var d = 0; d < this.packages.length; d++) {
                    m += "\n<li><span>" + this.packages[d] + "</span></li>"
                }
                m += "\n                    </ul>\n                </div>\n            </div>\n            ", this.container.innerHTML = m, this.logo = this.container.getElementsByClassName("OwO-logo")[0], this.logo.addEventListener("click", function () {
                    p.toggle()
                }), this.container.getElementsByClassName("OwO-body")[0].addEventListener("click", function (l) {
                    var c = null;
                    if (l.target.classList.contains("OwO-item") ? c = l.target : l.target.parentNode.classList.contains("OwO-item") && (c = l.target.parentNode), c) {
                        var i = p.area.selectionEnd, o = p.area.value;
                        p.area.value = o.slice(0, i) + c.attributes["data"].value + o.slice(i), p.area.focus(), p.toggle()
                    }
                }), this.packagesEle = this.container.getElementsByClassName("OwO-packages")[0];
                for (var k = function (c) {
                    !function (e) {
                        p.packagesEle.children[c].addEventListener("click", function () {
                            p.tab(e)
                        })
                    }(c)
                }, g = 0; g < this.packagesEle.children.length; g++) {
                    k(g)
                }
                this.tab(0)
            }
        }, {
            key: "toggle", value: function () {
                this.container.classList.contains("OwO-open") ? this.container.classList.remove("OwO-open") : this.container.classList.add("OwO-open")
            }
        }, {
            key: "tab", value: function (f) {
                var d = this.container.getElementsByClassName("OwO-items-show")[0];
                d && d.classList.remove("OwO-items-show"), this.container.getElementsByClassName("OwO-items")[f].classList.add("OwO-items-show");
                var c = this.container.getElementsByClassName("OwO-package-active")[0];
                c && c.classList.remove("OwO-package-active"), this.packagesEle.getElementsByTagName("li")[f].classList.add("OwO-package-active")
            }
        }]), b
    }();
    "undefined" != typeof module && "undefined" != typeof module.exports ? module.exports = a : window.OwO = a
}();
//# sourceMappingURL=OwO.min.js.map
/*zoom.js*/
+function (t) {
    "use strict";
    function o() {
        this._activeZoom = this._initialScrollPosition = this._initialTouchPosition = this._touchMoveListener = null, this._$document = t(document), this._$window = t(window), this._$body = t(document.body), this._boundClick = t.proxy(this._clickHandler, this)
    }

    function i(o) {
        this._fullHeight = this._fullWidth = this._overlay = this._targetImageWrap = null, this._targetImage = o, this._$body = t(document.body)
    }

    o.prototype.listen = function () {
        this._$body.on("click", '[data-action="zoom"]', t.proxy(this._zoom, this))
    }, o.prototype._zoom = function (o) {
        var e = o.target;
        if (e && "IMG" == e.tagName && !this._$body.hasClass("zoom-overlay-open"))return o.metaKey || o.ctrlKey ? window.open(o.target.getAttribute("data-original") || o.target.src, "_blank") : void(e.width >= t(window).width() - i.OFFSET || (this._activeZoomClose(!0), this._activeZoom = new i(e), this._activeZoom.zoomImage(), this._$window.on("scroll.zoom", t.proxy(this._scrollHandler, this)), this._$document.on("keyup.zoom", t.proxy(this._keyHandler, this)), this._$document.on("touchstart.zoom", t.proxy(this._touchStart, this)), document.addEventListener ? document.addEventListener("click", this._boundClick, !0) : document.attachEvent("onclick", this._boundClick, !0), "bubbles" in o ? o.bubbles && o.stopPropagation() : o.cancelBubble = !0))
    }, o.prototype._activeZoomClose = function (t) {
        this._activeZoom && (t ? this._activeZoom.dispose() : this._activeZoom.close(), this._$window.off(".zoom"), this._$document.off(".zoom"), document.removeEventListener("click", this._boundClick, !0), this._activeZoom = null)
    }, o.prototype._scrollHandler = function (o) {
        null === this._initialScrollPosition && (this._initialScrollPosition = t(window).scrollTop());
        var i = this._initialScrollPosition - t(window).scrollTop();
        Math.abs(i) >= 40 && this._activeZoomClose()
    }, o.prototype._keyHandler = function (t) {
        27 == t.keyCode && this._activeZoomClose()
    }, o.prototype._clickHandler = function (t) {
        t.preventDefault ? t.preventDefault() : event.returnValue = !1, "bubbles" in t ? t.bubbles && t.stopPropagation() : t.cancelBubble = !0, this._activeZoomClose()
    }, o.prototype._touchStart = function (o) {
        this._initialTouchPosition = o.touches[0].pageY, t(o.target).on("touchmove.zoom", t.proxy(this._touchMove, this))
    }, o.prototype._touchMove = function (o) {
        Math.abs(o.touches[0].pageY - this._initialTouchPosition) > 10 && (this._activeZoomClose(), t(o.target).off("touchmove.zoom"))
    }, i.OFFSET = 80, i._MAX_WIDTH = 2560, i._MAX_HEIGHT = 4096, i.prototype.zoomImage = function () {
        var o = document.createElement("img");
        o.onload = t.proxy(function () {
            this._fullHeight = Number(o.height), this._fullWidth = Number(o.width), this._zoomOriginal()
        }, this), o.src = this._targetImage.src
    }, i.prototype._zoomOriginal = function () {
        this._targetImageWrap = document.createElement("div"), this._targetImageWrap.className = "zoom-img-wrap", this._targetImage.parentNode.insertBefore(this._targetImageWrap, this._targetImage), this._targetImageWrap.appendChild(this._targetImage), t(this._targetImage).addClass("zoom-img").attr("data-action", "zoom-out"), this._overlay = document.createElement("div"), this._overlay.className = "zoom-overlay", document.body.appendChild(this._overlay), this._calculateZoom(), this._triggerAnimation()
    }, i.prototype._calculateZoom = function () {
        this._targetImage.offsetWidth;
        var o = this._fullWidth, e = this._fullHeight, a = (t(window).scrollTop(), o / this._targetImage.width),
            s = t(window).height() - i.OFFSET, r = t(window).width() - i.OFFSET, n = o / e, h = r / s;
        this._imgScaleFactor = r > o && s > e ? a : h > n ? s / e * a : r / o * a
    }, i.prototype._triggerAnimation = function () {
        this._targetImage.offsetWidth;
        var o = t(this._targetImage).offset(), i = t(window).scrollTop(), e = i + t(window).height() / 2,
            a = t(window).width() / 2, s = o.top + this._targetImage.height / 2,
            r = o.left + this._targetImage.width / 2;
        this._translateY = e - s, this._translateX = a - r;
        var n = "scale(" + this._imgScaleFactor + ")",
            h = "translate(" + this._translateX + "px, " + this._translateY + "px)";
        t.support.transition && (h += " translateZ(0)"), t(this._targetImage).css({
            "-webkit-transform": n,
            "-ms-transform": n,
            transform: n
        }), t(this._targetImageWrap).css({
            "-webkit-transform": h,
            "-ms-transform": h,
            transform: h
        }), this._$body.addClass("zoom-overlay-open")
    }, i.prototype.close = function () {
        return this._$body.removeClass("zoom-overlay-open").addClass("zoom-overlay-transitioning"), t(this._targetImage).css({
            "-webkit-transform": "",
            "-ms-transform": "",
            transform: ""
        }), t(this._targetImageWrap).css({
            "-webkit-transform": "",
            "-ms-transform": "",
            transform: ""
        }), t.support.transition ? void t(this._targetImage).one(t.support.transition.end, t.proxy(this.dispose, this)).emulateTransitionEnd(300) : this.dispose()
    }, i.prototype.dispose = function () {
        this._targetImageWrap && this._targetImageWrap.parentNode && (t(this._targetImage).removeClass("zoom-img").attr("data-action", "zoom"), this._targetImageWrap.parentNode.replaceChild(this._targetImage, this._targetImageWrap), this._overlay.parentNode.removeChild(this._overlay), this._$body.removeClass("zoom-overlay-transitioning"))
    }, t(function () {
        (new o).listen()
    })
}(jQuery);
/*activate-power-mode.js*/
;(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === "object" && typeof module === "object") {
        module.exports = factory()
    } else {
        if (typeof define === "function" && define.amd) {
            define([], factory)
        } else {
            if (typeof exports === "object") {
                exports["POWERMODE"] = factory()
            } else {
                root["POWERMODE"] = factory()
            }
        }
    }
})(this, function () {
    return (function (modules) {
        var installedModules = {};

        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) {
                return installedModules[moduleId].exports
            }
            var module = installedModules[moduleId] = {exports: {}, id: moduleId, loaded: false};
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.loaded = true;
            return module.exports
        }

        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.p = "";
        return __webpack_require__(0)
    })([function (module, exports, __webpack_require__) {
        var canvas = document.createElement("canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.cssText = "position:fixed;top:0;left:0;pointer-events:none;z-index:999999";
        window.addEventListener("resize", function () {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight
        });
        document.body.appendChild(canvas);
        var context = canvas.getContext("2d");
        var particles = [];
        var particlePointer = 0;
        POWERMODE.shake = true;
        function getRandom(min, max) {
            return Math.random() * (max - min) + min
        }

        function getColor(el) {
            if (POWERMODE.colorful) {
                var u = getRandom(0, 360);
                return "hsla(" + getRandom(u - 10, u + 10) + ", 100%, " + getRandom(50, 80) + "%, " + 1 + ")"
            } else {
                return window.getComputedStyle(el).color
            }
        }

        function getCaret() {
            var el = document.activeElement;
            var bcr;
            if (el.tagName === "TEXTAREA" || (el.tagName === "INPUT" && el.getAttribute("type") === "text")) {
                var offset = __webpack_require__(1)(el, el.selectionStart);
                bcr = el.getBoundingClientRect();
                return {x: offset.left + bcr.left, y: offset.top + bcr.top, color: getColor(el)}
            }
            var selection = window.getSelection();
            if (selection.rangeCount) {
                var range = selection.getRangeAt(0);
                var startNode = range.startContainer;
                if (startNode.nodeType === document.TEXT_NODE) {
                    startNode = startNode.parentNode
                }
                bcr = range.getBoundingClientRect();
                return {x: bcr.left, y: bcr.top, color: getColor(startNode)}
            }
            return {x: 0, y: 0, color: "transparent"}
        }

        function createParticle(x, y, color) {
            return {
                x: x,
                y: y,
                alpha: 1,
                color: color,
                velocity: {x: -1 + Math.random() * 2, y: -3.5 + Math.random() * 2}
            }
        }

        function POWERMODE() {
            var caret = getCaret();
            var numParticles = 5 + Math.round(Math.random() * 10);
            while (numParticles--) {
                particles[particlePointer] = createParticle(caret.x, caret.y, caret.color);
                particlePointer = (particlePointer + 1) % 500
            }
            if (POWERMODE.shake) {
                var intensity = 1 + 2 * Math.random();
                var x = intensity * (Math.random() > 0.5 ? -1 : 1);
                var y = intensity * (Math.random() > 0.5 ? -1 : 1);
                document.body.style.marginLeft = x + "px";
                document.body.style.marginTop = y + "px";
                setTimeout(function () {
                    document.body.style.marginLeft = "";
                    document.body.style.marginTop = ""
                }, 75)
            }
        }

        POWERMODE.colorful = false;
        function loop() {
            requestAnimationFrame(loop);
            context.clearRect(0, 0, canvas.width, canvas.height);
            for (var i = 0; i < particles.length; ++i) {
                var particle = particles[i];
                if (particle.alpha <= 0.1) {
                    continue
                }
                particle.velocity.y += 0.075;
                particle.x += particle.velocity.x;
                particle.y += particle.velocity.y;
                particle.alpha *= 0.96;
                context.globalAlpha = particle.alpha;
                context.fillStyle = particle.color;
                context.fillRect(Math.round(particle.x - 1.5), Math.round(particle.y - 1.5), 3, 3)
            }
        }

        requestAnimationFrame(loop);
        module.exports = POWERMODE
    }, function (module, exports) {
        (function () {
            var properties = ["direction", "boxSizing", "width", "height", "overflowX", "overflowY", "borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth", "borderStyle", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "fontStyle", "fontVariant", "fontWeight", "fontStretch", "fontSize", "fontSizeAdjust", "lineHeight", "fontFamily", "textAlign", "textTransform", "textIndent", "textDecoration", "letterSpacing", "wordSpacing", "tabSize", "MozTabSize"];
            var isFirefox = window.mozInnerScreenX != null;

            function getCaretCoordinates(element, position, options) {
                var debug = options && options.debug || false;
                if (debug) {
                    var el = document.querySelector("#input-textarea-caret-position-mirror-div");
                    if (el) {
                        el.parentNode.removeChild(el)
                    }
                }
                var div = document.createElement("div");
                div.id = "input-textarea-caret-position-mirror-div";
                document.body.appendChild(div);
                var style = div.style;
                var computed = window.getComputedStyle ? getComputedStyle(element) : element.currentStyle;
                style.whiteSpace = "pre-wrap";
                if (element.nodeName !== "INPUT") {
                    style.wordWrap = "break-word"
                }
                style.position = "absolute";
                if (!debug) {
                    style.visibility = "hidden"
                }
                properties.forEach(function (prop) {
                    style[prop] = computed[prop]
                });
                if (isFirefox) {
                    if (element.scrollHeight > parseInt(computed.height)) {
                        style.overflowY = "scroll"
                    }
                } else {
                    style.overflow = "hidden"
                }
                div.textContent = element.value.substring(0, position);
                if (element.nodeName === "INPUT") {
                    div.textContent = div.textContent.replace(/\s/g, "\u00a0")
                }
                var span = document.createElement("span");
                span.textContent = element.value.substring(position) || ".";
                div.appendChild(span);
                var coordinates = {
                    top: span.offsetTop + parseInt(computed["borderTopWidth"]),
                    left: span.offsetLeft + parseInt(computed["borderLeftWidth"])
                };
                if (debug) {
                    span.style.backgroundColor = "#aaa"
                } else {
                    document.body.removeChild(div)
                }
                return coordinates
            }

            if (typeof module != "undefined" && typeof module.exports != "undefined") {
                module.exports = getCaretCoordinates
            } else {
                window.getCaretCoordinates = getCaretCoordinates
            }
        }())
    }])
});
/*pjax.js*/
(function ($) {
    var Util = {
        support: {
            pjax: window.history && window.history.pushState && window.history.replaceState && !navigator.userAgent.match(/(iPod|iPhone|iPad|WebApps\/.+CFNetwork)/),
            storage: !!window.localStorage
        }, toInt: function (obj) {
            return parseInt(obj)
        }, stack: {}, getTime: function () {
            return new Date * 1
        }, getRealUrl: function (url) {
            url = (url || "").replace(/\#.*?$/, "");
            url = url.replace("?pjax=true&", "?").replace("?pjax=true", "").replace("&pjax=true", "");
            return url
        }, getUrlHash: function (url) {
            return url.replace(/^[^\#]*(?:\#(.*?))?$/, "$1")
        }, getLocalKey: function (src) {
            var s = "pjax_" + encodeURIComponent(src);
            return {data: s + "_data", time: s + "_time", title: s + "_title"}
        }, removeAllCache: function () {
            if (!Util.support.storage) {
                return
            }
            for (var name in localStorage) {
                if ((name.split("_") || [""])[0] === "pjax") {
                    delete localStorage[name]
                }
            }
        }, getCache: function (src, time, flag) {
            var item, vkey, tkey, tval;
            time = Util.toInt(time);
            if (src in Util.stack) {
                item = Util.stack[src], ctime = Util.getTime();
                if ((item.time + time * 1000) > ctime) {
                    return item
                } else {
                    delete Util.stack[src]
                }
            } else {
                if (flag && Util.support.storage) {
                    var l = Util.getLocalKey(src);
                    vkey = l.data;
                    tkey = l.time;
                    item = localStorage.getItem(vkey);
                    if (item) {
                        tval = Util.toInt(localStorage.getItem(tkey));
                        if ((tval + time * 1000) > Util.getTime()) {
                            return {data: item, title: localStorage.getItem(l.title)}
                        } else {
                            localStorage.removeItem(vkey);
                            localStorage.removeItem(tkey);
                            localStorage.removeItem(l.title)
                        }
                    }
                }
            }
            return null
        }, setCache: function (src, data, title, flag) {
            var time = Util.getTime(), key;
            Util.stack[src] = {data: data, title: title, time: time};
            if (flag && Util.support.storage) {
                key = Util.getLocalKey(src);
                localStorage.setItem(key.data, data);
                localStorage.setItem(key.time, time);
                localStorage.setItem(key.title, title)
            }
        }, removeCache: function (src) {
            src = Util.getRealUrl(src || location.href);
            delete Util.stack[src];
            if (Util.support.storage) {
                var key = Util.getLocalKey(src);
                localStorage.removeItem(key.data);
                localStorage.removeItem(key.time);
                localStorage.removeItem(key.title)
            }
        }
    };
    var pjax = function (options) {
        options = $.extend({
            selector: "", container: "", callback: function () {
            }, filter: function () {
            }
        }, options);
        if (!options.container || !options.selector) {
            throw new Error("selector & container options must be set")
        }
        $("body").delegate(options.selector, "click", function (event) {
            if (event.which > 1 || event.metaKey) {
                return true
            }
            var $this = $(this), href = $this.attr("href");
            if (typeof options.filter === "function") {
                if (options.filter.call(this, href, this) === true) {
                    return true
                }
            }
            if (href === location.href) {
                return true
            }
            if (Util.getRealUrl(href) == Util.getRealUrl(location.href)) {
                var hash = Util.getUrlHash(href);
                if (hash) {
                    location.hash = hash;
                    options.callback && options.callback.call(this, {type: "hash"})
                }
                return true
            }
            event.preventDefault();
            options = $.extend(true, options, {url: href, element: this, push: true});
            pjax.request(options)
        })
    };
    pjax.xhr = null;
    pjax.options = {};
    pjax.state = {};
    pjax.defaultOptions = {
        timeout: 4000,
        element: null,
        cache: 24 * 3600,
        storage: true,
        url: "",
        push: true,
        show: "",
        title: "",
        titleSuffix: "",
        type: "GET",
        data: {pjax: true},
        dataType: "html",
        callback: null,
        beforeSend: function (xhr) {
            $(pjax.options.container).trigger("pjax.start", [xhr, pjax.options]);
            xhr && xhr.setRequestHeader("X-PJAX", true)
        },
        error: function () {
            pjax.options.callback && pjax.options.callback.call(pjax.options.element, {type: "error"});
            location.href = pjax.options.url
        },
        complete: function (xhr) {
            $(pjax.options.container).trigger("pjax.end", [xhr, pjax.options])
        }
    };
    pjax.showFx = {
        "_default": function (data, callback, isCached) {
            this.html(data);
            callback && callback.call(this, data, isCached)
        }, fade: function (data, callback, isCached) {
            var $this = this;
            if (isCached) {
                $this.html(data);
                callback && callback.call($this, data, isCached)
            } else {
                this.fadeTo(200, 0.5, function () {
                    $this.html(data).fadeTo(200, 1, function () {
                        callback && callback.call($this, data, isCached)
                    })
                })
            }
        }
    };
    pjax.showFn = function (showType, container, data, fn, isCached) {
        var fx = null;
        if (typeof showType === "function") {
            fx = showType
        } else {
            if (!(showType in pjax.showFx)) {
                showType = "_default"
            }
            fx = pjax.showFx[showType]
        }
        fx && fx.call(container, data, function () {
            var hash = location.hash;
            if (hash != "") {
                location.href = hash;
                if (/Firefox/.test(navigator.userAgent)) {
                    history.replaceState($.extend({}, pjax.state, {url: null}), document.title)
                }
            } else {
                window.scrollTo(0, 0)
            }
            fn && fn.call(this, data, isCached)
        }, isCached)
    };
    pjax.success = function (data, isCached) {
        if (isCached !== true) {
            isCached = false
        }
        if (pjax.html) {
            data = $(data).find(pjax.html).html()
        }
        if ((data || "").indexOf("<html") != -1) {
            pjax.options.callback && pjax.options.callback.call(pjax.options.element, {type: "error"});
            location.href = pjax.options.url;
            return false
        }
        var title = pjax.options.title || "", el;
        if (title == "" && pjax.options.element) {
            el = $(pjax.options.element);
            title = el.attr("title") || el.text()
        }
        var matches = data.match(/<title>(.*?)<\/title>/);
        if (matches) {
            title = matches[1]
        }
        if (title) {
            if (title.indexOf(pjax.options.titleSuffix) == -1) {
                title += pjax.options.titleSuffix
            }
        }
        document.title = title;
        pjax.state = {
            container: pjax.options.container,
            timeout: pjax.options.timeout,
            cache: pjax.options.cache,
            storage: pjax.options.storage,
            show: pjax.options.show,
            title: title,
            url: pjax.options.oldUrl
        };
        var query = $.param(pjax.options.data);
        if (query != "") {
            pjax.state.url = pjax.options.url + (/\?/.test(pjax.options.url) ? "&" : "?") + query
        }
        if (pjax.options.push) {
            if (!pjax.active) {
                history.replaceState($.extend({}, pjax.state, {url: null}), document.title);
                pjax.active = true
            }
            history.pushState(pjax.state, document.title, pjax.options.oldUrl)
        } else {
            if (pjax.options.push === false) {
                history.replaceState(pjax.state, document.title, pjax.options.oldUrl)
            }
        }
        pjax.options.showFn && pjax.options.showFn(data, function () {
            pjax.options.callback && pjax.options.callback.call(pjax.options.element, {type: isCached ? "cache" : "success"})
        }, isCached);
        if (pjax.options.cache && !isCached) {
            Util.setCache(pjax.options.url, data, title, pjax.options.storage)
        }
    };
    pjax.request = function (options) {
        if (options.hasOwnProperty("data")) {
            pjax.defaultOptions.data = options.data
        }
        options = $.extend(true, pjax.defaultOptions, options);
        var cache, container = $(options.container);
        options.oldUrl = options.url;
        options.url = Util.getRealUrl(options.url);
        if ($(options.element).length) {
            cache = Util.toInt($(options.element).attr("data-pjax-cache"));
            if (cache) {
                options.cache = cache
            }
        }
        if (options.cache === true) {
            options.cache = 24 * 3600
        }
        options.cache = Util.toInt(options.cache);
        if (options.cache === 0) {
            Util.removeAllCache()
        }
        if (!options.showFn) {
            options.showFn = function (data, fn, isCached) {
                pjax.showFn(options.show, container, data, fn, isCached)
            }
        }
        pjax.options = options;
        pjax.options.success = pjax.success;
        if (options.cache && (cache = Util.getCache(options.url, options.cache, options.storage))) {
            options.beforeSend();
            options.title = cache.title;
            pjax.success(cache.data, true);
            options.complete();
            return true
        }
        if (pjax.xhr && pjax.xhr.readyState < 4) {
            pjax.xhr.onreadystatechange = $.noop;
            pjax.xhr.abort()
        }
        pjax.xhr = $.ajax(pjax.options)
    };
    var popped = ("state" in window.history), initialURL = location.href;
    $(window).bind("popstate", function (event) {
        var initialPop = !popped && location.href == initialURL;
        popped = true;
        if (initialPop) {
            return
        }
        var state = event.state;
        if (state && state.container) {
            if ($(state.container).length) {
                var data = {
                    url: state.url,
                    container: state.container,
                    push: null,
                    timeout: state.timeout,
                    cache: state.cache,
                    storage: state.storage,
                    title: state.title,
                    element: null
                };
                pjax.request(data)
            } else {
                window.location = location.href
            }
        }
    });
    if (!Util.support.pjax) {
        pjax = function () {
            return true
        };
        pjax.request = function (options) {
            if (options && options.url) {
                location.href = options.url
            }
        }
    }
    $.pjax = pjax;
    $.pjax.util = Util;
    if ($.inArray("state", $.event.props) < 0) {
        $.event.props.push("state")
    }
})(jQuery);
/*main.js*/
console.log("\n %c 欢迎来到 https://www.yizhancl.top 各位小伙伴们~ by ch~. \n\n", "color: #ffff00; background: #9999ff; padding:5px 0;", "background: #fadfa3; padding:5px 0;");
MathJax.Hub.Config({tex2jax: {inlineMath: [["$", "$"], ["\\(", "\\)"]]}});
function show_date_time() {
    window.setTimeout("show_date_time()", 1000);
    var g = new Date("3/4/2016 12:41:40"), i = new Date, d = i.getTime() - g.getTime(), h = 86400000, b = d / h,
        f = Math.floor(b), c = 24 * (b - f), a = Math.floor(c), e = 60 * (c - a), k = Math.floor(60 * (c - a)),
        j = Math.floor(60 * (e - k));
    span_dt_dt.innerHTML = "运行" + f + "天" + a + "小时" + k + "分" + j + "秒"
}
show_date_time();
var OriginTitile = document.title, titleTime;
document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
        $('[rel="shortcut icon"]').attr("href", "//www.dreamwings.cn/wp-content/uploads/2016/05/fail.ico");
        document.title = "(●—●)喔哟，崩溃啦！";
        clearTimeout(titleTime)
    } else {
        $('[rel="shortcut icon"]').attr("href", "//www.dreamwings.cn/wp-content/uploads/2016/08/favicon32.ico");
        document.title = "(/≧▽≦/)咦！又好了！ " + OriginTitile;
        titleTime = setTimeout(function () {
            document.title = OriginTitile
        }, 2000)
    }
});
function GetCookie(b) {
    var a = document.cookie.match(new RegExp(b + "_[^_]*?=([^;]*)"));
    if (a != null) {
        return decodeURIComponent(a[1])
    }
    return null
}
function LoadCommentInfo() {
    var c = GetCookie("comment_author");
    var b = GetCookie("comment_author_email");
    var a = GetCookie("comment_author_url");
    if (document.getElementById("author") != null) {
        if (c) {
            document.getElementById("author").value = c
        }
        if (b) {
            document.getElementById("email").value = b
        }
        if (a) {
            document.getElementById("url").value = a
        }
    }
}
function pjax_hd() {
    $.getJSON("https://www.dreamwings.cn/wp-content/themes/kotha/like.php?action=get", function (b) {
        $(".like-vote span").html(b.like)
    });
    $(".like-vote").click(function () {
        if ($(".like-title").html() === "Do you like me?") {
            $.getJSON("https://www.dreamwings.cn/wp-content/themes/kotha/like.php?action=add", function (b) {
                b.success ? ($(".like-vote span").html(b.like), $(".like-title").html("我也喜欢你 (*≧▽≦)")) : ($(".like-title").html("你的爱我已经感受到了~"))
            })
        }
    });
    var a = 0;
    $(".close-effects").on("click", function () {
        $(this).html(++a % 2 ? "这一切都是命运、五行、封印(⌒▽⌒)<style>#header,#footer,.hentry,.primary-sidebar .widget,.next-previous-posts .previous-posts h2 a,.next-previous-posts .next-posts h2 a,.menu .sub-menu,.menu .children,.search-header,.white-color,.slicknav_nav{background-color:#fff}.thumbnails img{opacity:1}.copy-right-text{background-color: rgba(45,45,45,1);}</style>" : "古娜拉黑暗之神、魔法、消失(°∀°)ﾉ")
    });
    LoadCommentInfo()
}
$(document).ready(function () {
    var c = 90, a = $(document).scrollTop(), b = $(document).height() - $(window).height();
    $(window).scroll(function () {
        var d = $(document).scrollTop();
        d > c ? ($(".head-animated").css("top", d > a ? "-120px" : "0"), a = d) : ($(".head-animated").css("top", "0"));
        $("#toploading").width(d / b * 100 + "%");
        if ($("#text-5") && $("#secondary")) {
            $("#text-5").css((d > 160 + $("#secondary").height() && document.body.clientWidth > 992) ? {
                position: "fixed",
                top: "50px",
                width: "24%",
                animation: "fade-in 0.5s"
            } : {position: "relative", top: "0", width: "inherit", animation: "initial"})
        }
    });
    pjax_hd()
});
if (!(/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent))) {
    jQuery(document).ready(function (a) {
        a("html,body").click(function (c) {
            var g = Math.round(Math.random() * 100);
            var f = a("<b/>").text("+" + g);
            var b = c.pageX, d = c.pageY;
            f.css({
                "z-index": 99999,
                "top": d - 20,
                "left": b,
                "position": "absolute",
                "color": "#" + ("00000" + ((Math.random() * 16777215 + 0.5) >> 0).toString(16)).slice(-6)
            });
            a("body").append(f);
            f.animate({"top": d - 180, "opacity": 0}, 1500, function () {
                f.remove()
            });
            c.stopPropagation()
        });
        POWERMODE.colorful = true;
        POWERMODE.shake = false;
        document.body.addEventListener("input", POWERMODE)
    });
    (function () {
        var c = 0;
        var a = ["webkit", "moz"];
        for (var b = 0; b < a.length && !window.requestAnimationFrame; ++b) {
            window.requestAnimationFrame = window[a[b] + "RequestAnimationFrame"];
            window.cancelAnimationFrame = window[a[b] + "CancelAnimationFrame"] || window[a[b] + "CancelRequestAnimationFrame"]
        }
        if (!window.requestAnimationFrame) {
            window.requestAnimationFrame = function (e, g) {
                var f = new Date().getTime();
                var h = Math.max(0, 16 - (f - c));
                var d = window.setTimeout(function () {
                    e(f + h)
                }, h);
                c = f + h;
                return d
            }
        }
        if (!window.cancelAnimationFrame) {
            window.cancelAnimationFrame = function (d) {
                clearTimeout(d)
            }
        }
    }());
    (function (a) {
        a.snowfall = function (d, f) {
            var q = {
                flakeCount: 35,
                flakeColor: "#ffffff",
                flakePosition: "absolute",
                flakeIndex: 999999,
                minSize: 1,
                maxSize: 2,
                minSpeed: 1,
                maxSpeed: 5,
                round: false,
                shadow: false,
                collection: false,
                collectionHeight: 40,
                deviceorientation: false
            }, f = a.extend(q, f), b = function b(w, i) {
                return Math.round(w + Math.random() * (i - w))
            };
            a(d).data("snowfall", this);
            function h(i, C, w, B, z) {
                this.id = z;
                this.x = i;
                this.y = C;
                this.size = w;
                this.speed = B;
                this.step = 0;
                this.stepSize = b(1, 10) / 100;
                if (f.collection) {
                    this.target = o[b(0, o.length - 1)]
                }
                var A = null;
                if (f.image) {
                    A = a(document.createElement("img"));
                    A[0].src = "https://api.dreamwings.cn/christmas1/ (" + Math.floor(Math.random() * 29 + 1) + ").png"
                } else {
                    A = a(document.createElement("div"));
                    A.css({"background": f.flakeColor})
                }
                A.attr({"class": "snowfall-flakes", "id": "flake-" + this.id}).css({
                    "width": this.size,
                    "height": this.size,
                    "position": f.flakePosition,
                    "top": this.y,
                    "left": this.x,
                    "fontSize": 0,
                    "zIndex": f.flakeIndex,
                    "opacity": 0.7,
                });
                if (a(d).get(0).tagName === a(document).get(0).tagName) {
                    a("body").append(A);
                    d = a("body")
                } else {
                    a(d).append(A)
                }
                this.element = document.getElementById("flake-" + this.id);
                this.update = function () {
                    this.y += this.speed;
                    if (this.y > (s) - (this.size + 6)) {
                        this.reset()
                    }
                    this.element.style.top = this.y + "px";
                    this.element.style.left = this.x + "px";
                    this.step += this.stepSize;
                    if (m === false) {
                        this.x += Math.cos(this.step)
                    } else {
                        this.x += (m + Math.cos(this.step))
                    }
                    if (f.collection) {
                        if (this.x > this.target.x && this.x < this.target.width + this.target.x && this.y > this.target.y && this.y < this.target.height + this.target.y) {
                            var F = this.target.element.getContext("2d"), E = this.x - this.target.x,
                                D = this.y - this.target.y, G = this.target.colData;
                            if (G[parseInt(E)][parseInt(D + this.speed + this.size)] !== undefined || D + this.speed + this.size > this.target.height) {
                                if (D + this.speed + this.size > this.target.height) {
                                    while (D + this.speed + this.size > this.target.height && this.speed > 0) {
                                        this.speed *= 0.5
                                    }
                                    F.fillStyle = "#fff";
                                    if (G[parseInt(E)][parseInt(D + this.speed + this.size)] == undefined) {
                                        G[parseInt(E)][parseInt(D + this.speed + this.size)] = 1;
                                        F.fillRect(E, (D) + this.speed + this.size, this.size, this.size)
                                    } else {
                                        G[parseInt(E)][parseInt(D + this.speed)] = 1;
                                        F.fillRect(E, D + this.speed, this.size, this.size)
                                    }
                                    this.reset()
                                } else {
                                    this.speed = 0.5;
                                    this.stepSize = 0;
                                    if (parseInt(E) + 1 < this.target.width && G[parseInt(E) + 1][parseInt(D) + 1] == undefined) {
                                        this.x++
                                    } else {
                                        if (parseInt(E) - 1 > 0 && G[parseInt(E) - 1][parseInt(D) + 1] == undefined) {
                                            this.x--
                                        } else {
                                            F.fillStyle = "#fff";
                                            F.fillRect(E, D, this.size, this.size);
                                            G[parseInt(E)][parseInt(D)] = 1;
                                            this.reset()
                                        }
                                    }
                                }
                            }
                        }
                    }
                    if (this.x > (u) - l || this.x < l) {
                        this.reset()
                    }
                };
                this.reset = function () {
                    this.y = 0;
                    this.x = b(l, u - l);
                    this.stepSize = b(1, 10) / 100;
                    this.size = b((f.minSize * 100), (f.maxSize * 100)) / 100;
                    this.speed = b(f.minSpeed, f.maxSpeed)
                }
            }

            var v = [], c = 0, k = 0, s = a(d).height(), u = a(d).width(), l = 0, x = 0;
            if (f.collection !== false) {
                var g = document.createElement("canvas");
                if (!!(g.getContext && g.getContext("2d"))) {
                    var o = [], t = a(f.collection), y = f.collectionHeight;
                    for (var k = 0; k < t.length; k++) {
                        var n = t[k].getBoundingClientRect(), e = document.createElement("canvas"), p = [];
                        if (n.top - y > 0) {
                            document.body.appendChild(e);
                            e.style.position = f.flakePosition;
                            e.height = y;
                            e.width = n.width;
                            e.style.left = n.left + "px";
                            e.style.top = n.top - y + "px";
                            for (var r = 0; r < n.width; r++) {
                                p[r] = []
                            }
                            o.push({element: e, x: n.left, y: n.top - y, width: n.width, height: y, colData: p})
                        }
                    }
                } else {
                    f.collection = false
                }
            }
            if (a(d).get(0).tagName === a(document).get(0).tagName) {
                l = 25
            }
            a(window).bind("resize", function () {
                s = a(d)[0].clientHeight;
                u = a(d)[0].offsetWidth
            });
            for (k = 0; k < f.flakeCount; k += 1) {
                c = v.length;
                v.push(new h(b(l, u - l), b(0, s), b((f.minSize * 100), (f.maxSize * 100)) / 100, b(f.minSpeed, f.maxSpeed), c))
            }
            if (f.round) {
                a(".snowfall-flakes").css({
                    "-moz-border-radius": f.maxSize,
                    "-webkit-border-radius": f.maxSize,
                    "border-radius": f.maxSize
                })
            }
            if (f.shadow) {
                a(".snowfall-flakes").css({
                    "-moz-box-shadow": "1px 1px 1px #555",
                    "-webkit-box-shadow": "1px 1px 1px #555",
                    "box-shadow": "1px 1px 1px #555"
                })
            }
            var m = false;
            if (f.deviceorientation) {
                a(window).bind("deviceorientation", function (i) {
                    m = i.originalEvent.gamma * 0.1
                })
            }
            function j() {
                for (k = 0; k < v.length; k += 1) {
                    v[k].update()
                }
                x = requestAnimationFrame(function () {
                    j()
                })
            }

            j();
            this.clear = function () {
                a(d).children(".snowfall-flakes").remove();
                v = [];
                cancelAnimationFrame(x)
            }
        };
        a.fn.snowfall = function (b) {
            if (typeof(b) == "object" || b == undefined) {
                return this.each(function (c) {
                    (new a.snowfall(this, b))
                })
            } else {
                if (typeof(b) == "string") {
                    return this.each(function (c) {
                        var d = a(this).data("snowfall");
                        if (d) {
                            d.clear()
                        }
                    })
                }
            }
        }
    })(jQuery);
    $(document).snowfall("clear");
    $(document).snowfall({
        image: "https://api.dreamwings.cn/christmas1/ (" + Math.floor(Math.random() * 29 + 1) + ").png",
        flakeCount: 30,
        minSize: 20,
        maxSize: 40
    })
}
jQuery(document).ready(function (e) {
    var d = e("#cancel-comment-reply-link"), c = d.text(), b = "comment-list";
    var a = {"ajax_url": window.location.origin + "/wp-admin/admin-ajax.php", "order": "desc", "formpostion": "top"};
    e(document).on("submit", "#commentform", function () {
        e.ajax({
            url: a.ajax_url,
            data: e(this).serialize() + "&action=ajax_comment",
            type: e(this).attr("method"),
            beforeSend: addComment.createButterbar("提交中...."),
            error: function (g) {
                var f = addComment;
                f.createButterbar(g.responseText)
            },
            success: function (k) {
                e("textarea").each(function () {
                    this.value = ""
                });
                var h = addComment, j = h.I("cancel-comment-reply-link"), f = h.I("wp-temp-form-div"),
                    l = h.I(h.respondId), g = h.I("comment_post_ID").value, i = h.I("comment_parent").value;
                if (i != "0") {
                    e("#respond").before('<ul class="children">' + k + "</ul>")
                } else {
                    if (!e("." + b).length) {
                        if (a.formpostion == "bottom") {
                            e("#respond").before('<ul class="' + b + '">' + k + "</ul>")
                        } else {
                            e("#respond").after('<ul class="' + b + '">' + k + "</ul>")
                        }
                    } else {
                        if (a.order == "asc") {
                            e("." + b).append(k)
                        } else {
                            e("." + b).prepend(k)
                        }
                    }
                }
                h.createButterbar("提交成功");
                j.style.display = "none";
                j.onclick = null;
                h.I("comment_parent").value = "0";
                if (f && l) {
                    f.parentNode.insertBefore(l, f);
                    f.parentNode.removeChild(f)
                }
            }
        });
        return false
    });
    addComment = {
        moveForm: function (h, i, l) {
            var p = this, f, k = p.I(h), g = p.I(l), o = p.I("cancel-comment-reply-link"), m = p.I("comment_parent"),
                n = p.I("comment_post_ID");
            d.text(c);
            p.respondId = l;
            if (!p.I("wp-temp-form-div")) {
                f = document.createElement("div");
                f.id = "wp-temp-form-div";
                f.style.display = "none";
                g.parentNode.insertBefore(f, g)
            }
            !k ? (temp = p.I("wp-temp-form-div"), p.I("comment_parent").value = "0", temp.parentNode.insertBefore(g, temp), temp.parentNode.removeChild(temp)) : k.parentNode.insertBefore(g, k.nextSibling);
            e("body").animate({scrollTop: e("#respond").offset().top - 180}, 400);
            m.value = i;
            o.style.display = "";
            o.onclick = function () {
                var r = addComment, q = r.I("wp-temp-form-div"), s = r.I(r.respondId);
                r.I("comment_parent").value = "0";
                if (q && s) {
                    q.parentNode.insertBefore(s, q);
                    q.parentNode.removeChild(q)
                }
                this.style.display = "none";
                this.onclick = null;
                return false
            };
            try {
                p.I("comment").focus()
            } catch (j) {
            }
            return false
        }, I: function (f) {
            return document.getElementById(f)
        }, clearButterbar: function (f) {
            if (e(".butterBar").length > 0) {
                e(".butterBar").remove()
            }
        }, createButterbar: function (g) {
            var f = this;
            f.clearButterbar();
            e("#respond").append('<div class="butterBar"><p class="butterBar-message">' + g + "</p></div>");
            setTimeout("jQuery('.butterBar').remove()", 3000)
        }
    }
});
$.pjax({
    selector: 'a[href][href!="javascript:void(0)"][href!="#"][target!="_blank"][rel!="nofollow"]',
    container: ".st-content .col-md-8",
    show: "_default",
    cache: 600,
    storage: true,
    titleSuffix: "",
    filter: function () {
    },
    callback: function () {
        _hmt.push(["_trackPageview", window.location.pathname]);
        Prism.highlightAll();
        MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
        LoadCommentInfo()
    }
});
$(".st-content .col-md-8").bind("pjax.start", function () {
    $("#loader-wrapper").addClass("in")
});
$(".st-content .col-md-8").bind("pjax.end", function () {
    $("#loader-wrapper").removeClass("in")
});