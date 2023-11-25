import { Octokit } from "https://esm.sh/@octokit/core"
import "https://hashsan.github.io/drop/drop.js?v=3"
import "//hashsan.github.io/use/use.js";


var typemap = {
  "image/png" :'.png', 
  "image/jpeg":'.jpg', 
  "image/gif" :'.gif',
  "image/webp":'.webp',
  "image/tiff":'.tiff',
  "image/avif":'.avif',
  "text/plain":'.txt',
  "text/html":'.html'
}


function base64Decode(text, charset) {
  charset=charset||'utf-8';
  return fetch(`data:text/plain;charset=${charset};base64,` + text)
    .then(response => response.text());
}

function base64Encode(...parts) {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.onload = () => {
      const offset = reader.result.indexOf(",") + 1;
      resolve(reader.result.slice(offset));
    };
    reader.readAsDataURL(new Blob(parts));
  });
}  

function getGhp(){
  var d = "ghp_"
  /**/
  + "9ah8c3yojjO"
  + "EsWBOP6CSiMAMj"
  + "mcDcF1UGrhv"    
  return d;
}

async function _up(file,name){

  if(/^text/.test(file.type)){
    throw new TypeError('file is image only')
    return
  }    
  const f = file //await resize(file)
  const rename ='i'+fn.makeday()+'_'+fn.rkana(6)+typemap[f.type||file.type];  
  name = name||rename


  var env={
    owner:'hashsan',
    repo:'outputs',
    path:'img/'+name,
    auth:getGhp()
  }
  const {owner,repo,path,auth} = env
  const encode=base64Encode  
  const octokit = new Octokit({auth})

  return octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
    owner,
    repo,
    path,
    message: 'image',
    content: await encode(file),
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
}

export async function upimage(file,name){
  var res = await _up(file,name)
  if(!res){
    return console.log('null')
  }
  //console.log(res)
  var url = res.data.content.download_url
  return url;

}

if(window) window.upimage = upimage
