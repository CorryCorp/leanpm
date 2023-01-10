export interface Session {
    id: string;
    user: {
        id: string;
        name: string;
        email: string;
        admin: boolean
    };
}