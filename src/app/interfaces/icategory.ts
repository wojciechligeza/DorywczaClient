import { IJobOffer } from './ijob-offer';

export interface ICategory {
    categoryId: number;
    typeOfJob: string;
    workplace: string;

    jobOffers?: Array<IJobOffer>;
}
