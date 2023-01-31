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
export declare const id: IdApi;
