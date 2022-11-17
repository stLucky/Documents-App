export namespace Documents {
  export interface Item {
    description: string;
    id: number;
    image: string;
    name: string;
  }

  export type Response = Item[];
}
