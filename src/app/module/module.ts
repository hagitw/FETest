export interface Root {
    data: Data;
}

export interface Data {
    type: number;
    label: string;
    children?: Child[] | null;
}

export interface Child {
    type: number;
    label: string;
    url: string | null;
}