function star2ndpattern () {
    for (let i = 0; i < 5; i++) {
        let line = '';
        for (let j = 0; j < 5; j++) {
          if (j >= i) {
            line += '* ';
          } else {
            line += '  ';
          }
        }
        console.log(line);
      }
}

star2ndpattern()