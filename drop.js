import "https://hashsan.github.io/compressorjs/dist/compressor.js"

function resize(file,width,filter){return new Promise((sol,rej)=>{
  new Compressor(file, {
    quality: 0.6,
    maxWidth:width||512,
    beforeDraw(context) {
      if(filter){
        context.filter = filter;//'grayscale(100%)';
      }
    },    
    success:d=>sol(d),
    error:d=>rej(d),
  })
})}

function drop(cb,size,filter){
  var dde=document.documentElement
  dde.ondragover=function(e){
    e.preventDefault();  
  }
  dde.ondrop=async function(e) {
    e.preventDefault();
    if(!cb) throw new Error('need cb')
    var file = e.dataTransfer.files ? e.dataTransfer.files[0] : null
    if (!file) {
      return;
    }
    var cfile = await resize(file,size,filter)
    cb(cfile)//////
  }
}

window.drop = drop ////////

////////////////////////////
////////////////////////////
/*
drop(async file=>{
  if (!file) {
    return;
  }
  var img = new Image()
  document.body.append(img)
  img.src = URL.createObjectURL(file)

})
*/
