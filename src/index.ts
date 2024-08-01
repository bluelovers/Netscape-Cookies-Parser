import { CookieJar } from "./lib/CookieJar";
export type { Cookies } from "./types/Cookies";

// @ts-ignore
if (process.env.TSDX_FORMAT !== 'esm')
{
	Object.defineProperty(CookieJar, "__esModule", { value: true });

	Object.defineProperty(CookieJar, 'CookieJar', { value: CookieJar });
	Object.defineProperty(CookieJar, 'default', { value: CookieJar });
}

export { CookieJar }

export default CookieJar
