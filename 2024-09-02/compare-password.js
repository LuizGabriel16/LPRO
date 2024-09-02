const bcrypt = require('bcrypt');

async function comparePassword() {
    const data = "minhasenha"
    const encrypted = "$2b$10$lfxAHzRxYcp.zVap/nVfBuWn44f1Nn37ZCZ4PwYi6Fcdj6LEWJnZK"

    const result = await bcrypt.compare(data, encrypted);

    console.log(result);
}

comparePassword();