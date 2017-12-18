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

### .rmClass( String className )
remove a class of one elements DOM return **this**
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
| keypess      | [13,,,...]  | Enter touch |
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
