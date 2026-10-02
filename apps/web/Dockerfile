FROM node:24-slim
WORKDIR /app

# OpenSSL is needed for Prisma
RUN apt-get update -y && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json .
RUN npm install

COPY . .

EXPOSE 5173
CMD ["sh", "-c", "npx prisma migrate deploy && npm run dev -- --host"]
