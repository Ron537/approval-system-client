export interface IRequest {
    from: string;
    to: string;
    unit: string;
    status: 'PENDING' | 'APPROVED' | 'DENIED' | 'WAITING_FOR_INFO';
    fileId: string;
    info?: string;
    createdAt: Date;
    classification: string;
}