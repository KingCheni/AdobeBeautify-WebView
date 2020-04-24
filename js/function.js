// $(document).ready(function() {
//     (function abUiInitialize() {
//         $.ajax({
//             url: '../config/setting/config.json',
//             dataType: 'json',
//             async: false,
//             success: function(res) {
//                 var config = res;
//                 console.log(config);

//             }
//         });
//     })()
// })
var configJson = null;

function getSetting(res) {
    configJson = res;
    if (configJson.language.file === "en.json") {
        $(".ab-side-nav li").css("letter-spacing", "0");
    }
    document.write("<script type='text/javascript' src='../config/language/" + configJson.language.file + "?cb=getLanguage'></script>");

}

function getLanguage(res) {
    $(".ab-nav-home").html("<i></i>" + res.content.navItem.home);
    $(".ab-nav-store").html("<i></i>" + res.content.navItem.store);
    $(".ab-nav-diy").html("<i></i>" + res.content.navItem.diy);
    $(".ab-nav-plugin").html("<i></i>" + res.content.navItem.plugin);
    $(".ab-nav-setting").html("<i></i>" + res.content.navItem.setting);
    $(".ab-nav-about").html("<i></i>" + res.content.navItem.about);

}
$(document).ready(function() {
    (function navAddEvent() {
        var navItem = $(".ab-side-nav ul li");
        /*  var navHome = $(".ab-nav-home");
         var navStore = $(".ab-nav-store");
         var navDiy = $(".ab-nav-diy");
         var navPlugin = $(".ab-nav-plugin");
         var navSetting = $(".ab-nav-setting");
         var navAbout = $(".ab-nav-about"); */
        navItem.on('click', function() {
            navItem.attr('data-checked', 'false');
            $(this).attr('data-checked', 'true');
        });


    })()
})