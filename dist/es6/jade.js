import {ViewStrategy} from 'aurelia-templating';

var hasTemplateElement = ('content' in document.createElement('template'));

/**
Loads a given `.jade` view by URL. Allows use of both pre-compiled client `.jade.js` files, 
as well as bare `.jade` files (requires the SystemJS `jade` plugin to be present).

@class JadeView
@extends Aurelia.Templating.ViewStrategy
@param viewUrl {Object} View URL
@param [isCompiled] {Boolean} If true, will not attempt to use SystemJS plugin loader (i.e. no '!' suffix)
**/
export default class JadeView extends ViewStrategy {
	constructor(viewUrl, isCompiled) {
		this.viewUrl = JadeView.parseViewUrl(viewUrl, isCompiled);
	}

	/**
	Generates a `DocumentFragment` from a given peice of HTML

	@method loadViewFactory
	@param viewEngine {Object} ViewEngine instance to utilise when loading the view
	@param options {Object} Template compilation option
	@return {Promise} Promise returned from `ViewEngine.loadTemplateResources`
	**/
	loadViewFactory(viewEngine, options) {
		return viewEngine.loader.loadModule(this.viewUrl).then(module => {
			// Support default exports syntax of plain function export
			let template = 'default' in module ? module.default : module;

			// Evaluate the client template method and generate a `DocumentFragment`
			template = JadeConventionView.generateFragment(template(options.data));

			// Taken straight from the `viewEngine.loadViewFactory` method
			return viewEngine.loadTemplateResources(this.viewUrl, template, this.moduleId).then(resources => {
				let existing = viewEngine.importedViews[this.viewUrl];
				if(existing){
					return existing;
				}

				let viewFactory = viewEngine.viewCompiler.compile(template, resources, options);
				viewEngine.importedViews[this.viewUrl] = viewFactory;
				return viewFactory;
			});
		});
	}

	/**
	Generates a `DocumentFragment` from a given peice of HTML
	
	@static
	@method generateFragment
	@param html {String} HTML to generate a `DocumentFragment` from
	@return {DocumentFragment} A new DocumentFragment representing the parsed HTML string
	**/
	static generateFragment(html) {
		let doc = document.createDocumentFragment();
		let div = document.createElement('div');
		div.innerHTML = html;
		while(div.firstChild) {
			doc.appendChild(div.firstChild);
		}

		if(!hasTemplateElement) {
			HTMLTemplateElement.bootstrap(doc);
		}

		let template = doc.querySelector('template');
		if(!template) {
			throw new Error('There was no template element found');
		}

		return template;
	}

	/**
	Parses a given view URL, appending optional `!` plugin loader suffix when enabled.

	@static
	@method parseViewUrl
	@param moduleId {String} Module ID to convert
	@param isCompiled {Boolean} If true, will not attempt to use SystemJS plugin loader (i.e. no '!' suffix)
	**/
	static parseViewUrl(moduleId, isCompiled) {
		return moduleId + (isCompiled ? '' : '!');
	}
}
