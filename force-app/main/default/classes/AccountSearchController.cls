/**
 * @File Name          : AccountSearchController.cls
 * @Description        : 
 * @Author             : mmartinez@anivia.mx
 * @Group              : 
 * @Last Modified By   : mmartinez@anivia.mx
 * @Last Modified On   : 29/8/2019 16:12:31
 * @Modification Log   : 
 *==============================================================================
 * Ver         Date                     Author      		      Modification
 *==============================================================================
 * 1.0    29/8/2019 16:12:31   mmartinez@anivia.mx     Initial Version
**/
public with sharing class AccountSearchController {
    @AuraEnabled
    public static List<Account> searchAccounts( String searchTerm ) {
        List<Account> accounts = new List<Account>();
        if ( String.isNotBlank( searchTerm ) ) {
            List<List<SObject>> searchResults = [
                FIND :searchTerm
                RETURNING Account(
                    Id, Name, Phone, Website,
                    BillingStreet, BillingCity,
                    BillingState, BillingPostalCode
                    ORDER BY Name
                    LIMIT 10
                )
            ];
            accounts = searchResults[0];
        }
        return accounts;
    }
}