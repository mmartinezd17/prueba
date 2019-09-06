/**
 * @File Name          : AccountMapController.js
 * @Description        : 
 * @Author             : mmartinez@anivia.mx
 * @Group              : 
 * @Last Modified By   : mmartinez@anivia.mx
 * @Last Modified On   : 30/8/2019 12:52:51
 * @Modification Log   : 
 *==============================================================================
 * Ver         Date                     Author      		      Modification
 *==============================================================================
 * 1.0    30/8/2019 12:52:51   mmartinez@anivia.mx     Initial Version
**/
({
    onAccountsLoaded: function( component, event, helper ) {
        var mapMarkers = [];
        var accounts = event.getParam( 'accounts' );
        for ( var i = 0; i < accounts.length; i++ ) {
            var account = accounts[i];
            var marker = {
                'location': {
                    'Street': account.BillingStreet,
                    'City': account.BillingCity,
                    'PostalCode': account.BillingPostalCode
                },
                'title': account.Name,
                'description': (
                    'Phone: ' + account.Phone +
                    '<br/>' +
                    'Website: ' + account.Website
                ),
                'icon': 'standard:location'
            };
            mapMarkers.push( marker );
        }
        component.set( 'v.mapMarkers', mapMarkers );
    }
})