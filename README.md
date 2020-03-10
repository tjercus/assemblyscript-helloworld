# About

A JavaScript app interacting with a compiled WASM module written in assemblyScript (~TypeScript)

# Compiling

## installing assemblyScript

npm install -g assemblyscript

## compiling from ts (script) to wasm (binary)

asc calculator.ts -b calculator.wasm

# Running on Ubuntu

## add a line to /etc/mime.types

application/wasm wasm

## then from the project dir, run

python3 -m http.server

## in the browser open

http://localhost:8000
