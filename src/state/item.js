import {create} from "zustand"

const useItemStore = create((set) => ({
    kategori:[],
    setkategori:(data) => set(() => ({kategori:data})),

    barang:[],
    setbarang:(data) => set(() => ({barang:data})),

    varian:[],
    setvarian:(data) => set(() => ({varian:data})),
}))

export default useItemStore