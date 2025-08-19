#!/bin/bash
# Script para construir a imagem Docker do site Seinfo.

# Define o nome e a tag da imagem
IMAGE_NAME="seinfo-site:latest"

echo "Iniciando a construção da imagem ${IMAGE_NAME}..."

# Navega para o diretório onde o script está localizado (garante que o contexto do build seja o correto)
cd "$(dirname "$0")" || exit

# Constrói a imagem Docker a partir do Dockerfile no diretório atual
docker build -t "${IMAGE_NAME}" .

echo ""
echo "Imagem '${IMAGE_NAME}' construída com sucesso!"
echo "Para usar esta imagem, adicione o serviço correspondente ao seu docker-compose.yml e execute 'docker compose up -d'."
