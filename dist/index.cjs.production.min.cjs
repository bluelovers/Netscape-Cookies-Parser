"use strict";

var e = require("fs");

class CookieJar {
  constructor(e) {
    this._cookies = e;
  }
  load(o) {
    if (e.existsSync(o)) return this._cookies = e.readFileSync(o, "utf8"), this._cookies;
    throw new Error("Cookie File path does not exist!");
  }
  parse() {
    let e = [], o = this._cookies.split("\n");
    for (const r of o) {
      let o = r.trim();
      if (o.startsWith("#") || "" === o) continue;
      let t = o.split("\t"), i = t[3];
      e.push({
        name: t[5],
        value: t[6],
        domain: t[0],
        path: t[2],
        flag: t[1],
        expires: Number(t[4]),
        secure: "TRUE" === i
      });
    }
    return e;
  }
  toString() {
    return this.parse().map((e => `${e.name}=${e.value}`)).join("; ");
  }
}

Object.defineProperty(CookieJar, "__esModule", {
  value: !0
}), Object.defineProperty(CookieJar, "CookieJar", {
  value: CookieJar
}), Object.defineProperty(CookieJar, "default", {
  value: CookieJar
}), module.exports = CookieJar;
//# sourceMappingURL=index.cjs.production.min.cjs.map
