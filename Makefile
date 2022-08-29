dev:
	npm run start

docker-build:
	docker-compose -f docker-compose.build.yml up

docker-build-down:
	docker-compose -f docker-compose.build.yml down

docker-prod:
	docker-compose -f docker-compose.prod.yml up

docker-prod-down:
	docker-compose -f docker-compose.prod.yml down
