## Kubernetes

### Установка virtualbox

```bash
sudo apt update
sudo apt install -y virtualbox
```

### Установка kubectl

```bash
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
curl -LO "https://dl.k8s.io/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl.sha256"
echo "$(cat kubectl.sha256)  kubectl" | sha256sum --check
sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
# kubectl version --client
```

### Установка minikube

```bash
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube
# minikube version
```

### Создание кластера

```bash
minikube start --cpus=2 --memory=2gb --disk-size=20gb --vm-driver=virtualbox

kubectl get componentstatuses
kubectl cluster-info
kubectl get nodes
kubectl get pods
```

Если перезагрузили компьютер, то запускаем кластер так:

```bash
minikube start
```

> ### Pod
> 
> ```bash
> kubectl apply -f pod-what-week-site.yaml
> 
> kubectl get pods
> kubectl describe pods what-week-site
> kubectl logs what-week-site
> 
> kubectl port-forward what-week-site 2222:80
> 
> # kubectl get pods
> # kubectl delete -f pod-what-week-site.yaml
> # kubectl get pods
> ```

### Deployment

```bash
kubectl apply -f deployment-what-week-site.yaml

kubectl get pods
kubectl describe pods what-week-site-deployment-585799df87-kswbd
kubectl logs what-week-site-deployment-585799df87-kswbd

kubectl port-forward what-week-site-deployment-585799df87-kswbd 2222:80

# kubectl get pods
# kubectl delete -f deployment-what-week-site.yaml
# kubectl get pods
```

> ### Создание кластера на Google Cloud
> 
> ```bash
> gcloud init                                                         # соединяемся с Google Cloud
> gcloud services enable container.googleapis.com                     # включаем Google API
> gcloud container clusters create rsiot-po4-190333-cluster           # создаем кластер
> gcloud components install gke-gcloud-auth-plugin                    # установка SDK для работы с kubectl
> gcloud container clusters get-credentials rsiot-po4-190333-cluster  # переключаемся на кластер
> kubectl cluster-info            
> kubectl get componentstatuses      
> kubectl get nodes   
> ```
> 
> ```bash
> gcloud container clusters get-credentials rsiot-po4-190333-cluster
> 
> kubectl apply -f deployment-what-week-site.yaml
> kubectl get deployments
> kubectl get pods
> 
> kubectl port-forward ms3-deployment-7bbb9d8ff9-fdqzh 8888:80
> 
> # kubectl delete -f deployment-what-week-site.yaml
> # kubectl get deployments
> # kubectl get pods
> ```
