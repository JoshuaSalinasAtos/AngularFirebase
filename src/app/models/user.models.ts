import { ResolveStart } from "@angular/router";

export interface User{
    age: number;
    name: string;
    roles: ResolveStart;
}
export interface Roles{
    admin: boolean;
    customer: boolean;
}