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
	npm deploy


dev_env:
	@echo export PATH=$(PATH)


