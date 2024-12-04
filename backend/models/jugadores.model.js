import { Schema, model } from "mongose";

const EsquemaJugadores = new schema({
    name: String,
    apepat:String,
    numero: Number
})

const ModeloJugadores = model('tabla de jugadores', EsquemaJugadores)