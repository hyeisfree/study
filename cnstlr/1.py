import random

# 10번의 랜덤 숫자를 생성하기 위한 빈 리스트 생성
random_numbers = []

# 10번 랜덤 숫자 생성 후 리스트에 추가
for _ in range(10):
    random_number = random.randint(1, 100)  # 1부터 100 사이의 랜덤 숫자 생성
    random_numbers.append(random_number)

# 생성된 랜덤 숫자를 출력 또는 다른 작업에 활용할 수 있음
print(random_numbers)
