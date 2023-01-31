import { _teamworkInsideSdk } from "../common";

export interface IdApi {
  /**
   * 全局自增序列号
   * @returns 序列号
   */
  seq(): number;
  /**
   * 创建一个uuid
   * @returns uuid
   */
  uuid(): string;
}

export const id: IdApi = _teamworkInsideSdk.id;
