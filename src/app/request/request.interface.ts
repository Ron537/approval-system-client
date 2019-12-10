export interface IRequest {
    from: string;
    to: { id: string, name: string }[];
    unit: string;
    status: 'PENDING' | 'APPROVED' | 'DENIED' | 'WAITING_FOR_INFO';
    fileId: string;
    info?: string;
    createdAt: Date;
    classification: string;
    additionalInfo?: string;
}