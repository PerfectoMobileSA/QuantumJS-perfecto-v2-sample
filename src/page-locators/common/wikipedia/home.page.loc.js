module.exports = {
    selectors: {
        loadCheck: '[title*=Wikipedia1]',
        searchwikiField: "#searchInput",
        searchwikiButton:  '//*[@type=\"submit\"]',
        firstHeading: '#firstHeading',
        homewikiLink : '//*[@title=\"Visit the main page\"]',
        esLink: '#js-link-box-es',
        enLink : '#js-link-box-en',
        discussionLink: '//*[@rel=\"discussion\"]',
        portadaLink: '//*[text()=\'Portada\']',
        donateLink: "//*[text()='Donate to Wikipedia']",
    }
}

