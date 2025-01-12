export interface Launch {
    id: string;
    name: string;
    date_utc: string;
    rocket: string;
    success: boolean;
    details: string;
    links?: {
      patch?: {
        small: string;
        large: string;
      };
      article?: string;
      webcast?: string;
      wikipedia?: string;
    };
  }
    