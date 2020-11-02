const args = process.argv.slice(2);

let index = 0;

if (args.length >= 1) {

  for (let char of args) {
    let c = parseInt(char);
    if (!isNaN(c) && c > 0) {

      setTimeout(function() {
        process.stdout.write('\x07');
      }, (c * 200));
    }
  };

};
