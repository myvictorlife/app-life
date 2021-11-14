
export interface User {
    firstName: string;
    lastName: string;
    email: string;
    phone?: {
        code: string;
        phoneNumber: number;
    };
}
