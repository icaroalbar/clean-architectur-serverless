import { IClients } from "../clients.dto";

export interface IFindClientRepository {
    find(): Promise<IClients>
}