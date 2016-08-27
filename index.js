var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var button = buttons.ActionButton({
  id : "on-click",
  label : "Click-Here:)",
  icon: {
        16: './icon-16.png',
        32: './icon-32.png',
        64: './icon-64.png',
    },
    onClick : visitSite
});
function visitSite(state){
  tabs.open("http://www.google.com/");
  tabs.open("http://www.facebook.com/");
  tabs.open("http://www.youtube.com/");
  tabs.open("http://www.linkedin.com/");
  tabs.open("http://www.github.com/");


}