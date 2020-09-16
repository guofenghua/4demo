import $axios from "../http";

// 获取菜单列表
export async function menuList() {
    let res = await $axios.get("/menulist?istree=1")
    console.log(res.data.list)
    return res.data.list
};

// 添加菜单
export function menuAdd(data) {
    console.log(data)
    let res = $axios.post("/menuadd", data)
    console.log(res)
    return res
};

// 修改菜单
export function menuEdit(data) {
    let res = $axios.post("/menuedit", data)
    return res

};
// 删除
export function menuDel(id) {
    let res = $axios.post("/menudelete", { id })

    return res
};