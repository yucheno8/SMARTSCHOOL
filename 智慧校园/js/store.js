// 从localStorage中读取数据
function getData() {
    // 如果本地localStorage中不存在数据
    if(!localStorage.getItem('geojson')) {
        localStorage.setItem('geojson', '[]')
    }

    return JSON.parse(localStorage.getItem('geojson'))
}

// 将数据保存到localStorage中
function saveData(data) {
    localStorage.setItem('geojson', JSON.stringify(data))
}