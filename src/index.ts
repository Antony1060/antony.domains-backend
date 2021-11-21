import { config as dotenvConfig } from 'dotenv';
dotenvConfig()

import Express from 'express';
import { log } from './util/log';
import { getAllDomains } from './api/cloudflare';

const app = Express();

app.get("/", async (_, res) => {
    res.status(200).json({
        status: 200,
        domains: await getAllDomains()
    })
})

app.use((_, res) => {
    res.status(404).json({
        status: 404
    })
})

app.listen(process.env.PORT, () => {
    log("INFO", `Listening on ${process.env.PORT}`)
})