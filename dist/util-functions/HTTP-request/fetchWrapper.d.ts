/**
 * @function fetchWrapper
 * @param {string} url - The URL for the fetch request.
 * @param {object} options - Optional fetch options (e.g., method, headers, body).
 * @returns {Promise<unknown>} - A Promise that resolves to the fetched data or rejects with an error.
 */
type RequestInit = {
    method?: string;
    headers?: Record<string, string>;
    body?: string | FormData | URLSearchParams | ReadableStream<Uint8Array> | null;
};
type AdditionalOptions = RequestInit & {
    [key: string]: unknown;
};
export declare const fetchWrapper: (url: string, options?: AdditionalOptions) => Promise<unknown>;
export {};
