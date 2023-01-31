import { _teamworkInsideSdk } from "../common";

/**
 * 当强窗体
 */
export interface CurrentWindowApi {
  /**
   * 全屏
   */
  fullscreen(): Promise<void>;
  /**
   * 取消全屏
   */
  unFullscreen(): Promise<void>;
  /**
   * 最大化
   */
  maximize(): Promise<void>;
  /**
   * 取消最大化
   */
  unmaximize(): Promise<void>;
  /**
   * 最小化
   */
  minimize(): Promise<void>;
  /**
   * 取消最小化
   */
  unminimize(): Promise<void>;
  /**
   * 置顶
   */
  alwaysOnTop(): Promise<void>;
  /**
   * 取消置顶
   */
  unAlwaysOnTop(): Promise<void>;
  /**
   * 显示
   */
  show(): Promise<void>;
  /**
   * 隐藏
   */
  hide(): Promise<void>;
  /**
   * 关闭
   */
  close(): Promise<void>;
  /**
   * 打开窗体中BrowserView的开发者工具
   */
  openBrowserViewDevTools(): Promise<void>;
}

export const currentWindow: CurrentWindowApi = _teamworkInsideSdk.currentWindow;
