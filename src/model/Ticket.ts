import Stage from "./Stage";

interface Ticket {
    id: number;
    title: string;
    image: string;
    price: number;
    description: string;
    purchaseDate: Date;
    discount: number;
    stage: Stage | undefined;
}

export default Ticket;