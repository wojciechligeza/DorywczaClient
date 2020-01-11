import { IJobOfferEmployee } from './ijob-offer-employee';

export interface IEmployee {
    employeeId: number;
    name: string;
    gender: string;
    age: number;
    email: string;
    phone: any;
    qualification: string;
    experience: string;
    comment: string;
    agreementRodo: boolean;

    jobOfferEmployees?: Array<IJobOfferEmployee>;
}
