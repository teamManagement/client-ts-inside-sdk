import { Clipboard } from "electron";
import { ElectronAPI as ToolkitElectronApi } from "@electron-toolkit/preload";
import { _teamworkInsideSdk } from "../common";

export interface ElectronApi extends ToolkitElectronApi {
  isDev: boolean;
  clipboard: Clipboard;
}

export const electron: ElectronApi = _teamworkInsideSdk.electron;
