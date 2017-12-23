/*
* Jno2 or jnode
* formerly gnode 2012 and ltfx 2009
* 
* this API is more light than jquery API, less perform than 
* jquery but his code i very light, that is allow to make 
* actions very quickly. a lot of version exist but only the 
* 3.0 is available on github but is deprecated todday.
*
* Today Jquery has a code very heavy for he browsers,
* so i use this code who's most light, that way will 
* allow to reserve memory for others js object into projects. 
*
* Licence : no-licence
* @       : мародер потока
* last-up : 2017  
*/
(function( slf ){

var jno2 = function( s ){
return new jno2.node( s );
}, siz = /((\x20){0,}\<(\x20){0,}(\d+)|(\x20){0,}\>(\x20){0,}(\d+)|(\x20){0,}\:(\x20){0,}(\d+))/,
   slt = /^(\.|\#)([\d\w\_]+)$/,
   attr= /([\w\d]+)\=(\'|\")(.+?)(\'\")/,
   tag = /^([\w\d_]+)(\.([\w\d\_]+)|\#([\w\d\_]+)|\[([\w\d\_]+)\=\'([\w\d\_]+)\'\]|)$/,

   bdr = /^(\d+)(px|em|%|) (\w+) (rgb\(([\d ,]+)\)|\#([\dabcdef]){3,6})$/;

/*StringExtends*/
String.prototype.upper = function( a ){
	var r = "";

	if( arguments.length === 0 )
	return this.toUpperCase( );

	jno2.each( this.toString( ), function( v, i ){
		r += i < a  ? v.toUpperCase( ) : v;
	return 1;
	});
return r;	
};
String.prototype.repeat = function( v, i ){
	var ret = "";
	for(var j = 0; j < i; j++ ){
		ret+=v;
	}
return ret;
};
// HexValue
String.prototype.htoChar = function( ){
	var i = 0,
	     ret = "";
	for(; i < this.length; i+= 2 ){
		ret += String.fromCharCode( parseInt( 
			this[i] + "" + this[ i+1 ],
			16	
			));
	}
return ret;
};
//char value
String.prototype.ctoHex  = function( ){
	var i = 0, t,ret = "";
	
	jno2.each( this, function( _, i ){
	ret +=  !( ( t = ( new Number ( this.charCodeAt( i ) ) ).toString( 16 ) ).length%2 ) ? t : '0'+t;
	return 1;
	});
	
return ret;
};

var merge = ( window.merge = jno2.extend = function ( handle, element ){
		var tmp, i;
		
		if( arguments.length == 1 && this != ( slf || window ) ){
			element = handle;
			handle  = this;
		}else if( typeof element === "function" ){
			tmp = element;			
			element = handle;
			handle  = tmp; 
		}else if( arguments.length == 1 && this == window )
			return;;
		
		try{ 
		if ( element.length != undefined ){
			for(i=0; i < tmp.length; i++){
				handle[ i ] = element[ i ];			
			}
		}else
		for( tmp in element ){
			handle[ tmp ] = element[ tmp ];
		};;
		}catch(e){};
		
return handle;
} );

// tag 		  --> Array nativeJS
// tag.#[attr=''] --> Array
// .clas	  --> Array
// #id	          --> node
// > * = len
// 
// /^\.(.+)$/
// /^([\d\w_]+)(\.([\w\d_]+)|\#([\w\d_]+)|\[(\w+)\=\'([\w\d_]+)\'\]|)$/

jno2.extend( {
	isArray:function( a ){
	return (typeof a === "Array" || typeof a === "object" )
	},
	isDOM:function( a ){
	return (a && a.nodeType && a.nodeType === 1 );
	},
	
	_ce:function( a ){
	return slf.document.createElement( a );
	},
	DOM:function( a ){
	return jno2._ce( a );
	},
	_gt:function( a, b, c ){
		c = c || slf.document;
	return c[ "getElement"+ ( a == "#" ? "ById" : a == "." ? "sByClassName" : "sByTagName" ) ] ?
	       c[ "getElement"+ ( a == "#" ? "ById" : a == "." ? "sByClassName" : "sByTagName" ) ]( b ) : null;
	},
	_ap:function( hdl, node ){
	return ( hdl || slf.document ).appendChild( node ); 
	},
	_rm:function( hdlp, node ){
	return hdlp.removeChild( node ); 
	},

	made:function( hdl, elts, val, callback ){
		var tmp;
		try{
			if( this.isArray( elts ) ){

				for( tmp in elts ){
					
					this.isArray( elts[ tmp ] ) ?
					this.made( hdl[ tmp ], elts[ tmp ], undefined, callback ) : 
					callback && typeof callback == "function" ?
					callback.call( hdl, tmp, hdl[ tmp ] ) :
					hdl[ tmp ] = elts[ tmp ];
				}

			}else if( elts && val != undefined ){
				hdl[ elts ] = val;
			}
			tmp=null;
		}catch(e){};

	return hdl;
	},

	each:function( hdl, cllbck, ptr ){
		var tmp,i;
		try{
		
		if( jno2.isDOM( hdl ) ){		
		cllbck.call( 
			( ptr || hdl ),
			 hdl,
			 0
		 );return hdl}

		if( hdl.length != undefined ){
			for( i=0; i < hdl.length; i++ ){
				if( !cllbck.call( 
					( ptr || hdl ),
					hdl[ i ],
					i 
				) ) break;;
			}
			//hdl.length += 
		}else
		for( tmp in hdl ){
			if( !cllbck.call( 
				( ptr || hdl ),
				hdl[ tmp ],
				tmp 
			) ) break;;
		};;

 		}catch(e){ console.log(e); };
	return hdl;
	},


	dint:function( a ){
	var tmp;
	return (tmp=/([0-9]*)(px|%|em|)/.exec( a ) ) ? parseFloat( tmp[ 1 ] ) : 0; 
	},
	size:function( hdl, a, b ){
		var tmp;

		if( b == undefined ){
			if( tmp = /([0-9]*)(px|%|em|)/.exec(
				 ( hdl[ a ] || hdl.style[a] || hdl[ "offset"+a.upper( 1 ) ]  ) 
			) ){
			return !isNaN( parseInt( tmp[ 1 ] ) ) ? parseFloat( tmp[ 1 ] ) : null;
			}else
			return null;;
		}
		this.made( 
			( hdl.nodeName == "IFRAME" || hdl.nodeName == "CANVAS" || hdl.nodeName == "IMG" ? hdl : hdl.style ),
			a, b 
		);
	return hdl;
	},
	sort:function( phdl, opts, callback, domHandler  ){
		var tmp, b, j = 0;
		
		opts = jno2.extend( { less:0, more:0, one:0, opts:0 }, opts );
		jno2.each( ( this.isArray( domHandler ) && !jno2.isDOM( domHandler ) ? domHandler : jno2._gt( opts.calls, opts.name, domHandler ) ), function( hdl, i ){
			
			if( opts.opts.enbld && hdl[ opts.opts.calls === "." ? 'className' : 'id' ].split(' ').indexOf( opts.opts.name ) > -1 ||
			    opts.opts.enbld && opts.opts.calls == "attr" && hdl[ opts.opts.name ] === opts.opts.value )
			i-=j,b = true;
			else if( opts.opts.enbld ) j++;;

			/*a && b || a 
			1 && 0 || 1 = 1
			1 && 1 || 1 = 1
			0 && 1 || 0 = 0
			0 && 0 || 0 = 0*/
			if( ( (tmp = ( opts.more && i >= opts.more ) || ( opts.less && i < opts.less ) ||  ( opts.one  && i == opts.one ) ||  ( !opts.one && !opts.more && !opts.less ) ) && b ) || ( tmp && !opts.opts.enbld ) ){
				
				typeof callback === "function" ?
				callback.call( phdl, hdl, i ) : 
				(phdl[ phdl.length ] = hdl,
				phdl.length++);
			}
			b=0;
		return 1;
		});
	return phdl;
	},

	traversing:function( hdl, opts, cvoid ){
		var tmp = [];

		this.each( hdl.children, function( phdl ){
			
			if( phdl.children && phdl.children.length > 0 ) { 
				jno2.traversing(
					phdl,
					opts,
					( cvoid || tmp )
				);
			}else
			( cvoid || tmp ).push( phdl );
					
		return 1
		});
	return ( cvoid || tmp );
	},

	isClass:function( hdl, a ){
	return ( hdl.className.split(" ").indexOf( a  ) > -1 )
	},
	child:function( hdl, opts ){
	return this.sort( 
			{ length:0 },
			opts,
			undefined, hdl 
		);	
	},
	content:function( a, b, c ){

	},
});

/*
* parsingSlector formerly shortcut
*/
jno2.extend( {
	parseSelector:function( s ){
		var sort = {
		more:0, less:0, one:0,
		calls:"", opts:{enbld:0}, name:"",
		},tmp;

		/* selector <|>|: x*/
		if( tmp = siz.exec( s ) ){
		sort[ tmp[4] ? "less" : tmp[7] ? "more" : "one" ] = tmp[4] ? tmp[4] : tmp[7] ? tmp[7] : tmp[10];
		s = s.replace(
			tmp[0],
			""
		);
		}
		/*.|#name*/
		if( tmp = slt.exec( s ) ){
			sort.calls = tmp[1];
			sort.name  = tmp[2];
		/*tagname selector*/
		}else if( tmp = tag.exec( s ) ){
			sort.calls="";
			sort.name =tmp[1];
			
			sort.opts.calls = tmp[3] ? "." : tmp[4] ? "#" : tmp[5] ? "attr" : "";
			sort.opts.enbld = sort.opts.calls.length > 0;
			sort.opts.name  = tmp[3] ? tmp[3] : tmp[4] ? tmp[4] : tmp[5] ? tmp[5] : "";
			sort.opts.value = tmp[5] ? tmp[6] : null;  
		}
	return sort;
	},
});
jno2.events = (function( slf ){
	var evts = "dblclick,click,mousemove,mouseout,mousedown,mouseup,mouseover,keypress,keydown,keyup,"+
		"blur,focus,resize,submit,load,unload,drag,dragstart,dragover,dragleave,drop,scroll,change,"+
		"contextmenu".split(",");
return {

	hookKB:function( callback, ptr, interrupt ){
	return function( event ){
		interrupt.indexOf( new String( event.keyCode ? event.keyCode : event.charCode ).toString( ) ) > -1 ?
		callback.call( ( ptr || null ), event.target, event.keyCode ? event.keyCode : event.charCode, event.target.value ) : 
		void 0;
	};
	},
	__:function( callback, ptr, dom ){
	return function( ){
	var argv; 
	( argv = (new Array( arguments.length ) )).push( dom );
	return callback.apply(
		ptr,
		arguments
		);
	};
	},	
	attach:function( hdl, event, callback, ptr ){
		var tmp, c = callback, slf = this;
		
		// keypress[13,14,20]		
		c = ( ( tmp = /^(key(up|down|press))\[(.+)\]$/.exec( event ) ) ? slf.hookKB : slf.__ )(
			callback,
			ptr,
			tmp ? tmp[ 3 ].split( ) : hdl 
		);
		
		event = tmp ? tmp[ 1 ] : event;

		// attach
		evts.indexOf( event ) > -1 && hdl.addEventListener ?
		hdl.addEventListener( event, c, true ) :
		evts.indexOf( event ) > -1 && hdl.attachEvent ?
		hdl.attachEvent("on"+event,c ,true) : void 0;

	},
};
})( jno2 );

//tag 1
// .class 3
// #id 4
// tagattr 5/6
// .class, #id 
///^([\w\d_]+)(\.([\w\d_]+)|\#([\w\d_]+)|\[([\w\d_]+)\=\'([\w\d_]+)\'\])$/.exec("td[type='text']>1")
// /^(\.|\#)([\d\w_]+)$/
// len 
// :10
// >7
// <4
///((\x20){0,}\<(\x20){0,}(\d+)|(\x20){0,}\>(\x20){0,}(\d+)|(\x20){0,}\:(\x20){0,}(\d+))/.exec("td[type='text']:1")
jno2.node = function( s ){
	var tmp;

	this.i = this.length = this.c = 0;

	// node
	if( s instanceof jno2.node )
	return s;
	// DOM 0
	else if( jno2.isDOM( s ) && s.jno2 && s.jno2 instanceof jno2.node )
	return s.jno2;
	// DOM 1
	else if( jno2.isDOM( s ) && !s.jno2 ){
		this[this.length] = s;
		this.length++;
	// ArrayDOM
	}else if( jno2.isArray( s ) && !jno2.isDOM( s )){
		jno2.sort( this, {}, function( hdl ){

			if( jno2.isDOM( hdl ) )
			this[ this.length ] = hdl,
			this.length++;;

		}, s );
	// create new Element DOM
	}else if( (tmp=/^\<([\d\w]+)(.+|)\>$/.exec(s) ) ){
		this[this.length] = jno2.DOM( tmp[1] );	
		this.length++;
	/* text selctor*/
	}else{
		jno2.sort(
			this,
			jno2.parseSelector( s ) 
		 );
		if( this.length === 0 );

	}
	
return this;
};

jno2.extend( jno2.node.prototype,
{
	eq:function(  a ){
		a ?
		this.i += a > 0 && a < this.length ? -(this.i-a) : this.i+1 > 0 && this.i+1 < this.length ?   1 : -(this.length-1) 
		: void 0;
	// current target		
	return jno2( this[ this.i ] );
	},
	start:function(){
	return jno2( this[ this.i = 0 ] );
	},
	end:function( ){
	return jno2( this[ this.length-1 ] );
	}
	
});

jno2.node.extend = merge;
jno2.extend( jno2.node.prototype,
{
	
	rmClass:function( n ){
	return this.each(function( hdl ){
		var tmp,i;

		( i = ( tmp = hdl.className.replace(/([\x20]){2,}/g, "\x20" ).split(" ") ).indexOf( n ) ) > -1  ?
		hdl.className = [].concat( tmp.slice( 0, i ) ).concat( tmp.slice( i+1, tmp.length ) ).join(" ") : void 0;
		
		return 1;
		});
	},
	//
	isClass:function( a ){
	return jno2.isClass( 
		this[ this.i ],
		a
		);
	},	
	
	// b = 1
	// b = [1,2,3]
	// b = < 12
	// b = > 5
	addClass:function( a, b  ){
	var tmp;
	return this.each(function( hdl ){
			!jno2.isClass( hdl, a ) ?
			( ( tmp = hdl.className.replace(/([\x20]){2,}/g,"\x20").split(" ") ).push( a ),
			hdl.className = tmp.join(" ") ) :
			void 0;

		return 1;
		});
	},

	// gnode compatibility
	Class:function( a, b ){
	return this.addClass( a, b );
	},

	// void
	// Idvalue
	id:function( a ){
	return arguments.length === 1 ? this.each(function( hdl ){
			hdl.id = a;
		return 1;
		}) : this[ this.i ].id; 
	},
	
	attrib:function( a, b ){
	return arguments.length == 2 || (jno2.isArray( a ) && !b) ? this.each( function( hdl ){

			this.made( a, b );
		return 1;
		}) : 
		arguments.length == 1 && jno2.isArray( a )  ?
		jno2.made( this, a, undefined, function( key, val ){
			alert(655 );
			//a[key]=val;
		}) :
		arguments.length == 1 && typeof a == "string" ?
		this[ this.i ][ a ] : this;
	},
	each:function( a, b ){
		if( arguments.length === 1 && typeof a === "function" ){
		return jno2.each( this, a );
		}
	},

	made:function( a, b ){
	return this.each( function( hdl ){
		jno2.made( 
			hdl,
			a, b 
		);
	return 1;
	}); 
	},
	
	// css rule
	// rule, value
	// obj => { rule:val }
	// rule 
	// rule, callbac
	css:function( a, b ){
	return arguments.length === 1 && typeof a == "string" ? 
		this[ this.i ].style[a] :
		jno2.each( this, function( hdl, i ){

			typeof a === "string" && typeof b === "function" ?
			b.call( this , hdl, hdl.style[a], i ) :
			jno2.made(
				hdl.style,
				a,b
			);

		return 1;
		});
	},
	
	// a, b
	// obj
	// a
	// , type
	data:function( a, b, c ){
	
		if( ( jno2.isArray( a ) & !b ) || ( a && b ) )
		return this.each(function( hdl ){
				jno2.made( 
					hdl.dataset, 
					a,b
				);
			return 1;
			});
		else if( typeof a ==  "string" ){
			// eq
		return c ? window[ "parse"+c.upper(1) ] ( this[ 0 ].dataset[ a ] ) :
			   this[ this.i ].dataset[ a ];
		}
	},
	dataInt:function( a, b ){
	return this.data( a, b, 'int' );
	},
	dataFloat:function( a, b ){
	return this.data( a, b, 'float' );
	}


});

/*text*/
jno2.extend( jno2.node.prototype,
{
	content:function( a,b,c ){
		var ctmp = ( this[ this.i ].value  ?  
		 this[ this.i ].value : 
		 this[ this.i ].innerHTML 
		), b = b || 0, v = "";
		
		if( a != undefined ){
			v = a instanceof jno2.node ? a.val( ) : typeof a == "string" ? a : "";
			
			this[ this.i ][ (this[ this.i ].value ? "value" : "innerHTML") ] = ( b ? ctmp+v : v );
		return this;
		}
	return ctmp;
	},	
	val:function( a, b, c ){
	return this.content( a, b, c );
	},
	valInt:function( a ){
	return this.val( a, 0, "Int");
	},
	valText:function( a, b ){
	return this[ this.i ].textContent && !a ? node.textContent :
	       this[ this.i ].textContent && a  ? 
		( b ? this[ this.i ].textContent += a : this[ this.i ].textContent = a ) :
		this.val( a, b ); 
	},
	outer:function( a ){
	return this[this.i].outerHTML;
	},

});

/*DOM*/
jno2.extend( jno2.node.prototype,
{
	/*delete an element*/
	del:function( ){
		this.each(function( hdl ){
			if( hdl.parentNode )
			jno2._rm( 	
				hdl.parentNode,
				hdl
			);;	
		});
	return void 0;
	},
	child:function( a ){
	return jno2( 
		jno2.child( this[ this.i ], jno2.parseSelector( a ) ) 
		);
	},
	t:function( ){
		var t;
		console.log( t=jno2.traversing( this[ this.i ], jno2.parseSelector( "#tt" ) ) );
		
		console.log( jno2.sort(
			{length:0},
			jno2.parseSelector( "#foo" ),
		undefined,
		t
		) );
	},
	clone:function( ){
		if( !this[ this.i ].cloneNode ){
			return this[ this.i ].cloneNode( 
				true 
			);
		}else{
			console.log( jno2( "<"+this[ this.i ].nodeName.toLowerCase( ) +">" ) )
		}
	},
	app:function( a ){
		var slf = this;
		/*an object jno2*/
	return a instanceof jno2.node ?
		(jno2.each( a ,function( hdl ){
			slf.each(function( _h, i  ){
				if( jno2.isDOM( _h ) )
				_h.appendChild( 
					hdl
				);;
			return 1;
			});
		return 1;
		}),this ) : 
		/*DOM element*/
		jno2.isDOM( a ) || typeof a === "string" ?
		this.each(function( hdl ){
			
			jno2.isDOM( a ) ?
			hdl.appendChild( a ) :
			jno2( hdl ).val( a );
		return 1;			
		}) : this;				
	},
	getParent:function( ){
	return jno2( this[ this.i ].parentNode );
	},
	/*work with domHanler.children method*/
	get:function( k ){
	return this[ this.i ].children.length > 0 ?
	       jno2( this[ this.i ].children[ ( k || (this.c = this.c >= 0 && this.c < this[ this.i ].children ? this.c : 0 ) ) ] ) :
	       null
	},
	prev:function( ){
	return this.get( this.c-- );
	},
	next:function( ){
	return this.get( this.c++ );
	},
	first:function(){
	return this.get( this.c = 0 );
	},
	/**/
	insertBefore:function( ){

	},
	insertAfter:function( ){

	},
	any:function( slctr, callback ){
		var slf = this;

		jno2.sort( {length:0},  jno2.parseSelector( slctr ), function( hdl, i ){
			callback.call( jno2( hdl ), hdl, i );
		}, this[ this.i ] );
		/*jno2.each( jno2( slctr ), function( hdl, i ){
			callback.call( 
				jno2( slf ),
				hdl,
				i
			);
		return 1;
		});*/
	return this;
	},
});



jno2.sizer = function( hdl, a, b ){
var ret,
h = jno2.each( hdl, function( hdl ){
	ret = jno2.size( hdl, a, b );
return 1;
}) 
return ( b !== undefined ? h : ret );
};

/*size*/
jno2.extend( jno2.node.prototype,
{
	width:function( a ){
	return jno2.sizer( 	
		this,
		"width",
		a
		);
	},
	height:function( a ){
	return jno2.sizer( 	
		this,
		"height",
		a
		);
	},
	top:function( a ){
	return jno2.sizer( 	
		this,
		"top",
		a
		);
	},
	left:function( a ){
	return jno2.sizer( 	
		this,
		"left",
		a
		);
	},
	offset:function( a ){
		if( "height,width,top,left".split(",").indexOf( a ) > -1 ){
			return this[ this.i ][ "offset"+a.upper( 1 ) ] ?
			       this[ this.i ][ "offset"+a.upper( 1 ) ] :  0;
		}
	return {
		width : this[ this.i ].offsetWidth, height: this[ this.i ].offsetHeight,
		top:  this[ this.i ].offseTop, leff:  this[ this.i ].offsetLeft
		};
	},
	// since jno2
	inWidth:function( ){
		var tmp;

		tmp = this.width( );
		console.log( ( this.width( ) + jno2.dint( this.css("padding") ) ) );
		 if( tmp = bdr.exec( this.css("border" ) ) ){
			console.log( ( this.width( ) + jno2.dint( this.css("padding") ) + parseInt( tmp[1] ) * 2  ) );
			this.css("width",( this.width( ) + jno2.dint( this.css("padding") ) + parseInt( tmp[1] ) * 2  ));
		}
	return ( this.width( ) + jno2.dint( this.css("padding") ) + parseInt( tmp[1] ) * 2  );
	},

});

jno2.show  = function( hdl ){
return {
	show:true,
};
};
/*events*/
jno2.extend( jno2.node.prototype,
{
	show:function( ){

	},
	hide:function( ){

	},
	token:function( ){

	},
	
	focus:function( ){
		this[ this.i ].focus( );
	return this;
	},
	on:function( a, b, c ){
	return arguments.length === 2 || arguments.length === 3 ? this.each(function( hdl ){
			jno2.events.attach( 
				hdl,
				a,
				b,
				this
			);
		return 1;
		}) : this;
	},
	unon:function( a, c ){
	return this.each(function( hdl ){
			hdl.removeEventListener(
				a,
				c,
				true
			);
		return 1;
		});
	},
});

/* extend but can be removed */
/* base convert */
jno2.node.prototype.base =jno2.base = slf.base = (function( ){

	function __( a,b,f){
		var i = t = 0,
		    ret = "";
		try{
			if( a == 0 )
			ret = f.call( 
				null,
				ret,
				0
			);;

			while( Math.floor( a ) > 0 ){
				
				t = Math.floor( a%b );
				a/= b;
				
				ret = f.call(
					null,
					ret,
					t
				);				
			}	
			t = ret.split("").reverse().join("");
		}catch(e){ console.log( e ); };
	return t;
	}
return{
	dec2bin:function( a ){
	return __( a, 2, function( r, d ){
		return r+d;
		});
	},
	dec2oct:function( a ){
	return __( a, 8, function( r, d ){
		return r+d;
		});
	},
	dec2hex:function(a){
	var al = "abcdef";
	return __( a, 16, function( r, d ){
		return r+( d < 10 ? d : al[ d-10 ] );
		});	
	},
	ibase:function( a, b, c){
	return __( a, b, typeof c === "function" ? c : function( r,d ){
		return r+""+d;
	});
	},
	/*
	* sizeof == 1,2,4,8
	*/
	round:function( t, sizeof ){
	return Math.abs( Math.pow( 2, sizeof || 1 )-t.length ) !== 0 ? 
	  String.prototype.repeat( "0", Math.abs( Math.pow( 2, sizeof || 1 )-t.length ) )+t : t
	},
	dec2hext:function( a, sizeof ){
		var t,a,b,c,d;
		
		sizeof = sizeof === 4 ? 3 : sizeof === 8 ? 4 : sizeof;
		if( a < 0 ){
			t = this.around( this.dec2hex( ( ( a >> 24 )&0xff ) ), 1 ) + ""+
			    this.around( this.dec2hex( ( ( a >> 16 )&0xff ) ), 1 ) + ""+
			    this.around( this.dec2hex(  ( a >> 8  )&0xff ), 1 ) + ""+
			    this.around( this.dec2hex(  ( a&0xff )  ), 1 );
		}else
		t = this.dec2hex( 
			a
		);;

	return this.round( 
		t, sizeof
	);	
	},

	hex2dec:function( hex ){
	return parseInt( hex, 16 );
	}

	};
})( );
/**/
function __gtype( a, b ){
return typeof a === "number" ? "number" :
	typeof a === "string" && /^([\dabcef]{1,2})*$/.test( a ) ?
	"hex" : "string";
}
jno2.vscanf = function( ){
	var argv = [],
	    value="",r= "",
	    tmp,j=0;

	jno2.each( arguments, function( val, i ){
		
		i === 0 ?
		value = val :
		argv.push( val );

	return 1;
	});	
	
	try{
		while( ( tmp = /(\%{1}(i|h|d|c|o|b|x(\d{1,2})))/.exec( value ) ) ){
	
			// i,d => int, str, hex **
			// h,x => int, str, hex *
			// c   =>  int, str, hex**
			// o   => int, hex, str *
			// b   => nt, str, 	*
			r = "";
			if( __gtype( argv[ j ] ) == "string" ){
				
				jno2.each( argv[ j ],function( v ){
					r += tmp[2] == "i" || tmp[2] == "d" ?
					v.charCodeAt( 0 ) :
					tmp[2] == "c" ? v :
					jno2.base[( tmp[2] == "h" || tmp[2] == "x02" ? "dec2hex":tmp[2] == "o" ? "dec2oct" : "dec2bin" ) ]( 
						v.charCodeAt( 0 ) 
					);
				return 1;
				}); 
			}else if( __gtype( argv[ j ] ) == "number" ){
				r = tmp[2] == "i" || tmp[2] == "d" ?
				argv[ j ] :
				tmp[2] == "c" ? String.fromCharCode(argv[ j ]) :
				jno2.base[( tmp[2] == "h" || tmp[2] == "x02" ? "dec2hex":tmp[2] == "o" ? "dec2oct" : "dec2bin" ) ]( 
					argv[ j ] 
				);

			}
			
			
			value = value.replace(
				tmp[1],
				( r || "" )
			);
			j++;
		}
	
	}catch(e){console.log( e );};	
	
return value;
};

slf.jno2 = jno2;

})( self || window );


function str_format( ){}
