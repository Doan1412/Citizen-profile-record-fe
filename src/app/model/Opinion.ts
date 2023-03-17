import { Citizen } from './citizen';
export interface Opinion {
    id:bigint;
    citizen:Citizen;
    content:string;
}