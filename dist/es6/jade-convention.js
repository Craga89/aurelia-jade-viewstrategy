import {Origin} from 'aurelia-metadata';
import JadeView from './jade';

/**
Retrieves a `.jade`-type view via usual convention used by `ConventionView`. 

@class JadeConventionView
@extends JadeView
@param viewModel {Object} ViewModel to determine viewUrl by convention from
@param [isCompiled] {Boolean} If true, will not attempt to use SystemJS plugin loader (i.e. no '!' suffix)
**/
export default class JadeConventionView extends JadeView {
	constructor(isCompiled) {
		this.isCompiled = isCompiled;
	}

	/**
	Overrides JadeView's `loadViewFactory` to dynamically intrept the
	viewUrl depending on the ViewStrategy's defined `moduleId`.

	@method loadViewFactory
	@param viewEngine {Object} ViewEngine instance
	@param options {Object} Configuration options (useShadowDOM etc.)
	**/
	loadViewFactory(viewEngine, options) {
		this.viewUrl = JadeConventionView.convertModuleIdToViewUrl(
			this.moduleId, this.isCompiled
		);

		return super.loadViewFactory(viewEngine, options);
	}

	/**
	Converts a given module ID into the conventional view URL

	@static
	@method convertModuleIdToViewUrl
	@param moduleId {String} Module ID to convert
	**/
	static convertModuleIdToViewUrl(moduleId, isCompiled) {
		return JadeView.parseViewUrl(moduleId + '.jade', isCompiled);
	}
}