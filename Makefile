check: lint test

lint:
	./node_modules/.bin/jshint *.js

test:
	./node_modules/.bin/tape test.js

.PHONY: check lint test
