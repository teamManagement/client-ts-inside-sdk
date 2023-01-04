import { ElectronAPI } from "@electron-toolkit/preload";
import {
  AppInfo,
  ContextMenu,
  DbInterface,
  MenuItem,
  OrgInfo,
  UserInfo,
} from "@byzk/teamwork-sdk";

export {
  AppInfo,
  AppType,
  IconType,
  ContextMenu,
  MenuItem,
  OrgInfo,
} from "@byzk/teamwork-sdk";

const _windows = window as any;
const _teamworkInsideSdk = _windows.teamworkInsideSdk;

export * as teamworkSDK from "@byzk/teamwork-sdk";

const _electronSdk = _teamworkInsideSdk.electron;

/**
 * electron相关api
 */
export const electron: ElectronAPI & { isDev: boolean } = {
  /**
   * ipcRender对象
   */
  ipcRenderer: _electronSdk.ipcRenderer,
  /**
   * webFrame 对象
   */
  webFrame: _electronSdk.webFrame,
  /**
   * process 对象
   */
  process: _electronSdk.process,
  /**
   * 是否为开发模式
   */
  isDev: _electronSdk.isDev,
};

const _idSdk = _teamworkInsideSdk.id;
/**
 * id相关api
 */
export const id = {
  /**
   * 全局自增序列号
   * @returns 序列号
   */
  seq(): number {
    return _idSdk.seq();
  },
  /**
   * 创建一个uuid
   * @returns uuid
   */
  uuid(): string {
    return _idSdk.uuid();
  },
};

const _apiSdk = _teamworkInsideSdk.api;

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
  header?: { [key: string]: string };
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
export enum TcpTransferCmdCode {
  /**
   *阻塞链接
   */
  BLOCKING_CONNECTION,
  /**
   * 恢复服务器连接失败
   */
  RESTORE_SERVER_ERR,
  /**
   * 恢复服务器连接成功
   */
  RESTORE_SERVER_OK,
}

/**
 * 内部api相关
 */
export const api = {
  /**
   *
   * @param username 用户名
   * @param password 密码
   * @returns 登录
   */
  login(username: string, password: string): Promise<void> {
    return _apiSdk.login(username, password);
  },
  /**
   * 登出
   */
  logout(): void {
    return _apiSdk.logout();
  },
  /**
   * 请求远程核心http服务
   * @param url 请求路径
   * @param options 请求参数
   * @returns 请求结果
   */
  proxyHttpCoreServer<T>(url: string, options?: HttpOptions): Promise<T> {
    return _apiSdk.proxyHttpCoreServer(url, options);
  },
  /**
   * 请求本地http服务
   * @param url 请求地址
   * @param options http选项
   * @returns 请求结果
   */
  proxyHttpLocalServer<T>(url: string, options?: HttpOptions): Promise<T> {
    return _apiSdk.proxyHttpLocalServer(url, options);
  },
  /**
   * 注册服务器转换数据处理方法
   * @param fn 处理方法
   * @returns 方法ID
   */
  registerServerMsgHandler<T>(fn: (data: TcpTransferInfo<T>) => void): string {
    return _apiSdk.registerServerMsgHandler(fn);
  },
  /**
   * 移除服务器数据转换处理方法
   * @param fnId 要移除的id
   */
  removeServerMsgHandler(fnId: string): void {},
};

const _currentWindowSdk = _teamworkInsideSdk.currentWindow;

/**
 * 当强窗体
 */
export const currentWindow = {
  /**
   * 全屏
   */
  fullscreen(): Promise<void> {
    return _currentWindowSdk.fullscreen();
  },
  /**
   * 取消全屏
   */
  unFullscreen(): Promise<void> {
    return _currentWindowSdk.unFullscreen();
  },
  /**
   * 最大化
   */
  maximize(): Promise<void> {
    return _currentWindowSdk.maximize();
  },
  /**
   * 取消最大化
   */
  unmaximize(): Promise<void> {
    return _currentWindowSdk.unmaximize();
  },
  /**
   * 最小化
   */
  minimize(): Promise<void> {
    return _currentWindowSdk.minimize();
  },
  /**
   * 取消最小化
   */
  unminimize(): Promise<void> {
    return _currentWindowSdk.unminimize();
  },
  /**
   * 置顶
   */
  alwaysOnTop(): Promise<void> {
    return _currentWindowSdk.alwaysOnTop();
  },
  /**
   * 取消置顶
   */
  unAlwaysOnTop(): Promise<void> {
    return _currentWindowSdk.unAlwaysOnTop();
  },
  /**
   * 显示
   */
  show(): Promise<void> {
    return _currentWindowSdk.show();
  },
  /**
   * 隐藏
   */
  hide(): Promise<void> {
    return _currentWindowSdk.hide();
  },
  /**
   * 关闭
   */
  close(): Promise<void> {
    return _currentWindowSdk.close();
  },
  /**
   * 打开窗体中BrowserView的开发者工具
   */
  openBrowserViewDevTools(): Promise<void> {
    return _currentWindowSdk.openBrowserViewDevTools();
  },
};

const _applicationsSdk = _teamworkInsideSdk.applications;

/**
 * 应用相关API
 */
