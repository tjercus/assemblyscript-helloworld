import { wasmBrowserInstantiate } from "./wasmBrowserInstantiate.js";

const runWasmAdd = async () => {
  console.log("runWasmAdd ...");

  const wasmModule = await wasmBrowserInstantiate("./calculator.wasm");

  console.time("add");
  // Call the Add function export from wasm, save the result
  const addResult = wasmModule.instance.exports.add(24, 24);
  console.timeEnd("add");

  // Set the result onto the body
  document.body.textContent = `addResult from WebAssembly: ${addResult}`;

  console.log("... runWasmAdd");
};
console.log("index loaded, starting runWasAdd ...");
runWasmAdd().then(console.log);
