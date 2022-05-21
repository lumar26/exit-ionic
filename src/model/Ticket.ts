import Stage from "./Stage";

interface Ticket{
    id:number;
    title: string;
    img: string;
    price: number;
    description:string;
    purchaseDate:Date;
    discount:number;
 stage:Stage;
}

export default Ticket;