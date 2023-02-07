import { ipcMain } from "electron";

ipcMain.on("networks:fetch", async (event) => {
  event.returnValue = {data: 'true' };
});
