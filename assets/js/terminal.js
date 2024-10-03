const terminalModal = document.querySelector(".terminal-modal");
const terminal = document.querySelector(".terminal");

terminal.addEventListener("click", (e) => {
  e.stopPropagation();
});

const closeTerminal = () => {
  terminalModal.style.display = "none";
};
const openTerminal = () => {
  terminalModal.style.display = "flex";
};
