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
    
    $('.error').hide();
    
    
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

var portfolioImgSrc = new Array();
portfolioImgSrc[0] = "";
portfolioImgSrc[1] = "";
portfolioImgSrc[2] = "";
portfolioImgSrc[3] = "";
portfolioImgSrc[4] = "";
portfolioImgSrc[5] = "";
portfolioImgSrc[6] = "./images/CalcCapture.png";
portfolioImgSrc[7] = "";
portfolioImgSrc[8] = "";
portfolioImgSrc[9] = "";
portfolioImgSrc[10] = "";
portfolioImgSrc[11] = "";

var portfolioDescriptions = new Array();
portfolioDescriptions[0] = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur vehicula ligula, et pellentesque nunc blandit eleifend. Ut aliquet purus quis facilisis hendrerit. Aliquam faucibus, augue vel adipiscing pellentesque, dui dui pellentesque libero, vel iaculis nulla massa vestibulum libero. Maecenas ultricies bibendum purus nec aliquet. Praesent vitae auctor risus. Aenean sit amet ornare velit, quis bibendum diam. Mauris sagittis tempus luctus.";
portfolioDescriptions[1] = "Duis auctor metus ut iaculis dapibus. Vivamus varius sapien quis enim gravida congue. Sed ornare suscipit neque eu interdum. Integer faucibus eros at gravida varius. Etiam posuere odio eget arcu hendrerit facilisis. Sed et condimentum justo, sed ultrices dolor. Mauris aliquet lacinia eros eu lobortis. Vivamus faucibus bibendum vulputate. Vestibulum eu varius lorem.";
portfolioDescriptions[2] = "Fusce vel imperdiet metus. Vestibulum tristique felis nec suscipit commodo. Maecenas consequat porta enim sit amet condimentum. Nulla vitae felis dictum, gravida metus nec, luctus tortor. Ut nisi dui, mattis vel laoreet sed, blandit eu dui. Sed sodales nulla nibh, non viverra odio volutpat a. Fusce dolor sapien, ornare sed tempor nec, euismod eu ligula.";
portfolioDescriptions[3] = "Donec eget libero auctor, venenatis odio et, iaculis lectus. Donec sed eleifend erat. Vivamus tincidunt odio quis nibh egestas, eget placerat dui feugiat. Phasellus convallis justo egestas egestas tincidunt. Fusce venenatis gravida est, nec cursus diam vulputate ut. Sed tempor tortor in consequat bibendum. Curabitur mollis mi vel felis mollis pretium.";
portfolioDescriptions[4] = "Duis consectetur leo ut sapien tempor consequat. Ut nec lacus vitae orci interdum interdum. Aliquam libero velit, fringilla in vehicula vitae, iaculis ut tellus. Ut sit amet lobortis tortor. Suspendisse nec eros lobortis, mattis leo a, sagittis orci. Maecenas vitae mattis nisi, ac mattis est. Morbi ut libero eleifend, sagittis felis non, gravida lacus. In sit amet ante quis nisl rutrum ornare.";
portfolioDescriptions[5] = "Pellentesque vitae tincidunt dui. Curabitur vel velit dolor. Vestibulum sagittis nisl quis diam convallis, id accumsan leo dapibus. Sed nec elit sapien. Praesent ullamcorper erat quis erat bibendum, et suscipit dui consequat. Nulla commodo nisi ultricies laoreet cursus.";
portfolioDescriptions[6] = "A simple calculator site using JavaScript and HTML5's built in Math functionality. The calculator is expandable to a scientific calculator by CSS replacement scripts.";
portfolioDescriptions[7] = "Quisque sit amet lacus ipsum. Donec vel semper ante, id dictum enim. Mauris at erat vitae sapien sagittis ultrices. Sed eget vehicula quam. Nulla eleifend ornare scelerisque. Vivamus non dapibus dui.";
portfolioDescriptions[8] = "Quisque eget laoreet nisl. Vivamus condimentum faucibus est quis posuere. Donec in justo ullamcorper, condimentum arcu vel, scelerisque velit.";
portfolioDescriptions[9] = "Aliquam mattis, dolor at vulputate posuere, metus augue laoreet risus, a blandit leo mauris et metus. Pellentesque eu hendrerit risus. Quisque ut fermentum felis. Nulla sagittis nisl augue, eget elementum ligula pretium quis.";
portfolioDescriptions[10] = "Maecenas faucibus sapien quis felis volutpat commodo. Curabitur sodales est sit amet tortor vulputate, sit amet ornare tellus dictum. Duis pulvinar imperdiet elit ac venenatis. Donec eget tincidunt eros, in vestibulum nibh. Pellentesque vestibulum velit luctus nibh congue, eu interdum est vestibulum. Suspendisse nec leo risus.";
portfolioDescriptions[11] = "Integer feugiat, nulla sit amet faucibus consequat, metus eros scelerisque ligula, a vehicula mauris neque in est. Praesent rhoncus tempus felis. Fusce vestibulum urna quis ipsum aliquam pellentesque.";

var categories = new Array();
categories[0] = "HTML5/CSS Layouts";
categories[1] = "Photo Slideshows";
categories[2] = "Other JScript";
categories[3] = "Web Forms";

function replaceExample(placement)
{
    document.getElementById("description").innerHTML = portfolioDescriptions[placement];
    document.getElementById("portfolio_thumbnail").alt = portfolioImages[placement];
    document.getElementById("linkLabel").innerHTML = portfolioImages[placement];
    document.getElementById("portfolio_thumbnail").src = portfolioImgSrc[placement];
    
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


