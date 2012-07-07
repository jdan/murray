IMG_SRC = chrome.extension.getURL('images/murray.jpg');
IMG_TAG = $('<img></img>').attr('src', IMG_SRC);

$(function() {
   $('body').append('<p>Hello, World!</p>');
});