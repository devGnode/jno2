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
| Dom Handle | An DOM object |
| "\<div\>" | new DOM elements |
| tagName .,#,[attib='value'] | options tag name |
| .,#,tagName > 1 | exclure bigger than x, default ( * ) all |
| .,#,tagName < 1 | exclure  smaller than x, default ( * ) all |
| .,#,tagName : 1 | select an element |

| Example      | Comment |
| ------------- |:-------------:|
| jno2("input[ype='text'] < 2") | take the elements smaller than 2 |
| jno2("input[ype='text'] > 2") | take the elements bigger than 2 |
| jno2(".foo : 2") | take element who's equal to 2 |

### .rmClass( *String* className )
remove a class of one elements DOM this function will return current object jno2
```javascript
var node = jno2( selector );
  node.rmClass("foo")
```

### .isClass( *String* className )
Check if a class existing in an element DOM return **boolean**
```javascript
var node = jno2( selector );
  if( node.isClass("foo") ){
    // existing
   }
```
### .addClass( *String* className )
add a class an element DOM
```javascript

jno2( selector ).addClass( "foo" );
  
```

### .Class( *String* className )
link to addClass
```javascript
jno2( selector ).Class( "foo" );
```

### .id( [ void ||   *String* id ] )
add id or get id name
```javascript
 //add
jno2( selector ).id( "foo" );
 //get
jno2( selector ).id( );
```
### .made( [ *JSON* attibuts || *String* attribName, *String* attribValue ] )
modifiy an object
```javascript

jno2( selector ).made( { 
  type:"text",name:'foo',value:"mailto"
  } );
 
jno2( selector ).made( "type", "text" );
```
### .css( [ *JSON* attibuts || *String* cssRuleName, *String* cssRuleValue ] )
modifiy css rule(s)
```javascript

jno2( selector ).made( { 
  background:"#fff",textAlign:'center',fontFamily:"Arial"
  } );
 
jno2( selector ).made( "fontSize", "15px" );
```

### .data( [  *JSON* attibuts || *String* dataName, *String* dataValue || *String* dataGetValue || *String* dataGetValue ] )
modifiy dataset value(s)
```javascript

jno2( selector ).data( { 
  foo:"bar", bar:1
  } );
 
jno2( selector ).data( "bar", 150 );
jno2( selector ).data( "bar" ); // == 150
```
### .dataInt( [  *JSON* attibuts || *String* dataName, *String* dataValue || *String* dataGetValue ] )
```javascript
 
( typeof jno2( selector ).dataInt( "bar ) === "number");
```

### .dataFloat( [  *JSON* attibuts || *String* dataName, *String* dataValue || *String* dataGetValue ] )
```javascript
jno2( selector ).dataFloat( "bar", 1.25 )
jno2( selector ).dataFloat( "bar"); // 1.25
```
### .attr( [ *JSON* attibuts || *String* attribName, *String* attribValue || *String* value ] )
modifiy an object
```javascript

jno2( selector ).attr( { 
  type:"text",name:'foo',value:"mailto"
  } );
 
jno2( selector ).attr( "type", "text" );
jno2( selector ).attr( "type" ); // get value

```
## :two: Node methods

### .del( void )
Delete node
```javascript

jno2( selector ).del( );

```
### .child( *String* selector )
try to resolve a child(s) in order to return it.
```javascript

jno2( selector ).child("div < 5");

```
### .clone(  void )
return a clone of current node.
```javascript

jno2( selector ).clone( );

```

### .app(  *Object* jno2 || *Object* DOMElement )
add a child node into the current node.
```javascript

jno2( selector ).app( jno2('div>') );
jno2( selector ).app( DOM );

```

### .getParent(  void )
```javascript

jno2( selector ).getParent( );

```
### .get(  void || *int* element )

these function get, prev and next who're represented below : allow to browse children elements quickly of his parent,but not in deeply, for browse it in depply use **.child** or **.any** function. 

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

### .any(  *String* Selector, *Handle* callback )
try to resolve a child(s) in order to return it by the callback.
```javascript

jno2( selector ).any("input[type='text']",function( hdl, i ){
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

## :three: jno2.base or jno2( selector ).base 
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

### jno2.vscanf

Like printf in c,c++ language, more or less.

| Type     | Output  | argv |
| ------------- |:-------------|:-------------|
| %i         | Integer           |  Integer, string, strHexValue  |
| %c          | Character |  Integer, String, strHexValue  |
| %h or %x02         | Hexadecimal            |  Integer, String, strHexValue  | 
| %b    | Binary            |  Interger, String  |
| %o   | Octal            |  Integer, String  |


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
