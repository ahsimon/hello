// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { InlineCompletionItemProvider } from './completion';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "hello" is now active!');

	const provider:vscode.InlineCompletionItemProvider = {
			
		provideInlineCompletionItems(document,position,context,token){
			console.log('new event!');

			let arr:vscode.InlineCompletionItem[]=[];
			const item:vscode.InlineCompletionItem = {
				insertText:'test',
				range:new vscode.Range(position,position.translate(0,4))
				/*,command: {
                    command: "hello.helloWorld",
                    title: "Hello World",
                    arguments: []
                }*/
				
			}
			arr.push(item);
			return arr;
		}
	}
	
		
	
    	context.subscriptions.push(vscode.languages.registerInlineCompletionItemProvider({pattern: '**'},provider));



	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('hello.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from hello!!!');
	});

	context.subscriptions.push(disposable);







			// Register the provider for plaintext and JavaScript files
		// const providerDisposable = vscode.languages.registerInlineCompletionItemProvider(
		// 	{ scheme: 'file' }, // Adjust for your targeted file types
		// 	new InlineCompletionItemProvider()
		// );

		// const providerDisposable = vscode.languages.registerInlineCompletionItemProvider(
		// 	{ pattern: '**' },
		// 	new InlineCompletionItemProvider()
		//   )
	
		// context.subscriptions.push(providerDisposable);

		
	


}
	
// This method is called when your extension is deactivated
export function deactivate() {}
