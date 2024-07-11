export class CreateMockRepository {
  public readonly props: any;

  constructor(props: any) {
    this.props = { ...props };
  }
  async create(): Promise<any> {
    return { ...this.props };
  }
}
