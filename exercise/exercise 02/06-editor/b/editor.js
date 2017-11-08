const {Menu, dialog} = require('electron').remote　
const fs = require('fs')

const template = [
  {
    label: 'File',            // 功課：新增檔案，開新檔案，另存檔案，自己新增項目
    submenu: [                // remote > 於main 取得
      {
        label: 'Open',
        accelerator: 'CmdOrCtrl+O',
        click: function () {
          dialog.showOpenDialog(
            function (fileName) {
              if (fileName === undefined) {
                console.log('No file selected')
                return
              }
              console.log('fileName=' + fileName)

              var filePath = document.getElementById('filePath')
              filePath.innerText = fileName
              fs.readFile(fileName.toString(), 'utf8', function (err, data) {
                if (err) window.alert('read fail!')
                var text = document.getElementById('text')
                text.value = data
              })
            }
          )
        }
      },
      {
        label: 'Save',
        accelerator: 'CmdOrCtrl+S',
        click: function () {
          var fileName = document.getElementById('filePath').innerText
          if (fileName.trim().length === 0) window.alert('No file loaded!')
          var text = document.getElementById('text')
          fs.writeFile(fileName, text.value)
        }
      },
      {
        label:'Save as',
        accelerator:'CmdOrCtrl+A',
        click: function SaveFileAs () {
        var text =document.getElementById('text')  
        dialog.showSaveDialog({
          filters: [ {name:'any',extensions: ['*']},{ name:'text',extensions:['txt']}]
        },
        function(fileName){
          if(fileName === undefined)return
          fs.writeFile(fileName,text.value,function(err) {
            dialog.showMessageBox({message:"儲存完畢!",buttons:["OK"] })
          })
          var filePath = document.getElementById('filePath')
          filePath.innerText = fileName
        })
      }
      },
      {
        label: 'Create new file',
        accelerator: 'CmdOrCtrl+C',
        click: function CreateNewFile () {
          var filePath = document.getElementById('filePath')
          filePath.innerText = '未命名'
          var content = document.getElementById('text')
          content.value = ''
        }
      },
      {label:'Exit',role:'close'}
    ]
  },
  {
    label: 'Edit',
    submenu: [
      { role: 'undo' },     // role 預設功能
      { role: 'redo' },
      { type: 'separator' }, // 分隔線
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' }
    ]
  },
  {
    label: 'View',
    submenu: [
      { role: 'reload' },
      { role: 'toggledevtools' },
      { type: 'separator' },
      { role: 'resetzoom' },
      { role: 'zoomin' },
      { role: 'zoomout' },
      { type: 'separator' },
      { role: 'togglefullscreen' }
    ]
  },
  {
    role: 'window',
    submenu: [
      { role: 'minimize' },
      { role: 'close' }
    ]
  },
  {
    role: 'help',
    submenu: [ { label: 'Learn More' } ]
  }
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)
