Package.describe({
  summary: "Meteor Package for jQuery Transit - Super-smooth CSS3 transformations and transitions for jQuery."
});

Package.on_use(function (api) {

        api.add_files('jquery.transit.js', ['client']);
        api.use('jquery', 'client');
});
