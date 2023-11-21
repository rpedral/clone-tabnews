function status(request, response) {
  //response.status(200).send("Acima da média");
  response.status(200).json({ chave: "Acima da média" });
}

export default status;
