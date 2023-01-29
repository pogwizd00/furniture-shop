export interface OrderFormType {
    email: string;
    country: string;
    residence: string;
    postalCode: string;
    phoneNumber: string;
    price: number;
    detailsToOrder?: string;
}