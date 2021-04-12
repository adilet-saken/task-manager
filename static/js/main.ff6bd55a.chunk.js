(this["webpackJsonptask-manager"]=this["webpackJsonptask-manager"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(2),s=a.n(i),n=a(8),c=a.n(n),h=(a(13),a(3)),l=a(4),r=a(1),d=a(6),o=a(5),u=(a(14),a(15),a(0)),g=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(h.a)(this,a),(i=t.call(this,e)).state={title:"",datetime:"",highlighted:!1},i.changeTitle=i.changeTitle.bind(Object(r.a)(i)),i.changeDatetime=i.changeDatetime.bind(Object(r.a)(i)),i.changeHighlighted=i.changeHighlighted.bind(Object(r.a)(i)),i.reset=i.reset.bind(Object(r.a)(i)),i.save=i.save.bind(Object(r.a)(i)),i}return Object(l.a)(a,[{key:"changeTitle",value:function(e){var t=e.target.value;this.setState({title:t})}},{key:"changeDatetime",value:function(e){var t=e.target.value;this.setState({datetime:t})}},{key:"changeHighlighted",value:function(e){var t=e.target.checked;this.setState({highlighted:t})}},{key:"reset",value:function(){this.setState({title:"",datetime:"",highlighted:!1})}},{key:"save",value:function(){var e={title:this.state.title,datetime:this.state.datetime,highlighted:this.state.highlighted};this.props.onSaveTask(e),this.reset()}},{key:"render",value:function(){var e=this.state;return Object(u.jsxs)("div",{className:"Editor",children:[Object(u.jsxs)("div",{className:"Editor__input",children:[Object(u.jsx)("label",{children:"Task"}),Object(u.jsx)("input",{type:"text",placeholder:"Add Task",value:e.title,onChange:this.changeTitle})]}),Object(u.jsxs)("div",{className:"Editor__input",children:[Object(u.jsx)("label",{children:"Day & Time"}),Object(u.jsx)("input",{type:"text",placeholder:"Add Day & Time",value:e.datetime,onChange:this.changeDatetime})]}),Object(u.jsxs)("div",{className:"Editor__input Editor__checkbox",children:[Object(u.jsx)("label",{children:"Set Reminder"}),Object(u.jsx)("input",{type:"checkbox",checked:e.highlighted,onChange:this.changeHighlighted})]}),Object(u.jsx)("button",{onClick:this.save,children:"Save Task"})]})}}]),a}(s.a.Component),j=(a(17),a(18),a.p+"static/media/close.2189c3e1.svg"),b=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(h.a)(this,a),(i=t.call(this,e)).state={highlighted:e.task.highlighted},i.toggle=i.toggle.bind(Object(r.a)(i)),i.delete=i.delete.bind(Object(r.a)(i)),i}return Object(l.a)(a,[{key:"toggle",value:function(){this.setState((function(e){return{highlighted:!e.highlighted}}))}},{key:"delete",value:function(){this.props.onDelete(!0)}},{key:"render",value:function(){var e="Task";this.state.highlighted&&(e+=" Task--highlighted");var t=this.props.task;return Object(u.jsxs)("div",{className:e,onDoubleClick:this.toggle,children:[Object(u.jsxs)("div",{className:"Task__info",children:[Object(u.jsx)("h3",{children:t.title}),Object(u.jsx)("p",{children:t.datetime})]}),Object(u.jsx)("button",{onClick:this.delete,children:Object(u.jsx)("img",{src:j,alt:"close"})})]})}}]),a}(s.a.Component),k=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(h.a)(this,a),(i=t.call(this,e)).deleteTask=i.deleteTask.bind(Object(r.a)(i)),i}return Object(l.a)(a,[{key:"deleteTask",value:function(e){this.props.onDeleteTask(e)}},{key:"render",value:function(){var e=this,t="List";0===this.props.tasks.length&&(t+=" List--empty");var a=this.props.tasks.map((function(t){return Object(u.jsx)(b,{task:t,onDelete:function(a){e.deleteTask(t)}},t.id)}));return Object(u.jsx)("div",{className:t,children:a})}}]),a}(s.a.Component),v=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(h.a)(this,a),(i=t.call(this,e)).state={open:!1,tasks:[{id:1,title:"Build a rocket!",datetime:"10 Apr 10:00 AM",highlighted:!0},{id:2,title:"Test the rocket!",datetime:"11 Apr 1:00 PM",highlighted:!1},{id:3,title:"Fly to Mars!",datetime:"12 Apr 3:00 PM",highlighted:!1}],lastTaskId:-1},i.state.lastTaskId=i.state.tasks.reduce((function(e,t){return Math.max(e,t.id)}),i.state.lastTaskId),i.toggle=i.toggle.bind(Object(r.a)(i)),i.saveTask=i.saveTask.bind(Object(r.a)(i)),i.deleteTask=i.deleteTask.bind(Object(r.a)(i)),i}return Object(l.a)(a,[{key:"toggle",value:function(){this.setState((function(e){return{open:!e.open}}))}},{key:"saveTask",value:function(e){var t=this.state.lastTaskId+1,a={id:t},i=Object.assign(a,e);this.setState((function(e){return{tasks:e.tasks.concat(i),lastTaskId:t}}))}},{key:"deleteTask",value:function(e){var t=this;this.setState((function(a){return{tasks:t.state.tasks.filter((function(t){return t!==e}))}}))}},{key:"render",value:function(){var e=this.state.open?"Manager__header__button--open":"Manager__header__button--closed",t=this.state.open?"Close":"Add";return Object(u.jsx)("div",{className:"Manager__container",children:Object(u.jsxs)("div",{className:"Manager",children:[Object(u.jsxs)("div",{className:"Manager__header",children:[Object(u.jsx)("h1",{children:"Task Manager"}),Object(u.jsx)("button",{className:e,onClick:this.toggle,children:t})]}),this.state.open&&Object(u.jsx)(g,{onSaveTask:this.saveTask}),Object(u.jsx)(k,{tasks:this.state.tasks,onDeleteTask:this.deleteTask})]})})}}]),a}(s.a.Component),O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,20)).then((function(t){var a=t.getCLS,i=t.getFID,s=t.getFCP,n=t.getLCP,c=t.getTTFB;a(e),i(e),s(e),n(e),c(e)}))};c.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root")),O()}],[[19,1,2]]]);
//# sourceMappingURL=main.ff6bd55a.chunk.js.map