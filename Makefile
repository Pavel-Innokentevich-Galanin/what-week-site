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
	#   |                  |                                      |
	#   | make ssh-up      | docker-compose up                    |
	#   | make ssh-d       | docker-compose up -d                 |
	#   | make ssh-down    | docker-compose down                  |
	#   | make ssh-remove  | docker-compose down --remove-orphans |
	#   | make ssh-ps      | docker-compose ps                    |
	#   | make ssh-logs    | docker-compose logs                  |
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

# = = = = = = = = = = = = = = = = ssh

ssh-up: help
	docker-compose -f ssh.docker-compose.yml build
	docker-compose -f ssh.docker-compose.yml up

ssh-d: help
	docker-compose -f ssh.docker-compose.yml build
	docker-compose -f ssh.docker-compose.yml up -d

ssh-down: help
	docker-compose -f ssh.docker-compose.yml down

ssh-remove: help
	docker-compose -f ssh.docker-compose.yml down --remove-orphans

ssh-ps: help
	docker-compose -f ssh.docker-compose.yml ps

ssh-logs: help
	docker-compose -f ssh.docker-compose.yml logs
