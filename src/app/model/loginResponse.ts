import { argThresholdOpts } from "moment";

export interface LoginResponse {
    token: string;
    role: Array<string>;
    refreshToken: string;
}
