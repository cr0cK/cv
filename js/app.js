"use strict";var isFirefox=!!window.navigator.userAgent.match(/firefox/i),Donuts=function(){this._build=function(i,t,s,d,e,n,l){l=l||.7,n=n||1;var h=13,r=14,u=d3.hsl(d),a=u.brighter(l),b={value:[s,100-s]},o=t,_=t,c=t/2,f=d3.layout.pie().sort(null),p=d3.svg.arc().innerRadius(c).outerRadius(c/1.5),g=d3.svg.arc().innerRadius(0).outerRadius(c/1.5+1),v=$(i).find("> span")[0].innerHTML.split("<br>"),A=d3.select(i).append("svg").attr("width",o).attr("height",_),B=A.append("g").attr("transform","translate("+o/2+","+_/2+")");B.selectAll("path").data(f(b.value)).enter().append("path").attr("fill",function(i,t){return t>0&&a||u}).attr("d",p);var F=A.append("g").attr("transform","translate("+o/2+","+_/2+")");F.selectAll("path").data(f([100])).enter().append("path").attr("fill",function(){return a}).attr("d",g),v.forEach(function(i,s){F.append("text").text(function(){return i}).style("fill",function(){var i;return i=e?u.darker(3):"#fff"}).style("font-size",function(){var i=d3.max([h,r*(t/90)*n]);return i+"px"}).style("font-weight","bold").attr("dx",function(){return-this.getBBox().width/2}).attr("dy",function(){var i;return v.length>1?(i=t/10,s%2===0&&(i=-i),i+=t/15):i=this.getBBox().height/3.5,i})})},this.draw=function(){this._build(".javascript",150,90,"#F8DC3D",!0,.8),this._build(".e2e",60,75,"#B72F33",!1),this._build(".selenium",60,75,"#979797",!1),this._build(".angularjs",90,90,"#DD1B16",!1,1,1),this._build(".reactjs",110,55,"#61DAFB",!0),this._build(".flux",90,25,"#26b0d3",!1,1.2),this._build(".isomorphic",90,25,"#0e95b7",!1,1.1),this._build(".jquery",70,95,"#0e95b7",!1),this._build(".d3",75,60,"#F68E51","#b76637",1.4),this._build(".node",95,75,"#80BD01",!0),this._build(".games",80,20,"#d7db67",!0),this._build(".gl",75,10,"#990000",!1),this._build(".web",120,90,"#26A1FF",!1,1.2),this._build(".html5",80,85,"#EF6529",!1,1.2),this._build(".css3",90,85,"#0270BB",!1,1.2),this._build(".preprocessors",70,85,"#DA619B",!1),this._build(".responsive",60,75,"#828282",!1),this._build(".cordova",80,20,"#7bcfd8",!0),this._build(".android",100,25,"#97C024",!0,1.1),this._build(".python",80,75,"#FECD40",!0,1.2),this._build(".go",80,10,"#D0B799",!0,1.4),this._build(".perl",60,90,"#0b5c8c",!1,1.6,1),this._build(".php",60,85,"#8892BF",!0,1.6),this._build(".net",40,20,"#007DB3",!1,.8),this._build(".java",50,20,"#F8272B",!1,.8),this._build(".db",100,75,"#AAAAAC",!0),this._build(".mysql",70,85,"#2B5A6A",!1),this._build(".sqlite",60,85,"#71C0EA",!0),this._build(".oracle",50,15,"#FA0F0C",!1),this._build(".postgresql",70,40,"#306592",!1),this._build(".coutchdb",75,55,"#BD121B",!1),this._build(".mongodb",60,45,"#4F9648",!1),this._build(".rethinkdb",70,20,"#1F3F4E",!1,1,1.5),this._build(".cassandra",80,10,"#adc8db",!0,1,.4),this._build(".devops",90,40,"#024164",!1,1.2,1.4),this._build(".docker",90,50,"#1FB6E8",!1,1.2),this._build(".fig",75,50,"#A41212",!1,1.6),this._build(".jenkins",80,65,"#AAAAAC",!0,1.2),this._build(".apache",60,60,"#EA119C",!1,.9),this._build(".varnish",60,25,"#73B9E3",!0),this._build(".haproxy",60,25,"#6BF141",!0),this._build(".collaboration",90,80,"#F17D23",!1),this._build(".github",80,85,"#323131",!1,1.2,1.7),this._build(".gitlab",80,75,"#656565",!1,1.2),this._build(".git",80,80,"#F15034",!1,1.6),this._build(".trac",60,80,"#B50600",!1,1.6),this._build(".kanban",70,65,"#edea55",!0,.9,1),this._build(".father",150,98,"#EA94B7",!1,1.2,.2),this._build(".aikido",90,85,"#333",!1,1.2,1.9),this._build(".bike",90,85,"#828BA1",!1,.8),this._build(".french",90,100,"#002680",!1,1.2,1.5),this._build(".english",90,75,"#D1132C",!1,1.2),this._build(".spanish",50,15,"#FEC401",!0,1,1)},this.handleResizing=function(){var i=960,t=$(window).width(),s=$("section.interests"),d=s.find("> .donuts");if(t>i)return d.width("100%"),s.height("900px"),void d.css("zoom",1);var e=t/1e3,n=t;if(d.width(t),s.height(n),d.css("zoom",e),isFirefox){d.css("-moz-transform","scale("+e+")");var l=-d.position().left+40;d.css("margin-left",l+"px")}},this.bindResizeEvent=function(){var i=_.throttle(this.handleResizing,100);$(window).resize(i)}};$(document).ready(function(){var i=new Donuts;i.draw(),i.handleResizing(),i.bindResizeEvent(),isFirefox&&$("body").css("letter-spacing","-1px")});