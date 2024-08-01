/**
 * Represents a Cookie object
 */
export interface Cookies {
	/**
	 * Name of the cookie
	 */
	name: string;
	/**
	 * Value of the cookie
	 */
	value: string;
	/**
	 * The Domain that this cookie belongs to
	 */
	domain: string;
	/**
	 * The domain path
	 */
	path: string;
	/**
	 * Whether this cookie has flags, returns mostly "FALSE"
	 */
	flag: string;
	/**
	 * Expiration date of this cookie
	 */
	expires: number;
	/**
	 * Whether this cookie is secure
	 */
	secure: boolean;
}
export declare class CookieJar {
	private _cookies;
	/**
	 * @param String cookies Netscape HTTP Cookie File
	 */
	constructor(cookies?: string);
	/**
	 * Loads a cookie file from the provided path
	 * @param String path
	 * @returns File Content in UTF8 format
	 */
	load(path: string): string;
	/**
	 * Parses the content of a Netscape HTTP Cookie Files
	 * @returns An array of Cookies[]
	 */
	parse(): Cookies[];
	/**
	 * Parses the cookie content and returns a string to pass as cookie header
	 * @returns string
	 */
	toString(): string;
}

export {
	CookieJar as default,
};

export {};
