import Selectors from "../resources/pageObjects";
import data from "../resources/data/data";
import googlePage from "../resources/pages/googlePage";
import focusPage from "../resources/pages/focusPage";

describe('Focus page script automated', () => {
    it('Ópen Google.com',  () => {
         Selectors.openPage(data.googleURL);
         googlePage.googleURLValidation();//verifying the page is opened the correct url
    });

    it('Search Focus Services page in google', () => {
         googlePage.googleBarSearch('Focus Services');
         googlePage.buttonSearch();
    });

    it('Verify if https://www.focusservices.com URL exists in the search: Click to focus link', () => {
         googlePage.verifyFocusLink();
     });

     it('Scroll Down to the bottom of the page, Verify the Now Hiring botton exists', () => {
        focusPage.closeDisclamerPopup();
        focusPage.verifyHiringButton();
     });
     it('Go to Locations Tab, locate North America Link. Do an assert on this link.', () => {
        focusPage.locationTab();
        focusPage.verifyLocationNorthAmerica();

     });
     it('Click on Central America link.', () => {
         focusPage.clickCentralAmericaLink();
      });
      it('Validate "El Salvador & Nicaragua" title is displayed on the page.', () => {
         focusPage.validateEsaNicaTitle();
      });
      it('Clic on Asia location: Verifying Bacolod City, Philippines exists.', () => {
         focusPage.asiaLinkLocation();
         focusPage.validateBacolodLocation();
      });

});