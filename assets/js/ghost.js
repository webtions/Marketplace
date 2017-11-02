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

function filterThemes(e, selected, $list, filterClass) {
    var $themeCards = $('.gh-theme-card');
    var unfilteredThemes = [];

    // return if the clicked target is active already
    if ($(e.target).hasClass('active')) {
        return;
    }

    // remove any filtered class that was set before
    $themeCards.each(function () {
        if ($(this).hasClass(filterClass)) {
            $(this).removeClass(filterClass);
        }
    });

    // remove any active class that was set before
    $list.each(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        }
    });

    // Give the clicked target active class
    $(e.target).addClass('active');

    // Return when 'all' selected, as we don't want to filter then
    if (selected.toLowerCase() === "all") {
        unfilteredThemes = [];
        $('.gh-no-themes-found').removeClass('active');
        return;
    }

    // Give the theme cards that was selected the filtered class
    // so they are not displayed
    $themeCards.each(function () {
        if (!$(this).hasClass(selected)) {
            $(this).addClass(filterClass);
        }
    });

    // Check if there's any theme card left, that is not filtered
    // We want to show a text instead of an empty page
    $themeCards.each(function () {
        if (!$(this).hasClass('filtered-category') && !$(this).hasClass('filtered-price')) {
            unfilteredThemes.push($(this));
        }
    });

    if (!unfilteredThemes.length) {
        $('.gh-no-themes-found').addClass('active');
    } else {
        $('.gh-no-themes-found').removeClass('active');
    }

    unfilteredThemes = [];

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

    // Theme Cards filtering
    $('.selected-tag').click(function (e) {
        var selectedTag = $(e.target.firstChild).text();
        var $tagList = $('.selected-tag');
        var filterClass = 'filtered-category';

        e.preventDefault();
        selectedTag = selectedTag.trim();

        filterThemes(e, selectedTag, $tagList, filterClass);
    });

    $('.selected-category').click(function (e) {
        var selectedCategory = $(e.target.firstChild).text();
        var $categoryList = $('.selected-category');
        var filterClass = 'filtered-price';

        e.preventDefault();
        selectedCategory = selectedCategory.toLowerCase().trim();

        filterThemes(e, selectedCategory, $categoryList, filterClass);
    });

    $('#clearFilters').click(function () {
        var $tagList = $('.selected-tag');
        var $categoryList = $('.selected-category');
        var $themeCards = $('.gh-theme-card');

        // remove any filtered class that was set before
        $themeCards.each(function () {
            $(this).removeClass('filtered-price');
            $(this).removeClass('filtered-category');
        });

        // remove any active class that was set before
        $tagList.each(function (i) {
            $(this).removeClass('active');
            if ($(this.firstChild).text() === 'All') {
                $(this).addClass('active');
            }
        });

        $categoryList.each(function (i) {
            $(this).removeClass('active');
            if ($(this.firstChild).text() === 'All') {
                $(this).addClass('active');
            }
        });

        $('.gh-no-themes-found').removeClass('active');
    })
});
