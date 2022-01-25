// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

/*
const { ipcMain } = require('electron')

ipcMain.on('hotspot-event', (event, arg) => {
  event.returnValue = 'Message received!'
  require('electron').shell.openExternal('https://explorer.helium.com/hotspots/${arg}');
})*/
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.

(async () => {
    await app.whenReady();

    try {
                //addListener()
            while(1){
                const activeWin = require("active-win")
                let winDetails = await activeWin()

                let appWinTitle = winDetails.title
                let appName = winDetails.owner.path.split("/")[2].split(".")[0]
                console.log(winDetails)
                }
            } catch (error) {
                console.log(error)
                }

  })();
/*
app.whenReady().then(() => {

    //const chrome = window.chrome || {}
    //const extensionId = chrome.runtime?.id

    try {
            //addListener()
            const activeWin = require("active-win")

                let winDetails = await activeWin()

                let appWinTitle = winDetails.title
                //let appName = winDetails.owner.path.split("/")[2].split(".")[0]
                console.log(appName)
            console.log("happy me!!")
        } catch (error) {
            console.log(error)
        }

*/
 //app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
 //   if (BrowserWindow.getAllWindows().length === 0) createWindow()
 // })
//})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})


function addListener() {

    var activity = require('./activity.js').activity
    console.log("inside listener")

    chrome.tabs.onActivated.addListener(function(info) {
    console.log("inside onActivated")
        chrome.tabs.get(info.tabId, function(tab) {
            activity.addTab(tab);
        });
    });

    chrome.runtime.onInstalled.addListener(function(details) {
        if (details.reason == 'install') {
            storage.saveValue(SETTINGS_SHOW_HINT, SETTINGS_SHOW_HINT_DEFAULT);
            setDefaultSettings();
        }
        if (details.reason == 'update') {
            storage.saveValue(SETTINGS_SHOW_HINT, SETTINGS_SHOW_HINT_DEFAULT);
            checkSettingsImEmpty();
            setDefaultValueForNewSettings();
            isNeedDeleteTimeIntervalFromTabs = true;
        }
    });

}
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
