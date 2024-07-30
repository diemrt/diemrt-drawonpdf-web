# diemrt-drawonpdf-web

## Descrizione

L'applicazione gestisce la creazione e la modifica interattiva di placeholder su un documento PDF visualizzato.

## Installazione

1. Clona il repository:

```
git clone https://github.com/diego.martignoni/diemrt-drawonpdf-web.git
```

2. Entra nella directory del progetto:

```
cd diemrt-drawonpdf-web
```

3. Installa le dipendenze:

```
npm i
```

4. Avvia l'applicazione:

```
npm run dev
```

## Versione Node
La versione minima richiesta di Node.js per eseguire correttamente l'applicazione è **20.15.0**, ma deve essere inferiore a **21**.

## Uso di konvajs
L'applicazione utilizza la libreria **konvajs**, specificamente la versione per React. Puoi trovare maggiori informazioni su questa libreria [qui](https://konvajs.org/docs/react/Intro.html). Konvajs è stata scelta come base solida per realizzare funzionalità di disegno intuitive e performanti, semplificando lo sviluppo grazie alla sua API chiara e al supporto per React.

## Processo Applicativo

### Funzioni base
- `App.tsx`: Definisce lo stato iniziale dell'applicazione, inclusi i dati dei placeholder e le impostazioni della form.
- `Toolbar.tsx`: Fornisce i controlli principali per l'aggiunta, la rimozione e la selezione dei placeholder.

### Interfaccia utente
- `Canvas.tsx`:
  - Visualizza il PDF come immagine e permette l'interazione con i placeholder.
  - Calcola automaticamente le dimensioni ottimali dell'area di disegno.
  - Genera dinamicamente i rettangoli corrispondenti ai placeholder, utilizzando konvajs per gestire le interazioni (drag-and-drop, ridimensionamento).
  - Aggiorna lo stato dei placeholder tramite react-hook-form ogni volta che si verificano modifiche.
- `PlaceholdersForm.tsx`:
  - Mostra una lista dei placeholder con i loro dettagli.
  - Permette di modificare le proprietà dei placeholder (nome, ecc.) e di eliminarli.
  - Utilizza react-hook-form per la gestione degli input e la validazione dei dati.

### Gestione dei dati
- I dati dei placeholder sono gestiti centralmente in App.tsx e passati ai componenti figli tramite React Context.
- Le modifiche apportate all'interfaccia utente vengono immediatamente riflesse nello stato dell'applicazione e persistono fino a quando non vengono salvate.
- Le dimensioni dei placeholder sono scalate per adattarsi alle dimensioni dell'area di disegno e per essere visualizzate correttamente sia sulla canvas che nella form.

### Tecnologie Utilizzate

- React: Libreria JavaScript per la creazione di interfacce utente.
- konvajs: Libreria per la creazione di grafica vettoriale interattiva su HTML5 Canvas.
- react-hook-form: Libreria per la gestione di form in React.

### Note:

Le dimensioni dei placeholder sono **raddoppiate** prima di essere inviate a un eventuale backend per garantire la corretta corrispondenza con le coordinate originali del PDF.
