import { IField } from '../../src/interface';

export class Vue {}

export type AlertType = 'success' | 'warning' | 'info' | 'error';

export class ElAlert extends Vue {
  /**
   * @description test
   */
  data: string;

  type: AlertType;

  description?;

  1: 2;

  2: () => void;

  setActiveItem(name: string): void;
}
