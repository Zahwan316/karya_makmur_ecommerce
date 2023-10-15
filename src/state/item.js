import {create} from "zustand"

const useItemStore = create((set) => ({
    kategori:[],
    setkategori:(data) => set(() => ({kategori:data}))
}))

export default useItemStore