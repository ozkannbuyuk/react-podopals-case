export interface IProductsTable {
  id: number;
  name: string;
  price: number;
  sku: string;
  stock: number;
  position: number;
}

export interface ICustomersTable {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface ItopCustomers {
  username: string;
  order: number;
  price: string;
}

export type TlatestTransactions = {
  orderId: string;
  customer: string;
  totalPrice: string;
  date: string;
  status: string;
};
