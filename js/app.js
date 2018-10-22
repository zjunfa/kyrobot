window.onmousewheel = function() {
				if(window.scrollY > 5) {
					document.getElementById("navOne").style.display = "none";
					document.getElementById("navTwo").style.display = "block";
					$("#navTwo").addClass("navbar-fixed-top");
				} else {
					document.getElementById("navOne").style.display = "block";
					document.getElementById("navTwo").style.display = "block";
					$("#navTwo").removeClass("navbar-fixed-top");
				}
			}
			
			$(function(){
//				 	var j = 6; //共j张图
//				    var i = 2;
//				    var time = 3000;
//				    setInterval(bgchange, time);
//				
//				    function bgchange() {
//				        $(".app-con-seven .slide-pic").css({
//				        	
//				        
//				        	"background":"url('img/appImg/application-img-hu" + i + ".png') no-repeat top center",
//				        	"background-size": "70% 100%",
//							"margin": "0 auto",
//							"z-index":"99"
//				        	
//				        });
//				        if (i < j) {
//				            i++;
//				            
//				        } else i = 1;
//				    }
				
				
				$(".app-con-four .picture").hover(function(){
					    $(this).children().show();
					},function(){
					    $(this).children().hide();
					})
				$(".app-con-seven .con-p1").click(function(){
					$(".app-con-seven .con1").show();
					$(".slide-pic .con1").siblings().hide();
					
				})
				$(".app-con-seven .con-p2").click(function(){
					$(".app-con-seven .con2").show();
					$(".slide-pic .con2").siblings().hide();
				})
				$(".app-con-seven .con-p3").click(function(){
					$(".app-con-seven .con3").show();
					$(".slide-pic .con3").siblings().hide();
				})
				$(".app-con-seven .con-p4").click(function(){
					$(".app-con-seven .con4").show();
					$(".slide-pic .con4").siblings().hide();
				})
				$(".app-con-seven .con-p5").click(function(){
					$(".app-con-seven .con5").show();
					$(".slide-pic .con5").siblings().hide();
				})
				$(".app-con-seven .con-p6").click(function(){
					$(".app-con-seven .con6").show();
					$(".slide-pic .con6").siblings().hide();
				})
				
				
				var i=0;
				setInterval(function(){
					$(".app-con-six .progress .progress-bar").css('width',i+'%');
					i++;
				},180)
				
				
				
		   $(window).scroll(function () {
                /*使用实例*/
                var elArr = $(".app-con-one,.app-con-two,.app-con-three,.app-con-four,.app-con-five,.app-con-six,.app-con-seven,.app-con-eight,.app-con-nine,.app-con-ten");
                scrollInTransition(elArr,'transition-float-in');
            });

            /**
             * @function 滚动时为出现在屏幕内的页面元素添加变化
             * @param elArr：要变化的元素数组 
             * @param classname：变化要添加的class
             */
            function scrollInTransition(elArr,classname) {
                for (let element of elArr) {
                    if ($(element).offset().top >= $(window).scrollTop() && $(element).offset().top< ($(window).scrollTop() + $(window).height())) {
                        console.log($(element));
                        $(element).addClass(classname);
                    }else{
                        
                        $(element).removeClass(classname);
                    }
                }
            }
				
				
				
				
			})
			

			