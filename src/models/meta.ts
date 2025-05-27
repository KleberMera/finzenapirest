export interface GoalDTO {
    user_id: number;
    name: string;
    description?: string;
    target_amount: number;
    deadline?: string;
    start_date?: string;
    status?: string;
}



export interface GoalContributionDTO {
    goal_id?: number;
    amount: number;
    note?: string;
    date: string;
    
}