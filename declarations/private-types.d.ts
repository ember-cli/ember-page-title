import type SimpleDomDocument from '@simple-dom/document';
export type FastBootDocument = ReturnType<typeof SimpleDomDocument> & {
    title?: string;
};
export interface PageTitleConfig {
    /** The default separator to use between tokens. */
    separator?: string;
    /** The default prepend value to use. */
    prepend?: boolean;
    /** The default replace value to use. */
    replace?: boolean | null;
}
export interface PageTitleToken extends PageTitleConfig {
    id: string;
    title?: string;
    separator?: string;
    prepend?: boolean;
    replace?: boolean;
    front?: unknown;
    previous?: PageTitleToken | null;
    next?: PageTitleToken | null;
}
//# sourceMappingURL=private-types.d.ts.map