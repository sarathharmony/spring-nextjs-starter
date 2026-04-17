# spring-nextjs-starter

Parent-app kit: Spring Boot (Java 17 + Maven) backend + Next.js frontend.
Clone it with:

```bash
ace createapp spring-nextjs-starter my-app
cd my-app
./ace-setup.sh
ace run
```

- Backend: http://localhost:3000 (`mvn spring-boot:run`)
- Frontend: http://localhost:3001 (`next dev -p 3001`, proxies /api/* to backend)
- Health: http://localhost:3000/api/health

## Prereqs

- Java 17+ and Maven on your PATH
- Node 20+ and pnpm 9+

## Layout

```
packages/
  backend/   Spring Boot app (Maven, Java 17)
  frontend/  Next.js 14 app router
```

Published via ACE Engine's parent-app flow.
