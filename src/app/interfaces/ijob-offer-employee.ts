import { IJobOffer } from './ijob-offer';
import { IEmployee } from './iemployee';

export interface IJobOfferEmployee {
    jobOfferId?: number;
    jobOffer?: IJobOffer;
    employeeId?: number;
    employee?: IEmployee;
}
