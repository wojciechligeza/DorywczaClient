import { ICategory } from './icategory';
import { IEmployer } from './iemployer';
import { IJobOfferEmployee } from './ijob-offer-employee';

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

    categoryId?: number;
    category?: ICategory;
    employerId?: number;
    employer?: IEmployer;
    jobOfferEmployees?: Array<IJobOfferEmployee>;
}
