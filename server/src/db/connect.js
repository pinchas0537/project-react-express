import fs from "fs/promises"

const path = "C:/Users/Public.user/Documents/front/project_react_express/server/src/db/data.json"

export async function readfile(path) {
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