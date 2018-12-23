# jno2

formerly gnode

## :one: API documentation

```javascript
var node = jno2( selector );
```
| selector       | Comment     |
| ------------- |:-------------:|
| #      | id  |
| .      | class name     | 
| tag name div| tag name     |
| Handle DOM | An object DOM |
| "\<div\>" | new DOM elements |
| tagName .,#,[attib='value'] | options tag name |
| .,#,tagName > 1 | exclure bigger than x, default ( * ) all |
| .,#,tagName < 1 | exclure  smaller than x, default ( * ) all |
| .,#,tagName : 1 | select an element |

| Example      | Comment |
| ------------- |:-------------:|
| jno2("input[ype='text'] < 2") | take the elements smaller than 2 |
| jno2("din.foo > 2") | take the elements bigger than 2 |
| jno2(".foo : 2") | take element who's equal to 2 |
## Attributes

### .length

Length of object 

### .i

Offset of target node selected

## Methods

### .eq( void || *int* node )

```javascript
  node.eq( 0 );
  node.eq( ); // current taget node
```

### .start( void )

return first element obtained
```javascript
  node.start( );
```
### .end( void )

return last element obtained
```javascript
  node.end( );
```

### .add( *int* node ) <= 1.2

```javascript
  jno2("div").add( jno2("a") )
  jno2("div").add( jno2("<a>") )
  jno2("div").add( DOMElement )
```

### .drop( *int* node ) <= 1.2

```javascript
  jno2("div").drop( 5 )
```

### .each( *Handle* callbak )

Traverses each element who were obtained previously.
```javascript
  node.each( function( hdl, i ){
    // this === node
    console.log( hdl );
  });
```
**example**:

```html
<div class="a"></div>
<div class="b"></div>
<div class="c"></div>
```

```javascript
var node = jno2("div");
  node.eq( 1 ); // .b
  node.start( ); // .a
  node.end( ); // .c
```

## :two: DOM Attributes

### .rmClass( *String* className )
Remove a class of one elements DOM this function will return current object jno2
```javascript
var node = jno2( selector );
  node.rmClass("foo")
```
### .classSwitch( *String* classFrom, *String* ClassTo )
Remove a class of one elements DOM this function will return current object jno2
```javascript
var node = jno2( selector );
  node.classSwitch("foo", "bar" );
```

### .isClass( *String* className || RegExp value )
Check if a class existing in an element DOM return **boolean**
```javascript
var node = jno2( selector );
  if( node.isClass("foo") ){
    // existing
   }
```
```javascript
var node = jno2( selector ),
   tmp;

  if( node.isClass(/foo\-\d+/) ){
    console.log( tmp ); ==> [foo-125,foo-256 ... ]
    // existing
   }
```

### .addClass( *String* className )
Add a class to an element DOM
```javascript

jno2( selector ).addClass( "foo" );

### .Class( *String* className )
link to addClass
```javascript
jno2( selector ).Class( "foo" );
```

### .toggleClass( *String* classNameA, *String* classNameB )
If A exists then remove it and add B

```javascript

jno2( selector ).addClass( "foo", "bar" );
  
```
### .id( [ void ||   *String* id ] )
Add an id to an element, or getting this value.
```javascript
 //add
jno2( selector ).id( "foo" );
 //get
jno2( selector ).id( );
```
### .made( [ *JSON* attibuts || *String* attribName, *String* attribValue ] )
Modifiy attribtes of an object.
```javascript

jno2( selector ).made( { 
  type:"text",name:'foo',value:"mailto"
  } );
 
jno2( selector ).made( "type", "text" );
```
### .css( [ *JSON* attibuts || *String* cssRuleName, *String* cssRuleValue ] )

Modifiy css rule(s)
```javascript

jno2( selector ).made( { 
  background:"#fff",textAlign:'center',fontFamily:"Arial"
  } );
 
jno2( selector ).made( "fontSize", "15px" );
```

### .data( [  *JSON* attibuts || *String* dataName, *String* dataValue || *String* dataGetValue ] )

Modifiy dataset value(s).
```javascript

jno2( selector ).data( { 
  foo:"bar", bar:1
  } );
 
jno2( selector ).data( "bar", 150 );
jno2( selector ).data( "bar" ); // == 150
```
### .dataInt(  *String* dataName [ , *String* dataValue ]    )
```javascript
 
