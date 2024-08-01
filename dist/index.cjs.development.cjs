'use strict';

var fs = require('fs');

class CookieJar {
  /**
   * @param String cookies Netscape HTTP Cookie File
   */
  constructor(cookies) {
    this._cookies = cookies;
  }
  /**
   * Loads a cookie file from the provided path
   * @param String path
   * @returns File Content in UTF8 format
   */
  load(path) {
    if (fs.existsSync(path)) {
      this._cookies = fs.readFileSync(path, "utf8");
      return this._cookies;
    }
    throw new Error("Cookie File path does not exist!");
  }
  /**
   * Parses the content of a Netscape HTTP Cookie Files
   * @returns An array of Cookies[]
   */
  parse() {
    let cookies = [];
    let lines = this._cookies.split("\n");
    for (const element of lines) {
      let line = element.trim();
      if (line.startsWith("#") || line === "") {
        continue;
      }
      let parts = line.split("\t");
      let domain = parts[0],
        flag = parts[1],
        path = parts[2],
        secure = parts[3],
        expires = parts[4],
        name = parts[5],
        value = parts[6];
      cookies.push({
        name: name,
        value: value,
        domain: domain,
        path: path,
        flag: flag,
        expires: Number(expires),
        secure: secure === "TRUE"
      });
    }
    return cookies;
  }
  /**
   * Parses the cookie content and returns a string to pass as cookie header
   * @returns string
   */
  toString() {
    const cookies = this.parse();
    const cookieStrings = cookies.map(cookie => `${cookie.name}=${cookie.value}`);
    return cookieStrings.join('; ');
  }
}

// @ts-ignore
{
  Object.defineProperty(CookieJar, "__esModule", {
    value: true
  });
  Object.defineProperty(CookieJar, 'CookieJar', {
    value: CookieJar
  });
  Object.defineProperty(CookieJar, 'default', {
    value: CookieJar
  });
}

// @ts-ignore
module.exports = CookieJar;
//# sourceMappingURL=index.cjs.development.cjs.map
