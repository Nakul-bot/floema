/*! For license information please see main.cfcc6ccbf5e6f1676fa6.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Preloader.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});var n=s("./node_modules/gsap/index.js"),a=s("./app/classes/Component.js"),i=s("./node_modules/lodash/each.js"),l=s.n(i),o=s("./app/utils/text.js");class r extends a.default{constructor(){super({element:".preloader",elements:{title:".preloader__text",number:".preloader__number",numberText:".preloader__number__text",images:document.querySelectorAll("img")}}),(0,o.split)({element:this.elements.title,expression:"<br>"}),(0,o.split)({element:this.elements.title,expression:"<br>"}),this.elements.titleSpans=this.elements.title.querySelectorAll("span span"),this.length=0,this.createLoader()}createLoader(){l()(this.elements.images,(e=>{e.onload=t=>this.onAssetLoaded(e),e.src=e.getAttribute("data-src")}))}onAssetLoaded(e){this.length+=1;const t=this.length/this.elements.images.length;this.elements.numberText.innerHTML=`${Math.round(100*t)}%`,1===t&&this.onLoaded()}onLoaded(){return new Promise((e=>{this.animateOut=n.default.timeline({delay:2}),this.animateOut.to(this.elements.titleSpans,{duration:1.5,ease:"expo.out",stagger:.1,y:"100%"}),this.animateOut.to(this.elements.numberText,{duration:1.5,ease:"expo.out",stagger:.1,y:"100%"},"-=1.4"),this.animateOut.to(this.element,{duration:1.5,ease:"expo.out",scale:0,transformOrigin:"100% 100%"},"-=1"),this.animateOut.call((e=>{this.emit("completed")}))}))}destroy(){this.element.parentNode.removeChild(this.element)}}}},(function(e){e.h=()=>"6a190301eb1713c7b605"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jZmNjNmNjYmY1ZTZmMTY3NmZhNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7NFFBU2UsTUFBTUEsVUFBa0JDLEVBQUFBLFFBQ3JDQyxjQUNFQyxNQUFNLENBQ0pDLFFBQVMsYUFDVEMsU0FBVSxDQUNSQyxNQUFPLG1CQUNQQyxPQUFRLHFCQUNSQyxXQUFZLDJCQUNaQyxPQUFRQyxTQUFTQyxpQkFBaUIsV0FJdENDLEVBQUFBLEVBQUFBLE9BQU0sQ0FDSlIsUUFBU1MsS0FBS1IsU0FBU0MsTUFDdkJRLFdBQVksVUFHZEYsRUFBQUEsRUFBQUEsT0FBTSxDQUNKUixRQUFTUyxLQUFLUixTQUFTQyxNQUN2QlEsV0FBWSxTQUdkRCxLQUFLUixTQUFTVSxXQUNaRixLQUFLUixTQUFTQyxNQUFNSyxpQkFBaUIsYUFFdkNFLEtBQUtHLE9BQVMsRUFFZEgsS0FBS0ksZUFHUEEsZUFDRUMsR0FBQUEsQ0FBS0wsS0FBS1IsU0FBU0ksUUFBU0wsSUFDMUJBLEVBQVFlLE9BQVVDLEdBQU1QLEtBQUtRLGNBQWNqQixHQUMzQ0EsRUFBUWtCLElBQU1sQixFQUFRbUIsYUFBYSxlQUl2Q0YsY0FBY0csR0FDWlgsS0FBS0csUUFBVSxFQUVmLE1BQU1TLEVBQVVaLEtBQUtHLE9BQVNILEtBQUtSLFNBQVNJLE9BQU9PLE9BRW5ESCxLQUFLUixTQUFTRyxXQUFXa0IsVUFBYSxHQUFFQyxLQUFLQyxNQUFnQixJQUFWSCxNQUVuQyxJQUFaQSxHQUNGWixLQUFLZ0IsV0FJVEEsV0FDRSxPQUFPLElBQUlDLFNBQVNDLElBQ2xCbEIsS0FBS21CLFdBQWFDLEVBQUFBLFFBQUFBLFNBQWMsQ0FDOUJDLE1BQU8sSUFHVHJCLEtBQUttQixXQUFXRyxHQUFHdEIsS0FBS1IsU0FBU1UsV0FBWSxDQUMzQ3FCLFNBQVUsSUFDVkMsS0FBTSxXQUNOQyxRQUFTLEdBQ1RDLEVBQUcsU0FHTDFCLEtBQUttQixXQUFXRyxHQUNkdEIsS0FBS1IsU0FBU0csV0FDZCxDQUNFNEIsU0FBVSxJQUNWQyxLQUFNLFdBQ05DLFFBQVMsR0FDVEMsRUFBRyxRQUVMLFNBR0YxQixLQUFLbUIsV0FBV0csR0FDZHRCLEtBQUtULFFBQ0wsQ0FDRWdDLFNBQVUsSUFDVkMsS0FBTSxXQUNORyxNQUFPLEVBQ1BDLGdCQUFpQixhQUVuQixPQUdGNUIsS0FBS21CLFdBQVdVLE1BQU10QixJQUNwQlAsS0FBSzhCLEtBQUssbUJBS2hCQyxVQUNFL0IsS0FBS1QsUUFBUXlDLFdBQVdDLFlBQVlqQyxLQUFLVCwwQkNwRzdDMkMsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL1ByZWxvYWRlci5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG5pbXBvcnQgR1NBUCBmcm9tICdnc2FwJztcblxuaW1wb3J0IENvbXBvbmVudCBmcm9tICdjbGFzc2VzL0NvbXBvbmVudCc7XG5cbmltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJztcblxuaW1wb3J0IHsgc3BsaXQgfSBmcm9tICd1dGlscy90ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlbG9hZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoe1xuICAgICAgZWxlbWVudDogJy5wcmVsb2FkZXInLFxuICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgdGl0bGU6ICcucHJlbG9hZGVyX190ZXh0JyxcbiAgICAgICAgbnVtYmVyOiAnLnByZWxvYWRlcl9fbnVtYmVyJyxcbiAgICAgICAgbnVtYmVyVGV4dDogJy5wcmVsb2FkZXJfX251bWJlcl9fdGV4dCcsXG4gICAgICAgIGltYWdlczogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nJyksXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgc3BsaXQoe1xuICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50cy50aXRsZSxcbiAgICAgIGV4cHJlc3Npb246ICc8YnI+JyxcbiAgICB9KTtcblxuICAgIHNwbGl0KHtcbiAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudHMudGl0bGUsXG4gICAgICBleHByZXNzaW9uOiAnPGJyPicsXG4gICAgfSk7XG5cbiAgICB0aGlzLmVsZW1lbnRzLnRpdGxlU3BhbnMgPVxuICAgICAgdGhpcy5lbGVtZW50cy50aXRsZS5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuIHNwYW4nKTtcblxuICAgIHRoaXMubGVuZ3RoID0gMDtcblxuICAgIHRoaXMuY3JlYXRlTG9hZGVyKCk7XG4gIH1cblxuICBjcmVhdGVMb2FkZXIoKSB7XG4gICAgZWFjaCh0aGlzLmVsZW1lbnRzLmltYWdlcywgKGVsZW1lbnQpID0+IHtcbiAgICAgIGVsZW1lbnQub25sb2FkID0gKF8pID0+IHRoaXMub25Bc3NldExvYWRlZChlbGVtZW50KTtcbiAgICAgIGVsZW1lbnQuc3JjID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJyk7XG4gICAgfSk7XG4gIH1cblxuICBvbkFzc2V0TG9hZGVkKGltYWdlKSB7XG4gICAgdGhpcy5sZW5ndGggKz0gMTtcblxuICAgIGNvbnN0IHBlcmNlbnQgPSB0aGlzLmxlbmd0aCAvIHRoaXMuZWxlbWVudHMuaW1hZ2VzLmxlbmd0aDtcblxuICAgIHRoaXMuZWxlbWVudHMubnVtYmVyVGV4dC5pbm5lckhUTUwgPSBgJHtNYXRoLnJvdW5kKHBlcmNlbnQgKiAxMDApfSVgO1xuXG4gICAgaWYgKHBlcmNlbnQgPT09IDEpIHtcbiAgICAgIHRoaXMub25Mb2FkZWQoKTtcbiAgICB9XG4gIH1cblxuICBvbkxvYWRlZCgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuYW5pbWF0ZU91dCA9IEdTQVAudGltZWxpbmUoe1xuICAgICAgICBkZWxheTogMixcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmFuaW1hdGVPdXQudG8odGhpcy5lbGVtZW50cy50aXRsZVNwYW5zLCB7XG4gICAgICAgIGR1cmF0aW9uOiAxLjUsXG4gICAgICAgIGVhc2U6ICdleHBvLm91dCcsXG4gICAgICAgIHN0YWdnZXI6IDAuMSxcbiAgICAgICAgeTogJzEwMCUnLFxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuYW5pbWF0ZU91dC50byhcbiAgICAgICAgdGhpcy5lbGVtZW50cy5udW1iZXJUZXh0LFxuICAgICAgICB7XG4gICAgICAgICAgZHVyYXRpb246IDEuNSxcbiAgICAgICAgICBlYXNlOiAnZXhwby5vdXQnLFxuICAgICAgICAgIHN0YWdnZXI6IDAuMSxcbiAgICAgICAgICB5OiAnMTAwJScsXG4gICAgICAgIH0sXG4gICAgICAgICctPTEuNCdcbiAgICAgICk7XG5cbiAgICAgIHRoaXMuYW5pbWF0ZU91dC50byhcbiAgICAgICAgdGhpcy5lbGVtZW50LFxuICAgICAgICB7XG4gICAgICAgICAgZHVyYXRpb246IDEuNSxcbiAgICAgICAgICBlYXNlOiAnZXhwby5vdXQnLFxuICAgICAgICAgIHNjYWxlOiAwLFxuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzEwMCUgMTAwJScsXG4gICAgICAgIH0sXG4gICAgICAgICctPTEnXG4gICAgICApO1xuXG4gICAgICB0aGlzLmFuaW1hdGVPdXQuY2FsbCgoXykgPT4ge1xuICAgICAgICB0aGlzLmVtaXQoJ2NvbXBsZXRlZCcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjZhMTkwMzAxZWIxNzEzYzdiNjA1XCIpIl0sIm5hbWVzIjpbIlByZWxvYWRlciIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwic3VwZXIiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJ0aXRsZSIsIm51bWJlciIsIm51bWJlclRleHQiLCJpbWFnZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzcGxpdCIsInRoaXMiLCJleHByZXNzaW9uIiwidGl0bGVTcGFucyIsImxlbmd0aCIsImNyZWF0ZUxvYWRlciIsImVhY2giLCJvbmxvYWQiLCJfIiwib25Bc3NldExvYWRlZCIsInNyYyIsImdldEF0dHJpYnV0ZSIsImltYWdlIiwicGVyY2VudCIsImlubmVySFRNTCIsIk1hdGgiLCJyb3VuZCIsIm9uTG9hZGVkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJhbmltYXRlT3V0IiwiR1NBUCIsImRlbGF5IiwidG8iLCJkdXJhdGlvbiIsImVhc2UiLCJzdGFnZ2VyIiwieSIsInNjYWxlIiwidHJhbnNmb3JtT3JpZ2luIiwiY2FsbCIsImVtaXQiLCJkZXN0cm95IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9