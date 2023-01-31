import { _teamworkInsideSdk } from "../common";
/**
 * tcp转换命令码
 */
export var TcpTransferCmdCode;
(function (TcpTransferCmdCode) {
    /**
     *阻塞链接
     */
    TcpTransferCmdCode[TcpTransferCmdCode["BLOCKING_CONNECTION"] = 0] = "BLOCKING_CONNECTION";
    /**
     * 恢复服务器连接失败
     */
    TcpTransferCmdCode[TcpTransferCmdCode["RESTORE_SERVER_ERR"] = 1] = "RESTORE_SERVER_ERR";
    /**
     * 恢复服务器连接成功
     */
    TcpTransferCmdCode[TcpTransferCmdCode["RESTORE_SERVER_OK"] = 2] = "RESTORE_SERVER_OK";
})(TcpTransferCmdCode || (TcpTransferCmdCode = {}));
export const api = _teamworkInsideSdk.api;
