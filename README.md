# drop
drop is with resize
```
import "https://hashsan.github.io/drop/drop.js"
```
```
//usage
// drop(cb,size)

//https://codepen.io/pinkromeo/pen/ExrgNMO?editors=0010
import "https://hashsan.github.io/drop/drop.js?v=3"

drop(async file=>{
  if (!file) {
    return;
  }
  var img = new Image()
  document.body.append(img)
  img.src = URL.createObjectURL(file)

},512)
```

# upimage
with drop

- storage
- https://github.com/hashsan/outputs/tree/main/img

```
import "https://hashsan.github.io/drop/drop.js"
import "https://hashsan.github.io/drop/upimage.js"

drop(async file=>{
  if (!file) {
    return;
  }
  var img = new Image()
  document.body.append(img)
  img.src = await upimage(file)  //<------------------------

},512)

```
