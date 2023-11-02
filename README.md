# drop
drop is with resize

```
//usage
// drop(cb,size)

drop(async file=>{
  if (!file) {
    return;
  }
  var img = new Image()
  document.body.append(img)
  img.src = URL.createObjectURL(file)

})
```