export const applications = {
  /**
   * 监听应用状态变更通知
   */
  listenStatusNotice(
    id: string,
    fn: (appInfo: AppInfo, status: "open" | "close") => void
  ): void {
    return _applicationsSdk.listenStatusNotice(id, fn);
  },
  /**
   * 移除应用状态变更通知
   */
  removeStatusNotice(id: string): void {
    return _applicationsSdk.removeStatusNotice(id);
  },
  /**
   * 打开一个应用
   * @param appInfo 应用信息
   */
  openApp(appInfo: AppInfo): Promise<void> {
    return _applicationsSdk.openApp(appInfo);
  },
  /**
   * 根据应用Id显示应用视图
   * @param id 应用ID
   */
  showById(id: string): Promise<void> {
    return _applicationsSdk.showById(id);
  },
  /**
   * 根据应用id弹出应用视图
   * @param id 应用ID
   */
  showInAlertById(id: string): Promise<void> {
    return _applicationsSdk.showInAlertById(id);
  },
  /**
   * 当前应用信息弹出显示
   */
  currentShowInAlert(): Promise<void> {
    return _applicationsSdk.currentShowInAlert();
  },
  /**
   * 根据应用id隐藏应用视图
   * @param id 应用ID
   */
  hideById(id: string): Promise<void> {
    return _applicationsSdk.hideById(id);
  },
  /**
   * 挂起当前应用视图
   */
  hangUp(): Promise<void> {
    return _applicationsSdk.hangUp();
  },
  /**
   * 恢复当前挂起应用
   */
  restore(): Promise<AppInfo | undefined> {
    return _applicationsSdk.restore();
  },
  /**
   * 隐藏最后打开的应用信息
   */
  hideEndOpenedApp(): Promise<void> {
    return _applicationsSdk.hideEndOpenedApp();
  },
  /**
   * 根据应用ID销毁应用视图
   * @param id 应用ID
   */
  destroyById(id: string): Promise<void> {
    return _applicationsSdk.destroyById(id);
  },
  /**
   * 销毁弹出的应用视图根据应用ID
   * @param id 应用ID
   */
  destroyAlertById(id: string): Promise<void> {
    return _applicationsSdk.destroyAlertById(id);
  },
  /**
   * 安装应用信息
   * @param appId 要安装的应用ID
   */
  install(appId: string): Promise<void> {
    return _applicationsSdk.install(appId);
  },
  /**
   * 安装应用调试信息
   * @param appInfo 应用信息
   */
  installWithDebug(appInfo: AppInfo): Promise<void> {
    return _applicationsSdk.installWithDebug(appInfo);
  },
  /**
   * 根据应用ID卸载应用
   * @param appId 应用ID
   */
  uninstall(appId: string): Promise<void> {
    return _applicationsSdk.uninstall(appId);
  },
  /**
   * 卸载调试应用
   * @param appId 要卸载的调试应用ID
   */
  uninstallWithDebug(appId: string): Promise<void> {
    return _applicationsSdk.uninstallWithDebug(appId);
  },
  /**
   * 获取已经打开的应用列表
   * @returns 打开的应用列表
   */
  getOpenedIdList(): string[] {
    return _applicationsSdk.getOpenedIdList();
  },
  /**
   * 获取当前的应用信息
   */
  getCurrentAppInfo(): AppInfo | undefined {
    return _applicationsSdk.getCurrentAppInfo();
  },
};

const _contextmenuSdk = _teamworkInsideSdk.contextmenu;

/**
 * 上下文相关api
 */
export const contextmenu = {
  /**
   * 构建菜单对象
   * @param menuItemList 菜单项ID
   * @param menuId 菜单ID
   * @returns 菜单接口
   */
  build(menuItemList: MenuItem[], menuId?: string): ContextMenu {
    return _contextmenuSdk.build(menuItemList, menuId);
  },
  /**
   * 清除菜单对象根据菜单ID
   * @param menuId 菜单ID
   */
  clear(menuId: string): void {
    return _contextmenuSdk.clear(menuId);
  },
  /**
   * 清除所有的已存在的菜单对象
   */
  clearAll(): void {
    return _contextmenuSdk.clearAll();
  },
};

const _modalWindow = _teamworkInsideSdk.modalWindow;
/**
 * 模态化窗口
 */
export const modalWindow = {
  /**
   * 显示用户信息
   */
  showUserinfo(): void {
    return _modalWindow.showUserinfo();
  },
};

/**
 * 聊天分组信息
 */
export interface ChatGroupInfo {
  /**
   * 创建时间
   */
  createAt: string;
  /**
   * 更新时间
   */
  updateAt: string;
  /**
   * id
   */
  id: string;
  /**
   * 名称
   */
  name: string;
  /**
   * 图标
   */
  icon: string;
  /**
   * 描述
   */
  desc?: string;
  /**
   * 创建者Id
   */
  createUserId: string;
  /**
   * 群主id
   */
  mainManagerUserId: string;
}

const _remoteCache = _teamworkInsideSdk.remoteCache;
/**
 * 远程缓存用户列表过滤选项
 */
export interface RemoteCacheUserListFilterOption {
  /**
   * 跳过应用商店管理员
   */
  breakAppStoreManager?: boolean;
}

export const remoteCache = {
  /**
   * 用户列表
   */
  userList(
    filterOptions?: RemoteCacheUserListFilterOption
  ): Promise<UserInfo[]> {
    return _remoteCache.userList(filterOptions);
  },
  /**
   * 获取机构列表
   * @returns 机构列表
   */
  orgList(): Promise<OrgInfo[]> {
    return remoteCache.orgList();
  },
};

export const insideDb = _teamworkInsideSdk.insideDb as DbInterface;
