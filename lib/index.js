import { fs as fsApi, } from "@teamworktoolbox/sdk";
import { _teamworkInsideSdk } from "./common";
export { AppType, IconType, } from "@teamworktoolbox/sdk";
export * as teamworkSDK from "@teamworktoolbox/sdk";
export * from "./electron/index";
export * from "./id/index";
export * from "./api/index";
export * from "./currentWindow/index";
export * from "./applications/index";
export const contextmenu = _teamworkInsideSdk.contextmenu;
const _modalWindow = _teamworkInsideSdk.modalWindow;
/**
 * 模态化窗口
 */
export const modalWindow = {
    /**
     * 显示用户信息
     */
    showUserinfo() {
        return _modalWindow.showUserinfo();
    },
};
const _remoteCache = _teamworkInsideSdk.remoteCache;
export const remoteCache = {
    /**
     * 用户列表
     */
    userList(filterOptions) {
        return _remoteCache.userList(filterOptions);
    },
    /**
     * 获取机构列表
     * @returns 机构列表
     */
    orgList() {
        return _remoteCache.orgList();
    },
};
export const insideDb = _teamworkInsideSdk.insideDb;
export const fs = fsApi;
