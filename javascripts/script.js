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
portfolioImages[4] = "PopUp";
portfolioImages[5] = "Scrolling Vertical";
portfolioImages[6] = "Calculator";
portfolioImages[7] = "Simple Game";
portfolioImages[8] = "Clock/Timer";
portfolioImages[9] = "Contact Form";
portfolioImages[10] = "Data Entry Form";
portfolioImages[11] = "Test Form";

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

var categories = new Array();
categories[0] = "HTML5 Layouts";
categories[1] = "Photo Slideshows";
categories[2] = "Other JScript";
categories[3] = "Web Forms";

function replaceExample(placement)
{
    document.getElementById("description").innerHTML = portfolioDescriptions[placement];
    document.getElementById("portfolio_thumbnail").alt = portfolioImages[placement];
    document.getElementById("linkLabel").innerHTML = portfolioImages[placement];
    
    if(placement == 0||placement == 1||placement==2){
        document.getElementById("category").innerHTML = categories[0];
    } else if(placement == 3||placement == 4||placement==5){
        document.getElementById("category").innerHTML = categories[1];
    } else if(placement == 6||placement == 7||placement==8){
        document.getElementById("category").innerHTML = categories[2];
    } else {
        document.getElementById("category").innerHTML = categories[3];
    }
    
    return false;
}
