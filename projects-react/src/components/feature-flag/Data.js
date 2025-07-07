

const apiResponse = {
    showLightAndDarkMode: true,
    showTicTacBoard: true,
    showRandomColorGenerator: true,
    showAccordian: true,
    showStarRating: true,
    showTabs: true,
}

function featureFlagsDataServiceCall(){

    return new Promise((resolve, reject) => {
        if(apiResponse) setTimeout(resolve(apiResponse), 500);
        else reject('Some error occured please try again!')
    })
}

export default featureFlagsDataServiceCall;