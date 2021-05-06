
const isExist = (menus, key, val, result = []) => {
    menus.forEach(data => {
        data[key] === val && result.push(data)
        data.children && data.children.length && isExist(data.children, key, val , result)
    })
    return result
}

export default isExist
