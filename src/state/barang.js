import {create} from "zustand"

const useBarangStore = create((set) => ({
    jumlah:0,
    setjumlah:(data) => set(() => ({jumlah:data}))
}))

export default useBarangStore