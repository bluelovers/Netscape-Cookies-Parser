import { existsSync as o, readFileSync as t } from "fs";

class CookieJar {
  constructor(o) {
    this._cookies = o;
  }
  load(e) {
    if (o(e)) return this._cookies = t(e, "utf8"), this._cookies;
    throw new Error("Cookie File path does not exist!");
  }
  parse() {
    let o = [], t = this._cookies.split("\n");
    for (const e of t) {
      let t = e.trim();
      if (t.startsWith("#") || "" === t) continue;
      let i = t.split("\t"), r = i[3];
      o.push({
        name: i[5],
        value: i[6],
        domain: i[0],
        path: i[2],
        flag: i[1],
        expires: Number(i[4]),
        secure: "TRUE" === r
      });
    }
    return o;
  }
  toString() {
    return this.parse().map((o => `${o.name}=${o.value}`)).join("; ");
  }
}

export { CookieJar, CookieJar as default };
//# sourceMappingURL=index.esm.mjs.map
