export class OrderDto {
  id: number;
  email: string;
  country: string;
  residence: string;
  postalCode: string;
  phoneNumber: string;
  price: number;
  detailsToOrder: null;
  dateOfOrder: Date;
}
