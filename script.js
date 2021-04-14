        $(".code-container").hide();
        $("#css-code").css("margin-left", "-350px");
        $("#js-code").css("margin-left", "-350px");

        var $result = $("#result-frame");
        var $window = $(window).on("resize", function () {

            var height = $(this).height() - 530;
            $result.height(height);

        }).trigger("resize");

        $(".tab").click(function (event) {

            $(this).nextAll(".tab").css("margin-left", "-170px");
            $(this).nextAll(".code-container").animate({
                width: "0px"
            }, {
                duration: 1500,
                // 執行的時間
                queue: false
            });
            $(this).next().animate({
                backgroundColor: "#1D1E22"
            });

            var leftOffset = $(this).offset().left;
            // console.log(leftOffset);

            if (leftOffset > 680) {

                // $(this).prevAll(".tab").css("margin-left", "-170px");
                $(this).prevAll(".tab").animate({

                    marginLeft: "-170px",
                }, {
                    duration: 700,
                    queue: false
                });


                $(this).next().animate({
                    width: "680px",
                }, {
                    duration: 2000,
                    queue: false
                });

                $(this).prevAll(".code-container").animate({
                    // prevAll 表示上面的所有元素帶有code-container class容器

                    width: "0px",
                }, {
                    duration: 1000,
                    queue: false
                });


            } else {

                $(this).next().animate({
                    width: "680px",
                }, {
                    duration: 2000,
                    queue: false
                });
            }

        });

        $("#runCode").click(function () {

            $("#result-frame").contents().find("head").html("<style>" + $("textarea#css-code").val() +
                "</style>");
            $("#result-frame").contents().find("body").html($("textarea#html-code").val());

            document.getElementById("result-frame").contentWindow.eval($("textarea#js-code").val());
        });