export interface Field {
    name: string;
    caption: string;
    created: Date;
    lastUpdated: Date;
    uid: string;
    code?: any;
    compulsory?: any;
    isUnique?: any;
    isCalculated?: any;
    description?: any;
    calculatedExpression?: any;
    hasHistory?: any;
    hasTarget?: any;
    fieldRelation?: any;
    skipInReport?: any;
    id: number;
    hasOptions: boolean;
}