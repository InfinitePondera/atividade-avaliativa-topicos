function filtrarFaturaAcimaDeDoisMil(fatura) {
    return fatura.filter((fatura) => fatura.valor >= 2000);
}

function filtrarFaturaEntre2500e2000eData(fatura) {
    return fatura.filter((fatura) => (fatura.valor <= 2500 && fatura.valor >= 2000 && fatura.data.getMonth() <= new Date.getMonth() - 1));
}

function filtrarFaturaEntre3000e2500eData(fatura) {
    return fatura.filter((fatura) => (fatura.valor <= 3000 && fatura.valor >= 2500 && fatura.data.getMonth() <= new Date.getMonth() - 2));
}

function filtrarAcimaDe4000(fatura) {
    return fatura.filter((fatura) => (fatura.valor > 4000 && fatura.cliente.estado === "PR" || fatura.cliente.estado === "SC" || fatura.cliente.estado === "RS"));
}

module.exports = {
    filtrarFaturaAcimaDeDoisMil,
    filtrarFaturaEntre2500e2000eData,
    filtrarFaturaEntre3000e2500eData,
    filtrarAcimaDe4000
}