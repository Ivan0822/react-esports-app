(this["webpackJsonpesports-react-app"]=this["webpackJsonpesports-react-app"]||[]).push([[0],{112:function(n,e,t){"use strict";t.r(e);var a=t(1),r=t.n(a),c=t(10),i=t.n(c),o=(t(88),t(13)),l=t(19),u=t(14),s=t(5),m=t(6);function d(){var n=Object(s.a)(["\n    z-index: 1;\n    width: 100%;\n    max-width: 1300px;\n    margin-right: auto;\n    margin-left: auto;\n    padding-right: 50px;\n    padding-left: 50px;\n\n    @media screen and (max-width: 991px){\n        padding-right: 30px;\n        padding-left: 30px;\n    }\n\n"]);return d=function(){return n},n}function f(){var n=Object(s.a)(["\n    *{\n        box-sizing: border-box;\n        margin: 0;\n        padding: 0;\n        font-family: sans-serif;\n    }\n"]);return f=function(){return n},n}var p=Object(m.a)(f()),b=m.b.section(d()),h=t(28),g=t(143),x=t(148),v=t(149),E=t(146);function j(){var n=Object(s.a)(["\n    width: 10rem;\n    margin-right: 1rem;\n\n    @media screen and (max-width: 960px){\n        margin-bottom: 1rem;\n    }\n"]);return j=function(){return n},n}function O(){var n=Object(s.a)(["\n    display: flex;\n    justify-content: flex-start;\n    height: 80px;\n\n    @media screen and (max-width: 960px){\n        height: 160px;\n        flex-direction: column;\n        align-items: center;\n    }\n    ","\n"]);return O=function(){return n},n}function w(){var n=Object(s.a)(["\n    background: #FFF;\n    height: 80px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-bottom: 0.1px solid #FFFFFF;\n    @media screen and (max-width: 960px){\n        height: 160px;\n    }\n"]);return w=function(){return n},n}var y=m.b.section(w()),F=Object(m.b)(b)(O(),b),k=Object(m.b)(E.a)(j()),T=t(31),S=t.n(T),_={headers:{"Access-Control-Allow-Origin":"*"}},A=function(n){var e=n.allTournaments,t=n.setTourArray,c=n.tourArray,i=Object(a.useState)(""),l=Object(o.a)(i,2),u=l[0],s=l[1],m=Object(a.useState)(""),d=Object(o.a)(m,2),f=d[0],p=d[1];return Object(a.useEffect)((function(){if(""===f){var n=Object(h.a)(e);t(n.filter((function(n){return n.videogame.slug===u})))}else(a=f,S.a.get("https://api.pandascore.co/tournaments/".concat(a,"?token=vQZeP5I4e_oFj5g8ixMW6s4fi7HmTYSF3bviRp69GgekbEKCDHw"),_)).then((function(n){t(""===u?ye(n.data):ye(n.data).filter((function(n){return n.videogame.slug===u})))}));var a;console.log(c)}),[f,u]),r.a.createElement(y,null,r.a.createElement(F,null,r.a.createElement(g.a,null,r.a.createElement(x.a,null,"Tournaments"),r.a.createElement(k,{value:f,onChange:function(n){p(n.target.value),console.log(u)}},r.a.createElement(v.a,{value:"running"},"Running"),r.a.createElement(v.a,{value:"past"},"Past"),r.a.createElement(v.a,{value:"upcoming"},"Upcoming"))),r.a.createElement(g.a,null,r.a.createElement(x.a,null,"Game"),r.a.createElement(k,{value:u,onChange:function(n){s(n.target.value),console.log(u)}},r.a.createElement(v.a,{value:"dota-2"},"Dota 2"),r.a.createElement(v.a,{value:"league-of-legends"},"LoL"),r.a.createElement(v.a,{value:"cs-go"},"CS:GO"),r.a.createElement(v.a,{value:"ow"},"Overwatch"),r.a.createElement(v.a,{value:"rl"}," Rocket League")))))},C=t(144),R=t(54),H=t(0),L=t(77);function M(){var n=Object(s.a)(["\n    color: #F3F7F7;\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    padding: 0.5rem 1rem;\n    height: 100%;   \n\n    @media screen and (max-width: 960px) {\n        text-align: center;\n        padding: 2rem;\n        width: 100%;\n        display: table;\n\n        &:hover {\n            color: #A8495E;\n            transition: all 0.5s ease;\n        }\n    }\n"]);return M=function(){return n},n}function I(){var n=Object(s.a)(["\n    height: 80px;\n    border-bottom: 2px solid transparent;\n\n    &:hover {\n        border-bottom: 2px solid #A8495E;\n    }\n\n    @media screen and (max-width: 960px){\n        &:hover {\n        border: none;\n        }\n    }\n"]);return I=function(){return n},n}function z(){var n=Object(s.a)(["\n    display: flex;\n    align-items: center;\n    list-style: none;\n    text-align: center;\n    margin-bottom: 0.5rem;\n\n    @media screen and (max-width: 960px){\n        display: flex;\n        flex-direction: column;\n        width: 100%;\n        height: 90vh;\n        position: absolute;\n        top: 80px;\n        left: ",";\n        opacity: 1;\n        transition: all 0.5s ease;\n        background: #262635;\n    }\n\n    button{\n        margin-left: 1rem;\n\n\n    @media screen and (max-width: 960px){\n        margin-top: 2rem;\n    }\n    }\n"]);return z=function(){return n},n}function D(){var n=Object(s.a)(["\n    display: none;\n\n    @media screen and (max-width: 960px) {\n        display: block;\n        position: absolute;\n        top: 10px;\n        right: 0;\n        transform: translate(-100%, 60%);\n        font-size: 1.8rem;\n        cursor: pointer;\n    }\n"]);return D=function(){return n},n}function W(){var n=Object(s.a)(["\n    margin-right: 0.5rem;\n"]);return W=function(){return n},n}function G(){var n=Object(s.a)(["\n    margin-bottom: 0.5rem;\n    color: #F3F7F7;\n    justify-self: start;\n    cursor: pointer;\n    text-decoration: none;\n    font-size: 2rem;\n    display: flex;\n    align-items: center;\n"]);return G=function(){return n},n}function P(){var n=Object(s.a)(["\n    display: flex;\n    justify-content: space-between;\n    height: 100px;\n\n    ","\n"]);return P=function(){return n},n}function Y(){var n=Object(s.a)(["\n    background: #262635;\n    height: 100px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: sticky;\n    z-index: 999;\n    top: 0;\n"]);return Y=function(){return n},n}var U=m.b.nav(Y()),B=Object(m.b)(b)(P(),b),K=Object(m.b)(l.b)(G()),N=Object(m.b)(L.a)(W()),J=m.b.section(D()),Q=m.b.ul(z(),(function(n){return n.click?0:"-100%"})),V=m.b.li(I()),Z=Object(m.b)(l.b)(M()),q=function(n){var e=n.setLogged,t=Object(a.useState)(!1),c=Object(o.a)(t,2),i=c[0],l=c[1],u=function(){return l(!i)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(H.b.Provider,{value:{color:"#A8495E"}},r.a.createElement(U,null,r.a.createElement(B,null,r.a.createElement(K,{to:"/"},r.a.createElement(N,null),"E-SPORTS EVENTS"),r.a.createElement(J,{onClick:u},i?r.a.createElement(R.b,null):r.a.createElement(R.a,null)),r.a.createElement(Q,{onClick:u,click:i},r.a.createElement(V,null,r.a.createElement(Z,{exact:!0,to:"/"},"Home")),r.a.createElement(V,null,r.a.createElement(Z,{to:"/teams"},"Teams")),r.a.createElement(V,null,r.a.createElement(Z,{to:"/worlds"},"Worlds 2020")),r.a.createElement(Z,{to:"/myteams"},r.a.createElement(C.a,{variant:"contained",color:"secondary"},"MY TEAMS")),r.a.createElement(C.a,{onClick:function(){e(!1)},variant:"contained",color:"secondary"},"LOGOUT"))))))};function $(){var n=Object(s.a)(["\n    margin-right: 4rem;\n    height: 90%;\n    width: 75%;\n\n    h2{\n        margin-top: 1rem;\n        font-size: 20px;\n        color: #262635;\n\n        @media screen and (max-width: 480px){\n            font-size: 15px;\n        }\n    }\n"]);return $=function(){return n},n}function X(){var n=Object(s.a)(["\n    padding-left: 20px;\n    padding-right: 20px;\n\n"]);return X=function(){return n},n}function nn(){var n=Object(s.a)(["\n    height: 100%;\n    width: 120px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n"]);return nn=function(){return n},n}function en(){var n=Object(s.a)(["\n    background-color: #F5F5F5;\n    height: 120px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    /* border: 0.2px solid #A8495E; */\n    box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.3);\n"]);return en=function(){return n},n}var tn=m.b.section(en()),an=m.b.section(nn()),rn=m.b.img(X()),cn=m.b.section($()),on=function(n){var e=n.image,t=n.name,c=n.id,i=Object(a.useState)([]),u=Object(o.a)(i,2),s=u[0],m=(u[1],Object(a.useState)([])),d=Object(o.a)(m,2);d[0],d[1];return console.log(s),r.a.createElement(l.b,{to:"/tournaments/".concat(c)},r.a.createElement(tn,null,r.a.createElement(an,null,r.a.createElement(rn,{src:e})),r.a.createElement(cn,null,r.a.createElement("h2",null,t))))};function ln(){var n=Object(s.a)(["\n    display: grid;\n    grid-template-columns: 1fr;\n"]);return ln=function(){return n},n}function un(){var n=Object(s.a)(["\n    margin: auto;\n    margin-top: 5rem;\n    width: 90%;\n    background-color: #F5F5F5;\n    height: 180vh;\n\n    @media screen and (max-width: 960px){\n        width: 100%;\n    }\n\n    a{\n        text-decoration: none;\n    }\n\n"]);return un=function(){return n},n}function sn(){var n=Object(s.a)(["\n    background-color: #F5F5F5;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);return sn=function(){return n},n}var mn=m.b.section(sn()),dn=Object(m.b)(b)(un()),fn=m.b.section(ln()),pn=function(n){var e=n.tourArray;return r.a.createElement(mn,null,r.a.createElement(dn,null,r.a.createElement(fn,null,e.map((function(n){return r.a.createElement(on,{key:n.serie_id,image:n.league.image_url,name:n.league.name+" "+n.serie.full_name,id:n.serie_id})})))))};function bn(){var n=Object(s.a)(["\n    background: #FFF;\n    height: 80px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-bottom: 0.1px solid #FFFFFF;\n    @media screen and (max-width: 960px){\n        height: 160px;\n    }\n"]);return bn=function(){return n},n}function hn(){var n=Object(s.a)(["\n    background-color: gray;\n    height: 100vh;\n    width: 100%;\n"]);return hn=function(){return n},n}var gn=m.b.section(hn()),xn=m.b.section(bn()),vn=function(n){return r.a.createElement(gn,null,r.a.createElement(xn,null))};function En(){var n=Object(s.a)(["\n    background-color: #F5F5F5;\n    width:80%;\n    height: 100%;\n    display: flex;\n    flex-flow: row wrap;\n    padding-top: 3rem;\n\n    @media screen and (max-width: 991px){\n        width: 100%;\n    }\n"]);return En=function(){return n},n}function jn(){var n=Object(s.a)(["\n    margin-left: 2rem;\n\n    @media screen and (max-width: 480px){\n        margin: 0;\n    }\n"]);return jn=function(){return n},n}function On(){var n=Object(s.a)(["\n    background-color: #F5F5F5;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 70px;\n\n    @media screen and (max-width: 960px){\n        height: 80px;\n        align-items: center;\n        justify-content:center;\n    }\n\n    h2 {\n        color: #262635;\n    }\n"]);return On=function(){return n},n}function wn(){var n=Object(s.a)(["\n    background-color: #F5F5F5;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n"]);return wn=function(){return n},n}var yn=m.b.section(wn()),Fn=m.b.section(On()),kn=(m.b.form(jn()),m.b.section(En())),Tn=t(49),Sn=t.n(Tn),_n=t(145);function An(){var n=Object(s.a)(["\n    width: 10px;\n    height: 10px;\n\n"]);return An=function(){return n},n}function Cn(){var n=Object(s.a)(["\n    width: 10px;\n    margin-top: 2rem;\n\n    &:disabled{\n        display:none;\n    }\n"]);return Cn=function(){return n},n}function Rn(){var n=Object(s.a)(["\n    height: 20%;\n    color: #262635;\n    position: sticky;\n    padding-bottom: 1rem;\n    @media screen and (max-width: 960px){\n        font-size: 0.9rem;\n        justify-self: center;\n    }\n"]);return Rn=function(){return n},n}function Hn(){var n=Object(s.a)(["\n    width: 80%;\n"]);return Hn=function(){return n},n}function Ln(){var n=Object(s.a)(["\n    height: 200px;\n    width: 180px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex-direction: column;\n    box-shadow: 0 6px 8px 2px hsla(0, 0%, 0%, 0.2);\n    margin: 2rem;\n\n    &:hover {\n        box-shadow: 0 10px 12px 2px hsla(0, 0%, 0%, 0.4);\n        transition: box-shadow 0.5s ease;\n    }\n\n    @media screen and (max-width: 960px){\n        height: 150px;\n        width: 130px;\n    }\n\n"]);return Ln=function(){return n},n}var Mn=m.b.section(Ln()),In=m.b.img(Hn()),zn=m.b.span(Rn()),Dn=Object(m.b)(_n.a)(Cn()),Wn=(Object(m.b)(Sn.a)(An()),function(n){var e=n.team,t=n.favTeams,c=n.setFavTeams,i=Object(a.useState)(!1),l=Object(o.a)(i,2),u=l[0],s=l[1],m=Object(a.useRef)();return r.a.createElement(Mn,{onMouseEnter:function(n){return s(!0)},onMouseLeave:function(n){return s(!1)}},u?r.a.createElement(Dn,{"aria-label":"like",onClick:function(n){n.preventDefault(),m.current&&m.current.setAttribute("disabled","disabled");var a=Object(h.a)(t);a.push(e),c(a),console.log(t)},ref:m},r.a.createElement(Sn.a,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement(In,{src:e.image_url}),r.a.createElement(zn,null,e.name)))}),Gn=function(n){var e=n.favTeams,t=n.setFavTeams,c=Object(a.useState)([]),i=Object(o.a)(c,2),l=i[0],u=i[1];return Object(a.useEffect)((function(){S.a.get("https://api.pandascore.co/series/2987/tournaments?token=vQZeP5I4e_oFj5g8ixMW6s4fi7HmTYSF3bviRp69GgekbEKCDHw",_).then((function(n){var e=[];n.data.forEach((function(n){e.push.apply(e,Object(h.a)(n.teams))})),u(e)})),console.log(l)}),[]),r.a.createElement(yn,null,r.a.createElement(Fn,null,r.a.createElement("h2",null,"CHOOSE YOUR WORLDS 2020 TEAMS ")),r.a.createElement(kn,null,l.map((function(n){return r.a.createElement(Wn,{key:n.id,team:n,favTeams:e,setFavTeams:t})}))))},Pn=t(139),Yn=t(147);function Un(){var n=Object(s.a)(["\n    height: 300px;\n    width: 250px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    align-content: space-between;\n    justify-content: center;\n    box-shadow: 0 6px 8px 2px hsla(0, 0%, 0%, 0.2);\n    border-radius: 10px;\n    background-color: #FFF;\n    h2 {\n        color:\n    }\n    form {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n\n        div{\n            margin-bottom: 2rem;\n            width: 80%;\n        }\n    }\n\n"]);return Un=function(){return n},n}function Bn(){var n=Object(s.a)(["\n    height: 100vh;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #262635;\n"]);return Bn=function(){return n},n}var Kn=m.b.section(Bn()),Nn=m.b.section(Un()),Jn=function(n){var e=n.setLogged,t=Object(a.useState)(""),c=Object(o.a)(t,2),i=c[0],l=c[1],s=Object(a.useState)(""),m=Object(o.a)(s,2),d=m[0],f=m[1],p=Object(a.useState)(!1),b=Object(o.a)(p,2),h=b[0],g=b[1],x=(Object(u.f)(),function(){var n={id:Object(Yn.a)(),username:i,password:d,teams:[]};(function(n){return S.a.get("http://localhost:3005/users",n)})().then((function(e){e.data.forEach((function(e){e.username===n.username&&g(!0)}))})),(0!==i.trim().length&&0!==d.trim().length||(g(!0),0))&&!1===h&&(!function(n){S.a.post("http://localhost:3005/users",n)}(n),g(!1),e(!0))});return r.a.createElement(Kn,null,r.a.createElement(Nn,null,r.a.createElement("h3",null,"LOGIN"),r.a.createElement("form",{onSubmit:function(n){n.preventDefault(),x()}},r.a.createElement(Pn.a,{onChange:function(n){return l(n.target.value)},required:!0,placeholder:"Username"}),r.a.createElement(Pn.a,{onChange:function(n){return f(n.target.value)},required:!0,type:"password",placeholder:"Password"}),r.a.createElement(C.a,{type:"submit",variant:"contained",color:"secondary"},"LOGIN"),h?r.a.createElement("p",{style:{color:"red"}},"Invalid input"):null)))};function Qn(){var n=Object(s.a)(["\n    background-color: #F5F5F5;\n    width:80%;\n    height: 100%;\n    display: flex;\n    flex-flow: row wrap;\n    padding-top: 3rem;\n\n    @media screen and (max-width: 991px){\n        width: 100%;\n    }\n"]);return Qn=function(){return n},n}function Vn(){var n=Object(s.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 2rem;\n    color: #262635;\n"]);return Vn=function(){return n},n}function Zn(){var n=Object(s.a)(["\n    height: 100vh;\n    width: 100%;\n    background: #F5F5F5;\n    position: absolute;\n    top: 100px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n"]);return Zn=function(){return n},n}var qn=m.b.section(Zn()),$n=m.b.section(Vn()),Xn=m.b.section(Qn());function ne(){var n=Object(s.a)(["\n    height: 20%;\n    color: #262635;\n    position: sticky;\n    padding-bottom: 1rem;\n    @media screen and (max-width: 960px){\n        font-size: 0.9rem;\n        justify-self: center;\n    }\n"]);return ne=function(){return n},n}function ee(){var n=Object(s.a)(["\n    width: 80%;\n"]);return ee=function(){return n},n}function te(){var n=Object(s.a)(["\n    height: 200px;\n    width: 180px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex-direction: column;\n    box-shadow: 0 6px 8px 2px hsla(0, 0%, 0%, 0.2);\n    margin: 2rem;\n\n    &:hover {\n        box-shadow: 0 10px 12px 2px hsla(0, 0%, 0%, 0.4);\n        transition: box-shadow 0.5s ease;\n    }\n\n    @media screen and (max-width: 960px){\n        height: 150px;\n        width: 130px;\n    }\n\n"]);return te=function(){return n},n}function ae(){var n=Object(s.a)(["\n    height: 240px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex-direction: column;\n\n    button {\n        margin-top: 1rem;\n    }\n\n    @media screen and (max-width: 960px){\n        height: 200px;\n        width: 130px;\n    }\n"]);return ae=function(){return n},n}var re=m.b.section(ae()),ce=m.b.section(te()),ie=m.b.img(ee()),oe=m.b.span(ne()),le=function(n){var e=n.team,t=n.favTeams,a=n.setFavTeams;return r.a.createElement(re,null,r.a.createElement(ce,null,r.a.createElement(ie,{src:e.image_url}),r.a.createElement(oe,null,e.name)),r.a.createElement(l.b,{to:"/myteams/".concat(e.id)},r.a.createElement(C.a,{variant:"contained",color:"secondary"},"ROSTER")),r.a.createElement(C.a,{onClick:function(){var n=t.findIndex((function(n){return n.name===e.name})),r=Object(h.a)(t);r.splice(n,1),a(r)},variant:"contained",color:"secondary"},"REMOVE"))},ue=function(n){var e=n.favTeams,t=n.setFavTeams;return r.a.createElement(qn,null,r.a.createElement($n,null,r.a.createElement("h2",null,"MY FAVOURITE TEAMS")),r.a.createElement(Xn,null,e.map((function(n){return r.a.createElement(le,{key:n.id,team:n,favTeams:e,setFavTeams:t})}))))};function se(){var n=Object(s.a)(["\n\n"]);return se=function(){return n},n}function me(){var n=Object(s.a)(["\n\n"]);return me=function(){return n},n}function de(){var n=Object(s.a)(["\n\n"]);return de=function(){return n},n}function fe(){var n=Object(s.a)(["\n    width: 150px;\n"]);return fe=function(){return n},n}function pe(){var n=Object(s.a)(["\n\n"]);return pe=function(){return n},n}function be(){var n=Object(s.a)(["\n    width: 80%;\n    display: flex;\n\n"]);return be=function(){return n},n}var he=m.b.section(be()),ge=m.b.section(pe()),xe=m.b.img(fe()),ve=m.b.section(de()),Ee=m.b.section(me()),je=m.b.section(se()),Oe=function(n){var e=n.player;return r.a.createElement(he,null,r.a.createElement(ge,null,r.a.createElement(xe,{src:e.image_url})),r.a.createElement(Ee,null,r.a.createElement("h2",null,e.name),r.a.createElement("p",null,e.first_name," ",e.last_name)),r.a.createElement(ve,null,r.a.createElement("p",null,"BIRTHDATE: ",e.birthday),r.a.createElement("p",null,"ROLE: ","jun"===e.role?"Jungle":"sup"===e.role?"Support":"mid"===e.role?"Mid":"adc"===e.role?"ADC":"top"===e.role?"Top":void 0),r.a.createElement("p",null,"HOMETOWN: ",e.hometown)),r.a.createElement(je,null,r.a.createElement("a",{href:"https://lol.gamepedia.com/".concat(e.name),target:"_blank"},r.a.createElement(C.a,{variant:"contained",color:"primary"},"Biography"))))},we=function(n){n.favTeams;var e=Object(a.useState)({birth_year:1997,birthday:"1997-02-14",first_name:"Hao-Hsuan",hometown:"Taiwan",id:418,image_url:"https://cdn.pandascore.co/images/player/image/418/220px_tes_karsa_2020_split_2.png",last_name:"Hung",name:"Karsa",nationality:"TW",role:"jun",slug:"karsa"}),t=Object(o.a)(e,2),c=t[0],i=(t[1],Object(u.g)().id);return console.log(i),r.a.createElement(r.a.Fragment,null,r.a.createElement(Oe,{player:c}))},ye=function(n){var e=[];return n.filter((function(n){return e.findIndex((function(e){return e.serie_id===n.serie_id}))<=-1&&e.push(n),null})),e};var Fe=function(){var n=Object(a.useState)([]),e=Object(o.a)(n,2),t=e[0],c=e[1],i=Object(a.useState)([]),s=Object(o.a)(i,2),m=s[0],d=s[1],f=Object(a.useState)([]),b=Object(o.a)(f,2),h=b[0],g=b[1];Object(a.useEffect)((function(){S.a.get("https://api.pandascore.co/tournaments?token=vQZeP5I4e_oFj5g8ixMW6s4fi7HmTYSF3bviRp69GgekbEKCDHw",_).then((function(n){d(ye(n.data).slice(0,20)),c(ye(n.data).slice(0,20))}))}),[]);var x=Object(a.useState)(!1),v=Object(o.a)(x,2),E=v[0],j=v[1];return r.a.createElement(r.a.Fragment,null,E?r.a.createElement(l.a,{basename:"/react-esports-app"},r.a.createElement(p,null),r.a.createElement(q,{setLogged:j}),r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/"},r.a.createElement(A,{tourArray:t,setTourArray:c,allTournaments:m}),r.a.createElement(pn,{tourArray:t})),r.a.createElement(u.a,{path:"/worlds"},r.a.createElement(vn,null)),r.a.createElement(u.a,{path:"/teams"},r.a.createElement(Gn,{favTeams:h,setFavTeams:g})),r.a.createElement(u.a,{exact:!0,path:"/myteams"},r.a.createElement(ue,{favTeams:h,setFavTeams:g})),r.a.createElement(u.a,{path:"/myteams/:id"},r.a.createElement(we,{favTeams:h})))):r.a.createElement(Jn,{setLogged:j}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))},83:function(n,e,t){n.exports=t(112)},88:function(n,e,t){}},[[83,1,2]]]);
//# sourceMappingURL=main.e815c941.chunk.js.map