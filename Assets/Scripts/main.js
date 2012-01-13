require.config({ 
	paths: {
		jquery: 'Utils/jquery'
	}
});

require(['require'], function(require){
	
	if (/*check for id*/) {
		require('login');
	}
	
	if (/*check for id*/) {
		require('datepicker');
	}
	
	if (/*check for id*/) {
		require('confirm-delete');
	}
	
	if (/*check for id*/) {
		require('document-delete');
	}
	
	if (!!storm_sortable) {
		require('sortable');
	}
	
	if (!!storm_uploadify) {
		require('uploadify');
	}
	
	if (!!storm_ckeditor) {
		require('ckeditor');
	}
	
	if (!!storm_filter) {
		require('filter');
	}
	
});
