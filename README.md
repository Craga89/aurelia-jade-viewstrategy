# aurelia-jade-viewstrategy

This library is an addon to the [Aurelia](http://www.aurelia.io/) platform and provides `JadeView` and `JadeConventionView` ViewStrategy classes which will allow
you to utilise `.jade` and `.jade.js` compiled files easily, along with the SystemJS `jade` plugin (installed as dependency).

## Usage
To utilise this `ViewStrategy`, override the `getViewStrategy` on your ViewModel. Here's an example using `JadeConventionView`:

```js
import {JadeConventionView} from 'aurelia-jade-viewstrategy';

class ViewModel {
	getViewStrategy() {
		return new JadeConventionView();
	}
}
```

If you don't want to retrieve the view by convention, but rather using a defined URL, use `JadeView` instead:

```js
import {JadeView} from 'aurelia-jade-viewstrategy';

class ViewModel {
	getViewStrategy() {
		return new JadeView('./template.jade');
	}
}
```

Finally, if you are using pre-compiled `jade.js` files (i.e. you've pre-compiled the `.jade` files into their associated template functions) and want to use those instead, you can tell the instance not to use the SystemJS loader and instead load the view as a pure JS module using the `isCompiled` flag.

```js
import {JadeView} from 'aurelia-jade-viewstrategy';

class ViewModel {
	getViewStrategy() {
		// JadeView example
		return new JadeView('./template.jade', true);
		
		// ...or with JadeConventionView
		return new JadeConventionView(true);
	}
}
```

You can also utilise it with CustomElements by registering the ViewStrategy instance as Metadata:

```js
import {JadeConventionView} from 'aurelia-jade-viewstrategy';

export default class PageCustomElement {
	static metadata() {
		return Behavior
			.customElement('page')
			.add( new JadeConventionView() )
	}
};

```

## Dependencies

* [aurelia-templating](https://github.com/aurelia/templating)
* [aurelia-metadata](https://github.com/aurelia/metadata)

## Platform Support

This library can be used in the **browser** as well as on the **server**.

## Building The Code

To build the code, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.
2. From the project folder, execute the following command:

	```shell
	npm install
	```
3. Ensure that [Gulp](http://gulpjs.com/) is installed. If you need to install it, use the following command:

	```shell
	npm install -g gulp
	```
4. To build the code, you can now run:

	```shell
	gulp build
	```
5. You will find the compiled code in the `dist` folder, available in three module formats: AMD, CommonJS and ES6.

6. See `gulpfile.js` for other tasks related to generating the docs and linting.
