
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class SigninUserInput {
    email: string;
    password: string;
}

export class SignupUserInput {
    email: string;
    password: string;
}

export class User {
    id: string;
    email: string;
    hash: string;
    hashRt?: Nullable<string>;
    createdAt: DataTime;
    updatedAt?: Nullable<DataTime>;
}

export class SigninResponse {
    accessToken: string;
    refreshToken: string;
}

export class SignupResponse {
    accessToken: string;
    refreshToken: string;
}

export class RefreshTokenResponse {
    accessToken: string;
    refreshToken: string;
}

export abstract class IQuery {
    abstract hello(): string | Promise<string>;

    abstract me(): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract signup(input: SignupUserInput): SignupResponse | Promise<SignupResponse>;

    abstract signin(input: SigninUserInput): SigninResponse | Promise<SigninResponse>;

    abstract refreshToken(): RefreshTokenResponse | Promise<RefreshTokenResponse>;

    abstract logout(): Nullable<Void> | Promise<Nullable<Void>>;
}

export type Void = any;
export type DataTime = any;
type Nullable<T> = T | null;
