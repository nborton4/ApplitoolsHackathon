class transactions{

    get tableTransactions() {return $('#transactionsTable') } 

    get tableheaderStatus() { return $('#status') }
    get tableheaderDate() { return $('#date') }
    get tableheaderDescription() { return $('#description') }
    get tableheaderCategory() { return $('#category') }
    get tableheaderAmount() { return $('#amount') }


    /**
     * Click on the "Amounts" header
     */
    sortAmounts(){
        this.tableTransactions.waitForDisplayed()

        this.tableheaderAmount.waitForDisplayed()
        this.tableheaderAmount.click()
        return this
    }

    /**
     * Verify that "Amounts" header is in ascending order
     */
    assertOrder(){
        var listAmounts = [] /* Array to hold the amount values */

        var valueAmount = this.tableTransactions.$$("tbody tr td:nth-child(5) span")  

        valueAmount.forEach(saveInList); //For each table cell, call this function to extract the curreny and save it in the array 
        function saveInList(item){
        let myAmount = item.getText().replace(/USD|,/gi,"")
        if (myAmount.substring(0,1) === '-'){
            listAmounts.push(parseInt('-'+myAmount.substring(2)))
        }
        else{listAmounts.push(parseFloat(myAmount.substring(2)))} 
        }

        try{
            for(var i=0; i < listAmounts.length; i++){  // Verify if every amount value is bigger than the following value 
                assert.ok(listAmounts[i] < listAmounts[i+1])
            }
        }catch{
            console.log(`Error: Unsorted column! Error Url ${browser.getUrl()}`)
        }
        return this
    }

}const instance = new transactions()
Object.freeze(instance)
module.exports = instance