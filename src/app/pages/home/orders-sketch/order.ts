export class Order {

    orderId: number;
    userId: number;
    address: string;
    product: string;
    orderDate:Date;
    fromDate: Date;
    toDate: Date;
    frequency: number;
    quantity: number;
    paymentMethod: string;
}

export class Purchase {

    orderId: number;
    purchaseId: number;
    userId: number;
    address: string;
    product: string;
    typeOfOrder:string;
    deliveryDate:Date;
    quantity: number;
    paymentMethod: string;
  }

  export class Pair {
      public  key: string;
      public value: any;
  }