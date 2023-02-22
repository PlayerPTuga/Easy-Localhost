// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "easy-localhost" is now active!');

	let localhostItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
	localhostItem.text = "$(globe) Open Localhost";
	localhostItem.command = "easy-localhost.localhost";
	localhostItem.show();


	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let openLocalhost = vscode.commands.registerCommand('easy-localhost.localhost', function () {
		// The code you place here will be executed every time your command is executed
		if(vscode.workspace.workspaceFolders == undefined) {
			let message = "Localhost Easy: Working folder not found, open a folder an try again" ;
			vscode.window.showErrorMessage(message);
		} 
		else {
			//let wf = vscode.workspace.workspaceFolders[0].uri.path ;
			let f = vscode.workspace.workspaceFolders[0].uri.fsPath ; 
		
			//let message = `YOUR-EXTENSION: folder:\n${wf}\n${f}` ;
			let message = `Localhost Easy: opening localhost` ;
			f = f.substring(f.lastIndexOf('\\')+1);
			//console.log(f);
			vscode.commands.executeCommand('vscode.open', vscode.Uri.parse('http://127.0.0.1//'+f))

						
			vscode.window.showInformationMessage(message);
		}
		
		// Display a message box to the user
		//vscode.window.showInformationMessage('Hello World from Localhost!');
	});

	context.subscriptions.push(openLocalhost);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
