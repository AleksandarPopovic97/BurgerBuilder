(this.webpackJsonpburger=this.webpackJsonpburger||[]).push([[0],{13:function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__3CcvV",BreadTop:"BurgerIngredient_BreadTop__2KVBh",Seeds1:"BurgerIngredient_Seeds1__1ex3s",Seeds2:"BurgerIngredient_Seeds2__1qyfZ",Meat:"BurgerIngredient_Meat__2VUui",Cheese:"BurgerIngredient_Cheese__3sRXh",Salad:"BurgerIngredient_Salad__1f6Yn",Bacon:"BurgerIngredient_Bacon__3oDMX"}},16:function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__2LVFi",Open:"SideDrawer_Open__1d-Jf",Close:"SideDrawer_Close__2O87l",Logo:"SideDrawer_Logo__3anrO"}},17:function(e,t,n){e.exports={ContactData:"ContactData_ContactData__VzR7P",Input:"ContactData_Input__ZCvco"}},20:function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__QJRGQ",Label:"BuildControl_Label__3zIcd",Less:"BuildControl_Less__2pkwn",More:"BuildControl_More__20a6Y"}},22:function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__3ox30",Logo:"Toolbar_Logo__3SBOg",DesktopOnly:"Toolbar_DesktopOnly__3LQ2y"}},25:function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__20rUi",active:"NavigationItem_active__sAN0u"}},28:function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__3tz6U",OrderButton:"BuildControls_OrderButton__1XR1M",enable:"BuildControls_enable__2X9D6"}},29:function(e,t,n){e.exports={Button:"Button_Button__20aEV",Success:"Button_Success__nKByY",Danger:"Button_Danger__2bbRB"}},40:function(e,t,n){e.exports={Content:"Layout_Content__16ER6"}},41:function(e,t,n){e.exports={Logo:"Logo_Logo__3Fhnj"}},42:function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__3rm0U"}},44:function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__1JzEZ"}},45:function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3wcAU"}},46:function(e,t,n){e.exports={Burger:"Burger_Burger__2ntUy"}},47:function(e,t,n){e.exports={Modal:"Modal_Modal__1_z-B"}},49:function(e,t,n){e.exports={Loader:"Spinner_Loader__1BQVT",load2:"Spinner_load2__dRLAG"}},51:function(e,t,n){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__1aezm"}},52:function(e,t,n){e.exports={Order:"Order_Order__XXHTT"}},58:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(39),s=n.n(c),i=(n(58),n(3)),o=n(4),d=n(6),l=n(5),u=function(e){return e.children},j=n(40),h=n.n(j),p=n(22),b=n.n(p),O=n.p+"static/media/burger-logo.ec69c7f6.png",g=n(41),x=n.n(g),m=n(0),f=function(e){return Object(m.jsx)("div",{className:x.a.Logo,children:Object(m.jsx)("img",{src:O,alt:"Logo"})})},v=n(42),_=n.n(v),C=n(15),y=n(25),k=n.n(y),S=function(e){return Object(m.jsx)("li",{className:k.a.NavigationItem,children:Object(m.jsx)(C.b,{activeClassName:k.a.active,exact:!0,to:e.link,children:e.children})})},B=function(){return Object(m.jsxs)("ul",{className:_.a.NavigationItems,children:[Object(m.jsx)(S,{link:"/",children:"Burger Builder"}),Object(m.jsx)(S,{link:"/orders",children:"Orders"})]})},N=n(44),w=n.n(N),D=function(e){return Object(m.jsxs)("div",{onClick:e.clicked,className:w.a.DrawerToggle,children:[Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{})]})},I=function(e){return Object(m.jsxs)("header",{className:b.a.Toolbar,children:[Object(m.jsx)(D,{clicked:e.drawerToggleClicked}),Object(m.jsx)("div",{className:b.a.Logo,children:Object(m.jsx)(f,{})}),Object(m.jsx)("nav",{className:b.a.DesktopOnly,children:Object(m.jsx)(B,{})})]})},T=n(16),L=n.n(T),H=n(45),M=n.n(H),P=function(e){return e.show?Object(m.jsx)("div",{className:M.a.Backdrop,onClick:e.clicked}):null},A=function(e){var t=[L.a.SideDrawer,L.a.Close];return e.open&&(t=[L.a.SideDrawer,L.a.Open]),Object(m.jsxs)(u,{children:[Object(m.jsx)(P,{show:e.open,clicked:e.closed}),Object(m.jsxs)("div",{className:t.join(" "),children:[Object(m.jsx)("div",{className:L.a.Logo,children:Object(m.jsx)(f,{})}),Object(m.jsx)("nav",{children:Object(m.jsx)(B,{})})]})]})},R=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={showSideDrawer:!1},e.sideDrawerClosedHandler=function(){e.setState({showSideDrawer:!1})},e.sideDrawerToggleHandler=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(m.jsxs)(u,{children:[Object(m.jsx)(I,{drawerToggleClicked:this.sideDrawerToggleHandler}),Object(m.jsx)(A,{closed:this.sideDrawerClosedHandler,open:this.state.showSideDrawer}),Object(m.jsx)("div",{children:"Toolbar, SideDrawer, Backdrop"}),Object(m.jsx)("main",{className:h.a.Content,children:this.props.children})]})}}]),n}(r.Component),U=n(12),E=n(53),z=n(46),F=n.n(z),V=n(13),Y=n.n(V),X=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=Object(m.jsx)("div",{className:Y.a.BreadBottom});break;case"bread-top":e=Object(m.jsxs)("div",{className:Y.a.BreadTop,children:[Object(m.jsx)("div",{className:Y.a.Seeds1}),Object(m.jsx)("div",{className:Y.a.Seeds2})]});break;case"meat":e=Object(m.jsx)("div",{className:Y.a.Meat});break;case"cheese":e=Object(m.jsx)("div",{className:Y.a.Cheese});break;case"bacon":e=Object(m.jsx)("div",{className:Y.a.Bacon});break;case"salad":e=Object(m.jsx)("div",{className:Y.a.Salad});break;default:e=null}return e}}]),n}(r.Component),q=n(2),J=Object(q.f)((function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(E.a)(Array(e.ingredients[t])).map((function(e,n){return Object(m.jsx)(X,{type:t},t+n)}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=Object(m.jsx)("p",{children:"Please start adding ingredients!"})),Object(m.jsxs)("div",{className:F.a.Burger,children:[Object(m.jsx)(X,{type:"bread-top"}),t,Object(m.jsx)(X,{type:"bread-bottom"})]})})),Q=n(20),W=n.n(Q),Z=function(e){return Object(m.jsxs)("div",{className:W.a.BuildControl,children:[Object(m.jsx)("div",{className:W.a.Label,children:e.label}),Object(m.jsx)("button",{className:W.a.Less,onClick:e.removed,disabled:e.disabled,children:"Less"}),Object(m.jsx)("button",{className:W.a.More,onClick:e.added,children:"More"})]})},G=n(28),K=n.n(G),$=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],ee=function(e){return Object(m.jsxs)("div",{className:K.a.BuildControls,children:[Object(m.jsxs)("p",{children:["Current Price: ",Object(m.jsxs)("strong",{children:[e.price.toFixed(2),"$"]})]}),$.map((function(t){return Object(m.jsx)(Z,{label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabledInfo[t.type]},t.label)})),Object(m.jsx)("button",{className:K.a.OrderButton,disabled:!e.purchaseable,onClick:e.ordered,children:"ORDER NOW"})]})},te=n(47),ne=n.n(te),re=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"componentDidUpdate",value:function(){console.log("Modal updated")}},{key:"render",value:function(){return Object(m.jsxs)(u,{children:[Object(m.jsx)(P,{show:this.props.show,clicked:this.props.modalClosed}),Object(m.jsx)("div",{className:ne.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"},children:this.props.children})]})}}]),n}(r.Component),ae=n(29),ce=n.n(ae),se=function(e){return Object(m.jsx)("button",{onClick:e.clicked,className:[ce.a.Button,ce.a[e.btnType]].join(" "),children:e.children})},ie=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map((function(t){return Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{style:{textTransform:"capitalize"},children:t}),": ",e.props.ingredients[t]]},t)}));return Object(m.jsxs)(u,{children:[Object(m.jsx)("h3",{children:"Your order"}),Object(m.jsx)("p",{children:"A delicious burger with the following ingredients: "}),Object(m.jsx)("ul",{children:t}),Object(m.jsx)("p",{children:Object(m.jsxs)("strong",{children:["Total Price: ",this.props.price.toFixed(2),"$"]})}),Object(m.jsx)("p",{children:"Continue to Checkout?"}),Object(m.jsx)(se,{btnType:"Danger",clicked:this.props.purchaseCanceled,children:"CANCEL"}),Object(m.jsx)(se,{btnType:"Success",clicked:this.props.purchaseContinued,children:"CONTINUE"})]})}}]),n}(r.Component),oe=n(48),de=n.n(oe).a.create({baseURL:"https://react-my-burger-224ce.firebaseio.com/"}),le=n(49),ue=n.n(le),je=function(){return Object(m.jsx)("div",{className:ue.a.Loader,children:"Loading..."})},he=function(e,t){return function(n){Object(d.a)(a,n);var r=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var t=arguments.length,n=new Array(t),c=0;c<t;c++)n[c]=arguments[c];return(e=r.call.apply(r,[this].concat(n))).state={error:null},e.errorConfirmedHandler=function(){e.setState({error:null})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return Object(m.jsxs)(u,{children:[Object(m.jsx)(re,{modalClosed:this.errorConfirmedHandler,show:this.state.error,children:this.state.error?this.state.error.message:null}),Object(m.jsx)(e,Object(U.a)({},this.props))]})}}]),a}(r.Component)},pe={salad:.5,cheese:.4,meat:1.3,bacon:.7},be=he(function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={ingredients:null,totalPrice:4,purchaseable:!1,purchasing:!1,loading:!1,error:!1},e.addIngredientHandler=function(t){var n=e.state.ingredients[t]+1,r=Object(U.a)({},e.state.ingredients);r[t]=n;var a=pe[t],c=e.state.totalPrice+a;e.setState({ingredients:r,totalPrice:c}),e.updatePurchaseState(r)},e.removeIngredientHandler=function(t){var n=e.state.ingredients[t];if(!(n<=0)){var r=n-1,a=Object(U.a)({},e.state.ingredients);a[t]=r;var c=pe[t],s=e.state.totalPrice-c;e.setState({ingredients:a,totalPrice:s}),e.updatePurchaseState(a)}},e.purchaseHandler=function(){e.setState({purchasing:!0})},e.purchaseCancelHandler=function(){e.setState({purchasing:!1})},e.purchaseContinueHandler=function(){e.setState({loading:!0});var t=[];for(var n in e.state.ingredients)t.push(encodeURIComponent(n)+"="+encodeURIComponent(e.state.ingredients[n]));t.push("price="+e.state.totalPrice);var r=t.join("&");e.props.history.push({pathname:"/checkout",search:"?"+r})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;de.get("https://react-my-burger-224ce.firebaseio.com/ingredients.json").then((function(t){e.setState({ingredients:t.data})})).catch((function(t){e.setState({error:!0})}))}},{key:"updatePurchaseState",value:function(e){var t=Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0);this.setState({purchaseable:t>0})}},{key:"render",value:function(){var e=Object(U.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;var n=null,r=this.state.error?Object(m.jsx)("p",{children:"Ingredients can't be loaded"}):Object(m.jsx)(je,{});return this.state.ingredients&&(r=Object(m.jsxs)(u,{children:[Object(m.jsx)(J,{ingredients:this.state.ingredients}),Object(m.jsx)(ee,{ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removeIngredientHandler,disabledInfo:e,price:this.state.totalPrice,purchaseable:this.state.purchaseable,ordered:this.purchaseHandler})]}),n=Object(m.jsx)(ie,{ingredients:this.state.ingredients,purchaseCanceled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler,price:this.state.totalPrice})),this.state.loading&&(n=Object(m.jsx)(je,{})),Object(m.jsxs)(u,{children:[Object(m.jsx)(re,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler,children:n}),r]})}}]),n}(r.Component),de),Oe=n(50),ge=n(51),xe=n.n(ge),me=function(e){return Object(m.jsxs)("div",{className:xe.a.CheckoutSummary,children:[Object(m.jsx)("h1",{children:"We hope it tastes well!"}),Object(m.jsx)("div",{style:{width:"100%",margin:"auto"},children:Object(m.jsx)(J,{ingredients:e.ingredients})}),Object(m.jsx)(se,{btnType:"Danger",clicked:e.checkoutCancelled,children:"CANCEL"}),Object(m.jsx)(se,{btnType:"Success",clicked:e.checkoutContinued,children:"CONTINUE"})]})},fe=n(17),ve=n.n(fe),_e=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={name:"",email:"",address:{street:"",postalCode:""},loading:!1},e.orderHandler=function(t){t.preventDefault(),e.setState({loading:!0});var n={ingredients:e.props.ingredients,price:e.props.price,customer:{customer:{name:"Aleksandar Popovic",address:{street:"Veselina Maslese",zipCode:"21000",country:"Serbia"},email:"test@test.com"}}};de.post("/orders.json",n).then((function(t){console.log(t),e.setState({loading:!1,purchasing:!1}),e.props.history.push("/")})).catch((function(t){console.log(t),e.setState({loading:!1,purchasing:!1})}))},e}return Object(o.a)(n,[{key:"render",value:function(){var e=Object(m.jsxs)("form",{children:[Object(m.jsx)("input",{className:ve.a.Input,type:"text",name:"name",placeholder:"Your Name"}),Object(m.jsx)("input",{className:ve.a.Input,type:"email",name:"email",placeholder:"Your Email"}),Object(m.jsx)("input",{className:ve.a.Input,type:"text",name:"street",placeholder:"Street"}),Object(m.jsx)("input",{className:ve.a.Input,type:"text",name:"postal",placeholder:"Postal Code"}),Object(m.jsx)(se,{btnType:"Success",clicked:this.orderHandler,children:"ORDER"})]});return this.state.loading&&(e=Object(m.jsx)(je,{})),Object(m.jsxs)("div",{className:ve.a.ContactData,children:[Object(m.jsx)("h4",{children:"Enter your Contact Data"}),e]})}}]),n}(r.Component),Ce=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={ingredients:null,price:0},e.checkoutCancelledHandler=function(){e.props.history.goBack()},e.checkoutContinuedHandler=function(){e.props.history.replace("/checkout/contact-data")},e}return Object(o.a)(n,[{key:"componentWillMount",value:function(){var e,t=new URLSearchParams(this.props.location.search),n={},r=0,a=Object(Oe.a)(t.entries());try{for(a.s();!(e=a.n()).done;){var c=e.value;"price"===c[0]?r=+c[1]:n[c[0]]=+c[1]}}catch(s){a.e(s)}finally{a.f()}this.setState({ingredients:n,price:r})}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{children:[Object(m.jsx)(me,{ingredients:this.state.ingredients,checkoutCancelled:this.checkoutCancelledHandler,checkoutContinued:this.checkoutContinuedHandler}),Object(m.jsx)(q.a,{path:this.props.match.path+"/contact-data",render:function(t){return Object(m.jsx)(_e,Object(U.a)({ingredients:e.state.ingredients,price:e.state.price},t))}})]})}}]),n}(r.Component),ye=n(52),ke=n.n(ye),Se=function(e){var t=[];for(var n in e.ingredients)t.push({name:n,amount:e.ingredients[n]});var r=t.map((function(e){return Object(m.jsxs)("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},children:[e.name," (",e.amount,")"]},e.name)}));return Object(m.jsxs)("div",{className:ke.a.Order,children:[Object(m.jsxs)("p",{children:["Ingredients: ",r]}),Object(m.jsxs)("p",{children:["Price: ",Object(m.jsxs)("strong",{children:["USD ",e.price.toFixed(2)]})]})]})},Be=he(function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={orders:[],loading:!0},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;de.get("/orders.json").then((function(t){var n=[];for(var r in t.data)n.push(Object(U.a)(Object(U.a)({},t.data[r]),{},{id:r}));console.log(n),e.setState({loading:!1,orders:n})})).catch((function(t){e.setState({loading:!1})}))}},{key:"render",value:function(){return Object(m.jsx)("div",{children:this.state.orders.map((function(e){return Object(m.jsx)(Se,{ingredients:e.ingredients,price:+e.price},e.id)}))})}}]),n}(r.Component),de),Ne=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(C.a,{children:Object(m.jsx)(R,{children:Object(m.jsxs)(q.c,{children:[Object(m.jsx)(q.a,{path:"/checkout",component:Ce}),Object(m.jsx)(q.a,{path:"/orders",component:Be}),Object(m.jsx)(q.a,{path:"/",exact:!0,component:be})]})})})})}}]),n}(r.Component),we=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,84)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(Ne,{})}),document.getElementById("root")),we()}},[[83,1,2]]]);
//# sourceMappingURL=main.500f379a.chunk.js.map