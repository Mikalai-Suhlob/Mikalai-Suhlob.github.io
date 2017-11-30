'use strict';

var $menu_item_focus;
var $menu_item = $('.main-nav a');

function focusFirstItem () {
    $('.main-nav a:first-child').focus();
}

function initMenuNavigation () {
    $(document).keydown(function (e) {
        $menu_item_focus = $('.main-nav a:focus');
        if (!$menu_item_focus.length) {
            focusFirstItem();
        }
        if (e.keyCode === 40) {
            $menu_item_focus.next().focus();
            if ($(e.target).index() == $menu_item.length - 1) {
                $menu_item.first().focus();
            }
        }
        if (e.keyCode === 38) {
            $menu_item_focus.prev().focus();
            if ($(e.target).index() == 0) {
                $menu_item.last().focus();
            }
        }
    });
}

$(function () {
    focusFirstItem();
    initMenuNavigation();
});