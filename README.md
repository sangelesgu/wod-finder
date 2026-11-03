# Wod-Finder

## Descripció

Wod-Finder és una aplicació web desenvolupada amb Angular que permet consultar entrenaments, visualitzar-ne les característiques i filtrar-los per nom i categoria.

## Tecnologies i versions

- Node.js: 24.15.0
- npm: 11.12.1
- Angular: 22.x
- Angular CLI: 22.x
- TypeScript
- SCSS

## Instal·lació

Clonar el repositori:

```bash
git clone https://github.com/sangelesgu/wod-finder.git
cd ioc-angular-wod-finder-samuel-angeles
```

Instal·lar les dependències:

```bash
npm install
```

## Execució

```bash
ng serve
```

Obrir `http://localhost:4200/` al navegador.

## Branca de treball

Els canvis de l'EAC2 s'han desenvolupat a la branca:

`ra2-components`

## Components creats

- **WodList:** mostra el llistat d'entrenaments i comunica les seleccions.
- **WodCard:** mostra la informació individual de cada entrenament.
- **WodCategoryComponent:** mostra la categoria mitjançant una etiqueta.
- **WodFilters:** permet cercar i filtrar entrenaments.

## Funcionalitats

- Llistat d'entrenaments amb dades mock.
- Cerca per nom i filtratge per categoria.
- Validació del formulari.
- Selecció d'entrenaments i visualització del detall.
- Comptador de resultats i missatge quan no hi ha coincidències.
- Interfície responsive i millores d'accessibilitat.

## Repositori

https://github.com/sangelesgu/wod-finder
