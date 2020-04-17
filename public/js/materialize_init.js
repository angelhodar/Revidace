document.addEventListener('DOMContentLoaded', function() {
    var selects = document.querySelectorAll('select');
    var select_instances = M.FormSelect.init(selects);
    var navs = document.querySelectorAll('.sidenav');
    var nav_instances = M.Sidenav.init(navs);
    var tabs = document.querySelectorAll('.tabs');
    var tabs_instances = M.Tabs.init(tabs);
    var collapsibles = document.querySelectorAll('.collapsible');
    var collap_instances = M.Collapsible.init(collapsibles);
});