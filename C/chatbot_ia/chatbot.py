import json
import random
with open('intents.json', encoding='utf-8') as archivo:
    datos = json.load(archivo)
def obtener_respuesta(mensaje_usuario):
    mensaje_usuario = mensaje_usuario.lower()
    for intent in datos['intents']:
        for patron in intent['patterns']:
            if patron.lower() in mensaje_usuario:
                return random.choice(intent['responses'])
    return 'No entiendo tu pregunta.'
