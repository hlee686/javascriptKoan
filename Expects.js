describe("Expect에 관해서", function() {

  // 지금 부터 expect의 사용법을 학습합니다.
  // 우리가 테스트 해볼 값이 true인지를 검사합니다.
  it("테스트 하고 싶은 값이 true 인지를 검사합니다.", function() {
    expect(false).toBeTruthy(); // 이 코드는 우리가 기대하는 값이 true이여야 한다는 뜻입니다.
    // expect(테스트 하고 싶은 값)
  });

  // 테스트를 하기위해서는 우리가 실제 값이 우리가 원하는 값과 같은지 비교하여야합니다.
  it("두 값의 일치 여부를 검사합니다.", function () {
    let expectedValue = FILL_ME_IN;
    let actualValue = 1 + 1;

    expect(actualValue === expectedValue).toBeTruthy();
  });

  // 조금 더 멋진 방법으로 비교를 해봅시니다.
  it("조금 더 괜찮은 방법으로 일치 여부를 검사합니다.", function () {
    let expectedValue = FILL_ME_IN;
    let actualValue = 1 + 1;

    // toEqual()는 ==와 비슷하게, 보이는 모습이 같은지를 비교합니다.
    expect(actualValue).toEqual(expectedValue);
    // 2 == '2' => true
  });

  // 하지만 "type"도 같은지 확인해야할 경우도 있겠죠.
  it("===를 사용해 일치 여부를 검사합니다.", function () {
    let expectedValue = FILL_ME_IN;
    let actualValue = (1 + 1).toString(); // "2"

    // toBe()는 ===와 비슷하게, 대상의 'type'도 같은지 비교합니다.
    expect(actualValue).toBe(expectedValue);
    // 2 === '2' => false, 2 === 2 => true
  });

  // 문제를 해결하며 FILL_ME_IN을 만나게 되면 FILL_ME_IN을 테스트를 통과하도록
  // 변경해야합니다.
  // 아래 테스트를 통과하기 위해서 FILL_ME_IN을 무엇으로 변경해야 할까요?
  it("'FILL_ME_IN'에 정확한 값을 입력했는지 검사합니다.", function () {
    expect(1 + 1).toEqual(FILL_ME_IN);
  });
});