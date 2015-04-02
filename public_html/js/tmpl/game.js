define(function () { return function (__fest_context){"use strict";var __fest_self=this,__fest_buf="",__fest_chunks=[],__fest_chunk,__fest_attrs=[],__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn,__fest_html="",__fest_blocks={},__fest_params,__fest_element,__fest_debug_file="",__fest_debug_line="",__fest_debug_block="",__fest_htmlchars=/[&<>"]/g,__fest_htmlchars_test=/[&<>"]/,__fest_short_tags = {"area":true,"base":true,"br":true,"col":true,"command":true,"embed":true,"hr":true,"img":true,"input":true,"keygen":true,"link":true,"meta":true,"param":true,"source":true,"wbr":true},__fest_element_stack = [],__fest_htmlhash={"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"},__fest_jschars=/[\\'"\/\n\r\t\b\f<>]/g,__fest_jschars_test=/[\\'"\/\n\r\t\b\f<>]/,__fest_jshash={"\"":"\\\"","\\":"\\\\","/":"\\/","\n":"\\n","\r":"\\r","\t":"\\t","\b":"\\b","\f":"\\f","'":"\\'","<":"\\u003C",">":"\\u003E"},___fest_log_error;if(typeof __fest_error === "undefined"){___fest_log_error = (typeof console !== "undefined" && console.error) ? function(){return Function.prototype.apply.call(console.error, console, arguments)} : function(){};}else{___fest_log_error=__fest_error};function __fest_log_error(msg){___fest_log_error(msg+"\nin block \""+__fest_debug_block+"\" at line: "+__fest_debug_line+"\nfile: "+__fest_debug_file)}function __fest_replaceHTML(chr){return __fest_htmlhash[chr]}function __fest_replaceJS(chr){return __fest_jshash[chr]}function __fest_extend(dest, src){for(var i in src)if(src.hasOwnProperty(i))dest[i]=src[i];}function __fest_param(fn){fn.param=true;return fn}function __fest_call(fn, params,cp){if(cp)for(var i in params)if(typeof params[i]=="function"&&params[i].param)params[i]=params[i]();return fn.call(__fest_self,params)}function __fest_escapeJS(s){if (typeof s==="string") {if (__fest_jschars_test.test(s))return s.replace(__fest_jschars,__fest_replaceJS);} else if (typeof s==="undefined")return "";return s;}function __fest_escapeHTML(s){if (typeof s==="string") {if (__fest_htmlchars_test.test(s))return s.replace(__fest_htmlchars,__fest_replaceHTML);} else if (typeof s==="undefined")return "";return s;}var json=__fest_context;__fest_buf+=("<div><h3>game</h3></div><div class=\"score\">You score:");try{__fest_buf+=(__fest_escapeHTML(json.score))}catch(e){__fest_log_error(e.message + "5");}__fest_buf+=("</div><div><table class=\"gameTable\" border=\"2\">");var i,__fest_to0,__fest_from0,__fest_iterator0;try{__fest_from0=1;__fest_to0=10;}catch(e){__fest_from0=0;__fest_to0=0;__fest_log_error(e.message);}for(i = __fest_from0;i<=__fest_to0;i++){__fest_buf+=("<tr class=\"gameTable__row\">");var j,__fest_to1,__fest_from1,__fest_iterator1;try{__fest_from1=1;__fest_to1=10;}catch(e){__fest_from1=0;__fest_to1=0;__fest_log_error(e.message);}for(j = __fest_from1;j<=__fest_to1;j++){__fest_buf+=("<td class=\"gameTable__cell\" style=\"background-color: red;\">");try{__fest_buf+=(__fest_escapeHTML(j))}catch(e){__fest_log_error(e.message + "12");}__fest_buf+=(" ");try{__fest_buf+=(__fest_escapeHTML(i))}catch(e){__fest_log_error(e.message + "12");}__fest_buf+=("</td>");}__fest_buf+=("</tr>");}__fest_buf+=("</table></div><div class=\"control-buttons\"><div class=\"control-buttons__button control-buttons__button_red\"></div><div class=\"control-buttons__button control-buttons__button_green\"></div><div class=\"control-buttons__button control-buttons__button_blue\"></div><div class=\"control-buttons__button control-buttons__button_yellow\"></div><div class=\"control-buttons__button control-buttons__button_pink\"></div></div><br/><a href=\"#\" class=\"btn btn-danger\">back</a>");__fest_to=__fest_chunks.length;if (__fest_to) {__fest_iterator = 0;for (;__fest_iterator<__fest_to;__fest_iterator++) {__fest_chunk=__fest_chunks[__fest_iterator];if (typeof __fest_chunk==="string") {__fest_html+=__fest_chunk;} else {__fest_fn=__fest_blocks[__fest_chunk.name];if (__fest_fn) __fest_html+=__fest_call(__fest_fn,__fest_chunk.params,__fest_chunk.cp);}}return __fest_html+__fest_buf;} else {return __fest_buf;}} ; });