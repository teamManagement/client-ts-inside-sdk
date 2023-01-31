import { AppInfo } from "@teamworktoolbox/sdk";
import { _teamworkInsideSdk } from "../common";

/**
 * 应用相关API
 */
export interface ApplicationsApi {
  /**
   * 监听应用状态变更通知
   */
  listenStatusNotice(
    id: string,
    fn: (appInfo: AppInfo, status: "open" | "close") => void
  ): void;
  /**
   * 移除应用状态变更通知
   */
  removeStatusNotice(id: string): void;
  /**
   * 打开一个应用
   * @param appInfo 应用信息
   */
  openApp(appInfo: AppInfo): Promise<void>;
  /**
   * 根据应用Id显示应用视图
   * @param id 应用ID
   */
  showById(id: string): Promise<void>;
  /**
   * 根据应用id弹出应用视图
   * @param id 应用ID
   */
  showInAlertById(id: string): Promise<void>;
  /**
   * 当前应用信息弹出显示
   */
  currentShowInAlert(): Promise<void>;
  /**
   * 根据应用id隐藏应用视图
   * @param id 应用ID
   */
  hideById(id: string): Promise<void>;
  /**
   * 挂起当前应用视图
   */
  hangUp(): Promise<void>;
  /**
   * 恢复当前挂起应用
   */
  restore(): Promise<AppInfo | undefined>;
  /**
   * 隐藏最后打开的应用信息
   */
  hideEndOpenedApp(): Promise<void>;
  /**
   * 根据应用ID销毁应用视图
   * @param id 应用ID
   */
  destroyById(id: string): Promise<void>;
  /**
   * 销毁弹出的应用视图根据应用ID
   * @param id 应用ID
   */
  destroyAlertById(id: string): Promise<void>;
  /**
   * 安装应用信息
   * @param appId 要安装的应用ID
   */
  install(appId: string): Promise<void>;
  /**
   * 安装应用调试信息
   * @param appInfo 应用信息
   */
  installWithDebug(appInfo: AppInfo): Promise<void>;
  /**
   * 根据应用ID卸载应用
   * @param appId 应用ID
   */
  uninstall(appId: string): Promise<void>;
  /**
   * 卸载调试应用
   * @param appId 要卸载的调试应用ID
   */
  uninstallWithDebug(appId: string): Promise<void>;
  /**
   * 获取已经打开的应用列表
   * @returns 打开的应用列表
   */
  getOpenedIdList(): string[];
  /**
   * 获取当前的应用信息
   */
  getCurrentAppInfo(): AppInfo | undefined;
}

export const applications: ApplicationsApi = _teamworkInsideSdk.applications;
