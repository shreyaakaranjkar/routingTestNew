export interface Iproduct{
    productName: string;
    productId: string;
    productStatus: IpStatus;
    canReturn: 1 | 0;
}

export type IpStatus = 'In-Progress' | 'Dispatched' | 'Delivered'