( typeof jno2( selector ).dataInt( "bar ) === "number");
```

### .dataFloat( *String* dataName [ , *String* dataValue ]  )
```javascript
jno2( selector ).dataFloat( "bar", 1.25 )
jno2( selector ).dataFloat( "bar"); // float 1.25
```
### .dataBool(  *String* dataName [ , *String* dataValue ]  )
```javascript
jno2( selector ).dataFloat( "bar", 1 )
jno2( selector ).dataFloat( "bar"); // Bool true 
```
### .html(  *String* HTMLValue  )
InnerHTML - use for Select tag
```javascript
jno2( selector ).html( "<b>foo</b>" )
```
### .outer(  void  )
outerHTML - use for Select tag
```javascript
jno2( selector ).outer(  ) // <b>foo</b>
```
### .val(  *String* dataName [ , *Bool* add ]  )
outerHTML - use for Select tag
```javascript
jno2( selector ).val(  ) // foo
jno2( selector ).val( "bar", 1 ) // foobar
jno2( selector ).val( "bar" ) // bar
```
### .valInt(  *int* inputInt )
outerHTML - use for Select tag
```javascript
jno2( selector ).valInt(  ) // 12
jno2( selector ).valInt( 12 ); 
```
### .valText(  *string* input [ , *Bool* Add ] )
see native HTML.textContent

### .len(  void  )
return string length.
```javascript
// "Hello"
jno2( selector ).len(  ) // 4
```
### .bind(  *String* NameHandler [, *String* argv,,,, ]   )
return string length.
```javascript

jno2( selector ).bind("onclick", "foo", "bar" );

// this == jno2 Object

```

### .attrib( [ *JSON* attibuts || *String* attribName, *String* attribValue || *String* value ] )
Modifiy the attributes of an object.
```javascript

jno2( selector ).attr( { 
  type:"text",name:'foo',value:"mailto"
  } );
 
jno2( selector ).attr( "type", "text" );
jno2( selector ).attr( "type" ); // get value

```
## :three: Node methods

### .del( void )
Delete node
```javascript

jno2( selector ).del( );

```

### .empty( void )
Delete all node
```javascript

jno2( selector ).empty( );

```

### .dom( int Elementno )
Delete node
```javascript

jno2( selector ).dom( 0 ); // HTMLDOMElement

```

### .child( *String* selector )
Try to resolve a child(s) in order to return it. Select all use "\*" selector
```javascript

jno2( selector ).child("div < 5");

```
### .clone(  void )
Return a clone of current node.
```javascript

jno2( selector ).clone( );

```

### .app(  [ *Object* jno2 || *Object* DOMElement,,,, ] )
Add a child node into the current node.
```javascript

jno2( selector ).app( jno2('div>') );
jno2( selector ).app( DOM, jno2("div"), DOM,.... );

```

### .getParent(  void )
```javascript

jno2( selector ).getParent( );

```

### .parent(  void )
pointer getParent
```javascript

jno2( selector ).parent( );

```

### .get(  void || *int* element )

These function get, prev, next and first who're represented below : allow to browse children elements quickly of his parent,but not in deeply, for browse it in depply use **.child** or **.any** function. 

```javascript

jno2( selector ).get( ); // return current
jno2( selector ).get( 0 ); 

```
### .next(  void ) 

```javascript

jno2( selector ).get( 0 ); // current target 0
jno2( selector ).next( );  // current target 1

```
### .prev(  void ) 

```javascript

jno2( selector ).get( 5 ); // current target 5
jno2( selector ).prev( );  // current target 4

```
### .first(  void ) 

```javascript

jno2( selector ).first( ); // current target 0

```

### .any(  *String* Selector, *Handle* callback )
Try to resolve a child(s) in order to return it by the callback.
```javascript

jno2( selector ).any("input[type='text']",function( hdl, i ){
   // this === jno2( hdl )
  console.log( hdl );
});

```

### .on( *String* eventCaller, *Handle* callback )
```javascript
jno2( selector ).on( "click", function(  domElements [, argv ] ){
  // this === jno2( selector )
});
```

| selector       | charCode     | charCode     |
| ------------- |-------------:|:-------------|
| keypess      | [13,,,...]  | Enter key |
| keydown      |  [97,,,...]       |  A letter  |
| keyup |  [98,99,,...]       | B or C letter |

```javascript
jno2( selector ).on( "keydown[13,97,98]", function(  domElements, keyCode, targetValue ){
  // this === jno2( selector )
   switch( keyCode ){
    case 13:
    
    ...
    break;
    case 97:
    ...
    break;
   }
});
```
## :four: Size

### .width( void || *String* wsize || *int* wisze )
```javascript
jno2( selector ).width( ); // get
jno2( selector ).width("150px"); // put
jno2( selector ).width(160); // put default in px
```
### .height( void || *String* wsize || *int* wisze )
```javascript
jno2( selector ).height( ); // get
jno2( selector ).height("150px"); // put
jno2( selector ).height(160); // put default in px
```
### .top( void || *String* wsize || *int* wisze )
```javascript
jno2( selector ).topt( ); // get
jno2( selector ).top("150px"); // put
jno2( selector ).top(160); // put default in px
```
### .left( void || *String* wsize || *int* wisze )
```javascript
jno2( selector ).left( ); // get
jno2( selector ).left("150px"); // put
jno2( selector ).left(160); // put default in px
```
### .offset( void || *String* size "width"|"height"|"top"|"left" )
```javascript
jno2( selector ).offsett( ); // {
//  top
//  left
//  width
//  left
// }
;jno2( selector ).offset("top"); // get
```

## :five: jno2.base or jno2( selector ).base 

### jon2.base.dec2bin( uint x )
```javascript
jno2.base.dec2bin(15); // "1111"
```
### jon2.base.dec2hex( uint x )

First argument accept only poisitive numbers type uint, if your digit is negative so used .dec2hext function below, who accept negative digits but by this way you hould indication the size of this one.

```javascript
jno2.base.dec2hex(57005); // "DEAD"
```

### jon2.base.dec2hext( uint x, int sizeof )

| Type     | Value ( sizeof ) | Bits |  Output  |
| ------------- |:-------------|:-------------|:-------------|
| BYTE          | *default* 1           |  8   |  0x00  |
| WORD          | 2            |  16  | 0x0000  |
| DWORD         | 4            |  32  |  0x00000000 |
| QWORD         | 8            |  64  | 0x0000000000000000  |

```javascript
jno2.base.dec2hext( -128, 2 ); // "80"
```
### jon2.base.round( str r, int sizeof )

This function allow to round a hexadecimal string like this : 

| Type     | Value |  Output  |
| ------------- |:-------------|:-------------|
| BYTE          | 255 | 0xFF  |
| WORD          | 255            |   0x00FF  |
| DWORD         | 255            |  0x000000FF |
| QWORD         | 255            |   0x00000000000000FF  |

```javascript
jno2.base.arround("f", 2 ); // "000f"
```
### jon2.base.hex2dec( String hex )

```javascript
jno2.base.hex2dec( "ff" ); // "255"
```

### jon2.base.dec2oct( uint x )
```javascript
jno2.base.dec2oct(15); // "1111"
```

## jno2 


### jon2.formdata( *JSON* Elements )
```javascript
jno2.base.formdata({ elemnt1:foo, file: *Object* File, });
```

### jno2.vscanf

Look like printf in c,c++ language, more or less.

| Type     | Output  | argv |
| ------------- |:-------------|:-------------|
| %i         | Integer           |  Integer, string, strHexValue  |
| %c          | Character |  Integer, String, strHexValue  |
| %h or %x02         | Hexadecimal            |  Integer, String, strHexValue  | 
| %b    | Binary            |  Interger, String  |
| %o   | Octal            |  Integer, String  |

### jno2.regexp( *Object* RegExp, *String* Value, *Function* Callback, *Object* Ptr )
```javascript
var out = jno2.regexp( /[0-9]/, "Hell0 W0rld !",function( ){

    this == Array finder
    
   return "OK";
});

console.log( out ); // HellOK WOKrld !

var out = jno2.regexp( /[0-9]/, "Hell0 W0rld !",function( find ){

    this == ptr
    
   return "OK";
}, ptr );

console.log( out ); // HellOK WOKrld !

```

### jno2.free( obj )
```javascript

jno2.free({ foo:"bar", test:01 }) // {}

```

## String.prototype extend

### String.prototype.upper( void || int x )
```javascript
"footext".upper( ) // "FOOTEXT"
"footext".upper(1) // "Footext"
"footext".upper(2) // "FOotext"
```
### String.prototype.repeat( string value, int itr )
```javascript

"".repeat( "0", 8 ); // "00000000"

```

### String.prototype.htoChar( )
```javascript

"ffff".htoChar( ); // "ÿÿ"

```
### String.prototype.ctoHex( )
```javascript

"ÿÿ".ctoHex( ); // "ffff"
"ÿÿ".ctoHex( ).upper( ); // "FFFF"

```

### String.prototype.reg( *Object* RegExp )
pointer parse.exec( )
```javascript
"Hello Worl !".reg( /\w+/ )

```
### String.prototype.toFile( *Object* opts )

return new File Object

```javascript
opts = {
  name: String Name,
  type: String Mimes-Type "text/plain" by default,
  charset: string charset UTF-8 by default,
  
  b64: bool, // decode base64
  hex: bool, // decode hex
  bin: bool, // output binary data...

};

( new String("SGVsbG8gV29ybGQgIQ==")).toFile({ name:"FilaName.ext", type:"text/plain", b64: true })
( new String("ff000161626364")).toFile({ name:"FilaName.ext", type:"text/plain", hex: true })
( new String("SGVdqGgzVCc==")).toFile({ name:"FilaName.ext", type:"text/plain", b64: true, hex: true })

```

### String.prototype.toDDL( *Object* opts )

open a new window 

```javascript
opts = {
  name: String Name,
  type: String Mimes-Type "text/plain" by default,
  charset: string charset UTF-8 by default,
  
  b64: bool, // decode base64
  hex: bool, // decode hex
  bin: bool, // output binary data...

};

( new String("SGVsbG8gV29ybGQgIQ==")).toFile({ name:"FilaName.ext", type:"text/plain", b64: true })
( new String("ff000161626364")).toDDL({ name:"FilaName.ext", type:"application/octect-stream", hex: true, bin:true })
( new String("SGVdqGgzVCc==")).toFile({ name:"FilaName.ext", type:"text/plain", b64: true, hex: true, bin:true })

```
