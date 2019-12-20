$(document).ready(function() { 
    var imgAds = $('img[src$="https://2.bp.blogspot.com/-tUmalsRpcd4/WZF7crZql8I/AAAAAAAABv4/71livjTPWzQpQbtNXd6PAGFzjmZ2sXAdgCLcBGAs/s1600/adblock.png"]');
    setTimeout(() => { 
        imgAds.parent().parent().remove();
        imgAds = $('img[src$="https://2.bp.blogspot.com/-tUmalsRpcd4/WZF7crZql8I/AAAAAAAABv4/71livjTPWzQpQbtNXd6PAGFzjmZ2sXAdgCLcBGAs/s1600/adblock.png"]');
        imgAds.parent().parent().remove();
        $('#main-content').show();
        $('.navbar').show();
        $('.navigation').show();
        $('#container').show();
    }, 10000); 
});
