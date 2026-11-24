# Models i adaptadors

## Model API: WodApi

Representa les dades rebudes des de l'API local de json-server.

Inclou els camps `id`, `name`, `description`, `category`, `date`, `durationMinutes` i `featured`.

## Model intern: Wod

Representa l'estructura de dades utilitzada pels components de l'aplicació.

El model defineix les categories disponibles mitjançant els tipus TypeScript i permet treballar amb les dades de manera consistent.

## Adaptador: WodAdapter

El fitxer `src/app/adapters/wod.adapter.ts` transforma les dades del model API al model intern.

Les normalitzacions aplicades són:

- **Identificador:** es conserva el valor original rebut de l'API.
- **Nom:** s'eliminen els espais sobrants amb `trim()`.
- **Descripció:** s'eliminen els espais sobrants amb `trim()`.
- **Categoria:** es comprova que pertanyi a les categories admeses; en cas contrari, s'assigna `For Time`.
- **Durada:** es converteix a número i, si no és vàlida, s'assigna `0`.
- **Featured:** si no està definit, s'assigna `false`.

## Taula de correspondència

| Camp API        | Camp intern     | Transformació           |
| --------------- | --------------- | ----------------------- |
| id              | id              | Es conserva             |
| name            | name            | trim()                  |
| description     | description     | trim()                  |
| category        | category        | Validació de categories |
| date            | date            | Es conserva             |
| durationMinutes | durationMinutes | Conversió numèrica      |
| featured        | featured        | Valor per defecte false |

## Ús

Els serveis HTTP utilitzen `WodAdapter` per transformar les respostes de l'API abans de retornar-les als components.
