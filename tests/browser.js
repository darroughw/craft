test("Craft.Browser", function() {

  ok(RegExp(Craft.Browser.toClassName().replace(/ie\s/, "").replace(/\d/, " $&"), "i").test(window.navigator.userAgent))
});