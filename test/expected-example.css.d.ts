export interface IExampleCss {
  'foo': string;
  'bar-baz': string;
}

export const locals: IExampleCss & { [className: string]: string };
export default locals;
