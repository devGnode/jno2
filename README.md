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

### .rmClass( String className )
remove a class of one elements DOM this function will return current object jno2
```javascript
var node = jno2( selector );
  node.rmClass("foo")
```

### .isClass( String className )
Check if a class existing in an element DOM return **boolean**
```javascript
var node = jno2( selector );
  if( node.isClass("foo") ){
    // existing
   }
```
### .addClass( String className )
add a class an element DOM
```javascript

jno2( selector ).addClass( "foo" );
  
```

### .Class( String className )
link to addClass
```javascript
jno2( selector ).Class( "foo" );
```

### .id( [ void ||   String id ] )
add id or get id name
```javascript
 //add
jno2( selector ).id( "foo" );
 //get
jno2( selector ).id( );
```
### .made( [ JSON attibuts || String attribName, String attribValue ] )
modifiy an object
```javascript

jno2( selector ).made( { 
  type:"text",name:'foo',value:"mailto"
  } );
 
jno2( selector ).made( "type", "text" );
```
### .css( [ JSON attibuts || String cssRuleName, String cssRuleValue ] )
modifiy css rule(s)
```javascript

jno2( selector ).made( { 
  background:"#fff",textAlign:'center',fontFamily:"Arial"
  } );
 
jno2( selector ).made( "fontSize", "15px" );
```

### .data( [  JSON attibuts || String dataName, String dataValue || String dataGetValue ] )
modifiy dataset value(s)
```javascript

jno2( selector ).data( { 
  foo:"bar", bar:1
  } );
 
jno2( selector ).data( "bar", 150 );
jno2( selector ).data( "bar" ); // == 150
```
### .dataInt( [  JSON attibuts || String dataName, String dataValue || String dataGetValue ] )
```javascript
 
( typeof jno2( selector ).dataInt( "bar ) === "number");
```

### .dataFloat( [  JSON attibuts || String dataName, String dataValue || String dataGetValue ] )
```javascript
jno2( selector ).dataFloat( "bar", 1.25 )
jno2( selector ).dataFloat( "bar"); // 1.25
```

### .on( String eventCaller, Handle callback )
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

## jno2.base or jno2( selector ).base 
### jon2.base.dec2bin( uint x )
```javascript
jno2.base.dec2bin(15); // "1111"
```
### jon2.base.dec2hex( uint x )
```javascript
jno2.base.dec2hex(57005); // "DEAD"
```
### jon2.base.hex2dec( String hex )

First argument accept only poisitive numbers type uint, if your digit is negative so used .dec2hext function below, who accept negative digits but by this way you hould indication the size of this one.

```javascript
jno2.base.dec2bin(128); // "200"
```

### jon2.base.dec2hext( uint x, int sizeof )

| Type     | Value ( sizeof ) | Bits |  Output  |
| ------------- |:-------------|:-------------|:-------------|
| BYTE          | 1  *default*            |  8   |  0x00  |
| WORD          | 2            |  16  | 0x0000  |
| DWORD         | 4            |  32  |  0x00000000 |
| QWORD         | 8            |  64  | 0x0000000000000000  |
```javascript
jno2.base.dec2hext( -128, ( 1 || 2 || 4 || 8 ) ); // "80"
```
### jon2.base.arround( str r, int sizeof )
```javascript
jno2.base.arround("f", 2 ); // "000f"
```
### jon2.base.dec2oct( uint x )
```javascript
jno2.base.dec2oct(15); // "1111"
```

### jno2.vscanf

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
