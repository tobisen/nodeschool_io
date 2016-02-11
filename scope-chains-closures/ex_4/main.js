function foo() {
  var bar;
  quux = 1;

  function zip() {    
    var quux = 0;
    bar = true;
  };
  return zip;
}
