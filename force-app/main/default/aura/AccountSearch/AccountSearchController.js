/**
 * @File Name          : AccountSearchController.js
 * @Description        : 
 * @Author             : mmartinez@anivia.mx
 * @Group              : 
 * @Last Modified By   : mmartinez@anivia.mx
 * @Last Modified On   : 30/8/2019 9:55:59
 * @Modification Log   : 
 *==============================================================================
 * Ver         Date                     Author      		      Modification
 *==============================================================================
 * 1.0    30/8/2019 9:55:59   mmartinez@anivia.mx     Initial Version
**/
({
    onInit: function( component, event, helper ) {
        // proactively search on component initialization
        var searchTerm = component.get( "v.searchTerm" );
        helper.handleSearch( component, searchTerm );
    },
    onSearchTermChange: function( component, event, helper ) {
        // search anytime the term changes in the input field
        var searchTerm = component.get( "v.searchTerm" );
        helper.handleSearch( component, searchTerm );
    }
})