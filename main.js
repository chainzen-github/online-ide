let editor = document.querySelector("#editor");


// by default we can have remix theme
ace.edit(editor, {
  mode: "ace/mode/solidity",
});

//  theme: "ace/theme/twilight",
//  theme: "ace/theme/cobalt",