Package.describe({
  summary: "meteor sql bindings for server-side calls"
});

Npm.depends({ "newrelic": "1.0.1" });

Package.on_use(function(api) {
  if (api.export) api.export('newrelic', 'server');	
  api.add_files('newrelic_npm.js', 'server');
});

