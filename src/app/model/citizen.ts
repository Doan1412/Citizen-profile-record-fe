import { Locationn } from './location';

export interface Citizen {
    id:bigint;
    name:string;
    birth:Date;
    idFamily:bigint;
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
}
