import { Locationn } from './location';

export interface Citizen {
    citizen_id:bigint;
    name:string;
    birth:Date;
    family:bigint;
    gender:boolean;
    ethnic:string;
    religion:string;
    nationality:string;
    address:string;
    location:Locationn;
    profession:string;
    criminalRecord:string;
    email:string;
    phone:string;
    married:boolean;
    imgUrl:string;
    militaryService:boolean;
    homeOwnerRelationship:string;
}
