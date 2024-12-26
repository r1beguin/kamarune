include .env

start:
	@echo "$(COLOR_LIGHT_GREEN)Starting up containers for $(PROJECT_NAME)...$(COLOR_NC)"
	@docker compose up -d --remove-orphans

stop:
	@echo "$(COLOR_LIGHT_GREEN)Stopping containers for $(PROJECT_NAME)...$(COLOR_NC)"
	@docker compose down

frontend-install:
	@echo "$(COLOR_LIGHT_GREEN)Installing frontend dependencies...$(COLOR_NC)"
	@docker compose exec frontend npm install $(filter-out $@,$(MAKECMDGOALS))

reload:
	@make start
	@docker compose exec -T frontend npm run start