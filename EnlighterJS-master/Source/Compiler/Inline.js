/*
---
description: Compiles an array of tokens into inline elements, grabbed into a outer container.

license: MIT-style X11

authors:
- Andi Dittrich

requires:
- Core/1.4.5

provides: [EnlighterJS.Compiler.Inline]
...
*/
EnlighterJS.Compiler.Inline = new Class({

	Extends : EnlighterJS.Compiler,

	options : {
		containerTag : 'pre'
	},

	initialize : function(options){
		this.parent(options);
	},

	/**
	 * Compiles an array of tokens into a highlighted element using a language and a theme.
	 * 
	 * @param {Language}
	 *            language The Language used when parsing.
	 * @param {String}
	 *            theme The Theme to use.
	 * @param {SpecialLineHighlighter}
	 * 			  lines to highlight           
	 * @return {Element} The generated Element.
	 */
	_compile : function(language, theme, specialLines){
		// create output container element
		var container = new Element(this.options.containerTag);
		
		// generate output based on ordered list of tokens
		language.getTokens().each(function(token, index){
			// get classname
			var className = token.type ? (language.aliases[token.type] || token.type) : '';
			
			// create new inline element which contains the token - htmlspecialchars get escaped by mootools setText !
			container.grab(new Element('span', {
				'class': className,
				'text': token.text
			}));
		});

		return container;
	}
});
