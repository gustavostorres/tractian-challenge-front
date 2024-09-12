export type Assets ={
    id: string;
    locationId: string | null;
    name: string;
    parentId: string | null;
    sensorType: string | null;
    status: string | null;
    gatewayId?: string; 
    sensorId?: string;
}

export interface Asset {
    id: string;
    name: string;
    parentId?: string;
    locationId?: string;
    sensorId?: string;
    sensorType?: 'energy' | 'vibration';
    status?: 'operating' | 'alert';
    gatewayId?: string;
    children?: Asset[];
}