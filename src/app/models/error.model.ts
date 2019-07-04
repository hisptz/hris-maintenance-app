interface ErrorMessage {
    headers: Headers;
    status: number;
    statusText: string;
    url: string;
    ok: boolean;
    name: string;
    message: string;
    error: Error;
}
interface Headers {
    normalizedNames: NormalizedNames;
    lazyUpdate: null;
}
interface NormalizedNames { }
interface Error { }
