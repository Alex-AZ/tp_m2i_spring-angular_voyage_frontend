export class Admin {
    id: number | undefined;
    username: string | undefined;
    password: string | undefined;
    role: string | undefined;

    constructor(
        _id?: number | undefined, _username?: string | undefined,
        _password?: string | undefined, _role?: string | undefined
    ) {
        this.id = _id;
        this.username = _username;
        this.password = _password;
        this.role = _role;
    }
}