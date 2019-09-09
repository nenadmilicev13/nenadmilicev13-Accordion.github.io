const $ = jQuery.noConflict();

'use strict';
const Accordion = {
	/*-------------------------------------------------------------------------------
		# Initialize
	-------------------------------------------------------------------------------*/
	init: function () {
        var accordionItem = $('.js-accordion-item');
        var accordionItemContent = $('.js-content');

        accordionItem.on('click',function(){
            var $this = $(this);
            var currentContent = $this.find(accordionItemContent);

            currentContent.slideToggle();
            accordionItemContent.not(currentContent).slideUp();
        })
	}
};

export default Accordion;