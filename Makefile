version=1.1.1

generate:
	$(MAKE) -C ./modules/client-generator/ generate-client service=wishlist version=${version}
push:
	bash git_push.sh
publish:
	npm publish --access public