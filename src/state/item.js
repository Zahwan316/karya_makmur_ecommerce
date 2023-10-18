import {create} from "zustand"

const useItemStore = create((set) => ({
    kategori:[],
    setkategori:(data) => set(() => ({kategori:data})),

    barang:[],
    setbarang:(data) => set(() => ({barang:data}))
}))

export default useItemStore