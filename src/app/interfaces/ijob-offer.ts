export interface IJobOffer {
    jobOfferId: number;
    name: string;
    description: string;
    salary: number;
    timeFrame: string;
    amountOfPlaces: number;
    addDate: any;
    qualificationIsRequired: boolean;
    state: boolean;
    category?: any;
    employee?: any;
    employer?: any;
}
