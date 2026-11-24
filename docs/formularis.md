# Formularis reactius

## WodFilters

El component `WodFilters`, ubicat a `src/app/components/wod-filters/wod-filters.component.ts`, implementa el formulari de cerca mitjançant `ReactiveFormsModule` d'Angular.

El formulari permet filtrar els entrenaments pel nom i per categoria.

## Camps del formulari

| Camp     | Tipus       | Validació                                            |
| -------- | ----------- | ---------------------------------------------------- |
| search   | FormControl | Longitud mínima de 3 caràcters i validació asíncrona |
| category | FormControl | Selecció de categoria                                |

## Validacions

### Validació síncrona

S'utilitza `Validators.minLength(3)` per exigir un mínim de tres caràcters en el terme de cerca.

### Validació asíncrona

El validador `wodExistsValidator`, ubicat a `src/app/validators/wod-exists.validator.ts`, consulta l'API per comprovar si existeixen entrenaments que coincideixin amb el terme introduït.

S'aplica una espera de 400 ms abans de realitzar la consulta.

### Missatges de validació

El formulari mostra missatges informatius durant la validació i missatges d'error quan el terme no compleix les condicions establertes.

## Historial de cerques

El component manté un historial de fins a cinc termes de cerca vàlids mitjançant `localStorage`.

Característiques:

- Desa els termes de cerca vàlids.
- Evita duplicats consecutius.
- Recupera l'historial en carregar l'aplicació.
- Permet seleccionar una cerca anterior.
- Gestiona possibles errors de lectura i escriptura amb `try/catch`.

La clau utilitzada a `localStorage` és:

`wod-finder-search-history`

## Neteja del formulari

El botó de restabliment permet netejar els camps del formulari i recuperar els valors inicials.

## Comunicació amb el component principal

El component utilitza l'`EventEmitter` `filtersChanged` per comunicar els criteris de cerca i categoria al component principal `App`.
