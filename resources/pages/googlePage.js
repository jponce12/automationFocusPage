
class GoogleAutomation {

    get searchGoogle(){
        return $('input[name="q"]');
    }
    get btnSearch(){
        return $('input[name="btnK"]');
    }
    get focusLink(){
        return $('a[href="https://www.focusservices.com/"]');// focus link selector
    }
    googleURLValidation(){
        expect(browser).toHaveUrl("https://www.google.com/");
        browser.pause(3000);
    }
    googleBarSearch(name){
        this.searchGoogle.waitForExist(5000);
        this.searchGoogle.setValue(name);
        browser.pause(1000);
        browser.keys('\uE00C');
        browser.pause(3000);
        this.searchGoogle.click();
    }
    buttonSearch(){
        this.btnSearch.waitForExist(5000);
        this.btnSearch.waitForEnabled(5000);
        this.btnSearch.click();
        browser.pause(3000);
    }
    verifyFocusLink(){
        this.focusLink.waitForExist(5000); //verifying if the focus link exist into the page
        this.focusLink.waitForEnabled(5000); //wait for display into the page
        this.focusLink.click(); //click on the focus link
        browser.pause(3000);
    }
}   
export default new GoogleAutomation