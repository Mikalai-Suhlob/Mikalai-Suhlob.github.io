$(document).ready(function() {

    $(window).on('load', function () {
        var $preloader = $('#page-preloader'),
            $spinner   = $preloader.find('.spinner');
        $spinner.fadeOut();
        $preloader.delay(350).fadeOut('slow');
    });

    // FULLPage Settings
    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors:['hello', 'project1', 'project2', 'project3', 'project4', 'logos', 'contacts'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['', '', '', '', '', '', 'Bye Bye'],
        showActiveTooltip: true,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        //normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        resize : false,
        //sectionsColor : ['#eee', '#fff', '#eee', '#fff'],
        //paddingTop: '0',
        //paddingBottom: '0',
        fixedElements: '.header',
        responsiveWidth: 0,
        responsiveHeight: 0,

        //Custom selectors
        //sectionSelector: '.section',
        //slideSelector: '.slide',

        afterRender: function(){
            //playing the video
            $('video').get(0).play();
        },
        afterLoad: function(anchorLink, index){
            var loadedSection = $(this);

            //using index
            if(index == 2){
                //alert("Section 3 ended loading");
            }
        }

    });


    //Text rotator on Hello Section
    $("#hellorotator, #contactsrotator").Morphext({
        animation: "flipInX",
        separator: "|",
        speed: 2000
    });
    
/*
    $("").Morphext({
        animation: "flipInX",
        separator: "|",
        speed: 2000
    });
*/
});