describe("Function에 관해서", function() {

  it("function을 선언하는 법을 학습합니다.", function() {

    function add(a, b) {
      return a + b;
    }

    expect(add(1, 2)).toBe(FILL_ME_IN);
  });

  it("함수 scope에 관해서 학습합니다.", function () {
    let message = "Outer";

    function getMessage() {
      return message;
    }

    function overrideMessage() {
      let message = "Inner";
      return message;
    }

    expect(getMessage()).toBe(FILL_ME_IN);
    expect(overrideMessage()).toBe(FILL_ME_IN);
    expect(message).toBe(FILL_ME_IN);
  });

  it("scope chain에 관해 학습합니다.", function () {
    let variable = "top-level";

    function parentfunction() {
      let variable = "local";

      function childfunction() {
        return variable;
      }

      return childfunction();
    }
    expect(parentfunction()).toBe(FILL_ME_IN);
  });

  it("클로저 함수에 관해 학습합니다.", function () {

    function makeIncreaseByFunction(increaseByAmount) {
      return function (numberToIncrease) {
        return numberToIncrease + increaseByAmount;
      };
    }

    const increaseBy3 = makeIncreaseByFunction(3);
    const increaseBy5 = makeIncreaseByFunction(5);

    expect(increaseBy3(10) + increaseBy5(10)).toBe(FILL_ME_IN);
  });

  it("함수에서 전달인자를 다루는법을 학습합니다.", function () {

    function returnFirstArg(firstArg) {
      return firstArg;
    }

    expect(returnFirstArg("first", "second", "third")).toBe(FILL_ME_IN);

    function returnSecondArg(firstArg, secondArg) {
      return secondArg;
    }

    expect(returnSecondArg("only give first arg")).toBe(FILL_ME_IN);

    function returnAllArgs(...args) {
      let argumentsText = '';

      for (let i = 0; i < args.length; i += 1) {
        argumentsText = argumentsText + args[i];
      }

      return argumentsText;
    }

    expect(returnAllArgs("first", "second", "third")).toBe(FILL_ME_IN);
  });

  it("함수 표현식(변수에 함수를 선언하는 방법)을 학습합니다.", function () {

    const appendRules = function (name) {
      return name + " rules!";
    };

    const appendDoubleRules = function (name) {
      return name + " totally rules!";
    };

    const praiseSinger = { givePraise: appendRules };
    expect(praiseSinger.givePraise("John")).toBe(FILL_ME_IN);

    praiseSinger.givePraise = appendDoubleRules;
    expect(praiseSinger.givePraise("Mary")).toBe(FILL_ME_IN);

  });

});