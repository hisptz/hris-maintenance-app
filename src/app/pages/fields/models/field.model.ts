export interface Field {
    name: string;
    caption: string;
    created: Date;
    lastUpdated: Date;
    id: string;
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
    hasOptions: boolean;
}