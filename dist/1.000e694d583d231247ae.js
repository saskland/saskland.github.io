webpackJsonp([1],{227:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var l=a(12),o=n(l),i=a(44),s=n(i),r=a(47),u=n(r),c=a(45),d=n(c),f=a(46),p=n(f),h=a(1),m=n(h),y=a(146),_=n(y),b=a(800),k=n(b),v=a(807),E=a(325),L=n(E),C=a(218),g=n(C),x=function(t){function e(t){(0,s.default)(this,e);var a=(0,u.default)(this,(e.__proto__||(0,o.default)(e)).call(this,t));return a.repositoryCallback=a.repositoryCallback.bind(a),a.state={transactions:[]},a.transactionsRepository=new L.default,a}return(0,p.default)(e,t),(0,d.default)(e,[{key:"componentDidMount",value:function(){document.title=v.title,this.landLocation=this.props.route.params.landLocation,this.transactionsRepository.getTransactionsForLandLocation(this.landLocation,this.repositoryCallback)}},{key:"repositoryCallback",value:function(t){this.setState({transactions:t,loading:!1}),console.log(t)}}]),(0,d.default)(e,[{key:"render",value:function(){return m.default.createElement(_.default,{className:k.default.content},m.default.createElement("h4",null,this.landLocation),m.default.createElement(g.default,{transactions:this.state.transactions}),m.default.createElement("p",null,m.default.createElement("br",null),m.default.createElement("br",null)))}}]),e}(m.default.Component);e.default=x},631:function(t,e,a){e=t.exports=a(78)(),e.push([t.id,"@media screen and (max-width:1024px){._7aiQ{padding:0 16px}}",""]),e.locals={content:"_7aiQ"}},800:[871,631],807:806});