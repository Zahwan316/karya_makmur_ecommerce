import {create} from "zustand"

const useAkunStore = create((set) => ({
    akun:[],
    isLogin:false,
    setakun:(data) => set(() => ({akun:data})), 
}))

export default useAkunStore;