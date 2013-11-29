BIN = ./node_modules/.bin
REPORTER = spec

test:
	@NODE_ENV=test $(BIN)/mocha --reporter $(REPORTER)

.PHONY: test