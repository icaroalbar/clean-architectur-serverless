import { IClients } from "./clients.dto";

export class Client {
  public readonly props: IClients;

  constructor(props: IClients) {
    this.props = { ...props };
  }
}
