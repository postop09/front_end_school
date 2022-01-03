const fs = require('fs');

fs.readFile('./username.csv', 'utf8', (err, data) => {
  let fixdata = data.split('\n').map(i => i.split(', '))
  console.log(err);
  console.log(fixdata);
  for (let i = 1; i < fixdata.length; i++) {
    // console.log(`${fixdata[i][0]}`)
    fs.mkdir(`${fixdata[i][0]}`, (err)=>{
      console.log(err)
    });
    // console.log(fixdata[i][0], fixdata[i][1], fixdata[i][2]);
    console.log(fixdata[i])
    // for (let j = 0; j < fixdata[0].length; j++) {
    //   fs.appendFile(`${fixdata[i]}`, `${fixdata[i][j]}`, (err)=>{
    //     console.log(fixdata[i][j]);
    //     console.log(err)
    //   });
    // }
  }
})