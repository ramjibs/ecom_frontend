export class AddTimeslot {
    public from_time: string;
    public to_time: string;
    
}

export class Timeslot {
    public time_slot_id: string;
    public from_time: string;
    public to_time: string;
    
}

export class UpdateTimeslot{
    public time_slot_id: string;
    public from_time: string;
    public to_time: string;
    
}

export class DeleteTimeslot {
    public time_slot_id: string;
}