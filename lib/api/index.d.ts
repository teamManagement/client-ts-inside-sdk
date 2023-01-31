/**
 * http请求选项
 */
export interface HttpOptions {
    /**
     * 请求方法, 默认POST
     */
    method?: "GET" | "POST" | "DELETE" | "PUT" | "OPTION";
    /**
     * json数据
     */
    jsonData?: any;
    /**
     * 请求header
     */
    header?: {
        [key: string]: string;
    };
    /**
     * 超时时间, 单位ms
     * 默认: 5000ms
     * 当配置小于0时将永不超时
     */
    timeout?: number;
}
/**
 * tcp转换信息
 */
export interface TcpTransferInfo<T> {
    /**
     * cmd命令
     */
    cmdCode: number;
    /**
     * 传输的数据
     */
    data: T;
    /**
     * 错误信息
     */
    errMsg: string;
    /**
     * 数据类别
     */
    dataType: number;
}
/**
 * tcp转换命令码
 */
export declare enum TcpTransferCmdCode {
    /**
     *阻塞链接
     */
    BLOCKING_CONNECTION = 0,
    /**
     * 恢复服务器连接失败
     */
    RESTORE_SERVER_ERR = 1,
    /**
     * 恢复服务器连接成功
     */
    RESTORE_SERVER_OK = 2
}
/**
 * 内部api相关
 */
export interface ApiInterface {
    /**
     *
     * @param username 用户名
     * @param password 密码
     * @returns 登录
     */
    login(username: string, password: string): Promise<void>;
    /**
     * 登出
     */
    logout(): void;
    /**
     * 请求远程核心http服务
     * @param url 请求路径
     * @param options 请求参数
     * @returns 请求结果
     */
    proxyHttpCoreServer<T>(url: string, options?: HttpOptions): Promise<T>;
    /**
     * 请求本地http服务
     * @param url 请求地址
     * @param options http选项
     * @returns 请求结果
     */
    proxyHttpLocalServer<T>(url: string, options?: HttpOptions): Promise<T>;
    /**
     * 注册服务器转换数据处理方法
     * @param fn 处理方法
     * @returns 方法ID
     */
    registerServerMsgHandler<T>(fn: (data: TcpTransferInfo<T>) => void): string;
    /**
     * 移除服务器数据转换处理方法
     * @param fnId 要移除的id
     */
    removeServerMsgHandler(fnId: string): void;
}
export declare const api: ApiInterface;
