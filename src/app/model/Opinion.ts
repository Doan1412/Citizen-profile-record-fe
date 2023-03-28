import { Citizen } from './citizen';
export interface Opinion {
    id:number;
    citizen:Citizen;
    content:string;
}