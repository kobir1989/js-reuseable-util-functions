/**
 * @function sluggifiedString
 * @param {string}
 * @param {options} - options object {}
 * @return {sluggified string}
 * @throws {Error}
 */
interface SluggifyOptions {
    separator?: string;
    removeStopWords?: boolean;
    stopWords?: string[];
    case?: 'lower' | 'upper' | 'title';
    maxLength?: number;
}
export declare const sluggifiedString: (string: string, options?: SluggifyOptions) => string;
export {};
