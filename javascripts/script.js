$(function() {
    $('#education').hide();
    $('#experience').hide();
    $('#cs_skills').hide();
    $('#honors').hide();
 
    $('#educationHeader').click(function(){
        $('#education').show();
        $('#experience').hide();
        $('#cs_skills').hide();
        $('#honors').hide();
    });
 
    $('#experienceHeader').click(function(){
        $('#education').hide();
        $('#experience').show();
        $('#cs_skills').hide();
        $('#honors').hide();
    });
     
    $('#csHeader').click(function(){
        $('#education').hide();
        $('#experience').hide();
        $('#cs_skills').show();
        $('#honors').hide();
    });
     
    $('#honorsHeader').click(function(){
        $('#education').hide();
        $('#experience').hide();
        $('#cs_skills').hide();
        $('#honors').show();
    });
    
});

var portfolioImages = new Array();
portfolioImages[0] = "3 Column Layout";
portfolioImages[1] = "2 Column Layout";
portfolioImages[2] = "Block Layout";
portfolioImages[3] = "Auto Updating";
portfolioImages[4] = "Click Through with PopUp";
portfolioImages[5] = "Scrolling Vertical";
portfolioImages[6] = "Calculator";
portfolioImages[7] = "Simple Game";
portfolioImages[8] = "Clock/Timer";
portfolioImages[9] = "Contact Form";
portfolioImages[10] = "Data Entry Form";
portfolioImages[11] = "Test Form";
portfolioImages[12] = "Art Sales Site";
portfolioImages[13] = "Webcomic";
portfolioImages[14] = "Newsletter";

var portfolioDescriptions = new Array();
portfolioDescriptions[0] = "Description 1";
portfolioDescriptions[1] = "Description 2";
portfolioDescriptions[2] = "Description 3";
portfolioDescriptions[3] = "Description 4";
portfolioDescriptions[4] = "Description 5";
portfolioDescriptions[5] = "Description 6";
portfolioDescriptions[6] = "Description 7";
portfolioDescriptions[7] = "Description 8";
portfolioDescriptions[8] = "Description 9";
portfolioDescriptions[9] = "Description 10";
portfolioDescriptions[10] = "Description 11";
portfolioDescriptions[11] = "Description 12";
portfolioDescriptions[12] = "Description 13";
portfolioDescriptions[13] = "Description 14";
portfolioDescriptions[14] = "Description 15";

function replaceExample(placement)
{
    document.getElementById("description").innerHTML = portfolioDescriptions[placement];
    document.getElementById("portfolio_thumbnail").alt = portfolioImages[placement];
    
    return false;
}
