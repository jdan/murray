IMG_SRC = chrome.extension.getURL('images/murray.jpg');
console.log(IMG_SRC);
IMG_TAG = $('<img></img>').attr('src', IMG_SRC);

comment = '<li class="uiUfiComment ufiItem ufiItem">                                                                             \
    <div class="UIImageBlock clearfix uiUfiActorBlock">                                                                          \
        <a class="actorPic UIImageBlock_Image UIImageBlock_SMALL_Image" href="" tabindex="-1">                                   \
            <img class="uiProfilePhoto uiProfilePhotoMedium img" src=' + IMG_SRC + ' alt=""></a>                                                     \
            <div class="commentContent UIImageBlock_Content UIImageBlock_SMALL_Content">                                         \
                <a class="actorName" href="">                                                                                    \
                    Bill Murray                                                                                                  \
                </a>                                                                                                             \
                <span data-jsid="text" class="commentBody">                                                                      \
                    No one will ever believe you.                                                                           \
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
                        <a data-hover="tooltip" data-tooltip-alignh="center" class="comment_like_button" rel="dialog" href="">   \
                            <i class="cmt_like_icon"></i>27                                                                     \
                        </a>                                                                                                     \
                    </span>                                                                                                      \
                </div>                                                                                                           \
            </div>                                                                                                               \
        </div>                                                                                                                   \
    </div>                                                                                                                       \
</li>';

$(function() {
   $('body').append('<p>Hello, World!</p>');
   $('ul.commentList').each(function(i, v) {
      $(v).append(comment); 
   });
});
