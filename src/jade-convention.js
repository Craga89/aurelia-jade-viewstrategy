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
	constructor(viewModel, isCompiled) {
		this.moduleId = Origin.get(viewModel.constructor).moduleId;

		return super(
			JadeConventionView.convertModuleIdToViewUrl(this.moduleId),
			isCompiled
		);
	}

	/**
	Converts a given module ID into the conventional view URL

	@static
	@method convertModuleIdToViewUrl
	@param moduleId {String} Module ID to convert
	**/
	static convertModuleIdToViewUrl(moduleId, isCompiled) {
		return moduleId + '.jade';
	}
}