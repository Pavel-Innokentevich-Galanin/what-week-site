## Docker

### Установка Docker и docker-compose

```bash
sudo apt update
sudo apt install -y docker.io docker-compose

sudo groupadd docker
sudo gpasswd -a $USER docker
newgrp docker
reboot
```

### Установка make

```bash
sudo apt update
sudo apt install -y make
```

### Запуск контейнера

```bash
make ssh-d      # docker-compose -f ssh.docker-compose.yml up -d
make ssh-ps     # docker-compose -f ssh.docker-compose.yml ps
make ssh-logs   # docker-compose -f ssh.docker-compose.yml logs
# make ssh-remove # docker-compose -f ssh.docker-compose.yml down --remove-orphans
```
