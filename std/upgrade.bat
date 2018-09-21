rd /S /Q node_modules
TortoiseProc.exe /command:update /path:"..\lib"  /closeonend:1
TortoiseProc.exe /command:update /path:".\"  /closeonend:1
npm i core shared
npm i
del node_modules\@angular-devkit\build-angular\src\angular-cli-files\models\webpack-configs\common.js 
copy ..\blank\node_modules\@angular-devkit\build-angular\src\angular-cli-files\models\webpack-configs\common.js node_modules\@angular-devkit\build-angular\src\angular-cli-files\models\webpack-configs\common.js
ng serve