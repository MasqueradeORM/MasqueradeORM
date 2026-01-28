# JSDoc - UX Tips

#### ** Note: The following guide is for Visual Studio Code users **

This guide will instruct you on how to adjust your VS Code settings to vastly improve your experience with JSDoc annotation.

Here is how your code will look like after applying the settings:

 
![img](https://github-production-user-asset-6210df.s3.amazonaws.com/127947659/541539790-55418d95-9e52-45ee-8576-02ea9ea319f6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260128%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260128T100708Z&X-Amz-Expires=300&X-Amz-Signature=2f11d997163d059e0d1c180f2f1d3de0d02bc9a89c3cdfd18acf1b05edd26700&X-Amz-SignedHeaders=host)



### 1) Install the `Inline fold` Extension  by Mohammed Alamri

### 2) Modify `User Settings (JSON)`
**First Step**
- Windows / Linux: Ctrl + Shift + P
- macOS: Cmd + Shift + P

**Second Step**

Type `Preferences: Open User Settings (JSON)` and press Enter.

**Third Step**

Copy the lines below into the JSON and save.
```JSON
{    
	"inlineFold.regex": "(\\/\\*\\*@\\w+\\s+\\{|(?<=\\/\\*\\*@\\w+\\s+\\{.*)\\}\\s*\\w*\\*\\/)",
    "inlineFold.regexGroup": "1",
    "inlineFold.maskChar": "",
    "inlineFold.after": "",
    "inlineFold.unfoldOnLineSelect": true,
    "inlineFold.unfoldedOpacity": 1
}
```

### 3) Create Snippet File
**First Step**
- Windows / Linux: Ctrl + Shift + P
- macOS: Cmd + Shift + P

**Second Step**

Type `Snippets: Configure Snippets` and press Enter.

**Third Step**

Choose the `New Global Snippets file...` option and press Enter.

**Fourth Step**

Name you snippet file, for example, `JSDoc_UX`.


**Fifth Step**

Copy the JSON below and save.
```JSON
{
	"@type let": {
		"scope": "javascript,typescript",
		"prefix": "let",
		"body": [
			"/**@type {${1}}*/ let $0"
		]
	},
	"@type const": {
		"scope": "javascript,typescript",
		"prefix": "const",
		"body": [
			"/**@type {${1}}*/ const $0"
		]
	},
	"@type string": {
		"scope": "javascript,typescript",
		"prefix": "string",
		"body": [
			"/**@type {string${1}}*/$0"
		]
	},
	"@type number": {
		"scope": "javascript,typescript",
		"prefix": "number",
		"body": [
			"/**@type {number${1}}*/$0"
		]
	},
	"@type boolean": {
		"scope": "javascript,typescript",
		"prefix": "boolean",
		"body": [
			"/**@type {boolean${1}}*/$0"
		]
	},
	"@type any": {
		"scope": "javascript,typescript",
		"prefix": "any",
		"body": [
			"/**@type {any${1}}*/$0"
		]
	},
	"@type Map": {
		"scope": "javascript,typescript",
		"prefix": "Map",
		"body": [
			"/**@type {Map<${1}>}*/$0"
		]
	},
	"@type Function": {
		"scope": "javascript,typescript",
		"prefix": "Function",
		"body": [
			"/**@type {Function${1}}*/$0"
		]
	},
	"@type": {
		"scope": "javascript,typescript",
		"prefix": "type",
		"body": [
			"/**@type {${1}}*/$0"
		]
	},
	"@return": {
		"scope": "javascript,typescript",
		"prefix": "return",
		"body": [
			"/**@return {${1}}*/$0"
		]
	},
	"@typedef import": {
		"scope": "javascript,typescript",
		"prefix": "importTypedef",
		"body": [
			"/**@typedef {import('${1}').$2} $3*/$0"
		]
	},
	"@typedef": {
		"scope": "javascript,typescript",
		"prefix": "typedef",
		"body": [
			"/**",
			"* @typedef {Object} ${1:MyObject}",
			"* @property {${2:boolean}} ${3:booleanField}",
			"* @property {${4:object}} ${5:nestedObj}",
			"*/"
		],
		"description": "JSDoc typedef for an object"
	}
}
```
**Note:** You can change the `prefix` fields if you do not like the shortcut names.


### 4) Configure the `jsconfig.json` file

Add the following lines to your `jsconfig.json` file:
```JSON
"allowJs": true,
"checkJs": true
```


## Using the Shortcuts


### Importing types from the package 

- **Use `importTypedef`**
```js
// importing from a package
/**@typedef {import('masquerade-orm').OrmConfigObj} OrmConfigObjAlias*/
// importing from some file
/**@typedef {import('./path/to/file').YourImportedType} YourImportedTypeAlias*/
```

![gif](https://github-production-user-asset-6210df.s3.amazonaws.com/127947659/541517721-4390af08-82fb-4ac8-a505-fb628dfff466.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260128%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260128T092714Z&X-Amz-Expires=300&X-Amz-Signature=3d21fa79447aff9402dd12943b3cff1cf8d923263813af3c60f8d5760ca0a9ec&X-Amz-SignedHeaders=host)


### Typing Variables
- **Use `type` / `string` / `number` / `boolean` (etc)**
```js
/**@type {string}*/ someString = '123'
/**@type {number}*/ someNumber = 567
```
![gif](https://github-production-user-asset-6210df.s3.amazonaws.com/127947659/541476030-a3c5dbdf-6777-4c88-9786-c70490f2be0d.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260128%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260128T081138Z&X-Amz-Expires=300&X-Amz-Signature=bfdb8d474d3131183a691b38ed7c7ddaec6695b638e360f95f419005c2462b13&X-Amz-SignedHeaders=host)


### Quick `Object` Type Deinition
- **Use `typedef`**
```js
/**
* @typedef {Object} YourObject
* @property {string} someString
* @property {number} someNum
*/
```

![gif](https://github-production-user-asset-6210df.s3.amazonaws.com/127947659/541526808-5148b247-4d0b-4e92-920f-ae415b01d787.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260128%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260128T094327Z&X-Amz-Expires=300&X-Amz-Signature=047eccd0694a34eeaf6247cf1ae27fd5ce8a561768156488ee12f50c1e27ad31&X-Amz-SignedHeaders=host)

### Defining Classes

```js
import { Entity } from 'masquerade-orm'
/**@typedef {import('masquerade-orm').Unique} Unique*/

class User extends Entity {
    /**@type {string | Unique}*/ username
    /**@type {string | Unique}*/ email
    /**@type {string}*/ password
    /**@type {boolean}*/ isBanned = false
    /**@satisfies {UserMetadata}*/ metadata = {
        twoFactorAuth: false,
        createdAt: new Date()
    }

    constructor(
	/**@type {string}*/ username, 
	/**@type {string}*/ email, 
	/**@type {string}*/ password) {
        super()
        this.username = username
        this.email = email
        this.password = password
    }
}

/**
* @typedef {Object} UserMetadata
* @property {boolean} twoFactorAuth
* @property {Date} createdAt
*/
```

<h1 align="center">All done!</h1>


<br>
<div align="center">
  <strong>
    © 2026 
    <a href="https://github.com/MasqueradeORM">MasqueradeORM </a>
		-
    Released under the MIT License
  </strong>
</div>