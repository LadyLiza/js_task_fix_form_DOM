document.querySelectorAll("form input").forEach(function(e){var r=document.createElement("label");r.className="field-label",r.htmlFor=e.id;var t=e.name.replace(/([a-z])([A-Z])/g,"$1 $2").replace(/^./,function(e){return e.toUpperCase()});r.textContent=t,e.placeholder=t,e.parentNode.insertBefore(r,e)});
//# sourceMappingURL=index.07f4b4eb.js.map
