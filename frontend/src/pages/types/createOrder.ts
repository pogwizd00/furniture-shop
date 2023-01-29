export interface CreateOrder {
    email: string;
    country: string;
    residence: string;
    postalCode: string;
    phoneNumber: string;
    price: number;
    detailsToOrder?: string;
}