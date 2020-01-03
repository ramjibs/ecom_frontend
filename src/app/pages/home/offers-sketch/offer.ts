export class Addoffer {

    public name: string;
    public description: string;
    public price: number;
    public image: string;
    public valid_from: string;
    public valid_to: string;
    public order_type: string[];
    public payment: string[];
     
}

export class offer {

    public id: string;
    public name: string;
    public description: string;
    public price: number;
    public image: string;
    public valid_from: string;
    public valid_to: string;
    public order_type: string[];
    public payment: string[];
  
}
 
export class Updateoffer {

    
    public id: string;
    public name: string;
    public description: string;
    public price: number;
    public image: string;
    public valid_from: string;
    public valid_to: string;
    public order_type: string[];
    public payment: string[];

}

export class Deleteoffer {
    public id: string;
}



