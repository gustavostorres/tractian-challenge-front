import { Asset } from "./Assets";

export type Locations = {
    id: string,
    name: string,
    parentId: string | null
}

export interface Location {
    id: string;
    name: string;
    parentId: string | null;
    children?: Array<Location | Asset>;
}