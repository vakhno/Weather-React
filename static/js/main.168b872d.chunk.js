(this["webpackJsonpweather-react"]=this["webpackJsonpweather-react"]||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a(1),n=a(14),s=a.n(n),i=(a(22),a(23),a(24),function(e){var t=e.children;return Object(c.jsx)("div",{className:"wrapper",children:t})}),j=a(5),l=a.n(j),h=a(15),o=a(3),u=Object(r.createContext)(),d=(a(26),function(){return Object(c.jsx)("div",{className:"header",children:Object(c.jsx)("h1",{className:"header__title",children:"Foreact Finder"})})}),b=(a(27),function(e){var t=e.children;return Object(c.jsx)("div",{className:"content",children:t})}),O=(a(28),function(){var e=Object(r.useContext)(u).api_call;return Object(c.jsx)("div",{className:"weather-search",children:Object(c.jsxs)("form",{onSubmit:e,className:"weather-search__form",children:[Object(c.jsx)("input",{name:"location",autoComplete:"off",className:"weather-search__input",type:"text"}),Object(c.jsx)("div",{className:"weather-search__submit",children:Object(c.jsx)("button",{className:"weather-search__button",children:"\u2192"})})]})})}),m=(a(29),function(){var e=Object(r.useContext)(u),t=e.weather,a=e.city,n=t.temp,s=t.humidity,i=t.pressure;return Object(c.jsxs)("div",{className:"weather-data",children:[Object(c.jsxs)("p",{className:"weather__tagline",children:["Weather forecast for ",Object(c.jsx)("span",{className:"weather-data__city",children:a})]}),Object(c.jsxs)("div",{className:"weather-data__box",children:[Object(c.jsxs)("span",{className:"weather-data__property",children:[Object(c.jsx)("p",{className:"weather-data__title",children:"Temperature"}),Object(c.jsx)("p",{className:"weather-data__value",children:n})]}),Object(c.jsxs)("span",{className:"weather-data__property",children:[Object(c.jsx)("p",{className:"weather-data__title",children:"Humidity"}),Object(c.jsx)("p",{className:"weather-data__value",children:s})]}),Object(c.jsxs)("span",{className:"weather-data__property",children:[Object(c.jsx)("p",{className:"weather-data__title",children:"Pressure"}),Object(c.jsx)("p",{className:"weather-data__value",children:i})]})]})]})}),p=(a(30),function(){var e=Object(r.useContext)(u).error;return Object(c.jsx)("div",{className:"error",children:e})}),x=(a(31),function(){var e=new Date;return Object(c.jsx)("div",{className:"date-time",children:"".concat(e.toLocaleDateString()," - ").concat(e.toLocaleTimeString())})}),f=(a(32),function(){return Object(c.jsx)("div",{className:"footer",children:Object(c.jsxs)("p",{children:["Created by ",Object(c.jsx)("span",{children:"Vakhno"})," "]})})}),_=a(16),v=a.n(_),w=(a(50),function(){var e=Object(r.useState)(),t=Object(o.a)(e,2),a=t[0],n=t[1],s=Object(r.useState)(),i=Object(o.a)(s,2),j=i[0],_=i[1],w=Object(r.useState)(),N=Object(o.a)(w,2),y=N[0],g=N[1],C=function(){var e=Object(h.a)(l.a.mark((function e(t){var a,c,r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=t.target.elements.location.value){e.next=4;break}return e.abrupt("return",(g("Please enter the name of the city"),n(null)));case 4:return"6b4af1b7cb803d264e11150662ace04f",c="https://api.openweathermap.org/data/2.5/weather?q=".concat(a,"&appid=").concat("6b4af1b7cb803d264e11150662ace04f","&units=metric"),r=v.a.get(c),e.next=9,r;case 9:s=e.sent,n(s.data.main),_(s.data.name),g(null);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"main",children:[Object(c.jsx)(d,{}),Object(c.jsxs)(b,{children:[Object(c.jsx)(x,{}),Object(c.jsxs)(u.Provider,{value:{api_call:C,weather:a,city:j,error:y},children:[Object(c.jsx)(O,{}),a&&Object(c.jsx)(m,{}),y&&Object(c.jsx)(p,{})]}),Object(c.jsx)(f,{})]})]})});var N=function(){return Object(c.jsx)(i,{children:Object(c.jsx)(w,{})})};s.a.render(Object(c.jsx)(N,{}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.168b872d.chunk.js.map