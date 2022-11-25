export { AppType, IconType, } from "@byzk/teamwork-sdk";
var _windows = window;
var _teamworkInsideSdk = _windows.teamworkInsideSdk;
export * as teamworkSDK from "@byzk/teamwork-sdk";
var _electronSdk = _teamworkInsideSdk.electron;
/**
 * electron相关api
 */
export var electron = {
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
var _idSdk = _teamworkInsideSdk.id;
/**
 * id相关api
 */
export var id = {
    /**
     * 全局自增序列号
     * @returns 序列号
     */
    seq: function () {
        return _idSdk.seq();
    },
    /**
     * 创建一个uuid
     * @returns uuid
     */
    uuid: function () {
        return _idSdk.uuid();
    },
};
var _apiSdk = _teamworkInsideSdk.api;
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
/**
 * 内部api相关
 */
export var api = {
    /**
     *
     * @param username 用户名
     * @param password 密码
     * @returns 登录
     */
    login: function (username, password) {
        return _apiSdk.login(username, password);
    },
    /**
     * 登出
     */
    logout: function () {
        return _apiSdk.logout();
    },
    /**
     * 请求远程核心http服务
     * @param url 请求路径
     * @param options 请求参数
     * @returns 请求结果
     */
    proxyHttpCoreServer: function (url, options) {
        return _apiSdk.proxyHttpCoreServer(url, options);
    },
    /**
     * 请求本地http服务
     * @param url 请求地址
     * @param options http选项
     * @returns 请求结果
     */
    proxyHttpLocalServer: function (url, options) {
        return _apiSdk.proxyHttpLocalServer(url, options);
    },
    /**
     * 注册服务器转换数据处理方法
     * @param fn 处理方法
     * @returns 方法ID
     */
    registerServerMsgHandler: function (fn) {
        return _apiSdk.registerServerMsgHandler(fn);
    },
    /**
     * 移除服务器数据转换处理方法
     * @param fnId 要移除的id
     */
    removeServerMsgHandler: function (fnId) { },
};
var _currentWindowSdk = _teamworkInsideSdk.currentWindow;
/**
 * 当强窗体
 */
export var currentWindow = {
    /**
     * 全屏
     */
    fullscreen: function () {
        return _currentWindowSdk.fullscreen();
    },
    /**
     * 取消全屏
     */
    unFullscreen: function () {
        return _currentWindowSdk.unFullscreen();
    },
    /**
     * 最大化
     */
    maximize: function () {
        return _currentWindowSdk.maximize();
    },
    /**
     * 取消最大化
     */
    unmaximize: function () {
        return _currentWindowSdk.unmaximize();
    },
    /**
     * 最小化
     */
    minimize: function () {
        return _currentWindowSdk.minimize();
    },
    /**
     * 取消最小化
     */
    unminimize: function () {
        return _currentWindowSdk.unminimize();
    },
    /**
     * 置顶
     */
    alwaysOnTop: function () {
        return _currentWindowSdk.alwaysOnTop();
    },
    /**
     * 取消置顶
     */
    unAlwaysOnTop: function () {
        return _currentWindowSdk.unAlwaysOnTop();
    },
    /**
     * 显示
     */
    show: function () {
        return _currentWindowSdk.show();
    },
    /**
     * 隐藏
     */
    hide: function () {
        return _currentWindowSdk.hide();
    },
    /**
     * 关闭
     */
    close: function () {
        return _currentWindowSdk.close();
    },
    /**
     * 打开窗体中BrowserView的开发者工具
     */
    openBrowserViewDevTools: function () {
        return _currentWindowSdk.openBrowserViewDevTools();
    },
};
var _applicationsSdk = _teamworkInsideSdk.applications;
/**
 * 应用相关API
 */
export var applications = {
    /**
     * 监听应用状态变更通知
     */
    listenStatusNotice: function (id, fn) {
        return _applicationsSdk.listenStatusNotice(id, fn);
    },
    /**
     * 移除应用状态变更通知
     */
    removeStatusNotice: function (id) {
        return _applicationsSdk.removeStatusNotice(id);
    },
    /**
     * 打开一个应用
     * @param appInfo 应用信息
     */
    openApp: function (appInfo) {
        return _applicationsSdk.openApp(appInfo);
    },
    /**
     * 根据应用Id显示应用视图
     * @param id 应用ID
     */
    showById: function (id) {
        return _applicationsSdk.showById(id);
    },
    /**
     * 根据应用id弹出应用视图
     * @param id 应用ID
     */
    showInAlertById: function (id) {
        return _applicationsSdk.showInAlertById(id);
    },
    /**
     * 当前应用信息弹出显示
     */
    currentShowInAlert: function () {
        return _applicationsSdk.currentShowInAlert();
    },
    /**
     * 根据应用id隐藏应用视图
     * @param id 应用ID
     */
    hideById: function (id) {
        return _applicationsSdk.hideById(id);
    },
    /**
     * 挂起当前应用视图
     */
    hangUp: function () {
        return _applicationsSdk.hangUp();
    },
    /**
     * 恢复当前挂起应用
     */
    restore: function () {
        return _applicationsSdk.restore();
    },
    /**
     * 隐藏最后打开的应用信息
     */
    hideEndOpenedApp: function () {
        return _applicationsSdk.hideEndOpenedApp();
    },
    /**
     * 根据应用ID销毁应用视图
     * @param id 应用ID
     */
    destroyById: function (id) {
        return _applicationsSdk.destroyById(id);
    },
    /**
     * 销毁弹出的应用视图根据应用ID
     * @param id 应用ID
     */
    destroyAlertById: function (id) {
        return _applicationsSdk.destroyAlertById(id);
    },
    /**
     * 安装应用信息
     * @param appId 要安装的应用ID
     */
    install: function (appId) {
        return _applicationsSdk.install(appId);
    },
    /**
     * 安装应用调试信息
     * @param appInfo 应用信息
     */
    installWithDebug: function (appInfo) {
        return _applicationsSdk.installWithDebug(appInfo);
    },
    /**
     * 根据应用ID卸载应用
     * @param appId 应用ID
     */
    uninstall: function (appId) {
        return _applicationsSdk.uninstall(appId);
    },
    /**
     * 卸载调试应用
     * @param appId 要卸载的调试应用ID
     */
    uninstallWithDebug: function (appId) {
        return _applicationsSdk.uninstallWithDebug(appId);
    },
    /**
     * 获取已经打开的应用列表
     * @returns 打开的应用列表
     */
    getOpenedIdList: function () {
        return _applicationsSdk.getOpenedIdList();
    },
    /**
     * 获取当前的应用信息
     */
    getCurrentAppInfo: function () {
        return _applicationsSdk.getCurrentAppInfo();
    },
};
var _contextmenuSdk = _teamworkInsideSdk.contextmenu;
/**
 * 上下文相关api
 */
export var contextmenu = {
    /**
     * 构建菜单对象
     * @param menuItemList 菜单项ID
     * @param menuId 菜单ID
     * @returns 菜单接口
     */
    build: function (menuItemList, menuId) {
        return _contextmenuSdk.build(menuItemList, menuId);
    },
    /**
     * 清除菜单对象根据菜单ID
     * @param menuId 菜单ID
     */
    clear: function (menuId) {
        return _contextmenuSdk.clear(menuId);
    },
    /**
     * 清除所有的已存在的菜单对象
     */
    clearAll: function () {
        return _contextmenuSdk.clearAll();
    },
};
var _modalWindow = _teamworkInsideSdk.modalWindow;
/**
 * 模态化窗口
 */
export var modalWindow = {
    /**
     * 显示用户信息
     */
    showUserinfo: function () {
        return _modalWindow.showUserinfo();
    },
};
var _remoteCache = _teamworkInsideSdk.remoteCache;
export var remoteCache = {
    /**
     * 用户列表
     */
    userList: function (filterOptions) {
        return _remoteCache.userList(filterOptions);
    },
};
