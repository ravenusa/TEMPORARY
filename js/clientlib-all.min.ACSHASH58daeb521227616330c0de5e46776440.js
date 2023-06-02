var maps=typeof maps==undefined?[]:maps;
$(document).ready(function(){const a={init:function(){this.slick.init();
if($(".investment-map").length>0){this.investment_map.init()
}if($(".investment-container").length>0){this.override_component.init()
}this.faq_investment.init();
this.investment_facilities.init();
this.contact.init()
},contact:{button:$(".contact-form .btn-investment"),buttonajax:$(".contact-form .btn-investment-ajax"),agreement:$("#aggreement"),file:"",file_name:"",init:function(){if(this.agreement.length>0){var b=this;
this.custom_select();
this.chooseFile();
this.button.click(function(){b.sendEmail()
});
this.buttonajax.click(function(){var c=new FileReader();
var e=$('.contact-form form input[name="inquiry"]')[0].files[0];
var d="";
if(e!=undefined){b.getBase64(e);
d="&inquiry="+b.file.replace(/\+/g,"%2B")
}$.ajax({url:"/wonderin/Mail",type:"POST",data:$(".contact-form form").serialize()+d,success:function(f){console.log(f)
}})
});
if(!this.agreement.val().checked){this.button.addClass("disabled");
this.buttonajax.addClass("disabled")
}this.agreement.on("change",function(){if(this.checked){b.button.removeClass("disabled");
b.buttonajax.removeClass("disabled")
}else{b.button.addClass("disabled");
b.buttonajax.addClass("disabled")
}})
}},validate:function(b){b.name?$("#name").removeClass("error"):$("#name").addClass("error");
b.company?$("#company").removeClass("error"):$("#company").addClass("error");
b.inquiry!=""?$("#inquiry").removeClass("error"):$("#inquiry").addClass("error");
b.messages?$("#messages").removeClass("error"):$("#messages").addClass("error")
},sendEmail:function(){console.log("test");
var d={name:$("#name").val(),phone:$("#phone").val(),company:$("#company").val(),inquiry:$("#inquiry").val(),messages:$("#messages").val(),aggreement:$("#aggreement").val(),cc:String($("#cc").val()),to:String($("#to").val()),attachment:this.file,bcc:String($("#bcc").val()),filename:this.file_name};
var c=new bootstrap.Modal(document.getElementById("modal-email-thanks")),b;
this.validate(d);
if(document.location.href.indexOf("http://34.126.96.118:8080")>=0){b="http://34.126.96.118:8080/wonderin/Mail"
}else{b="/wonderin/Mail"
}if(d.name&&d.company&&d.inquiry&&d.messages){$.ajax({url:b,data:d,method:"POST",success:function(e){c.show();
setTimeout(function(){location.reload()
},1500)
},error:function(f,e){alert("Terjadi Kesalahan")
}})
}else{alert("Forms contains errors. Please see fields marked in red")
}},getBase64:function(c){var d=this;
var b=new FileReader();
b.readAsDataURL(c);
b.onload=function(){d.file=b.result
};
b.onerror=function(e){console.log("Error: ",e)
}
},custom_select:function(){var b=$(".custom-select");
var c=this;
b.find("span").click(function(){$(b).find("select").focus()
})
},chooseFile:function(){var b=this;
$("#file").change(function(){b.file=b.getBase64($(this)[0].files[0]);
var c=$(this).val()?$(this).val().replace(/C:\\fakepath\\/i,""):"";
b.file_name=c;
if(c){$(".file-name").text(c);
$(".btn-clear").removeClass("d-none")
}else{$(".file-name").text("No File Chosen");
$(".btn-clear").addClass("d-none")
}});
$(".btn-clear").click(function(){$("#file").val("");
b.file="";
b.file_name="";
$(this).addClass("d-none");
$(".file-name").text("No File Chosen")
})
}},investment_facilities:{init:function(){this.showModal()
},showModal:function(){$(".btn-facilities").click(function(){if($("#target-image").hasClass("slick-slider")){$("#target-image").slick("unslick")
}$("#target-image").html("");
var b=$(this).data("content");
console.log(b);
$(b).each(function(){var c=$(this).val();
$("#target-image").append('<img class="mb-4"  src="'+c+'" />')
});
setTimeout(function(){$("#target-image").slick()
},500)
})
}},faq_investment:{selector:$("#faq-accordion"),init:function(){var d=this;
if(!this.selector.hasClass("no-pagination")){var c=$(d.selector).find(".accordion-item").length;
var b=$(".invest-row").data("row")?$(".invest-row").data("row"):1;
if(b>=c){$(".btn-load-more-faq").hide()
}$(d.selector).find(".accordion-item:lt("+b+")").show();
$(".btn-load-more-faq").click(function(){b=b+b;
$(d.selector).find(".accordion-item:lt("+b+")").show();
if(b>=c){$(".btn-load-more-faq").hide()
}})
}else{$(d.selector).find(".accordion-item").show()
}}},override_component:{init:function(){if($(".investment-container").length>0){this.banner_with_url();
this.travel_blog_list()
}},banner_with_url:function(){var b=$(".banner-with-url").find(".col-md-6");
b.removeClass("col-md-6");
b.removeClass("col-lg-6");
b.addClass("col-md-12");
b.find(".btn-withurl").removeClass("rounded-3 ");
b.find(".btn-withurl").addClass("btn-investment");
b.find(".btn-investment").removeClass("btn-withurl")
},travel_blog_list:function(){var b=$(".investment-container .carousel-wrapper-testimony .carousel-item .content .text .card .card-body").css({padding:"30px"});
$(".testimony-section").append('<div class="container"><div class="slick-dots-custom d-none d-lg-block"></div></div>');
setTimeout(function(){$(".carousel-wrapper-testimony").slick("unslick");
var d=$(".carousel-wrapper-testimony");
var c,e,f;
if(!$(".carousel-wrapper-testimony").hasClass("hide-media")){c=1;
e=1;
f=true
}else{c=3;
e=3;
f=false
}$(".carousel-wrapper-testimony").slick({arrows:true,infinite:f,slidesToShow:c,slidesToScroll:e,autoplay:false,autoplaySpeed:3000,appendArrows:$(".carousel-wrapper-testimony"),dots:true,appendDots:$(".slick-dots-custom"),nextArrow:'<div class="slick-next with-img"><img loading="lazy" src="https://www.indonesia.travel/content/dam/indtravelrevamp/home-revamp/arrow.svg" /></div>',prevArrow:'<div style="width : 32px; height : 32px; background : black; " class="slick-prev with-img"><img loading="lazy" src="https://www.indonesia.travel/content/dam/indtravelrevamp/home-revamp/arrow.svg" style="transform : rotate(180deg)" /></div>',responsive:[{breakpoint:992,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:200,settings:{slidesToShow:1,slidesToScroll:1}}]})
},1000)
}},slick:{leafletMap:"",init:function(){if($(".contact-container").length>0){$(".contact-container:not(.no-slider)").slick({arrows:false,variableWidth:true,infinite:false})
}if($(".investment-silder-info .slider").length>0){$(".investment-silder-info .slider").slick({arrows:true,infinite:true,dots:true})
}}},investment_map:{maps:maps,viewDetail:function(b){var c=this;
$(".project-image").attr("src",b.image);
$(".project-title").text(b.name);
$(".project-location").text(", "+b.location);
$(".project-description").html(b.description);
$(".project-url").attr("href",b.url);
$(".map-content").addClass("show");
$(".map-content").removeClass("d-none");
$(".btn-close").addClass("show");
$(".search-result").removeClass("show");
$(".map-mobile-container").addClass("mt-5");
$(".map-mobile-container").addClass("pt-5");
$(".map-mobile-container").addClass("open");
$(".btn-close").click(function(){$(".map-content").removeClass("show");
$(".map-content").addClass("d-none");
$(".btn-close").removeClass("show");
$(".map-mobile-container").removeClass("mt-5");
$(".map-mobile-container").removeClass("pt-5");
$(".map-mobile-container").removeClass("open")
});
c.leafletMap.flyTo([b.lat,b.long],6)
},clickTrigger:function(){var b=this;
$(".map-click").click(function(){var c=$(this).data();
var d={name:c.name,description:c.description,location:c.location,lat:c.lat,long:c.long,image:c.image,index:c.index};
b.viewDetail(d)
})
},markers:[],leaflet:function(c){var j=this;
if($(".investment-map #map").length>0){var g=$(".init-map-data").data("lat"),h=$(".init-map-data").data("long");
var f=L.map("map",{center:[g,h],zoom:5});
f.touchZoom.disable();
f.doubleClickZoom.disable();
f.scrollWheelZoom.disable();
f.boxZoom.disable();
f.keyboard.disable();
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(f);
markers=[];
for(var e=0;
e<j.maps.length;
e++){var b=new L.marker([j.maps[e].lat,j.maps[e].long],j.maps[e]).addTo(f);
b.on("click",d)
}function d(i){j.viewDetail(i.target.options)
}j.leafletMap=f;
j.markers=markers
}},init:function(){this.leaflet();
this.search();
var b=this.maps;
var c=this;
$(".search-map").keyup(function(){var d=$(".search-result");
var e=$(this).val();
objIndex=b.filter(function(f){return(f.name.toLowerCase().indexOf(e.toLowerCase())>=0||f.location.toLowerCase().indexOf(e.toLowerCase())>=0)
});
e&&objIndex.length>0?d.addClass("show"):d.removeClass("show");
c.search(objIndex)
})
},search:function(c){var b=$(".search-item-result");
var d=c&&c.length>0?c:this.maps;
b.html("");
for(let index=0;
index<d.length;
index++){b.append('<li class="border-bottom mb-2 pb-2 map-click" data-lat="'+d[index].lat+'" data-long="'+d[index].long+'"data-index="'+index+'" data-description="'+d[index].description+'" data-name="'+d[index].name+'" data-location="'+d[index].location+'" data-image="'+d[index].image+'" data-url="'+d[index].url+'"><p class="mb-1 fw-bold">'+d[index].name+"</p><span>"+d[index].location+"</span></li>")
}this.clickTrigger()
}}};
a.init()
});
$(document).ready(function(){var q={mobile:$(window).width()<768?true:false,desktop:$(window).width()>768?true:false};
var m={request:function(u,x,w,v){if(!w){w="POST"
}if(!v){v="json"
}var t=$.ajax({url:u,method:w,dataType:v,data:x,error:function(z,y){console.log(u+" with method "+w+" =>");
console.log(x);
console.log(arguments)
}});
return t
},sample:function(){return'ajax.request("/Amala", {f:"logout"}, "GET").done(function( response ){if(response.status && response.status.responsecode == "200"){garudaUtils.deleteCookie("garudamember");}});'
}};
var h={url:"",container:"",method:"GET",dataType:"text",itemPerPagination:10,currentPage:1,messageError:"No data found",afterLoad:{append:true,position:"top"},className:{onLoad:"onload-ajax",onEnd:"onend-ajax"},debugResult:true,parameter:function(u){var v={};
if(u.length>0){for(var t=0;
t<u.length;
t++){v[u[t].name]=u[t].el.val()
}}return v
},call:function(v){var x=this;
var u=Object.create(m);
var w=x.parameter(v.selector);
x.container.addClass(x.className.onLoad);
var t=u.request(x.url,w,x.method,x.dataType);
t.done(function(y){if(x.debugResult){console.log("Response ajax url = "+x.url+"\nwith parameter = \n");
console.log(w);
console.log(y)
}if(x.afterLoad.append){x.container.html(y)
}});
t.always(function(){x.container.removeClass(x.className.onLoad)
})
},init:function(u){if(u.container){this.container=u.container
}if(u.url){this.url=u.url
}else{this.url=u.container.attr("data-url")
}var v=this;
if(u.trigger&&u.triggerBy=="click"){u.trigger.on(u.triggerBy,function(){v.call(u)
})
}if(u.selector.length>0){for(var t=0;
t<u.selector.length;
t++){if(u.selector[t].ajaxOnSelectorChange){u.selector[t].el.on("change",function(){v.call(u)
})
}}}}};
var s={el:$(".plan-your-trip"),container:$(".event-list"),btn:$("#load-plan-y-t"),url:"",init:function(){if(this.el.length==0){return false
}var u=this;
var t=Object.create(h);
t.init({container:u.container,trigger:u.btn,triggerBy:"click",selector:[{name:"category",el:$("#pyt-event-category"),ajaxOnSelectorChange:true},{name:"loc",el:$("#pyt-location"),ajaxOnSelectorChange:true},{name:"month",el:$("#pyt-month"),ajaxOnSelectorChange:true},{name:"year",el:$("#pyt-year"),ajaxOnSelectorChange:true},{name:"type",el:$("#pyt-event-type"),ajaxOnSelectorChange:true},{name:"traveller",el:$("#pyt-traveller"),ajaxOnSelectorChange:true},{name:"status-event",el:$("#pyt-status-event"),ajaxOnSelectorChange:true}]})
}};
s.init();
var d={componentEl:$(".slideshow-responsive-AT"),container:$(".new-slideshow"),nav:$(".new-slide-nav"),init:function(){this.doSlick()
},doSlick:function(){var v=this.container.attr("autoplay-slick")=="true"?true:false;
var t=parseInt(this.container.attr("autoplayspeed"))*1000;
console.log("waktu autoplay "+t);
var w=this.container.attr("root-country")=="ar"?true:false;
var u=this.container;
u.slick({dots:q.mobile,infinite:true,speed:300,slidesToShow:1,autoplaySpeed:t,arrows:q.desktop,autoplay:v,rtl:w,nextArrow:'<div class="slick-next"><img src="/page-assets/arrow.svg" /></div>',prevArrow:'<div style="width : 32px; height : 32px;" class="slick-prev"><img src="/page-assets/arrow.svg" style="transform : rotate(180deg)" /></div>'});
u.find(".unshow").removeClass("unshow");
if(q.desktop){u.on("afterChange",function(y,x,A,z){d.nav.find(".slide-nav-li.active").removeClass("active");
d.nav.find(".slide-nav-li").eq(A).addClass("active")
});
this.nav.appendTo(this.container);
this.nav.find(".slide-nav-li").click(function(){var x=parseInt($(this).attr("data-slide-to"));
u.slick("slickGoTo",x)
})
}}};
if(d.componentEl.length>0){d.init()
}var i={trigger:$(".search-trigger"),form:$(".search-form"),overlayIdentity:"#header-search-overlay",input:$(".search-input"),init:function(){this.appendCloseOverlay();
var t=this;
this.trigger.click(function(){if(t.input.val()!=""){$(".the-form-search").submit()
}else{t.hide()
}});
$(this.overlayIdentity).click(function(){t.close()
})
},hide:function(){if(this.form.is(":visible")){this.close()
}else{this.showOverlay();
this.form.show()
}},close:function(){this.closeOverlay();
this.form.hide();
this.input.val("")
},showOverlay:function(){$(this.overlayIdentity).show()
},closeOverlay:function(){$(this.overlayIdentity).hide()
},appendCloseOverlay:function(){$("body").prepend('<div class="popup-overlay" id="header-search-overlay" style="display:none"></div>')
}};
i.init();
var b={el:$(".switch-icon"),light:"",dark:"",init:function(){this.light=this.el.attr("data-src-light");
this.dark=this.el.attr("data-src-dark");
if(localStorage.getItem("theme")=="darkmode"){$(this.el).attr("src",b.dark);
$("body").removeClass("lightmode").addClass("darkmode")
}else{$(this.el).attr("src",b.light);
$("body").removeClass("darkmode").addClass("lightmode")
}this.el.click(function(){if($(this).attr("src")==b.light){$(this).attr("src",b.dark);
$("body").removeClass("lightmode").addClass("darkmode");
localStorage.setItem("theme","darkmode")
}else{$(this).attr("src",b.light);
$("body").removeClass("darkmode").addClass("lightmode");
localStorage.setItem("theme","lightmode")
}})
}};
b.init();
var p={triggerMobile:$(".navbar-toggler"),navClass:$(".new-header"),headContainer:$("#headcontainer"),setFixedHeightWithout:[$(".slideshow-responsive-AT"),$(".slideshow-responsive")],init:function(){var v=this;
var u=0;
for(var t=0;
t<this.setFixedHeightWithout.length;
t++){if(this.setFixedHeightWithout[t].length>0){u+=1
}}if(u==0){this.navClass.addClass("new-header-scroll");
this.headContainer.addClass("head-fixed-height");
$("#contentcontainer").addClass("contentcontainer-head-fixed")
}else{this.scroll()
}this.triggerMobile.click(function(){if(v.navClass.hasClass("header-mobile-show")){v.navClass.removeClass("header-mobile-show");
$(".navbar-menu").hide();
if($(this).parents(".head-fixed-height").length>0){$(this).html('<img src="/page-assets/burger.svg" alt="burger menu">')
}else{$(this).html('<img src="/page-assets/burger.svg" alt="burger menu">')
}}else{v.navClass.addClass("header-mobile-show");
$(".navbar-menu").show();
$(this).html("&#10005;")
}});
if($(this.triggerMobile).parents(".head-fixed-height").length>0){$(this.triggerMobile).html('<img src="/page-assets/burger.svg" alt="burger menu">')
}else{$(this.triggerMobile).html('<img src="/page-assets/burger.svg" alt="burger menu">')
}},scroll:function(){var t=this;
$(window).scroll(function(){if($(this).scrollTop()<=0&&t.navClass.hasClass("new-header-scroll")){t.navClass.removeClass("new-header-scroll")
}else{if($(this).scrollTop()>0&&!t.navClass.hasClass("new-header-scroll")){t.navClass.addClass("new-header-scroll")
}}})
}};
p.init();
var l={container:$(".goexplore-container"),trigger:$("#trigger-go-explore"),triggerClose:$("#trigger-close-goexplore"),triggerSubmit:$("#btn-goexplore-trigger"),buttonSubmit:$("#btn-goexplore-submit"),selectTravel:$("#select-type-travel"),checkbox:$(".goExplore-checkbox"),inputTypeInterest:$("#input-type-interest"),errorTypeTravel:$("#error-type-travel"),errorTypeInterest:$("#error-type-interest"),init:function(){var t=this;
this.trigger.click(function(){if(t.container.hasClass("open")){t.hide()
}else{t.show()
}});
this.triggerClose.click(function(){t.hide()
});
$(i.overlayIdentity).click(function(){t.hide()
});
this.triggerSubmit.click(function(){t.validation()
});
this.selectTravel.change(function(){$(this).val()==""?t.errorTypeTravel.show():t.errorTypeTravel.hide()
});
this.checkbox.change(function(){$(this).is(":checked")?t.errorTypeInterest.hide():t.checkTypeInterest()
})
},hide:function(){this.container.removeClass("open");
i.closeOverlay()
},show:function(){this.container.addClass("open");
i.showOverlay()
},checkTypeInterest:function(){var u="";
var t=0;
this.checkbox.each(function(){if($(this).is(":checked")){u+=$(this).val()+",",t+=1
}});
if(t==0){this.errorTypeInterest.show()
}else{this.errorTypeInterest.hide()
}u=u.slice(0,-1);
this.inputTypeInterest.val(u);
return t
},validation:function(){var t=0;
if(this.selectTravel.val()==""){this.errorTypeTravel.show();
t+=1
}else{this.errorTypeTravel.hide()
}if(this.checkTypeInterest()==0){t+=1;
this.errorTypeInterest.show()
}else{this.errorTypeInterest.hide()
}if(t>0){return false
}this.submit()
},submit:function(){this.buttonSubmit.click()
}};
l.init();
var n={dataAirport:["Jakarta (CGK-Soekarno Hatta Intl.)","Jakarta (HLP-Halim Perdanakusuma Intl.)","Denpasar/Bali (DPS-Ngurah Rai Intl.)","Yogyakarta (JOG-Adisucipto Intl.)","Lombok(LOP-Lombok Intl.)","Banyuwangi (BWX-Banyuwangi)","Medan (KNO-Kuala Namu Intl.)","Jayapura (DJJ-Sentani)","Tanjung Pinang (TNJ-Tanjung Pinang)","Surakarta (SOC-Adisumarmo Intl.)","Semarang (SRG-Ahmad Yani Intl.)","Bandung (BDO-Husein Sastranegara Intl.)","Makassar (UPG-Sultan Hasanuddin Intl.)","Surabaya (SUB-Juanda)","Ambon (AMQ-Pattimura)","Banjarmasin (BDJ-Syamsudin Noor)","Biak (BIK-Frans Kaisiepo)","Bengkulu (BKS-Fatmawati Soekarno)","Bima (BMU)","Balikpapan (BPN-Sepinggan Intl.)","Batam Batu Besar (BTH-Hang Nadim)","Banda Aceh (BTJ-Sultan Iskandarmuda)","Jayapura (DJJ-Sentani)","Gorontalo (GTO-Tolotio)","Kendari (KDI-Wolter Monginsidi)","Kupang (KOE-El Tari)","Manado (MDC-Sam Ratulangi Intl.)","Malang (MLG-Abdul Rachman Saleh)","Padang (PDG-Minangkabau Intl.)","Pangkalpinang (PGK-Pangkal Pinang)","Pekanbaru (PKU-Sultan Syarif Qasim II Intl.)","Palembang (PLM-Sultan Mahmud Badaruddin II)","Palu (PLW-Mutiara)","Pontianak (PNK-Supadio)","Tembagapura (TIM-Timika)","Tanjung Pandan (TJQ-Buluh Tumbang)","Bandar Lampung (TKG-Radin Inten II)","Ternate (TTE-Ternate)"],dataCity:["Ambarawa, Indonesia|CI007812","Ambon, Indonesia|CI007813","Anyer, Indonesia|CI007814","Atambua, Indonesia|CI007815","Bali, Indonesia|CI007816","Balikpapan, Indonesia|CI007817","Banda Aceh, Indonesia|CI007818","Bandar Lampung, Indonesia|CI007819","Bandung, Indonesia|CI007820","Bangka, Indonesia|CI007821","Banjarbaru, Indonesia|CI007822","Banjarmasin, Indonesia|CI007823","Banjarnegara, Indonesia|CI007824","Banten, Indonesia|CI007825","Banyuwangi, Indonesia|CI007826","Batam, Indonesia|CI007827","Batu, Indonesia|CI007828","Batulicin, Indonesia|CI007829","Baturaden, Indonesia|CI007830","Batusangkar, Indonesia|CI007831","Baubau, Indonesia|CI007832","Bekasi, Indonesia|CI007833","Belitung, Indonesia|CI007834","Bengkulu, Indonesia|CI007835","Berastagi, Indonesia|CI007836","Berau, Indonesia|CI007837","Biak, Indonesia|CI007838","BIMA, Indonesia|CI007839","Bintan, Indonesia|CI007840","Blitar, Indonesia|CI007841","Blora, Indonesia|CI007842","Bogor, Indonesia|CI007843","Bojonegoro, Indonesia|CI007844","Bondowoso, Indonesia|CI007845","Bone, Indonesia|CI007846","Bontang, Indonesia|CI007847","Brebes, Indonesia|CI007848","Bromo, Indonesia|CI007849","Bukit Lawang, Indonesia|CI007850","Bukittinggi, Indonesia|CI007851","Candidasa, Indonesia|CI007852","Central Java, Indonesia|CI007853","Cepu, Indonesia|CI007854","Ciamis, Indonesia|CI007855","Cianjur, Indonesia|CI007856","Cikarang, Indonesia|CI007857","Cilacap, Indonesia|CI007858","Cilegon, Indonesia|CI007859","Cipanas, Indonesia|CI007860","Ciputat, Indonesia|CI007861","Cirebon, Indonesia|CI007862","Cisarua, Indonesia|CI007863","Denpasar, Indonesia|CI007864","Denpasar Bali, Indonesia|CI007865","Depok, Indonesia|CI007866","Dompu, Indonesia|CI007867","Dumai, Indonesia|CI007868","East Java, Indonesia|CI007869","Ende, Indonesia|CI007870","Flores, ID, Indonesia|CI007871","Garut, Indonesia|CI007872","Gianyar, Indonesia|CI007873","Gili Air, Indonesia|CI007874","Gili Trawangan, Indonesia|CI007875","Gorontalo, Indonesia|CI007876","Gresik, Indonesia|CI007877","Indramayu, Indonesia|CI007878","Irian Jaya, Indonesia|CI007879","Jakarta, Indonesia|CI007880","Jambi, Indonesia|CI007881","Java, Indonesia|CI007882","Jayapura, Indonesia|CI007883","Jember, Indonesia|CI007884","Jepara, Indonesia|CI007885","Jimbaran, Indonesia|CI007886","Jombang, Indonesia|CI007887","Kalibaru, Indonesia|CI007888","Kalimantan, Indonesia|CI007889","Karawaci, Indonesia|CI007890","Karawang, Indonesia|CI007891","Karimunjawa Island, Indonesia|CI007892","Kebumen, Indonesia|CI007893","Kediri, Indonesia|CI007894","Kendari, Indonesia|CI007895","Ketapang, Indonesia|CI007896","Klaten, Indonesia|CI007897","Kolaka, Indonesia|CI007898","Kudus, Indonesia|CI007899","Kuningan, Indonesia|CI007900","Kupang, Indonesia|CI007901","Kuta Cane, Indonesia|CI007902","Kutai, Indonesia|CI007903","Labuan Bajo, Indonesia|CI007904","Labuhanbatu, Indonesia|CI007905","Lahat, Indonesia|CI007906","Lamongan, Indonesia|CI007907","Legian, Indonesia|CI007908","Lembongan Island, Indonesia|CI007909","Lhokseumawe, Indonesia|CI007910","Lombok, Indonesia|CI007911","Lubuk Linggau, Indonesia|CI007912","Lumajang, Indonesia|CI007913","Luwuk, Indonesia|CI007914","Madiun, Indonesia|CI007915","Madura, Indonesia|CI007916","Magelang, Indonesia|CI007917","Majalengka, Indonesia|CI007918","Makassar, Indonesia|CI007919","Malang, Indonesia|CI007920","Maluku, Indonesia|CI007921","Mamuju, Indonesia|CI007922","Manado, Indonesia|CI007923","Manokwari, Indonesia|CI007924","Mataram, Indonesia|CI007925","Maumere, Indonesia|CI007926","Medan, Indonesia|CI007927","Mojokerto, Indonesia|CI007928","Moyo Island, Indonesia|CI007929","Muara Enim, Indonesia|CI007930","Nusa Dua, Indonesia|CI007931","Pacitan, Indonesia|CI007932","Padang, Indonesia|CI007933","Padang Sidempuan, Indonesia|CI007934","Palangkaraya, Indonesia|CI007935","Palembang, Indonesia|CI007936","Palu, Indonesia|CI007937","Pamekasan, Indonesia|CI007938","Panakukang, Indonesia|CI007939","Pandaan, Indonesia|CI007940","Pangandaran, Indonesia|CI007941","Pangkalan Bun, Indonesia|CI007942","Papua, Indonesia|CI007943","Parapat, Indonesia|CI007944","Pare-pare, Indonesia|CI007945","Pasuruan, Indonesia|CI007946","pati, Indonesia|CI007947","Payakumbuh, Indonesia|CI007948","Pekalongan, Indonesia|CI007949","Pekanbaru, Indonesia|CI007950","Pelabuhan Ratu, Indonesia|CI007951","Pemalang, Indonesia|CI007952","Pematang Siantar, Indonesia|CI007953","Pengandaran, Indonesia|CI007954","Ponorogo, Indonesia|CI007955","Pontianak, Indonesia|CI007956","prabumulih, Indonesia|CI007957","Probolinggo, Indonesia|CI007958","Puncak, Indonesia|CI007959","Purwakarta, Indonesia|CI007960","Purwodadi Grobogan, Indonesia|CI007961","Purwokerto, Indonesia|CI007962","Purworejo, Indonesia|CI007963","Rembang, Indonesia|CI007964","Riau, Indonesia|CI007965","Ruteng, Indonesia|CI007966","Sabang, Indonesia|CI007967","Salatiga, Indonesia|CI007968","Samarinda, Indonesia|CI007969","Samosir, Indonesia|CI007970","Samosir Island, Indonesia|CI007971","Sampit, Indonesia|CI007972","Sanur, Indonesia|CI007973","Sarangan, Indonesia|CI007974","Semarang, Indonesia|CI007975","Seminyak, Indonesia|CI007976","Serang, Indonesia|CI007977","Sibolangit, Indonesia|CI007978","Sibolga, Indonesia|CI007979","Sidoarjo, Indonesia|CI007980","Singaraja, Indonesia|CI007981","Singkawang, Indonesia|CI007982","Situbondo, Indonesia|CI007983","Soe, Indonesia|CI007984","Solo City, Indonesia|CI007985","Sorong, Indonesia|CI007986","Sragen, Indonesia|CI007987","Subang, Indonesia|CI007988","Sukabumi, Indonesia|CI007989","Sulawesi, Indonesia|CI007990","Sumatra, Indonesia|CI007991","Sumba, Indonesia|CI007992","Sumbawa, Indonesia|CI007993","Sumbawa Besar, Indonesia|CI007994","Sumedang, Indonesia|CI007995","Sumenep, Indonesia|CI007996","Sungailiat, Indonesia|CI007997","Surabaya, Indonesia|CI007998","Tabanan, Indonesia|CI007999","Taliwang, Indonesia|CI008000","Tangerang, Indonesia|CI008001","Tanjung Balai, Indonesia|CI008002","Tanjung Balai Karimun, Indonesia|CI008003","Tanjung Benoa, Indonesia|CI008004","Tanjung Lesung, Indonesia|CI008005","Tanjung Selor, Indonesia|CI008006","Tanjungpinang, Indonesia|CI008007","Tarakan, Indonesia|CI008008","Tasikmalaya, Indonesia|CI008009","Tawangmangu, Indonesia|CI008010","Tegal, Indonesia|CI008011","Tenggarong, Indonesia|CI008012","Ternate, Indonesia|CI008013","Timika, Indonesia|CI008014","Toraja, Indonesia|CI008015","Tretes, Indonesia|CI008016","Tuban, Indonesia|CI008017","Tulungagung, Indonesia|CI008018","Ujung Pandang (Makassar), Indonesia|CI008019","Waingapu, Indonesia|CI008020","Wamena, Indonesia|CI008021","Waterfront City, Indonesia|CI008022","West Java, Indonesia|CI008023","West Sumatra, Indonesia|CI008024","Wonogiri, Indonesia|CI008025","Wonosobo, Indonesia|CI008026","Yogyakarta, Indonesia|CI008027"],dataStation:["Gambir, Jakarta - GMR|GMR","Jakarta Kota, Jakarta - JAKK|JAKK","Jatinegara, Jakarta - JNG|JNG","Manggarai, Jakarta - MRI|MRI","Pasar Senen, Jakarta - PSE|PSE","Tanah Abang, Jakarta - THB|THB","Tanjung Priuk, Jakarta - TPK|TPK","Bandung, Bandung - BD|BD","Cicalengka, Bandung - CCL|CCL","Cikadongdong, Bandung - CD|CD","Cimahi, Bandung - CMI|CMI","Gedebage, Bandung - GDB|GDB","Haurpugur, Bandung - HRP|HRP","Kiaracondong, Bandung - KAC|KAC","Padalarang, Bandung - PDL|PDL","Rancaekek, Bandung - RCK|RCK","Rendeh, Bandung - RH|RH","Surabaya Pasar Turi, Surabaya - SBI|SBI","Surabaya Gubeng, Surabaya - SGU|SGU","Wonokromo, Surabaya - WO|WO","Brambanan, Yogyakarta - BBN|BBN","Lempuyangan, Yogyakarta - LPN|LPN","Sentolo, Yogyakarta - STL|STL","Wates, Yogyakarta - WT|WT","Yogyakarta, Yogyakarta - YK|YK","Arjawinangun - AWN|AWN","Bangil - BG|BG","Bangoduwa - BDW|BDW","Bagor - BGR|BGR","Banjar - BJR|BJR","Karangsari - KRR|KRR","Banyuwangibaru, Banyuwangi - BW|BW","Glenmore, Banyuwangi - GLM|GLM","Kalibaru, Banyuwangi - KBR|KBR","Karangasem, Banyuwangi - KNE|KNE","Kalisetail, Banyuwangi - KSL|KSL","Rogojampi, Banyuwangi - RGP|RGP","Sumberwadung, Banyuwangi - SWD|SWD","Temuguruh, Banyuwangi - TGR|TGR","Batang - BTG|BTG","Baturaja - BTA|BTA","Bekasi - BKS|BKS","Banjarsari - BJI|BJI","Babat - BBT|BBT","Baron - BRN|BRN","Batu Tulis - BTT|BTT","Bungamas - BGM|BGM","Binjai - BIJ|BIJ","Blimbingpendopo - BIB|BIB","Blitar - BL|BL","Cepu - CU|CU","Kebasen - KBS|KBS","Bogor - BOO|BOO","Bojonegoro - BJ|BJ","Bojong - BJG|BJG","Telawa - TW|TW","Brebes - BB|BB","Kertosono - KTS|KTS","Blambanganumpu - BBU|BBU","Ciledug - CLD|CLD","Caruban - CRB|CRB","Ciamis - CI|CI","Cianjur - CJ|CJ","Cibadak - CBD|CBD","Cikampek - CKP|CKP","Cilacap - CP|CP","Cilaku - CLK|CLK","Cilegon - CLG|CLG","Cipari - CPI|CPI","Cirebon - CN|CN","Cireungas - CRG|CRG","Cibeber - CBB|CBB","Cisaat - CSA|CSA","Comal - CO|CO","Cicurug - CCR|CCR","Cipeundeuy - CPD|CPD","Cigombong - CGB|CGB","Lubukpakam - LBP|LBP","Brumbung - BBG|BBG","Denpasar, Denpasar - DEN|DEN","Doplang - DPL|DPL","Gandasoli - GDS|GDS","Gandrungmangun - GDM|GDM","Cibatu - CB|CB","Gedangan - GDG|GDG","Giham - GHM|GHM","Gombong - GB|GB","Garum - GRM|GRM","Grati - GI|GI","Gundih - GD|GD","Gunungmegang - GNM|GNM","Gumilir - GM|GM","Haurgeulis - HGL|HGL","Ijo - IJ|IJ","Cilegeh - CLH|CLH","Jatibarang - JTB|JTB","Jember, Jember - JR|JR","Jatiroto, Jember - JTR|JTR","Kalisat, Jember - KLT|KLT","Rambipuji, Jember - RBP|RBP","Tanggul, Jember - TGL|TGL","Jeruklegi - JRL|JRL","Jombang - JG|JG","Karangjati - KGT|KGT","Kradenan - KNN|KNN","Karang Tengah - KE|KE","Karanganyar - KA|KA","Karawang - KW|KW","Kadokangangabus - KAB|KAB","Babakan - BBK|BBK","Kertasemaya - KTM|KTM","Kebumen - KM|KM","Kediri - KD|KD","Ketanggungan - KGG|KGG","Kedungbanteng - KDB|KDB","Kedunggalar - KG|KG","Kedungjati - KEJ|KEJ","Kemranjen - KJ|KJ","Kalibodri - KBD|KBD","Kesamben - KSB|KSB","Ketanggungan Barat - KGB|KGB","Kretek - KRT|KRT","Krengseng - KNS|KNS","Krian - KRN|KRN","Kisaran - KIS|KIS","Kalitidu - KIT|KIT","Klaten - KT|KT","Kroya - KYA|KYA","Kotabumi - KB|KB","Karangsuwung - KRW|KRW","Kawunganten - KWG|KWG","Kebonromo - KRO|KRO","Kutoarjo - KTA|KTA","Losari - LOS|LOS","Lahat - LT|LT","Lamongan - LMG|LMG","Lampegan - LP|LP","Bekri - BKI|BKI","Langen - LN|LN","Larangan - LR|LR","Larangan - LRA|LRA","Lebakjero - LBJ|LBJ","Leles - LL|LL","Linggapura - LG|LG","Lubuk Linggau - LLG|LLG","Klakah - KK|KK","Luwung - LWG|LWG","Madiun - MN|MN","Barat - BAT|BAT","Blimbing, Malang - BMG|BMG","Kepanjen, Malang - KPN|KPN","Lawang, Malang - LW|LW","Malang, Malang - ML|ML","Malang Kota Lama, Malang - MLK|MLK","Sumberpucung, Malang - SBP|SBP","Maos - MA|MA","Martapura - MP|MP","Maseng - MSG|MSG","Merbau - MBU|MBU","Aekloba, Medan - AKB|AKB","Bandarkalipah, Medan - BAP|BAP","Bandartinggi, Medan - BDT|BDT","Bajalinggei, Medan - BJL|BJL","Batangkuis, Medan - BTK|BTK","Dolokmerangir, Medan - DMR|DMR","Hengelo, Medan - HL|HL","Kuala Namo, Medan - KLN|KLN","Limapuluh, Medan - LMP|LMP","Membangmuda, Medan - MBM|MBM","Medan, Medan - MDN|MDN","Perbaungan, Medan - PBA|PBA","Padanghalaban, Medan - PHA|PHA","Pamingke, Medan - PME|PME","Perlanaan, Medan - PRA|PRA","Puluraja, Medan - PUR|PUR","Sei Bejangkar, Medan - SBJ|SBJ","Tebing Tinggi, Medan - TBI|TBI","Merak - MER|MER","Mojokerto - MR|MR","Meluwung - MLW|MLW","Bulakamba - BKA|BKA","Muara Enim - ME|ME","Masaran - MSR|MSR","Muarasaling - MSL|MSL","Nagreg - NG|NG","Ngrombo - NBO|NBO","Wilangan - WIL|WIL","Kotapadang - KOP|KOP","Notog - NTG|NTG","Wonosari - WNS|WNS","Cirebonprujakan - CNP|CNP","Nganjuk - NJ|NJ","Geneng - GG|GG","Ngunut - NT|NT","Kertapati, Palembang - KPT|KPT","Paninjawan - PNW|PNW","Papar - PPR|PPR","Lebeng - LBG|LBG","Paron - PA|PA","Parungkuda - PRK|PRK","Parungpanjang - PRP|PRP","Pasuruan - PS|PS","Patuguran - PAT|PAT","Pekalongan - PK|PK","Pemalang - PML|PML","Siantar - SIR|SIR","Petarukan - PTA|PTA","Prupuk - PPK|PPK","Plabuan - PLB|PLB","Plered - PLD|PLD","Babadan - BBD|BBD","Prabumulih - PBM|PBM","Prembun - PRB|PRB","Probolinggo - PB|PB","Purwakarta - PWK|PWK","Purwokerto - PWT|PWT","Jenar - JN|JN","Kutowinangun - KWN|KWN","Randublatung - RBG|RBG","Rangkas Bitung - RK|RK","Rantau Prapat - RAP|RAP","Sindanglaut - SDU|SDU","Slawi - SLW|SLW","Sragi - SRI|SRI","Sumberrejo - SRJ|SRJ","Saungnaga - SNA|SNA","Sidareja - SDR|SDR","Saradan - SRD|SRD","Semarangponcol, Semarang - SMC|SMC","Semarangtawang, Semarang - SMT|SMT","Sembung - SMB|SMB","Sepanjang - SPJ|SPJ","Serang - SG|SG","Rampah - RPH|RPH","Sidoarjo - SDA|SDA","Sikampuh - SKP|SKP","Purwosari, Solo - PWS|PWS","Solojebres, Solo - SK|SK","Solobalapan, Solo - SLO|SLO","Songgom - SGG|SGG","Sragen - SR|SR","Sruweng - SRW|SRW","Bumiayu - BMA|BMA","Srowot - SWT|SWT","Cipunegara, Subang - CRA|CRA","Pegadenbaru, Subang - PGB|PGB","Tanjungrasa, Subang - TJS|TJS","Sukabumi - SI|SI","Sumpiuh - SPH|SPH","Surabaya Pasar Turi, Surabaya - SBI|SBI","Surabaya Gubeng, Surabaya - SGU|SGU","Wonokromo, Surabaya - WO|WO","Tambak - TBK|TBK","Talun - TAL|TAL","Tangerang - TNG|TNG","Tanjung - TGN|TGN","Tanjungbalai - TNB|TNB","Awipari, Tasikmalaya - AW|AW","Ciawi, Tasikmalaya - CAW|CAW","Manonjaya, Tasikmalaya - MNJ|MNJ","Rajapolah, Tasikmalaya - RJP|RJP","Tasikmalaya, Tasikmalaya - TSM|TSM","Tebingtinggi - TI|TI","Tegal - TG|TG","Terisi - TIS|TIS","Tulungagung - TA|TA","Tulungbuyut - TLY|TLY","Tanjungkarang - TNK|TNK","Ujanmas - UJM|UJM","Ujungnegoro - UJN|UJN","Walikukun - WK|WK","Waru - WR|WR","Waruduwur - WDW|WDW","Warung Bandrek - WB|WB","Weleri - WLR|WLR","Wlingi - WG|WG","Brambanan, Yogyakarta - BBN|BBN","Lempuyangan, Yogyakarta - LPN|LPN","Sentolo, Yogyakarta - STL|STL","Wates, Yogyakarta - WT|WT","Yogyakarta, Yogyakarta - YK|YK"]};
var c={fromSelector:$("#widget-from"),toSelector:$("#widget-to"),switcher:$(".btn-switch-flight"),startDate:$("#flight-start"),endDate:$("#flight-end"),travelerSelector:$(".flight-traveler"),triggerTraveler:$("#flight-open-traveler"),closeTraveler:$(".close-traveler-flight"),tripSelector:$("#flight-trip"),isOneWayTip:false,triggerSearch:$(".btn-submit-search"),toggleTriggerHide:$(".btn-asyst-hide-mobile"),init:function(){q.desktop==true?$(".new-widget-booking .modal-dialog").addClass("modal-dialog-centered"):"";
var v=this;
this.switcher.click(function(){v.switchValue()
});
this.setAutocomplete(this.fromSelector);
this.fromSelector.on("autocompleteselect",function(w,x){setTimeout(function(){v.toSelector.focus()
},200)
});
var t=q.mobile==true?"right":"left";
this.setAutocomplete(this.toSelector,t);
this.toSelector.on("autocompleteselect",function(w,x){if(v.startDate.val()==""){v.startDate.datepicker().data("datepicker").show()
}});
this.setDatePicker(this.startDate,"left");
this.startDate.datepicker({onSelect:function(){var x=v.startDate.val().split("-");
var w=new Date(x[2],parseInt(x[1])-1,x[0]);
v.endDate.datepicker().data("datepicker").update("minDate",w);
v.endDate.datepicker().data("datepicker").clear();
if(v.tripSelector.val()=="R"){v.endDate.datepicker().data("datepicker").show()
}v.removeErrorClass(v.startDate)
}});
var u=q.mobile==true?"right":"left";
this.setDatePicker(this.endDate,u);
this.endDate.datepicker({onSelect:function(){v.removeErrorClass(v.endDate)
}});
this.tripSelector.change(function(){if($(this).val()=="R"){v.endDate.removeClass("disabled")
}else{if($(this).val()=="O"){v.isOneWayTip=true,v.endDate.addClass("disabled");
v.endDate.removeClass("error-widget")
}}});
this.triggerTraveler.click(function(){v.travelerSelector.show()
});
this.closeTraveler.click(function(){v.travelerSelector.hide()
});
this.triggerSearch.click(function(){v.search()
});
this.toggleTriggerHide.click(function(){var w=$(".button-floating-widget");
w.toggleClass("hide");
w.hasClass("hide")?v.toggleTriggerHide.addClass("on-target-hide"):v.toggleTriggerHide.removeClass("on-target-hide");
setTimeout(function(){w.hasClass("hide")?v.toggleTriggerHide.html("&#10094;"):v.toggleTriggerHide.html("&#10095;")
},500)
})
},setAutocomplete:function(u,t){t=t==undefined?"left":t;
var v=this;
u.autocomplete({source:n.dataAirport,minLength:0,classes:{"ui-autocomplete":"widget-autocomplete-revamp"},select:function(w,x){console.log($(this));
v.removeErrorClass($(this))
},position:{my:t+" top",at:t+" bottom"}}).focus(function(w){v.setAutocompleteReset($(this))
})
},setAutocompleteReset:function(t){var u=t.val();
t.data("uiAutocomplete").search("");
t[0].setSelectionRange(0,u.length)
},switchValue:function(){var u=this.fromSelector.val();
var t=this.toSelector.val();
this.fromSelector.val(t);
this.toSelector.val(u)
},setDatePicker:function(u,t){u.datepicker({dateFormat:"dd-mm-yyyy",autoClose:true,minDate:new Date(),position:"bottom "+t,language:"en"})
},search:function(){var B=this.validation();
if(B>0){return false
}var u="https://id-travel.asyst.co.id";
var x=this.fromSelector.val();
var E=x.replace("/Bali","");
E=E.substring(E.indexOf("(")+1,E.indexOf("-"));
var D=this.toSelector.val();
var C=D.replace("/Bali","");
C=C.substring(C.indexOf("(")+1,C.indexOf("-"));
var y=$(".ft-adult input").val()+"."+$(".ft-child input").val()+"."+$(".ft-infant input").val();
var v=this.tripSelector.val()=="R"?"2":"1";
var t=$("#flight-cabin").val();
var w=this.getDate(this.startDate.val());
var z=this.endDate.hasClass("disabled")?"1997-01-01":this.getDate(this.endDate.val());
var A=u+"/Booking/SearchFlight?a="+E+"."+C+"&d="+w+"."+z+"&p="+y+"&f="+v+"&c="+t;
window.open(A,"_blank")
},getDate:function(t){var u=t.split("-");
return u[2]+"-"+u[1]+"-"+u[0]
},validation:function(){var t=[this.startDate,this.toSelector,this.fromSelector];
if(!this.endDate.hasClass("disabled")){t.unshift(this.endDate)
}this.travelerSelector.find(".error-widget").removeClass("error-widget");
var u=0;
for(var v=0;
v<t.length;
v++){if(t[v].val()==""){t[v].focus();
t[v].addClass("error-widget");
u+=1
}}return u
},removeErrorClass:function(t){t.hasClass("error-widget")?t.removeClass("error-widget"):""
}};
if($(".new-widget-booking").length>0){var a=Object.create(c);
a.init()
}var o=Object.create(c);
var e={destinasiSelector:$("#widget-destinasi"),startDate:$("#hotel-start"),endDate:$("#hotel-end"),travelerSelector:$(".hotel-traveler"),triggerTraveler:$("#hotel-open-traveler"),closeTraveler:$(".close-traveler-hotel"),triggerSearch:$(".btn-search-hotel"),search:function(){i.init()
},init:function(){var t=this;
this.setAutocomplete(this.destinasiSelector);
o.setDatePicker(this.startDate,"left");
this.startDate.datepicker({onSelect:function(){var v=t.startDate.val().split("-");
var u=new Date(v[2],parseInt(v[1])-1,v[0]);
u.setDate(u.getDate()+1);
t.endDate.datepicker().data("datepicker").update("minDate",u);
t.endDate.datepicker().data("datepicker").clear();
t.endDate.datepicker().data("datepicker").show();
o.removeErrorClass(t.startDate)
}});
o.setDatePicker(this.endDate,"right");
this.endDate.datepicker({onSelect:function(){o.removeErrorClass(t.endDate)
}});
this.triggerTraveler.click(function(){t.travelerSelector.show()
});
this.closeTraveler.click(function(){t.travelerSelector.hide()
});
this.triggerSearch.click(function(){t.search()
})
},setAutocomplete:function(t){var u=this;
t.autocomplete({source:function(C,v){var z=$.ui.autocomplete.filter(n.dataCity,C.term);
var y=$.ui.autocomplete.escapeRegex(C.term),B=new RegExp("^"+y,"i"),x=$.grep(z,function(D){return B.test(D.label||D.value||D)
}),A=new RegExp(y,"i"),w=$.grep(z,function(D){return $.inArray(D,x)<0&&A.test(D.label||D.value||D)
});
v(x.concat(w));
$(".ui-menu-item div").each(function(){$(this).html($(this).text().split("|")[0])
})
},minLength:0,classes:{"ui-autocomplete":"widget-autocomplete-revamp"},select:function(w,x){console.log($(this));
$(this).autocomplete("close");
setTimeout(function(){$(this).blur()
},250);
w.preventDefault();
var v=x.item.label;
$(this).val(v.split("|")[0]);
if(v.split("|")[1]!=undefined){$(this).attr("data-hotelid",v.split("|")[1])
}else{$(this).removeAttr("data-hotelid")
}o.removeErrorClass($(this));
if(u.startDate.val()==""){u.startDate.datepicker().data("datepicker").show()
}}}).focus(function(v){o.setAutocompleteReset($(this))
})
},search:function(){var x=this.validation();
if(x>0){return false
}var w="https://id-travel.asyst.co.id";
var u=$("#ht-room-val").val();
var A=this.destinasiSelector.val();
var v=this.destinasiSelector.attr("data-hotelid");
var t=this.startDate.val();
var y=this.endDate.val();
var z=w+"/new/hotel/List/get?s="+A.split(",")[0]+".CO0094."+v+"."+t+"."+y+"."+u+"."+$("#ht-adult-val").val()+"."+$("#ht-child-val").val()+".Empty.CO0094.Empty";
window.open(z,"_blank")
},validation:function(){var t=[this.startDate,this.destinasiSelector];
if(!this.endDate.hasClass("disabled")){t.unshift(this.endDate)
}this.travelerSelector.find(".error-widget").removeClass("error-widget");
var u=0;
for(var v=0;
v<t.length;
v++){if(t[v].val()==""){t[v].focus();
t[v].addClass("error-widget");
u+=1
}}return u
}};
if($(".new-widget-booking").length>0){e.init();
var r=Object.create(c)
}var k={fromSelector:$("#kai-from"),toSelector:$("#kai-to"),switcher:$(".btn-switch-kai"),startDate:$("#kai-start"),endDate:$("#kai-end"),travelerSelector:$(".kai-traveler"),triggerTraveler:$("#kai-open-traveler"),closeTraveler:$(".close-traveler-kai"),triggerSearch:$(".btn-kai-search"),tripSelector:$("#kai-trip"),isOneWayTip:false,init:function(){var u=this;
this.switcher.click(function(){u.switchValue()
});
this.setAutocomplete(this.fromSelector);
this.fromSelector.on("autocompleteselect",function(v,w){setTimeout(function(){u.toSelector.focus()
},200)
});
var t=q.mobile==true?"right":"left";
this.setAutocomplete(this.toSelector,t);
this.toSelector.on("autocompleteselect",function(v,w){if(u.startDate.val()==""){u.startDate.datepicker().data("datepicker").show()
}});
r.setDatePicker(this.startDate,"left");
this.startDate.datepicker({onSelect:function(){var w=u.startDate.val().split("-");
var v=new Date(w[2],parseInt(w[1])-1,w[0]);
v.setDate(v.getDate()+1);
u.endDate.datepicker().data("datepicker").update("minDate",v);
u.endDate.datepicker().data("datepicker").clear();
if(u.tripSelector.val()=="R"){u.endDate.datepicker().data("datepicker").show()
}r.removeErrorClass(u.startDate)
}});
r.setDatePicker(this.endDate,"right");
this.endDate.datepicker({onSelect:function(){r.removeErrorClass(u.endDate)
}});
this.tripSelector.change(function(){if($(this).val()=="R"){u.endDate.removeClass("disabled")
}else{if($(this).val()=="O"){u.isOneWayTip=true,u.endDate.addClass("disabled");
u.endDate.removeClass("error-widget")
}}});
this.triggerTraveler.click(function(){u.travelerSelector.show()
});
this.closeTraveler.click(function(){u.travelerSelector.hide()
});
this.triggerSearch.click(function(){u.search()
})
},setAutocomplete:function(t){var u=this;
t.autocomplete({source:function(C,v){var z=$.ui.autocomplete.filter(n.dataStation,C.term);
var y=$.ui.autocomplete.escapeRegex(C.term),B=new RegExp("^"+y,"i"),x=$.grep(z,function(D){return B.test(D.label||D.value||D)
}),A=new RegExp(y,"i"),w=$.grep(z,function(D){return $.inArray(D,x)<0&&A.test(D.label||D.value||D)
});
v(x.concat(w));
$(".ui-menu-item div").each(function(){$(this).html($(this).text().split("|")[0])
})
},minLength:0,classes:{"ui-autocomplete":"widget-autocomplete-revamp"},select:function(w,x){console.log($(this));
$(this).autocomplete("close");
setTimeout(function(){$(this).blur()
},250);
w.preventDefault();
var v=x.item.label;
$(this).val(v.split("|")[0]);
if(v.split("|")[1]!=undefined){$(this).attr("data-hotelid",v.split("|")[1])
}else{$(this).removeAttr("data-hotelid")
}r.removeErrorClass($(this))
}}).focus(function(v){r.setAutocompleteReset($(this))
})
},getDate:function(t){var u=t.split("-");
return u[2]+"-"+u[1]+"-"+u[0]
},switchValue:function(){var u=this.fromSelector.val();
var t=this.toSelector.val();
this.fromSelector.val(t);
this.toSelector.val(u)
},validation:function(){var t=[this.startDate,this.toSelector,this.fromSelector];
if(!this.endDate.hasClass("disabled")){t.unshift(this.endDate)
}this.travelerSelector.find(".error-widget").removeClass("error-widget");
var u=0;
for(var v=0;
v<t.length;
v++){if(t[v].val()==""){t[v].focus();
t[v].addClass("error-widget");
u+=1
}}return u
}};
if($(".new-widget-booking").length>0){k.init()
}var j={set:function(t){if($(".new-widget-booking").length==0){return false
}var u=this;
t.incAdult.click(function(){u.increment($(this),t.maxTraveler,u.getTravelerRow(t.containerRow,t.appendDesc,t.label));
u.getTravelerRow(t.containerRow,t.appendDesc,t.label)
});
t.decAdult.click(function(){u.decrement($(this),t.minAdult);
u.getTravelerRow(t.containerRow,t.appendDesc,t.label)
});
t.incChild.click(function(){u.increment($(this),t.maxTraveler,u.getTravelerRow(t.containerRow,t.appendDesc,t.label));
u.getTravelerRow(t.containerRow,t.appendDesc,t.label)
});
t.decChild.click(function(){u.decrement($(this),t.minChild);
u.getTravelerRow(t.containerRow,t.appendDesc,t.label)
});
t.incInfant.click(function(){u.increment($(this),t.maxTraveler,u.getTravelerRow(t.containerRow,t.appendDesc,t.label));
u.getTravelerRow(t.containerRow,t.appendDesc,t.label)
});
t.decInfant.click(function(){u.decrement($(this),t.minInfant);
u.getTravelerRow(t.containerRow,t.appendDesc,t.label)
});
if(t.minRoom){t.incRoom.click(function(){u.increment($(this),t.maxRoom,u.getTravelerRow(t.containerRow,t.appendDesc,t.label,true));
u.getTravelerRow(t.containerRow,t.appendDesc,t.label,true)
});
t.decRoom.click(function(){u.decrement($(this),t.minRoom);
u.getTravelerRow(t.containerRow,t.appendDesc,t.label,true)
})
}},increment:function(u,t,v){var u=u.parent().parent().find("input");
var w=parseInt(u.val())+1;
if(v.total<t){u.val(w)
}},decrement:function(t,u){var t=t.parent().parent().find("input");
var v=parseInt(t.val())-1;
if(v>=u){t.val(v)
}},getTravelerRow:function(z,u,B,y){y=y==undefined?false:y;
var x=z.find(".form-group").eq(0).find("input").val();
var v=z.find(".form-group").eq(1).find("input").val();
var C=z.find(".form-group").eq(2).find("input").val();
var A=parseInt(x)+parseInt(v)+parseInt(C);
var w=x+" "+B.adult;
if(parseInt(v)>0){w+=", "+v+" "+B.child
}if(parseInt(C)>0){w+=", "+C+" "+B.infant
}if(B.room){var t=parseInt(z.find(".form-group").eq(3).find("input").val());
if(parseInt(t)>0){w+=", "+t+" "+B.room
}if(y){A=t
}}u.html(w);
return{adult:x,child:v,infant:C,total:A}
}};
j.set({container:$(".flight-traveler"),containerRow:$(".flight-travele-row"),appendDesc:$("#flight-open-traveler"),incAdult:$("#ft-adult-inc"),decAdult:$("#ft-adult-dec"),incChild:$("#ft-child-inc"),decChild:$("#ft-child-dec"),incInfant:$("#ft-infant-inc"),decInfant:$("#ft-infant-dec"),maxTraveler:7,minAdult:1,minChild:0,minInfant:0,label:{adult:$(".flight-traveler").attr("wording-adult"),child:$(".flight-traveler").attr("wording-child"),infant:$(".flight-traveler").attr("wording-infant")}});
j.set({container:$(".kai-traveler"),containerRow:$(".kai-traveler-row"),appendDesc:$("#kai-open-traveler"),incAdult:$("#kai-adult-inc"),decAdult:$("#kai-adult-dec"),incChild:$("#kai-child-inc"),decChild:$("#kai-child-dec"),incInfant:$("#kai-infant-inc"),decInfant:$("#kai-infant-dec"),maxTraveler:7,minAdult:1,minChild:0,minInfant:0,label:{adult:$(".kai-traveler").attr("wording-adult"),child:$(".kai-traveler").attr("wording-child"),infant:$(".kai-traveler").attr("wording-infant")}});
j.set({container:$(".hotel-traveler"),containerRow:$(".hotel-travele-row"),appendDesc:$("#hotel-open-traveler"),incAdult:$("#ht-adult-inc"),decAdult:$("#ht-adult-dec"),incChild:$("#ht-child-inc"),decChild:$("#ht-child-dec"),incInfant:$("#ht-infant-inc"),decInfant:$("#ht-infant-dec"),incRoom:$("#ht-room-inc"),decRoom:$("#ht-room-dec"),maxTraveler:7,minAdult:1,minChild:0,minInfant:0,minRoom:1,maxRoom:3,label:{adult:"Dewasa",child:"Anak",infant:"Bayi",room:"Kamar"}});
var g={init:function(){if($('[pagination-row="true"]').length>0){$('[pagination-row="true"]').each(function(){var u=$(this).attr("trigger-by");
var w=parseInt($(this).attr("max-load-per-row"));
var x=parseInt($(this).attr("max-grid"));
var t=$(this).attr("target-show");
var v=$(this);
$(u).click(function(){var C=parseInt(v.attr("current-load-row"));
var B=w*x;
var z=x*C;
var y=z+B;
for(var A=z;
A<y;
A++){v.find(t).eq(A).removeClass("onhide")
}v.attr("current-load-row",C+1);
if(v.find(t).eq(y).length<=0){$(this).removeClass("d-flex").hide()
}})
})
}}};
g.init();
var f={container:$(".new-slideshow-responsive"),init:function(){if(this.container.length>0){this.setSlick(this.container)
}},setSlick:function(t){t.slick({infinite:true,autoplay:true,dots:q.mobile,arrows:q.desktop,slidesToShow:1,slidesToScroll:1})
}};
f.init()
});
$(document).ready(function(){var eventCollection=eval($("#calendar-event-data").html());
eventCollection=eventCollection==null?[]:eventCollection;
console.log(eventCollection);
var calendarCarousel={init:function(){this.appendGroupEl();
this.grouping();
var dots=$(window).width()>767?false:true;
if(dots||this.parent.attr("is-desktop-carousel")!="false"){this.parent.slick({dots:dots,infinite:false,speed:300,slidesToShow:4,slidesToScroll:4,arrows:true,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:true,dots:true}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]});
var currentMonth=new Date().getMonth()+1;
this.parent.slick("slickGoTo",currentMonth-1)
}else{this.parent.addClass("row")
}$("."+this.groupClassName+currentMonth+" .group-content").addClass("active")
},parent:$(".container-plan-your-trip-list"),groupClassName:"group-list-",data:eventCollection,allMonth:[1,2,3,4,5,6,7,8,9,10,11,12],allMonthTitle:["January","February","March","April","May","June","July","August","September","October","November","December"],appendGroupEl:function(){var _this=this;
var wordingNotFound=window.location.href.indexOf("/id/")>=0?"Event Belum Tersedia":"Event is currently unavailable";
var noEventWording=this.parent.attr("data-no-event-wording")||wordingNotFound;
this.allMonth.forEach(function(filterMonth,i){var el='<div class="group-list p-2 '+_this.groupClassName+filterMonth+'"><div class="group-content p-3"><h4 class="section-title">'+_this.allMonthTitle[i]+'</h4><p class="event-empty">'+noEventWording+"</p></div></div>";
_this.parent.append(el)
})
},getDate:function(itemstart){var itemDate=new Date(itemstart);
var itemYear=itemDate.getFullYear();
var itemMonth=itemDate.getMonth()+1;
var itemDay=itemDate.getDate();
return itemDay
},grouping:function(){var _this=this;
var currentYear=2023;
var allMonth=this.allMonth;
var eventMonth={};
this.data.forEach(function(item){var itemDate=new Date(item.start);
var itemYear=itemDate.getFullYear();
var itemMonth=itemDate.getMonth()+1;
var itemDay=itemDate.getDate();
var itemDayEnd=null;
if(item.end){var itemDayEnd=_this.getDate(item.end)
}if(itemDayEnd){itemDay+="-"+itemDayEnd
}var itemCollection=[];
var toAppend=$("."+_this.groupClassName+itemMonth+" .group-content");
itemDay.toString().length==1?itemDay="0"+itemDay:"";
var url,customStyle;
if(item.preventclickable=="false"){url=item.eventpostpage?item.eventpostpage:item.url;
customStyle=""
}else{url="javascript:void(0)";
customStyle="cursor : default !important"
}if(itemYear==currentYear){toAppend.append('<a style="'+customStyle+'" data-date="'+itemDay+'" href="'+url+'" class="event-list-item mt-2 d-flex"><div style="width : 35px;" class="me-2"><span class="calendar-icon d-flex fw-bold justify-content-center align-items-center"> <span class="calendar-clip"></span> <span class="calendar-clip"></span> <span class="calendar-clip"></span> <span class="calendar-clip"></span> <span style="font-size: 12px;"> '+itemDay+" </span></span></div><span>"+item.title+"</span></a>")
}});
$(".group-content").each(function(){$(this).find(".event-list-item").length>0?$(this).find(".event-empty").remove():""
})
}};
$(".container-plan-your-trip-list").length>0?calendarCarousel.init():""
});
function createReminder(){var e=$("#event-input").val();
var g=$("#location-input").val();
var b=$("#date-input").val();
var i=$("#date-end-input").val();
var a=$("#website-input").val();
var f=$("#organizer-input").val();
var h=$("#description-input").val();
var c={title:encodeURI(e)+" - "+encodeURI(f),description:h+" - "+encodeURI(a),start:formatTime(new Date(b)),end:formatTime(new Date(i)),location:encodeURI(g)};
var d="https://www.google.com/calendar/render?action=TEMPLATE&text="+c.title+"&details="+c.description+"&location="+c.location+"&dates="+c.start+"%2F"+c.end;
window.open(d,"_blank")
}function formatTime(c){var a=c.toISOString();
var e=a.replace(/[-]/g,"");
var b=e.replace(/[:]/g,"");
var d=b;
return d
}$(document).ready(function(){var d=$(".indt-container");
d.removeClass("indt-container");
d.addClass("container");
if($(".slideshow-responsive-AT .new-slide-nav .slide-nav-li").length=0){$(".slideshow-responsive-AT .new-slide-nav").addClass("d-none")
}if(document.location.href.indexOf("/packages/airlines")>0){$("body").addClass("packages-asyst")
}$(".download .destination-tab-btn").hide();
if(document.location.href.indexOf("/event/")>0){setTimeout(function(){if($(".event-detail").length>0){var k=moment($("#date-input").attr("value")).format("YYYYMMDDTHHmmss.000Z");
var g=moment($("#date-end-input").attr("value")).format("YYYYMMDDTHHmmss.000Z");
var j=$("#event-input").val();
var f=$("#location-input").val();
var i=$("#description-input").val();
var h="https://www.google.com/calendar/render?action=TEMPLATE&text="+j+"&details="+i+"&location="+f+"&dates="+k+"%2F"+g;
$("#link-calendar-click").attr("href",h)
}},500);
$(function(){$("#datepicker").datepicker()
});
if($("#map").length>0){var e=$(".map-marker").data("lat");
var b=$(".map-marker").data("long");
var c=L.map("map",{center:[e,b],zoom:16,zoomControl:false});
L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}).addTo(c);
$(".map-marker").children().each(function(){var f={lat:"",long:"",color:"",img:"",text:""};
f.lat=$(this).data("lat");
f.long=$(this).data("long");
f.img=$(this).data("img");
f.color=$(this).data("color");
f.text=$(this).data("text");
a(f)
});
function a(f){icon=L.divIcon({className:"custom-div-icon",html:'<div class="marker-pin '+f.color+' row justify-content-center no-gutters align-items-center"><div class="img-icon px-2 col-3"><img loading="lazy" src="'+f.img+'" style="max-width : 100% !important"/></div><div class="img-icon col-9"><h5 class="mb-0 px-2 text-white pb-0 font-weight-bold"><sup>Rp </sup>'+f.text+"</h5></div></div>",iconSize:[180,50],iconAnchor:[90,50]});
L.marker([f.lat,f.long],{icon:icon}).addTo(c)
}}}});
var currPath=document.location;
$(document).ready(function(){if($(".video-carousel").length>0||$(".travel-blog-list").length>0){if(currPath.origin.indexOf("travelindonesia.cn")<0){(function(){if(typeof YT=="undefined"||typeof YT.Player=="undefined"){var a=document.createElement("script");
a.src="https://www.youtube.com/iframe_api";
a.async=true;
var b=document.getElementsByTagName("script")[0];
b.parentNode.insertBefore(a,b)
}$.fn.embedYouTubeVid=function(k){var e,d,c;
function i(){d='<div class="play-button"><img loading="lazy" src="/content/dam/indtravelrevamp/home-revamp/playbutton.svg" /></div>'
}function g(m,n,l,o){e='<img loading="lazy" class="video-thumb object-fit-cover" src="'+m+'" />';
if(o){if(o!=="image"){i();
l.append(e+d)
}else{l.append(e)
}}else{i();
l.append(e)
}}function j(n,o,m){var l=$("<video class='html-video' width='100%' controls muted autoplay src="+n+"></video>");
o.find(".video-thumb").css({opacity:0});
o.find(".play-button").css({opacity:0});
o.find(".video-thumb").hide();
o.find(".play-button").hide();
o.find(".i-vid").append(l);
setTimeout(function(){o.find(".html-video").prop("muted",false)
},500);
o.find(".i-vid").on("mouseleave",function(){o.find(".video-thumb").css({opacity:1});
o.find(".video-thumb").show();
o.find(".play-button").css({opacity:1});
o.find(".play-button").show();
o.find(".html-video").css({opacity:0});
o.find(".html-video").hide();
o.find(".html-video").trigger("pause")
})
}function h(o,l,r,n){var q=l;
let currPlayer="",isUnMuted=false;
function m(){if($(l).children("iframe").length==0){currPlayer=new YT.Player(r,{videoId:o,playerVars:{playsinline:1,rel:0},events:{onReady:s,onStateChange:p}})
}$(l).find(".video-thumb").css({opacity:0});
$(l).find(".play-button").css({opacity:0})
}function s(t){t.target.mute();
t.target.playVideo();
setTimeout(function(){t.target.unMute()
},2000);
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){var u=$(currPlayer)[0].h;
$(window).scroll(function(){var z=$(window).outerHeight()/4;
var x=$(".journey-section").position().top;
var y=x+z;
var w=x+z+z;
var B=$(this).scrollTop();
var v=$(".journey-section").find("div.journey-video.slick-slide.slick-current.slick-active.slick-center div.video-player");
if(B>x&&B<w){if($(u).parents(".journey-section .slick-slide").is(".slick-current")){var C=$(".journey-section").find(".slick-next");
var A=$(".journey-section").find(".slick-prev");
$(C).click(function(){currPlayer.pauseVideo();
$(v).find("iframe").css({opacity:0});
$(v).find(".video-thumb").css({opacity:1});
$(v).find(".play-button").css({opacity:1})
});
$(A).click(function(){currPlayer.pauseVideo();
$(v).find("iframe").css({opacity:0});
$(v).find(".video-thumb").css({opacity:1});
$(v).find(".play-button").css({opacity:1})
});
$(u).css({opacity:1});
currPlayer.playVideo()
}}else{currPlayer.pauseVideo();
$(v).find("iframe").css({opacity:0});
$(v).find(".video-thumb").css({opacity:1});
$(v).find(".play-button").css({opacity:1})
}})
}else{q.on("mouseleave",function(){q.children("iframe").css({opacity:0});
t.target.pauseVideo();
$(l).find(".video-thumb").css({opacity:1});
$(l).find(".play-button").css({opacity:1});
if(q.children(".video-thumb").length>1){q.children().css({opacity:0});
t.target.pauseVideo();
$(l).find(".video-thumb").css({opacity:1});
$(l).find(".play-button").css({opacity:1})
}})
}}function p(t){if(t.data===2){q.on("mouseenter",function(){$(l).find(".video-thumb").css({opacity:0});
$(l).find(".play-button").css({opacity:0});
q.children("iframe").css({opacity:1});
currPlayer.playVideo()
})
}}m()
}var f=$.extend({},k);
return this.each(function(){var r=$(this),p=r.attr("data-id"),n=r.attr("data-url"),l=r.attr("data-thumbnail"),s=r.find("div").attr("id"),o=r.attr("data-urltype")?r.attr("data-urltype"):r.attr("data-type");
if($(window).width()>768){l=l
}else{l=r.attr("data-thumbnail-mobile")!=undefined?r.attr("data-thumbnail-mobile"):l
}g(l,p,r,o);
if(!o){if(p){if(p.indexOf("/content")>=0){o="video"
}}}if(o!=="image"){var q=$(window).outerHeight()/4;
var m;
if($(".journey-section").length>0){m=$(".journey-section").position().top
}else{m=0
}if(o!=="video"){if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){r.on("mouseenter ",function(){h(p,r,s,l,false)
});
$(window).scroll(function(){var u=m+q;
var t=m+q+q+q;
var w=$(this).scrollTop();
var v=$(".journey-section").find("div.journey-video.slick-slide.slick-current.slick-active.slick-center div.video-player");
if(w>m&&w<t){if(v.length>0){h(p,v,s,l,false)
}}})
}else{r.on("mouseenter ",function(){if(p){if(p.indexOf("/content")>=0){j(n,r,l)
}else{console.log(r);
h(p,r,s,l,false)
}}})
}}else{r.on("mouseenter ",function(){console.log("mouseenter 2");
if(r.find(".i-vid").html()==""){console.log(r.find(".i-vid").html()=="");
j(n,r,l)
}else{r.find(".video-thumb").css({opacity:0});
r.find(".play-button").css({opacity:0});
r.find(".video-thumb").hide();
r.find(".play-button").hide();
var t=r.find(".html-video");
t.trigger("play");
t.css({opacity:1});
t.show();
setTimeout(function(){t.prop("muted",false)
},500)
}})
}}})
};
$(".video-player").embedYouTubeVid()
})()
}}});
$(document).ready(function(){$(".journey-section .video-player").hover(function(){$(this).find("iframe").css({opacity:"1","z-index":"5"})
},function(){$(this).find("iframe").css({opacity:"0","z-index":"0"})
});
$(".carousel-wrapper-testimony .video-player").hover(function(){$(this).find("iframe").css({opacity:"1","z-index":"5"})
},function(){$(this).find("iframe").css({opacity:"0","z-index":"0"})
});
if($(".acc-best-offer").length>0){var e=$(".acc-best-offer .slider");
$(".acc-best-offer .slider").slick({arrows:true,slidesToShow:4,slidesToScroll:4,autoplaySpeed:2000,appendArrows:e,nextArrow:'<div class="slick-next with-img"><img loading="lazy" src="https://www.indonesia.travel/content/dam/indtravelrevamp/home-revamp/arrow.svg" /></div>',prevArrow:'<div style="width : 32px; height : 32px; background : black; " class="slick-prev with-img"><img loading="lazy" src="https://www.indonesia.travel/content/dam/indtravelrevamp/home-revamp/arrow.svg" style="transform : rotate(180deg)" /></div>',responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]});
$(".acc-best-offer .slick-slide").sameHeight()
}var d=$(".general-info-slider .slider");
$(".general-info-slider .slider").slick({arrows:true,variableWidth:true,appendArrows:d,nextArrow:'<div class="slick-next with-img"><img loading="lazy" src="https://www.indonesia.travel/content/dam/indtravelrevamp/home-revamp/arrow.svg" /></div>',prevArrow:'<div style="width : 32px; height : 32px; background : black; " class="slick-prev with-img"><img loading="lazy" src="https://www.indonesia.travel/content/dam/indtravelrevamp/home-revamp/arrow.svg" style="transform : rotate(180deg)" /></div>',responsive:[{breakpoint:1024,settings:{slidesToShow:4,variableWidth:true,slidesToScroll:1}},{breakpoint:992,settings:{variableWidth:false,slidesToShow:1,slidesToScroll:1}}]});
if($(".airlines-best-offer").length>0){var h=$(".airlines-best-offer .slider");
$(".airlines-best-offer .slider").slick({arrows:true,slidesToShow:1,slidesToScroll:1,autoplaySpeed:2000,appendArrows:h,nextArrow:'<div class="slick-next with-img"><img loading="lazy" src="https://www.indonesia.travel/content/dam/indtravelrevamp/home-revamp/arrow.svg" /></div>',prevArrow:'<div style="width : 32px; height : 32px; background : black; " class="slick-prev with-img"><img loading="lazy" src="https://www.indonesia.travel/content/dam/indtravelrevamp/home-revamp/arrow.svg" style="transform : rotate(180deg)" /></div>'})
}$(".general-info-slider .slider").on("afterChange",function(j,n){var k=$(".general-info-slider .slider .slick-slide[data-slick-index="+n.currentSlide+"].item");
var l=k.data("description");
var m=k.data("title");
var i=k.data("url");
$(".general-info-description").html(l);
$(".general-info-title").html(m);
$(".general-info-link").attr("href",i)
});
var c=$(".general-info-slider .slider .slick-slide[data-slick-index=0].item");
var f=c.data("description");
var g=c.data("title");
var b=c.data("url");
$(".general-info-slider .general-info-description").html(f);
$(".general-info-slider .general-info-title").html(g);
$(".general-info-link").attr("href",b);
var a=$(".star-count").data("star");
for(let index=0;
index<5;
index++){if(index<a){$(".star-count").append('<i class="fa fa-star text-teal"></i>')
}else{$(".star-count").append('<i class="fa fa-star text-grey"></i>')
}}});
if($(".destination-maps").length>0){if($(window).width()<576){var size=4
}else{var size=5
}var map=L.map("map-area",{zoomControl:false}).setView([-1.889306,117.917266],size);
$.getJSON("/etc/designs/revamp2021/clientlib-site/js/indonesia-prov.geojson",function(c){var a=$("#map-data").data("tag");
var b=$("#map-data").data("area");
L.geoJson(c,{style:function(d){if(b=="land"){if(a=="JAWA"){switch(d.properties.Propinsi){case"BANTEN":return{color:"#fff",weight:1,fillOpacity:0.8,fillColor:"#5EE6B8"};
case"JAWA TIMUR":return{color:"#fff",weight:1,fillOpacity:0.8,fillColor:"#5EE6B8"};
case"JAWA BARAT":return{color:"#fff",weight:1,fillOpacity:0.8,fillColor:"#5EE6B8"};
case"JAWA TENGAH":return{color:"#fff",weight:1,fillOpacity:0.8,fillColor:"#5EE6B8"};
case"DAERAH ISTIMEWA YOGYAKARTA":return{color:"#fff",weight:1,fillOpacity:0.8,fillColor:"#5EE6B8"};
case"DKI JAKARTA":return{color:"#fff",weight:1,fillOpacity:0.8,fillColor:"#5EE6B8"}
}}if(a=="KALIMANTAN"){switch(d.properties.Propinsi){case"KALIMANTAN SELATAN":return{color:"#fff",weight:1,fillOpacity:0.8,fillColor:"#5EE6B8"};
case"KALIMANTAN TIMUR":return{color:"#fff",weight:1,fillOpacity:0.8,fillColor:"#5EE6B8"};
case"KALIMANTAN BARAT":return{color:"#fff",weight:1,fillOpacity:0.8,fillColor:"#5EE6B8"};
case"KALIMANTAN TENGAH":return{color:"#fff",weight:1,fillOpacity:0.8,fillColor:"#5EE6B8"};
case"KALIMANTAN UTARA":return{color:"#fff",weight:1,fillOpacity:0.8,fillColor:"#5EE6B8"}
}}if(a=="SULAWESI"){switch(d.properties.Propinsi){case"SULAWESI SELATAN":return{color:"#fff",weight:1,fillOpacity:0.8,fillColor:"#5EE6B8"};
case"SULAWESI TENGGARA":return{color:"#fff",weight:1,fillOpacity:0.8,fillColor:"#5EE6B8"};
case"SULAWESI BARAT":return{color:"#fff",weight:1,fillOpacity:0.8,fillColor:"#5EE6B8"};
case"SULAWESI TENGAH":return{color:"#fff",weight:1,fillOpacity:0.8,fillColor:"#5EE6B8"};
case"SULAWESI UTARA":return{color:"#fff",weight:1,fillOpacity:0.8,fillColor:"#5EE6B8"};
case"GORONTALO":return{color:"#fff",weight:1,fillOpacity:0.8,fillColor:"#5EE6B8"}
}}if(a=="MP"){switch(d.properties.Propinsi){case"PAPUA BARAT":return{color:"#fff",weight:1,fillOpacity:0.8,fillColor:"#5EE6B8"};
case"PAPUA":return{color:"#fff",weight:1,fillOpacity:0.8,fillColor:"#5EE6B8"};
case"MALUKU UTARA":return{color:"#fff",weight:1,fillOpacity:0.8,fillColor:"#5EE6B8"};
case"MALUKU":return{color:"#fff",weight:1,fillOpacity:0.8,fillColor:"#5EE6B8"}
}}if(a=="BN"){switch(d.properties.Propinsi){case"BALI":return{color:"#fff",weight:1,fillOpacity:0.8,fillColor:"#5EE6B8"};
case"NUSATENGGARA BARAT":return{color:"#fff",weight:1,fillOpacity:0.8,fillColor:"#5EE6B8"};
case"NUSA TENGGARA TIMUR":return{color:"#fff",weight:1,fillOpacity:0.8,fillColor:"#5EE6B8"}
}}if(a=="SUMATERA"){switch(d.properties.Propinsi){case"SUMATERA SELATAN":return{color:"#fff",weight:1,fillOpacity:0.8,fillColor:"#5EE6B8"};
case"SUMATERA BARAT":return{color:"#fff",weight:1,fillOpacity:0.8,fillColor:"#5EE6B8"};
case"SUMATERA UTARA":return{color:"#fff",weight:1,fillOpacity:0.8,fillColor:"#5EE6B8"};
case"ACEH":return{color:"#fff",weight:1,fillOpacity:0.8,fillColor:"#5EE6B8"};
case"BENGKULU":return{color:"#fff",weight:1,fillOpacity:0.8,fillColor:"#5EE6B8"};
case"JAMBI":return{color:"#fff",weight:1,fillOpacity:0.8,fillColor:"#5EE6B8"};
case"LAMPUNG":return{color:"#fff",weight:1,fillOpacity:0.8,fillColor:"#5EE6B8"};
case"RIAU":return{color:"#fff",weight:1,fillOpacity:0.8,fillColor:"#5EE6B8"};
case"BANGKA BELITUNG":return{color:"#fff",weight:1,fillOpacity:0.8,fillColor:"#5EE6B8"};
case"KEPULAUAN RIAU":return{color:"#fff",weight:1,fillOpacity:0.8,fillColor:"#5EE6B8"};
case"DI. ACEH":return{color:"#fff",weight:1,fillOpacity:0.8,fillColor:"#5EE6B8"}
}}}else{switch(d.properties.Propinsi){case a:return{color:"#5EE6B8",weight:1,fillOpacity:0.8,fillColor:"#5EE6B8"}
}}},color:"#fff",weight:1,fillColor:"fff",opacity:1}).addTo(map);
map.dragging.disable();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();
map.boxZoom.disable();
map.keyboard.disable()
})
}$(document).ready(function(){$(".group-content").each(function(){var j=$(this).find("a").sort(function(n,l){var m=parseInt($(n).data("date"));
var k=parseInt($(l).data("date"));
return m<k?-1:m>k?1:0
});
$(this).find("a").remove();
$(j).insertAfter($(this).find(".section-title"))
});
$(".group-list").each(function(k){var p=this;
var j=$(this).find(".event-list-item");
var o=4;
var n=Math.ceil(j.length/o);
var m=j;
for(var l=0;
l<m.length;
l+=o){m.slice(l,l+o).wrapAll('<div class="group-event"></div>')
}$(this).find(".group-event").wrapAll('<div class="group-event-slider"></div>');
setTimeout(function(){if($(p).find(".group-event-slider").length>0){$(p).find(".group-event-slider").slick({arrows:true,swipe:false,infinite:false,dots:false})
}},1000)
});
setTimeout(function(){$(".group-content").sameHeight()
},1000);
var i={request:function(k,n,m,l){if(!m){m="POST"
}if(!l){l="json"
}var j=$.ajax({url:k,method:m,dataType:l,data:n,error:function(p,o){console.log(k+" with method "+m+" =>");
console.log(n);
console.log(arguments)
}});
return j
},sample:function(){return('ajax.request("/Amala", {f:"logout"}, "GET").done(function( response ){if(response.status && response.status.responsecode == "200"){garudaUtils.deleteCookie("garudamember");}});')
}};
var a=$("#load-travel-y-t-1");
var d={url:"",container:"",method:"GET",dataType:"text",itemPerPagination:10,currentPage:1,messageError:"No data found",afterLoad:{append:true,position:"top"},className:{onLoad:"onload-ajax",onEnd:"onend-ajax"},debugResult:true,parameter:function(k){var l={};
if(k.length>0){for(var j=0;
j<k.length;
j++){l[k[j].name]=k[j].el.val()
}}return l
},call:function(l){var n=this;
var k=Object.create(i);
var m=n.parameter(l.selector);
n.container.addClass(n.className.onLoad);
var j=k.request(n.url,m,n.method,n.dataType);
j.done(function(o){$(".travel-list").html(o);
$(".references-item .card").sameHeight();
var p=$(".travel-list").attr("max-grid");
if($(".references-item").length>p){$(".travel-list").attr("current-load-row","1");
a.addClass("d-flex").show()
}else{a.removeClass("d-flex").hide()
}return false
});
j.always(function(){n.container.removeClass(n.className.onLoad)
})
},init:function(k){if(k.container){this.container=k.container
}if(k.url){this.url=k.url
}else{this.url=k.container.attr("data-url")
}var l=this;
if(k.trigger&&k.triggerBy=="click"){k.trigger.on(k.triggerBy,function(){l.call(k)
})
}if(k.selector.length>0){for(var j=0;
j<k.selector.length;
j++){if(k.selector[j].ajaxOnSelectorChange){k.selector[j].el.on("change",function(){l.call(k)
})
}}}}};
var e={el:$(".travel-references"),container:$(".travel-list"),btn:$("#load-travel-y-t"),btn_pagination:$("#load-travel-y-t-1"),url:"",init:function(){if(this.el.length==0){return false
}var k=this;
var j=Object.create(d);
j.init({container:k.container,trigger:k.btn,triggerBy:"click",selector:[{name:"tagging-1",el:$("#pyt-tagging-1"),ajaxOnSelectorChange:true},{name:"tagging-2",el:$("#pyt-tagging-2"),ajaxOnSelectorChange:true}]})
}};
e.init();
$(".references-item .card").sameHeight();
$("#load-travel-y-t-1").click(function(){$(".references-item .card").removeAttr("style");
setTimeout(function(){$(".references-item .card").sameHeight()
},1000)
});
if($(".airline-tab").length>0){$(".airline-tab").each(function(){var j=$(this).data("path");
j=j.split("/");
j=j[j.length-1];
var k=$(this).attr("href");
k=k.split("/");
k=k[k.length-1];
if(j!="airlines"){if(k.indexOf(j)>=0){$(this).addClass("active")
}}})
}setTimeout(function(){$(".carousel-wrapper-testimony.hide-media .carousel-item .content .text .card").sameHeight()
},1000);
setTimeout(function(){$(".ins-notification-content").attr("style","");
$(".ins-instory #ins-api-stories.stories .story > a").attr("style","")
},3000);
$(".microsite-links select").on("change",function(){console.log($(this).find(":selected").val());
var j=$(this).val();
if(j){window.open(j,"_BLANK")
}});
$(".microsite-links select option").on("click",function(){$(".microsite-links select").trigger("change")
});
if($("#email_subscribe").length>0){function g(l){var k=l+"=";
var n=decodeURIComponent(document.cookie);
var j=n.split(";");
for(var m=0;
m<j.length;
m++){var o=j[m];
while(o.charAt(0)==" "){o=o.substring(1)
}if(o.indexOf(k)==0){return o.substring(k.length,o.length)
}}return""
}var h=$("#email_subscribe").attr("data-country")||"gb";
var b=new bootstrap.Modal(document.getElementById("modal-email-subscribe"));
var f=new bootstrap.Modal(document.getElementById("modal-email-thanks"));
$("#email_subscribe").change(function(){});
$("#subscribe_mail").click(function(){$("#form_subscribe").submit();
b.hide()
});
$("#email-subscribe-agreement").change(function(){if($("#email-subscribe-agreement").is(":checked")){console.log($(this).val())
}});
$("#email_subscribe").keydown(function(j){if(j.keyCode==13){j.preventDefault();
return false
}})
}var c=$(".subscribe-form-content button");
if(c.length>0){$("#form_subscribe").validate({rules:{email_subscribe:{required:true,email:true}},focusInvalid:true,onkeyup:function(j){if($(j).valid()){c.css({"pointer-events":"all"})
}else{c.css({"pointer-events":"none"})
}},submitHandler:function(l){var m=$("#email_subscribe").val();
if($("#email-subscribe-agreement").is(":checked")){var k=true
}else{var k=false
}var j=document.location.host.indexOf("4502")>-1?"/content/indtravelrevamp/gb/en/subscribe-email.html?e=":"/gb/en/subscribe-email?e=";
$.ajax({type:"GET",url:j+m+"&loc="+h+"&accept_3rd="+k,success:function(o){var n=o.substring(o.indexOf("<datalike>")+10,o.indexOf("</datalike>"));
f.show();
console.log(n);
if(n){$("#result-message").text(n)
}if($("#form_subscribe").length>0){document.getElementById("form_subscribe").reset();
$("#form_subscribe").validate().resetForm()
}}})
}})
}if($(".livefyre-carousel-sg").length>0){$(".ig-item").click(function(){var j=$(this).data("index");
if($(".modal-content-slider.slick-slider").length>0){$(".modal-content-slider").slick("slickGoTo",j)
}else{setTimeout(function(){var k=$(".modal-content-slider");
$(".modal-content-slider").slick({appendArrows:k,nextArrow:'<div class="slick-next with-img"><img loading="lazy" src="https://www.indonesia.travel/content/dam/indtravelrevamp/home-revamp/arrow.svg" /></div>',prevArrow:'<div style="width : 32px; height : 32px; background : black; " class="slick-prev with-img"><img loading="lazy" src="https://www.indonesia.travel/content/dam/indtravelrevamp/home-revamp/arrow.svg" style="transform : rotate(180deg)" /></div>'});
$(".modal-content-slider").slick("slickGoTo",j)
},300)
}})
}});
$(document).ready(function(){function k(l){if(window.hostname&&window.hostname.indexOf("indonesia.travel")>-1){l=l.replace("/content/indtravelrevamp","").replace(".html","")
}window.location=l
}$(".leaflet-bottom.leaflet-right").hide();
$(".leaflet-shadow-pane").find("img").remove();
var a=$(".carousel-wrapper-testimony");
var g,j,f;
if(!$(".carousel-wrapper-testimony").hasClass("hide-media")){g=1;
j=1;
f=true
}else{g=3;
j=3;
f=false
}$(".carousel-wrapper-testimony").each(function(){$(this).slick({arrows:true,infinite:f,slidesToShow:g,slidesToScroll:j,autoplay:false,autoplaySpeed:3000,responsive:[{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1}}]})
});
var e=$(".carousel-wrapper-variable-width");
var i=e.attr("root-country")=="ar"?true:false;
$(".carousel-wrapper-variable-width").slick({infinite:true,autoplay:false,autoplaySpeed:3000,slidesToShow:1,centerPadding:"10px",centerMode:true,variableWidth:true,appendArrows:e,rtl:i,nextArrow:'<div class="slick-next"><img src="/page-assets/arrow.svg" /></div>',prevArrow:'<div style="width : 32px; height : 32px;" class="slick-prev"><img src="/page-assets/arrow.svg" style="transform : rotate(180deg)" /></div>'});
$(".journey-section .journey-video").removeClass("carousel-item");
var c=$(".plan-your-trip-slider");
$(".plan-your-trip-slider").slick({infinite:true,speed:300,slidesToShow:1,centerMode:true,variableWidth:true,appendArrows:c,nextArrow:'<div class="slick-next"><img src="https://svgshare.com/i/Ssw.svg" /></div>',prevArrow:'<div style="width : 32px; height : 32px; " class="slick-prev"><img src="https://svgshare.com/i/Ssw.svg" style="transform : rotate(180deg)" /></div>'});
var h=document.getElementsByTagName("body");
var b=h[0].classList;
b.add("lightmode");
function d(){var m=document.getElementById("changemode").checked;
var l=h[0].classList;
if(m){console.log(l);
l.remove("lightmode");
l.add("darkmode")
}else{console.log(l);
l.remove("darkmode");
l.add("lightmode")
}}});
$(function(){if($('[data-social-share-type="right"]').length>0){var I=$("#latitude").text();
var H=$("#longtitude").text();
if(I&&H){var F=$("#zoom").text();
var u=$("#wholelatitude").text();
var r=$("#wholelongitude").text();
var K=$("#wholetitle").text();
var i=r.split(",");
var k=u.split(",");
var y=K.split(",");
var J=$("#pageTitle").text();
if((window.location.href.indexOf("bali-nusa-tenggara/sumbawa")&&window.location.href.indexOf("travelindonesia.cn"))==-1){var s=L.map("maplet").setView([I,H],F);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:""}).addTo(s)
}else{var s=L.map("maplet",{center:[I,H],zoom:8});
if(L.Proj){L.CRS.Baidu=new L.Proj.CRS("EPSG:900913","+proj=merc +a=6378206 +b=6356584.314245179 +lat_ts=0.0 +lon_0=0.0 +x_0=0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs",{resolutions:function(){var c=19;
var b=[];
b[0]=Math.pow(2,18);
for(var a=1;
a<c;
a++){b[a]=Math.pow(2,(18-a))
}return b
}(),origin:[0,0],bounds:L.bounds(I,H)})
}L.TileLayer.ChinaProvider=L.TileLayer.extend({initialize:function(M,b){var O=L.TileLayer.ChinaProvider.providers;
b=b||{};
var Q=M.split(".");
var N=Q[0];
var c=Q[1];
var P=Q[2];
var a=O[N][c][P];
b.subdomains=O[N].Subdomains;
b.key=b.key||O[N].key;
if("tms" in O[N]){b.tms=O[N]["tms"]
}L.TileLayer.prototype.initialize.call(this,a,b)
}});
L.TileLayer.ChinaProvider.providers={TianDiTu:{Normal:{Map:"//t{s}.tianditu.gov.cn/DataServer?T=vec_w&X={x}&Y={y}&L={z}&tk={key}",Annotion:"//t{s}.tianditu.gov.cn/DataServer?T=cva_w&X={x}&Y={y}&L={z}&tk={key}"},Satellite:{Map:"//t{s}.tianditu.gov.cn/DataServer?T=img_w&X={x}&Y={y}&L={z}&tk={key}",Annotion:"//t{s}.tianditu.gov.cn/DataServer?T=cia_w&X={x}&Y={y}&L={z}&tk={key}"},Terrain:{Map:"//t{s}.tianditu.gov.cn/DataServer?T=ter_w&X={x}&Y={y}&L={z}&tk={key}",Annotion:"//t{s}.tianditu.gov.cn/DataServer?T=cta_w&X={x}&Y={y}&L={z}&tk={key}"},Subdomains:["0","1","2","3","4","5","6","7"],key:"174705aebfe31b79b3587279e211cb9a"}};
L.tileLayer.chinaProvider=function(b,a){return new L.TileLayer.ChinaProvider(b,a)
};
L.tileLayer.chinaProvider("TianDiTu.Normal.Map",{maxZoom:18,minZoom:5}).addTo(s);
L.tileLayer.chinaProvider("TianDiTu.Normal.Annotion",{maxZoom:18,minZoom:5}).addTo(s)
}var m=L.marker([I,H]).addTo(s).bindPopup(J).openPopup()
}}if(($(".social-share").length>0||$(".social-share-row").length>0)&&$(".area-and-poi-detail").length>0){var n=$(".area-and-poi-detail-attribute");
var g=function(a){return n.attr(a)||""
};
var f=document.location.host.indexOf("450")<0?"/gb/en/check-like.html/":"/content/indtravelrevamp/gb/en/check-like.html/";
var e=document.location.host.indexOf("450")<0?"/gb/en/add-like.html/":"/content/indtravelrevamp/gb/en/add-like.html/";
var v=g("data-currlike");
var p=g("data-currentPagePath");
var E=g("data-nowPage");
var o=g("data-360show");
var j=o=="false"?"d-none":"";
var t=g("data-experienceWording");
var x=g("data-loveThisWording");
var z=false;
var l=g("data-link360");
var G=g("data-linkvideo");
var d=g("data-bannerchoice");
var C=g("data-imagebanner");
console.log(v,p,E,o,t,x,l,d,C);
if(window.location.href.indexOf("candirejo")<0){var D="<a class='btn btn-link w-100 btn-360-link banner-360-article d-none' href='"+l+"'><span><img src='/content/dam/indtravelrevamp/image-360/360_pink.png' alt='image 360'> &nbsp;"+t+"</span></a>"
}else{D=""
}var B='<a href="https://l.ead.me/InspiringIndonesiaTravel" class="my-5 d-block m-auto text-center" style="max-width:600px" target="_blank"><img src="/content/dam/indtravelrevamp/CTA_indtravel_FA_.jpg" loading="lazy" alt="Social Share Indonesia.Travel"/></a>';
if(E=="belajar-membatik-langsung-dari-pengrajinnya-yuk-di-7-kampung-batik-berikut-ini"||p.indexOf("id/id/destinasi/")>=0||p.indexOf("/id/id/ide-liburan")>=0||p.indexOf("/id/id/cerita-perjalanan")>=0||p.indexOf("gb/en/destinations/")>=0||p.indexOf("/gb/en/trip-ideas")>=0||p.indexOf("/gb/en/travel-blog")>=0||p.indexOf("cn/zh-cn/destinations/")>=0||p.indexOf("/cn/zh-cn/trip-ideas")>=0||p.indexOf("/cn/zh-cn/travel-blog")>=0){if(p.indexOf("/id/")>=0){B='<a href="https://l.ead.me/followPesonaIdTravel" class="my-5 banner-append d-block m-auto text-center" style="max-width:600px" target="_blank"><img src="/content/dam/indtravelrevamp/CTA_pesonaid_FA_02.jpg" alt="Social Share Pesona" loading="lazy"/></a>'
}else{if(p.indexOf("/cn/")>=0){B='<a href="https://l.ead.me/bbnIR7" class="my-5 banner-append d-block m-auto text-center" style="max-width:600px" target="_blank"><img src="/content/dam/indtravelrevamp/en/social-media-china.png" loading="lazy" alt="Social Share Indonesia.Travel"/></a>'
}else{B='<a href="https://l.ead.me/InspiringIndonesiaTravel" class="my-5 banner-append d-block m-auto text-center" style="max-width:600px" target="_blank"><img src="/content/dam/indtravelrevamp/CTA_indtravel_FA_.jpg" loading="lazy" alt="Social Share Indonesia.Travel"/></a>'
}}D+=B
}var h='<a href="https://desa-wisata.asyst.co.id/desa-wisata/CRJ" class="my-5 d-block m-auto text-center btn-360-link overflow-hidden" style="max-width:100%" target="_blank"><span>Visit Desawisata <br><button class="btn btn-success new-btn-primary">Explore</button></span><img src="/content/dam/indtravelrevamp/en/trip-ideas/liburan-di-indonesia-aja-jadi-berkesan-dengan-aktivitas-seru-di-desa-wisata-tembi-yogyakarta/header.jpg" loading="lazy"></a>';
if(window.location.href.indexOf("candirejo")>0){D+=h
}var A=g("data-nowPage");
var w=g("country");
var q=$(".area-and-poi-detail p");
if($(".btn-360-link").length==0&&o=="true"){if(w=="/content/indtravelrevamp/cn/zh-cn"){if(A=="bintan-island"||A=="bali"||A=="dki-jakarta"){if(q.eq(3).length>0){q.eq(3).append(D)
}else{q.last().append(D)
}}}else{q.each(function(){if($(this).html().length>200&&z==false){z=true;
$(this).append(D)
}})
}if($(".btn-360-link").length==0){q.last().append(D)
}}else{console.log(q);
if(q.eq(3).length>0){q.eq(3).append(D)
}else{q.last().append(D)
}}if($(".banner-append").length>1){$($(".banner-append")[1]).remove();
console.log("BANNER CLEARED")
}$.ajax({type:"GET",url:f+p+"&"+localStorage.getItem("ses"),success:function(b){var a=b.substring(b.indexOf("<datalike>")+10,b.indexOf("</datalike>"));
if(a=="true"){$("#countloved").addClass("bg-like");
$(".like").prop("disabled",true).css("pointer-events","none");
$(".like").append('<h5 class="my-3 curlike"><span class="numberlike">'+v+'</span><span class="show-desktop">'+x+"</span></h5>")
}else{if(a=="false"){if(v!=0){console.log("notlike");
$(".like").append('<h5 class="my-3 curlike"><span class="numberlike">'+v+'</span><span class="show-desktop">'+x+"</span></h5>")
}}}$("#countloved,#countloved2").click(function(){$.ajax({type:"GET",url:e+p+"&"+localStorage.getItem("ses"),success:function(M){var c=M.substring(M.indexOf("<datalike>")+10,M.indexOf("</datalike>"));
if($(".curlike").length==0){$("#countloved").addClass("bg-like");
$(".like").append('<h5 class="my-3 curlike"><span class="numberlike">'+c+'</span><span class="show-desktop">'+x+"</span>");
$(".like").prop("disabled",true).css("pointer-events","none")
}else{$("#countloved").addClass("bg-like");
$(".like").prop("disabled",true).css("pointer-events","none");
$(".numberlike").text(c)
}}})
})
}});
setTimeout(function(){if($(".btn-360-link").length>0){$(".box-expe").insertAfter($(".btn-360-link"))
}else{$(".box-expe").insertBefore($(".suggested-articles-by-area-tags"));
$(".box-expe").css("maxWidth","47.5rem")
}},3500);
$(".area-and-poi-detail .content-text .article-detail-isi .btn-360-link span img").css({width:"9vw",filter:"brightness(0) invert(1)"});
$(".area-and-poi-detail .area-desc-none .btn-360-link span img").css({width:"9vw",filter:"brightness(0) invert(1)"});
if($("div").hasClass("tambah-video")){if(G&&G!=""){$(".tambah-video").addClass("ratio ratio-16x9 mb-3").empty().append('<video class="embed-responsive-item" controls="true" ><source src="'+G+'" type="video/mp4">Your browser does not support the video tag.</video>')
}}}});
$(document).ready(function(){const a={init:function(){this.injectScripts.init()
},injectScripts:{init:function(){console.log("injectScript")
}}};
a.init()
});