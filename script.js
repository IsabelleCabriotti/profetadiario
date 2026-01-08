function verificarSenha() {
  const senhaCorreta = "safofa";
  const senhaDigitada = document.getElementById("senha").value.toLowerCase();

  if (senhaDigitada === senhaCorreta) {
    document.getElementById("jornal").classList.add("hidden");

    const carta = document.getElementById("carta");
    carta.classList.remove("hidden");
  } else {
    document.getElementById("erro").innerText =
      "⚠️ Esta edição não é destinada a trouxas.";
  }
}

