.EXPORT_ALL_VARIABLES:

PATH := /usr/local/opt/node@10/bin:$(PATH)

all:

init:
	@echo "Run 'npx @docusaurus/init@latest init mhost classic mhost.pustina.de' in directory above this one"


local:
	npm start

build:
	npm run build

deploy:
	@if [ -z $${GIT_PASS+x} ]; then echo "Set env var 'GIT_PASS' to GITHUB token"; exit -1; fi
	GIT_USER=lukaspustina npm run deploy	


dev_env:
	@echo export PATH=$(PATH)


