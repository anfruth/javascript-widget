$(document).ready(function() {
  view = new view();
  controller = new formController(view);
  controller.listen();
})

//attempt to fix tab issue on github