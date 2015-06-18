# Read more about app structure at http://docs.appgyver.com

module.exports =

  rootView:
    location: "http://localhost/index.html"

  drawers:
    left:
      id: "leftDrawer"
      location: "app/templates/leftmenu.html"
      showOnAppLoad: false
    options:
      animation: "swingingDoor"

  