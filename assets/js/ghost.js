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

    // // FAQ Sections
    // // TODO: This aint very DRY
    // $('.gh-faq-link').click(function (e) {
    //     e.preventDefault();
    //     $('.gh-faq-link').removeClass('gh-faq-link-active');
    //     $(this).addClass('gh-faq-link-active');
    //     $('.gh-faq-section').removeClass('gh-faq-section-active');
    // });
    // $('.gh-faq-link-top10').click(function () {
    //     $('.gh-faq-popular').addClass('gh-faq-section-active');
    // });
    // $('.gh-faq-link-gettingstarted').click(function () {
    //     $('.gh-faq-gettingstarted').addClass('gh-faq-section-active');
    // });
    // $('.gh-faq-link-securityprivacy').click(function () {
    //     $('.gh-faq-securityprivacy').addClass('gh-faq-section-active');
    // });
    // $('.gh-faq-link-billing').click(function () {
    //     $('.gh-faq-billing').addClass('gh-faq-section-active');
    // });
    //
    // // FAQ Accordions
    // $('.gh-faq-q a').click(function (e) {
    //     e.preventDefault();
    //     $(this).parents('.gh-faq-item').toggleClass('gh-faq-item-open');
    // });
    //
    // // Features page API code sections
    // $('.gh-codebox-link').click(function (e) {
    //     e.preventDefault();
    //     $('.gh-codebox-link').removeClass('gh-codebox-link-active');
    //     $(this).addClass('gh-codebox-link-active');
    //     $('.gh-codebox').removeClass('gh-codebox-active');
    // });
    // $('.gh-codebox-link-posts').click(function () {
    //     $('.gh-codebox-posts').addClass('gh-codebox-active');
    // });
    // $('.gh-codebox-link-tags').click(function () {
    //     $('.gh-codebox-tags').addClass('gh-codebox-active');
    // });
    // $('.gh-codebox-link-users').click(function () {
    //     $('.gh-codebox-users').addClass('gh-codebox-active');
    // });
});
