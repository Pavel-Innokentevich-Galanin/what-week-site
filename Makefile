# = = = = = = = = = = = = = = = = help

help:
	#   + ---------------- + ------------------------------------ +
	#   | Command          | Description                          |
	#   + ---------------- + ------------------------------------ +
	#   | make dev         | yarn start                           |
	#   |                  |                                      |
	#   | make prod-up     | docker-compose up                    |
	#   | make prod-d      | docker-compose up -d                 |
	#   | make prod-down   | docker-compose down                  |
	#   | make prod-remove | docker-compose down --remove-orphans |
	#   | make prod-ps     | docker-compose ps                    |
	#   | make prod-logs   | docker-compose logs                  |
	#   + ---------------- + ------------------------------------ +

# = = = = = = = = = = = = = = = = development

dev:
	npm run start

# = = = = = = = = = = = = = = = = production

prod-up: help
	docker-compose -f prod.docker-compose.yml build
	docker-compose -f prod.docker-compose.yml up

prod-d: help
	docker-compose -f prod.docker-compose.yml build
	docker-compose -f prod.docker-compose.yml up -d

prod-down: help
	docker-compose -f prod.docker-compose.yml down

prod-remove: help
	docker-compose -f prod.docker-compose.yml down --remove-orphans

prod-ps: help
	docker-compose -f prod.docker-compose.yml ps

prod-logs: help
	docker-compose -f prod.docker-compose.yml logs
