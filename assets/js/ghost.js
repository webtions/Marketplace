'use strict';

// TODO: Clean up this JANKfest :)

// Dropdown Menus
function initDropdowns(allDropdowns) {
    allDropdowns.children('.gh-drop-trigger').on('click', function (e) {
        e.stopPropagation();

        var thisTrigger = $(this),
            thisDropdown = thisTrigger.parent();

        if (thisDropdown.hasClass('active')) {
            thisDropdown.removeClass('active');
            $(document).off('click');
        } else {
            allDropdowns.removeClass('active');
            thisDropdown.addClass('active');
            $(document).on('click', function () {
                allDropdowns.removeClass('active');
            });
        }
    });
}

// DO THE THINGS
$(document).ready(function () {
    var $themeHoverDiv = null;

    // Dropdown Menu Triggers
    initDropdowns($('.gh-more-drop'));

    // Mobile Sidebar Page Nav Trigger
    $('.gh-page-title').on('click', function (e) {
        e.stopPropagation();

        if ($('.gh-page-sidebar').hasClass('gh-page-sidebar-open')) {
            $('.gh-page-sidebar').removeClass('gh-page-sidebar-open');
            $(document).off('click');
        } else {
            $('.gh-page-sidebar').addClass('gh-page-sidebar-open');
            $(document).on('click', function () {
                $('.gh-page-sidebar').removeClass('gh-page-sidebar-open');
            });
        }
    });

    // Mobile Menu Trigger
    $('.gh-nav-burger').click(function () {
        $('.gh-mobilehead').toggleClass('gh-mobilehead-open');
    });

    // Hover state on Theme Card
    $('.gh-theme-card-image-wraper').mouseenter(function (e) {
        $themeHoverDiv = $(e.target.nextElementSibling).addClass('active');
    });

    $('.gh-theme-card-image-wraper').mouseleave(function (e) {
        $themeHoverDiv.removeClass('active');
        $themeHoverDiv = null;
    });

    // Theme Cards filtering
    $('.selected-tag').click(function (e) {
        var selectedTag;
        var selection = $(e.target).text();
        var $themeCards = $('.gh-theme-card');
        e.preventDefault();
        selectedTag = selection;

        $themeCards.each(function () {
            if ($(this).hasClass('filtered-category')) {
                $(this).removeClass('filtered-category');
            }
        });

        if (selectedTag === "All") {
            return;
        }

        $themeCards.each(function () {
            if (!$(this).hasClass(selectedTag)) {
                $(this).addClass('filtered-category');
            }
        });
    });

    $('.selected-category').click(function (e) {
        var selectedCategory;
        var selection = $(e.target).text();
        var $themeCards = $('.gh-theme-card');
        e.preventDefault();
        selectedCategory = selection.toLowerCase();

        $themeCards.each(function () {
            if ($(this).hasClass('filtered-price')) {
                $(this).removeClass('filtered-price');

            }
        });

        if (selectedCategory === "all") {
            return;
        }

        $themeCards.each(function () {
            if (!$(this).hasClass(selectedCategory)) {
                $(this).addClass('filtered-price');
            }
        });
    });
});
