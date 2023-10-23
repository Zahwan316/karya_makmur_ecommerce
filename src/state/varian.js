import {create} from "zustand"

const useVarianStore = create((set) => ({
    varian:[],
    setvarian:(data) => set((state) => ({varian:[...state.varian,data]})),
    deletevarian:(id) => set((state) => ({varian:state.varian.filter((item) => item.id != id)})),
    updatevarian:(data,id) => set((state) => ({
        varian:state.varian.map((item) => (item.id == id ? {...item,...data}:item))
    })),
}))

export default useVarianStore