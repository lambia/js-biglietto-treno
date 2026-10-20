# TRACCIA
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

# MILESTONE 1:
Pagina base, niente CSS:
input per il numero di chilometri
un bottone
Con l'evento click, recuperiamo i chilometri e stampiamo in console l'importo base.
Ricordatevi che i value delle input sono sempre stringa  

# MILESTONE 2:
Aggiungiamo:
un div vuoto per il risultato
una select per la fascia d'età
Modifichiamo l'evento per considerare l'età, applicare lo sconto e scrivere il risultato nel div.

# MILESTONE 3:
Stampate il *prezzo arrotondando* a 2 decimali dopo la virgola
Se volete, racchiudete le input, select e button in un *<form>* e gestitene l'evento submit, invece del click sul bottone.
Aggiungete un input per il nome del viaggiatore
Stampate un risultato che riporti nome, prezzo base, tariffa/età applicati, prezzo aggiornato

# MILESTONE 4 - BONUS
Potete aggiungere del CSS a piacimento e verificarvi di aver gestito eventuali *errori* come input vuote o non valide.

# NOTE
E' davvero molto importante seguire l'ordine delle milestone.
Non preoccuparti se non riesci a svolgere tutto: le milestone sono in ordine di importanza!
Le percentuali ti fanno tribolare? Inventa uno sconto qualunque da applicare: il focus sono eventi e manipolazione del DOM.
