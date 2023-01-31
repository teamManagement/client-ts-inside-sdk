import { ContextmenuApi, DbApi, OrgInfo, UserInfo } from "@teamworktoolbox/sdk";
import { _teamworkInsideSdk } from "./common";

export {
  AppInfo,
  AppType,
  IconType,
  ContextMenu,
  MenuItem,
  OrgInfo,
} from "@teamworktoolbox/sdk";

export * as teamworkSDK from "@teamworktoolbox/sdk";
export * from "./electron/index";
export * from "./id/index";
export * from "./api/index";
export * from "./currentWindow/index";
export * from "./applications/index";

export interface ReadBookmark {
  title: string;
  url: string;
}

export const contextmenu: ContextmenuApi = _teamworkInsideSdk.contextmenu;

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
  /**
   * 加载自身
   */
  loadOneself?: boolean;
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
    return _remoteCache.orgList();
  },
};

export const insideDb: DbApi = _teamworkInsideSdk.insideDb;
