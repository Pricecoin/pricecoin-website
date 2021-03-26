            var isMobile = 0;
            
            $(window).resize(function() {
                if (($(window).width() > 1200)&&(isMobile===0)) {
                    document.getElementById("menu").style.position = "absolute";
                    document.getElementById("menu").style.right = "5vw";
                    document.getElementById("menu").style.fontSize = "20";
                    document.getElementById("logo").style.display = "inline-block";
                    document.getElementById("logo").style.height = "64px";
                    document.getElementById("sp").style.height = "64";
                    document.getElementById("menu").style.left = "";
                    document.getElementById("menu").style.marginLeft = "";
                    document.getElementById("menu").style.marginTop = "16px";
                    document.getElementById("menu").style.marginBottom = "0px";
                } else if (isMobile===0) {
                    document.getElementById("menu").style.position = "relative";
                    document.getElementById("menu").style.right = "0px";
                    document.getElementById("menu").style.fontSize = "24";
                    document.getElementById("logo").style.display = "block";
                    document.getElementById("logo").style.margin = "auto";
                    document.getElementById("sp").style.height = "84";
                    document.getElementById("menu").style.left = "50%";
                    document.getElementById("menu").style.marginLeft = (-0.5*document.getElementById("menu").offsetWidth);
                    document.getElementById("menu").style.marginTop = "8px";
                    document.getElementById("menu").style.marginBottom = "12px";
                }
            })
            
            function swag() {
                    document.getElementById("menu").style.position = "relative";
                    document.getElementById("menu").style.right = "0px";
                    document.getElementById("menu").style.fontSize = "24";
                    document.getElementById("logo").style.display = "block";
                    document.getElementById("logo").style.margin = "auto";
                    document.getElementById("sp").style.height = "84";
                    document.getElementById("menu").style.left = "50%";
                    document.getElementById("menu").style.marginLeft = (-0.5*document.getElementById("menu").offsetWidth);
                    document.getElementById("menu").style.marginTop = "8px";
                    document.getElementById("menu").style.marginBottom = "12px";
            }
            
            function load() {
                isMobile = 0;
                if ($(window).width() < 1200) {
                    document.getElementById("menu").style.position = "relative";
                    document.getElementById("menu").style.right = "0px";
                    document.getElementById("menu").style.fontSize = "24";
                    document.getElementById("logo").style.display = "block";
                    document.getElementById("logo").style.margin = "auto";
                    document.getElementById("sp").style.height = "96";
                    document.getElementById("menu").style.left = "50%";
                    document.getElementById("menu").style.marginLeft = (-0.5*document.getElementById("menu").offsetWidth);
                    document.getElementById("menu").style.marginTop = "12px";
                }
                if (   navigator.userAgent.match(/Android/i)
                    || navigator.userAgent.match(/webOS/i)
                    || navigator.userAgent.match(/iPhone/i)
                    || navigator.userAgent.match(/iPad/i)
                    || navigator.userAgent.match(/iPod/i)
                    || navigator.userAgent.match(/BlackBerry/i)
                    || navigator.userAgent.match(/Windows Phone/i)) {
                    document.getElementById("menu").style.position = "relative";
                    document.getElementById("menu").style.right = "0px";
                    document.getElementById("menu").style.fontSize = "32";
                    document.getElementById("logo").style.display = "block";
                    document.getElementById("logo").style.margin = "auto";
                    document.getElementById("sp").style.height = "108";
                    document.getElementById("menu").style.left = "50%";
                    document.getElementById("menu").style.marginLeft = (-0.5*document.getElementById("menu").offsetWidth);
                    document.getElementById("menu").style.marginTop = "8px";
                    document.getElementById("menu").style.marginBottom = "16px";
                    isMobile = 1;
                    console.log("mobile device");
                    }
            }
            
            function logo() {
                window.location.replace("http://pricecoincrypto.com/index.html");
            }