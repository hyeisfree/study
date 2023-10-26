/* 최대 공약수를 구하는 방법인 유클리드 알고리즘 사용하기! 
참고: https://window6kim.tistory.com/40
두 정수의 최대 공약수를 빠르게 구하는 방법
A > B 일 때 A와 B의 최대 공약수는 B와 나머지 R의 최대 공약수와 같다.
1. 큰 수(A)를 작은 수(B)로 나눈다. (A > B)
2. 나누는 수(B)를 나머지(R)로 계속 나눈다.
3. 나머지 0이 나오면 나누는 수가 최대 공약수가 됨.

/* ex) 2304와 1440의 최대 공약수 구하기 
1. 2304(A) % 1440(B) = 1(몫) 864(나머지, R)
2. 1440(B) % 864(1번의 R) = 1(몫) 576(새로운 R)
3. 864 % 576 = 1(몫) 288(나머지)
4. 576 % 288 = 2(몫) 0(나머지) <- 최대 공약수는 288.
*/

// 코드로 구현하기!

const A = 2304;
const B = 1440;

const gcd = (A, B) => {
  let R = A % B;
  return B === 0 ? num1 : gcd(B, R);
};