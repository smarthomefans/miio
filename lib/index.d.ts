declare module "miio-lite" {
    type DeviceManagement = {
        model: string;
        address: string;
        token: string;
    }
    type DeviceCallPara = string|number;
    export type RegisterInfo = {
        address?: string;
        token?: string;
        id?: string;
    }
    type browsePara = {
        cacheTime?: number;
        tokens?: Record<string, string>;
    }
    type devicesPara = {
        cacheTime?: number;
        tokens?: Record<string, string>;
        filter?: (f: any)=>boolean;
        skipSubDevices?: boolean;
    }

    interface Device {
        management: DeviceManagement;
        id: string;
        destroy(): void;
        propertyUpdated(p: string, v: any): void;
        call(command: string, paras?: DeviceCallPara[]): any;
        checkOk(): void;
        defineProperty(prop: any, def?: any): void;
        updatePollDuration(ms: number): void;
        on(event: string, cb?: any): void;
        loadProperties(props: any): Record<string, any>;
    }

    export function device(para: RegisterInfo): any;
    export function browse(para: browsePara): any;
    export function devices(para: devicesPara): any;
}