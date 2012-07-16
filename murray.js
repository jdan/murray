IMG_SRC = chrome.extension.getURL('images/murray.jpg');

get_count = function() {
    return 10 * Math.floor(Math.random() * 4) + Math.floor(Math.random() * 8 + 1);
}

get_text = function() {
    options = ['No one will ever believe you...',
               'That reminds me...',
               'Too cool, man. Too cool.',
               'Hey this is neat',
               'I have no regrets',
               'Hey, did you ever check out that restaurant I told you about?',
               'Here\'s the thing, you just have to drive a lot faster, and if you don\'t get there, we\'re both fired',
               'Yeah, I think that\'s sort of the American way. And it\'s also the Polish way, it turns out.',
               'Garfield, maybe.',
               'Sh...',
               'Remember Danny - Two wrongs don\'t make a right but three rights make a left.',
               'I\'m going to give you a little advice. There\'s a force in the universe that makes things happen. And all you have to do is get in touch with it, stop thinking, let things happen, and be the ball'];
               
    return options[Math.floor(Math.random() * options.length)];
}

comment = function(text, like_count) {
    return '<li class="uiUfiComment ufiItem ufiItem">                                                                                \
        <div class="UIImageBlock clearfix uiUfiActorBlock">                                                                          \
            <a class="actorPic UIImageBlock_Image UIImageBlock_SMALL_Image" href="" tabindex="-1">                                   \
                <img class="uiProfilePhoto uiProfilePhotoMedium img" src=' + IMG_SRC + ' alt=""></a>                                 \
                <div class="commentContent UIImageBlock_Content UIImageBlock_SMALL_Content">                                         \
                    <a class="actorName" href="http://jordanscales.com">Bill Murray</a>                                              \
                    <span data-jsid="text" class="commentBody">                                                                      \
                        ' + text + '                                                                                                 \
                    </span>                                                                                                          \
                    <span></span>                                                                                                    \
                    <div class="commentActions fsm fwn fcg">                                                                         \
                        <a class="uiLinkSubtle">                                                                                     \
                            <abbr title="ages ago" data-utime="1337" class="timestamp livetimestamp">                                \
                                ages ago                                                                                             \
                            </abbr>                                                                                                  \
                        </a> ·                                                                                                       \
                        <span class="fsm fwn fcg">                                                                                   \
                            <button class="stat_elem as_link cmnt_like_link" type="submit" title="Like this comment">                \
                                <span class="default_message">                                                                       \
                                    Like                                                                                             \
                                </span>                                                                                              \
                            </button> ·                                                                                              \
                            <a data-hover="tooltip" data-tooltip-alignh="center" class="comment_like_button"                         \
                                rel="dialog" href="http://jordanscales.com">                                                         \
                                <i class="cmt_like_icon"></i>' + like_count + '                                                      \
                            </a>                                                                                                     \
                        </span>                                                                                                      \
                    </div>                                                                                                           \
                </div>                                                                                                               \
            </div>                                                                                                                   \
        </div>                                                                                                                       \
    </li>';
}

add_bill = function() {
    $('ul.commentList').each(function(i, v) {
        if (Math.random() < 0.05) {
            $(v).append(comment(get_text(), get_count()));
        }
    });
}

$(function() {
    t = 2000;
    for (i = 0; i < 8; i++) {
        setTimeout(add_bill, t);
        t *= 2;
    }
});
