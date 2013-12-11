var portfolioImages = new Array();
portfolioImages[0] = "";
portfolioImages[1] = "";
portfolioImages[2] = "";
portfolioImages[3] = "";
portfolioImages[4] = "";
portfolioImages[5] = "";
portfolioImages[6] = "";
portfolioImages[7] = "";
portfolioImages[8] = "";
portfolioImages[9] = "";
portfolioImages[10] = "";
portfolioImages[11] = "";
portfolioImages[12] = "";
portfolioImages[13] = "";
portfolioImages[14] = "";

var portfolioDescriptions = new Array();
portfolioDescriptions[0] = "Description 1";
portfolioDescriptions[1] = "Description 2";
portfolioDescriptions[2] = "";
portfolioDescriptions[3] = "";
portfolioDescriptions[4] = "";
portfolioDescriptions[5] = "";
portfolioDescriptions[6] = "";
portfolioDescriptions[7] = "";
portfolioDescriptions[8] = "";
portfolioDescriptions[9] = "";
portfolioDescriptions[10] = "";
portfolioDescriptions[11] = "";
portfolioDescriptions[12] = "";
portfolioDescriptions[13] = "";
portfolioDescriptions[14] = "";

function replaceExample(placement)
{
    document.getElementById("description").innerHTML = portfolioDescriptions[placement];
    document.getElementById("portfolio_thumbnail").alt = portfolioImages[placement];
    
    return false;
}