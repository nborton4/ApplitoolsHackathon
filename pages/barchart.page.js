/**
 * PAGE MODEL FOR CANVAS PAGE. IT EXECUTE THE JAVASCRIPT RESPONSIBLE FOR DISPLAYING THE CANVAS VALUES
 */

class expenses{
    get showExpensesChart() { return $('#showExpensesChart') }
    get chartCanvas() { return $('canvas') }
    get showNextYearData() { return $('#addDataset') }
    get myScript() {return $('.element-wrapper script')}

    clickViewExpensesChart(){
        this.showExpensesChart.waitForDisplayed()
        this.showExpensesChart.click()
        expect(this.chartCanvas.isDisplayed())
        return this
    }

    validateAvailableMonthsYears(){
        var myMONTHS = browser.execute("return window.barChartData.labels")
        expect(myMONTHS.includes("January"))
        expect(myMONTHS.includes("February"))
        expect(myMONTHS.includes("March"))
        expect(myMONTHS.includes("April"))
        expect(myMONTHS.includes("May"))
        expect(myMONTHS.includes("June"))
        expect(myMONTHS.includes("July"))

        var myYEARS = ["2017", "2018"]
        for(var i=0;i<2;i++){
            var yearLabel = browser.execute(`return window.barChartData.datasets[${i}].label`)
            expect(myYEARS.includes(yearLabel))
        }
        return this;
    }

    validateBarchartData2017(exp1, exp2, exp3, exp4, exp5, exp6, exp7){
        var myData = browser.execute("return window.barChartData.datasets[0].data")
        expect(myData.includes(exp1))
        expect(myData.includes(exp2))
        expect(myData.includes(exp3))
        expect(myData.includes(exp4))
        expect(myData.includes(exp5))
        expect(myData.includes(exp6))
        expect(myData.includes(exp7))
        return this;
    }    
    
    validateBarchartData2018(exp1, exp2, exp3, exp4, exp5, exp6, exp7){
        var myData = browser.execute("return window.barChartData.datasets[1].data")
        expect(myData.includes(exp1))
        expect(myData.includes(exp2))
        expect(myData.includes(exp3))
        expect(myData.includes(exp4))
        expect(myData.includes(exp5))
        expect(myData.includes(exp6))
        expect(myData.includes(exp7))
        return this;
    }    

    clickShowNextYearData(){
        this.showNextYearData.click()
        expect(this.chartCanvas.isDisplayed())
        return this;
    }

    validateBartcharData2019(exp1, exp2, exp3, exp4, exp5, exp6, exp7){
        var myData = browser.execute("return window.barChartData.datasets[2].data")
        expect(myData.includes(exp1))
        expect(myData.includes(exp2))
        expect(myData.includes(exp3))
        expect(myData.includes(exp4))
        expect(myData.includes(exp5))
        expect(myData.includes(exp6))
        expect(myData.includes(exp7))
        return this;
    }  

}const instance = new expenses()
Object.freeze(instance)
module.exports = instance