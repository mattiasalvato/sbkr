import FtpDeploy from 'ftp-deploy';
const ftpDeploy = new FtpDeploy();

const config = {
    user: "8713707@aruba.it",
    password: "Autoscuola1!",
    host: "ftplnx.sambobikerent.it",
    port: 21,
    localRoot: "./dist",
    remoteRoot: "/www.sambobikerent.it/",
    include: ["*", "**/*"], // Carica tutti i file e le sottocartelle
    exclude: [],
    deleteRemote: false, // Se impostato su true, cancella i vecchi file su Aruba prima di caricare i nuovi
    forcePasv: true,
    sftp: false // Imposta su true solo se il tuo piano Aruba supporta SFTP (porta 22)
};

console.log("🚀 Inizio upload automatico su Aruba...");
ftpDeploy.deploy(config)
    .then(res => console.log("✅ Deploy completato con successo!"))
    .catch(err => console.log("❌ Errore durante il deploy: ", err));