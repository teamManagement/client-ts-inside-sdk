import { Clipboard } from "electron";
import { ElectronAPI as ToolkitElectronApi } from "@electron-toolkit/preload";
export interface ElectronApi extends ToolkitElectronApi {
    isDev: boolean;
    clipboard: Clipboard;
}
export declare const electron: ElectronApi;
