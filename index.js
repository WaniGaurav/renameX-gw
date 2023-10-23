const fs = require('fs');
const replaceThis = "gurav";
const replaceWith = "Gaurav";
let preview = true;
try {
    fs.readdir("data", (err, data)=>{

        // console.log(data)
        for (let index = 0; index < data.length; index++) {
            const item = data[index];            
            let newFile = "data/" + item.replaceAll(replaceThis, replaceWith)
            // if (preview) {
                if ("data/" + item !== newFile ) {
                    console.log(item + " Will be rename to " + newFile)
                    fs.rename("data/"+ item, newFile,()=>{
                        console.log(item +" Rename Successful to " +newFile)
                    })
                }   
            // }
            // else {
            //     preview = false;
            // }
        }
  })
} catch (err) {
  console.error(err);
}
