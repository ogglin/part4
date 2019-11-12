export class DynamicFilter {
  val: string;
  id: string;
  checked: boolean;
  min: number;
  max: number;

  constructor(val?: any, id?: any, checked?: boolean, min?: number, max?: number) {
    this.val = val;
    this.id = id;
    this.checked = checked;
    this.min = min;
    this.max = max;
  }
}
