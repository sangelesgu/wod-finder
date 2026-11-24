# Wod-Finder

Aplicació web desenvolupada amb Angular per explorar, consultar i filtrar entrenaments de CrossFit.

## Tecnologies utilitzades

- Angular 22
- TypeScript
- Node.js 24.15.0
- npm 11
- RxJS
- json-server 1.0.0-beta.15
- Reactive Forms

## Requisits previs

Per executar el projecte és necessari tenir instal·lats:

- Node.js 24.15.0 o superior
- npm
- Git

## Instal·lació

Clonar el repositori:

```bash
git clone https://github.com/sangelesgu/wod-finder.git
```

Accedir al directori:

```bash
cd wod-finder
```

Instal·lar les dependències:

```bash
npm install
```

## Execució del projecte

### 1. Arrencar l'API

En una primera terminal:

```bash
npm run api
```

L'API local estarà disponible a:

`http://localhost:3000/wods`

### 2. Arrencar Angular

En una segona terminal:

```bash
npx ng serve
```

L'aplicació estarà disponible a:

`http://localhost:4200`

## Estructura del projecte

```text
src/
├── app/
│   ├── adapters/
│   ├── components/
│   ├── constants/
│   ├── models/
│   ├── services/
│   └── validators/
├── docs/
```

La documentació tècnica es troba a la carpeta `docs/`:

- `models.md`: models de dades i adaptadors.
- `serveis.md`: serveis HTTP i gestió d'estats.
- `formularis.md`: formularis reactius, validacions i historial.

## Funcionalitats

- Consulta d'entrenaments mitjançant una API local.
- Cerca per nom amb coincidències parcials.
- Filtratge per categoria.
- Formularis reactius amb validacions síncrones i asíncrones.
- Historial de cerques persistent amb localStorage.
- Selecció d'entrenaments per consultar-ne els detalls.
- Gestió d'errors i reintent de peticions.

## Serveis HTTP

El servei `WodService` centralitza les peticions HTTP:

- GET: obtenir entrenaments.
- POST: crear entrenaments.
- Cerca reactiva mitjançant RxJS i `switchMap`.

Les dades rebudes de l'API es transformen mitjançant `WodAdapter`.

## Branca de desenvolupament

Branca de treball de l'EAC3:

`ra3-serveis`

## Comandes addicionals

Executar les proves:

```bash
npm test
```

Generar la compilació de producció:

```bash
npm run build
```
