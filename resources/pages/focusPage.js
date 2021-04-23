
class FocusAutomation{
    get popupDisclamer(){
        return $('//a[@class="spu-close spu-close-popup spu-close-top_right"]');
    }
    get nowHiringButton(){
        return $('//span[text()="Now Hiring!"]');
    }
    get locations(){
        return  $('//span[text()="Locations"]');
    }
    get centralAmericaLink(){
        return $('//span[text()="Central America"]');
    }
    get northAmericanLink(){
        return $('//a[@href="#north-america"]');
    }
    get esaNicaTitle(){
        return $('//h2[text()="El Salvador & Nicaragua"]');
    }
    get asiaLink(){
        return $('//span[text()="Asia"]');
    }
    get bacolodLocator(){
        return $('//b[text()="Bacolod City, Philippines"]');
    }
    closeDisclamerPopup(){
        browser.pause(3000);
        if (this.popupDisclamer){ // if the window have a popup disclamer - action close
               this.popupDisclamer.waitForExist(5000);
               this.popupDisclamer.click();
        } 
        browser.pause(3000);
    }
    verifyHiringButton(){
        this.nowHiringButton.waitForExist(5000);
        this.nowHiringButton.scrollIntoView(); //scroll down to the view
        browser.pause(3000);
    }
    locationTab(){
        this.locations.waitForExist(3000);
        this.locations.scrollIntoView();
        this.locations.click();
        browser.pause(3000);
    }
    verifyLocationNorthAmerica(){
        this.northAmericanLink.scrollIntoView();
        expect(this.northAmericanLink).toExist(); //assert northamerican link exists on this page
        browser.pause(3000); 
    }
    clickCentralAmericaLink(){
        this.centralAmericaLink.waitForExist(5000);
        this.centralAmericaLink.waitForEnabled(5000);
        this.centralAmericaLink.click();
        browser.pause(3000);
    }
    validateEsaNicaTitle(){
        expect(this.esaNicaTitle).toBeDisplayed //validate the title is displayed´
        console.log('Title found',this.esaNicaTitle);
        browser.pause(3000);
    }
    asiaLinkLocation(){
        this.asiaLink.waitForExist(5000)
        this.asiaLink.waitForEnabled(5000);
        this.asiaLink.click(); 
    }
    validateBacolodLocation(){
        this.bacolodLocator.waitForExist(5000);
        this.bacolodLocator.getText();
        console.log('text found', this.bacolodLocator);
        browser.pause(3000);
    }
}
        
export default new FocusAutomation();