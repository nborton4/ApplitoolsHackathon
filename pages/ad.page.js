/**
 * PAGE MODEL FOR REQUIRED ELEMENTS IN https://demo.applitools.com/hackathon.html?showAd=true
 */
const { assertElement } = require ('../util/assert_utils')

class ad{
    get flashSale1() { return $("img[src='img/flashSale.gif']") }
    get flashSale2() { return $("img[src='img/flashSale2.gif']") }

    assertUIElements(){
        let assertItems = [
            this.flashSale1,
            this.flashSale2
        ];
        assertItems.map(item => assertElement(item));
        return this;
    }
        
    
}const instance = new ad()
Object.freeze(instance)
module.exports = instance
