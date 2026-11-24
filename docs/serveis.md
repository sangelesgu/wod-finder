# Serveis HTTP

## WodService

El servei `WodService`, ubicat a `src/app/services/wod.service.ts`, centralitza la comunicació entre l'aplicació Angular i l'API local de json-server.

Utilitza `HttpClient` per realitzar les peticions HTTP.

## URL de l'API

La URL base està centralitzada al fitxer `src/app/constants/api.constants.ts`.

```ts
export const API_URL = 'http://localhost:3000';
```

El recurs utilitzat és `/wods`.

## Mètodes disponibles

### getWods()

Realitza una petició HTTP GET per obtenir tots els entrenaments de l'API.

Les dades rebudes es transformen mitjançant `WodAdapter.toModelList()` abans de retornar-les.

### createWod()

Realitza una petició HTTP POST per crear un nou entrenament.

La resposta de l'API es transforma mitjançant `WodAdapter.toModel()`.

### searchWods()

Envia el terme de cerca a través d'un `Subject` de RxJS.

La propietat `searchResults$` utilitza `switchMap` per gestionar les peticions de cerca i evitar que les peticions anteriors continuïn condicionant els resultats quan arriba una cerca nova.

La consulta utilitza `name:contains` per permetre coincidències parcials en el nom dels entrenaments.

## Gestió d'errors

Les cerques utilitzen `catchError` per capturar els errors de comunicació amb l'API.

El servei exposa `searchError$`, que permet comunicar els errors al component principal.

Els errors de càrrega inicial i de creació es propaguen a través dels observables perquè els components responsables els puguin gestionar.

## Estats de la interfície

El component principal `App` gestiona:

- **Càrrega:** mostra un indicador mentre s'executa una petició.
- **Èxit:** mostra els entrenaments retornats per l'API.
- **Error:** mostra un missatge quan no es pot completar la petició.
- **Reintent:** permet repetir l'última consulta mitjançant el mètode `retryLastQuery()`.
