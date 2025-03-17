export interface MetaDTO {
    user_id: number;
    name: string;
    description?: string;
    target_amount: number;
    deadline?: string;
    status?: string;
}



export interface MetaTrackingDTO {
    meta_id: number;
    amount: number;
    note?: string;
    date: string;
}