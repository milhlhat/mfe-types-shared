export interface Account {
    name: string;
    isLogIn: boolean;
    login(name: string): void;
    logout(): void;
}