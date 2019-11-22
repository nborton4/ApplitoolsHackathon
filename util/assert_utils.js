/**
 * CUSTOM ASSERT METHOD TO BE CALLED IN PAGE MODELS. THE CAN ASSERT ELEMENT VISIBILITY, ELEMENT TEXT, ELEMENT PLACE
 * HOLDER, AND CHECKBOX STATUS
 */
const assert = require('assert')

const assertElement = (element) => {
    const myElement = element
    try{    
        assert.ok(myElement.isDisplayed())
    }catch{
        console.log(`Error: ${myElement.selector} is not visible! Error Url: ${browser.getUrl()}`)
    }
}

const assertText = (element, text) => {
    const myElement = element
    const myText = text
    try{
        assert.ok(myElement.getText() === myText)
    }catch{
        console.log(`Error: ${myElement.selector} is showing the wrong text! Error Url: ${browser.getUrl()}`)
    }
}

const assertPlaceholder = (element, placeholder) => {
    const myElement = element
    const myPlaceholder = placeholder
    try{
        assert.ok(myElement.getAttribute("placeholder") === myPlaceholder)
    }catch{
        console.log(`Error: ${myElement.selector} is showing the wrong placehodler! Error Url: ${browser.getUrl()}`)
    }
}

const assertCheckboxStatus = (element, status) => {
    const myElement = element
    const myStatus = status
    try{
        assert.ok(myElement.isSelected
            () === myStatus)
    }catch{
        console.log(`Error: ${myElement.selector} is checked! Error Url: ${browser.getUrl()} `)
    }
}
module.exports = { assertElement , assertText, assertPlaceholder, assertCheckboxStatus}