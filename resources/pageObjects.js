//ES6
//Sharing functions
class Selectors {
    openPage(url){
        browser.url(url);
    }
};
export default new Selectors();