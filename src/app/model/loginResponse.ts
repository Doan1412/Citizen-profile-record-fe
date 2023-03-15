import { argThresholdOpts } from "moment";

export interface LoginResponse {
    accessToken: string;
    role: Array<string>;
    refreshToken: string;
    expiryDuration: number;
}
