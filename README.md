📄 README – Simulador de Ahorro Digital 

## Descripción

Este repositorio contiene la solución al reto técnico Simulador de Ahorro Digital, implementado con:

    •   Next.js 16.0.7 (App Router)
    •   React 19.2.0 
    •   TypeScript
    •   SCSS modules
    •   ISR con revalidate
    •   crypto.randomUUID
    •   Debounce manual

## Estructura del proyecto

/
├── app/
│   ├── layout.tsx
│   ├── globals.scss
│   ├── products/
│   │   ├── page.tsx
│   │   └── products.module.scss
│   ├── simulator/
│   │   ├── page.tsx
│   │   └── simulator.module.scss
│   ├── onboarding/
│   │   ├── page.tsx
│   │   └── onboarding.module.scss
│   └── components/
│   │   ├── BackButton/
│   │   │   ├── BackButton.tsx
│   │   │   ├── backButton.module.scss
│   │   ├── Card/
│   │   │   ├── Card.tsx
│   │   │   ├── card.module.scss
│   │   ├── Input/
│   │   │   ├── Input.tsx
│   │   │   ├── input.module.scss
│   │   ├── Onboarding/
│   │   │   ├── Onboarding.tsx
│   │   │   ├── onboarding.module.scss
│   │   ├── ProductList/
│   │   │   ├── ProductList.tsx
│   │   │   ├── productList.module.scss
│   │   ├── ProductsClient
│   │   │   ├── ProductsClient.tsx
│   │   │   ├── productsClient.module.scss
│   │   ├── ProductList/
│   │   │   ├── SimulatorClient.tsx
│   │   │   ├── simulatorClient.module.scss
|   └── lib/
│       └── debounce.ts
│   └── data.json
└── README.md
/

## Funciones implementadas

    •   Carga de productos desde un archivo JSON
    •   Filtros por nombre o tipo
    •   Debounce de 300ms para evitar renders innecesarios
    •   Renderizado usando ISR (Incremental Static Regeneration)

## Elección de ISR

✔ ISR es ideal porque:
    1.  Los productos no cambian constantemente (provienen de un JSON local).
    2.  Genera HTML estático, lo que mejora:
        •   velocidad de carga
        •   SEO
        •   rendimiento en dispositivos móviles
    3.  Permite regenerar la página cada cierto tiempo sin enlentecer el build.
    4.  Reduce la carga de servidores en producción.
    5.  Está alineado con buenas prácticas para catálogos financieros.

✔ SSR sería mejor si:
    •   Los productos cambiaran cada minuto.
    •   El contenido dependiera del usuario (cookies, sesión, personalización).
    •   Se consumieran APIs altamente dinámicas.

## Simulador

El usuario ingresa:
    •   Monto inicial
    •   Aporte mensual
    •   Tiempo en meses

La aplicación:
    •   Valida cada campo
    •   Formatea la salida en COP
    •   Calcula un estimado mediante interés compuesto

Fórmula usada: 
MontoFinal = MontoInicial * (1 + r)^m 
           + AporteMensual * [((1 + r)^m - 1) / r]

           Parámetros:
    •   r = rentabilidad según el producto elegido
    •   m = meses

+
## Onboarding

Incluye:
    •   Nombre
    •   Documento
    •   Email
    •   Recaptcha simulado 

✔ Lógica
    •   Si token !== "OK" → error visual
    •   Si es válido → genera solicitud con: crypto.randomUUID()

## Instalación y ejecución en desarrollo (local) 

```bash
npm install
# or
yarn add
# or
pnpm add
# or
bun add
```

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Abrir en [http://localhost:3000](http://localhost:3000) con el navegador deseado para ver el resultado.
