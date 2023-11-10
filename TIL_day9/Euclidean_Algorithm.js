// 최대 공약수를 구하는 방법인 유클리드 알고리즘 사용하기!
/* 
1. 두 수를 A % B 이렇게 나눠서 나머지(R1)가 생김.
2. 그 다음 B % R1을 나눔 -> R2 셍김.
3. R1 % R2를 나눔 -> R3 생김.
4. R2 % R3을 나누고! 나머지가 0 없으면,
결론: 두 수 A와 B의 최대공약수는 나머지가 0이 되기 전의 마지막 나머지 R3가 됨.
*/

function greatest(a, b) {
  if (b === 0) return a;
  return greatest(b, a % b);
}

const getGCD = (a, b) => (b ? getGCD(b, a % b) : a);
const gcd = getGCD(numerator, denominator);

/* 바로 위에 있는 코드를 풀어서 쓰면, const getGCD = (a, b) => {
  return b ? getGCD(b, a % b) : a;
}; 재귀함수
*/
