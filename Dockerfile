# Dockerfile para Next.js - Otimizado com Standalone Output

# 1. Estágio de Dependências
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./
RUN npm install

# 2. Estágio de Build
FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# 3. Estágio de Produção
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copia os arquivos da build standalone
COPY --from=builder /app/.next/standalone ./
# Copia os assets estáticos e a pasta public
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["node", "server.js"]
