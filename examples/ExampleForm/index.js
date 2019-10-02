import React from "../../node_modules/react";
import ReactDOM from "../../node_modules/react-dom";
import FormattedInput from "../../src/FormattedInput";
import { createFormat } from "../../src/FormattedInput";
import ExampleForm from "./exampleForm";
const phoneFormats = [
  "",
  "+_",
  "+_ _",
  "+_ __",
  "+_ (___) ",
  "+_ (___) _",
  "+_ (___) __",
  "+_ (___) ___ - ",
  "+_ (___) ___ - _",
  "+_ (___) ___ - __",
  "+_ (___) ___ - ___",
  "+_ (___) ___ - ____",
  "+__ (___) ___ - ____",
  "+___ (___) ___ - ____"
];

const dateFormats = [
  "",
  "_",
  "__/",
  "__/_",
  "__/__/",
  "__/__/_",
  "__/__/__",
  "__/__/___",
  "__/__/____"
];
const rootEl = document.getElementById("example-form");
ReactDOM.render(
<div>
  <FormattedInput value={""} formatter={createFormat(phoneFormats, "_")} />
  <FormattedInput value={""} formatter={createFormat(dateFormats, "_")} />
</div>
, rootEl);