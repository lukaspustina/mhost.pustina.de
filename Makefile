.EXPORT_ALL_VARIABLES:

all:

init:
	@echo "Run 'npx @docusaurus/init@latest init mhost classic mhost.pustina.de' in directory above this one"


local:
	npm start

build:
	npm run build

deploy:
	USE_SSH=true npm run deploy


dev_env:
	@echo export PATH=$(PATH)


