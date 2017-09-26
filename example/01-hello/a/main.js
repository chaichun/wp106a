const {app, BrowserWindow} = require('electron')
// =
// const electron = require('electron')
// const app= electron.app
// const BrowserWindow= electron.BrowserWindow

function createWindow () {
  var win = new BrowserWindow({width: 800, height: 600})
  win.loadURL('file://' + __dirname + '/index.html')
  //+_dirname = 開啟的檔案名字
}

app.on('ready', createWindow)
//等app.on 狀態是ready,才呼叫window
