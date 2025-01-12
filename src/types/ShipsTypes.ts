export interface Ship {
    ship_id: string;
    name: string;
    type: string;
    home_port: string;
    image?: string; // Optional since the API might not provide this
    year_built?: number; // Optional
    active: boolean;
    link?: string; // Optional
  }
  