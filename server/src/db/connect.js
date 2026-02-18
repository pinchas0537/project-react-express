import fs from "fs/promises"

const path = "./db/data.json"

export async function readfile() {
    try {
        const data = await fs.readFile(path, 'utf8')
        return JSON.parse(data)
    } catch (error) {
        console.log(error.message)
    }
}

export async function writefile(json) {
    const datajson = JSON.stringify(json)
    await fs.writeFile(path, datajson)
}

export async function addToFile(obj) {
    const db = await readfile(path)
    db.push(obj)
    await writefile(db)
}