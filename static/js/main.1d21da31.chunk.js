(this.webpackJsonpburger=this.webpackJsonpburger||[]).push([[0],[,,,,,,function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__3CcvV",BreadTop:"BurgerIngredient_BreadTop__2KVBh",Seeds1:"BurgerIngredient_Seeds1__1ex3s",Seeds2:"BurgerIngredient_Seeds2__1qyfZ",Meat:"BurgerIngredient_Meat__2VUui",Cheese:"BurgerIngredient_Cheese__3sRXh",Salad:"BurgerIngredient_Salad__1f6Yn",Bacon:"BurgerIngredient_Bacon__3oDMX"}},function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__2LVFi",Open:"SideDrawer_Open__1d-Jf",Close:"SideDrawer_Close__2O87l",Logo:"SideDrawer_Logo__3anrO"}},function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__QJRGQ",Label:"BuildControl_Label__3zIcd",Less:"BuildControl_Less__2pkwn",More:"BuildControl_More__20a6Y"}},function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__3ox30",Logo:"Toolbar_Logo__3SBOg",DesktopOnly:"Toolbar_DesktopOnly__3LQ2y"}},,,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__20rUi",active:"NavigationItem_active__sAN0u"}},function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__3tz6U",OrderButton:"BuildControls_OrderButton__1XR1M",enable:"BuildControls_enable__2X9D6"}},function(e,t,n){e.exports={Button:"Button_Button__20aEV",Success:"Button_Success__nKByY",Danger:"Button_Danger__2bbRB"}},,function(e,t,n){e.exports={Content:"Layout_Content__16ER6"}},function(e,t,n){e.exports={Logo:"Logo_Logo__3Fhnj"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__3rm0U"}},function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__1JzEZ"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3wcAU"}},function(e,t,n){e.exports={Burger:"Burger_Burger__2ntUy"}},function(e,t,n){e.exports={Modal:"Modal_Modal__1_z-B"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),s=n(15),c=n.n(s),i=(n(28),n(2)),o=n(3),d=n(5),l=n(4),u=function(e){return e.children},j=n(16),b=n.n(j),h=n(9),p=n.n(h),O=n.p+"static/media/burger-logo.ec69c7f6.png",g=n(17),_=n.n(g),x=n(0),f=function(e){return Object(x.jsx)("div",{className:_.a.Logo,children:Object(x.jsx)("img",{src:O,alt:"Logo"})})},v=n(18),m=n.n(v),C=n(12),B=n.n(C),k=function(e){return Object(x.jsx)("li",{className:B.a.NavigationItem,children:Object(x.jsx)("a",{href:e.link,className:e.active?B.a.active:null,children:e.children})})},w=function(){return Object(x.jsxs)("ul",{className:m.a.NavigationItems,children:[Object(x.jsx)(k,{link:"/",active:!0,children:"Burger Builder"}),Object(x.jsx)(k,{link:"/",children:"Checkout"})]})},y=n(19),N=n.n(y),S=function(e){return Object(x.jsxs)("div",{onClick:e.clicked,className:N.a.DrawerToggle,children:[Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{})]})},D=function(e){return Object(x.jsxs)("header",{className:p.a.Toolbar,children:[Object(x.jsx)(S,{clicked:e.drawerToggleClicked}),Object(x.jsx)("div",{className:p.a.Logo,children:Object(x.jsx)(f,{})}),Object(x.jsxs)("nav",{className:p.a.DesktopOnly,children:[Object(x.jsx)(w,{}),"..."]})]})},I=n(7),T=n.n(I),L=n(20),M=n.n(L),H=function(e){return e.show?Object(x.jsx)("div",{className:M.a.Backdrop,onClick:e.clicked}):null},P=function(e){var t=[T.a.SideDrawer,T.a.Close];return e.open&&(t=[T.a.SideDrawer,T.a.Open]),Object(x.jsxs)(u,{children:[Object(x.jsx)(H,{show:e.open,clicked:e.closed}),Object(x.jsxs)("div",{className:t.join(" "),children:[Object(x.jsx)("div",{className:T.a.Logo,children:Object(x.jsx)(f,{})}),Object(x.jsx)("nav",{children:Object(x.jsx)(w,{})})]})]})},A=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={showSideDrawer:!1},e.sideDrawerClosedHandler=function(){e.setState({showSideDrawer:!1})},e.sideDrawerToggleHandler=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(x.jsxs)(u,{children:[Object(x.jsx)(D,{drawerToggleClicked:this.sideDrawerToggleHandler}),Object(x.jsx)(P,{closed:this.sideDrawerClosedHandler,open:this.state.showSideDrawer}),Object(x.jsx)("div",{children:"Toolbar, SideDrawer, Backdrop"}),Object(x.jsx)("main",{className:b.a.Content,children:this.props.children})]})}}]),n}(r.Component),R=n(10),U=n(23),F=n(21),E=n.n(F),Y=n(6),z=n.n(Y),J=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=Object(x.jsx)("div",{className:z.a.BreadBottom});break;case"bread-top":e=Object(x.jsxs)("div",{className:z.a.BreadTop,children:[Object(x.jsx)("div",{className:z.a.Seeds1}),Object(x.jsx)("div",{className:z.a.Seeds2})]});break;case"meat":e=Object(x.jsx)("div",{className:z.a.Meat});break;case"cheese":e=Object(x.jsx)("div",{className:z.a.Cheese});break;case"bacon":e=Object(x.jsx)("div",{className:z.a.Bacon});break;case"salad":e=Object(x.jsx)("div",{className:z.a.Salad});break;default:e=null}return e}}]),n}(r.Component),V=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(U.a)(Array(e.ingredients[t])).map((function(e,n){return Object(x.jsx)(J,{type:t},t+n)}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=Object(x.jsx)("p",{children:"Please start adding ingredients!"})),Object(x.jsxs)("div",{className:E.a.Burger,children:[Object(x.jsx)(J,{type:"bread-top"}),t,Object(x.jsx)(J,{type:"bread-bottom"})]})},X=n(8),Q=n.n(X),K=function(e){return Object(x.jsxs)("div",{className:Q.a.BuildControl,children:[Object(x.jsx)("div",{className:Q.a.Label,children:e.label}),Object(x.jsx)("button",{className:Q.a.Less,onClick:e.removed,disabled:e.disabled,children:"Less"}),Object(x.jsx)("button",{className:Q.a.More,onClick:e.added,children:"More"})]})},Z=n(13),$=n.n(Z),q=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],G=function(e){return Object(x.jsxs)("div",{className:$.a.BuildControls,children:[Object(x.jsxs)("p",{children:["Current Price: ",Object(x.jsxs)("strong",{children:[e.price.toFixed(2),"$"]})]}),q.map((function(t){return Object(x.jsx)(K,{label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabledInfo[t.type]},t.label)})),Object(x.jsx)("button",{className:$.a.OrderButton,disabled:!e.purchaseable,onClick:e.ordered,children:"ORDER NOW"})]})},W=n(22),ee=n.n(W),te=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show}},{key:"componentDidUpdate",value:function(){console.log("Modal updated")}},{key:"render",value:function(){return Object(x.jsxs)(u,{children:[Object(x.jsx)(H,{show:this.props.show,clicked:this.props.modalClosed}),Object(x.jsx)("div",{className:ee.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"},children:this.props.children})]})}}]),n}(r.Component),ne=n(14),re=n.n(ne),ae=function(e){return Object(x.jsx)("button",{onClick:e.clicked,className:[re.a.Button,re.a[e.btnType]].join(" "),children:e.children})},se=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map((function(t){return Object(x.jsxs)("li",{children:[Object(x.jsx)("span",{style:{textTransform:"capitalize"},children:t}),": ",e.props.ingredients[t]]},t)}));return Object(x.jsxs)(u,{children:[Object(x.jsx)("h3",{children:"Your order"}),Object(x.jsx)("p",{children:"A delicious burger with the following ingredients: "}),Object(x.jsx)("ul",{children:t}),Object(x.jsx)("p",{children:Object(x.jsxs)("strong",{children:["Total Price: ",this.props.price.toFixed(2),"$"]})}),Object(x.jsx)("p",{children:"Continue to Checkout?"}),Object(x.jsx)(ae,{btnType:"Danger",clicked:this.props.purchaseCanceled,children:"CANCEL"}),Object(x.jsx)(ae,{btnType:"Success",clicked:this.props.purchaseContinued,children:"CONTINUE"})]})}}]),n}(r.Component),ce={salad:.5,cheese:.4,meat:1.3,bacon:.7},ie=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:4,purchaseable:!1,purchasing:!1},e.addIngredientHandler=function(t){var n=e.state.ingredients[t]+1,r=Object(R.a)({},e.state.ingredients);r[t]=n;var a=ce[t],s=e.state.totalPrice+a;e.setState({ingredients:r,totalPrice:s}),e.updatePurchaseState(r)},e.removeIngredientHandler=function(t){var n=e.state.ingredients[t];if(!(n<=0)){var r=n-1,a=Object(R.a)({},e.state.ingredients);a[t]=r;var s=ce[t],c=e.state.totalPrice-s;e.setState({ingredients:a,totalPrice:c}),e.updatePurchaseState(a)}},e.purchaseHandler=function(){e.setState({purchasing:!0})},e.purchaseCancelHandler=function(){e.setState({purchasing:!1})},e.purchaseContinueHandler=function(){alert("You continue!")},e}return Object(o.a)(n,[{key:"updatePurchaseState",value:function(e){var t=Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0);this.setState({purchaseable:t>0})}},{key:"render",value:function(){var e=Object(R.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;return Object(x.jsxs)(u,{children:[Object(x.jsx)(te,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler,children:Object(x.jsx)(se,{ingredients:this.state.ingredients,purchaseCanceled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler,price:this.state.totalPrice})}),Object(x.jsx)(V,{ingredients:this.state.ingredients}),Object(x.jsx)(G,{ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removeIngredientHandler,disabledInfo:e,price:this.state.totalPrice,purchaseable:this.state.purchaseable,ordered:this.purchaseHandler})]})}}]),n}(r.Component),oe=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(A,{children:Object(x.jsx)(ie,{})})})}}]),n}(r.Component),de=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))};c.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(oe,{})}),document.getElementById("root")),de()}],[[30,1,2]]]);
//# sourceMappingURL=main.1d21da31.chunk.js.map