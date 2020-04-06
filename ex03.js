// null 과 undefined

var myVar1;
var myVar2 = null;

console.log(myVar1 + ":" + myVar2);
console.log(typeof(myVar1) + ":" + typeof(myVar2));

console.log(myVar1 == myVar2);	// 값 비교
console.log(myVar1 === myVar2);	// 타입 비교

console.log("========================");

// == : equality, 값의 등치성, 형변환
console.log(1 == "1");	
console.log(1 === "1");	
console.log(true == 1);
console.log('abc' == new String('abc'));

console.log( true + 10);	// true --> 1로 봄.
console.log('abc' + new String('abc'));
console.log( 1 + "1" );
console.log( "1" + 1 );

console.log("========================");

// === : identity, 객체의 동일성, 형변환 x
console.log("2" === 2);
console.log(true === 1);
console.log('abc' === new String('abc'));

console.log("========================");
// 추천
// 엄격하게 형 변환을 해서 두 피연산자의 타입을 맞춰준다.
var str = "5";
console.log( parseInt(str) == 5 );
console.log( parseInt(str) === 5 );