import { IJobOffer } from './ijob-offer';

export interface IEmployer {
    employerId: number;
    companyName: string;
    description?: string;

    jobOffers?: Array<IJobOffer>;
    userId?: number;
}
