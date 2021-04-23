describe('Focus page script automated', () => {
    it('Go to Google.com',  () => {
        browser.url('https://www.google.com/');
        browser.pause(3000);
        expect(browser).toHaveUrl("https://www.google.com/") //verifying the page is opened the correct url
    });

    it('Search Focus Services page in google', () => {
       const searchGoogle = $('input[name="q"]');
       searchGoogle.waitForExist(5000);
       searchGoogle.setValue('Focus Services');
       const btnSearch =  $('input[name="btnK"]');
       btnSearch.click();
       browser.pause(3000);
    });

    it('Verify if https://www.focusservices.com URL exists in the search:¨Click to focus link', () => {
        const focusLink = $('a[href="https://www.focusservices.com/"]');// focus link selector
        focusLink.waitForExist(5000); //verifying if the focus link exist into the page
        focusLink.waitForEnabled(5000); //wait for display into the page
        focusLink.click(); //click on the focus link
        browser.pause(3000);
     });

     it('Scroll Down to the bottom of the page, Verify the Now Hiring botton exists', () => {
        const focusLink = $('a[href="https://www.focusservices.com/"]');// focus link selector
        focusLink.waitForExist(5000); //verifying if the focus link exist into the page
        focusLink.waitForEnabled(5000); //wait for display into the page
        focusLink.click(); //click on the focus link
        browser.pause(3000);
     });
});