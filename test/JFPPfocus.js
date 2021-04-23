describe('Focus page script automated', () => {
    it('Ópen Google.com',  () => {
        browser.url('https://www.google.com/');
        browser.pause(3000);
        expect(browser).toHaveUrl("https://www.google.com/") //verifying the page is opened the correct url
    });

    it('Search Focus Services page in google', () => {
       const searchGoogle = $('input[name="q"]');
       searchGoogle.waitForExist(5000);
       searchGoogle.setValue('Focus Services');
       searchGoogle.click();
       const btnSearch =  $('input[name="btnK"]');
       btnSearch.waitForExist(5000);
       btnSearch.click();
       browser.pause(3000);
    });

    it('Verify if https://www.focusservices.com URL exists in the search: Click to focus link', () => {
        const focusLink = $('a[href="https://www.focusservices.com/"]');// focus link selector
        focusLink.waitForExist(5000); //verifying if the focus link exist into the page
        focusLink.waitForEnabled(5000); //wait for display into the page
        focusLink.click(); //click on the focus link
        browser.pause(3000);
     });

     it('Scroll Down to the bottom of the page, Verify the Now Hiring botton exists', () => {
        const popupDisclamer = $('//a[@class="spu-close spu-close-popup spu-close-top_right"]');
        browser.pause(3000);
        if (popupDisclamer){ // if the window have a popup disclamer - action close
               popupDisclamer.waitForExist(5000);
               popupDisclamer.click();
        } 
        browser.pause(3000);
        const nowHiringButton = $('//span[text()="Now Hiring!"]');
        nowHiringButton.waitForExist(5000);
        nowHiringButton.scrollIntoView(); //scroll down to the view
        browser.pause(3000);
     });
     it('Go to Locations Tab, locate North America Link. Do an assert on this link.', () => {
        const locations = $('//span[text()="Locations"]');
        locations.waitForExist(3000);
        locations.scrollIntoView();
        locations.click();
        browser.pause(3000);
        const northAmericanLink = $('//a[@href="#north-america"]');
        northAmericanLink.scrollIntoView();
        expect(northAmericanLink).toExist(); //assert northamerican link exists on this page
        browser.pause(3000);
     });
     it('Click on Central America link.', () => {
         const centralAmericaLink = $('//span[text()="Central America"]');
         centralAmericaLink.waitForExist(5000);
         centralAmericaLink.waitForEnabled(5000);
         centralAmericaLink.click();
         browser.pause(3000);
      });
      it('Validate "El Salvador & Nicaragua" title is displayed on the page.', () => {
         const esaNicaTitle = $('//h2[text()="El Salvador & Nicaragua"]');
         expect(esaNicaTitle).toBeDisplayed //validate the title is displayed´
         console.log('Title found',esaNicaTitle);
         browser.pause(3000);
      });
      it('Clic on Asia location: Verifying Bacolod City, Philippines exists.', () => {
         const asiaLink = $('//span[text()="Asia"]');
         asiaLink.waitForExist(5000)
         asiaLink.waitForEnabled(5000);
         asiaLink.click();
         const bacolodLocator = $('//b[text()="Bacolod City, Philippines"]');
         bacolodLocator.waitForExist(5000);
         bacolodLocator.getText();
         console.log('text found', bacolodLocator);
         browser.pause(3000);
      });

});