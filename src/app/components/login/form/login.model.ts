
export interface LoginData {
    email: string | null;
    phoneNumber: string | null;
    password: string;
    codeReferrer?: string | null; // Opcional, solo para el registro
}
