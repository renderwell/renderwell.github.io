# Keble UIPrototype UI development Makefile

default: dev

dev: node_modules bower_components

node_modules: package.json
	npm install

bower_components: bower.json
	bower install

clean:
	rm -rf node_modules
	rm -rf bower_components

clean_dev: clean dev

