/**
 * @File Name          : AccountSearchHelper.js
 * @Description        : 
 * @Author             : mmartinez@anivia.mx
 * @Group              : 
 * @Last Modified By   : mmartinez@anivia.mx
 * @Last Modified On   : 30/8/2019 10:02:23
 * @Modification Log   : 
 *==============================================================================
 * Ver         Date                     Author      		      Modification
 *==============================================================================
 * 1.0    30/8/2019 10:02:23   mmartinez@anivia.mx     Initial Version
**/
({
    // code in the helper is reusable by both
    // the controller.js and helper.js files
    handleSearch: function( component, searchTerm ) {
        var action = component.get( "c.searchAccounts" );
        action.setParams({
            searchTerm: searchTerm
        });
        action.setCallback( this, function( response ) {
            var event = $A.get( "e.c:AccountsLoaded" );
            event.setParams({
                "accounts": response.getReturnValue()
            });
            event.fire();
        });
        $A.enqueueAction( action );
    }
})
