export interface APIResult {
    pager: Pager;
    fields: Field[];
}

export interface Pager {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
    nextPage: string;
}

export interface Field {
    created: Date;
    lastUpdated: Date;
    id: string;
    code?: any;
    name: string;
    caption: string;
    compulsory?: any;
    isUnique?: any;
    isCalculated?: any;
    description?: any;
    calculatedExpression?: any;
    hasHistory?: any;
    hasOptions: boolean;
    hasTarget?: any;
    fieldRelation?: any;
    skipInReport?: any;
}
