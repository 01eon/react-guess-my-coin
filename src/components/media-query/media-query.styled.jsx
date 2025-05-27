const resolution = {
    standardPhone: '360px',
    commonPhone: '390px',
    hdPhone: '720px',
    fhdPhone: '1080px',
    tablet: '1280px',
    budgetLaptop: '1366px',
    midSizedDesktop: '1440px',
    fhdLaptop: '1920px',
}

export const media = Object.keys(resolution).reduce((acc, label) => {
    acc[label] = (...args) => `
        @media (min-width: ${resolution[label]}){
            ${args}
        }
    `;
    return acc;
}, {})